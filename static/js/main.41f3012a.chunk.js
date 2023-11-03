(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=(c(33),c(34),c(7)),r=c(3),s=(c(35),c(11)),j=c.n(s),i=c(2),o=function(){var e=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:e,children:"Home"}),Object(i.jsx)(a.c,{to:"/people",className:e,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})})]})},l=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},b=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},h=c(4),d=c(22),O=c(0),u=(c(37),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(e){var t=e.person,c=t.name,n=t.sex,r=t.slug;return Object(i.jsx)(a.b,{to:"/people/".concat(r),className:j()({"has-text-danger":"f"===n}),children:c})},p=function(e){var t=e.people,c=Object(r.r)().peopleSlug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=e.sex,n=e.born,a=e.died,r=e.motherName,s=e.mother,o=e.fatherName,l=e.father,b=e.slug;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":b===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(m,{person:e})}),Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:void 0!==s?Object(i.jsx)(m,{person:s}):r}),Object(i.jsx)("td",{children:void 0!==l?Object(i.jsx)(m,{person:l}):o})]},b)}))})]})},f=function(){var e=Object(O.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(O.useState)(!1),r=Object(h.a)(a,2),s=r[0],j=r[1],o=Object(O.useState)(!1),l=Object(h.a)(o,2),b=l[0],m=l[1],f=Object(O.useMemo)((function(){return!b&&!s&&0===c.length}),[s,b,c]),v=Object(O.useMemo)((function(){return!b&&!s&&c.length>0}),[s,b,c]);return Object(O.useEffect)((function(){j(!0),m(!1),x().then((function(e){return n(function(e){return e.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{motherName:t.motherName||"-",fatherName:t.fatherName||"-",mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))}(e))})).catch((function(){return m(!0)})).finally((function(){return j(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[s&&Object(i.jsx)(u,{}),b&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),f&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),v&&Object(i.jsx)(p,{people:c})]})})]})},v=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(b,{})}),Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(l,{})}),Object(i.jsx)(r.c,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsxs)(r.c,{path:"people",children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(r.c,{path:":peopleSlug",element:Object(i.jsx)(f,{})})]})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(v,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.41f3012a.chunk.js.map