(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{289:function(t,e,s){t.exports={content__image:"Profile_content__image__108Vi",content__background:"Profile_content__background__3PGvE",content__edit:"Profile_content__edit__1dxjH",content__userPhoto:"Profile_content__userPhoto__3cBXq",content__editPhoto:"Profile_content__editPhoto__3zsf7",content__info:"Profile_content__info__2_0bz",content__name:"Profile_content__name__GKblb",content__data:"Profile_content__data__Jefik",editStatus:"Profile_editStatus__JKRcK",editStatusText:"Profile_editStatusText__19zWF",addStatus:"Profile_addStatus__rDBlk"}},290:function(t,e,s){t.exports={wrapperTextarea:"MyPosts_wrapperTextarea__T1NCH",myPostForm:"MyPosts_myPostForm__3YMBI",postsTextarea:"MyPosts_postsTextarea__VyBsg",avatar:"MyPosts_avatar__3BEw_"}},293:function(t,e,s){t.exports={posts__item:"Post_posts__item__3d1SX",posts__image:"Post_posts__image__2fjvP",postWrapper:"Post_postWrapper__2b5-e",postSender:"Post_postSender__1qefa",posts__post:"Post_posts__post__11AZl",likesCount:"Post_likesCount__2yveC",likesCountNumeral:"Post_likesCountNumeral__38Nhz"}},295:function(t,e,s){"use strict";s.r(e);var a=s(3),n=s(27),o=s(28),c=s(30),i=s(29),r=s(1),_=s(0),u=s.n(_),l=s(12),p=s(289),j=s.n(p),d=s(96),b=s(41),m=s(128),f=s(129),h=s(73),O=s(95),x=s(290),P=s.n(x),v=Object(h.a)(50),g=Object(h.b)(3),N=Object(O.a)("textarea"),S=Object(f.a)({form:"newPostMessage"})((function(t){return Object(r.jsxs)("form",{className:P.a.myPostForm,onSubmit:t.handleSubmit,children:[Object(r.jsx)(m.a,{component:N,name:"newPostMessage",validate:[v,g]}),Object(r.jsx)("button",{children:"Send"})]})})),k=s(293),y=s.n(k),w=function(t){return Object(r.jsxs)("div",{className:y.a.posts__item,children:[Object(r.jsx)("div",{className:y.a.posts__image}),Object(r.jsxs)("div",{className:y.a.postWrapper,children:[Object(r.jsx)("div",{className:y.a.postSender,children:t.name}),Object(r.jsx)("div",{className:y.a.posts__post,children:t.post})]}),Object(r.jsx)("div",{className:y.a.likes,children:Object(r.jsxs)("span",{className:y.a.likesCount,children:["LIKE ",Object(r.jsx)("span",{className:y.a.likesCountNumeral,children:t.likesCount})]})})]})},C=u.a.memo((function(t){var e=Object(b.a)(t.posts).reverse().map((function(t){return Object(r.jsx)(w,{name:"Name Surname",id:t.id,post:t.post,likesCount:t.likesCount},t.id)}));return Object(r.jsxs)("div",{className:P.a.postsWrapper,children:[Object(r.jsx)("h2",{className:P.a.title,children:"My posts"}),Object(r.jsx)("div",{className:P.a.postsTextarea,children:Object(r.jsxs)("div",{className:P.a.wrapperTextarea,children:[Object(r.jsx)("div",{className:P.a.avatar,children:Object(r.jsx)("img",{src:"https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",alt:""})}),Object(r.jsx)(S,{onSubmit:function(e){t.addPost(e.newPostMessage)}})]})}),e]})})),T=Object(l.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(d.a)(e))}}}))(C),M=s(51),z=s(36),B=s(10),I=s(130),U=s.p+"static/media/edit.1f85f626.png",F=function(t){var e=Object(_.useState)(t.status),s=Object(I.a)(e,2),a=s[0],n=s[1],o=Object(_.useState)(!1),c=Object(I.a)(o,2),i=c[0],u=c[1];Object(_.useEffect)((function(){n(t.status)}),[t.status]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:!i&&Object(r.jsxs)("div",{className:j.a.editStatus,children:[Object(r.jsx)("span",{onClick:function(){u(!0)},className:j.a.editStatusText,children:t.status||"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"}),Object(r.jsx)("img",{src:U,alt:""})]})}),i&&Object(r.jsx)("div",{children:Object(r.jsx)("input",{autoFocus:!0,onBlur:function(){u(!1),t.updateStatus(a)},onChange:function(t){n(t.currentTarget.value)},value:a})})]})},W=function(t){return t.profile?t.isAuth||t.match.params?Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:j.a.content__header,children:[Object(r.jsxs)("div",{className:j.a.content__image,children:[Object(r.jsx)("div",{className:j.a.content__background,children:Object(r.jsx)("img",{src:"https://coremission.net/wp-content/uploads/2019/10/bezshovnaya-tekstura-6.jpg",alt:""})}),Object(r.jsx)("div",{className:j.a.content__userPhoto,children:Object(r.jsx)("img",{src:null!=t.profile.photos.large?t.profile.photos.large:z.a,alt:""})})]}),Object(r.jsxs)("div",{className:j.a.content__info,children:[Object(r.jsx)("h1",{className:j.a.content__name,children:t.profile.fullName}),Object(r.jsx)(F,{status:t.status,updateStatus:t.updateStatus})]})]}),Object(r.jsx)(T,{})]}):Object(r.jsx)(B.a,{to:"/login"}):Object(r.jsx)(M.a,{})},A=s(9),E=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authUserId)||this.props.history.push("/users"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(r.jsx)(W,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(A.d)(Object(l.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authUserId:t.auth.userId,isAuth:t.auth.isAuth,fake:t.profilePage.fake}}),{getUserProfile:d.c,getUserStatus:d.d,updateStatus:d.e}),B.f)(E)}}]);
//# sourceMappingURL=4.7988f57c.chunk.js.map