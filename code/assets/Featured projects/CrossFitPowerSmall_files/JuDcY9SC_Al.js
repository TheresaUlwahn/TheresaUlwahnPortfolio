if (self.CavalryLogger) { CavalryLogger.start_js(["sNxMX"]); }

__d("MessengerForwardDecoratorContainer.react",["ix","cx","fbt","CurrentUser","Image","Locale","MessengerEnvironment","MessengerParticipants.re","React","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.isFromViewer,c=b("MessengerEnvironment").messengerui,d=b("Locale").isRTL();return b("React").jsx("div",{className:"_o46 _3erg"+(a?" _3i_m":"")+(a?" _nd_":"")+(a?"":" _29_7")+(c?"":" _87vy"),children:b("React").jsxs("div",{className:"_3058"+(c?" _879k":"")+(c?"":" _87w3")+(c?"":" _87w4")+(a?" _3-91":"")+(a?"":" _3-9b")+(c?" _3-94":"")+(d?"":" direction_ltr")+(d?" direction_rtl":""),children:[b("React").jsx(b("Image"),{source:g("926183"),className:(c?"":"_87w5")+(c?" _879l":"")}),b("React").jsx("div",{className:(c?"":"_87w6")+(c?" _879m":""),children:this.$1()})]})})};d.$1=function(){__p&&__p();var a=this.props,c=a.authorID;a=a.attachmentType;c=b("MessengerParticipants.re").getNow(c);var d=c==null?void 0:c.fbid,e=b("CurrentUser").getID();d=d===e;if(d)switch(a){case"animated_image":return i._("Du har vidarebefordrat en bild");case"photo":return i._("Du vidarebefordrade ett foto");case"share":return i._("Du har vidarebefordrat en l\u00e4nk");case"video":return i._("Du har vidarebefordrat en video");default:return i._("Du har vidarebefordrat ett meddelande")}else switch(a){case"animated_image":return i._("{sender_name} har vidarebefordrat en bild",[i._param("sender_name",c==null?void 0:c.short_name)]);case"photo":return i._("{sender_name} har vidarebefordrat ett foto",[i._param("sender_name",c==null?void 0:c.short_name)]);case"share":return i._("{sender_name} har vidarebefordrat en l\u00e4nk",[i._param("sender_name",c==null?void 0:c.short_name)]);case"video":return i._("{sender_name} har vidarebefordrat en video",[i._param("sender_name",c==null?void 0:c.short_name)]);default:return i._("{sender_name} har vidarebefordrat ett meddelande",[i._param("sender_name",c==null?void 0:c.short_name)])}};return c}(b("React").PureComponent);e.exports=a}),null);
__d("SaveMessageUtils",["MessengerDotComSaveModule","QE2Logger","immutable"],(function(a,b,c,d,e,f){__p&&__p();var g=b("immutable").Set.of("fallback","share","event","attached_story","music_aggregation","avatar"),h=b("immutable").Set.of("group_sell_product_item");a={isSavableMessageAttachment:function(a){__p&&__p();var c=!0;for(var d=0;d<a.length;d++){if(a[d]=="group_sell_product_item")if(b("MessengerDotComSaveModule").can_save_for_sale_item_attachment!=null){b("QE2Logger").logExposureForUser("marketplace_www_messenger_save");return b("MessengerDotComSaveModule").can_save_for_sale_item_attachment}else return!1;if(h.has(a[d]))return!0;g.has(a[d])||(c=!1)}return c}};e.exports=a}),null);