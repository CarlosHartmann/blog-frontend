#!/bin/sh
# Makes the PDF versions of the CV page (German and English) and puts them in
# public/cv/. Run it after changing the CV, then commit the two PDFs:
#   npm run cv-pdf
# It builds the site, serves it locally and lets Chrome print the CV pages
# with the print styles at the end of src/styles/global.css.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT=4199
npm run build
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory dist >/dev/null 2>&1 &
SERVER=$!
PROFILE="$(mktemp -d)"
trap 'kill "$SERVER" 2>/dev/null; rm -rf "$PROFILE"' EXIT
sleep 1
mkdir -p public/cv
"$CHROME" --headless=new --disable-gpu --user-data-dir="$PROFILE" --no-pdf-header-footer \
  --print-to-pdf="public/cv/carlos-hartmann-cv-de.pdf" "http://127.0.0.1:$PORT/cv/" 2>/dev/null
"$CHROME" --headless=new --disable-gpu --user-data-dir="$PROFILE" --no-pdf-header-footer \
  --print-to-pdf="public/cv/carlos-hartmann-cv-en.pdf" "http://127.0.0.1:$PORT/en/cv/" 2>/dev/null
ls -la public/cv
