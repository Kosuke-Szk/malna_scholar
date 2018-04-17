function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Dropdown=function(e){var t="dropdown",n="4.0.0",r="bs.dropdown",o="."+r,i=".data-api",s=e.fn[t],a=27,l=32,f=9,h=38,u=40,p=3,_=new RegExp(h+"|"+u+"|"+a),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+i,KEYDOWN_DATA_API:"keydown"+o+i,KEYUP_DATA_API:"keyup"+o+i},d={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},g={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},m={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},E={offset:0,flip:!0,boundary:"scrollParent"},T={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},D=function(){function i(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var s=i.prototype;return s.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(d.DISABLED)){var t=i._getParentFromElement(this._element),n=e(this._menu).hasClass(d.SHOW);if(i._clearMenus(),!n){var r={relatedTarget:this._element},o=e.Event(c.SHOW,r);if(e(t).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof Popper)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s=this._element;e(t).hasClass(d.DROPUP)&&(e(this._menu).hasClass(d.MENULEFT)||e(this._menu).hasClass(d.MENURIGHT))&&(s=t),"scrollParent"!==this._config.boundary&&e(t).addClass(d.POSITION_STATIC),this._popper=new Popper(s,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(t).closest(g.NAVBAR_NAV).length&&e("body").children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(d.SHOW),e(t).toggleClass(d.SHOW).trigger(e.Event(c.SHOWN,r))}}}},s.dispose=function(){e.removeData(this._element,r),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},s.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},s._addEventListeners=function(){var t=this;e(this._element).on(c.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},s._getConfig=function(n){return n=_extends({},this.constructor.Default,e(this._element).data(),n),Util.typeCheckConfig(t,n,this.constructor.DefaultType),n},s._getMenuElement=function(){if(!this._menu){var t=i._getParentFromElement(this._element);this._menu=e(t).find(g.MENU)[0]}return this._menu},s._getPlacement=function(){var t=e(this._element).parent(),n=m.BOTTOM;return t.hasClass(d.DROPUP)?(n=m.TOP,e(this._menu).hasClass(d.MENURIGHT)&&(n=m.TOPEND)):t.hasClass(d.DROPRIGHT)?n=m.RIGHT:t.hasClass(d.DROPLEFT)?n=m.LEFT:e(this._menu).hasClass(d.MENURIGHT)&&(n=m.BOTTOMEND),n},s._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},s._getPopperConfig=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=_extends({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},i._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(r);if(n||(n=new i(this,"object"==typeof t?t:null),e(this).data(r,n)),"string"==typeof t){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}})},i._clearMenus=function(t){if(!t||t.which!==p&&("keyup"!==t.type||t.which===f))for(var n=e.makeArray(e(g.DATA_TOGGLE)),o=0;o<n.length;o++){var s=i._getParentFromElement(n[o]),a=e(n[o]).data(r),l={relatedTarget:n[o]};if(a){var h=a._menu;if(e(s).hasClass(d.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&t.which===f)&&e.contains(s,t.target))){var u=e.Event(c.HIDE,l);e(s).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),n[o].setAttribute("aria-expanded","false"),e(h).removeClass(d.SHOW),e(s).removeClass(d.SHOW).trigger(e.Event(c.HIDDEN,l)))}}}},i._getParentFromElement=function(t){var n,r=Util.getSelectorFromElement(t);return r&&(n=e(r)[0]),n||t.parentNode},i._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(t.which===l||t.which!==a&&(t.which!==u&&t.which!==h||e(t.target).closest(g.MENU).length)):_.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!e(this).hasClass(d.DISABLED))){var n=i._getParentFromElement(this),r=e(n).hasClass(d.SHOW);if((r||t.which===a&&t.which===l)&&(!r||t.which!==a&&t.which!==l)){var o=e(n).find(g.VISIBLE_ITEMS).get();if(0!==o.length){var s=o.indexOf(t.target);t.which===h&&s>0&&s--,t.which===u&&s<o.length-1&&s++,s<0&&(s=0),o[s].focus()}}else{if(t.which===a){var f=e(n).find(g.DATA_TOGGLE)[0];e(f).trigger("focus")}e(this).trigger("click")}}},_createClass(i,null,[{key:"VERSION",get:function(){return n}},{key:"Default",get:function(){return E}},{key:"DefaultType",get:function(){return T}}]),i}();return e(document).on(c.KEYDOWN_DATA_API,g.DATA_TOGGLE,D._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,g.MENU,D._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,D._clearMenus).on(c.CLICK_DATA_API,g.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),D._jQueryInterface.call(e(this),"toggle")}).on(c.CLICK_DATA_API,g.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=D._jQueryInterface,e.fn[t].Constructor=D,e.fn[t].noConflict=function(){return e.fn[t]=s,D._jQueryInterface},D}($,Popper);