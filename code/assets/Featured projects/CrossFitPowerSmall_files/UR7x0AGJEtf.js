if (self.CavalryLogger) { CavalryLogger.start_js(["ctOpz"]); }

__d("routeBuilderUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();a=a.split("/");return a.filter(function(a){return a!==""}).map(function(a){__p&&__p();var b=a.split(/{|}/);if(b.length<3)return{isToken:!1,part:a};else{a=b[0];var c=b[1];b=b[2];var d=c[0]==="?",e=c[d?1:0]==="*";c=c.substring((d?1:0)+(e?1:0));return{isToken:!0,optional:d,prefix:a,suffix:b,token:c}}})}e.exports={getPathParts:a}}),null);
__d("cometRouteBuilder",["ConstUriUtils","FBLogger","routeBuilderUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("routeBuilderUtils").getPathParts;function a(a,c,d,e){__p&&__p();var f=g(a);function h(g){__p&&__p();var h=e!=null?babelHelpers["extends"]({},e,g):g,i={};g="";var j=!1;g=f.reduce(function(a,b){__p&&__p();if(!b.isToken)return a+"/"+b.part;else{var d,e=b.optional,f=b.prefix,g=b.suffix;b=b.token;if(e&&j)return a;d=(d=h[b])!=null?d:c[b];if(d==null&&e){j=!0;return a}if(d==null)throw new Error("Missing required template parameter: "+b);if(d==="")throw new Error("Required template parameter is an empty string: "+b);i[b]=!0;return a+"/"+f+d+g}},"");a.slice(-1)==="/"&&(g+="/");g===""&&(g="/");var k=b("ConstUriUtils").getUri(g);for(var l in h){var m=h[l];!i[l]&&m!=null&&k!=null&&(d!=null&&d.has(l)?m!==!1&&(k=k.addQueryParam(l,null)):k=k.addQueryParam(l,m))}return k==null?g:k.toString()}return{buildURL:function(c){try{return h(c)}catch(c){b("FBLogger")("CometRouteBuilder").catching(c).mustfix("Failed building URL for base path: %s",a);return"#"}}}}e.exports=a}),null);
__d("cometExtraRouteBuilder",["cometRouteBuilder","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e){var f=b("cometRouteBuilder")(a,c,e),g=d.reduce(function(a,d){a===void 0&&(a={});typeof d==="string"&&(a[d]=b("cometRouteBuilder")(d,c,e).buildURL);return a},{});return{buildExtraURL:function(a,c){if(typeof a!=="string"||g[a]==null)throw b("unrecoverableViolation")("Route builder for extra path does not exist","comet_infra");return g[a](c)},buildURL:function(a){return f.buildURL(a)}}}e.exports=a}),null);
__d("XUpdateTimezoneControllerRouteBuilder",["cometExtraRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometExtraRouteBuilder")("/ajax/autoset_timezone_ajax/",Object.freeze({is_forced:!1}),["/ajax/autoset_timezone_ajax.php","/ajax/timezone/update/","/ajax/timezone/update.php"],void 0);e.exports=a}),null);
__d("getBrowserGMTOffsetAdjustedForSkew",["DateConsts","FBLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(c=b("DateConsts")).HOUR_PER_DAY,h=c.MIN_PER_HOUR,i=c.MS_PER_SEC,j=c.SEC_PER_MIN;function a(a){var c=h*g,d=new Date(),e=d.getTimezoneOffset();d=d.getTime()/i;var f=15;a=a-d;d=Math.round(a/(f*j))*f;d!=0&&b("FBLogger")("TimezoneAutoset").warn("Adjusting timezone offset for clock skew. Browser offset: %s. Raw skew %s. Rounded skew %s",e,a,d);f=Math.round(e+d)%c;f>12*h?f-=c:f<-14*h&&(f+=c);return f}e.exports=a}),null);
__d("getBrowserTimezone",["FBLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){try{var a;a=((a=window.Intl)==null?void 0:a.DateTimeFormat)&&Intl.DateTimeFormat();a=(a==null?void 0:a.resolvedOptions)&&a.resolvedOptions();return a==null?void 0:a.timeZone}catch(a){b("FBLogger")("TimezoneAutoset").catching(a).warn("Could not read IANA timezone from browser");return null}}e.exports=a}),null);
__d("TimezoneAutoset",["AsyncRequest","XUpdateTimezoneControllerRouteBuilder","emptyFunction","getBrowserGMTOffsetAdjustedForSkew","getBrowserTimezone","killswitch"],(function(a,b,c,d,e,f){__p&&__p();var g=!1;function a(a,b,c){h({serverTimestamp:a,serverTimezone:null,serverGmtOffset:b,forceUpdate:c})}function h(a){__p&&__p();var c=a.serverTimestamp,d=a.serverTimezone,e=a.serverGmtOffset;a=a.forceUpdate;if(!c||e==null)return;if(g)return;g=!0;c=-b("getBrowserGMTOffsetAdjustedForSkew")(c);var f=b("killswitch")("TIMEZONE_SET_IANA_ZONE_NAME")?null:b("getBrowserTimezone")();if(a||c!=e||f!=null&&f!=d){e=b("XUpdateTimezoneControllerRouteBuilder").buildExtraURL("/ajax/timezone/update.php",{});new(b("AsyncRequest"))().setURI(e).setData({tz:f,gmt_off:c,is_forced:a}).setErrorHandler(b("emptyFunction")).setTransportErrorHandler(b("emptyFunction")).setOption("suppressErrorAlerts",!0).send()}}c={setInputValue:function(a,c){a.value=b("getBrowserGMTOffsetAdjustedForSkew")(c).toString()},setTimezone:a,getBrowserTimezone:b("getBrowserTimezone"),setTimezoneAndOffset:h};e.exports=c}),null);
__d("FlipDirection",["DOM","Input","Style"],(function(a,b,c,d,e,f){__p&&__p();a={setDirection:function(a,c,d){__p&&__p();c===void 0&&(c=5);d===void 0&&(d=!1);var e=b("DOM").isNodeOfType(a,"input")&&a.type=="text",f=b("DOM").isNodeOfType(a,"textarea");if(!(e||f)||a.getAttribute("data-prevent-auto-flip"))return;e=b("Input").getValue(a);f=a.style&&a.style.direction;if(!f||d){f=0;d=!0;for(var g=0;g<e.length;g++){var h=e.charCodeAt(g);if(h>=48){d&&(d=!1,f++);if(h>=1470&&h<=1920){b("Style").set(a,"direction","rtl");a.setAttribute("dir","rtl");return}if(f==c){b("Style").set(a,"direction","ltr");a.setAttribute("dir","ltr");return}}else d=!0}}else e.length===0&&(b("Style").set(a,"direction",""),a.removeAttribute("dir"))}};e.exports=a}),null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f){a=function(a){a=a.getTarget();b("FlipDirection").setDirection(a)};b("Event").listen(document.documentElement,{keyup:a,input:a})}),null);
__d("NoscriptOverride",["Cookie","goURI"],(function(a,b,c,d,e,f){a={redirectToJSPage:function(a){b("Cookie").clear("noscript"),b("goURI")(a)}};e.exports=a}),null);
__d("ScreenDimensionsAutoSet",[],(function(a,b,c,d,e,f){function g(){if(!window.btoa)return"";var a={w:screen.width,h:screen.height,aw:screen.availWidth,ah:screen.availHeight,c:screen.colorDepth};return btoa(JSON.stringify(a))}a={setInputValue:function(a){a.value=g()},getScreenDimensions:g};e.exports=a}),null);
__d("WebCookieUseBannerController",["Arbiter","CSS","DeferredCookie","DOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(a,c){this.banner=a;this.closeButton=c;document.body&&b("CSS").addClass(document.body,"hasCookieBanner");b("DeferredCookie").addDefaultInteractionListener();if(c){var d=function(){document.body&&b("CSS").removeClass(document.body,"hasCookieBanner"),b("DOM").remove(a),b("Arbiter").inform("WebCookieUseBannerController/close")};c.addEventListener?c.addEventListener("click",d):c.attachEvent&&c.attachEvent("onclick",d)}}};e.exports=a}),null);
__d("MessengerMarketingHeader",["cx","CSS","Style"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();a.create=function(b,c,d){return new a(b,c,d)};function a(a,b,c){__p&&__p();var d=this;this.onScroll=function(){window.scrollY<d.top?(d.fixed&&d.toggleFixed(),d.toggleBgOpacity(!1,0)):(d.fixed||d.toggleFixed(),window.scrollY-d.top<d.fade?d.toggleBgOpacity(!1,(window.scrollY-d.top)/d.fade):d.bgShowing||d.toggleBgOpacity(!0,1))};this.root=a;this.bg=b;this.fade=60;this.top=c;this.fixed=!1;this.bgShowing=!1;h(window,"scroll",this.onScroll)}var c=a.prototype;c.toggleFixed=function(){this.fixed=!this.fixed,this.fixed?b("CSS").addClass(this.root,"_6a88"):b("CSS").removeClass(this.root,"_6a88")};c.toggleBgOpacity=function(a,c){this.bgShowing=a,b("Style").set(this.bg,"opacity",c)};return a}();function h(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}e.exports=a}),null);
__d("MessengerMarketingLanguageToggle",["cx","CSS","Event","containsNode"],(function(a,b,c,d,e,f,g){a={init:function(a){var c=a.button,d=a.container;b("Event").listen(c,"click",function(){b("CSS").addClass(d,"_8vbi")});b("Event").listen(window,"click",function(a){b("containsNode")(d,a.target)||b("CSS").removeClass(d,"_8vbi")})}};e.exports=a}),null);
__d("MessengerMarketingMobileMenu",["csx","cx","debounce","Event"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="._8otc",j="_8otd";e.exports={addHandlers:function(a){var c=a.querySelector(i);if(!c)return;a=k(a);b("Event").listen(c,"click",a);b("Event").listen(c,"touchstart",a)}};function k(a){return b("debounce")(function(){return a.classList.toggle(j)},300,!0)}}),null);