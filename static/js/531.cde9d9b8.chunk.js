"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[531],{531:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(791),i=n(861),r=n(439),s=n(687),o=n.n(s),c=n(243),l=n(604),v=l[0].q1,d=l[0].FH;var u=n(689),h={container:"MovieDetails_container__uHDv9",topContainer:"MovieDetails_topContainer__mI8Zy",header:"MovieDetails_header__fyMx1",image:"MovieDetails_image__X2-pj",textContainer:"MovieDetails_textContainer__tjy0N",controls:"MovieDetails_controls__Zto3N",bottomContainer:"MovieDetails_bottomContainer__RrM84",loading:"MovieDetails_loading__GmzLB"},m=n(184),_=(0,a.lazy)((function(){return n.e(178).then(n.bind(n,178))})),x=(0,a.lazy)((function(){return n.e(303).then(n.bind(n,303))}));function p(){var e=(0,u.UO)().movieId,t=(0,u.s0)(),n=function(e){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),s=n[0],l=n[1],u=(0,a.useState)(!1),h=(0,r.Z)(u,2),m=h[0],_=h[1],x=(0,a.useState)(null),p=(0,r.Z)(x,2),f=p[0],j=p[1];return(0,a.useEffect)((function(){var t=function(){var t=(0,i.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return l(null),t.abrupt("return");case 3:return _(!0),t.prev=4,t.next=7,c.Z.get("".concat(d,"movie/").concat(e,"?api_key=").concat(v,"&language=en-US"));case 7:200===(n=t.sent).status?l(n.data):j("Error fetching movie details."),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),j(t.t0.message);case 14:_(!1);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),{movieDetails:s,isLoading:m,error:f}}(e),s=n.movieDetails,p=n.isLoading,f=n.error,j=function(n){t("/movies/".concat(e,"/").concat(n))};return p?(0,m.jsx)("div",{className:h.container,children:"Loading..."}):f?(0,m.jsxs)("div",{className:h.container,children:["Error: ",f]}):s?(0,m.jsxs)("div",{className:h.container,children:[(0,m.jsxs)("div",{className:h.topContainer,children:[(0,m.jsx)("h1",{className:h.header,children:s.title}),(0,m.jsx)("img",{src:"".concat(l[0].Z3).concat(s.poster_path),alt:s.title,className:h.image}),(0,m.jsxs)("div",{className:h.textContainer,children:[(0,m.jsxs)("p",{children:["Release Date: ",s.release_date]}),(0,m.jsxs)("p",{children:["Overview: ",s.overview]}),(0,m.jsxs)("p",{children:["Vote Average: ",s.vote_average]})]})]}),(0,m.jsxs)("div",{className:h.controls,children:[(0,m.jsx)("button",{onClick:function(){return j("cast")},children:"Cast"}),(0,m.jsx)("button",{onClick:function(){return j("reviews")},children:"Reviews"})]}),(0,m.jsx)("div",{className:h.bottomContainer,children:(0,m.jsx)(a.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsxs)(u.Z5,{children:[(0,m.jsx)(u.AW,{path:"cast",element:(0,m.jsx)(_,{movieId:e})}),(0,m.jsx)(u.AW,{path:"reviews",element:(0,m.jsx)(x,{movieId:e})})]})})})]}):(0,m.jsx)("div",{className:h.container,children:"Select a movie to view details."})}},604:function(e){e.exports=JSON.parse('[{"q1":"5a0e2a242e81a662142019faa172c5d9","FH":"https://api.themoviedb.org/3/","Z3":"https://image.tmdb.org/t/p/w500"}]')}}]);
//# sourceMappingURL=531.cde9d9b8.chunk.js.map