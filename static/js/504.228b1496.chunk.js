"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[504],{504:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(791),a=t(434),s=t(302),i=function(e){var n=e.contacts;return{loading:n.loading,error:n.error}},c=function(e){var n=e.filter,t=e.contacts;if(!n)return t.items;var r=n.toLocaleLowerCase();return t.items.filter((function(e){return e.name.toLocaleLowerCase().includes(r)}))},o="ContactsItem_listItem__5AWn7",l="ContactsItem_deleteItem__Jq2A-",u=t(184);function d(){var e=(0,a.v9)(c),n=(0,a.I0)(),t=e.map((function(e){var t=e.name,r=e.number,a=e.id;return(0,u.jsxs)("li",{className:o,children:[t,": ",r,(0,u.jsx)("span",{className:l,onClick:function(){return function(e){var t=(0,s.GK)(e);n(t)}(a)},children:"Delete"})]},a)}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ol",{children:t})})}var m=d;d.defaultProps={items:[]};var f=t(885),h=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},p="FormAddPhone_titleInput__W4zcS",v="FormAddPhone_input__liDne",x="FormAddPhone_formGrup__loc3f",_="FormAddPhone_button__1UklK";function j(){var e=(0,a.I0)(),n=(0,a.v9)(c),t=(0,r.useState)(""),i=(0,f.Z)(t,2),o=i[0],l=i[1],d=(0,r.useState)(""),m=(0,f.Z)(d,2),j=m[0],b=m[1],g=h(),N=h(),C=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":return l(r);case"number":return b(r);default:return}},y=function(t){if(function(e){var t=e.name;return n.find((function(e){return e.name===t}))}(t))return alert("".concat(t.name," is already in contacts"));var r=(0,s.uK)(t);e(r)};return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y({name:o,number:j}),l((function(e){return""})),b((function(e){return""}))},children:[(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)("label",{className:p,htmlFor:"name",children:"Name"}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{className:v,id:g,type:"text",value:o,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:C})]}),(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)("label",{className:p,htmlFor:"number",children:"Number"}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{className:v,id:N,type:"tel",name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:C})]}),(0,u.jsx)("button",{className:_,children:"Add contact"})]})}var b=t(634),g=function(e){return e.filter},N={titleInput:"Filter_titleInput__KwdM2",input:"Filter_input__N7T3z"},C=function(){var e=(0,a.v9)(g),n=(0,a.I0)();return(0,u.jsxs)("div",{className:N.formGrup,children:[(0,u.jsx)("label",{className:N.titleInput,children:"Find contacts by name"}),(0,u.jsx)("br",{}),(0,u.jsx)("input",{className:N.input,type:"text",name:"filter",onChange:function(e){var t=e.target.value;n((0,b.T)(t))},value:e})]})},y="ContactsList_title__Nc-fb";function A(){var e=(0,a.v9)(c),n=(0,a.v9)(i),t=n.loading,o=n.error,l=(0,a.I0)();return(0,r.useEffect)((function(){l((0,s.yF)())}),[l]),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:40,color:"#010101"},children:[(0,u.jsx)("h2",{className:y,children:"Phonebook"}),(0,u.jsx)(j,{}),(0,u.jsx)(C,{}),(0,u.jsx)("h2",{className:y,children:"Contacts"}),!t&&e.length>0&&(0,u.jsx)(m,{contacts:e}),o&&(0,u.jsx)("p",{children:"oops, something went wrong"})]})}function I(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Contacts page"}),(0,u.jsx)(A,{})]})}}}]);
//# sourceMappingURL=504.228b1496.chunk.js.map