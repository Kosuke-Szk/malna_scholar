!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function e(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function t(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ae))}}function n(e){return e&&"[object Function]"==={}.toString.call(e)}function r(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function o(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function i(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=r(e),n=t.overflow,f=t.overflowX,a=t.overflowY;return/(auto|scroll)/.test(n+a+f)?e:i(o(e))}function f(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(t.nodeName)&&"static"===r(t,"position")?f(t):t:e?e.ownerDocument.documentElement:document.documentElement}function a(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||f(e.firstElementChild)===e)}function s(e){return null!==e.parentNode?s(e.parentNode):e}function p(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var u=i.commonAncestorContainer;if(e!==u&&t!==u||r.contains(o))return a(u)?u:f(u);var l=s(e);return l.host?p(l.host,t):p(e,s(t).host)}function u(e){var t="top"===(arguments.length>1&&arguments[1]!==undefined?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[t]}return e[t]}function l(e,t){var n=arguments.length>2&&arguments[2]!==undefined&&arguments[2],r=u(t,"top"),o=u(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}function d(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function c(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],le()?n["offset"+e]+r["margin"+("Height"===e?"Top":"Left")]+r["margin"+("Height"===e?"Bottom":"Right")]:0)}function h(){var e=document.body,t=document.documentElement,n=le()&&getComputedStyle(t);return{height:c("Height",e,t,n),width:c("Width",e,t,n)}}function m(e){return me({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var t={};if(le())try{t=e.getBoundingClientRect();var n=u(e,"top"),o=u(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}catch(g){}else t=e.getBoundingClientRect();var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},f="HTML"===e.nodeName?h():{},a=f.width||e.clientWidth||i.right-i.left,s=f.height||e.clientHeight||i.bottom-i.top,p=e.offsetWidth-a,l=e.offsetHeight-s;if(p||l){var c=r(e);p-=d(c,"x"),l-=d(c,"y"),i.width-=p,i.height-=l}return m(i)}function v(e,t){var n=le(),o="HTML"===t.nodeName,f=g(e),a=g(t),s=i(e),p=r(t),u=parseFloat(p.borderTopWidth,10),d=parseFloat(p.borderLeftWidth,10),c=m({top:f.top-a.top-u,left:f.left-a.left-d,width:f.width,height:f.height});if(c.marginTop=0,c.marginLeft=0,!n&&o){var h=parseFloat(p.marginTop,10),v=parseFloat(p.marginLeft,10);c.top-=u-h,c.bottom-=u-h,c.left-=d-v,c.right-=d-v,c.marginTop=h,c.marginLeft=v}return(n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(c=l(c,t)),c}function b(e){var t=e.ownerDocument.documentElement,n=v(e,t),r=Math.max(t.clientWidth,window.innerWidth||0),o=Math.max(t.clientHeight,window.innerHeight||0),i=u(t),f=u(t,"left");return m({top:i-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:r,height:o})}function w(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===r(e,"position")||w(o(e)))}function y(e,t,n,r){var f={top:0,left:0},a=p(e,t);if("viewport"===r)f=b(a);else{var s=void 0;"scrollParent"===r?"BODY"===(s=i(o(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===r?e.ownerDocument.documentElement:r;var u=v(s,a);if("HTML"!==s.nodeName||w(a))f=u;else{var l=h(),d=l.height,c=l.width;f.top+=u.top-u.marginTop,f.bottom=d+u.top,f.left+=u.left-u.marginLeft,f.right=c+u.left}}return f.left+=n,f.top+=n,f.right-=n,f.bottom-=n,f}function E(e){return e.width*e.height}function O(e,t,n,r,o){var i=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var f=y(n,r,i,o),a={top:{width:f.width,height:t.top-f.top},right:{width:f.right-t.right,height:f.height},bottom:{width:f.width,height:f.bottom-t.bottom},left:{width:t.left-f.left,height:f.height}},s=Object.keys(a).map(function(e){return me({key:e},a[e],{area:E(a[e])})}).sort(function(e,t){return t.area-e.area}),p=s.filter(function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight}),u=p.length>0?p[0].key:s[0].key,l=e.split("-")[1];return u+(l?"-"+l:"")}function x(e,t,n){return v(n,p(t,n))}function L(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),r=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function T(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function N(e,t,n){n=n.split("-")[0];var r=L(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",a=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return o[f]=t[f]+t[s]/2-r[s]/2,o[a]=n===a?t[a]-r[p]:t[T(a)],o}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=C(e,function(e){return e[t]===n});return e.indexOf(r)}function M(e,t,r){return(r===undefined?e:e.slice(0,D(e,"name",r))).forEach(function(e){e["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var r=e["function"]||e.fn;e.enabled&&n(r)&&(t.offsets.popper=m(t.offsets.popper),t.offsets.reference=m(t.offsets.reference),t=r(t,e))}),t}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=N(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=M(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function S(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length-1;r++){var o=t[r],i=o?""+o+n:e;if("undefined"!=typeof document.body.style[i])return i}return null}function F(){return this.state.isDestroyed=!0,W(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[S("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function P(e){var t=e.ownerDocument;return t?t.defaultView:window}function B(e,t,n,r){var o="BODY"===e.nodeName,f=o?e.ownerDocument.defaultView:e;f.addEventListener(t,n,{passive:!0}),o||B(i(f.parentNode),t,n,r),r.push(f)}function H(e,t,n,r){n.updateBound=r,P(e).addEventListener("resize",n.updateBound,{passive:!0});var o=i(e);return B(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function j(e,t){return P(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=j(this.reference,this.state))}function R(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&R(t[n])&&(r="px"),e.style[n]=t[n]+r})}function Y(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function q(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e}function K(e,t,n,r,o){var i=x(o,t,e),f=O(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",f),U(t,{position:"absolute"}),n}function V(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=C(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;i!==undefined&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=i!==undefined?i:t.gpuAcceleration,s=g(f(e.instance.popper)),p={position:o.position},u={left:Math.floor(o.left),top:Math.floor(o.top),bottom:Math.floor(o.bottom),right:Math.floor(o.right)},l="bottom"===n?"top":"bottom",d="right"===r?"left":"right",c=S("transform"),h=void 0,m=void 0;if(m="bottom"===l?-s.height+u.bottom:u.top,h="right"===d?-s.width+u.right:u.left,a&&c)p[c]="translate3d("+h+"px, "+m+"px, 0)",p[l]=0,p[d]=0,p.willChange="transform";else{var v="bottom"===l?-1:1,b="right"===d?-1:1;p[l]=m*v,p[d]=h*b,p.willChange=l+", "+d}var w={"x-placement":e.placement};return e.attributes=me({},w,e.attributes),e.styles=me({},p,e.styles),e.arrowStyles=me({},e.offsets.arrow,e.arrowStyles),e}function z(e,t,n){var r=C(e,function(e){return e.name===t}),o=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!o){var i="`"+t+"`",f="`"+n+"`";console.warn(f+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function G(e,t){var n;if(!z(e.instance.modifiers,"arrow","keepTogether"))return e;var o=t.element;if("string"==typeof o){if(!(o=e.instance.popper.querySelector(o)))return e}else if(!e.instance.popper.contains(o))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],f=e.offsets,a=f.popper,s=f.reference,p=-1!==["left","right"].indexOf(i),u=p?"height":"width",l=p?"Top":"Left",d=l.toLowerCase(),c=p?"left":"top",h=p?"bottom":"right",g=L(o)[u];s[h]-g<a[d]&&(e.offsets.popper[d]-=a[d]-(s[h]-g)),s[d]+g>a[h]&&(e.offsets.popper[d]+=s[d]+g-a[h]),e.offsets.popper=m(e.offsets.popper);var v=s[d]+s[u]/2-g/2,b=r(e.instance.popper),w=parseFloat(b["margin"+l],10),y=parseFloat(b["border"+l+"Width"],10),E=v-e.offsets.popper[d]-w-y;return E=Math.max(Math.min(a[u]-g,E),0),e.arrowElement=o,e.offsets.arrow=(he(n={},d,Math.round(E)),he(n,c,""),n),e}function _(e){return"end"===e?"start":"start"===e?"end":e}function X(e){var t=arguments.length>1&&arguments[1]!==undefined&&arguments[1],n=ve.indexOf(e),r=ve.slice(n+1).concat(ve.slice(0,n));return t?r.reverse():r}function J(e,t){if(W(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),r=e.placement.split("-")[0],o=T(r),i=e.placement.split("-")[1]||"",f=[];switch(t.behavior){case be.FLIP:f=[r,o];break;case be.CLOCKWISE:f=X(r);break;case be.COUNTERCLOCKWISE:f=X(r,!0);break;default:f=t.behavior}return f.forEach(function(a,s){if(r!==a||f.length===s+1)return e;r=e.placement.split("-")[0],o=T(r);var p=e.offsets.popper,u=e.offsets.reference,l=Math.floor,d="left"===r&&l(p.right)>l(u.left)||"right"===r&&l(p.left)<l(u.right)||"top"===r&&l(p.bottom)>l(u.top)||"bottom"===r&&l(p.top)<l(u.bottom),c=l(p.left)<l(n.left),h=l(p.right)>l(n.right),m=l(p.top)<l(n.top),g=l(p.bottom)>l(n.bottom),v="left"===r&&c||"right"===r&&h||"top"===r&&m||"bottom"===r&&g,b=-1!==["top","bottom"].indexOf(r),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g);(d||v||w)&&(e.flipped=!0,(d||v)&&(r=f[s+1]),w&&(i=_(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=me({},e.offsets.popper,N(e.instance.popper,e.offsets.reference,e.placement)),e=M(e.instance.modifiers,e,"flip"))}),e}function Q(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,f=-1!==["top","bottom"].indexOf(o),a=f?"right":"bottom",s=f?"left":"top",p=f?"width":"height";return n[a]<i(r[s])&&(e.offsets.popper[s]=i(r[s])-n[p]),n[s]>i(r[a])&&(e.offsets.popper[s]=i(r[a])),e}function Z(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],f=o[2];if(!i)return e;if(0===f.indexOf("%")){var a=void 0;switch(f){case"%p":a=n;break;case"%":case"%r":default:a=r}return m(a)[t]/100*i}if("vh"===f||"vw"===f){return("vh"===f?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}function $(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),f=e.split(/(\+|\-)/).map(function(e){return e.trim()}),a=f.indexOf(C(f,function(e){return-1!==e.search(/,|\s/)}));f[a]&&-1===f[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==a?[f.slice(0,a).concat([f[a].split(s)[0]]),[f[a].split(s)[1]].concat(f.slice(a+1))]:[f];return(p=p.map(function(e,r){var o=(1===r?!i:i)?"height":"width",f=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,f=!0,e):f?(e[e.length-1]+=t,f=!1,e):e.concat(t)},[]).map(function(e){return Z(e,o,t,n)})})).forEach(function(e,t){e.forEach(function(n,r){R(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))})}),o}function ee(e,t){var n=t.offset,r=e.placement,o=e.offsets,i=o.popper,f=o.reference,a=r.split("-")[0],s=void 0;return s=R(+n)?[+n,0]:$(n,i,f,a),"left"===a?(i.top+=s[0],i.left-=s[1]):"right"===a?(i.top+=s[0],i.left+=s[1]):"top"===a?(i.left+=s[0],i.top-=s[1]):"bottom"===a&&(i.left+=s[0],i.top+=s[1]),e.popper=i,e}function te(e,t){var n=t.boundariesElement||f(e.instance.popper);e.instance.reference===n&&(n=f(n));var r=y(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=r;var o=t.priority,i=e.offsets.popper,a={primary:function(e){var n=i[e];return i[e]<r[e]&&!t.escapeWithReference&&(n=Math.max(i[e],r[e])),he({},e,n)},secondary:function(e){var n="right"===e?"left":"top",o=i[n];return i[e]>r[e]&&!t.escapeWithReference&&(o=Math.min(i[n],r[e]-("right"===e?i.width:i.height))),he({},n,o)}};return o.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";i=me({},i,a[t](e))}),e.offsets.popper=i,e}function ne(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,f=o.popper,a=-1!==["bottom","top"].indexOf(n),s=a?"left":"top",p=a?"width":"height",u={start:he({},s,i[s]),end:he({},s,i[s]+i[p]-f[p])};e.offsets.popper=me({},f,u[r])}return e}function re(e){if(!z(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=C(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function oe(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,f=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[f?"left":"top"]=i[n]-(a?o[f?"width":"height"]:0),e.placement=T(t),e.offsets.popper=m(o),e}for(var ie="undefined"!=typeof window&&"undefined"!=typeof document,fe=["Edge","Trident","Firefox"],ae=0,se=0;se<fe.length;se+=1)if(ie&&navigator.userAgent.indexOf(fe[se])>=0){ae=1;break}var pe=ie&&window.Promise?e:t,ue=undefined,le=function(){return ue===undefined&&(ue=-1!==navigator.appVersion.indexOf("MSIE 10")),ue},de=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),he=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ve=ge.slice(3),be={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},we={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:ne},offset:{order:200,enabled:!0,fn:ee,offset:0},preventOverflow:{order:300,enabled:!0,fn:te,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:Q},arrow:{order:500,enabled:!0,fn:G,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:J,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:oe},hide:{order:800,enabled:!0,fn:re},computeStyle:{order:850,enabled:!0,fn:V,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:q,onLoad:K,gpuAcceleration:undefined}}},ye=function(){function e(t,r){var o=this,i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};de(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=pe(this.update.bind(this)),this.options=me({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(me({},e.Defaults.modifiers,i.modifiers)).forEach(function(t){o.options.modifiers[t]=me({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return me({name:e},o.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&n(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)}),this.update();var f=this.options.eventsEnabled;f&&this.enableEventListeners(),this.state.eventsEnabled=f}return ce(e,[{key:"update",value:function(){return k.call(this)}},{key:"destroy",value:function(){return F.call(this)}},{key:"enableEventListeners",value:function(){return A.call(this)}},{key:"disableEventListeners",value:function(){return I.call(this)}}]),e}();return ye.Utils=("undefined"!=typeof window?window:global).PopperUtils,ye.placements=ge,ye.Defaults=we,ye});