!function(){"use strict";var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");console.dir(o),t.style.cssText="width: 100px; height: 50px; font-size: 22px; position: absolute; left: 45%;top: 50%;text-transform: uppercase;",e.style.cssText="width: 100px; height: 50px; font-size: 22px; position: absolute; left: 53%;top: 50%;text-transform: uppercase;";var n=null;e.addEventListener("click",(function(o){clearInterval(n),t.disabled=!1,e.disabled=!0})),t.addEventListener("click",(function(s){n=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.47aac58c.js.map
