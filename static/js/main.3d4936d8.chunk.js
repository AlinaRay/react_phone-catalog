(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),o=(a(28),a(4)),i=a(7),s=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title indent-mb-m"},"Home page"))},m=a(13),u=a(8),d=a(9),p=a.n(d),E=a(12),b=a(5),f=function(){return c.a.createElement("span",null," Loading... wait please")},h=c.a.memo(function(e){var t=e.phones,a=e.onAddToBasket;return c.a.createElement("div",null,t.map(function(e){var t=e.id,n=e.name,r=e.imageUrl,l=e.snippet;return c.a.createElement("div",{key:t,className:"catalog__card card"},c.a.createElement("div",{className:"card__image image-container"},c.a.createElement(o.b,{to:"/phones/".concat(t)},c.a.createElement("img",{src:"https://mate-academy.github.io/phone-catalogue-static/".concat(r),alt:n}))),c.a.createElement("div",{className:"card__description"},c.a.createElement(o.b,{to:"/phones/".concat(t)},c.a.createElement("h3",{className:"indent-mb-sm"},n)),c.a.createElement("p",null,l)),c.a.createElement("div",{className:"card__button"},c.a.createElement("button",{type:"button",onClick:function(){return a(t,n)}},"Add")))}))}),v=function(e){var t=e.phone,a=t.name,r=t.images,l=t.description,o=Object(n.useState)(r[0]),i=Object(b.a)(o,2),s=i[0],m=i[1];return c.a.createElement("div",{className:"section section_details"},c.a.createElement("div",{className:"section__main-content"},c.a.createElement("div",{className:"section__image"},c.a.createElement("img",{alt:a,src:"https://mate-academy.github.io/phone-catalogue-static/".concat(s)})),c.a.createElement("div",{className:"section__content"},c.a.createElement("h2",{className:"indent-mb-m"},a),c.a.createElement("p",{className:"indent-mb-l"},l))),c.a.createElement("div",{className:"section__gallery"},r.map(function(e){return c.a.createElement("img",{key:e,onClick:function(){return function(e){m(e)}(e)},alt:a,src:"https://mate-academy.github.io/phone-catalogue-static/".concat(e)})})))},g=function(e){var t=e.match;Object(n.useEffect)(function(){j(),setTimeout(function(){return u(!0)},1e3)},[t]);var a=Object(n.useState)([]),r=Object(b.a)(a,2),l=r[0],o=r[1],i=Object(n.useState)(0),s=Object(b.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(0),h=Object(b.a)(d,2),g=h[0],k=h[1],j=function(){var e=Object(E.a)(p.a.mark(function e(){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones/".concat(t.params.id,".json"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,o(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),k(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,g?c.a.createElement("div",{className:"error"},"Sorry, phone not found"):c.a.createElement(c.a.Fragment,null,m?c.a.createElement("div",null,c.a.createElement(v,{phone:l})):c.a.createElement(f,null)))},k=function(e){var t=e.onFilterPhones,a=e.onSortPhonesBy;return c.a.createElement("form",null,c.a.createElement("div",{className:"inputs-field indent-mb-m"},c.a.createElement("div",{className:"input-block"},c.a.createElement("label",{htmlFor:"input-filter"},"Search:"),c.a.createElement("input",{id:"input-filter",onChange:t})),c.a.createElement("div",{className:"input-block"},c.a.createElement("label",{htmlFor:"select-sort"},"Sort by: "),c.a.createElement("select",{id:"select-sort",onChange:a},c.a.createElement("option",{value:"age"},"Newest"),c.a.createElement("option",{value:"name"},"Alphabetical")))))},j=function(e){var t=e.basketItems,a=e.onRemoveFormBasket,n=e.onChangeQuantity;return c.a.createElement("div",{className:"basket indent-mb-m"},c.a.createElement("h4",null,"Basket:"),c.a.createElement("ul",null,t.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("div",{className:"basket__item"},c.a.createElement("div",{className:"basket__title indent-mb-s"},c.a.createElement(o.b,{to:"/phones/".concat(e.id)},e.name)),c.a.createElement("div",{className:"basket__quantity"},c.a.createElement("div",{className:"basket__button"},c.a.createElement("button",{type:"button",name:"decrease",onClick:function(){return n("decrease",e.id)}},"-")),c.a.createElement("span",null,e.quantity),c.a.createElement("div",{className:"basket__button"},c.a.createElement("button",{type:"button",name:"increase",onClick:function(){return n("increase",e.id)}},"+"))),c.a.createElement("div",{className:"basket__button"},c.a.createElement("button",{type:"button",name:"remove",onClick:function(){return a(e.id)}},"x"))))})))},y=function(){Object(n.useEffect)(function(){C(),O(!0)},[]);var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(b.a)(l,2),s=o[0],d=o[1],v=Object(n.useState)(!1),y=Object(b.a)(v,2),N=y[0],O=y[1],_=Object(n.useState)([]),w=Object(b.a)(_,2),x=w[0],S=w[1],C=function(){var e=Object(E.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/phone-catalogue-static/api/phones.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(a),d(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r([]);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(){return e.apply(this,arguments)}}(),q=function(e,t){var a=Object(u.a)(x),n=a.findIndex(function(t){return t.id===e});n>-1?(a[n]=Object(m.a)({},a[n],{quantity:a[n].quantity+1}),S(a)):S([].concat(Object(u.a)(a),[{id:e,name:t,quantity:1}]))},B=function(){d(Object(u.a)(a).sort(function(e,t){return e.age-t.age}))};return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"sidebar"},c.a.createElement(k,{onFilterPhones:function(e){d(a.filter(function(t){return-1!==t.name.toLowerCase().search(e.target.value.toLowerCase())}))},onSortPhonesBy:function(e){switch(e.target.value){case"name":d(Object(u.a)(a).sort(function(e,t){return e.name.localeCompare(t.name)}));break;case"age":B();break;default:B()}}}),c.a.createElement(j,{basketItems:x,onChangeQuantity:function(e,t){var a=Object(u.a)(x),n=Object(u.a)(x).findIndex(function(e){return e.id===t});switch(e){case"increase":a[n]=Object(m.a)({},a[n],{quantity:a[n].quantity+1}),S(a);break;case"decrease":a[n].quantity>=2&&(a[n]=Object(m.a)({},a[n],{quantity:a[n].quantity-1}),S(a));break;default:S(a)}},onRemoveFormBasket:function(e){S(x.filter(function(t){return t.id!==e}))}})),c.a.createElement("div",null,c.a.createElement("h1",{className:"title indent-mb-m"},"Phone catalog"),N?c.a.createElement("div",null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/phones/:id",exact:!0,component:g}),c.a.createElement(i.a,{path:"/phones",exact:!0,render:function(){return c.a.createElement(h,{phones:s,onAddToBasket:q})}}))):c.a.createElement(f,null)))},N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Sorry, page not found"))},O=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",exact:!0},"Home page")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/phones"},"Phones page"))))},_=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement(O,null)),c.a.createElement("main",null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:s}),c.a.createElement(i.a,{path:"/phones",component:y}),c.a.createElement(i.a,{component:N})))))};l.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3d4936d8.chunk.js.map