(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{371:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(363),i=r(163),s=[{featureType:"water",elementType:"geometry",stylers:[{color:"#1c1c1c"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#FF0059"}]},{featureType:"poi",stylers:[{color:"#FF0059"},{lightness:-7}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#FF0059"},{lightness:-28}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#FF0059"},{visibility:"on"},{lightness:-15}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#FF0059"},{lightness:-18}]},{elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#FF0059"},{lightness:-34}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"on"},{color:"#333739"},{weight:.8}]},{featureType:"poi.park",stylers:[{color:"#FF0059"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#333739"},{weight:.3},{lightness:10}]}];function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=Object(i.withScriptjs)(Object(i.withGoogleMap)((function(e){return o.a.createElement(i.GoogleMap,{defaultZoom:6,defaultCenter:{lat:e.latitude,lng:e.longitude},options:{mapTypeControl:!1,clickableIcons:!1,streetViewControl:!1,zoomControl:!1,fullscreenControl:!1,styles:s}},o.a.createElement(i.Marker,{key:1120,position:{lat:e.latitude,lng:e.longitude},icon:{url:e.marker,scaledSize:new window.google.maps.Size(60,80)}}))}))),p=function(){function e(t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(r=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,u(e).call(this,t))).state={latitude:40.532293,longitude:-74.456657,marker:"http://127.0.0.1:8000/media/map_marker/map_marker.png"},r}var t,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(e,o.a.Component),t=e,(r=[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("","/api/google-map/")).then((function(e){return e.json()})).then((function(t){e.setState({latitude:Number(t[0].latitude),longitude:Number(t[0].longitude),marker:t[0].marker})}),(function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{id:"GoogleMapWrapper"},o.a.createElement(f,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyDV7YtNvkuVmSEeKLop7MfvFX6HWwoqyi4"),loadingElement:o.a.createElement("div",{style:{width:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"100%"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}}),latitude:this.state.latitude,longitude:this.state.longitude,marker:this.state.marker}))}}])&&c(t.prototype,r),e}();function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,r,n,i,s,l){var c=5<arguments.length&&void 0!==s?s:void 0,u=6<arguments.length&&void 0!==l?l:void 0;return o.a.createElement("div",{className:e},o.a.createElement(a.b,{className:e,type:t,name:r,placeholder:n,component:c,rows:u}),o.a.createElement(a.a,{name:r},(function(e){return o.a.createElement("div",{className:"error-msg"},e)})),o.a.createElement("p",{className:"error-msg"}," "))}r.d(t,"default",(function(){return v}));var v=function(){function e(t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(r=function(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,g(e).call(this,t))).state={is_errors:!1,res_errors:[],is_sent:!1,req_status:null,msg_color:null},r}var t,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(e,o.a.Component),t=e,(r=[{key:"render",value:function(){var e=this,t=this.state,r=(t.is_errors,t.res_errors),n=t.is_sent,i=t.req_status,s=t.msg_color;return o.a.createElement("div",{id:"ContactPageWrapper"},o.a.createElement("div",{id:"ContactFormWrapper"},o.a.createElement(a.d,{initialValues:{name:"",email:"",subject:"",message:""},validate:function(e){var t={};return e.name?20<e.name.length&&(t.name="Must be 20 characters or less"):t.name="Name is Required",e.email?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email Required",e.subject?64<e.subject.length&&(t.subject="Must be 64 characters or less"):t.subject="Subject is Required",e.message?1500<e.message.length&&(t.message="Must be 1500 characters or less"):t.message="Message is Required",t},onSubmit:function(t,r){var n=r.setSubmitting;fetch("".concat("","/ajax/send_email/"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":_},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){t.success?e.setState({is_sent:!0,req_status:"Successfully Sent!",msg_color:"green-text",is_errors:!1}):(console.log(t.errors),e.setState({is_errors:!0,is_sent:!0,res_errors:JSON.parse(t.errors),req_status:"Error sending",msg_color:"red-text"}))})).catch((function(e){console.log(e)})),n(!1)}},(function(e){var t=e.isSubmitting;return o.a.createElement(a.c,{className:"p-4",id:"ContactForm",method:"POST"},o.a.createElement("h1",{className:"pg-header"},"Contact me"),o.a.createElement("input",{type:"hidden",name:"csrfmiddlewaretoken",value:_}),o.a.createElement("div",{id:"ContactFormFields"},h("name-field","text","name","Your name",r.name),h("email-field","email","email","Your email",r.email),h("subject-field","text","subject","Subject",r.subject),h("message-field","text","message","Your message",r.message,"textarea",4)),o.a.createElement("button",{className:"btn submit-btn",type:"submit",disabled:t},"Submit"),o.a.createElement("h6",{className:s},n?i:" "))}))),o.a.createElement(p,null))}}])&&d(t.prototype,r),e}(),_=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var r=document.cookie.split(";"),n=0;n<r.length;n++){var o=r[n].trim();if(o.substring(0,e.length+1)===e+"="){t=decodeURIComponent(o.substring(e.length+1));break}}return t}("csrftoken")}}]);