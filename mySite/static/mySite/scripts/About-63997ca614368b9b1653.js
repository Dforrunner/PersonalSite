(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{368:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(0),o=n.n(r),a=n(10);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(){function e(t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,u(e).call(this,t))).state={error:null,isLoaded:!1,items:{}},n}var t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(e,o.a.Component),t=e,(n=[{key:"componentDidMount",value:function(){var e=this;fetch("/api/about-pg/").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,items:t[0]})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=(e.error,e.isLoaded,e.items);return o.a.createElement("div",{className:"animated slideInLeft",id:"AboutPageWrapper"},o.a.createElement("div",{className:"about-left-content"},o.a.createElement("h1",{className:"pg-header"},t.p_title),o.a.createElement("p",null,t.p1),o.a.createElement("p",null,t.p2),o.a.createElement("p",null,t.p3)),o.a.createElement("div",{className:"about-right-content"},o.a.createElement(a.a,{srcWebp:t.profile_img_webp,src:t.profile_img,className:"about-prof-img",alt:"Profile Image"})))}}])&&c(t.prototype,n),e}()}}]);