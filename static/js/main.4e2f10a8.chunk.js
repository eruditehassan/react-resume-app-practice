(this.webpackJsonpmaterial_ui_website=this.webpackJsonpmaterial_ui_website||[]).push([[0],{60:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(9),r=n.n(c),o=(n(60),n(96)),s=n(104),l=n(19),d=n(31),j=n(98),m=n(99),h=n(105),b=n(106),u=n(50),f=n.n(u),p=n(33),x=n(2),g=Object(o.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},appbar:{background:"none",fontFamily:"Nunito"},appBarTitle:{flexGrow:"1"},appBarWrapper:{width:"80%",margin:"0 auto"},icon:{color:"#fff",fontSize:"2rem"},menuItem:{fontFamily:"Nunito",fontSize:"1.3rem"},abtitleColor:{color:"#5AFF3D"},title:{color:"#fff",fontFamily:"Nunito",fontSize:"4.5rem"},container:{textAlign:"center"},godown:{color:"#5AFF3D",fontSize:"4rem"}}})),O=function(){var e=g(),t=Object(a.useState)(!1),n=Object(d.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){c(!0)}),[]),Object(x.jsxs)("div",{className:e.root,id:"header",children:[Object(x.jsx)(j.a,{className:e.appbar,elevation:0,children:Object(x.jsxs)(m.a,{className:e.appBarWrapper,children:[Object(x.jsxs)("h1",{className:e.appBarTitle,children:["Hassan Raza",Object(x.jsx)("span",{className:e.abtitleColor,children:" Bukhari"})]}),Object(x.jsx)(p.Link,{to:"about-me",smooth:!0,children:Object(x.jsx)(h.a,{color:"inherit",children:Object(x.jsx)("span",{className:e.menuItem,children:"About Me"})})}),Object(x.jsx)(p.Link,{to:"what-we-do",smooth:!0,children:Object(x.jsx)(h.a,{color:"inherit",children:Object(x.jsx)("span",{className:e.menuItem,children:"What I do"})})}),Object(x.jsx)(h.a,{color:"inherit",children:Object(x.jsx)("span",{className:e.menuItem,children:"Sample Page 1"})}),Object(x.jsx)(h.a,{color:"inherit",children:Object(x.jsx)("span",{className:e.menuItem,children:"Sample Page 2"})})]})}),Object(x.jsx)(b.a,Object(l.a)(Object(l.a)({in:i},i?{timeout:1e3}:{}),{},{collapsedHeight:50,children:Object(x.jsxs)("div",{className:e.container,children:[Object(x.jsxs)("h1",{className:e.title,children:["Welcome to ",Object(x.jsx)("br",{})," my ",Object(x.jsx)("span",{className:e.abtitleColor,children:"website"})]}),Object(x.jsx)(p.Link,{to:"what-we-do",smooth:!0,children:Object(x.jsx)(h.a,{children:Object(x.jsx)(f.a,{className:e.godown})})})]})}))]})},v=n(15),w=n(100),N=n(102),y=n(101),k=n(103),S=Object(o.a)({root:{maxWidth:645,background:"rgba(0,0,0,0.5)",margin:"20px"},media:{height:440},title:{fontFamily:"Nunito",fontWeight:"bold",fontSize:"2rem",color:"#fff"},description:{color:"#ddd",fontSize:"1.1rem",fontFamily:"Nunito"}}),I=function(e){var t=e.card,n=e.checked,a=S();return Object(x.jsx)(b.a,Object(l.a)(Object(l.a)({in:n},n?{timeout:1e3}:{}),{},{children:Object(x.jsxs)(w.a,{className:a.root,children:[Object(x.jsx)(y.a,{className:a.media,image:t.imageUrl,title:t.title}),Object(x.jsxs)(N.a,{children:[Object(x.jsx)(k.a,{className:a.title,gutterBottom:!0,variant:"h5",component:"h1",children:t.title}),Object(x.jsx)(k.a,{className:a.description,variant:"body2",color:"textSecondary",component:"p",children:t.description})]})]})}))},A=[{title:"Software Development",description:"I have experience on doing Software development mainly with Python both for personal interest and also on a professional level as a freelancer.",imageUrl:"/ReactResumeAppPractice/assets/pexels-kevin-ku-577585.jpg",time:1500},{title:"Data Analytics",description:"One of my strongest interests currently is Data Analytics. Most of freelance profects that I have completed are about Data Analytics. Combining power of data and automation is something intriguing. ",imageUrl:"/ReactResumeAppPractice/assets/pexels-energepiccom-159888.jpg",time:1500},{title:"Machine Learning",description:"I have also experienced working on Machine Learning projects both for learning and exploring and on a professional level as well for clients as well",imageUrl:"/ReactResumeAppPractice/assets/pexels-pixabay-373543.jpg",time:1500},{title:"Hassan Raza Bukhari",description:"",imageUrl:"/ReactResumeAppPractice/assets/me.png",time:1500}];function F(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),i=n[0],c=n[1];return Object(a.useLayoutEffect)((function(){function t(){var t=window.document.getElementById(e).offsetHeight;window.pageYOffset>.7*t&&c(!0)}return window.addEventListener("scroll",t),t(),function(){return window.removeEventListener("scroll",t)}}),[e]),i}var R=Object(o.a)((function(e){return{root:{},cards:Object(v.a)({minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.down("md"),{flexDirection:"column"}),title:{color:"#fff",fontFamily:"Nunito",fontSize:"3rem",textAlign:"center"}}})),L=function(){var e=R(),t=F("header");return Object(x.jsxs)("div",{className:e.root,id:"what-we-do",children:[Object(x.jsx)("h3",{className:e.title,children:"What I do"}),Object(x.jsxs)("div",{className:e.cards,children:[Object(x.jsx)(I,{card:A[0],checked:t}),Object(x.jsx)(I,{card:A[1],checked:t}),Object(x.jsx)(I,{card:A[2],checked:t})]})]})},z=Object(o.a)((function(e){return{root:{},title:{color:"#fff",fontFamily:"Nunito",fontSize:"3rem",textAlign:"center"},description:{color:"#fff",fontFamily:"Nunito",paddingLeft:"100px",maxWidth:"50%"},cards:Object(v.a)({display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center"},e.breakpoints.down("md"),{flexDirection:"column"})}})),D=function(){var e=z(),t=F("what-we-do");return Object(x.jsxs)("div",{className:e.root,id:"about-me",children:[Object(x.jsx)("h1",{className:e.title,children:"About Me"}),Object(x.jsxs)("div",{className:e.cards,children:[Object(x.jsx)(I,{card:A[3],checked:t}),Object(x.jsx)("h1",{className:e.description,children:"I am a Software Engineering student with strong interest in various aspects of Data Science including Data Analytics and Machine Learning."})]})]})},B=Object(o.a)((function(e){return{root:{minHeight:"100vh",backgroundImage:"url(".concat("/ReactResumeAppPractice/assets/bg.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}}}));var C=function(){var e=B();return Object(x.jsxs)("div",{className:e.root,children:[Object(x.jsx)(O,{}),Object(x.jsx)(L,{}),Object(x.jsx)(D,{}),Object(x.jsx)(s.a,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),P()}},[[78,1,2]]]);
//# sourceMappingURL=main.4e2f10a8.chunk.js.map