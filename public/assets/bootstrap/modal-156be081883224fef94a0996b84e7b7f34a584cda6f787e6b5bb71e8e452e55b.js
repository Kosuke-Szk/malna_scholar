function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function _defineProperties(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,i){return e&&_defineProperties(t.prototype,e),i&&_defineProperties(t,i),t}var Modal=function(t){var e="modal",i="4.0.0",n="bs.modal",s="."+n,o=".data-api",a=t.fn[e],r=300,d=150,l=27,h={backdrop:!0,keyboard:!0,focus:!0,show:!0},c={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},_={HIDE:"hide"+s,HIDDEN:"hidden"+s,SHOW:"show"+s,SHOWN:"shown"+s,FOCUSIN:"focusin"+s,RESIZE:"resize"+s,CLICK_DISMISS:"click.dismiss"+s,KEYDOWN_DISMISS:"keydown.dismiss"+s,MOUSEUP_DISMISS:"mouseup.dismiss"+s,MOUSEDOWN_DISMISS:"mousedown.dismiss"+s,CLICK_DATA_API:"click"+s+o},u={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},f={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},g=function(){function o(e,i){this._config=this._getConfig(i),this._element=e,this._dialog=t(e).find(f.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var a=o.prototype;return a.toggle=function(t){return this._isShown?this.hide():this.show(t)},a.show=function(e){var i=this;if(!this._isTransitioning&&!this._isShown){Util.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)&&(this._isTransitioning=!0);var n=t.Event(_.SHOW,{relatedTarget:e});t(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(u.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(_.CLICK_DISMISS,f.DATA_DISMISS,function(t){return i.hide(t)}),t(this._dialog).on(_.MOUSEDOWN_DISMISS,function(){t(i._element).one(_.MOUSEUP_DISMISS,function(e){t(e.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(e)}))}},a.hide=function(e){var i=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var n=t.Event(_.HIDE);if(t(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var s=Util.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(_.FOCUSIN),t(this._element).removeClass(u.SHOW),t(this._element).off(_.CLICK_DISMISS),t(this._dialog).off(_.MOUSEDOWN_DISMISS),s?t(this._element).one(Util.TRANSITION_END,function(t){return i._hideModal(t)}).emulateTransitionEnd(r):this._hideModal()}}},a.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(s),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},a.handleUpdate=function(){this._adjustDialog()},a._getConfig=function(t){return t=_extends({},h,t),Util.typeCheckConfig(e,t,c),t},a._showElement=function(e){var i=this,n=Util.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Util.reflow(this._element),t(this._element).addClass(u.SHOW),this._config.focus&&this._enforceFocus();var s=t.Event(_.SHOWN,{relatedTarget:e}),o=function(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,t(i._element).trigger(s)};n?t(this._dialog).one(Util.TRANSITION_END,o).emulateTransitionEnd(r):o()},a._enforceFocus=function(){var e=this;t(document).off(_.FOCUSIN).on(_.FOCUSIN,function(i){document!==i.target&&e._element!==i.target&&0===t(e._element).has(i.target).length&&e._element.focus()})},a._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(_.KEYDOWN_DISMISS,function(t){t.which===l&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(_.KEYDOWN_DISMISS)},a._setResizeEvent=function(){var e=this;this._isShown?t(window).on(_.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(_.RESIZE)},a._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(u.OPEN),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(_.HIDDEN)})},a._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},a._showBackdrop=function(e){var i=this,n=t(this._element).hasClass(u.FADE)?u.FADE:"";if(this._isShown&&this._config.backdrop){var s=Util.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=u.BACKDROP,n&&t(this._backdrop).addClass(n),t(this._backdrop).appendTo(document.body),t(this._element).on(_.CLICK_DISMISS,function(t){i._ignoreBackdropClick?i._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide())}),s&&Util.reflow(this._backdrop),t(this._backdrop).addClass(u.SHOW),!e)return;if(!s)return void e();t(this._backdrop).one(Util.TRANSITION_END,e).emulateTransitionEnd(d)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(u.SHOW);var o=function(){i._removeBackdrop(),e&&e()};Util.supportsTransitionEnd()&&t(this._element).hasClass(u.FADE)?t(this._backdrop).one(Util.TRANSITION_END,o).emulateTransitionEnd(d):o()}else e&&e()},a._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},a._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},a._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},a._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(f.FIXED_CONTENT).each(function(i,n){var s=t(n)[0].style.paddingRight,o=t(n).css("padding-right");t(n).data("padding-right",s).css("padding-right",parseFloat(o)+e._scrollbarWidth+"px")}),t(f.STICKY_CONTENT).each(function(i,n){var s=t(n)[0].style.marginRight,o=t(n).css("margin-right");t(n).data("margin-right",s).css("margin-right",parseFloat(o)-e._scrollbarWidth+"px")}),t(f.NAVBAR_TOGGLER).each(function(i,n){var s=t(n)[0].style.marginRight,o=t(n).css("margin-right");t(n).data("margin-right",s).css("margin-right",parseFloat(o)+e._scrollbarWidth+"px")});var i=document.body.style.paddingRight,n=t("body").css("padding-right");t("body").data("padding-right",i).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},a._resetScrollbar=function(){t(f.FIXED_CONTENT).each(function(e,i){var n=t(i).data("padding-right");void 0!==n&&t(i).css("padding-right",n).removeData("padding-right")}),t(f.STICKY_CONTENT+", "+f.NAVBAR_TOGGLER).each(function(e,i){var n=t(i).data("margin-right");void 0!==n&&t(i).css("margin-right",n).removeData("margin-right")});var e=t("body").data("padding-right");void 0!==e&&t("body").css("padding-right",e).removeData("padding-right")},a._getScrollbarWidth=function(){var t=document.createElement("div");t.className=u.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=_extends({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},_createClass(o,null,[{key:"VERSION",get:function(){return i}},{key:"Default",get:function(){return h}}]),o}();return t(document).on(_.CLICK_DATA_API,f.DATA_TOGGLE,function(e){var i,s=this,o=Util.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":_extends({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=t(i).one(_.SHOW,function(e){e.isDefaultPrevented()||r.one(_.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});g._jQueryInterface.call(t(i),a,this)}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=a,g._jQueryInterface},g}($);