(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{400:function(e,n,t){"use strict";t.r(n);var r=t(6),o=t.n(r),i=t(94),a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var c=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiType=navigator.presentation&&navigator.presentation.receiver?"presentation":"localStorage","presentation"===this.apiType&&this.setUp()}return a(e,[{key:"registerEvent",value:function(e,n){navigator.presentation.receiver.connectionList.then(function(t){t.connections.forEach(function(t){t.addEventListener(e,n)}),t.addEventListener("connectionavailable",function(e){n(e.connection)})})}},{key:"setUp",value:function(){this.registerEvent("close",function(e){console.log(e)})}},{key:"onChangePage",value:function(e){"presentation"===this.apiType?this.registerEvent("message",function(n){var t=JSON.parse(n.data).page;e(t)}):window.addEventListener("storage",function(n){if("page"===n.key){var t=JSON.parse(n.newValue).page;e(t)}})}}]),e}(),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var u=function(e){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.presentationReceiver=new c,e.presentationReceiver.onChangePage(function(e){window.slide.bespoke.slide(e)}),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.a.PureComponent),s(n,[{key:"render",value:function(){return o.a.createElement(i.a,{slides:this.props.slides,lazyload:!1,currentIndex:this.props.currentIndex})}}]),n}();n.default=u}}]);