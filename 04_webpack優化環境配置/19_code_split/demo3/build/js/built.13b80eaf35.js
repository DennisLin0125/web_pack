!function(){var e,r={},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(r,t){return n.f[t](e,r),r}),[]))},n.u=function(e){return"js/"+e+".built.364469bfd1.js"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},e={},n.l=function(r,t,o,i){if(e[r])e[r].push(t);else{var u,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var f=a[l];if(f.getAttribute("src")==r){u=f;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.src=r),e[r]=[t];var s=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){var e={179:0};n.f.j=function(r,t){var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=e[r]=[t,n]}));t.push(o[2]=i);var u=n.p+n.u(r),c=new Error;n.l(u,(function(t){if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}}),"chunk-"+r,r)}};var r=function(r,t){var o,i,u=t[0],c=t[1],a=t[2],l=0;if(u.some((function(r){return 0!==e[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);a&&a(n)}for(r&&r(t);l<u.length;l++)i=u[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}(),n.e(43).then(n.bind(n,411)).then((({mul:e,sub:r})=>{console.log("文件加載成功..."),console.log(e(2,5))})).catch((()=>{console.log("文件加載失敗...")})),console.log([1,2,3,4,5,6].reduce(((e,r)=>e+r),0))}();