!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);n.exports=r.locals||{}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var i=n[r],s=e.base?i[0]+e.base:i[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var f=c(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:g(d,e),references:1}),o.push(u)}return o}function l(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,f=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function d(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,v=0;function g(n,e){var t,o,r;if(e.singleton){var i=v++;t=h||(h=l(e)),o=d.bind(null,t,i,!1),r=d.bind(null,t,i,!0)}else t=l(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=s(n,e),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),e.push([n.i,":root {\n  --primary-color: rgba(91, 12, 99, 0.877);\n \n}\n\n* {\n  box-sizing: border-box;\n  margin:0;\n  padding:0;\n}\n\nbody {\n  /* background: var(--primary-color); */\n  font-family: 'Open sans', sans-serif;\n  /* font-size: 1.3em; */\n  overflow: hidden;\n\n  background: url('https://img.freepik.com/vetores-premium/fundo-da-copa-do-mundo-de-futebol-para-banner-campeonato-de-futebol-de-2022-no-qatar_29865-3051.jpg?w=2000') no-repeat center center;\n  background-size: cover;\n  \n}\n\n/* Menu nav-list */\n\na {\ncolor:#fff;\ntext-decoration: none;\ntransition: 0.3s;\n}\n\na:hover {\n  opacity: 0.7;\n}\n\n.logo {\n   font-size: 24px;\n   text-transform: uppercase;\n   letter-spacing: 2px;\n}\n\nnav  {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--primary-color);\n  height: 8vh;\n  \n}\n\n.nav-list {\n  display: flex;\n  list-style: none;\n}\n\n.nav-list li {\n  letter-spacing: 1.25px;\n  margin-left: 35px;\n  text-transform: uppercase;\n  font-size: 0.85rem;\n}\n\n.mobile-menu div {\n  width: 32px;\n  height: 2px;\n  background: rgb(255, 255, 255);\n  margin: 8px;\n  cursor: pointer;\n}\n\nheader {\n  width: 100vw;\n  height: 3vh ;\n}\n\nmain {\n  height: 90vh;\n\n}\n\n.container {\n  max-width: 750px;\n  height: auto;\n  margin: 100px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.logo {\n  margin-right: 20px;\n}\n\nbutton {\n  font-size: 1rem;\n  margin: 15px auto;\n}\n\n/*Media queries*/\n\n@media (max-width: 999px) {\n\n  body {\n    overflow-x: hidden;\n  }\n\n  .nav-list {\n    position: absolute;\n    top: 8vh;\n    right: 0;\n    width: 50vw;\n    height: 92vh;\n    background-color: var(--primary-color);\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    transform: translateX(100%);\n  }\n  \n  .nav-list li {\n    margin-left: 0;\n    opacity: 1;\n    cursor: pointer;\n  }\n\n  .mobile-menu {\n    display: block;\n    float: left;\n  }\n\n  .logo {\n   margin: 0 auto;\n  }\n\n  .nav-list.active {\n    transform: translateX(0);\n  }\n}\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e){function t(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}new(function(){function n(e,t,o){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.mobileMenu=document.querySelector(e),this.navList=document.querySelector(t),this.navLinks=document.querySelectorAll(o),this.activeClass="active",this.handleClick=this.handleClick.bind(this)}var e,o,r;return e=n,(o=[{key:"handleClick",value:function(){this.navList.classList.toggle(this.activeClass),this.mobileMenu.classList.toggle(this.activeClass)}},{key:"addClickEvent",value:function(){this.mobileMenu.addEventListener("click",this.handleClick)}},{key:"init",value:function(){return this.mobileMenu&&this.addClickEvent(),this}}])&&t(e.prototype,o),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}())(".mobile-menu",".nav-list",".nav-list li").init()},function(n,e,t){"use strict";t.r(e);t(0);function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(new(function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getSelecoes",value:function(n){fetch(n,{method:"GET",headers:{"git-user":"Gsantos99"}}).then((function(n){return n.json()})).then((function(n){console.log(n),console.log("Peguei as seleções ")})).catch((function(n){console.log(n)}))}},{key:"getGrupos",value:function(){console.log("Peguei os grupos")}},{key:"getPartida",value:function(){console.log("Fazer partidas")}},{key:"getRodadas",value:function(){console.log("Fazer as rodadas")}},{key:"getPontuacao",value:function(){console.log("Realizar pontuação")}}])&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}())).getSelecoes("https://estagio.geopostenergy.com/WorldCup/GetAllTeams");t(4)}]);
//# sourceMappingURL=bundle.js.map