"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[447],{1447:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var a=r(9439),n=r(2791),s=r(5861),i=r(4687),c=r.n(i),o=r(1243),u=r(6604),l=u[0].q1,h=u[0].FH;var p=r(1087),v={container:"Movies_container__nrZs1",header:"Movies_header__wqnuN",input:"Movies_input__+JkfI",list:"Movies_list__nhUXd",listItem:"Movies_listItem__NG5ok",button:"Movies_button__+2NGv"},d=r(4691),f=r(184);function m(){var e=(0,n.useState)(""),t=(0,a.Z)(e,2),r=t[0],i=t[1],u=function(e){var t=(0,n.useState)([]),r=(0,a.Z)(t,2),i=r[0],u=r[1],p=(0,n.useState)(!1),v=(0,a.Z)(p,2),d=v[0],f=v[1],m=(0,n.useState)(null),_=(0,a.Z)(m,2),b=_[0],g=_[1];return(0,n.useEffect)((function(){var t=function(){var t=(0,s.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return u([]),t.abrupt("return");case 3:return f(!0),t.prev=4,t.next=7,o.Z.get("".concat(h,"search/movie?api_key=").concat(l,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 7:200===(r=t.sent).status?u(r.data.results):g("Error searching for movies."),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),g(t.t0.message);case 14:f(!1);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(){return t.apply(this,arguments)}}(),r=setTimeout((function(){t()}),500);return function(){return clearTimeout(r)}}),[e]),{movies:i,isLoading:d,error:b}}(r),m=u.movies,_=u.isLoading,b=u.error;return _?(0,f.jsx)("div",{className:v.container,children:(0,f.jsx)(d.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}):b?(0,f.jsxs)("div",{children:["Error: ",b]}):(0,f.jsxs)("div",{className:v.container,children:[(0,f.jsx)("h1",{className:v.header,children:"Search Movies"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,f.jsx)("input",{className:v.input,type:"text",value:r,onChange:function(e){i(e.target.value)},placeholder:"Search for movies..."}),(0,f.jsx)("button",{type:"submit",className:v.button,children:"Search"})]}),(0,f.jsx)("ul",{className:v.list,children:m.map((function(e){return(0,f.jsx)("li",{className:v.listItem,children:(0,f.jsx)(p.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},6604:function(e){e.exports=JSON.parse('[{"q1":"5a0e2a242e81a662142019faa172c5d9","FH":"https://api.themoviedb.org/3/","Z3":"https://image.tmdb.org/t/p/w500"}]')}}]);
//# sourceMappingURL=447.9369679a.chunk.js.map