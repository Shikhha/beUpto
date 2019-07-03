(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,a){e.exports=a(413)},221:function(e,t,a){},404:function(e,t,a){},413:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(212),c=a.n(l),i=(a(221),a(16)),s=a(41),o={authError:null},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"err":return Object(s.a)({},e,{authError:"logn failed"});case"LOGGED_IN":return console.log("logged in"),Object(s.a)({},e,{authError:null});case"SIGN_OUT_SUCCESS":return console.log("signed-out"),e;case"SIGNUP_SUCCESS":return console.log("signed-up"),Object(s.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup-error : "+t.err.message),Object(s.a)({},e,{authError:t.err.message});default:return e}},u={tasks:[{id:"1",title:"task-1",content:"doing the task-1"},{id:"2",title:"task-1",content:"doing the task-1"},{id:"3",title:"task-1",content:"doing the task-1"}]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERR":return console.log("error: ",t.err),e;default:return e}return e},h=a(62),p=a(22),E=Object(i.c)({auth:m,tasks:d,firestore:h.firestoreReducer,firebase:p.firebaseReducer}),f=a(6),b=a(32),g=a(8),v=function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGGED_IN"})}).catch(function(a){console.log(e.email+" "+e.password),t({type:"err",err:a})})}},N=function(e){return function(t,a,n){var r=n.getFirebase,l=n.getFirestore,c=r(),i=l();c.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){i.collection("users").doc(t.user.uid).set({firstName:e.firstname,lastName:e.lastname,initials:e.firstname[0]+e.lastname[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}},O=Object(g.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGN_OUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null," ",r.a.createElement(f.c,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(f.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(f.c,{to:"/",className:"btn btn-floating"},e.profile.initials)))}),j=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(f.c,{to:"/login"},"Login")))},y=Object(g.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth.uid?r.a.createElement(O,{profile:e.profile}):r.a.createElement(j,null);return r.a.createElement("nav",{className:"navbar teal lighten-3"},r.a.createElement("div",{className:"brand-logo"},r.a.createElement(f.b,{to:"/"},"BeUpto"),r.a.createElement("i",{className:"material-icons"},"call_made")),t)}),C=a(27),w=a(28),S=a(30),k=a(29),F=a(31),x=a(47),R=a.n(x),_=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user)," ",r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},R()(e.time.toDate()).fromNow()))})))))},A=function(e){var t=e.task;return r.a.createElement("div",{className:"card z-depth-1 project white  summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by: ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},R()(t.createdAt.toDate()).calendar())))},I=function(e){return r.a.createElement("div",{className:"project-list section "},e.tasks&&e.tasks.map(function(e){return r.a.createElement(f.b,{to:"/detail/"+e.id,key:e.id},r.a.createElement(A,{task:e}))}))},P=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"}," ",r.a.createElement(I,{tasks:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(_,{notifications:n})))):r.a.createElement(b.a,{to:"/login"})}}]),t}(r.a.Component),U=Object(i.d)(Object(g.b)(function(e){return console.log(e),{tasks:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notification}}),Object(p.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notification",limit:3,orderBy:["time","desc"]}]))(P),D=Object(i.d)(Object(g.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{task:n?n[a]:null,auth:e.firebase.auth}}),Object(p.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.task;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details  "},r.a.createElement("div",{className:"card cyan lighten-5 z-depth-2"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title text-darken-3"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action gret lighten-4 grey-text"},r.a.createElement("div",null,"Posted by : ",t.authorFirstName," ",t.authorLastName," "),r.a.createElement("div",null,"On: ",R()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{class:"container center"},r.a.createElement("p",null,"Loading...")):r.a.createElement(b.a,{to:"/login"})}),z=a(26),G=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.dispatch(v(a.state))},a.handleOnChange=function(e){a.setState(Object(z.a)({},e.target.id,e.target.value))},a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error;return e.auth.uid?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:" white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",value:this.state.email,type:"email",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password",value:this.state.password,onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn red lighten-3 z-depth-1"},"Submit"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),L=Object(g.b)(function(e){return{error:e.auth.authError,auth:e.firebase.auth}})(G),T=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstname:"",lastname:""},a.handleSubmit=function(e){e.preventDefault(),a.props.dispatch(N(a.state))},a.handleOnChange=function(e){a.setState(Object(z.a)({},e.target.id,e.target.value))},a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(b.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:" white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",value:this.state.email,type:"email",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",type:"password",value:this.state.password,onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstname"},"First Name"),r.a.createElement("input",{id:"firstname",type:"text",value:this.state.firstname,onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastname"},"Last Name"),r.a.createElement("input",{id:"lastname",type:"text",value:this.state.lastname,onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn red lighten-3 z-depth-1"},"Submit"))))}}]),t}(n.Component),J=Object(g.b)(function(e){return{auth:e.firebase.auth}})(T),B=function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),l=a().firebase.profile,c=a().firebase.auth.uid;console.log(a().firebase.profile),r.collection("projects").add(Object(s.a)({},e,{authorFirstName:l.firstName,authorLastName:l.lastName,authorId:c,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERR",err:e})})}},Y=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleSubmit=function(e){e.preventDefault(),a.props.dispatch(B(a.state)),a.props.history.push("/dashboard")},a.handleOnChange=function(e){a.setState(Object(z.a)({},e.target.id,e.target.value))},a}return Object(F.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:" white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Task"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"task"),r.a.createElement("input",{id:"title",value:this.state.task,type:"text",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("input",{id:"content",value:this.state.content,type:"text",onChange:this.handleOnChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn red lighten-3 z-depth-1"},"Submit"))))):r.a.createElement(b.a,{to:"/login"})}}]),t}(n.Component),Q=Object(g.b)(function(e){return{auth:e.firebase.auth}})(Y),W=(a(404),function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo-box"},r.a.createElement("i",{className:"material-icons customize"},"call_made")),r.a.createElement("div",{className:"heading-primary"},r.a.createElement("div",{className:"heading-primary-main"},"BeUpto"),r.a.createElement("div",{className:"heading-primary-sub"},"is where you manage teams better"))))))))});var q=function(){return r.a.createElement(f.a,null,r.a.createElement("div",{className:"rol"},r.a.createElement("div",{className:"col"},r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",component:W,exact:!0}),r.a.createElement(b.b,{path:"/dashboard",component:U,exact:!0}),r.a.createElement(b.b,{path:"/detail/:id",component:D}),r.a.createElement(b.b,{path:"/login",component:L}),r.a.createElement(b.b,{path:"/signup",component:J}),r.a.createElement(b.b,{path:"/create",component:Q}))))))},K=a(215),X=a(135),Z=a.n(X);a(407),a(411);Z.a.initializeApp({apiKey:"AIzaSyDnG9mzQpY42ieYJxqkLPQwzX_NZRFYUUE",authDomain:"be-upto-1602b.firebaseapp.com",databaseURL:"https://be-upto-1602b.firebaseio.com",projectId:"be-upto-1602b",storageBucket:"",messagingSenderId:"1062160695506",appId:"1:1062160695506:web:7e38161cac9ed30f"});var H=Z.a,M=Object(i.e)(E,Object(i.d)(Object(i.a)(K.a.withExtraArgument({getFirebase:p.getFirebase,getFirestore:h.getFirestore})),Object(h.reduxFirestore)(H),Object(p.reactReduxFirebase)(H,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));M.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(g.a,{store:M},r.a.createElement(q,null)),document.getElementById("root"))})}},[[216,1,2]]]);
//# sourceMappingURL=main.c5287761.chunk.js.map