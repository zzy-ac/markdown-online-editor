(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15184cfd"],{"44e3":function(t,e,n){},"9dc0":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"preview-vditor",attrs:{"element-loading-text":"正在努力，请稍候..."}},[e("div",{staticClass:"vditor-preview",attrs:{id:"khaleesi"}})])},i=[],r=n("ff41"),o=n.n(r),c={name:"PreviewVditor",data:function(){return{isLoading:!0}},props:{pdata:{type:String,required:!0,default:""}},created:function(){this.$utils.updateHtmlStyle(),this.setDefaultText()},components:{},mounted:function(){this.initVditor(),this.$utils.hideVditorTextarea()},methods:{initVditor:function(){var t=this,e={width:"61.8%",mode:"sv",preview:{delay:1e3,show:!0}};this.vditor=new o.a("khaleesi",e),this.$nextTick((function(){t.isLoading=!1}))},setDefaultText:function(){localStorage.setItem("vditorkhaleesi",this.pdata)}}},s=c,u=(n("bf60"),n("0c7c")),d=Object(u["a"])(s,a,i,!1,null,null,null);e["a"]=d.exports},bf60:function(t,e,n){"use strict";n("44e3")},e103:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"export-page"},[e("div",{staticClass:"button-group"},[e("el-button",{attrs:{round:""},on:{click:t.onBackToMainPage}},[t._v("返回主页")]),e("el-button",{attrs:{round:"",type:"primary"},on:{click:t.onExportBtnClick}},[t._v("生成导出")])],1),e("PreviewVditor",{attrs:{pdata:t.pdata}})],1)},i=[],r=(n("96cf"),n("3b8d")),o=(n("a481"),n("c0e9")),c=n.n(o),s=n("0132"),u=n.n(s),d=960,l=800,h=50,p=80,v=6,f=0,m=40,g=50,w="rgba(0, 0, 0, 0.21)";function x(t,e){var n=document.createElement("canvas");n.width=d*e,n.height=l*e;var a=n.getContext("2d"),i=v*e,r=i,o=0,c=r+n.width-2*i,s=o,u=c+i,h=i,p=u,f=h+n.height-2*i,m=c,g=f+i,w=r,x=g,C=w-i,k=f,T=C,b=h;return a.beginPath(),a.moveTo(r,o),a.lineTo(c,s),a.quadraticCurveTo(u,s,u,h),a.lineTo(p,f),a.quadraticCurveTo(p,g,m,g),a.lineTo(w,x),a.quadraticCurveTo(C,x,C,k),a.lineTo(T,b),a.quadraticCurveTo(T,o,r,o),a.clip(),a.drawImage(t,0,0),n}function C(t){var e=document.createElement("canvas");e.width=t.width+h,e.height=t.height+p;var n=e.getContext("2d");return n.shadowOffsetX=f,n.shadowOffsetY=m,n.shadowBlur=g,n.shadowColor=w,n.drawImage(t,h/2,0),e}var k=function(t){for(var e=[],n=[],a=t.querySelectorAll("svg"),i=0,r=a.length;i<r;i++){var o=a[i],c=o.parentNode,s=c.innerHTML,d=document.createElement("canvas");u()(d,s),e.push({parent:c,child:o}),c.removeChild(o),n.push({parent:c,child:d}),c.appendChild(d)}},T=function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return k(e),n=getComputedStyle(e),d=+n.width.replace("px",""),l=+n.height.replace("px",""),a=window.devicePixelRatio,i={scale:a,allowTaint:!0,backgroundColor:"#fefefe"},t.next=8,c()(e,i);case 8:return r=t.sent,o=x(r,a),t.abrupt("return",C(o));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=n("9dc0"),y={name:"export-image",data:function(){return{isLoading:!0,pdata:localStorage.getItem("vditorvditor")}},created:function(){},components:{PreviewVditor:b["a"]},mounted:function(){},updated:function(){},methods:{exportAndDownloadImg:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:a=t.sent,i="download"in document.createElement("a"),i&&(r=document.createElement("a"),r.download=n,r.href=a.toDataURL(),r.click()),this.isLoading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),onBackToMainPage:function(){this.$router.push("/")},onExportBtnClick:function(){this.isLoading=!0;var t=document.getElementsByClassName("vditor-preview")[0],e=this.$utils.getExportFileName();this.exportAndDownloadImg(t,e)}}},E=y,L=n("0c7c"),P=Object(L["a"])(E,a,i,!1,null,null,null);e["default"]=P.exports}}]);