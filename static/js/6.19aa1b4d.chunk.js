(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{91:function(e,t,a){e.exports={form:"formComStyles_form__NVSrP",label:"formComStyles_label__1RJmi",input:"formComStyles_input__2jYTY",icon:"formComStyles_icon__2tha-",button:"formComStyles_button__32-oN"}},98:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(3),s=a(35),r=a(36),l=a(39),o=a(38),i=a(0),c=a(14),m=a(40),u=a(15),b=a(91),h=a.n(b),p=a(1),j=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.registerUser(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(p.jsxs)("label",{className:h.a.label,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange,className:h.a.input})]}),Object(p.jsxs)("label",{className:h.a.label,children:["Email",Object(p.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange,className:h.a.input})]}),Object(p.jsxs)("label",{className:h.a.label,children:["Password",Object(p.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange,className:h.a.input,minLength:"7"})]}),Object(p.jsx)(m.a,{type:"submit",title:"Register",className:h.a.button})]})}}]),a}(i.Component),f=Object(c.b)(null,(function(e){return{registerUser:function(t){return e(u.a.registerUser(t))}}}))(j)}}]);
//# sourceMappingURL=6.19aa1b4d.chunk.js.map