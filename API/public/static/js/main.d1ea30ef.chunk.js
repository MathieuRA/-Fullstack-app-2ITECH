(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{20:function(e,t,r){},21:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1),c=r.n(s),a=r(13),u=r.n(a),i=(r(20),r(10)),o=(r(21),function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Page d'accueil"})})}),l=r(6),j=r(7),d=r(9),h=r(8),p=r(2),b=r.n(p),f=r(3),O=r(4),x=r(5),v=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).componentDidMount=function(){n.setState((function(e){return{user:Object(x.a)(Object(x.a)({},n.props.contents),e.user)}}))},n.componentDidUpdate=function(e){Object(O.isEqual)(e,n.state)},n.toogleEditing=function(){n.setState((function(e){return{isEditing:!e.isEditing}}))},n._editField=function(e,t){switch(t){case"firstname":case"lastname":case"job":n.setState((function(t){return{user:Object(x.a)(Object(x.a)({},t.user),{},{firstname:e.target.value})}}))}},n.state={isEditing:!1,user:{id:n.props.id}},n}return Object(j.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.contents,s=t.handleEdit,c=t.hasEditedUser,a=0;return Object(n.jsxs)("div",{onDoubleClick:this.toogleEditing,children:[Object(O.map)(r,(function(t){var s=Object.keys(r)[a];if("__v"!==s&&"_id"!==s)return a++,Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(m,{content:t,isEditing:e.state.isEditing,onChange:function(t){return e._editField(t,s)}},a)});a++})),Object(n.jsxs)("small",{children:["Doublie clique pour"," ",this.state.isEditing?Object(n.jsx)("span",{children:"annuler"}):Object(n.jsx)("span",{children:"modifier"})]}),this.state.isEditing&&Object(n.jsx)("button",{onClick:function(){return s(e.state,c,e.toogleEditing)},children:"Modifier"})]})}}]),r}(c.a.Component),m=function(e){var t=e.content,r=e.isEditing,s=e.onChange;return r?Object(n.jsx)("input",{placeholder:t,onChange:s}):Object(n.jsx)("p",{children:t})},y=Notification=function(e){var t=e.children,r=e.$class;return Object(n.jsx)("p",{className:"alert "+r,children:t})},g=(r(25),function(e){var t=e.setError,r=e.setSuccess,c=Object(s.useRef)(),a=Object(s.useRef)(),u=Object(s.useRef)(),i=function(){var e=Object(f.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("http://localhost:3000/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C(c,a,u))});case 4:c.current.value="",a.current.value="",u.current.value="",r("Utilisateur \xe0 bien \xe9t\xe9 ajouter"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t("L'ajout de l'utilisateur \xe0 \xe9chouer ");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:i,children:[Object(n.jsx)("div",{children:Object(n.jsxs)("label",{children:["Nom:",Object(n.jsx)("input",{id:"firstname",name:"firstname",ref:c,type:"text"})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{children:["Pr\xe9nom:",Object(n.jsx)("input",{id:"lastname",name:"lastname",ref:u,type:"text"})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("label",{children:["M\xe9tier:",Object(n.jsx)("input",{id:"job",name:"job",ref:a,type:"text"})]})}),Object(n.jsx)("input",{type:"submit",value:"Envoyer"})]})})}),E=function(e){var t=e.hasEditedUser,r=e.setError,s=e.setSuccess,c=e.users;return Object(O.isEmpty)(c)?Object(n.jsx)("p",{children:"Aucun utilisateur"}):Object(O.map)(c,(function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){return S(t,r,s,e._id)},"aria-label":"Close",className:"close",type:"button",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(n.jsx)(v,{contents:e,handleEdit:k,hasEditedUser:t,id:e._id})]},e._id)}))},S=function(){var e=Object(f.a)(b.a.mark((function e(t,r,n,s){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/user/".concat(s),{method:"DELETE"});case 2:200===e.sent.status?(n("Utilisateur supprimer"),t()):(r("Erreur lors de la suppression"),t());case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,s){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(b.a.mark((function e(t,r,n){var s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.user,e.next=3,fetch("http://localhost:3000/user/".concat(s.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 3:return c=e.sent,e.next=6,c.json();case 6:n(),r();case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e,t,r){return{firstname:e.current.value,job:t.current.value,lastname:r.current.value}},_=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).hasEditedUser=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,w();case 3:e.t1=e.sent,e.t2={users:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),n.setError=function(e){return n.setState({error:e})},n.setSuccess=function(e){return n.setState({success:e})},n._setRoute=function(e){return n.setState({route:e})},n.state={error:"",route:"get",success:"",usersLoaded:!1},n}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,w();case 3:e.t1=e.sent,e.t2={users:e.t1},e.t3=function(){t.setState({usersLoaded:!0})},e.t0.setState.call(e.t0,e.t2,e.t3);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.hasEditedUser()}},{key:"render",value:function(){var e=this,t=this.state,r=t.error,s=t.success,c=t.route,a=t.usersLoaded,u=t.users;return Object(n.jsxs)(n.Fragment,{children:[r&&Object(n.jsx)(y,{$class:"alert-danger",children:r}),s&&Object(n.jsx)(y,{$class:"alert-success",children:s}),Object(n.jsx)("button",{children:"get"===c?Object(n.jsx)("span",{onClick:function(){return e._setRoute("post")},children:"Ajouter un utilisateur"}):Object(n.jsx)("span",{onClick:function(){return e._setRoute("get")},children:"Tout les utilisateurs"})}),"get"===c&&Object(n.jsx)("div",{children:a?Object(n.jsx)(E,{hasEditedUser:this.hasEditedUser,setError:this.setError,setSuccess:this.setSuccess,users:u}):Object(n.jsx)("p",{children:"Chargement des utilisateurs ..."})}),"post"===c&&Object(n.jsx)(g,{setError:this.setError,setSuccess:this.setSuccess})]})}}]),r}(c.a.Component),T=r(14),D=function(e){var t=e.users,r=e.error,c=e.success,a=e.refresh,u=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),j=Object(s.useRef)(),d=Object(s.useState)(),h=Object(i.a)(d,2),p=h[0],b=h[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{onSubmit:function(e){return U(e,u.current.value,p,l.current.value,o.current.value,j.current.value,r,c,a)},children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{children:["Titre:",Object(n.jsx)("input",{id:"title",name:"title",ref:u,type:"text"})]}),Object(n.jsxs)("label",{children:["Techno:",Object(n.jsx)(T.a,{options:[{value:"css",label:"CSS"},{value:"html",label:"HTML"},{value:"javascript",label:"Javascript"},{value:"node",label:"Node.js"},{value:"php",label:"PHP"},{value:"react",label:"React.js"},{value:"symphony",label:"Symphony"},{value:"typscript",label:"Typescript"},{value:"wordpress",label:"Wordpress"}],onChange:b,value:p})]}),Object(n.jsxs)("label",{children:["Le d\xe9veloppeur",Object(n.jsx)("select",{ref:l,children:Object(O.map)(t,(function(e){return Object(n.jsx)("option",{value:e._id,children:e.firstname},e._id)}))})]}),Object(n.jsx)("label",{children:Object(n.jsx)("input",{type:"date",name:"created_date",id:"created_date",ref:o})}),Object(n.jsxs)("label",{children:["Image",Object(n.jsx)("input",{type:"text",name:"thumbnail",id:"thumbnail",ref:j})]})]}),Object(n.jsx)("button",{type:"submit",children:"Envoyer"})]})})},P=function(e){var t=e.projects,r=e.error,s=e.success,c=e.refresh;return Object(O.isEmpty)(t)?Object(n.jsx)("p",{children:"Aucun projet"}):Object(O.map)(t,(function(e){return Object(n.jsx)(R,{project:e,error:r,success:s,refresh:c},e._id)}))},R=function(e){var t=e.project,r=e.error,c=e.success,a=e.refresh,u=Object(s.useState)(),o=Object(i.a)(u,2),l=o[0],j=o[1];return J(t.developper_id,j),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){return N(t._id,c,r,a)},"aria-label":"Close",className:"close",type:"button",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),Object(n.jsx)("h2",{children:t.title}),l&&Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"D\xe9veloppeur"}),Object(n.jsx)("p",{children:l})]}),Object(n.jsx)("ul",{children:Object(O.map)(t.techno,(function(e){return Object(n.jsx)("li",{children:e.label},e.value)}))})]})})},N=function(){var e=Object(f.a)(b.a.mark((function e(t,r,n,s){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/project/".concat(t),{method:"DELETE"});case 2:200===e.sent.status?(r("Suppression effectuer"),s()):(n("Erreur lors de la suppresion"),s());case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,s){return e.apply(this,arguments)}}(),U=function(e,t,r,n,s,c,a,u,i){e.preventDefault(),F(t,r,n,new Date(s).getTime(),c,a,u,i)},F=function(){var e=Object(f.a)(b.a.mark((function e(t,r,n,s,c,a,u,i){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/project",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L(t,r,n,s,c))});case 2:201===e.sent.status?(u("Projet ajouter avec success"),i()):(a("Erreur lors de l'ajoute du projet"),i());case 4:case"end":return e.stop()}}),e)})));return function(t,r,n,s,c,a,u,i){return e.apply(this,arguments)}}(),L=function(e,t,r,n,s){return{title:e,techno:t,developper_id:r,thumbnail:s,created_date:n}},M=function(){var e=Object(f.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(b.a.mark((function e(t,r){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/user/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return s=e.sent,r(s.firstname),e.abrupt("return",s.firstname);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/projects");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).asEditedPOroject=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,A();case 3:return e.t1=e.sent,e.t2={projects:e.t1},e.abrupt("return",e.t0.setState.call(e.t0,e.t2));case 6:case"end":return e.stop()}}),e)}))),n.setRoute=function(e){return n.setState({route:e})},n.setError=function(e){return n.setState({error:e})},n.setSuccess=function(e){return n.setState({success:e})},n.state={error:"",loaded:!1,route:"get",success:""},n}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,M();case 3:return e.t1=e.sent,e.next=6,A();case 6:e.t2=e.sent,e.t3={users:e.t1,projects:e.t2},e.t4=function(){return t.setState({loaded:!0})},e.t0.setState.call(e.t0,e.t3,e.t4);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.route,s=t.users,c=t.error,a=t.success,u=t.loaded,i=t.projects;return Object(n.jsxs)(n.Fragment,{children:[c&&Object(n.jsx)(y,{$class:"alert-error",children:c}),a&&Object(n.jsx)(y,{$class:"alert-success",children:a}),Object(n.jsx)("button",{children:"get"===r?Object(n.jsx)("span",{onClick:function(){return e.setRoute("post")},children:"Ajouter un projet"}):Object(n.jsx)("span",{onClick:function(){return e.setRoute("get")},children:"Voir tout les projets"})}),"get"===r&&(u?Object(n.jsx)(P,{projects:i,error:this.setError,success:this.setSuccess,refresh:this.asEditedPOroject}):Object(n.jsx)("p",{children:"Chargement ..."})),"post"===r&&Object(n.jsx)(D,{users:s,error:this.setError,success:this.setSuccess,refresh:this.asEditedPOroject})]})}}]),r}(c.a.Component);var I=function(){var e=Object(s.useState)("projects"),t=Object(i.a)(e,2),r=t[0],c=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"nav",children:[Object(n.jsx)("li",{onClick:function(){return c("home")},className:"nav-item btn btn-primary",children:"Accueil"}),Object(n.jsx)("li",{onClick:function(){return c("users")},className:"nav-item btn btn-success",children:"Utilisateurs"}),Object(n.jsx)("li",{onClick:function(){return c("projects")},className:"nav-item btn btn-secondary",children:"Projets"})]})})}),Object(n.jsx)("div",{children:Object(n.jsxs)("section",{children:["home"===r&&Object(n.jsx)(o,{}),"users"===r&&Object(n.jsx)(_,{}),"projects"===r&&Object(n.jsx)($,{})]})})]})},q=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,27)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),c(e),a(e)}))};u.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),q()}},[[26,1,2]]]);
//# sourceMappingURL=main.d1ea30ef.chunk.js.map