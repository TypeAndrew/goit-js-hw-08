function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,s=u||f||Function("return this")(),c=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return s.Date.now()};function v(e,t,n){var i,o,a,r,l,u,f=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=o;return i=o=void 0,f=t,r=e.apply(a,n)}function h(e){return f=e,l=setTimeout(w,t),s?y(e):r}function S(e){var n=e-u;return void 0===u||n>=t||n<0||c&&e-f>=a}function w(){var e=m();if(S(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-u);return c?g(n,a-(e-f)):n}(e))}function E(e){return l=void 0,v&&i?y(e):(i=o=void 0,r)}function O(){var e=m(),n=S(e);if(i=arguments,o=this,u=e,n){if(void 0===l)return h(u);if(c)return l=setTimeout(w,t),y(u)}return void 0===l&&(l=setTimeout(w,t)),r}return t=b(t)||0,p(n)&&(s=!!n.leading,a=(c="maxWait"in n)?d(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==l&&clearTimeout(l),f=0,i=u=o=l=void 0},O.flush=function(){return void 0===l?r:E(m())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||r.test(e)?l(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};(new class{pushSubmit(){this.getEl(".feedback-form").addEventListener("submit",(e=>{e.preventDefault();let t=localStorage.getItem("feedback-form-state"),n=JSON.parse(t);console.log(n),localStorage.clear()}))}CreateState(e,t){let n=JSON.parse(localStorage.getItem("feedback-form-state"));null===n&&(n={name:"",message:""}),"email"===e&&(n.email=t),"textarea"===e&&(n.message=t),localStorage.setItem("tttttt",JSON.stringify(n))}listenInput(){this.getEl(".feedback-form").addEventListener("input",e(t)((()=>{if(void 0!==event){console.log(event.target);let e=event.target.value,t=event.target.type;this.CreateState(t,e)}}),500))}getStoreValues(){let e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);null!==t&&(void 0!==t.email&&(this.getEl("input[name=email]").value=t.email),void 0!==t.message&&(this.getEl("textarea[name=message]").value=t.message))}listenReload(){window.addEventListener("load",this.getStoreValues)}init(){this.listenReload(),this.listenInput(),this.pushSubmit()}constructor(){this.getEl=e=>document.querySelector(e)}}).init();
//# sourceMappingURL=03-feedback.84e7cd0d.js.map