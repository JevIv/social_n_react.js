(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s(5),c=s(36),i=s(37),o=s(39),r=s(38),a=s(11),u=s(0),p=s.n(u),j=s(14),b=s(1),d=function(t){return{isAuth:t.auth.isAuth}},l=function(t){var e=function(e){Object(o.a)(u,e);var s=Object(r.a)(u);function u(){return Object(c.a)(this,u),s.apply(this,arguments)}return Object(i.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(n.a)({},this.props)):Object(b.jsx)(a.a,{to:"/login"})}}]),u}(p.a.Component);return Object(j.b)(d)(e)}},299:function(t,e,s){t.exports={item:"ProfileInfo_item__30vK9",descriptionBlock:"ProfileInfo_descriptionBlock__qr1Qr"}},300:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__SynC7",posts:"MyPosts_posts__3vPzx"}},301:function(t,e,s){t.exports={item:"Post_item__203Ej"}},303:function(t,e,s){"use strict";s.r(e);var n=s(5),c=s(36),i=s(37),o=s(39),r=s(38),a=s(0),u=s.n(a),p=s(299),j=s.n(p),b=s(66),d=s(1),l=(u.a.Component,s(129)),f=function(t){var e=Object(a.useState)(!1),s=Object(l.a)(e,2),n=s[0],c=s[1],i=Object(a.useState)(t.status),o=Object(l.a)(i,2),r=o[0],u=o[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(d.jsxs)("div",{children:[!n&&Object(d.jsx)("div",{children:Object(d.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"---NO-STATUS---"})}),n&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(r)},value:r})})]})},h=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:j.a.descriptionBlock,children:Object(d.jsx)(f,{status:s,updateStatus:n})})}):Object(d.jsx)(b.a,{})},O=s(97),x=s(300),m=s.n(x),v=s(301),g=s.n(v),P=function(t){return Object(d.jsxs)("div",{className:g.a.item,children:[Object(d.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO2hiSp4nCSEmXcDvijRtsDcBH166buyhng&usqp=CAU",alt:""}),t.message,Object(d.jsxs)("div",{children:[t.likesCount,Object(d.jsx)("span",{children:"Like"})]})]})},S=s(90),k=s(128),y=s(86),_=s(33),C=u.a.memo((function(t){var e=t.posts.map((function(t){return Object(d.jsx)(P,{message:t.message,likesCount:t.likesCount})}));return Object(d.jsxs)("div",{className:m.a.postsBlock,children:[Object(d.jsx)("h3",{children:"My posts"}),Object(d.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(d.jsx)("div",{className:m.a.posts,children:e})]})})),A=Object(y.a)(10),B=Object(k.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(S.a,{name:"newPostText",component:_.b,validate:[y.b,A],placeholder:"Enter your message"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add post"})})]})})),w=C,N=s(14),T=Object(N.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(O.a)(e))}}}))(w),I=function(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(d.jsx)(T,{})]})},U=s(11),D=s(298),E=s(9),M=function(t){Object(o.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(d.jsx)(I,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(E.d)(Object(N.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:O.d,getStatus:O.c,updateStatus:O.e}),U.f,D.a)(M)}}]);
//# sourceMappingURL=3.15cbcc91.chunk.js.map