!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=39)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(23),i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,u=o||i||Function("return this")();t.exports=u},function(t,e,n){"use strict";var r=Array.isArray;t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(62),i=n(65);t.exports=r},function(t,e,n){"use strict";function r(t){return null==t?void 0===t?s:c:a&&a in Object(t)?i(t):u(t)}var o=n(7),i=n(45),u=n(46),c="[object Null]",s="[object Undefined]",a=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){"use strict";function r(t){var e=void 0===t?"undefined":o(t);return null!=t&&("object"==e||"function"==e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=r},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==(void 0===t?"undefined":o(t))}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=e.DIRECTIONS={up:"up",down:"down",left:"left",right:"right"};e.CONTROLLER1={ArrowUp:r.up,ArrowDown:r.down,ArrowLeft:r.left,ArrowRight:r.right},e.EVT_MOVE_SNAKE="EVT_MOVE_SNAKE",e.EVT_GAME_OVER="EVT_GAME_OVER",e.EVT_SNAKE_MOLT="EVT_SNAKE_MOLT",e.EVT_UPDATE_SCORE="EVT_UPDATE_SCORE",e.DEFAULT_SPEED=75,e.START_ON_LOAD=!1,e.DEFAULT_SNAKE_LENGTH=1,e.DEFAULT_FOOD_COUNT=10},function(t,e,n){"use strict";var r=n(0),o=r.Symbol;t.exports=o},function(t,e,n){"use strict";function r(t){return"symbol"==(void 0===t?"undefined":o(t))||u(t)&&i(t)==c}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(3),u=n(5),c="[object Symbol]";t.exports=r},function(t,e,n){"use strict";function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(52),i=n(53),u=n(54),c=n(55),s=n(56);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=u,r.prototype.has=c,r.prototype.set=s,t.exports=r},function(t,e,n){"use strict";function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(14);t.exports=r},function(t,e,n){"use strict";var r=n(2),o=r(Object,"create");t.exports=o},function(t,e,n){"use strict";function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(74);t.exports=r},function(t,e,n){"use strict";function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}var o=n(8),i=1/0;t.exports=r},function(t,e,n){"use strict";function r(t,e){return t===e||t!==t&&e!==e}t.exports=r},function(t,e,n){"use strict";function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}var o=9007199254740991;t.exports=r},function(t,e,n){"use strict";function r(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||i.test(t))&&t>-1&&t%1==0&&t<e}var o=9007199254740991,i=/^(?:0|[1-9]\d*)$/;t.exports=r},function(t,e,n){"use strict";var r=n(2),o=n(0),i=r(o,"Map");t.exports=i},function(t,e,n){"use strict";function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(66),i=n(73),u=n(75),c=n(76),s=n(77);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=u,r.prototype.has=c,r.prototype.set=s,t.exports=r},function(t,e,n){"use strict";function r(t,e){if(i(t))return!1;var n=void 0===t?"undefined":o(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!u(t))||(s.test(t)||!c.test(t)||null!=e&&t in Object(e))}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(1),u=n(8),c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.ctx,n=t.lineWidth,r=t.sectionHeight,o=t.sectionWidth,i=t.strokeStyle,u=t.x,c=t.y;e.beginPath(),e.lineWidth=n,e.strokeStyle=i,e.rect(u,c,o,r),e.stroke()}function o(t){var e=t.ctx,n=t.targetObj,r=t.x,o=t.y;e.clearRect(r,o,n.width,n.height)}Object.defineProperty(e,"__esModule",{value:!0}),e.renderCanvas=r,e.clearCanvas=o},function(t,e,n){"use strict";function r(t){return null!=t&&i(t.length)&&!o(t)}var o=n(22),i=n(15);t.exports=r},function(t,e,n){"use strict";function r(t){if(!i(t))return!1;var e=o(t);return e==c||e==s||e==u||e==a}var o=n(3),i=n(4),u="[object AsyncFunction]",c="[object Function]",s="[object GeneratorFunction]",a="[object Proxy]";t.exports=r},function(t,e,n){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e;t.exports=r}).call(e,n(44))},function(t,e,n){"use strict";function r(t){if(!t)return 0===t?t:0;if((t=o(t))===i||t===-i){return(t<0?-1:1)*u}return t===t?t:0}var o=n(47),i=1/0,u=1.7976931348623157e308;t.exports=r},function(t,e,n){"use strict";function r(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var s=null==n?0:u(n);return s<0&&(s=c(r+s,0)),o(t,i(e,3),s)}var o=n(48),i=n(49),u=n(127),c=Math.max;t.exports=r},function(t,e,n){"use strict";function r(t){var e=this.__data__=new o(t);this.size=e.size}var o=n(9),i=n(57),u=n(58),c=n(59),s=n(60),a=n(61);r.prototype.clear=i,r.prototype.delete=u,r.prototype.get=c,r.prototype.has=s,r.prototype.set=a,t.exports=r},function(t,e,n){"use strict";function r(t){if(null!=t){try{return i.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var o=Function.prototype,i=o.toString;t.exports=r},function(t,e,n){"use strict";function r(t,e,n,u,c){return t===e||(null==t||null==e||!i(t)&&!i(e)?t!==t&&e!==e:o(t,e,n,u,r,c))}var o=n(78),i=n(5);t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r,a,f){var l=n&c,p=t.length,v=e.length;if(p!=v&&!(l&&v>p))return!1;var y=f.get(t);if(y&&f.get(e))return y==e;var h=-1,d=!0,b=n&s?new o:void 0;for(f.set(t,e),f.set(e,t);++h<p;){var _=t[h],x=e[h];if(r)var m=l?r(x,_,h,e,t,f):r(_,x,h,t,e,f);if(void 0!==m){if(m)continue;d=!1;break}if(b){if(!i(e,function(t,e){if(!u(b,e)&&(_===t||a(_,t,n,r,f)))return b.push(e)})){d=!1;break}}else if(_!==x&&!a(_,x,n,r,f)){d=!1;break}}return f.delete(t),f.delete(e),d}var o=n(79),i=n(82),u=n(83),c=1,s=2;t.exports=r},function(t,e,n){"use strict";function r(t){return u(t)?o(t):i(t)}var o=n(95),i=n(102),u=n(21);t.exports=r},function(t,e,n){"use strict";var r=n(97),o=n(5),i=Object.prototype,u=i.hasOwnProperty,c=i.propertyIsEnumerable,s=r(function(){return arguments}())?r:function(t){return o(t)&&u.call(t,"callee")&&!c.call(t,"callee")};t.exports=s},function(t,e,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(0),i=n(98),u="object"==r(e)&&e&&!e.nodeType&&e,c=u&&"object"==r(t)&&t&&!t.nodeType&&t,s=c&&c.exports===u,a=s?o.Buffer:void 0,f=a?a.isBuffer:void 0,l=f||i;t.exports=l}).call(e,n(33)(t))},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var r=n(99),o=n(100),i=n(101),u=i&&i.isTypedArray,c=u?o(u):r;t.exports=c},function(t,e,n){"use strict";function r(t){return t===t&&!o(t)}var o=n(4);t.exports=r},function(t,e,n){"use strict";function r(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}t.exports=r},function(t,e,n){"use strict";function r(t,e){e=o(e,t);for(var n=0,r=e.length;null!=t&&n<r;)t=t[i(e[n++])];return n&&n==r?t:void 0}var o=n(38),i=n(13);t.exports=r},function(t,e,n){"use strict";function r(t,e){return o(t)?t:i(t,e)?[t]:u(c(t))}var o=n(1),i=n(19),u=n(114),c=n(117);t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){d=new f.default({canvas:y,startX:0,startY:0}),i(d),d.hatchEgg(v.START_ON_LOAD)}function i(t){new p.default(t).initEventListeners()}function u(t){window.SNAKE.food=[];new s.default(h)}var c=n(40),s=r(c),a=n(128),f=r(a),l=n(130),p=r(l),v=n(6),y=document.getElementById("SnakePit"),h=document.getElementById("SnakeFood"),d={};window.SNAKE={score:0},window.onload=function(){u(y),o(),window.addEventListener(v.EVT_GAME_OVER,function(t){var e=document.getElementById("ScoreContainer");window.SNAKE.score=0,e.innerHTML=window.SNAKE.score,alert("GAME OVER!")}),window.addEventListener(v.EVT_UPDATE_SCORE,function(t){var e=document.getElementById("ScoreContainer");window.SNAKE.score+=10,e.innerHTML=window.SNAKE.score})}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(41),s=r(c),a=n(25),f=r(a),l=n(6),p=n(20),v=function(){function t(e){var n=this;o(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.addFood(l.DEFAULT_FOOD_COUNT),setInterval(function(){n.addFood(l.DEFAULT_FOOD_COUNT)},5e3),this._attachEvtListeners()}return u(t,[{key:"addFood",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.ctx.canvas,n=e.height,r=e.width,o=window.SNAKE.food,u={ctx:this.ctx,targetObj:this.canvas,x:0,y:0};(0,p.clearCanvas)(u);for(var c=0;c<t;c++){var a={x:this._convertToTens((0,s.default)(0,r)),y:this._convertToTens((0,s.default)(0,n))},l=i({},a,{ctx:this.ctx,lineWidth:1,strokeStyle:"red",sectionWidth:10,sectionHeight:10});-1===(0,f.default)(o,a)&&(o.push(a),(0,p.renderCanvas)(l))}}},{key:"removeFood",value:function(t){var e=(0,f.default)(window.SNAKE.food,t),n=window.SNAKE.food;if(e>-1){n.splice(e,1),this._clearFoodCanvas();for(var r=0;r<n.length;r++){var o=n[r],i=o.x,u=o.y,c={ctx:this.ctx,lineWidth:1,sectionHeight:10,sectionWidth:10,strokeStyle:"red",x:i,y:u};(0,p.renderCanvas)(c)}}}},{key:"_attachEvtListeners",value:function(){var t=this;window.addEventListener(l.EVT_SNAKE_MOLT,function(e){t.removeFood(e.detail)})}},{key:"_clearFoodCanvas",value:function(){var t={ctx:this.ctx,targetObj:this.canvas};(0,p.clearCanvas)(i({},t,{x:0,y:0}))}},{key:"_convertToTens",value:function(t){return 10*Math.round(.1*t)}}]),t}();e.default=v},function(t,e,n){"use strict";function r(t,e,n){if(n&&"boolean"!=typeof n&&i(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=u(t),void 0===e?(e=t,t=0):e=u(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var f=a();return s(t+f*(e-t+c("1e-"+((f+"").length-1))),e)}return o(t,e)}var o=n(42),i=n(43),u=n(24),c=parseFloat,s=Math.min,a=Math.random;t.exports=r},function(t,e,n){"use strict";function r(t,e){return t+o(i()*(e-t+1))}var o=Math.floor,i=Math.random;t.exports=r},function(t,e,n){"use strict";function r(t,e,n){if(!s(n))return!1;var r=void 0===e?"undefined":o(e);return!!("number"==r?u(n)&&c(e,n.length):"string"==r&&e in n)&&i(n[e],t)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(14),u=n(21),c=n(16),s=n(4);t.exports=r},function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";function r(t){var e=u.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(e?t[s]=n:delete t[s]),o}var o=n(7),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,s=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){"use strict";function r(t){return i.call(t)}var o=Object.prototype,i=o.toString;t.exports=r},function(t,e,n){"use strict";function r(t){if("number"==typeof t)return t;if(i(t))return u;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var n=a.test(t);return n||f.test(t)?l(t.slice(2),n?2:8):s.test(t)?u:+t}var o=n(4),i=n(8),u=NaN,c=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt;t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}t.exports=r},function(t,e,n){"use strict";function r(t){return"function"==typeof t?t:null==t?c:"object"==(void 0===t?"undefined":o(t))?s(t)?u(t[0],t[1]):i(t):a(t)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(50),u=n(112),c=n(123),s=n(1),a=n(124);t.exports=r},function(t,e,n){"use strict";function r(t){var e=i(t);return 1==e.length&&e[0][2]?u(e[0][0],e[0][1]):function(n){return n===t||o(n,t,e)}}var o=n(51),i=n(111),u=n(36);t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r){var s=n.length,a=s,f=!r;if(null==t)return!a;for(t=Object(t);s--;){var l=n[s];if(f&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++s<a;){l=n[s];var p=l[0],v=t[p],y=l[1];if(f&&l[2]){if(void 0===v&&!(p in t))return!1}else{var h=new o;if(r)var d=r(v,y,p,t,e,h);if(!(void 0===d?i(y,v,u|c,r,h):d))return!1}}return!0}var o=n(26),i=n(28),u=1,c=2;t.exports=r},function(t,e,n){"use strict";function r(){this.__data__=[],this.size=0}t.exports=r},function(t,e,n){"use strict";function r(t){var e=this.__data__,n=o(e,t);return!(n<0)&&(n==e.length-1?e.pop():u.call(e,n,1),--this.size,!0)}var o=n(10),i=Array.prototype,u=i.splice;t.exports=r},function(t,e,n){"use strict";function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(10);t.exports=r},function(t,e,n){"use strict";function r(t){return o(this.__data__,t)>-1}var o=n(10);t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(10);t.exports=r},function(t,e,n){"use strict";function r(){this.__data__=new o,this.size=0}var o=n(9);t.exports=r},function(t,e,n){"use strict";function r(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}t.exports=r},function(t,e,n){"use strict";function r(t){return this.__data__.get(t)}t.exports=r},function(t,e,n){"use strict";function r(t){return this.__data__.has(t)}t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=this.__data__;if(n instanceof o){var r=n.__data__;if(!i||r.length<c-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new u(r)}return n.set(t,e),this.size=n.size,this}var o=n(9),i=n(17),u=n(18),c=200;t.exports=r},function(t,e,n){"use strict";function r(t){return!(!u(t)||i(t))&&(o(t)?y:a).test(c(t))}var o=n(22),i=n(63),u=n(4),c=n(27),s=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,p=f.toString,v=l.hasOwnProperty,y=RegExp("^"+p.call(v).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){"use strict";function r(t){return!!i&&i in t}var o=n(64),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,e,n){"use strict";var r=n(0),o=r["__core-js_shared__"];t.exports=o},function(t,e,n){"use strict";function r(t,e){return null==t?void 0:t[e]}t.exports=r},function(t,e,n){"use strict";function r(){this.size=0,this.__data__={hash:new o,map:new(u||i),string:new o}}var o=n(67),i=n(9),u=n(17);t.exports=r},function(t,e,n){"use strict";function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(68),i=n(69),u=n(70),c=n(71),s=n(72);r.prototype.clear=o,r.prototype.delete=i,r.prototype.get=u,r.prototype.has=c,r.prototype.set=s,t.exports=r},function(t,e,n){"use strict";function r(){this.__data__=o?o(null):{},this.size=0}var o=n(11);t.exports=r},function(t,e,n){"use strict";function r(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=r},function(t,e,n){"use strict";function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return c.call(e,t)?e[t]:void 0}var o=n(11),i="__lodash_hash_undefined__",u=Object.prototype,c=u.hasOwnProperty;t.exports=r},function(t,e,n){"use strict";function r(t){var e=this.__data__;return o?void 0!==e[t]:u.call(e,t)}var o=n(11),i=Object.prototype,u=i.hasOwnProperty;t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(11),i="__lodash_hash_undefined__";t.exports=r},function(t,e,n){"use strict";function r(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}var o=n(12);t.exports=r},function(t,e,n){"use strict";function r(t){var e=void 0===t?"undefined":o(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=r},function(t,e,n){"use strict";function r(t){return o(this,t).get(t)}var o=n(12);t.exports=r},function(t,e,n){"use strict";function r(t){return o(this,t).has(t)}var o=n(12);t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(12);t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r,d,_){var x=a(t),m=a(e),g=x?y:s(t),S=m?y:s(e);g=g==v?h:g,S=S==v?h:S;var E=g==h,w=S==h,O=g==S;if(O&&f(t)){if(!f(e))return!1;x=!0,E=!1}if(O&&!E)return _||(_=new o),x||l(t)?i(t,e,n,r,d,_):u(t,e,g,n,r,d,_);if(!(n&p)){var j=E&&b.call(t,"__wrapped__"),T=w&&b.call(e,"__wrapped__");if(j||T){var I=j?t.value():t,A=T?e.value():e;return _||(_=new o),d(I,A,n,r,_)}}return!!O&&(_||(_=new o),c(t,e,n,r,d,_))}var o=n(26),i=n(29),u=n(84),c=n(88),s=n(106),a=n(1),f=n(32),l=n(34),p=1,v="[object Arguments]",y="[object Array]",h="[object Object]",d=Object.prototype,b=d.hasOwnProperty;t.exports=r},function(t,e,n){"use strict";function r(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new o;++e<n;)this.add(t[e])}var o=n(18),i=n(80),u=n(81);r.prototype.add=r.prototype.push=i,r.prototype.has=u,t.exports=r},function(t,e,n){"use strict";function r(t){return this.__data__.set(t,o),this}var o="__lodash_hash_undefined__";t.exports=r},function(t,e,n){"use strict";function r(t){return this.__data__.has(t)}t.exports=r},function(t,e,n){"use strict";function r(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}t.exports=r},function(t,e,n){"use strict";function r(t,e){return t.has(e)}t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r,o,E,O){switch(n){case S:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case g:return!(t.byteLength!=e.byteLength||!E(new i(t),new i(e)));case p:case v:case d:return u(+t,+e);case y:return t.name==e.name&&t.message==e.message;case b:case x:return t==e+"";case h:var j=s;case _:var T=r&f;if(j||(j=a),t.size!=e.size&&!T)return!1;var I=O.get(t);if(I)return I==e;r|=l,O.set(t,e);var A=c(j(t),j(e),r,o,E,O);return O.delete(t),A;case m:if(w)return w.call(t)==w.call(e)}return!1}var o=n(7),i=n(85),u=n(14),c=n(29),s=n(86),a=n(87),f=1,l=2,p="[object Boolean]",v="[object Date]",y="[object Error]",h="[object Map]",d="[object Number]",b="[object RegExp]",_="[object Set]",x="[object String]",m="[object Symbol]",g="[object ArrayBuffer]",S="[object DataView]",E=o?o.prototype:void 0,w=E?E.valueOf:void 0;t.exports=r},function(t,e,n){"use strict";var r=n(0),o=r.Uint8Array;t.exports=o},function(t,e,n){"use strict";function r(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}t.exports=r},function(t,e,n){"use strict";function r(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r,u,s){var a=n&i,f=o(t),l=f.length;if(l!=o(e).length&&!a)return!1;for(var p=l;p--;){var v=f[p];if(!(a?v in e:c.call(e,v)))return!1}var y=s.get(t);if(y&&s.get(e))return y==e;var h=!0;s.set(t,e),s.set(e,t);for(var d=a;++p<l;){v=f[p];var b=t[v],_=e[v];if(r)var x=a?r(_,b,v,e,t,s):r(b,_,v,t,e,s);if(!(void 0===x?b===_||u(b,_,n,r,s):x)){h=!1;break}d||(d="constructor"==v)}if(h&&!d){var m=t.constructor,g=e.constructor;m!=g&&"constructor"in t&&"constructor"in e&&!("function"==typeof m&&m instanceof m&&"function"==typeof g&&g instanceof g)&&(h=!1)}return s.delete(t),s.delete(e),h}var o=n(89),i=1,u=Object.prototype,c=u.hasOwnProperty;t.exports=r},function(t,e,n){"use strict";function r(t){return o(t,u,i)}var o=n(90),i=n(92),u=n(30);t.exports=r},function(t,e,n){"use strict";function r(t,e,n){var r=e(t);return i(t)?r:o(r,n(t))}var o=n(91),i=n(1);t.exports=r},function(t,e,n){"use strict";function r(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}t.exports=r},function(t,e,n){"use strict";var r=n(93),o=n(94),i=Object.prototype,u=i.propertyIsEnumerable,c=Object.getOwnPropertySymbols,s=c?function(t){return null==t?[]:(t=Object(t),r(c(t),function(e){return u.call(t,e)}))}:o;t.exports=s},function(t,e,n){"use strict";function r(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var u=t[n];e(u,n,t)&&(i[o++]=u)}return i}t.exports=r},function(t,e,n){"use strict";function r(){return[]}t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=u(t),r=!n&&i(t),f=!n&&!r&&c(t),p=!n&&!r&&!f&&a(t),v=n||r||f||p,y=v?o(t.length,String):[],h=y.length;for(var d in t)!e&&!l.call(t,d)||v&&("length"==d||f&&("offset"==d||"parent"==d)||p&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||s(d,h))||y.push(d);return y}var o=n(96),i=n(31),u=n(1),c=n(32),s=n(16),a=n(34),f=Object.prototype,l=f.hasOwnProperty;t.exports=r},function(t,e,n){"use strict";function r(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=r},function(t,e,n){"use strict";function r(t){return i(t)&&o(t)==u}var o=n(3),i=n(5),u="[object Arguments]";t.exports=r},function(t,e,n){"use strict";function r(){return!1}t.exports=r},function(t,e,n){"use strict";function r(t){return u(t)&&i(t.length)&&!!c[o(t)]}var o=n(3),i=n(15),u=n(5),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=r},function(t,e,n){"use strict";function r(t){return function(e){return t(e)}}t.exports=r},function(t,e,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=n(23),i="object"==r(e)&&e&&!e.nodeType&&e,u=i&&"object"==r(t)&&t&&!t.nodeType&&t,c=u&&u.exports===i,s=c&&o.process,a=function(){try{return s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=a}).call(e,n(33)(t))},function(t,e,n){"use strict";function r(t){if(!o(t))return i(t);var e=[];for(var n in Object(t))c.call(t,n)&&"constructor"!=n&&e.push(n);return e}var o=n(103),i=n(104),u=Object.prototype,c=u.hasOwnProperty;t.exports=r},function(t,e,n){"use strict";function r(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||o)}var o=Object.prototype;t.exports=r},function(t,e,n){"use strict";var r=n(105),o=r(Object.keys,Object);t.exports=o},function(t,e,n){"use strict";function r(t,e){return function(n){return t(e(n))}}t.exports=r},function(t,e,n){"use strict";var r=n(107),o=n(17),i=n(108),u=n(109),c=n(110),s=n(3),a=n(27),f=a(r),l=a(o),p=a(i),v=a(u),y=a(c),h=s;(r&&"[object DataView]"!=h(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=h(new o)||i&&"[object Promise]"!=h(i.resolve())||u&&"[object Set]"!=h(new u)||c&&"[object WeakMap]"!=h(new c))&&(h=function(t){var e=s(t),n="[object Object]"==e?t.constructor:void 0,r=n?a(n):"";if(r)switch(r){case f:return"[object DataView]";case l:return"[object Map]";case p:return"[object Promise]";case v:return"[object Set]";case y:return"[object WeakMap]"}return e}),t.exports=h},function(t,e,n){"use strict";var r=n(2),o=n(0),i=r(o,"DataView");t.exports=i},function(t,e,n){"use strict";var r=n(2),o=n(0),i=r(o,"Promise");t.exports=i},function(t,e,n){"use strict";var r=n(2),o=n(0),i=r(o,"Set");t.exports=i},function(t,e,n){"use strict";var r=n(2),o=n(0),i=r(o,"WeakMap");t.exports=i},function(t,e,n){"use strict";function r(t){for(var e=i(t),n=e.length;n--;){var r=e[n],u=t[r];e[n]=[r,u,o(u)]}return e}var o=n(35),i=n(30);t.exports=r},function(t,e,n){"use strict";function r(t,e){return c(t)&&s(e)?a(f(t),e):function(n){var r=i(n,t);return void 0===r&&r===e?u(n,t):o(e,r,l|p)}}var o=n(28),i=n(113),u=n(120),c=n(19),s=n(35),a=n(36),f=n(13),l=1,p=2;t.exports=r},function(t,e,n){"use strict";function r(t,e,n){var r=null==t?void 0:o(t,e);return void 0===r?n:r}var o=n(37);t.exports=r},function(t,e,n){"use strict";var r=n(115),o=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g,c=r(function(t){var e=[];return o.test(t)&&e.push(""),t.replace(i,function(t,n,r,o){e.push(r?o.replace(u,"$1"):n||t)}),e});t.exports=c},function(t,e,n){"use strict";function r(t){var e=o(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}var o=n(116),i=500;t.exports=r},function(t,e,n){"use strict";function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var u=t.apply(this,r);return n.cache=i.set(o,u)||i,u};return n.cache=new(r.Cache||o),n}var o=n(18),i="Expected a function";r.Cache=o,t.exports=r},function(t,e,n){"use strict";function r(t){return null==t?"":o(t)}var o=n(118);t.exports=r},function(t,e,n){"use strict";function r(t){if("string"==typeof t)return t;if(u(t))return i(t,r)+"";if(c(t))return f?f.call(t):"";var e=t+"";return"0"==e&&1/t==-s?"-0":e}var o=n(7),i=n(119),u=n(1),c=n(8),s=1/0,a=o?o.prototype:void 0,f=a?a.toString:void 0;t.exports=r},function(t,e,n){"use strict";function r(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=r},function(t,e,n){"use strict";function r(t,e){return null!=t&&i(t,e,o)}var o=n(121),i=n(122);t.exports=r},function(t,e,n){"use strict";function r(t,e){return null!=t&&e in Object(t)}t.exports=r},function(t,e,n){"use strict";function r(t,e,n){e=o(e,t);for(var r=-1,f=e.length,l=!1;++r<f;){var p=a(e[r]);if(!(l=null!=t&&n(t,p)))break;t=t[p]}return l||++r!=f?l:!!(f=null==t?0:t.length)&&s(f)&&c(p,f)&&(u(t)||i(t))}var o=n(38),i=n(31),u=n(1),c=n(16),s=n(15),a=n(13);t.exports=r},function(t,e,n){"use strict";function r(t){return t}t.exports=r},function(t,e,n){"use strict";function r(t){return u(t)?o(c(t)):i(t)}var o=n(125),i=n(126),u=n(19),c=n(13);t.exports=r},function(t,e,n){"use strict";function r(t){return function(e){return null==e?void 0:e[t]}}t.exports=r},function(t,e,n){"use strict";function r(t){return function(e){return o(e,t)}}var o=n(37);t.exports=r},function(t,e,n){"use strict";function r(t){var e=o(t),n=e%1;return e===e?n?e-n:e:0}var o=n(24);t.exports=r},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(129),c=function(t){return t&&t.__esModule?t:{default:t}}(u),s=n(20),a=n(6),f=a.DIRECTIONS.down,l=function(){function t(e){r(this,t);var n=e.canvas,i=(e.fillStyle,e.lineWidth),u=e.sectionHeight,s=e.sectionWidth,l=e.startX,p=e.startY,v=e.strokeStyle;this.reptile=n,this.ctx=this.reptile.getContext("2d"),this.props={currentDirection:f,lineWidth:i||1,location:l&&p?{x:l,y:p}:{x:0,y:0},sectionHeight:u||10,sectionWidth:s||10,segments:[],speed:a.DEFAULT_SPEED,strokeStyle:v||"green"},this.move=new c.default(o({},this.props,{ctx:this.ctx,targetObj:this.reptile})),this._attachEvtListeners()}return i(t,[{key:"hatchEgg",value:function(t){for(var e=(this.ctx,this.props),n=(e.fillStyle,e.lineWidth,e.location),r=e.sectionHeight,i=e.sectionWidth,u=(e.strokeStyle,n.x),c=(n.y,0);c<a.DEFAULT_SNAKE_LENGTH;c++){var f=u*i,l=c*r,p=o({},this.props,{ctx:this.ctx,x:f,y:l});(0,s.renderCanvas)(p),this.props.segments.push({x:f,y:l})}t&&this._crawl()}},{key:"_molt",value:function(){var t=this.props,e=t.segments,n=t.currentDirection,r={},o=e[e.length-1],i=o.lastX,u=o.lastY;switch(n){case a.DIRECTIONS.up:r={x:i,y:u+10};break;case a.DIRECTIONS.down:r={x:i,y:u-10};break;case a.DIRECTIONS.right:r={x:i+10,y:u};break;case a.DIRECTIONS.left:r={x:i-10,y:u}}e.push(r),this._updateScore()}},{key:"_attachEvtListeners",value:function(){var t=this;window.addEventListener(a.EVT_MOVE_SNAKE,function(e){t._crawl(e.detail)&&(t.props.currentDirection=e.detail)}),window.addEventListener(a.EVT_SNAKE_MOLT,function(e){t._molt(e.detail)})}},{key:"_crawl",value:function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:f){case a.DIRECTIONS.up:return this.move.up();case a.DIRECTIONS.down:return this.move.down();case a.DIRECTIONS.right:return this.move.right();case a.DIRECTIONS.left:return this.move.left();default:return this.move[defaultDirection]()}}},{key:"_updateScore",value:function(){var t=new CustomEvent(a.EVT_UPDATE_SCORE);window.dispatchEvent(t)}}]),t}();e.default=l},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(25),s=function(t){return t&&t.__esModule?t:{default:t}}(c),a=n(6),f=n(20),l=function(){function t(e){o(this,t),this.props=e,this.props.movement={}}return u(t,[{key:"up",value:function(){if(this._isValidMove(a.DIRECTIONS.up))return this.props.currentDirection=a.DIRECTIONS.up,this._move(),!0}},{key:"down",value:function(){if(this._isValidMove(a.DIRECTIONS.down))return this.props.currentDirection=a.DIRECTIONS.down,this._move(),!0}},{key:"right",value:function(){if(this._isValidMove(a.DIRECTIONS.right))return this.props.currentDirection=a.DIRECTIONS.right,this._move(),!0}},{key:"left",value:function(){if(this._isValidMove(a.DIRECTIONS.left))return this.props.currentDirection=a.DIRECTIONS.left,this._move(),!0}},{key:"_isValidMove",value:function(t){var e;return t!==(e={},r(e,a.DIRECTIONS.up,a.DIRECTIONS.down),r(e,a.DIRECTIONS.down,a.DIRECTIONS.up),r(e,a.DIRECTIONS.left,a.DIRECTIONS.right),r(e,a.DIRECTIONS.right,a.DIRECTIONS.left),e)[this.props.currentDirection]}},{key:"_move",value:function(){var t=this;clearInterval(this.props.movement),this.props.movement=setInterval(function(){t._moveSegments()},this.props.speed)}},{key:"_moveSegments",value:function(){var t=this,e=this.props,n=(e.ctx,e.segments),r=e.currentDirection,o=(e.targetObj,this._getNextLocation(r));if(this._isValidNextLocation(o))n.shift(),n.push(o),(0,f.clearCanvas)(i({},this.props,{x:0,y:0})),n.forEach(function(e){(0,f.renderCanvas)(i({},t.props,{x:e.x,y:e.y}))});else{clearInterval(this.props.movement);var u=new CustomEvent(a.EVT_GAME_OVER);window.dispatchEvent(u)}}},{key:"_isValidNextLocation",value:function(t){var e=t.x,n=t.y,r=this.props,o=r.ctx,i=(r.segments,o.canvas),u=i.height,c=i.width;return e>-1&&e<c&&n>-1&&n<u&&this._noCollision(t)}},{key:"_noCollision",value:function(t){var e=this.props.segments,n=window.SNAKE.food;if((0,s.default)(n,t)>-1){var r=new CustomEvent(a.EVT_SNAKE_MOLT,{detail:t});window.dispatchEvent(r)}return-1===(0,s.default)(e,t)}},{key:"_getNextLocation",value:function(t){var e=this.props,n=e.segments,r=e.sectionWidth,o=e.sectionHeight,i=n[n.length-1],u=i.x,c=i.y;switch(t){case a.DIRECTIONS.up:return{x:u,y:c-o};case a.DIRECTIONS.down:return{x:u,y:c+o};case a.DIRECTIONS.right:return{x:u+r,y:c};case a.DIRECTIONS.left:return{x:u-r,y:c};default:return{x:u,y:c}}}}]),t}();e.default=l},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(6),u=function(){function t(e){r(this,t),this.props=e}return o(t,[{key:"initEventListeners",value:function(){window.addEventListener("keydown",function(t){var e=t.key,n=new CustomEvent(i.EVT_MOVE_SNAKE,{detail:i.CONTROLLER1[e]});i.CONTROLLER1[e]&&window.dispatchEvent(n)})}}]),t}();e.default=u}]);