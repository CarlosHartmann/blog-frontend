// Turns the HTML that WordPress delivers into the markup the site's
// typography expects. Everything here runs once per build.
import { parse } from 'node-html-parser';

const squash = (s = '') => s.replace(/[ \s]+/g, ' ').trim();
const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const isHeading = (el) => !!el && /^H[1-6]$/.test(el.tagName);

export function plainText(html = '') {
  return squash(parse(html).text);
}

function unwrap(el) {
  el.replaceWith(...el.childNodes);
}

// Editors and copy-paste leave inline styles behind. Keep the ones that carry
// meaning (indents, alignment) and drop the ones that fight the typography.
function cleanStyles(root) {
  for (const el of root.querySelectorAll('[style]')) {
    const kept = el
      .getAttribute('style')
      .split(';')
      .map((d) => d.trim())
      .filter((d) => d && !/^(font-weight\s*:\s*(400|normal)|width\s*:|font-family\s*:|font-size\s*:|color\s*:|background)/i.test(d));
    if (kept.length) el.setAttribute('style', kept.join('; '));
    else el.removeAttribute('style');
  }
  let bare;
  while ((bare = root.querySelectorAll('span').find((s) => Object.keys(s.attributes).length === 0))) unwrap(bare);
}

function figureHtml(img, captionHtml) {
  for (const name of ['class', 'style', 'sizes', 'aria-describedby', 'loading', 'decoding']) img.removeAttribute(name);
  // In the wide layout figures sit in the 320px margin; below that they span the text column.
  img.setAttribute('sizes', '(min-width: 1200px) 320px, (min-width: 800px) 700px, 100vw');
  img.setAttribute('loading', 'lazy');
  img.setAttribute('decoding', 'async');
  if (!img.getAttribute('alt')) img.setAttribute('alt', '');
  const caption = squash(parse(captionHtml || '').text) ? `<figcaption>${captionHtml}</figcaption>` : '';
  return `<figure class="gloss">${img.toString()}${caption}</figure>`;
}

function buildFigures(root) {
  for (const box of root.querySelectorAll('.wp-caption')) {
    const img = box.querySelector('img');
    if (!img) continue;
    const caption = box.querySelector('.wp-caption-text');
    box.replaceWith(figureHtml(img, caption ? caption.innerHTML : ''));
  }
  for (const img of root.querySelectorAll('img')) {
    if (img.closest('figure')) continue;
    const host = img.parentNode && img.parentNode.tagName === 'A' ? img.parentNode : img;
    const block = host.closest('p');
    const html = figureHtml(img, '');
    if (block) {
      // A figure may not live inside a paragraph: lift it out in front of it.
      block.insertAdjacentHTML('beforebegin', html);
      host.remove();
      if (!squash(block.text) && !block.querySelector('img, iframe')) block.remove();
    } else {
      host.replaceWith(html);
    }
  }
}

// The editor sometimes leaves a figure inside an otherwise empty <div>. The
// steps below look at top-level blocks, so such a wrapper would hide the
// figure from them (a trailing image would stay at the foot of the post).
function unwrapFigureWrappers(root) {
  const isWrapper = (d) =>
    Object.keys(d.attributes).length === 0 &&
    d.querySelector('figure') &&
    d.childNodes.every((n) => (n.nodeType === 1 ? n.tagName === 'FIGURE' : !squash(n.text)));
  let wrapper;
  while ((wrapper = root.querySelectorAll('div').find(isWrapper))) unwrap(wrapper);
}

// Authors separate stanzas and sections with empty paragraphs. Keep one blank
// line where they meant one, drop the ones that only pad headings or the ends.
function normaliseGaps(root) {
  for (const p of root.querySelectorAll('p')) {
    if (squash(p.text) || p.querySelector('img, iframe')) continue;
    const prev = p.previousElementSibling;
    if (!prev || prev.classList.contains('gap') || isHeading(prev) || ['HR', 'FIGURE'].includes(prev.tagName)) p.remove();
    else p.replaceWith('<div class="gap" aria-hidden="true"></div>');
  }
  for (const gap of root.querySelectorAll('.gap')) {
    const next = gap.nextElementSibling;
    if (!next || isHeading(next) || ['HR', 'FIGURE'].includes(next.tagName)) gap.remove();
  }
}

// Images placed after the last line of text are not tied to a passage, so
// they open the post instead of dangling below it.
function hoistTrailingFigures(root) {
  const blocks = root.childNodes.filter((n) => n.nodeType === 1);
  const trailing = [];
  while (blocks.length && blocks[blocks.length - 1].tagName === 'FIGURE') trailing.unshift(blocks.pop());
  if (!trailing.length || !blocks.length) return;
  const html = trailing.map((f) => f.toString()).join('');
  trailing.forEach((f) => f.remove());
  root.insertAdjacentHTML('afterbegin', html);
}

