(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=a(5),s=a(11),i=a(12),m=a(9),u=a(3),f=a(62),p=a(63),d=a(14),E=a.n(d),b=(a(44),function(e){var t=e.text,a=e.additionalClassName,n=t.replace(/ /g,"\xa0").split("").map(function(e,t){return c.a.createElement("div",{className:"charm",style:{animationDelay:"".concat(50*t,"ms")},key:E.a.generate()},e)});return c.a.createElement("div",{className:"charm-wrapper ".concat(a)},n)});b.defaultProps={additionalClassName:""};var h=c.a.memo(b),g=function(){return c.a.createElement("section",{className:"d-flex align-items-center justify-content-center section section_cover"},c.a.createElement("div",null,c.a.createElement("h1",{className:"title indent-mb-m"},c.a.createElement(h,{text:"Homepage",additionalClassName:"charm-wrapper_scale"}))))},v=a(15),y=a.n(v),O=a(18),k=(a(46),function(){return c.a.createElement("span",null," Loading... wait please")}),j=(a(47),c.a.memo(function(e){var t=e.match,a=e.phones,n=e.onAddToBasket;return c.a.createElement("div",{className:"catalog fix-container2 indent-mb-l"},a.map(function(e,a){var r=e.id,l=e.name,s=e.imageUrl,i=e.snippet;return c.a.createElement("div",{key:r,className:"catalog__card card",style:{animationDelay:"".concat(100*a,"ms")}},c.a.createElement("div",{className:"card__image image-container indent-mb-sm"},c.a.createElement(o.b,{to:"".concat(t.url).concat(r)},c.a.createElement("img",{src:"https://mate-academy.github.io/phone-catalogue-static/".concat(s),alt:l}))),c.a.createElement("div",{className:"card__description indent-mb-sm"},c.a.createElement(o.b,{to:"".concat(t.url).concat(r)},c.a.createElement("h3",{className:"indent-mb-sm"},l)),c.a.createElement("p",null,i)),c.a.createElement("div",{className:"card__button"},c.a.createElement("button",{type:"button",onClick:function(){return n(r,l)}},"BUY")))}))}));var N=function(e,t){var a=Object(n.useState)(e),c=Object(u.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)(function(){var a=setTimeout(function(){l(e)},t);return function(){clearTimeout(a)}},[e]),r},S=function(e,t){for(var a=[],n=1;n<=Math.ceil(t/e);n+=1)a.push(n);return a},w=function(e){return e.map(function(e){return e.quantity}).reduce(function(e,t){return e+t},0)},x=(a(52),c.a.memo(function(e){var t=e.onFilterPhones,a=e.onSortPhonesBy,r=e.sortValue,l=e.searchValue,o=Object(n.useState)(l),s=Object(u.a)(o,2),i=s[0],m=s[1],f=N(i,500);return Object(n.useEffect)(function(){t(f)},[f]),c.a.createElement("form",null,c.a.createElement("div",{className:"inputs-field indent-mb-m"},c.a.createElement("div",{className:"input-block"},c.a.createElement("label",{htmlFor:"input-filter"},"Search:"),c.a.createElement("input",{id:"input-filter",onChange:function(e){return m(e.target.value)},value:i})),c.a.createElement("div",{className:"input-block"},c.a.createElement("label",{htmlFor:"select-sort"},"Sort by: "),c.a.createElement("select",{id:"select-sort",onChange:a,value:r},c.a.createElement("option",{value:"age"},"Newest"),c.a.createElement("option",{value:"name"},"Alphabetical")))))})),C=(a(53),c.a.memo(function(e){var t=e.withInfo,a=e.currentPage,n=e.buttons,r=e.onPageChange,l=function(){return c.a.createElement("li",{className:"page-item disabled"},c.a.createElement("button",{className:"page-link custom-page-link",type:"button"},"..."))},o=function(e){var t=e.toLowerCase().trim().includes("prev")?n[0]:n.length;return c.a.createElement("li",{className:"page-item ".concat(a===t?"disabled":"")},c.a.createElement("button",{className:"page-link custom-page-link",type:"button",id:t,name:e,onClick:r},e))},s=function(e,t){return c.a.createElement("li",{key:E.a.generate(),className:"page-item ".concat(a===e?"active":"")},c.a.createElement("button",{className:"page-link custom-page-link",type:"button",id:e,name:t,onClick:r},e))};return c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-2 pagination-info"},c.a.createElement("span",null,t)),c.a.createElement("nav",{"aria-label":"Page navigation",className:""},c.a.createElement("ul",{className:"pagination justify-content-center"},o("Previous"),1===n.length?"":s(1,"numbers"),a<4?"":l(),n.filter(function(e){return 1!==e&&e!==n.length&&(e===a-1||e===a||e===a+1)}).map(function(e){return s(e,"numbers")}),a>n.length-3?"":l(),0===n.length?"":s(n.length,"numbers"),o("Next"))))})),_=function(e){var t=e.history,a=e.location,r=e.onAddToBasket,l=Object(n.useState)([]),o=Object(u.a)(l,2),i=o[0],m=o[1],f=Object(n.useState)([]),p=Object(u.a)(f,2),d=p[0],b=p[1],g=Object(n.useState)(!1),v=Object(u.a)(g,2),N=v[0],w=v[1],_=Object(n.useState)(""),P=Object(u.a)(_,2),B=P[0],I=P[1],q=Object(n.useState)(0),U=Object(u.a)(q,2),A=U[0],T=U[1],F=Object(n.useState)(1),G=Object(u.a)(F,2),L=G[0],D=G[1],R=Object(n.useState)(5),J=Object(u.a)(R,2),M=J[0],V=J[1],Y=Object(n.useState)([]),H=Object(u.a)(Y,2),Q=H[0],K=H[1],X=[3,5,10,20],z=a.search;Object(n.useEffect)(function(){Object(O.a)(y.a.mark(function e(){var t,a,n,c,r,l,o,s;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,m(a),n=new URLSearchParams(z),c=n.get("query")||"",r=n.get("sort")||"",l=n.get("page")||1,o=n.get("perPage")||5,I(c),T(r),D(+l),V(+o),s=$(ee(a,c),r),K(S(o,s.length)),b(s),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),m([]);case 25:case"end":return e.stop()}},e,null,[[0,22]])}))(),w(!0)},[]),Object(n.useEffect)(function(){var e=new URLSearchParams(z),t=e.get("query")||B,a=e.get("sort")||A,n=e.get("page")||L,c=e.get("perPage")||M;D(n),V(c),I(t),T(a)},[t]),Object(n.useEffect)(function(){var e=new URLSearchParams;e.append("query",B.toString()),e.append("sort",A.toString()),e.append("page",L.toString()),e.append("perPage",M.toString()),z!=="?".concat(e.toString())&&t.push({pathname:"/phones/",search:"?".concat(e.toString())});var a=$(ee(i,B),A);b(a),K(S(M,a.length))},[B,A,M,L]);var W=function(e){D(1),I(e.toLowerCase())},Z=function(e){T(e.target.value)},$=function(e,t){switch(t){case"name":return e.sort(function(e,t){return e.name.localeCompare(t.name)});case"age":return e.sort(function(e,t){return e.age-t.age});default:return e}},ee=function(e,t){return e.filter(function(e){return[e.name,e.snippet].join("").toLowerCase().includes(t.trim())})},te=function(e){var t=e.target,a=t.name,n=t.id;K(S(M,d.length)),a.toLowerCase().trim().includes("next")&&L<Q.length?D(L+1):a.toLowerCase().trim().includes("prev")&&L>1?D(L-1):D(+n)},ae=function(e){var t=e.target.value;V(+t),D(1)},ne=L*M,ce=ne-M,re="Showing ".concat(d.length>0?ce+1:0," to ").concat(ne>d.length?d.length:ne,"\n    of ").concat(d.length," phones"),le=d.slice(ce,ne);return c.a.createElement("section",{className:"section"},c.a.createElement("div",null,c.a.createElement("div",{className:"indent-mb-m"},c.a.createElement("h1",{className:"title title_subpages"},c.a.createElement(h,{text:"Phones catalog"}))),c.a.createElement("div",{className:"sidebar"},c.a.createElement(s.a,{path:"/phones/",exact:!0,render:function(){return c.a.createElement(x,{onFilterPhones:W,onSortPhonesBy:Z,sortValue:A,searchValue:B})}}),c.a.createElement(s.a,{path:"/phones/",exact:!0,render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",null,c.a.createElement("div",{className:"input-block"},c.a.createElement("label",{htmlFor:"formControlSelect"},"Show per page"),c.a.createElement("select",{onChange:ae,id:"formControlSelect",value:M},X.map(function(e){return c.a.createElement("option",{key:E.a.generate(),value:e},e)})))))}})),N?c.a.createElement("div",null,c.a.createElement(s.a,{path:"/phones/:queryParams?",exact:!0,render:function(e){var t=e.match;return c.a.createElement(j,{match:t,phones:le,onAddToBasket:r})}})):c.a.createElement(k,null),c.a.createElement(s.a,{path:"/phones/",exact:!0,render:function(){return c.a.createElement(C,{buttons:Q,currentPage:L,withInfo:re,onPageChange:te})}})))},P=(a(54),function(e){var t=e.phone,a=e.onAddToBasket,r=t.id,l=t.name,o=t.images,s=t.description,i=Object(n.useState)(o[0]),m=Object(u.a)(i,2),f=m[0],p=m[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"section__main-content"},c.a.createElement("div",{className:"section__image"},c.a.createElement("img",{key:f,alt:l,src:"https://mate-academy.github.io/phone-catalogue-static/".concat(f)})),c.a.createElement("div",{className:"section__content"},c.a.createElement("h2",{className:"indent-mb-m"},l),c.a.createElement("p",{className:"indent-mb-l"},s),c.a.createElement("div",{className:"card__button"},c.a.createElement("button",{type:"button",onClick:function(){return a(r,l)}},"Add")))),c.a.createElement("div",{className:"section__gallery gallery"},o.map(function(e,t){return c.a.createElement("div",{key:e,className:"gallery__image",style:{animationDelay:"".concat(100*t,"ms")}},c.a.createElement("img",{onClick:function(){return function(e){p(e)}(e)},alt:l,src:"https://mate-academy.github.io/phone-catalogue-static/".concat(e)}))})))}),B=c.a.memo(function(e){var t=e.match,a=e.history,r=e.onAddToBasket,l=Object(n.useState)([]),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)(0),f=Object(u.a)(m,2),p=f[0],d=f[1],E=Object(n.useState)(0),b=Object(u.a)(E,2),h=b[0],g=b[1];return Object(n.useEffect)(function(){Object(O.a)(y.a.mark(function e(){var a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(t.params.id,".json"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,i(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),g(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}))(),setTimeout(function(){return d(!0)},1e3)},[]),c.a.createElement("div",{className:"section section_details"},c.a.createElement("div",{className:"section__button indent-mb-m"},c.a.createElement("button",{type:"button",onClick:a.goBack},"GO BACK")),h?c.a.createElement("div",{className:"error"},"Sorry, phone not found"):c.a.createElement(c.a.Fragment,null,p?c.a.createElement(P,{phone:s,onAddToBasket:r}):c.a.createElement(k,null)))}),I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Sorry, page not found"))},q=a(28),U=(a(55),function(e){var t=e.basketItems,a=e.onRemoveFormBasket,n=e.onChangeQuantity;return c.a.createElement(p.a,{component:"ul"},t.map(function(e){return c.a.createElement(f.a,{key:e.id,timeout:500,classNames:"fade",appear:!0},c.a.createElement("li",null,c.a.createElement("div",{className:"basket__item"},c.a.createElement("div",{className:"basket__title indent-mb-s"},c.a.createElement(o.b,{to:"/phones/".concat(e.id)},e.name)),c.a.createElement("div",{className:"basket__quantity"},c.a.createElement("div",{className:"basket__button"},c.a.createElement("button",{type:"button",name:"decrease",onClick:function(){return n("decrease",e.id)}},"-")),c.a.createElement("span",{className:"quantity"},e.quantity),c.a.createElement("div",{className:"basket__button"},c.a.createElement("button",{type:"button",name:"increase",onClick:function(){return n("increase",e.id)}},"+"))),c.a.createElement("div",{className:"basket__button"},c.a.createElement("button",{type:"button",name:"remove",onClick:function(){return a(e.id)}},"x")))))}))}),A=function(e){var t=e.basketItems,a=Object(q.a)(e,["basketItems"]);return c.a.createElement("div",{className:"basket d-flex flex-column align-items-center justify-content-center indent-mb-m"},c.a.createElement("h4",{className:"title title_subpages indent-mb-m"},c.a.createElement(h,{text:"Your basket:"})),t.length>0?c.a.createElement(U,Object.assign({basketItems:t},a)):c.a.createElement("span",{className:"title title_h5"},"empty"))},T=(a(56),function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("rect",{fill:"#ff1f48",width:"100%",height:"100%"}),c.a.createElement("defs",null,c.a.createElement("radialGradient",{id:"a",cx:"0",cy:"800",r:"800",gradientUnits:"userSpaceOnUse"},c.a.createElement("stop",{offset:"0",stopColor:"#ff7922"}),c.a.createElement("stop",{offset:"1",stopColor:"#ff7922",stopOpacity:"0"})),c.a.createElement("radialGradient",{id:"b",cx:"1200",cy:"800",r:"800",gradientUnits:"userSpaceOnUse"},c.a.createElement("stop",{offset:"0",stopColor:"#ff10e3"}),c.a.createElement("stop",{offset:"1",stopColor:"#ff10e3",stopOpacity:"0"})),c.a.createElement("radialGradient",{id:"c",cx:"600",cy:"0",r:"600",gradientUnits:"userSpaceOnUse"},c.a.createElement("stop",{offset:"0",stopColor:"#ff135c"}),c.a.createElement("stop",{offset:"1",stopColor:"#ff135c",stopOpacity:"0"})),c.a.createElement("radialGradient",{id:"d",cx:"600",cy:"800",r:"600",gradientUnits:"userSpaceOnUse"},c.a.createElement("stop",{offset:"0",stopColor:"#ff1f48"}),c.a.createElement("stop",{offset:"1",stopColor:"#ff1f48",stopOpacity:"0"})),c.a.createElement("radialGradient",{id:"e",cx:"0",cy:"0",r:"800",gradientUnits:"userSpaceOnUse"},c.a.createElement("stop",{offset:"0",stopColor:"#fff826"}),c.a.createElement("stop",{offset:"1",stopColor:"#fff826",stopOpacity:"0"})),c.a.createElement("radialGradient",{id:"f",cx:"1200",cy:"0",r:"800",gradientUnits:"userSpaceOnUse"},c.a.createElement("stop",{offset:"0",stopColor:"#6a00ff"}),c.a.createElement("stop",{offset:"1",stopColor:"#6a00ff",stopOpacity:"0"}))),c.a.createElement("rect",{fill:"url(#a)",width:"100%",height:"100%"}),c.a.createElement("rect",{fill:"url(#b)",width:"100%",height:"100%"}),c.a.createElement("rect",{fill:"url(#c)",width:"100%",height:"100%"}),c.a.createElement("rect",{fill:"url(#d)",width:"100%",height:"100%"}),c.a.createElement("rect",{fill:"url(#e)",width:"100%",height:"100%"}),c.a.createElement("rect",{fill:"url(#f)",width:"100%",height:"100%"}))}),F=a(22),G=(a(57),{tension:1200,friction:40}),L={mass:10,tension:200,friction:50},D=function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0) translate3d(-50%,-50%,0)")},R=function(){var e=Object(F.b)(3,function(){return{xy:[0,0],config:function(e){return 0===e?G:L}}}),t=Object(u.a)(e,2),a=t[0],n=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("svg",{className:"goo-svg",style:{position:"absolute",width:0,height:0}},c.a.createElement("filter",{id:"goo"},c.a.createElement("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"30"}),c.a.createElement("feColorMatrix",{in:"blur",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"}))),c.a.createElement("div",{className:"hooks-main",onMouseMove:function(e){return n({xy:[e.clientX,e.clientY]})}},a.map(function(e,t){return c.a.createElement(F.a.div,{key:t,style:{transform:e.xy.interpolate(D)}})})))},J=(a(58),function(e){var t=e.totalBasketItems;return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",exact:!0},c.a.createElement("span",null,"Home"))),c.a.createElement("li",null,c.a.createElement(o.c,{to:{pathname:"/phones/",search:"?&query=&sort="}},c.a.createElement("span",null,"Store"))),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/basket"},c.a.createElement("span",null,"Basket "),t>0?c.a.createElement("span",{className:"badge badge-pill badge-dark"},t):""))))}),M=(a(59),function(e){var t=e.children,a=e.totalBasketItems;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"background"},c.a.createElement(T,null)),c.a.createElement(R,null),c.a.createElement("header",null,c.a.createElement(J,{totalBasketItems:a})),t)});a(60);function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach(function(t){Object(i.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var H=function(e){return c.a.createElement(f.a,Object.assign({},e,{classNames:"fadeTranslate",timeout:1e3,mountOnEnter:!0,unmountOnExit:!0}))},Q=function(e){var t=e.location,a=t.pathname,r=Object(n.useState)([]),l=Object(u.a)(r,2),o=l[0],i=l[1];Object(n.useEffect)(function(){localStorage.getItem("basketItems")&&i(JSON.parse(localStorage.getItem("basketItems")))},[]),Object(n.useEffect)(function(){localStorage.setItem("basketItems",JSON.stringify(o))},[o]);var f=function(e,t){var a=Object(m.a)(o),n=a.findIndex(function(t){return t.id===e});n>-1?(a[n]=Y({},a[n],{quantity:a[n].quantity+1}),i(a)):i([].concat(Object(m.a)(a),[{id:e,name:t,quantity:1}]))},d=function(e){i(o.filter(function(t){return t.id!==e}))},E=function(e,t){var a=Object(m.a)(o),n=Object(m.a)(o).findIndex(function(e){return e.id===t});switch(e){case"increase":a[n]=Y({},a[n],{quantity:a[n].quantity+1}),i(a);break;case"decrease":a[n].quantity>=2&&(a[n]=Y({},a[n],{quantity:a[n].quantity-1}),i(a));break;default:i(a)}},b=w(o);return c.a.createElement(M,{totalBasketItems:b},c.a.createElement(p.a,null,c.a.createElement(H,{key:a},c.a.createElement("main",{className:"fix-container"},c.a.createElement(s.c,{location:t},c.a.createElement(s.a,{path:"/",exact:!0,component:g}),c.a.createElement(s.a,{exact:!0,path:"/phones",render:function(e){var a=e.match,n=e.history;return c.a.createElement(_,{match:a,location:t,history:n,onAddToBasket:f})}}),c.a.createElement(s.a,{path:"/phones/:id",exact:!0,render:function(e){var t=e.match,a=e.history;return c.a.createElement(B,{match:t,history:a,onAddToBasket:f})}}),c.a.createElement(s.a,{path:"/basket",exact:!0,render:function(){return c.a.createElement(A,{basketItems:o,onChangeQuantity:E,onRemoveFormBasket:d})}}),c.a.createElement(s.a,{component:I}))))))};l.a.render(c.a.createElement(function(){return c.a.createElement(o.a,null,c.a.createElement(s.a,{path:"/",component:Q}))},null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.6b88afdd.chunk.js.map