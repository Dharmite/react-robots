(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,r){t.exports=r(23)},19:function(t,e,r){},21:function(t,e,r){},23:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(3),i=r.n(a),c=r(4),u=r(1);function l(t){var e=t.name,r=t.id,n=t.email,a=t.username;return o.a.createElement("div",{className:"bg-light-green tc dib br3 pa3 ma3 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:e}),o.a.createElement("h2",null,e),o.a.createElement("p",null,a),o.a.createElement("p",null,n))}function s(t){return t.robots.map(function(t){return o.a.createElement(l,Object.assign({key:t.id},t))})}function h(t){var e=t.children;return o.a.createElement("div",{style:{overflowY:"scroll",height:"650px"}},e)}function f(t){var e=t.onSearchTitle,r=t.searchTitle;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",placeholder:"Search robots by their name",onChange:function(t){t.preventDefault(),e(t.target.value)},defaultValue:r,type:"search"}))}var p=r(5),v=r(6),d=r(8),m=r(7),y=r(9),g=function(t){function e(t){var r;return Object(p.a)(this,e),(r=Object(d.a)(this,Object(m.a)(e).call(this,t))).state={hasError:!1},r}return Object(y.a)(e,t),Object(v.a)(e,[{key:"componentDidCatch",value:function(t,e){console.error({error:t,info:e}),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops! Something went wrong"):this.props.children}}]),e}(n.Component);r(19);function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var h={};function f(){}function p(){}function v(){}var d={};u(d,a,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==e&&r.call(y,a)&&(d=y);var g=v.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var b=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),p=l[0],v=l[1],d=Object(n.useState)(!1),m=Object(u.a)(d,2),y=m[0],b=m[1],E=function(){var t=Object(c.a)(w().mark(function t(){var e,r;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return e=t.sent,t.next=7,e.json();case 7:r=t.sent,a(r),b(!1),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),b(!1),console.error(t.t0);case 16:case"end":return t.stop()}},t,null,[[1,12]])}));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)(function(){E()},[]);var L=r.filter(function(t){return t.name.toLowerCase().includes(p.toLocaleLowerCase())});return y?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f2"},"Robots app"),o.a.createElement("h2",null,"Loading...")):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f2"},"Robots app"),o.a.createElement(f,{searchTitle:p,onSearchTitle:function(t){v(t)}}),o.a.createElement(h,null,o.a.createElement(g,null,o.a.createElement(s,{robots:L}))))},E=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,24)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};r(21);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),E()}},[[10,3,2]]]);
//# sourceMappingURL=main.01a0b499.chunk.js.map