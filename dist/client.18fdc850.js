webpackJsonp([1,2],{107:function(t,e,i){i(95);var s=i(3)(null,i(116),null,null);t.exports=s.exports},108:function(t,e,i){i(96);var s=i(3)(i(48),i(117),"data-v-596c8715",null);t.exports=s.exports},109:function(t,e,i){i(98);var s=i(3)(i(49),i(119),"data-v-a5a8d35a",null);t.exports=s.exports},110:function(t,e,i){i(94);var s=i(3)(i(50),i(115),"data-v-16b158cc",null);t.exports=s.exports},111:function(t,e,i){i(93);var s=i(3)(null,i(114),"data-v-0356c34c",null);t.exports=s.exports},112:function(t,e,i){i(97);var s=i(3)(null,i(118),"data-v-8b0d8276",null);t.exports=s.exports},113:function(t,e,i){i(99);var s=i(3)(i(51),i(120),"data-v-baa0ba90",null);t.exports=s.exports},114:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui inverted vertical footer segment"},[i("div",{staticClass:"ui center aligned container"},[i("div",{staticClass:"ui stackable inverted divided grid"},[i("div",{staticClass:"sixteen wide column"},[i("h4",{staticClass:"ui inverted header"},[t._v("News API")]),t._v(" "),i("p",[t._v("News by Bias is brought to you by News API")])])]),t._v(" "),i("div",{staticClass:"ui inverted section divider"}),t._v(" "),i("div",{staticClass:"ui horizontal inverted small divided link list"},[i("a",{staticClass:"item",attrs:{href:"https://github.com/zlshames/news-by-bias"}},[t._v("GitHub")]),t._v(" "),i("a",{staticClass:"item",attrs:{href:"https://newsapi.org"}},[t._v("News API")])])])])}]}},115:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui vertical menu"},[i("div",{staticClass:"item"},[t._v("\n    Search Articles\n    "),i("div",{staticClass:"ui input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTxt,expression:"searchTxt"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchTxt},on:{input:function(e){e.target.composing||(t.searchTxt=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"item"},[t._v("\n    Filter by Bias\n    "),i("vue-slider",{ref:"slider",staticClass:"slider",attrs:{width:t.slider.width,min:-10,max:10,data:t.slider.data,piecewise:!0,piecewiseLabel:!0,piecewiseStyle:t.slider.piecewiseStyle,labelStyle:t.slider.labelStyle,clickable:!0,processStyle:t.slider.processStyle,tooltipStyle:t.slider.tooltipStyle},model:{value:t.slider.bias,callback:function(e){t.slider.bias=e},expression:"slider.bias"}})],1)])},staticRenderFns:[]}},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-item"},[i("img",{staticClass:"poster",attrs:{src:t.item.urlToImage?t.item.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnpRRfTV56JXbzYi5WTV8SeIKXPd0AIAD_A7_xYIKRjhu1ZCvMw"}}),t._v(" "),i("div",{staticClass:"source-tag"},[t._v(t._s(t.item.source.name))]),t._v(" "),i("div",{staticClass:"news-info"},[i("h1",[i("a",{attrs:{href:t.item.url,target:"_black"}},[t._v(t._s(t.item.title))])]),t._v(" "),i("p",{staticClass:"publish-date"},[t._v(t._s(t.date))]),t._v(" "),i("p",{staticClass:"description"},[t._v(t._s(t.item.description))])])])},staticRenderFns:[]}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui inverted top fixed menu"},[i("div",{staticClass:"brand"},[t._v("News by Bias")])])}]}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article-list"},[0===t.articleList.length?i("div",{staticClass:"ui active inverted dimmer"},[i("div",{staticClass:"ui text loader"},[t._v("Loading")])]):t._e(),t._v(" "),t._l(t.articleList,function(t){return i("div",{staticClass:"item"},[i("news-item",{attrs:{item:t}})],1)}),t._v(" "),i("div",{staticClass:"centered"},[i("div",{staticClass:"ui pagination menu centered"},[i("a",{staticClass:"item",on:{click:function(e){t.$store.commit("SET_CURRENT_PAGE",1)}}},[t._v("↞")]),t._v(" "),t._l(t.pages,function(e){return t.currentPage>4&&e>t.currentPage-3&&e<t.currentPage+3?i("a",{class:[t.currentPage===e?"active":"","item"],on:{click:function(i){t.$store.commit("SET_CURRENT_PAGE",e)}}},[t._v("\n        "+t._s(e)+"\n      ")]):t._e()}),t._v(" "),t._l(5,function(e){return t.currentPage<5?i("a",{class:[t.currentPage===e?"active":"","item"],on:{click:function(i){t.$store.commit("SET_CURRENT_PAGE",e)}}},[t._v("\n        "+t._s(e)+"\n      ")]):t._e()}),t._v(" "),i("a",{staticClass:"item",on:{click:function(e){t.$store.commit("SET_CURRENT_PAGE",t.pages)}}},[t._v("↠")])],2)])],2)},staticRenderFns:[]}},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container"},[i("navigation",{staticClass:"nav"}),t._v(" "),i("div",{staticClass:"body-container"},[i("div",{staticClass:"filter-container"},[i("filters")],1),t._v(" "),i("div",{staticClass:"article-container"},[i("article-list",{attrs:{articles:t.articles}})],1)]),t._v(" "),i("foot-menu")],1)},staticRenderFns:[]}},126:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(i(44),i(43));i(45),s.a.$mount("#app")},27:function(t,e){t.exports={cnn:{bias:-5,name:"CNN"},"associated-press":{bias:0,name:"Associated Press"},"bbc-news":{bias:-2,name:"BBC"},bloomberg:{bias:-2,name:"Bloomberg"},"breitbart-news":{bias:7,name:"Breitbart"},cnbc:{bias:-3,name:"CNBC"},newsweek:{bias:-2,name:"Newsweek"},reuters:{bias:0,name:"Reuters"},"the-economist":{bias:1,name:"The Economist"},"the-guardian-uk":{bias:-2,name:"The Guardian"},"the-huffington-post":{bias:-7,name:"Huffington Post"},"the-new-york-times":{bias:-4,name:"New York Times"},"the-wall-street-journal":{bias:2,name:"Wall Street Journal"},"the-washington-post":{bias:-4,name:"Washington Post"},time:{bias:-2,name:"TIME"},"usa-today":{bias:-4,name:"USA Today"}}},43:function(t,e,i){"use strict";var s=i(56),a=i.n(s),n=i(26),r=i(124),c=(i.n(r),i(107)),o=i.n(c),u=i(46),l=i(47);i.d(e,"a",function(){return d}),i.i(r.sync)(l.a,u.a);var d=new n.a(a()({router:u.a,store:l.a},o.a))},44:function(t,e,i){"use strict";var s=i(102),a=i.n(s);window.Promise=window.Promise||a.a},45:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(100),a=i.n(s);a.a.install({onUpdateReady:function(){console.log("update ready"),a.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},46:function(t,e,i){"use strict";var s=i(26),a=i(121),n=i(113),r=i.n(n);s.a.use(a.a),e.a=new a.a({mode:"history",routes:[{path:"/",component:r.a}]})},47:function(t,e,i){"use strict";var s=i(57),a=i.n(s),n=i(26),r=i(125),c=i(27),o=i.n(c);n.a.use(r.a);var u={articles:[],filteredArticles:[],bias:0,pages:1,perPage:10,currentPage:1},l={getPages:function(t){var e=Math.ceil(t.length/u.perPage);return e<1?1:e}},d={SET_BIAS:function(t,e){t.bias=e},SET_ARTICLES:function(t,e){t.articles=[].concat(a()(e)),t.filteredArticles=[].concat(a()(e)),t.pages=l.getPages(e)},SET_FILTERED_ARTICLES:function(t,e){t.pages=l.getPages(e),t.filteredArticles=[].concat(a()(e))},SET_CURRENT_PAGE:function(t,e){t.currentPage=e},RESET_ARTICLES:function(t){t.filteredArticles=[].concat(a()(t.articles))}},f={addArticles:function(t,e){for(var i=t.commit,s=e.articles,n=e.source,r=u.articles,c=o.a[n],l=0;l<s.length;l++)s[l].source=c;r=[].concat(a()(r),a()(s));var d=function(t,e){var i=new Date(t.publishedAt),s=new Date(e.publishedAt);return i<s?1:i>s?-1:0};r.sort(d),i("SET_ARTICLES",r)},searchArticles:function(t,e){if(e&&0!==e.length){var i=[].concat(a()(u.articles));i=i.filter(function(e){return t.getters.bias>0?e.source.bias>=t.getters.bias:e.source.bias<=t.getters.bias}),i=i.filter(function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1}),t.commit("SET_FILTERED_ARTICLES",i)}},setBiasFilter:function(t,e){var i=t.commit;if(0===e)return void i("RESET_ARTICLES");i("SET_BIAS",e);var s=[].concat(a()(u.articles));s=s.filter(function(t){return e>0?t.source.bias>=e:t.source.bias<=e}),i("SET_FILTERED_ARTICLES",s)}},v={articles:function(t){return t.filteredArticles},bias:function(t){return t.bias},pages:function(t){return t.pages},currentPage:function(t){return t.currentPage},perPage:function(t){return t.perPage}},p=new r.a.Store({state:u,mutations:d,actions:f,getters:v});e.a=p},48:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(92),a=i.n(s);e.default={props:["item"],computed:{date:function(){var t=new Date(this.item.publishedAt);return a()(t,"dddd, mmmm, dS, yyyy, h:MM TT")}}}},49:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(108),a=i.n(s);e.default={props:["articles"],components:{NewsItem:a.a},computed:{pages:function(){return this.$store.getters.pages},currentPage:function(){return this.$store.getters.currentPage},perPage:function(){return this.$store.getters.perPage},articleList:function(){var t=0,e=this.articles.length;return this.currentPage>1&&(t=this.perPage*(this.currentPage-1)),t+this.perPage<e&&(e=t+this.perPage),this.articles.slice(t,e)}}}},50:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(122),a=i.n(s);e.default={components:{VueSlider:a.a},data:function(){return{searchTxt:"",slider:{bias:"Neutral",data:["Far Left","Partisan Left","Leans Left","Neutral","Leans Right","Partisan Right","Far Right"],width:window.innerWidth<768?"100%":"95%",piecewiseStyle:{width:"12px",height:"12px",backgroundColor:"#ccc"},processStyle:{backgroundColor:"#ccc"},labelStyle:{fontSize:window.innerWidth<768?"8px":"12px"},tooltipStyle:{fontSize:window.innerWidth<768?"10px":"12px"}}}},watch:{"slider.bias":function(t){var e=0;"Leans Left"===t?e=-2:"Partisan Left"===t?e=-4:"Far Left"===t?e=-6:"Leans Right"===t?e=2:"Partisan Right"===t?e=4:"Far Right"===t&&(e=6),this.$store.dispatch("setBiasFilter",e)},searchTxt:function(){this.$store.dispatch("searchArticles",this.searchTxt)}}}},51:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(58),a=i.n(s),n=i(55),r=i.n(n),c=i(27),o=i.n(c),u=i(109),l=i.n(u),d=i(110),f=i.n(d),v=i(112),p=i.n(v),m=i(111),h=i.n(m);e.default={components:{ArticleList:l.a,Filters:f.a,Navigation:p.a,FootMenu:h.a},computed:{articles:function(){return this.$store.getters.articles},isMobile:function(){return!(window.innerWidth<786)}},created:function(){function t(){return e.apply(this,arguments)}var e=r()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e in o.a)this.fetchNews(e);case 1:case"end":return t.stop()}},t,this)}));return t}(),methods:{fetchNews:function(){function t(t){return e.apply(this,arguments)}var e=r()(a.a.mark(function t(e){var i,s,n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i="https://newsapi.org/v1/articles?source="+e+"&sortBy=top&apiKey=50d30d5097d94f9bb58b0b62579188e9",t.next=3,fetch(i);case 3:return s=t.sent,t.next=6,s.json();case 6:n=t.sent,"ok"===n.status&&this.$store.dispatch("addArticles",{articles:n.articles,source:e});case 8:case"end":return t.stop()}},t,this)}));return t}()}}},93:function(t,e){},94:function(t,e){},95:function(t,e){},96:function(t,e){},97:function(t,e){},98:function(t,e){},99:function(t,e){}},[126]);
//# sourceMappingURL=client.18fdc850.js.map