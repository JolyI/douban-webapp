webpackJsonp([1],{FhoZ:function(t,e,n){"use strict";(function(e){const o=n("z0pV");var s=n("y/By");t.exports={dev:{baseUrl:s.baseUrl,env:n("dhIU"),assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{"/api":{target:"http://qktest.dafycredit.cn",changeOrigin:!0,pathRewrite:{"^/api":""}}},host:"10.17.21.227",port:9988,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,devtool:"cheap-module-eval-source-map",cacheBusting:!0,cssSourceMap:!0},build:{baseUrl:s.baseUrl,env:{NODE_ENV:'"production"'},index:o.resolve(e,"../dist/index.html"),assetsRoot:o.resolve(e,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"./",productionSourceMap:!0,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report}}}).call(e,"/")},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("MVMM"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("Z0/y")({name:"App"},s,!1,function(t){n("n0Ua")},null,null).exports,a=n("zO6J"),i=(Number,Number,Boolean,Boolean,{name:"grid",methods:{countColumn:function(){this.childrenSize=this.$children.length,this.$children.forEach(function(t,e){return t.index=e})}},props:{rows:{type:Number,validator:function(){return!0}},cols:{type:Number},showLrBorders:{type:Boolean,default:!0},showVerticalDividers:{type:Boolean,default:!0}},computed:{column:function(){return this.cols||this.childrenSize}},data:function(){return{childrenSize:3}}}),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"weui-grids",class:{"vux-grid-no-lr-borders":!this.showLrBorders}},[this._t("default")],2)},staticRenderFns:[]};var l=n("Z0/y")(i,c,!1,function(t){n("vmQx")},null,null).exports,u=n("+Ln8"),d={name:"grid-item",props:["icon","label","link"],created:function(){this.$parent.countColumn()},mounted:function(){this.$slots.icon&&(this.hasIconSlot=!0),this.$slots.label&&(this.hasLabelSlot=!0)},destroyed:function(){this.$parent.countColumn()},computed:{isLast:function(){return!((this.index+1)%this.$parent.column)},style:function(){var t=this.$parent.column;if(t&&3!==t){var e={};return e.width=100/t+"%",e}}},methods:{onClick:function(){this.$emit("on-item-click"),Object(u.a)(this.link,this.$router)}},data:function(){return{index:0,hasIconSlot:!1,hasLabelSlot:!1}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"weui-grid",class:{"vux-grid-item-no-border":t.isLast&&!t.$parent.showLrBorders||!t.isLast&&!t.$parent.showVerticalDividers},style:t.style,attrs:{href:"javascript:;"},on:{click:t.onClick}},[t.hasIconSlot||t.icon?n("div",{staticClass:"weui-grid__icon"},[t._t("icon",[n("img",{attrs:{src:t.icon,alt:""}})])],2):t._e(),t._v(" "),t.hasLabelSlot||t.label?n("p",{staticClass:"weui-grid__label"},[t._t("label",[n("span",{domProps:{innerHTML:t._s(t.label)}})])],2):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var h=n("Z0/y")(d,p,!1,function(t){n("Ug83")},null,null).exports,m={components:{Grid:l,GridItem:h},data:function(){return{}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"list"},[this._v("\n    安辉 你好\n")])},staticRenderFns:[]},v=n("Z0/y")(m,f,!1,null,null,null).exports;o.a.use(a.a);var b=new a.a({routes:[{path:"/",name:"首页列表",component:v}]}),g=(n("D0oh"),n("iDdd")),y=n.n(g),_=n("9rMa");o.a.use(_.a);var S=new _.a.Store({state:{loadState:!1},mutations:{loadShow:function(t){t.loadState=!0},loadHide:function(t){t.loadState=!1},loadtToggle:function(){state.loadState=!state.loadState}}}),w=n("rVsN"),x=n.n(w),$=n("AA3o"),U=n.n($),E=n("xSur"),N=n.n(E),B=n("aozt"),I=n.n(B),O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];U()(this,t),this.config=e,I.a.defaults.baseURL=this.config.baseUrl||"",console.log(this.config.baseUrl),this._interceptor(n)}return N()(t,[{key:"_interceptor",value:function(t){I.a.interceptors.request.use(function(e){return t.commit("loadShow"),"post"===e.method?(e.headers.platform="h5",e.data&&!1!==e.data.modal&&t.commit("loadShow"),e.data.channel||(e.data.channel="WX_OA"),e.data.userId=sessionStorage.getItem("userId"),e.data.openId=sessionStorage.getItem("openId"),e.data.idPerson=sessionStorage.getItem("idPerson")):e.params&&!1!==e.params.modal&&t.commit("loadShow"),e},function(t){return x.a.reject(t)}),I.a.interceptors.response.use(function(e){return t.commit("loadHide"),"success"!==e.data.result&&"success"!==e.data.status&&t.commit("msgPopUp/showPopup",{title:"提示",content:e.data.message||"系统繁忙，请稍后再试",closeIcon:!1,btnType:"default",buttons:[{text:"确认"}]}),e},function(e){return console.log(e),t.commit("loadHide"),t.commit("msgPopUp/showPopup",{title:"",content:"系统繁忙，请稍后再试",buttons:[{text:"确认"}]}),x.a.reject(e)})}}]),t}(),L=n("FhoZ"),P=n.n(L);y.a.attach(document.body),o.a.prototype.$config=P.a.build,o.a.prototype.$store=S,o.a.prototype.$api=new O(o.a.prototype.$config,S),o.a.filter("removeComma",function(t){return t&&t.replace(/,/g,"")}),o.a.config.productionTip=!1,new o.a({el:"#app",router:b,components:{App:r},template:"<App/>"})},Ug83:function(t,e){},dhIU:function(t,e,n){"use strict";const o=n("RnBz"),s=n("rBKV");t.exports=o(s,{NODE_ENV:'"development"'})},n0Ua:function(t,e){},rBKV:function(t,e,n){"use strict";t.exports={NODE_ENV:'"production"'}},vmQx:function(t,e){},"y/By":function(t,e,n){const o={baseUrl:"//aiyong.dafysz.cn"};t.exports=o}},["NHnr"]);
//# sourceMappingURL=app.312b6d8c3b9838928020.js.map