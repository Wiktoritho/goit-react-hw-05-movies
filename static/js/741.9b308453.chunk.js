"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[741],{741:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var s=r(2791),a=r(5861),n=r(9439),i=r(4687),c=r.n(i),o=r(1243),u=r(6604),d=u[0].q1,l=u[0].FH;var m={home:"Home_home__m+Y9x",header:"Home_header__L8+GQ",list:"Home_list__ZP0j7",listItem:"Home_listItem__ryBfk"},h=r(1087),v=r(184);function _(){var e=function(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),r=t[0],i=t[1],u=(0,s.useState)(!1),m=(0,n.Z)(u,2),h=m[0],v=m[1],_=(0,s.useState)(null),f=(0,n.Z)(_,2),p=f[0],g=f[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,o.Z.get("".concat(l,"/trending/movie/day?api_key=").concat(d));case 4:200===(t=e.sent).status?i(t.data.results):g("Error fetching movies."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g(e.t0.message);case 11:v(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:r,isLoading:h,error:p}}(),t=e.movies,r=e.isLoading,i=e.error;return r?(0,v.jsx)("div",{children:"Loading..."}):i?(0,v.jsxs)("div",{children:["Error: ",i]}):(0,v.jsxs)("div",{className:m.home,children:[(0,v.jsx)("h1",{className:m.header,children:"Trending today"}),(0,v.jsx)("ul",{className:m.list,children:t.map((function(e){return(0,v.jsx)("li",{className:m.listItem,children:(0,v.jsx)(h.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},6604:function(e){e.exports=JSON.parse('[{"q1":"5a0e2a242e81a662142019faa172c5d9","FH":"https://api.themoviedb.org/3/","Z3":"https://image.tmdb.org/t/p/w500"}]')}}]);
//# sourceMappingURL=741.9b308453.chunk.js.map