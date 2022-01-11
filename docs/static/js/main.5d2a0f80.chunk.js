(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{13:function(e,a,r){e.exports=r(31)},18:function(e,a,r){},31:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),c=r(11),l=r.n(c),s=r(4),i=Object(t.createContext)(),o=r(5),m="[auth] login",u="[auth] logout",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case m:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},p=r(2),d=r(1),E=function(){var e=Object(t.useContext)(i),a=(e.user,e.dispatch),r=Object(d.g)();return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Login"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){r("/",{replace:!0}),a({type:m,payload:{name:"Santiago"}})}},"Login"))},b=(r(18),function(){var e=Object(t.useContext)(i);e.user,e.dispatch,Object(d.g)()}),v=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],f=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,l=e.characters;return n.a.createElement("div",{className:"card ms-3 animate__animated animate__fadeIn",style:{maxWidth:540}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:r})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"}," ",r," "),n.a.createElement("p",{className:"card-text"}," ",t," "),t!==l&&n.a.createElement("p",{className:"card-text"}," ",l," "),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted"}," ",c," ")),n.a.createElement(p.b,{to:"/hero/".concat(a)},"M\xe1s...")))))},g=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return v.filter((function(a){return a.publisher===e}))}(a)}),[a]);return n.a.createElement("div",{className:"card-columns animate__animated animate__fadeIn"},r.map((function(e){return n.a.createElement(f,Object.assign({key:e.id},e))})))},C=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Marvel Screen"),n.a.createElement("hr",null),n.a.createElement(g,{publisher:"Marvel Comics"}))},_=function(){var e=Object(d.g)(),a=Object(d.h)().heroeId;console.log(a);var r=Object(t.useMemo)((function(){return e=a,v.find((function(a){return a.id===e}));var e}),[a]);if(!r)return n.a.createElement(d.a,{to:"/"});var c=r.superhero,l=r.publisher,s=r.alter_ego,i=r.first_appearance,o=r.characters;return n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:"../assets/heroes/".concat(a,".jpg"),alt:c,className:"img-thumbnail animate__animated animate__fadeInLeft"})),n.a.createElement("div",{className:"col-8 animate__animated animate__fadeIn"},n.a.createElement("h3",null," ",c," "),n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"}," ",n.a.createElement("b",null," Alter ego: ")," ",s," "),n.a.createElement("li",{className:"list-group-item"}," ",n.a.createElement("b",null," Publisher: ")," ",l," "),n.a.createElement("li",{className:"list-group-item"}," ",n.a.createElement("b",null," First appearance: ")," ",i," ")),n.a.createElement("h5",null," Characters "),n.a.createElement("p",null," ",o," "),n.a.createElement("button",{className:"btn btn-outline-info",onClick:function(){e(-1)}},"Return")))},y=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"DC Screen"),n.a.createElement("hr",null),n.a.createElement(g,{publisher:"DC Comics"}))},N=r(12),M=r.n(N),S=r(6),O=function(e){e.history;var a=Object(d.f)(),r=Object(d.g)(),c=M.a.parse(a.search).q,l=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(s.a)(a,2),n=r[0],c=r[1],l=function(){c(e)},i=function(e){var a=e.target;c(Object(o.a)(Object(o.a)({},n),{},Object(S.a)({},a.name,a.value)))};return[n,i,l]}({searchText:l}),m=Object(s.a)(i,2),u=m[0],h=m[1],p=u.searchText,E=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),v.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(l)}),[l]);return n.a.createElement("div",null,n.a.createElement("h1",null,"Search Screen"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-5"},n.a.createElement("h4",null," Search Form "),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r("?q=".concat(p))}},n.a.createElement("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:p,onChange:h}),n.a.createElement("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary"},"Search..."))),n.a.createElement("div",{className:"col-7"},n.a.createElement("h4",null," Results "),n.a.createElement("hr",null),""===l&&n.a.createElement("div",{className:"alert alert-info"},"Search a hero"),""!==l&&0===E.length&&n.a.createElement("div",{className:"alert alert-danger"},"There is no a hero with ",l),E.map((function(e){return n.a.createElement(f,Object.assign({key:e.id},e))})))))},D=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement("div",{className:"container mt-2"},n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"marvel",element:n.a.createElement(C,null)}),n.a.createElement(d.b,{path:"hero/:heroeId",element:n.a.createElement(_,null)}),n.a.createElement(d.b,{path:"dc",element:n.a.createElement(y,null)}),n.a.createElement(d.b,{path:"search",element:n.a.createElement(O,null)}),n.a.createElement(d.b,{path:"/",element:n.a.createElement(C,null)}))))},j=function(e){var a=e.children;return Object(t.useContext)(i).user.logged?a:n.a.createElement(d.a,{to:"/login"})},k=function(e){var a=e.children;return Object(t.useContext)(i).user.logged?n.a.createElement(d.a,{to:"/marvel"}):a},w=function(){return n.a.createElement(p.a,null,n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/login",element:n.a.createElement(k,null,n.a.createElement(E,null))}),n.a.createElement(d.b,{path:"/*",element:n.a.createElement(j,null,n.a.createElement(D,null))})))},B=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},x=function(){var e=Object(t.useReducer)(h,{},B),a=Object(s.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),n.a.createElement(i.Provider,{value:{user:r,dispatch:c}},n.a.createElement(w,null))};l.a.render(n.a.createElement(x,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5d2a0f80.chunk.js.map