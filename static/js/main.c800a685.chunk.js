(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,r){t.exports=r(35)},31:function(t,e,r){},33:function(t,e,r){},35:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(8),i=r.n(a),c=r(2);function u(t){var e=t.name,r=t.id,n=t.email,a=t.username;return o.a.createElement("div",{className:"bg-light-green tc dib br3 pa3 ma3 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:e}),o.a.createElement("h2",null,e),o.a.createElement("p",null,a),o.a.createElement("p",null,n))}function l(t){return t.robots.map(function(t){return o.a.createElement(u,Object.assign({key:t.id},t))})}function s(t){var e=t.children;return o.a.createElement("div",{style:{overflowY:"scroll",height:"650px"}},e)}function h(t){var e=t.onSearchField,r=t.searchField;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",placeholder:"Search robots by their name",onChange:function(t){t.preventDefault(),e(t.target.value)},defaultValue:r,type:"search"}))}var f=r(11),p=r(12),d=r(16),v=r(13),y=r(17),g=function(t){function e(t){var r;return Object(f.a)(this,e),(r=Object(d.a)(this,Object(v.a)(e).call(this,t))).state={hasError:!1},r}return Object(y.a)(e,t),Object(p.a)(e,[{key:"componentDidCatch",value:function(t,e){console.error({error:t,info:e}),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops! Something went wrong"):this.props.children}}]),e}(n.Component),m=(r(31),r(14));function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new x(o||[]);return n(i,"_invoke",{value:O(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var h={};function f(){}function p(){}function d(){}var v={};u(v,a,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(R([])));g&&g!==e&&r.call(g,a)&&(v=g);var m=d.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function O(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(m),u(m,c,"Generator"),u(m,a,function(){return this}),u(m,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=R,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var b=function(t){return{type:"CHANGE_SEARCH_FIELD",payload:t}},w=function(){var t=Object(m.a)(E().mark(function t(e){var r,n;return E().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"REQUEST_ROBOTS_PENDING"}),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return r=t.sent,t.next=7,r.json();case 7:n=t.sent,e({type:"REQUEST_ROBOTS_SUCCESS",payload:n}),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),e({type:"REQUEST_ROBOTS_ERROR",payload:t.t0}),console.error(t.t0);case 15:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}();var O=function(){var t=Object(c.c)(function(t){return t}),e=t.requestRobotsReducer,r=e.pending,a=e.data,i=t.searchRobotsReducer.searchField,u=Object(c.b)();Object(n.useEffect)(function(){w(u)},[]);var f=a.filter(function(t){return t&&t.name.toLowerCase().includes(i.toLocaleLowerCase())});return r?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f2"},"Robots app"),o.a.createElement("h2",null,"Loading...")):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f2"},"Robots app"),o.a.createElement(h,{searchField:i,onSearchField:function(t){u(b(t))}}),o.a.createElement(s,null,o.a.createElement(g,null,o.a.createElement(l,{robots:f}))))},L=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,36)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})},S=(r(33),r(3)),j=r(15),x=r(1),R={searchField:""},_={data:[],pending:!1,error:!1},N=Object(j.createLogger)(),T=Object(S.b)({searchRobotsReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"CHANGE_SEARCH_FIELD":return Object(x.a)({},t,{searchField:e.payload});default:return t}},requestRobotsReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"REQUEST_ROBOTS_PENDING":return Object(x.a)({},t,{pending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(x.a)({},t,{pending:!1,data:e.payload});case"REQUEST_ROBOTS_ERROR":return Object(x.a)({},t,{error:e.payload});default:return t}}}),F=Object(S.c)(T,Object(S.a)(N));i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{store:F},o.a.createElement(O,null)))),L()}},[[18,3,2]]]);
//# sourceMappingURL=main.c800a685.chunk.js.map