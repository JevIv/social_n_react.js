(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(34),a=n(5),c="SEND_MESSAGE",o={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Victor"},{id:6,name:"Valera"}],messageData:[{id:1,name:"Hi"},{id:2,name:"How is your IT-kamasutra?"},{id:3,name:"Bazuka!"},{id:4,name:"Yo!"},{id:5,name:"Kabzda!"},{id:6,name:"Kotejka"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[{id:7,name:n}])});default:return e}}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(131),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f1ba24dc-bbe6-4624-b099-7a74a9a0cc75"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},23:function(e,t,n){e.exports={nav:"Navbar_nav__2zGKO",item:"Navbar_item__2zhvZ",active:"Navbar_active__3ztA-"}},244:function(e,t,n){},245:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(97),c=n(106),o={},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return e},s=n(10),u=n.n(s),l=n(18),d=n(34),j=n(5),p=n(16),b=function(e,t,n,r){e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},f="FOLLOW",h="UNFOLLOW",g="SET_USERS",O="SET_CURRENT_PAGE",A="SET_TOTAL_USERS_COUNT",m="TOGGLE_IS_FETCHING",S="TOGGLE_IS_FOLLOWING_PROGRESS",x={users:[],pageSize:5,totalUsersCount:20,currentPage:1,isFetching:!1,followingInProgress:[]},v=function(e){return{type:f,userId:e}},w=function(e){return{type:h,userId:e}},C=function(e){return{type:O,currentPage:e}},k=function(e){return{type:m,isFetching:e}},y=function(e,t){return{type:S,isFetching:e,userId:t}},N=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(y(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(j.a)(Object(j.a)({},e),{},{users:b(e.users,t.userId,"id",{followed:!0})});case h:return Object(j.a)(Object(j.a)({},e),{},{users:b(e.users,t.userId,"id",{followed:!1})});case g:return Object(j.a)(Object(j.a)({},e),{},{users:Object(d.a)(t.users)});case O:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case A:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case m:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case S:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},P=n(45),E="samurai-network/auth/SET_USER_DATA",Q={userId:null,email:null,login:null,isAuth:!1},B=function(e,t,n,r){return{type:E,payload:{userId:e,email:t,login:n,isAuth:r}}},T=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,o=r.login,t(B(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},U=n(132),D=n(130),z="INITIALIZED_SUCCESS",W={initialized:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},F=Object(r.c)({profilePage:a.b,dialogsPage:c.a,sidebar:i,usersPage:I,auth:V,form:D.a,app:L}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,q=Object(r.e)(F,J(Object(r.a)(U.a)));window.__store__=q,window.store=q;var H=q,R=n(0),M=n.n(R),K=n(64),Y=n.n(K),G=(n(244),n(36)),Z=n(37),X=n(39),_=n(38),$=(n(245),n(23)),ee=n.n($),te=n(13),ne=n(1),re=function(){return Object(ne.jsxs)("nav",{className:ee.a.nav,children:[Object(ne.jsx)("div",{className:ee.a.item,children:Object(ne.jsx)(te.b,{to:"/profile",activeClassName:ee.a.active,children:"Profile"})}),Object(ne.jsx)("div",{className:ee.a.item,children:Object(ne.jsx)(te.b,{to:"/dialogs",activeClassName:ee.a.active,children:"Messages"})}),Object(ne.jsx)("div",{className:ee.a.item,children:Object(ne.jsx)(te.b,{to:"/users",activeClassName:ee.a.active,children:"Users"})}),Object(ne.jsx)("div",{className:ee.a.item,children:Object(ne.jsx)(te.b,{to:"",children:"News"})}),Object(ne.jsx)("div",{className:ee.a.item,children:Object(ne.jsx)(te.b,{to:"",children:"Music"})}),Object(ne.jsx)("div",{className:ee.a.item,children:Object(ne.jsx)(te.b,{to:"",children:"Settings"})})]})},ae=n(11),ce=n(14),oe=n(35),ie=n(68),se=n(129),ue=n(70),le=n.n(ue),de=n(134),je=n.n(de),pe=["currentPage","totalUsersCount","pageSize","onPageChanged","portionSize"],be=function(e){for(var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.portionSize,o=void 0===c?10:c,i=(Object(oe.a)(e,pe),Math.ceil(n/r)),s=[],u=1;u<=i;u++)s.push(u);var l=Math.ceil(i/o),d=Object(R.useState)(1),j=Object(se.a)(d,2),p=j[0],b=j[1],f=(p-1)*o+1,h=p*o;return Object(ne.jsxs)("div",{className:le.a.pagination,children:[p>1&&Object(ne.jsx)("button",{onClick:function(){return b(p-1)},children:"Previous"}),s.filter((function(e){return e>=f&&e<=h})).map((function(e){return Object(ne.jsx)("button",{className:je()(Object(ie.a)({},le.a.selectedPage,t===e),le.a.selectedPage),onClick:function(){a(e)},children:e},e)})),l>p&&Object(ne.jsx)("button",{onClick:function(){b(p+1)},children:"Next"})]})},fe=n(93),he=n.n(fe),ge=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(ne.jsxs)("div",{className:he.a.user,children:[Object(ne.jsxs)("span",{children:[Object(ne.jsx)("div",{children:Object(ne.jsx)(te.b,{to:"/profile/"+t.id,children:Object(ne.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",className:he.a.userPhoto})})}),Object(ne.jsx)("div",{children:t.followed?Object(ne.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"UnFollow"}):Object(ne.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(ne.jsxs)("span",{children:[Object(ne.jsxs)("span",{children:[Object(ne.jsx)("div",{children:t.name}),Object(ne.jsx)("div",{children:t.status})]}),Object(ne.jsxs)("span",{children:[Object(ne.jsx)("div",{children:"u.location.country"}),Object(ne.jsx)("div",{children:"u.location.city"})]})]})]})},Oe=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],Ae=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,o=Object(oe.a)(e,Oe);return Object(ne.jsxs)("div",{children:[Object(ne.jsx)(be,{currentPage:t,onPageChanged:a,totalUsersCount:n,pageSize:r}),c.map((function(e){return Object(ne.jsx)(ge,{user:e,followingInProgress:o.followingInProgress,follow:o.follow,unfollow:o.unfollow},e.id)}))]})},me=n(66),Se=n(135),xe=Object(Se.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ve=function(e){return e.usersPage.pageSize},we=function(e){return e.usersPage.totalUsersCount},Ce=function(e){return e.usersPage.currentPage},ke=function(e){return e.usersPage.isFetching},ye=function(e){return e.usersPage.followingInProgress},Ne=function(e){Object(X.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(G.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(ne.jsxs)(ne.Fragment,{children:[this.props.isFetching?Object(ne.jsx)(me.a,{}):null,Object(ne.jsx)(Ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(M.a.Component),Ie=Object(r.d)(Object(ce.b)((function(e){return{users:xe(e),pageSize:ve(e),totalUsersCount:we(e),currentPage:Ce(e),isFetching:ke(e),followingInProgress:ye(e)}}),{follow:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,e,p.c.follow.bind(p.c),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,e,p.c.unfollow.bind(p.c),w);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:C,toggleFollowingProgress:y,getUsers:function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(r){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(k(!0)),r(C(e)),n.next=4,p.c.getUsers(e,t);case 4:a=n.sent,r(k(!1)),r((o=a.items,{type:g,users:o})),r((c=a.totalCount,{type:A,count:c}));case 8:case"end":return n.stop()}var c,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ne),Pe=n(94),Ee=n.n(Pe),Qe=function(e){return Object(ne.jsxs)("header",{className:Ee.a.header,children:[Object(ne.jsx)("img",{src:"https://brandlogos.net/wp-content/uploads/2012/11/pearl-jam-vector-logo.png",alt:""}),Object(ne.jsx)("div",{className:Ee.a.loginBlock,children:e.isAuth?Object(ne.jsxs)("div",{children:[" ",e.login," - ",Object(ne.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(ne.jsx)(te.b,{to:"/login",children:"Login"})})]})},Be=function(e){Object(X.a)(n,e);var t=Object(_.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){return Object(ne.jsx)(Qe,Object(j.a)({},this.props))}}]),n}(M.a.Component),Te=Object(ce.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.data.resultCode&&t(B(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Be),Ve=n(128),Ue=n(33),De=n(86),ze=(n(252),n(54)),We=n.n(ze),Le=Object(Ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(ne.jsxs)("form",{onSubmit:t,children:[Object(Ue.c)("Email","email",[De.b],Ue.a),Object(Ue.c)("Password","password",[De.b],Ue.a,{type:"password"}),Object(Ue.c)(null,"rememberMe",[],Ue.a,{type:"checkbox"},"remember me"),n&&Object(ne.jsx)("div",{className:We.a.formSummaryError,children:n}),Object(ne.jsx)("div",{children:Object(ne.jsx)("button",{children:"Login"})})]})})),Fe=Object(ce.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var r=Object(l.a)(u.a.mark((function r(a){var c,o;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(T()):(o=c.data.messages.length>0?c.data.messages[0]:"Something is wrong",a(Object(P.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(ne.jsx)(ae.a,{to:"/profile"}):Object(ne.jsxs)("div",{children:[Object(ne.jsx)("h1",{children:"Login"}),Object(ne.jsx)(Le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Je=function(e){return function(t){return Object(ne.jsx)(R.Suspense,{fallback:Object(ne.jsx)("div",{children:"Loading..."}),children:Object(ne.jsx)(e,Object(j.a)({},t))})}},qe=M.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),He=M.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),Re=function(e){Object(X.a)(n,e);var t=Object(_.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(ne.jsxs)("div",{className:"app-wrapper",children:[Object(ne.jsx)(Te,{}),Object(ne.jsx)(re,{}),Object(ne.jsxs)("div",{className:"app-wrapper-content",children:[Object(ne.jsx)(ae.b,{path:"/dialogs",render:Je(qe)}),Object(ne.jsx)(ae.b,{path:"/profile/:userId?",render:Je(He)}),Object(ne.jsx)(ae.b,{path:"/users",render:function(){return Object(ne.jsx)(Ie,{})}}),Object(ne.jsx)(ae.b,{path:"/login",render:function(){return Object(ne.jsx)(Fe,{})}})]})]}):Object(ne.jsx)(me.a,{})}}]),n}(M.a.Component),Me=Object(r.d)(ae.f,Object(ce.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(T());Promise.all([t]).then((function(){e({type:z})}))}}}))(Re),Ke=function(e){return Object(ne.jsx)(ce.a,{store:H,children:Object(ne.jsx)(te.a,{children:Object(ne.jsx)(Me,{})})})},Ye=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,302)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},Ge=function(e){Y.a.render(Object(ne.jsx)(Ke,{}),document.getElementById("root"))};Ge(H.getState()),H.subscribe((function(){H.getState();Ge()})),Ye()},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return b}));var r=n(5),a=n(35),c=(n(0),n(54)),o=n.n(c),i=n(90),s=n(1),u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=r&&n;return Object(s.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(s.jsx)("div",{children:a}),c&&Object(s.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(s.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(s.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(i.a,Object(r.a)({placeholder:e,name:t,component:a,validate:n},c)),o]})}},54:function(e,t,n){e.exports={formControl:"FormsControl_formControl__2_JeK",error:"FormsControl_error__2g8it",formSummaryError:"FormsControl_formSummaryError__M0TSu"}},66:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.87ddf3e3.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},70:function(e,t,n){e.exports={pagination:"Pagination_pagination__jc95h",pageNumber:"Pagination_pageNumber__Pqm5C",selectedPage:"Pagination_selectedPage__3N0vZ"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},93:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2-b1c",user:"users_user__3BE9Q"}},94:function(e,t,n){e.exports={header:"Header_header__2pmxV",loginBlock:"Header_loginBlock__fuFk1"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(10),a=n.n(r),c=n(18),o=n(34),i=n(5),s=n(16),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",p={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},f=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:5};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[296,1,2]]]);
//# sourceMappingURL=main.ecb32208.chunk.js.map