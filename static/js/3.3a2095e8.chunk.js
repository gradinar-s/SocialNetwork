(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{293:function(e,t,s){e.exports={topSectionProfile:"Profile_topSectionProfile__19sRo",wrapperMainAvatar:"Profile_wrapperMainAvatar__2b8ua",mainAvatar:"Profile_mainAvatar__25PbP",buttonEditBasicUserInfo:"Profile_buttonEditBasicUserInfo__3xdHA",decision:"Profile_decision__p0SNL",buttonSaveEditBasicUserInfo:"Profile_buttonSaveEditBasicUserInfo__300dE",buttonCancelEditBasicUserInfo:"Profile_buttonCancelEditBasicUserInfo__38F3K",file:"Profile_file__3h_Ah",buttonEditMainAvatar:"Profile_buttonEditMainAvatar__12hSc",wrapperBodyStatus:"Profile_wrapperBodyStatus__2e2D4",textStatus:"Profile_textStatus__1xOS-",wrapperTextStatus:"Profile_wrapperTextStatus__21JtH",addStatus:"Profile_addStatus__rDBlk"}},294:function(e,t,s){e.exports={wrapperTextarea:"MyPosts_wrapperTextarea__T1NCH",myPostForm:"MyPosts_myPostForm__3YMBI",postsTextarea:"MyPosts_postsTextarea__VyBsg",btnAddPost:"MyPosts_btnAddPost__1FlPW",title:"MyPosts_title__3Ye2x"}},295:function(e,t,s){e.exports={wrapperBasicUserInfo:"BasicUserInfo_wrapperBasicUserInfo__2yIrI",userInfo:"BasicUserInfo_userInfo__2OMpG",userName:"BasicUserInfo_userName__3pVHt",aboutMe:"BasicUserInfo_aboutMe__2CvKQ",lookingForAJobDescription:"BasicUserInfo_lookingForAJobDescription__dDOGx",contacts:"BasicUserInfo_contacts__1iqY0",aboutMeDescription:"BasicUserInfo_aboutMeDescription__3wflE",lookingForAJob:"BasicUserInfo_lookingForAJob__3vd6s",noLookingForAJob:"BasicUserInfo_noLookingForAJob__2tbsu",wrapperContacts:"BasicUserInfo_wrapperContacts__3_PB0",contactItem:"BasicUserInfo_contactItem__3bw3b",userInfo_mEdit:"BasicUserInfo_userInfo_mEdit__BOpz4",wrapperBasicUserInfo_mEdit:"BasicUserInfo_wrapperBasicUserInfo_mEdit__3g2v1",generalInfoAboutMe_mEdit:"BasicUserInfo_generalInfoAboutMe_mEdit__mJLjw",aboutMe_mEdit:"BasicUserInfo_aboutMe_mEdit__3nDRW",lookingForAJobDescription_mEdit:"BasicUserInfo_lookingForAJobDescription_mEdit__n0rfM",userName_mEdit:"BasicUserInfo_userName_mEdit__Td17h",lookingForAJob_mEdit:"BasicUserInfo_lookingForAJob_mEdit__1gPSC",contacts_mEdit:"BasicUserInfo_contacts_mEdit__jh_bM",contactItem_mEdit:"BasicUserInfo_contactItem_mEdit__27D_m"}},298:function(e,t,s){e.exports={posts__item:"Post_posts__item__3d1SX",posts__image:"Post_posts__image__2fjvP",postWrapper:"Post_postWrapper__2b5-e",postSender:"Post_postSender__1qefa",posts__post:"Post_posts__post__11AZl",likesCount:"Post_likesCount__2yveC",likesCountNumeral:"Post_likesCountNumeral__38Nhz"}},299:function(e,t,s){"use strict";s.r(t);var a=s(3),o=s(27),i=s(28),r=s(30),n=s(29),c=s(1),l=s(0),u=s.n(l),p=s(11),d=s(100),_=s(293),b=s.n(_),f=s(52),j=s(36),m=s(10),h=s.p+"static/media/edit.1f85f626.png",O=s(43),x=s(132),v=s(133),I=s(59),P=s(98),N=s(294),g=s.n(N),A=Object(I.a)(50),k=Object(I.b)(3),U=Object(P.a)("textarea"),B=Object(v.a)({form:"newPostMessage"})((function(e){return Object(c.jsxs)("form",{className:g.a.myPostForm,onSubmit:e.handleSubmit,children:[Object(c.jsx)(x.a,{component:U,name:"newPostMessage",validate:[A,k]}),Object(c.jsx)("button",{className:g.a.btnAddPost,children:"Send"})]})})),S=s(298),E=s.n(S),w=function(e){return Object(c.jsxs)("div",{className:E.a.posts__item,children:[Object(c.jsx)("div",{className:E.a.posts__image}),Object(c.jsxs)("div",{className:E.a.postWrapper,children:[Object(c.jsx)("div",{className:E.a.postSender,children:e.name}),Object(c.jsx)("div",{className:E.a.posts__post,children:e.post})]}),Object(c.jsx)("div",{className:E.a.likes,children:Object(c.jsxs)("span",{className:E.a.likesCount,children:["LIKE ",Object(c.jsx)("span",{className:E.a.likesCountNumeral,children:e.likesCount})]})})]})},M=s(99),C=u.a.memo((function(e){var t=Object(O.a)(e.posts).reverse().map((function(e){return Object(c.jsx)(w,{name:"Name Surname",id:e.id,post:e.post,likesCount:e.likesCount},e.id)}));return Object(c.jsxs)("div",{className:g.a.postsWrapper,children:[Object(c.jsx)("div",{className:g.a.title,children:e.isOwner?"My posts":Object(c.jsxs)("div",{children:["Publication ",Object(c.jsx)("span",{children:e.profile.fullName})]})}),Object(c.jsx)("div",{className:g.a.postsTextarea,children:Object(c.jsx)("div",{className:g.a.wrapperTextarea,children:Object(c.jsx)(B,{onSubmit:function(t){e.addPostActionCreator(t.newPostMessage)}})})}),t]})})),F=Object(p.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),{addPostActionCreator:M.a})(C),y=(s(53),s(295)),J=s.n(y),D=s(9),T=Object(D.d)(Object(p.b)((function(e){return{userId:e.auth.userId,isAuth:e.auth.isAuth,authUserProfile:e.auth.authUserProfile}}),{}),m.f)((function(e){var t=Object(l.useState)(e.status),s=Object(d.a)(t,2),a=s[0],o=s[1],i=Object(l.useState)(!1),r=Object(d.a)(i,2),n=r[0],u=r[1];Object(l.useEffect)((function(){o(e.status)}),[e.status]);return Object(c.jsxs)("div",{className:b.a.wrapperBodyStatus,children:[Object(c.jsx)("div",{children:!n&&Object(c.jsx)("div",{className:b.a.wrapperTextStatus,children:Object(c.jsxs)("span",{onClick:e.isAuth&&e.isOwner&&function(){u(!0)},className:b.a.textStatus,children:[e.status||"",e.isAuth&&e.isOwner&&Object(c.jsx)("img",{src:h,alt:""})]})})}),n&&Object(c.jsx)("div",{children:Object(c.jsx)("input",{autoFocus:!0,onBlur:function(){u(!1),e.updateStatus(a)},onChange:function(e){o(e.currentTarget.value)},value:a})})]})})),L=function(e){return Object(c.jsxs)("div",{className:J.a.userInfo,children:[Object(c.jsx)("div",{className:J.a.userName,children:e.profile.fullName}),Object(c.jsx)(T,{isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{className:J.a.wrapperBasicUserInfo,children:Object(c.jsxs)("div",{className:J.a.basicUserInfo,children:[Object(c.jsx)("div",{className:J.a.aboutMe,children:"About me"}),Object(c.jsx)("p",{className:J.a.aboutMeDescription,children:e.profile.aboutMe}),Object(c.jsx)("div",{className:e.profile.lookingForAJob?J.a.lookingForAJob:J.a.noLookingForAJob,children:"Looking for a job"}),Object(c.jsxs)("div",{className:J.a.lookingForAJobDescription,children:["Proffesionas skills",Object(c.jsx)("p",{children:e.profile.lookingForAJobDescription})]})]})})]})},W=Object(P.a)("input"),z=Object(P.a)("textarea"),H=Object(v.a)({form:"editProfile"})((function(e){return Object(c.jsx)("form",{onSubmit:e.handleSubmit,className:J.a.userInfo_mEdit,id:"userInfo",children:Object(c.jsx)("div",{className:J.a.wrapperBasicUserInfo_mEdit,children:Object(c.jsxs)("div",{className:J.a.generalInfoAboutMe_mEdit,children:[Object(c.jsxs)("div",{className:J.a.userName_mEdit,children:[Object(c.jsx)("label",{htmlFor:"fullName",children:"Full Name"}),Object(c.jsx)(x.a,{component:W,name:"fullName",validate:[I.c]})]}),Object(c.jsxs)("div",{className:J.a.aboutMe_mEdit,children:[Object(c.jsx)("label",{htmlFor:"aboutMe",children:"About me"}),Object(c.jsx)(x.a,{component:z,name:"aboutMe",validate:[I.c]})]}),Object(c.jsx)("div",{className:J.a.lookingForAJob_mEdit,children:Object(c.jsx)(x.a,{component:W,type:"checkbox",label:"Looking for a job",name:"lookingForAJob"})}),Object(c.jsxs)("div",{className:J.a.lookingForAJobDescription_mEdit,children:[Object(c.jsx)("label",{htmlFor:"skills",children:"Proffesionas skills"}),Object(c.jsx)(x.a,{component:z,type:"text",name:"lookingForAJobDescription",validate:[I.c]})]})]})})})})),K=function(e){var t=u.a.useState(!1),s=Object(d.a)(t,2),a=s[0],o=s[1];if(!e.profile)return Object(c.jsx)(f.a,{});if(!e.isAuth&&!e.match.params)return Object(c.jsx)(m.a,{to:"/login"});return Object(c.jsxs)("section",{className:b.a.profile,children:[Object(c.jsxs)("div",{className:b.a.topSectionProfile,children:[Object(c.jsxs)("div",{className:b.a.wrapperMainAvatar,children:[Object(c.jsx)("img",{className:b.a.mainAvatar,src:e.profile.photos.large||j.a,alt:""}),e.isOwner&&a?Object(c.jsxs)("div",{className:b.a.decision,children:[Object(c.jsx)("button",{form:"userInfo",className:b.a.buttonSaveEditBasicUserInfo,children:"Save"}),Object(c.jsx)("button",{className:b.a.buttonCancelEditBasicUserInfo,onClick:function(){o(!1)},children:"Cancel"})]}):e.isOwner&&Object(c.jsx)("button",{className:b.a.buttonEditBasicUserInfo,onClick:function(){o(!0)},children:"Edit profile"}),e.isOwner&&a&&Object(c.jsxs)("div",{className:b.a.buttonEditMainAvatar,children:[Object(c.jsx)("input",{type:"file",id:"file",onChange:function(t){t.target.files.length&&e.setUserAvatar(t.target.files[0])},className:b.a.file}),Object(c.jsx)("label",{htmlFor:"file",children:Object(c.jsx)("img",{src:h,alt:""})})]})]}),a?Object(c.jsx)(H,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.setBasicInfo(t),o(!1)},setEditMode:o}):Object(c.jsx)(L,{setEditMode:o,isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus,profile:e.profile})]}),Object(c.jsx)(F,{isOwner:e.isOwner})]})},V=function(e){Object(r.a)(s,e);var t=Object(n.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.push("/users"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(c.jsx)(K,Object(a.a)(Object(a.a)({},this.props),{},{setBasicInfo:this.props.setBasicInfoTC,isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,setUserAvatar:this.props.setUserAvatarTC}))}}]),s}(u.a.Component);t.default=Object(D.d)(Object(p.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId,isAuth:e.auth.isAuth,fake:e.profilePage.fake}}),{getUserProfile:M.c,getUserStatus:M.d,updateStatus:M.g,setUserAvatarTC:M.f,setBasicInfoTC:M.e}),m.f)(V)}}]);
//# sourceMappingURL=3.3a2095e8.chunk.js.map