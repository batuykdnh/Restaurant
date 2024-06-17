(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>f});var r=t(601),a=t.n(r),i=t(314),o=t.n(i),c=t(417),s=t.n(c),u=new URL(t(976),t.b),l=new URL(t(123),t.b),d=o()(a()),p=s()(u),m=s()(l);d.push([e.id,`@font-face {\n    font-family: super-monday;\n    src: url(${p});\n}\n\nbody{\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    background-repeat: repeat-y;\n    background-size: 100%;\n    background-image: url(${m});\n    min-height: 100vh;\n}\n\nbody.all-screen-background{\n    background-size: 100% 100%;\n}\n\nhtml{\n    font-family: super-monday,system-ui;\n}\n#content{\n    padding: 0 5rem;\n    min-height: 0;\n    flex: 1;\n}\n\n.menu{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(450px,1fr));\n    min-height: 0;\n    grid-column-gap: 2rem;\n    grid-row-gap: 2rem;\n\n}\n.menu-item{\n    display: flex;\n    gap: 1rem;\n    border-radius: 2rem;\n    background: #5d49f6;\n    padding: 1rem;\n    box-shadow: inset #0c6d52 0 0 25px 25px;\n    .left{\n        flex: 2;\n    }\n    .right{\n        flex: 1;\n        align-self: center;\n        :first-child{\n            font-size: 1.5rem;\n        }\n    }\n\n\n    img{\n        border-radius: 2rem;\n        width: 100%;\n        height: 100%;\n    }\n\n}\n\n\n.home{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #d3ebd3;\n    min-height: 0;\n    img{\n        width: 30%;\n        border-radius: 25%;\n    }\n    font-size: 3rem;\n}\n\n\nnav{\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n    height: 100%;\n}\nnav button:hover{\n    cursor: pointer;\n    box-shadow: #090f5f 0 0 20px 20px;\n}\n\nheader{\n    padding-top: 1rem;\n    height: 15%;\n}\n\nnav button{\n    border: #6c74f6;\n    border-radius: 1rem;\n    background-color: #0960b5;\n    padding: 1.5rem 3rem;\n    font-size: 2rem;\n    color: #f69f4a;\n    width: 15%;\n    box-shadow: inset #090f5f 0 0 20px 20px;\n}\n`,""]);const f=d},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var s=r(e,a),u=0;u<i.length;u++){var l=t(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},976:(e,n,t)=>{e.exports=t.p+"35add77dfbe20b772adb.ttf"},123:(e,n,t)=>{e.exports=t.p+"ea08b7c71a2926743434.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;const r=t.p+"0437cacbf195db18ece2.jpg",a=t.p+"78e2cacbd70ef1315962.jpg",i=t.p+"cb63a07c441118e2e08d.jpg";class o{name;description;image;elementVersion;constructor(e,n,t){this.name=e,this.description=n,this.image=t}}var c=t(72),s=t.n(c),u=t(825),l=t.n(u),d=t(659),p=t.n(d),m=t(56),f=t.n(m),h=t(540),g=t.n(h),A=t(113),v=t.n(A),E=t(365),b={};b.styleTagTransform=v(),b.setAttributes=f(),b.insert=p().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=g(),s()(E.A,b),E.A&&E.A.locals&&E.A.locals;const L=document.querySelector("#content");let T=e=>{for(;L.hasChildNodes();)L.removeChild(L.firstChild);const n=function(){switch(e){case"Home":return(()=>{let e=document.createElement("div");e.classList.add("home");let n=document.createElement("img");n.src=r,n.alt="headline";let t=document.createElement("h2");t.textContent="CRAZZYYYYY sdfsdfsfsfsdfBURGER";let a=document.createElement("div");return a.textContent="This is the best place in the city",e.appendChild(n),e.appendChild(t),e.appendChild(a),e})();case"Menu":return(()=>{let e=document.createElement("div");e.classList.add("menu");const n=[];return n.push(new o("Normal Burger","Delicious burger with a meatball and cheese",a)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.push(new o("Special Burger","EXTRA MEATBALL",i)),n.forEach((n=>{n.elementVersion=function(e){let n=document.createElement("div");n.classList.add("menu-item");let t=document.createElement("div");t.classList.add("left");let r=document.createElement("img");r.src=e.image,r.alt=e.name,t.appendChild(r);let a=document.createElement("div");a.classList.add("right");let i=document.createElement("div");i.textContent=e.name;let o=document.createElement("div");return o.textContent=e.description,a.appendChild(i),a.appendChild(o),n.appendChild(t),n.appendChild(a),n}(n),e.appendChild(n.elementVersion)})),e})();default:return null}}();"Menu"!==e?document.body.classList.add("all-screen-background"):document.body.classList.remove("all-screen-background"),n&&L.appendChild(n)};document.querySelectorAll("nav button").forEach((e=>{e.addEventListener("click",(()=>T(e.textContent)))}))})();