// Figures that open the text are returned separately. Together with the table
// of contents they form one block at the head of the margin (see .lead in the
// stylesheet for why that has to be a single block).
function takeLeadFigures(root) {
  const lead = [];
  for (const node of [...root.childNodes]) {
    if (node.nodeType !== 1) {
      if (squash(node.text)) break;
      continue;
    }
    if (node.tagName !== 'FIGURE') break;
    lead.push(node.toString());
    node.remove();
  }
  return lead.join('');
}

function buildHeadings(root) {
  const toc = [];
  let n = 0;
  for (const h of root.querySelectorAll('h1, h2, h3, h4')) {
    const text = squash(h.text);
    if (!text) {
      h.remove();
      continue;
    }
    if (h.tagName === 'H1') h.tagName = 'h2';
    const id = `abschnitt-${++n}`;
    h.setAttribute('id', id);
    // "1 – Titel" becomes a rubric numeral plus title.
    const numbered = /^(\d{1,2})\s*[–—-]\s*(.+)$/.exec(text);
    if (numbered) {
      h.set_content(`<span class="num">${numbered[1]}</span><span>${escapeHtml(numbered[2])}</span>`);
    }
    if (h.tagName === 'H2') toc.push({ id, num: numbered ? numbered[1] : '', text: numbered ? numbered[2] : text });
  }
  return toc.length >= 3 ? toc : [];
}

function buildEmbeds(root) {
  for (const frame of root.querySelectorAll('iframe')) {
    const src = frame.getAttribute('src') || '';
    // The no-cookie host does not track visitors until they press play.
    frame.setAttribute('src', src.replace('://www.youtube.com/embed/', '://www.youtube-nocookie.com/embed/'));
    frame.removeAttribute('width');
    frame.removeAttribute('height');
    frame.removeAttribute('frameborder');
    const block = frame.closest('p');
    const html = `<div class="embed">${frame.toString()}</div>`;
    if (block && !squash(block.text)) block.replaceWith(html);
    else frame.replaceWith(html);
  }
}

// Book typography: prose paragraphs that follow one another are set flush
// with an indent. Verse lines are short and stay untouched.
function markProse(root) {
  for (const p of root.querySelectorAll('p')) {
    const prev = p.previousElementSibling;
    const follows = prev && (prev.tagName === 'P' || prev.classList.contains('initiale'));
    if (follows && squash(p.text).length > 240 && !p.closest('blockquote')) p.classList.add('indent');
  }
  if (!root.querySelector('.initiale')) {
    const first = root.childNodes.find((n) => n.nodeType === 1 && !['FIGURE', 'H2', 'H3', 'H4'].includes(n.tagName));
    if (first && ['P', 'DIV'].includes(first.tagName) && squash(first.text).length > 300) first.classList.add('initiale');
  }
}

export function prepareContent(html = '', titleText = '') {
  const root = parse(html, { comment: false });

  let wrapper;
  while ((wrapper = root.querySelector('div.page, div.layoutArea, div.column, div.mceTemp'))) unwrap(wrapper);
  for (const b of root.querySelectorAll('b')) {
    if (/font-weight\s*:\s*(normal|400)/i.test(b.getAttribute('style') || '')) unwrap(b);
  }
  cleanStyles(root);

  // A first line that only repeats the title is noise.
  const first = root.childNodes.find((n) => n.nodeType === 1);
  if (first && ['P', 'DIV', 'H1', 'H2'].includes(first.tagName) && squash(first.text) === squash(titleText)) first.remove();

  buildFigures(root);
  unwrapFigureWrappers(root);
  buildEmbeds(root);
  normaliseGaps(root);
  hoistTrailingFigures(root);
  const toc = buildHeadings(root);
  markProse(root);

  const firstFigure = root.querySelector('figure.gloss img');
  if (firstFigure) {
    firstFigure.setAttribute('loading', 'eager');
    firstFigure.setAttribute('fetchpriority', 'high');
  }

  const lead = takeLeadFigures(root);

  const words = squash(root.text).split(' ').filter(Boolean).length;
  const running = root
    .querySelectorAll('p, div.initiale')
    .filter((el) => !el.closest('figure') && !el.closest('blockquote'))
    .map((el) => squash(el.text))
    .filter(Boolean)
    .join(' ');
  let excerpt = running.slice(0, 260);
  if (running.length > 260) excerpt = excerpt.slice(0, excerpt.lastIndexOf(' ')).replace(/[,;:–-]$/, '') + ' …';

  return { html: root.toString(), lead, toc, excerpt, words, minutes: Math.max(1, Math.round(words / 220)) };
}
