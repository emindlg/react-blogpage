(this["webpackJsonptrial-a"]=this["webpackJsonptrial-a"]||[]).push([[0],{170:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(22),c=a.n(o),r=(a(170),a(171),a(15)),l=a(16),s=a(32),d=a(6),j=a(314),u=a(30),b=a(318),m=a(319),g=a(320),h=a(281),p=a(332),O=a(157),x=a(62),f=a.n(x),v=a(151),y=a(45),w=Object(v.a)({apiKey:"AIzaSyAAUB6ebhvx8QBYJgW_xg4_Mc2iL_8Rg9k",authDomain:"fire-blog-3fe57.firebaseapp.com",databaseURL:"https://fire-blog-3fe57-default-rtdb.firebaseio.com",projectId:"fire-blog-3fe57",storageBucket:"fire-blog-3fe57.appspot.com",messagingSenderId:"573377398764",appId:"1:573377398764:web:18b182cde86d51902f62c9"}),k=Object(y.c)(w),C=new y.a,S=a(3),N=i.a.createContext();function V(){return Object(n.useContext)(N)}function q(e){var t=e.children,a=Object(n.useState)(),i=Object(r.a)(a,2),o=i[0],c=i[1],l=Object(n.useState)(!0),s=Object(r.a)(l,2),d=s[0],j=s[1];Object(n.useEffect)((function(){return Object(y.d)(k,(function(e){c(e),j(!1)}))}),[]);var u={currentUser:o,signup:function(e,t){return Object(y.b)(k,e,t)},login:function(e,t){return Object(y.e)(k,e,t)},logout:function(){Object(y.g)(k)},loginWithGoogle:function(){C.setCustomParameters({prompt:"select_account"}),Object(y.f)(k,C).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}};return Object(S.jsx)(N.Provider,{value:u,children:!d&&t})}a.p;var B=a.p+"static/media/blogPic.98579f80.png",U=Object(j.a)((function(e){var t;return{grow:{flexGrow:1,color:"#304352"},menuButton:{marginRight:e.spacing(2)},title:(t={display:"none",fontFamily:"Girassol"},Object(d.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(d.a)(t,"& span",{fontSize:20,color:"#00416A"}),t),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(d.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),loginRegDiv:{display:"flex",justifyContent:"space-between",cursor:"pointer"},login:{padding:10,fontSize:20,color:"white",textDecoration:"none"},register:{fontSize:20,padding:10,color:"white",textDecoration:"none"},maxWidthLogReg:{textDecoration:"none",color:"black"},cwImg:{width:40},appBar:{backgroundColor:"#E4E5E6",boxShadow:"0px 3px 13px black"},linkStyle:{textDecoration:"none",color:"black"}}}));function R(){var e=U(),t=i.a.useState(null),a=Object(r.a)(t,2),n=a[0],o=a[1],c=V(),d=c.currentUser,j=c.logout,u=Object(l.h)(),x=Boolean(n),v=function(){o(null)},y="primary-search-account-menu",w=Object(S.jsx)(S.Fragment,{children:(null===d||void 0===d?void 0:d.email)?Object(S.jsxs)(O.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:v,style:{marginTop:"2rem",marginLeft:"1rem"},children:[Object(S.jsx)(s.b,{to:"/profile",className:e.linkStyle,children:Object(S.jsx)(p.a,{onClick:v,children:"Profile"})}),Object(S.jsx)(s.b,{to:"/new-blog",className:e.linkStyle,children:Object(S.jsx)(p.a,{onClick:v,children:"New"})}),Object(S.jsx)(p.a,{onClick:function(){v(),j()},children:"Logout"})]}):Object(S.jsxs)(O.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:v,style:{marginTop:"2rem",marginLeft:"1.25rem"},children:[Object(S.jsx)(s.b,{to:"/login",className:e.linkStyle,children:Object(S.jsx)(p.a,{onClick:v,children:"Login"})}),Object(S.jsx)(s.b,{to:"/register",className:e.linkStyle,children:Object(S.jsx)(p.a,{onClick:v,children:"Register"})}),Object(S.jsx)(s.b,{to:"/about",className:e.linkStyle,children:Object(S.jsx)(p.a,{onClick:v,children:"About"})})]})});return Object(S.jsxs)("div",{className:e.grow,children:[Object(S.jsx)(b.a,{position:"fixed",className:e.appBar,children:Object(S.jsxs)(m.a,{children:[Object(S.jsx)(g.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){u("/")},children:Object(S.jsx)("img",{src:B,alt:"blogPic",className:e.cwImg})}),Object(S.jsx)("div",{className:e.grow}),Object(S.jsx)(s.b,{to:"/",className:e.login,children:Object(S.jsx)(h.a,{className:e.title,variant:"h6",noWrap:!0,children:Object(S.jsx)("span",{children:"FIREBASE BLOG"})})}),Object(S.jsx)("div",{className:e.grow}),Object(S.jsx)("div",{children:Object(S.jsx)(g.a,{edge:"end","aria-label":"account of current user","aria-controls":y,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},color:"inherit",children:Object(S.jsx)(f.a,{})})})]})}),w]})}var W=a(1),z=a.n(W),L=a(7),I=a(333),E=a(322),A=a(159),D=a(321),T=a(323),F=a(331),M=a.p+"static/media/blok.7e6674a5.png",K=a(68),X=function(e){K.b.success(e,{autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},P=function(e){K.b.error(e,{autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},Q=a(97),Z=a(50),G=a.p+"static/media/loading.91319f38.gif",Y=a.p+"static/media/google.d1e31f45.png",H=Z.a({email:Z.b("Enter your email").email("Invalid email.").min(2,"Email should be of minimum 2 characters length.").required("Email is required"),password:Z.b("Enter your password").required("Password is required")}),J=Object(j.a)((function(e){return{root:{height:"calc(100vh - 68px)","& .MuiPaper-root":{borderRadius:"10px",boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75);",height:"fit-content",marginTop:20,maxWidth:"500px"},marginTop:68},image:{backgroundImage:"url(https://picsum.photos/1600/900)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center",width:"100%",paddingTop:"40px"},paper:{margin:e.spacing(4,8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),width:e.spacing(25),height:e.spacing(25),backgroundColor:"#046582"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#046582",color:"white",fontWeight:"bold","&:hover":{color:"#046582"}},header:{fontFamily:"Girassol",textAlign:"center",color:"#046582"},loadingGif:{width:75},loadingContainer:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:15},bottomLink:{display:"flex",justifyContent:"space-evenly"},googleImg:{width:75,marginLeft:10},googleBtn:{backgroundColor:"white",fontWeight:"bold"}}}));var _=function(){var e=J(),t=Object(l.h)(),a=Object(n.useState)(!1),i=Object(r.a)(a,2),o=i[0],c=i[1],s=V(),d=s.login,j=s.loginWithGoogle,u=s.currentUser,b=Object(Q.a)({initialValues:{email:"",password:""},validationSchema:H,onSubmit:function(){var e=Object(L.a)(z.a.mark((function e(a){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,d(a.email,a.password);case 4:t("/"),X("Logged in successfully!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),P(e.t0.message);case 11:c(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()});return Object(n.useEffect)((function(){u&&t("/")}),[u,t]),Object(S.jsxs)(D.a,{container:!0,component:"main",className:e.root,children:[Object(S.jsx)(E.a,{}),Object(S.jsx)(D.a,{container:!0,justify:"center",className:e.image,children:Object(S.jsx)(D.a,{item:!0,xs:12,sm:8,md:5,component:A.a,elevation:6,square:!0,children:Object(S.jsxs)(D.a,{className:e.paper,children:[Object(S.jsx)(I.a,{className:e.avatar,children:Object(S.jsx)("img",{src:M,style:{width:200},alt:"candela"})}),Object(S.jsx)(h.a,{className:e.header,component:"h1",variant:"h5",children:"\u2500\u2500 Login \u2500\u2500"}),Object(S.jsxs)("form",{className:e.form,onSubmit:b.handleSubmit,children:[Object(S.jsx)(F.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",onChange:b.handleChange,onBlur:b.handleBlur,autoFocus:!0,value:b.values.email,error:b.touched.email&&Boolean(b.errors.email),helperText:b.touched.email&&b.errors.email}),Object(S.jsx)(F.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"password",value:b.values.password,onChange:b.handleChange,onBlur:b.handleBlur,error:b.touched.password&&Boolean(b.errors.password),helperText:b.touched.password&&b.errors.password}),o?Object(S.jsx)("div",{className:e.loadingContainer,children:Object(S.jsx)("img",{src:G,alt:"Loading",className:e.loadingGif})}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit,children:"Login"}),Object(S.jsxs)(T.a,{fullWidth:!0,variant:"contained",onClick:function(){j()},className:e.googleBtn,children:["With"," ",Object(S.jsx)("img",{src:Y,alt:"google",className:e.googleImg})]})]})]})]})})})]})},$=Z.a({email:Z.b("Enter your email").email("Email is invalid.").min(2,"email should be of minimum 2 characters length.").required("email is required"),password:Z.b("Enter your password").required("Password is required")}),ee=Object(j.a)((function(e){return{root:{height:"calc(100vh - 68px)","& .MuiPaper-root":{borderRadius:"10px",boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75);",height:"fit-content",marginTop:20,maxWidth:"500px"},marginTop:68},image:{backgroundImage:"url(https://picsum.photos/1600/900)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center",width:"100%",paddingTop:"40px"},paper:{margin:e.spacing(4,8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),width:e.spacing(25),height:e.spacing(25),backgroundColor:"#046582"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#046582",color:"white",fontWeight:"bold","&:hover":{color:"#046582"}},header:{fontFamily:"Girassol",textAlign:"center",color:"#046582"},loadingGif:{width:75},loadingContainer:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:15},bottomLink:{display:"flex",justifyContent:"space-evenly"},googleImg:{width:75,marginLeft:10},googleBtn:{backgroundColor:"white",fontWeight:"bold"}}}));var te=function(){var e=ee(),t=Object(l.h)(),a=Object(n.useState)(!1),i=Object(r.a)(a,2),o=i[0],c=i[1],s=V(),d=s.signup,j=s.loginWithGoogle,u=s.currentUser,b=Object(Q.a)({initialValues:{email:"",password:""},validationSchema:$,onSubmit:function(){var e=Object(L.a)(z.a.mark((function e(a){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,d(a.email,a.password);case 4:t("/"),X("Registered successfully!"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),P(e.t0.message);case 11:c(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()});return Object(n.useEffect)((function(){u&&t("/"),console.log({currentUser:u})}),[u,t]),Object(S.jsxs)(D.a,{container:!0,component:"main",className:e.root,children:[Object(S.jsx)(E.a,{}),Object(S.jsx)(D.a,{container:!0,justify:"center",className:e.image,children:Object(S.jsx)(D.a,{item:!0,xs:12,sm:8,md:5,component:A.a,elevation:6,square:!0,children:Object(S.jsxs)(D.a,{className:e.paper,children:[Object(S.jsx)(I.a,{className:e.avatar,children:Object(S.jsx)("img",{src:M,style:{width:200},alt:"candela"})}),Object(S.jsx)(h.a,{className:e.header,component:"h1",variant:"h5",children:"\u2500\u2500 Register \u2500\u2500"}),Object(S.jsxs)("form",{className:e.form,onSubmit:b.handleSubmit,children:[Object(S.jsx)(F.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",onChange:b.handleChange,onBlur:b.handleBlur,autoFocus:!0,value:b.values.email,error:b.touched.email&&Boolean(b.errors.email),helperText:b.touched.email&&b.errors.email}),Object(S.jsx)(F.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"password",value:b.values.password,onChange:b.handleChange,onBlur:b.handleBlur,error:b.touched.password&&Boolean(b.errors.password),helperText:b.touched.password&&b.errors.password}),o?Object(S.jsx)("div",{className:e.loadingContainer,children:Object(S.jsx)("img",{src:G,alt:"Loading",className:e.loadingGif})}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit,children:"Register"}),Object(S.jsxs)(T.a,{fullWidth:!0,variant:"contained",onClick:function(){j()},className:e.googleBtn,children:["With"," ",Object(S.jsx)("img",{src:Y,alt:"google",className:e.googleImg})]})]})]})]})})})]})},ae=a(324),ne=a(325),ie=a(328),oe=a(327),ce=a(326),re=a(95),le=a.n(re),se=a(96),de=a.n(se),je="data:image/png;base64,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",ue=a(94),be=a.n(ue),me=Object(j.a)({root:{minWidth:345,maxWidth:345},media:{height:140},module:{display:"-webkit-box","-webkit-line-clamp":2,"-webkit-box-orient":"vertical","text-overflow":"ellipsis",overflow:"hidden"},image:{padding:3},avatar:{marginBottom:"0.35em"},cardContent:{backgroundColor:"#efeefe",height:"125px"},title:{fontFamily:"Girassol",color:"#046582"}});function ge(e){var t=e.post,a=t.id,i=t.author,o=t.content,c=t.get_comment_count,s=(t.get_like_count,t.image),d=t.published_date,j=t.title,u=me(),b=Object(l.h)(),m=V().currentUser,p=Object(n.useState)(0),O=Object(r.a)(p,2),x=O[0],v=O[1];return Object(S.jsxs)(ae.a,{className:u.root,children:[Object(S.jsxs)(ne.a,{onClick:function(){m||P("Login for details of blog!"),b("/detail/".concat(a))},children:[Object(S.jsx)(ce.a,{className:u.media,image:s||je,title:j}),Object(S.jsxs)(oe.a,{className:u.cardContent,children:[Object(S.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",className:u.title,children:j}),Object(S.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:be()(d).format("MMM DD, YYYY")}),Object(S.jsx)("p",{className:u.module,children:o})]})]}),Object(S.jsxs)(ie.a,{children:[Object(S.jsx)(f.a,{className:u.avatar}),Object(S.jsx)(h.a,{gutterBottom:!0,variant:"h6",component:"h2",children:i})]}),Object(S.jsxs)(ie.a,{children:[Object(S.jsx)(g.a,{"aria-label":"add to favorites",className:u.image,children:Object(S.jsx)(le.a,{color:x>0?"secondary":"disabled",onClick:function(){v(x+1)}})}),Object(S.jsx)(h.a,{variant:"body2",color:"textSecondary",children:"".concat(x)}),Object(S.jsx)(g.a,{"aria-label":"comment count",className:u.image,children:Object(S.jsx)(de.a,{})}),Object(S.jsx)(h.a,{variant:"body2",color:"textSecondary",children:c})]})]})}var he=a(31),pe=a(33),Oe=i.a.createContext();function xe(){return Object(n.useContext)(Oe)}function fe(e){var t=e.children,a=Object(n.useState)(),i=Object(r.a)(a,2),o=i[0],c=i[1];Object(n.useEffect)((function(){var e=Object(pe.a)(),t=Object(pe.e)(e,"blogs");Object(pe.b)(Object(pe.d)(t),(function(e){var t=e.val(),a=[];for(var n in t)a.push(Object(he.a)({id:n},t[n]));c(a)}))}),[]);var l={addBlog:function(e){var t=Object(pe.a)(),a=Object(pe.e)(t,"blogs"),n=Object(pe.c)(a);Object(pe.g)(n,e)},currentBlogs:o,getOneBlog:function(e){return null===o||void 0===o?void 0:o.filter((function(t){return t.id===e}))},deleteOneBlog:function(e){var t=Object(pe.a)();Object(pe.f)(Object(pe.e)(t,"blogs/"+e))},updateBlog:function(e,t){var a=Object(pe.a)(),n={};return n["blogs/"+e]=t,Object(pe.h)(Object(pe.e)(a),n)}};return Object(S.jsx)(Oe.Provider,{value:l,children:t})}var ve=Object(j.a)((function(e){return{root:{flexGrow:1,"& > *":{paddingTop:e.spacing(5),background:"linear-gradient(to right bottom, #01579b, #f9fbe7)",height:"100vw"}},paper:{height:140,width:100},control:{padding:e.spacing(2)},title:{fontFamily:"Girassol",textAlign:"center",color:"#f5f5f5",paddingTop:"20px",paddingBottom:"50px"},mainRoot:{marginTop:70}}})),ye=function(){var e=ve(),t=xe().currentBlogs;return Object(S.jsx)("div",{className:e.mainRoot,children:Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(D.a,{container:!0,className:e.root,spacing:5,justify:"center",children:Object(S.jsxs)(D.a,{item:!0,xs:12,children:[Object(S.jsx)(h.a,{className:e.title,variant:"h3",noWrap:!0,children:"Dashboard"}),Object(S.jsx)(D.a,{container:!0,justify:"center",spacing:5,children:void 0===t?Object(S.jsx)("img",{src:G,alt:"loading"}):t?null===t||void 0===t?void 0:t.map((function(e,t){return Object(S.jsx)(D.a,{item:!0,children:Object(S.jsx)(ge,{post:e})},t)})):Object(S.jsx)("h3",{children:"No data available."})})]})})})})},we=Object(j.a)({root:{minWidth:275,maxWidth:500,width:"50%",display:"flex",flexDirection:"column",alignItems:"center",padding:25},title:{fontSize:14},pos:{marginBottom:12},mainDiv:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:500,marginTop:100},image:{borderRadius:"50%",width:"100px"}});function ke(){var e=we(),t=V().currentUser;return Object(S.jsx)("div",{className:e.mainDiv,children:Object(S.jsxs)(ae.a,{className:e.root,children:[Object(S.jsx)("img",{src:null===t||void 0===t?void 0:t.photoURL,className:e.image,alt:"profile"}),Object(S.jsxs)(oe.a,{children:[Object(S.jsx)(h.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Display Name"}),Object(S.jsx)(h.a,{variant:"h5",component:"h2",children:(null===t||void 0===t?void 0:t.displayName)||"Not Found!"}),Object(S.jsx)(h.a,{className:e.pos,color:"textSecondary",children:"Email"}),Object(S.jsx)(h.a,{variant:"body2",component:"p",children:(null===t||void 0===t?void 0:t.email)||"Not Found!"})]})]})})}a.p;var Ce=a(329),Se=a.p+"static/media/linkedinlogo.f7f3cad9.png",Ne=a.p+"static/media/gitLogo.1b136cd1.png",Ve=(a.p,Object(j.a)({root:{width:645,margin:"240px auto",boxShadow:"0px 10px 15px #795548",background:"linear-gradient(45deg, #fe6b1b 30%, #ff9e85 90%)"},media:{height:450,width:645},main:{backgroundColor:"red",display:"flex",background:"linear-gradient(to right bottom, #607d8b, #f0f4c3)"}}));function qe(){var e=Ve();return Object(S.jsx)("div",{className:e.main,children:Object(S.jsxs)(ae.a,{className:e.root,children:[Object(S.jsxs)(ne.a,{children:[Object(S.jsx)(ce.a,{className:e.media,image:"https://miro.medium.com/max/1400/1*qx9L1NCkuf2-gxT_ZzC-ig.jpeg",title:"pic"}),Object(S.jsxs)(oe.a,{children:[Object(S.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Emin DEL\u0130G\xd6Z"}),Object(S.jsx)(h.a,{variant:"h6",color:"textSecondary",component:"p",children:"Hi! I' m a Front-end Developer. Languages and libraries I use ; JavaScript, React.JS, Python, HTML, CSS, Bootstrap, MUI, Django"})]})]}),Object(S.jsxs)(ie.a,{children:[Object(S.jsx)(Ce.a,{component:"button",variant:"body2",underline:"none",onClick:function(){return window.open("https://www.linkedin.com/in/emin-delig\xf6z","_blank")},children:Object(S.jsx)("img",{src:Se,alt:"linklogo",style:{width:"35px"}})}),Object(S.jsx)(Ce.a,{component:"button",variant:"body2",underline:"none",onClick:function(){return window.open("https://github.com/emindlg","_blank")},children:Object(S.jsx)("img",{src:Ne,alt:"linklogo",style:{width:"57px"}})})]})]})})}var Be=a(330),Ue=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{padding:e.spacing(13),backgroundColor:"#046582"},blogImg:{width:200},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#046582",color:"white",fontWeight:"bold","&:hover":{color:"#046582"}},title:{fontSize:35,fontFamily:"Girassol",color:"#046582"}}}));function Re(e){var t=e.newBlog,a=e.setNewBlog,n=e.newBlogHandler,i=Ue();return Object(S.jsxs)(Be.a,{component:"main",maxWidth:"xs",children:[Object(S.jsx)(E.a,{}),Object(S.jsxs)("div",{className:i.paper,children:[Object(S.jsx)(I.a,{className:i.avatar,children:Object(S.jsx)("img",{src:M,alt:"blog",className:i.blogImg})}),Object(S.jsx)(h.a,{component:"h1",variant:"h5",className:i.title,children:"\u2500\u2500 New Blog \u2500\u2500"}),Object(S.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(S.jsxs)(D.a,{container:!0,spacing:2,children:[Object(S.jsx)(D.a,{item:!0,xs:12,children:Object(S.jsx)(F.a,{variant:"outlined",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",value:t.title,autoFocus:!0,onChange:function(e){return a(Object(he.a)(Object(he.a)({},t),{},{title:e.target.value}))}})}),Object(S.jsx)(D.a,{item:!0,xs:12,children:Object(S.jsx)(F.a,{variant:"outlined",required:!0,fullWidth:!0,name:"image",label:"Image URL",type:"text",id:"image",value:t.image,onChange:function(e){return a(Object(he.a)(Object(he.a)({},t),{},{image:e.target.value}))}})}),Object(S.jsx)(D.a,{item:!0,xs:12,children:Object(S.jsx)(F.a,{id:"outlined-multiline-static",required:!0,label:"Content",multiline:!0,value:t.content,fullWidth:!0,rows:15,onChange:function(e){return a(Object(he.a)(Object(he.a)({},t),{},{content:e.target.value}))},variant:"outlined"})})]}),Object(S.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",className:i.submit,onClick:n,children:"Submit"})]})]})]})}var We=function(){var e=V().currentUser,t=Object(n.useState)({author:e.email,title:"",content:"",get_comment_count:0,get_like_count:0,image:"",published_date:Date.now()}),a=Object(r.a)(t,2),i=a[0],o=a[1],c=xe().addBlog,s=Object(l.h)();return Object(S.jsx)("div",{style:{marginTop:90},children:Object(S.jsx)(Re,{newBlog:i,setNewBlog:o,newBlogHandler:function(e){e.preventDefault();try{c(i),s("/"),X("Blog added successfully!")}catch(t){console.log("Error",t)}}})})},ze=a.p+"static/media/no-data.a03fc88a.png",Le=Object(j.a)({root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:70,paddingBottom:20,background:"linear-gradient(to right bottom, #334d50, #cbcaa5)"},cardRoot:{minWidth:250,width:"55vw",boxShadow:"10px 10px 17px black"},media:{height:"0",paddingTop:"56.25%"},image:{padding:3},avatar:{marginBottom:"0.35em"},cardContent:{backgroundColor:"#efeefe",minHeight:"200px"},title:{fontFamily:"Girassol",textAlign:"center",margin:20,color:"#455a64",shadow:"10px 10px gray"},buttonGroup:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",margin:20},dataStyle:{textAlign:"center"}});function Ie(){var e=Le(),t=xe(),a=t.getOneBlog,n=t.deleteOneBlog,i=V().currentUser,o=Object(l.h)(),c=Object(l.i)().id;console.log(c);var r=a(c);return Object(S.jsxs)("div",{className:e.root,children:[Object(S.jsx)(h.a,{className:e.title,variant:"h3",noWrap:!0,children:"Details"}),(null===r||void 0===r?void 0:r.length)>0?null===r||void 0===r?void 0:r.map((function(t,a){return Object(S.jsxs)("div",{children:[Object(S.jsxs)(ae.a,{className:e.cardRoot,children:[Object(S.jsxs)("div",{children:[Object(S.jsx)(ce.a,{className:e.media,image:t.image||je,title:t.title}),Object(S.jsxs)(oe.a,{className:e.cardContent,children:[Object(S.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",className:e.title,children:t.title}),Object(S.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",className:e.dataStyle,children:be()(t.published_date).format("MMM DD, YYYY")}),Object(S.jsx)("p",{children:t.content})]})]}),Object(S.jsxs)(ie.a,{children:[Object(S.jsx)(f.a,{className:e.avatar}),Object(S.jsx)(h.a,{gutterBottom:!0,variant:"h6",component:"h2",children:t.author})]}),Object(S.jsxs)(ie.a,{children:[Object(S.jsx)(g.a,{"aria-label":"add to favorites",className:e.image,children:Object(S.jsx)(le.a,{color:t.get_like_count>0?"secondary":"disabled"})}),Object(S.jsx)(h.a,{variant:"body2",color:"textSecondary",children:t.get_like_count}),Object(S.jsx)(g.a,{"aria-label":"comment count",className:e.image,children:Object(S.jsx)(de.a,{})}),Object(S.jsx)(h.a,{variant:"body2",color:"textSecondary",children:t.get_comment_count})]})]},a),t.author===(null===i||void 0===i?void 0:i.email)?Object(S.jsxs)("div",{className:e.buttonGroup,children:[Object(S.jsx)(T.a,{variant:"contained",color:"primary",onClick:function(){return function(e){o("/update-blog/".concat(e))}(t.id)},children:"Update"}),Object(S.jsx)(T.a,{variant:"contained",color:"secondary",onClick:function(){return function(e){console.log("DeleteHandler",e),n(e),o("/"),X("Deleted successfully!")}(t.id)},children:"Delete"})]}):null]},a)})):void 0===r?Object(S.jsx)("img",{src:G,alt:"loading"}):Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("img",{src:ze,alt:"no data"})})]})}var Ee=Object(j.a)((function(e){return{root:{marginTop:90},paper:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"},blogImg:{width:500},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#046582",color:"white",fontWeight:"bold","&:hover":{color:"#046582"}},title:{fontSize:35,fontFamily:"Girassol",color:"#046582"}}}));function Ae(){var e=Ee(),t=V().currentUser,a=Object(l.h)(),i=Object(n.useState)({author:t.email,title:"",content:"",image:"",updated_date:Date.now()}),o=Object(r.a)(i,2),c=o[0],s=o[1],d=Object(l.i)().id,j=xe(),u=j.getOneBlog,b=j.updateBlog,m=u(d),g=Object(n.useMemo)((function(){return m?m[0]:{title:"",content:"",image:""}}),[m]);Object(n.useEffect)((function(){s(g)}),[g]);return Object(S.jsxs)(Be.a,{component:"main",maxWidth:"xs",className:e.root,children:[Object(S.jsx)(E.a,{}),Object(S.jsxs)("div",{className:e.paper,children:[Object(S.jsx)("img",{src:(null===g||void 0===g?void 0:g.image)||je,alt:"blog",className:e.blogImg}),Object(S.jsx)(h.a,{component:"h1",variant:"h5",className:e.title,children:"\u2500\u2500 Update Blog \u2500\u2500"}),Object(S.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(S.jsxs)(D.a,{container:!0,spacing:2,children:[Object(S.jsx)(D.a,{item:!0,xs:12,children:Object(S.jsx)(F.a,{variant:"outlined",required:!0,fullWidth:!0,id:"title",label:"Title",name:"title",defaultValue:null===g||void 0===g?void 0:g.title,autoFocus:!0,onChange:function(e){return s(Object(he.a)(Object(he.a)({},c),{},{title:e.target.value}))}})}),Object(S.jsx)(D.a,{item:!0,xs:12,children:Object(S.jsx)(F.a,{variant:"outlined",required:!0,fullWidth:!0,name:"image",label:"Image URL",defaultValue:null===g||void 0===g?void 0:g.image,type:"text",id:"image",onChange:function(e){return s(Object(he.a)(Object(he.a)({},c),{},{image:e.target.value}))}})}),Object(S.jsx)(D.a,{item:!0,xs:12,children:Object(S.jsx)(F.a,{id:"outlined-multiline-static",required:!0,label:"Content",multiline:!0,defaultValue:null===g||void 0===g?void 0:g.content,fullWidth:!0,rows:15,onChange:function(e){return s(Object(he.a)(Object(he.a)({},c),{},{content:e.target.value}))},variant:"outlined"})})]}),Object(S.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",className:e.submit,onClick:function(e){e.preventDefault(),b(null===g||void 0===g?void 0:g.id,c),a("/detail/".concat(null===g||void 0===g?void 0:g.id)),X("Updated successfully!")},children:"Update"})]})]})]})}var De=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],i=t[1],o=V().currentUser;function c(){var e=Object(l.g)();return o?Object(S.jsx)(l.b,{}):Object(S.jsx)(l.a,{to:"/login",state:{from:e},replace:!0})}return Object(S.jsxs)(s.a,{children:[Object(S.jsx)(R,{}),Object(S.jsxs)(l.e,{children:[Object(S.jsx)(l.c,{path:"/login",element:Object(S.jsx)(_,{setIsAuth:i,isAuth:a})}),Object(S.jsx)(l.c,{path:"/",element:Object(S.jsx)(ye,{})}),Object(S.jsx)(l.c,{path:"/register",element:Object(S.jsx)(te,{})}),Object(S.jsx)(l.c,{path:"/about",element:Object(S.jsx)(qe,{})}),Object(S.jsxs)(l.c,{element:Object(S.jsx)(c,{}),children:[Object(S.jsx)(l.c,{path:"profile",element:Object(S.jsx)(ke,{})}),Object(S.jsx)(l.c,{path:"new-blog",element:Object(S.jsx)(We,{})}),Object(S.jsx)(l.c,{path:"update-blog/:id",element:Object(S.jsx)(Ae,{})}),Object(S.jsx)(l.c,{path:"detail/:id",element:Object(S.jsx)(Ie,{})})]})]})]})};var Te=function(){return Object(S.jsx)(q,{children:Object(S.jsxs)(fe,{children:[Object(S.jsx)(De,{}),Object(S.jsx)(K.a,{})]})})};c.a.render(Object(S.jsx)(Te,{}),document.getElementById("root"))}},[[279,1,2]]]);
//# sourceMappingURL=main.471870bc.chunk.js.map