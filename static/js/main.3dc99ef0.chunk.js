(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,function(e,t,n){var a={"./0.png":14,"./1.png":15};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=6},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/0.740159c9.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.18d803fb.png"},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=(n(12),n(2)),o=n(0);var l=function(e){var t=e.categories,n=void 0===t?[]:t,a=e.setCurrentCategory,c=e.currentCategory;return Object(o.jsxs)("header",{className:"flex-row px-1",children:[Object(o.jsx)("h2",{className:"",children:Object(o.jsx)("a",{"data-testid":"link",href:"/",children:"Marisa Bartelt - Full-Stack Web Developer"})}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row",children:n.map((function(e){return Object(o.jsx)("li",{className:"mx-2 ".concat(c.name===e.name?"navActive":"hoverable"),children:Object(o.jsx)("span",{onClick:function(){a(e)},children:e.name})},e.name)}))})})]})},j=n.p+"static/media/AboutMe.fff80c1f.jpg";var d=function(){return Object(o.jsxs)("section",{className:"my-5",children:[Object(o.jsx)("img",{src:j,className:"about-me",alt:"cover"}),Object(o.jsx)("h1",{id:"about",children:"Who am I?"}),Object(o.jsx)("p",{children:"For five years I worked in animal welfare before I made a career jump and enrolled in a 6 month intensive UW Coding Bootcamp. I now have experience in the following programs: HTML, CSS, JavaScript, Express.js, Node.js, SQL, NOSQL, React.js and more. I am also equipped with the ability to learn a wide variety of coding languages. I enjoy front-end developing but I am capable of working full-stack."})]})},u=n(5),b=function(e){var t=e.onClose,a=e.currentPhoto,c=a.name,r=a.description,i=a.deployed,s=a.github,l=a.index;return Object(o.jsx)("div",{className:"modalBackdrop",children:Object(o.jsxs)("div",{className:"modalContainer",children:[Object(o.jsxs)("h3",{className:"modalTitle",children:[c," "]}),Object(o.jsx)("img",{src:n(6)("./".concat(l,".png")),alt:"current category"}),Object(o.jsxs)("p",{children:[r,Object(o.jsx)("a",{href:"/",children:i}),Object(o.jsx)("a",{href:"/",children:s})]}),Object(o.jsx)("button",{type:"button",onClick:t,children:"Close"})]})})},m=function(e){var t=e.category,c=Object(a.useState)(!1),r=Object(s.a)(c,2),i=r[0],l=r[1],j=Object(a.useState)([{name:"The Chef's Kiss",category:"Portfolio",description:"A website that allows the user to upload, browse, comment, and vote on recipe's.",deployed:"https://rocky-dusk-49928.herokuapp.com/",github:"https://github.com/ksore85/daily-recipes"},{name:"My Mood Tracker",category:"Portfolio",description:"A website that allows the user to track their mood throughout their day.",deployed:"https://zimmermanc6588.github.io/mood-tracker/",github:"https://github.com/zimmermanc6588/mood-tracker"}]),d=Object(s.a)(j,1)[0],m=Object(a.useState)(),h=Object(s.a)(m,2),O=h[0],x=h[1],p=d.filter((function(e){return e.category===t})),f=function(e,t){x(Object(u.a)(Object(u.a)({},e),{},{index:t})),l(!i)};return Object(o.jsxs)("div",{children:[i&&Object(o.jsx)(b,{onClose:f,currentPhoto:O}),Object(o.jsx)("div",{className:"flex-row",children:p.map((function(e,t){return Object(o.jsx)("img",{src:n(6)("./".concat(t,".png")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return f(e,t)}},e.name)}))})]})};var h=function(e){var t=e.currentCategory;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{"data-testid":"h1tag",children:t.name}),Object(o.jsx)("p",{children:t.description}),Object(o.jsx)(m,{category:t.name})]})},O=n(3);var x=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),l=i[0],j=i[1],d=n.name,u=n.email,b=n.message,m=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."))};return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||(c(Object(O.a)({},e.target.name,e.target.value)),console.log("Form",n))},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:m})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:u,onBlur:m})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:b,onBlur:m})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var p=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:" I am proficient in: "}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:" HTML "}),Object(o.jsx)("li",{children:" CSS "}),Object(o.jsx)("li",{children:" JavaScript "}),Object(o.jsx)("li",{children:" Express.js "}),Object(o.jsx)("li",{children:" Node.js "}),Object(o.jsx)("li",{children:" React.js "}),Object(o.jsx)("li",{children:" SQL "}),Object(o.jsx)("li",{children:" NOSQL "})]}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",children:"Dowload Full Resume"})]})};var f=function(){return Object(o.jsxs)("div",{className:"footer flex-row",children:[Object(o.jsx)("button",{type:"button",className:"button",children:Object(o.jsx)("a",{href:"https://stackoverflow.com/users/15465628/marisa",target:"_blank",children:"Stack Overflow"})}),Object(o.jsx)("button",{type:"button",className:"button",children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/marisa-bartelt-28119b20a/",target:"_blank",children:"LinkedIn"})}),Object(o.jsx)("button",{type:"button",className:"button",children:Object(o.jsx)("a",{href:"https://github.com/marisandb",target:"_blank",children:"Github"})})]})};var g=function(){var e=Object(a.useState)([{name:"About Me",description:"Short description about Marisa B"},{name:"Resume",description:"My qualifications as an employee"},{name:"Portfolio",description:"My personal and professional projects"},{name:"Contact",desription:"Contact me with any questions/comments."}]),t=Object(s.a)(e,1)[0],n=Object(a.useState)(t[0]),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{categories:t,setCurrentCategory:i,currentCategory:r}),Object(o.jsxs)("main",{children:["Portfolio"===r.name&&Object(o.jsx)(h,{currentCategory:r}),"About Me"===r.name&&Object(o.jsx)(d,{currentCategory:r}),"Resume"===r.name&&Object(o.jsx)(p,{currentCategory:r}),"Contact"===r.name&&Object(o.jsx)(x,{currentCategory:r}),Object(o.jsx)(f,{})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.3dc99ef0.chunk.js.map