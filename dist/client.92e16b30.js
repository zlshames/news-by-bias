webpackJsonp([1,2],{107:function(t,e,s){s(95);var a=s(3)(null,s(116),null,null);t.exports=a.exports},108:function(t,e,s){s(96);var a=s(3)(s(48),s(117),"data-v-596c8715",null);t.exports=a.exports},109:function(t,e,s){s(98);var a=s(3)(s(49),s(119),"data-v-a5a8d35a",null);t.exports=a.exports},110:function(t,e,s){s(94);var a=s(3)(s(50),s(115),"data-v-16b158cc",null);t.exports=a.exports},111:function(t,e,s){s(93);var a=s(3)(null,s(114),"data-v-0356c34c",null);t.exports=a.exports},112:function(t,e,s){s(97);var a=s(3)(null,s(118),"data-v-8b0d8276",null);t.exports=a.exports},113:function(t,e,s){s(99);var a=s(3)(s(51),s(120),"data-v-baa0ba90",null);t.exports=a.exports},114:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui inverted vertical footer segment"},[s("div",{staticClass:"ui center aligned container"},[s("div",{staticClass:"ui stackable inverted divided grid"},[s("div",{staticClass:"sixteen wide column"},[s("h4",{staticClass:"ui inverted header"},[t._v("News API")]),t._v(" "),s("p",[t._v("News by Bias is brought to you by News API")])])]),t._v(" "),s("div",{staticClass:"ui inverted section divider"}),t._v(" "),s("div",{staticClass:"ui horizontal inverted small divided link list"},[s("a",{staticClass:"item",attrs:{href:"https://github.com/zlshames/news-by-bias"}},[t._v("GitHub")]),t._v(" "),s("a",{staticClass:"item",attrs:{href:"https://newsapi.org"}},[t._v("News API")])])])])}]}},115:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui vertical menu"},[s("div",{staticClass:"item"},[t._v("\n    Search Articles\n    "),s("div",{staticClass:"ui input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTxt,expression:"searchTxt"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.searchTxt},on:{input:function(e){e.target.composing||(t.searchTxt=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"item"},[t._v("\n    Filter by Bias:\n    "),s("div",{staticClass:"ui checkbox",staticStyle:{"margin-left":"20px",float:"right"},on:{click:function(e){t.$store.dispatch("showAll",t.showAll)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.showAll,expression:"showAll"}],attrs:{type:"checkbox",name:"example"},domProps:{checked:Array.isArray(t.showAll)?t._i(t.showAll,null)>-1:t.showAll},on:{__c:function(e){var s=t.showAll,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=null,r=t._i(s,n);i?r<0&&(t.showAll=s.concat(n)):r>-1&&(t.showAll=s.slice(0,r).concat(s.slice(r+1)))}else t.showAll=i}}}),t._v(" "),s("label",{staticStyle:{"padding-left":"1.5em"}},[t._v("Show All")])]),t._v(" "),s("vue-slider",{ref:"slider",staticClass:"slider",attrs:{width:t.slider.width,min:-10,max:10,data:t.slider.data,piecewise:!0,piecewiseLabel:!0,piecewiseStyle:t.slider.piecewiseStyle,labelStyle:t.slider.labelStyle,clickable:!0,processStyle:t.slider.processStyle,tooltipStyle:t.slider.tooltipStyle},model:{value:t.slider.bias,callback:function(e){t.slider.bias=e},expression:"slider.bias"}})],1)])},staticRenderFns:[]}},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news-item"},[s("img",{staticClass:"poster",attrs:{src:t.item.urlToImage?t.item.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnpRRfTV56JXbzYi5WTV8SeIKXPd0AIAD_A7_xYIKRjhu1ZCvMw"}}),t._v(" "),s("div",{staticClass:"source-tag"},[t._v(t._s(t.item.source.name))]),t._v(" "),s("div",{staticClass:"news-info"},[s("h1",[s("a",{attrs:{href:t.item.url,target:"_black"}},[t._v(t._s(t.item.title))])]),t._v(" "),s("p",{staticClass:"publish-date"},[t._v(t._s(t.date))]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(t.item.description))])])])},staticRenderFns:[]}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui inverted top fixed menu"},[s("div",{staticClass:"brand"},[t._v("News by Bias")])])}]}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"article-list"},[t.loading?s("div",{staticClass:"ui active inverted dimmer"},[s("div",{staticClass:"ui text loader"},[t._v("Loading")])]):t._e(),t._v(" "),t._l(t.articleList,function(t){return s("div",{staticClass:"item"},[s("news-item",{attrs:{item:t}})],1)}),t._v(" "),s("div",{staticClass:"centered"},[s("div",{staticClass:"ui pagination menu centered"},[s("a",{staticClass:"item",on:{click:function(e){t.$store.commit("SET_CURRENT_PAGE",1)}}},[t._v("↞")]),t._v(" "),t._l(t.pages,function(e){return t.currentPage>4&&e>t.currentPage-3&&e<t.currentPage+3?s("a",{class:[t.currentPage===e?"active":"","item"],on:{click:function(s){t.$router.push({name:"page",params:{page:e}})}}},[t._v("\n        "+t._s(e)+"\n      ")]):t._e()}),t._v(" "),t._l(t.pages<5?t.pages:5,function(e){return t.currentPage<=4?s("a",{class:[t.currentPage===e?"active":"","item"],on:{click:function(s){t.$router.push({name:"page",params:{page:e}})}}},[t._v("\n        "+t._s(e)+"\n      ")]):t._e()}),t._v(" "),s("a",{staticClass:"item",on:{click:function(e){t.$store.commit("SET_CURRENT_PAGE",t.pages)}}},[t._v("↠")])],2)])],2)},staticRenderFns:[]}},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container"},[s("navigation",{staticClass:"nav"}),t._v(" "),s("div",{staticClass:"body-container"},[s("div",{staticClass:"filter-container"},[s("filters")],1),t._v(" "),s("div",{staticClass:"article-container"},[s("article-list",{attrs:{articles:t.articles}})],1)]),t._v(" "),s("foot-menu")],1)},staticRenderFns:[]}},126:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(s(44),s(43));s(45),a.a.$mount("#app")},27:function(t,e){t.exports={cnn:{bias:-5,name:"CNN"},"associated-press":{bias:0,name:"Associated Press"},"bbc-news":{bias:-2,name:"BBC"},bloomberg:{bias:-2,name:"Bloomberg"},"breitbart-news":{bias:7,name:"Breitbart"},cnbc:{bias:-3,name:"CNBC"},newsweek:{bias:-2,name:"Newsweek"},reuters:{bias:0,name:"Reuters"},"the-economist":{bias:1,name:"The Economist"},"the-guardian-uk":{bias:-2,name:"The Guardian"},"the-huffington-post":{bias:-7,name:"Huffington Post"},"the-new-york-times":{bias:-4,name:"New York Times"},"the-wall-street-journal":{bias:2,name:"Wall Street Journal"},"the-washington-post":{bias:-4,name:"Washington Post"},time:{bias:-2,name:"TIME"},"usa-today":{bias:-4,name:"USA Today"}}},43:function(t,e,s){"use strict";var a=s(56),i=s.n(a),n=s(26),r=s(124),c=(s.n(r),s(107)),o=s.n(c),l=s(46),u=s(47);s.d(e,"a",function(){return d}),s.i(r.sync)(u.a,l.a);var d=new n.a(i()({router:l.a,store:u.a},o.a))},44:function(t,e,s){"use strict";var a=s(102),i=s.n(a);window.Promise=window.Promise||i.a},45:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(100),i=s.n(a);i.a.install({onUpdateReady:function(){console.log("update ready"),i.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},46:function(t,e,s){"use strict";var a=s(26),i=s(121),n=s(113),r=s.n(n);a.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",component:r.a,name:"home"},{path:"/page/:page",component:r.a,name:"page"}]})},47:function(t,e,s){"use strict";var a=s(57),i=s.n(a),n=s(26),r=s(125),c=s(27),o=s.n(c);n.a.use(r.a);var l={articles:[],filteredArticles:[],bias:0,pages:1,perPage:10,currentPage:1,showAll:!1,loading:!0},u={getPages:function(t){var e=Math.ceil(t.length/l.perPage);return e<1?1:e}},d={SET_BIAS:function(t,e){t.bias=e},SET_SHOWALL:function(t,e){t.showAll=e},SET_ARTICLES:function(t,e){t.articles=[].concat(i()(e)),t.filteredArticles=[].concat(i()(e)),t.pages=u.getPages(e)},SET_FILTERED_ARTICLES:function(t,e){t.pages=u.getPages(e),t.filteredArticles=[].concat(i()(e))},SET_CURRENT_PAGE:function(t,e){t.currentPage=e},RESET_ARTICLES:function(t){t.filteredArticles=[].concat(i()(t.articles))},SET_LOADING:function(t,e){t.loading=e}},p={addArticles:function(t,e){for(var s=t.commit,a=t.dispatch,n=t.getters,r=e.articles,c=e.source,u=l.articles,d=o.a[c],p=0;p<r.length;p++)r[p].source=d;u=[].concat(i()(u),i()(r));var f=function(t,e){var s=new Date(t.publishedAt),a=new Date(e.publishedAt);return s<a?1:s>a?-1:0};u.sort(f),s("SET_ARTICLES",u),s("SET_LOADING",!1),a("setBiasFilter",n.bias)},searchArticles:function(t,e){var s=t.commit,a=t.getters;if(e&&0!==e.length){var n=[].concat(i()(l.articles));a.showAll||(n=n.filter(function(t){return a.bias>0?t.source.bias>=a.bias:t.source.bias<=a.bias})),n=n.filter(function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1}),s("SET_FILTERED_ARTICLES",n),s("SET_CURRENT_PAGE",1)}},setBiasFilter:function(t,e){var s=t.commit,a=t.getters,n=[].concat(i()(l.articles));a.showAll||(n=n.filter(function(t){return t.source.bias>=e-1&&t.source.bias<=e+1})),s("SET_BIAS",e),s("SET_FILTERED_ARTICLES",n),s("SET_CURRENT_PAGE",1)},showAll:function(t,e){var s=t.commit,a=t.dispatch,i=t.state;s("SET_SHOWALL",e),e?(s("SET_ARTICLES",i.articles),s("SET_CURRENT_PAGE",1)):a("setBiasFilter",i.bias)}},f={articles:function(t){return t.filteredArticles},bias:function(t){return Number(t.bias)},pages:function(t){return Number(t.pages)},currentPage:function(t){return Number(t.currentPage)},perPage:function(t){return Number(t.perPage)},showAll:function(t){return Boolean(t.showAll)},loading:function(t){return Boolean(t.loading)}},v=new r.a.Store({state:l,mutations:d,actions:p,getters:f});e.a=v},48:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(92),i=s.n(a);e.default={props:["item"],computed:{date:function(){var t=new Date(this.item.publishedAt);return i()(t,"dddd, mmmm, dS, yyyy, h:MM TT")}}}},49:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(108),i=s.n(a);e.default={props:["articles"],components:{NewsItem:i.a},computed:{pages:function(){return this.$store.getters.pages},currentPage:function(){return this.$store.getters.currentPage},perPage:function(){return this.$store.getters.perPage},articleList:function(){var t=0,e=this.articles.length;return this.currentPage>1&&(t=this.perPage*(this.currentPage-1)),t+this.perPage<e&&(e=t+this.perPage),this.articles.slice(t,e)},loading:function(){return this.$store.getters.loading}}}},50:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(122),i=s.n(a);e.default={components:{VueSlider:i.a},data:function(){return{searchTxt:"",showAll:!1,slider:{bias:"Neutral",data:["Far Left","Partisan Left","Leans Left","Neutral","Leans Right","Partisan Right","Far Right"],width:window.innerWidth<768?"100%":"95%",piecewiseStyle:{width:"12px",height:"12px",backgroundColor:"#ccc"},processStyle:{backgroundColor:"#ccc"},labelStyle:{fontSize:window.innerWidth<768?"8px":"12px"},tooltipStyle:{fontSize:window.innerWidth<768?"10px":"12px"}}}},watch:{"slider.bias":function(t){var e=0;"Leans Left"===t?e=-2:"Partisan Left"===t?e=-4:"Far Left"===t?e=-6:"Leans Right"===t?e=2:"Partisan Right"===t?e=4:"Far Right"===t&&(e=6),this.$store.dispatch("setBiasFilter",e)},searchTxt:function(){this.$store.dispatch("searchArticles",this.searchTxt)}},methods:{toggleShowAll:function(t){console.log(this.showAll)}}}},51:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(58),i=s.n(a),n=s(55),r=s.n(n),c=s(27),o=s.n(c),l=s(109),u=s.n(l),d=s(110),p=s.n(d),f=s(112),v=s.n(f),h=s(111),m=s.n(h);e.default={components:{ArticleList:u.a,Filters:p.a,Navigation:v.a,FootMenu:m.a},computed:{articles:function(){return this.$store.getters.articles},isMobile:function(){return!(window.innerWidth<786)}},watch:{$route:function(){this.$route.params.page&&this.$route.params.page>0&&this.$store.commit("SET_CURRENT_PAGE",this.$route.params.page)}},created:function(){function t(){return e.apply(this,arguments)}var e=r()(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$route.params.page&&this.$route.params.page>0&&this.$store.commit("SET_CURRENT_PAGE",this.$route.params.page);for(e in o.a)this.fetchNews(e);case 2:case"end":return t.stop()}},t,this)}));return t}(),methods:{fetchNews:function(){function t(t){return e.apply(this,arguments)}var e=r()(i.a.mark(function t(e){var s,a,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s="https://newsapi.org/v1/articles?source="+e+"&sortBy=top&apiKey=50d30d5097d94f9bb58b0b62579188e9",t.next=3,fetch(s);case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,"ok"===n.status&&this.$store.dispatch("addArticles",{articles:n.articles,source:e});case 8:case"end":return t.stop()}},t,this)}));return t}()}}},93:function(t,e){},94:function(t,e){},95:function(t,e){},96:function(t,e){},97:function(t,e){},98:function(t,e){},99:function(t,e){}},[126]);
//# sourceMappingURL=client.92e16b30.js.map