(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(t,n,e){},193:function(t,n,e){"use strict";e(192)},194:function(t,n,e){"use strict";var o={methods:{goToPrev:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/"),this.$route.go(-1)}}},r=(e(193),e(19)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"button-holder",on:{click:function(n){return t.goToPrev()}}},[n("p",{staticClass:"button"},[t._v("ᐊ Back")])])}),[],!1,null,"1bef715b",null);n.a=component.exports},201:function(t,n,e){},208:function(t,n,e){"use strict";e(201)},210:function(t,n,e){"use strict";e.r(n);var o=e(2),r=(e(26),{props:["nr","id","title","content","slug"],components:{BackButton:e(194).a}}),c=(e(208),e(19)),l={scrollToTop:!0,head:function(){return{title:"Post page",meta:[{hid:"description",name:"description",content:"My description"},{hid:"ogtitle",property:"og:title",content:"Contact page"}]}},data:function(){return{posts:[]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.params,e=t.$http,n.next=3,e.$get("http://carlos.local/wp-json/wp/v2/posts?_embed");case 3:return o=n.sent,n.abrupt("return",{posts:o});case 5:case"end":return n.stop()}}),n)})))()},fetchOnServer:!0,computed:{posts:function(){return this.$store.state.posts}},components:{Post:Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"grid container main-grid"},[n("back-button",{staticClass:"back-button"}),t._v(" "),n("h3",{staticClass:"post-title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{staticClass:"paper-bg"}),t._v(" "),n("div",{staticClass:"post-images no-text",domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("p",{staticClass:"post-content no-images text-body drop-cap",domProps:{innerHTML:t._s(t.content)}})],1)}),[],!1,null,null,null).exports}},d=Object(c.a)(l,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"single-post container"},[t._l(t.posts,(function(e,o){return[t.$route.params.slug==e.slug?[n("post",{attrs:{title:e.title.rendered,content:e.content.rendered,id:e.id,nr:o,slug:e.slug}})]:t._e()]}))],2)}),[],!1,null,null,null);n.default=d.exports}}]);