"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[178],{2178:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var a=r(2791),n=r(7689),s=r(5861),c=r(9439),i=r(4687),o=r.n(i),u=r(1243),d=r(6604),l=d[0].q1,h=d[0].FH;var f={header:"Cast_header__a+MSu",list:"Cast_list__pb9Bg",listItem:"Cast_listItem__EVYY0"},m=r(184);function v(){var e=function(e){var t=(0,a.useState)([]),r=(0,c.Z)(t,2),n=r[0],i=r[1],d=(0,a.useState)(!1),f=(0,c.Z)(d,2),m=f[0],v=f[1],_=(0,a.useState)(null),p=(0,c.Z)(_,2),g=p[0],x=p[1];return(0,a.useEffect)((function(){var t=function(){var t=(0,s.Z)(o().mark((function t(){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return i([]),t.abrupt("return");case 3:return v(!0),t.prev=4,t.next=7,u.Z.get("".concat(h,"movie/").concat(e,"/credits?api_key=").concat(l,"&language=en-US"));case 7:200===(r=t.sent).status?i(r.data.cast):x("Error fetching movie actors."),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),x(t.t0.message);case 14:v(!1);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),{actors:n,isLoading:m,error:g}}((0,n.UO)().movieId),t=e.actors,r=e.isLoading,i=e.error,d=new Set,v=t&&t.map((function(e){return d.has(e.id)&&(e.id=Math.floor(1e6*Math.random())),d.add(e.id),e}));return r?(0,m.jsx)("div",{children:"Loading..."}):i?(0,m.jsxs)("div",{children:["Error: ",i]}):v&&0!==v.length?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{className:f.header,children:"Actors"}),(0,m.jsx)("ul",{className:f.list,children:v.map((function(e){return(0,m.jsxs)("li",{className:f.listItem,children:[e.name," as ",e.character]},e.id)}))})]}):(0,m.jsx)("div",{children:"No actors found for this movie."})}}}]);
//# sourceMappingURL=178.ccc66c32.chunk.js.map