(self.webpackChunkpersonalsite=self.webpackChunkpersonalsite||[]).push([[74],{297:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(7294),o=n(6220);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(p,e);var t,n,c,f,s=(c=p,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(c);if(f){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this,e)).state={error:null,isLoaded:!1,items:{}},t}return t=p,(n=[{key:"componentDidMount",value:function(){var e=this;fetch("/api/about-pg/").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t[0]})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=(e.error,e.isLoaded,e.items);return r.createElement("div",{className:"animated slideInLeft",id:"AboutPageWrapper"},r.createElement("div",{className:"about-left-content"},r.createElement("h1",{className:"pg-header"},t.p_title),r.createElement("p",null,t.p1),r.createElement("p",null,t.p2),r.createElement("p",null,t.p3)),r.createElement("div",{className:"about-right-content"},r.createElement(o.ZP,{srcWebp:t.profile_img_webp,src:t.profile_img_jpg,className:"about-prof-img",alt:"Profile Image"})))}}])&&i(t.prototype,n),p}(r.Component)}}]);