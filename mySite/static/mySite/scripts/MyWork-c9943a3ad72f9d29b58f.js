(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{365:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var o=n(0),r=n.n(o);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return t="icon-".concat(t," cyan-text"),r.a.createElement("a",{href:e,target:"_blank"},r.a.createElement("i",{className:t}," "))}var f=function(){function e(t){var n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this,o=l(e).call(this,t),(n=!o||"object"!==a(o)&&"function"!=typeof o?s(this):o).loadProjects=function(){n.setState({loading:!0},(function(){var e=n.state,t=e.offset,o=e.limit;fetch("".concat("muhammetbarut.com","/lazy-load-projects/?limit=").concat(o,"&offset=").concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({loading:!1,projects:[].concat(c(n.state.projects),c(e.project_list)),offset:t+o,hasMore:e.has_more})}),(function(e){n.setState({loading:!1,error:e})}))}))},n.state={error:null,loading:!1,projects:[],hasMore:!0,offset:0,limit:2},window.onscroll=function(){var e=s(n).state,t=e.error,o=e.loading,r=e.hasMore;t||o||!r||document.documentElement.scrollHeight-document.documentElement.scrollTop===document.documentElement.clientHeight&&n.loadProjects()},n}var t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(e,r.a.Component),t=e,(n=[{key:"componentDidMount",value:function(){this.loadProjects()}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.loading,o=e.hasMore,a=e.projects;return r.a.createElement("div",{className:"white-text primary-font animated fadeIn",id:"MyWorkPgWrapper"},r.a.createElement("h1",{className:"pg-header"},"My Work"),a.map((function(e){return r.a.createElement("div",{key:e.pk,className:"animated slideInLeft"},r.a.createElement("div",{className:"mockup-image-group"},e.desktop_img&&r.a.createElement("img",{src:e.desktop_img,alt:"Project Desktop Image",className:"desktop-img"}),e.tablet_img&&r.a.createElement("img",{src:e.tablet_img,alt:"Project Tablet Image",className:"tablet-img"}),e.mobile_img&&r.a.createElement("img",{src:e.mobile_img,alt:"Project Mobile Image",className:"mobile-img"})),r.a.createElement("div",{className:"project-info-wrapper"},r.a.createElement("div",{className:"f-row-between"},r.a.createElement("h2",null,e.title),r.a.createElement("div",{className:"mt-3"},e.github?u(e.github,"github-circled"):"",e.site_link?u(e.site_link,"link-ext"):"",e.video?u(e.video,"youtube-play"):"")),r.a.createElement("p",{className:"project-description"},e.description),r.a.createElement("div",{className:"row"},e.tools_used.map((function(e){return r.a.createElement("span",{className:"tools-used",key:e.pk},e.skill_name)})))))})),t&&r.a.createElement("div",null,t),n&&r.a.createElement("div",{className:"f-row-center pt-3 mt-3"},r.a.createElement("h3",null,"Loading Projects...")),!o&&r.a.createElement("div",{className:"f-row-center pt-3 mt-3"},r.a.createElement("h3",null,"No more results")))}}])&&i(t.prototype,n),e}()}}]);