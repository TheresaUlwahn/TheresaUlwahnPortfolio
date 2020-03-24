if (self.CavalryLogger) { CavalryLogger.start_js(["46qMt"]); }

__d("MercuryAttachmentConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({SIDE_LENGTH:9});e.exports=a}),null);
__d("MessengerAdsWebTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("messenger_ads_web:MessengerAdsWebLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("messenger_ads_web:MessengerAdsWebLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("messenger_ads_web:MessengerAdsWebLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setActionID=function(a){this.$1.action_id=a;return this};c.setAdClientToken=function(a){this.$1.ad_client_token=a;return this};c.setAdID=function(a){this.$1.ad_id=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setIndex=function(a){this.$1.index=a;return this};c.setIsSponsored=function(a){this.$1.is_sponsored=a;return this};c.setItemID=function(a){this.$1.item_id=a;return this};c.setMessageID=function(a){this.$1.message_id=a;return this};c.setMessageTimestamp=function(a){this.$1.message_timestamp=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={action_id:!0,ad_client_token:!0,ad_id:!0,event:!0,index:!0,is_sponsored:!0,item_id:!0,message_id:!0,message_timestamp:!0,page_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ChatImageArrowDirection",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({BOTH:null,LEFT:null,RIGHT:null});e.exports=a}),null);
__d("ChatImageWithArrow.react",["cx","ChatImageArrowDirection","CssBackgroundImage.react","Link.react","MercuryAttachmentConstants","React","XUISpinner.react","cssURL","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=30,i=15;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$3=function(){return Math.max(d.props.width,i)},d.$6=function(){return Math.max(d.props.height,h)},d.$7=function(a,c,d,e){if(c===b("ChatImageArrowDirection").LEFT)return"translate("+d+"px, "+e+"px)rotate(45deg)";else return"translate("+(a-d)+"px, "+e+"px)rotate(45deg)"},d.$8=function(a,c,e,f){if(c===b("ChatImageArrowDirection").LEFT)return"rotate(-45deg)translate(-"+(d.$1+e)+"px,-"+f+"px)";else return"rotate(-45deg)translate(-"+(a-e)+"px, -"+f+"px)"},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){this.$1=Math.floor(this.props.sideLength/Math.sqrt(2));this.$2=Math.ceil(this.$3()+this.$1);if(this.props.isLoading)return this.$4();var a=b("joinClasses")("_4yp6"+(this.props.round?" _3lk2":""),this.props.rootClassName);return this.$5(b("React").jsx("div",{className:a,children:b("React").jsx("div",{className:"_52kr"+(this.props.round?" _3_om":""),style:{width:this.$3(),height:this.$6()},children:b("React").jsx(b("CssBackgroundImage.react"),{className:"_4yp9"+(this.props.isSpherical?" _3603":""),imageURI:this.props.source,backgroundPosition:"center",style:{width:this.$3(),height:this.$6(),borderRadius:"inherit"},children:this.props.isSpherical?b("React").jsx("div",{className:"_64ks"}):null})})}))};d.$5=function(a){return this.props.onClick?b("React").jsx(b("Link.react"),{className:"_6jtk",onClick:this.props.onClick,children:a}):a};d.$4=function(){var a={width:this.props.sideLength,height:this.props.sideLength};this.props.source&&(a.backgroundImage=b("cssURL")(this.props.source));a={width:this.props.sideLength,height:this.props.sideLength};this.props.source&&(a.opacity=0);a={width:this.$3(),height:this.$6()};this.props.source&&(a.backgroundImage=b("cssURL")(this.props.source),a.backgroundSize="cover");return b("React").jsx("div",{className:"_4yp6",children:b("React").jsx("div",{className:"_4ypb _3_om",style:a,children:b("React").jsx(b("XUISpinner.react"),{size:"small"})})})};return c}(b("React").Component);a.propTypes={arrowDirection:(c=b("prop-types")).oneOf(Object.keys(b("ChatImageArrowDirection"))),onClick:c.func,height:c.number.isRequired,isLoading:c.bool,isSpherical:c.bool,round:c.bool,rootClassName:c.string,sideLength:c.number,source:c.string,width:c.number.isRequired};a.defaultProps={sideLength:b("MercuryAttachmentConstants").SIDE_LENGTH,isLoading:!1,isSpherical:!1,round:!1};e.exports=a}),null);
__d("MessengerAttachmentImageBlockUtils.bs",["isFacebookURI","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=function(a){return a.getPath().toString().indexOf("/moments_app")===0},f=function(a,b){if(a<=300)return b<=300;else return!1};if(f(a,c))return!0;else if(b("isFacebookURI")(d)&&!b("isLinkshimURI")(d))return!e(d);else return!1}f.isIcon=a}),null);
__d("MessengerAttachmentImageBlockUtils.re",["bs_curry","MessengerAttachmentImageBlockUtils.bs"],(function(a,b,c,d,e,f){a=function(a,c,d){a=b("bs_curry")._3(b("MessengerAttachmentImageBlockUtils.bs").isIcon,a,c,d);return a};f.isIcon=a}),null);
__d("MessengerAttachmentImageBlock.react",["cx","MessengerAttachmentImageBlockUtils.re","prop-types","React","URI","WorkChatRedesignedMessageListCheck.re","cssURL","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsxs("div",{className:b("joinClasses")(this.props.className,this.$1()),children:[this.$2(),b("React").jsx("div",{className:"_5swm",children:this.props.children})]})};d.$2=function(){__p&&__p();if(!this.props.attachment.media||!this.props.attachment.media.image)return null;var a=this.$3(),c=a.height;a=a.width;var d=c>a,e=new(h||(h=b("URI")))(this.props.attachment.uri);e=b("MessengerAttachmentImageBlockUtils.re").isIcon(c,a,e);c=c&&a?c/a*100:100;a=d||e?.2:1;e=d||e?c:52;d={backgroundImage:b("cssURL")(this.props.attachment.media.image),minHeight:"0px",paddingBottom:d&&c>150?"136px":e*a+"%"};this.props.attachment.description&&this.props.attachment.source&&(d.minHeight="112px");b("WorkChatRedesignedMessageListCheck.re").enabled&&(d.paddingBottom="0px",d.minHeight="0px");return b("React").jsx("div",{className:"_3xn1",style:d})};d.$1=function(){if(!this.props.attachment.media||!this.props.attachment.media.image)return"_3xn3 _5swn";var a=this.$3(),c=a.height;a=a.width;var d=c>a,e=new(h||(h=b("URI")))(this.props.attachment.uri);e=b("MessengerAttachmentImageBlockUtils.re").isIcon(c,a,e);return"_3xn3"+(e&&!d?" _3xn5":"")+(d?" _3xn6":"")+(a>=c&&!e?" _3xn7":"")+(this.$4()?" _2e9e":"")};d.$4=function(){var a=this.props.attachment.style_list;return Array.isArray(a)&&a[0]=="lightweight_action"};d.$5=function(){var a=this.props.attachment.properties;return!a||!a.height||!a.width?null:{height:a.height,width:a.width}};d.$3=function(){var a=this.$5()||this.props.attachment.media.image_size||{},b=a.height;a=a.width;if(b&&a){b=parseInt(b,10);a=parseInt(a,10);return{height:b,width:a}}return{height:0,width:0}};return c}(b("React").Component);a.propTypes={attachment:b("prop-types").object.isRequired};e.exports=a}),null);
__d("MercuryFallbackShareAttachmentTextBlock.react",["cx","LineClamp.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","React","WorkChatRedesignedMessageListCheck.re","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){if(!this.props||!this.props.attachment)return b("React").jsx("div",{className:"__6j"});return b("MercuryShareAttachmentRenderLocations").MESSENGER===this.props.location?b("React").jsxs("div",{className:"__6j",children:[this.renderMessengerTitle(),this.renderMessengerDescription(),this.renderMessengerSource()]}):b("React").jsxs("div",{className:"__6j",children:[this.renderTitle(),this.renderDescription(),this.renderSource(),this.props.extraComponent]})};d.renderMessengerTitle=function(){return!this.props.attachment.title?null:b("React").jsx("div",{className:"__6k",children:b("React").jsx(b("LineClamp.react"),{customEllipsis:" ",lines:2,lineHeight:18,fitHeightToShorterText:b("WorkChatRedesignedMessageListCheck.re").enabled,children:this.props.attachment.title})})};d.renderMessengerDescription=function(){return!this.props.attachment.description?null:b("React").jsx("div",{className:"__6l",children:b("React").jsx(b("LineClamp.react"),{customEllipsis:" ",lines:2,lineHeight:16,fitHeightToShorterText:b("WorkChatRedesignedMessageListCheck.re").enabled,children:this.props.attachment.description})})};d.renderMessengerSource=function(){return!this.props.attachment.source?null:b("React").jsx("div",{className:"__6m",children:this.props.attachment.source})};d.renderTitle=function(){return!this.props.attachment.title?null:b("React").jsx("div",{className:"__6k"+(!this.props.attachment.uri&&!this.props.attachment.description||this.props.attachment.target!=null&&this.props.attachment.target.lwa_type!=null&&this.props.attachment.target.lwa_state==="INITIATED"?" _2xsq":"")+(this.props.extraComponent?" _1dw9":""),children:this.props.attachment.title})};d.renderDescription=function(){return!this.props.attachment.description?null:b("React").jsx("div",{className:"__6l",children:this.props.attachment.description})};d.renderSource=function(){return!this.props.attachment.source?null:b("React").jsx("div",{className:"__6m",children:this.props.attachment.source})};return c}(b("React").Component);a.propTypes={attachment:b("MercuryShareAttachmentReactShape"),extraComponent:b("prop-types").object,location:b("prop-types").oneOf(b("MercuryShareAttachmentRenderLocations").getValues())};e.exports=a}),null);
__d("MercuryShareImage.react",["cx","ChatImageArrowDirection","ChatImageWithArrow.react","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("div",{className:"_4hsl",children:b("React").jsx(b("ChatImageWithArrow.react"),{arrowDirection:b("ChatImageArrowDirection").BOTH,height:this.props.height,round:!!this.props.round,source:this.props.source,width:this.props.width})})};return c}(b("React").Component);a.propTypes={height:(c=b("prop-types")).number.isRequired,round:c.bool,source:c.string.isRequired,width:c.number.isRequired};e.exports=a}),null);
__d("MercuryFallbackShareAttachmentContent.react",["cx","Image.react","ImageBlock.react","MercuryFallbackShareAttachmentTextBlock.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MercuryShareImage.react","MessengerAttachmentImageBlock.react","React","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=72;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.renderTextBlock=function(){return b("React").jsx(b("MercuryFallbackShareAttachmentTextBlock.react"),babelHelpers["extends"]({},this.props))};d.renderChatImage=function(a){return b("React").jsxs(b("ImageBlock.react"),{className:a,spacing:"medium",children:[b("React").jsx(b("MercuryShareImage.react"),{height:h,source:this.props.attachment.media.image,width:h}),b("React").jsx("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",height:h},children:this.renderTextBlock()})]})};d.renderMessengerImage=function(a){return b("React").jsxs(b("MessengerAttachmentImageBlock.react"),{className:a,attachment:this.props.attachment,children:[this.renderTextBlock(),this.props.children]})};d.renderDefaultImage=function(a){return b("React").jsxs(b("ImageBlock.react"),{className:b("joinClasses")(this.props.className,a),children:[b("React").jsx(b("Image.react"),{className:"__6n",src:this.props.attachment.media.image,width:h}),this.renderTextBlock(),this.props.children]})};d.getCSSClasses=function(){var a=this.props.attachment,c=this.props.location;return(b("MercuryShareAttachmentRenderLocations").CHAT===c?"_49or":"")+(b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW===c?" _324d":"")+(b("MercuryShareAttachmentRenderLocations").CHAT!==c?" _tih":"")+(a&&a.media.image?"":" _49ou")+" _310t"};d.render=function(){var a=this.props.attachment,c=this.props.location,d=this.getCSSClasses();if(a.media&&a.media.image){if(b("MercuryShareAttachmentRenderLocations").CHAT===c||b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW===c)return this.renderChatImage(d);else if(b("MercuryShareAttachmentRenderLocations").MESSENGER===c)return this.renderMessengerImage(d);return this.renderDefaultImage(d)}return b("React").jsxs("div",{className:b("joinClasses")(this.props.className,d),children:[this.renderTextBlock(),this.props.children]})};return c}(b("React").Component);a.propType={attachment:b("MercuryShareAttachmentReactShape"),location:b("prop-types").oneOf(b("MercuryShareAttachmentRenderLocations").getValues())};e.exports=a}),null);
__d("MessengerAdsLinkClickFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("messenger_ads_link_click");e.exports=a}),null);
__d("XMessengerDotComSavedForLaterNuxSeenController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/save/savemessagenux/",{})}),null);
__d("MercuryFallbackShareAttachment.react",["cx","fbt","AsyncRequest","Link.react","MercuryFallbackShareAttachmentContent.react","MercuryShareAttachmentReactShape","MercuryShareAttachmentRenderLocations","MessengerAdsWebTypedLogger","MessengerDotComSaveModule","React","ReactFragment","SaveMessageUtils","XMessengerDotComSavedForLaterNuxSeenController","XUIAmbientNUX.react","gkx","prop-types","MessengerAdsLinkClickFalcoEvent"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="focus",j="click",k="scroll",l=1e4,m=3e4;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b;b=a.call(this)||this;b.state={showNux:!1,nuxDisabled:!1};return b}var d=c.prototype;d.renderLink=function(a){return b("MercuryShareAttachmentRenderLocations").isPreview(this.props.location)||!this.props.attachment.uri?a:b("React").jsxs(b("Link.react"),{className:"_5rw4",href:this.props.attachment.uri,onClick:this.$1.bind(this),target:"_blank",children:[a,this.renderLayers()]})};d.render=function(){return this.renderLink(b("React").jsx(b("MercuryFallbackShareAttachmentContent.react"),babelHelpers["extends"]({ref:"mercury_fallback_share_attachment"},this.props)))};d.$1=function(a){__p&&__p();var c=this;if(this.props.isSponsored){a=this.props.attachment&&this.props.attachment.subattachments;if(!a)return;var d=b("gkx")("1181700");for(var a=a,e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;d&&b("MessengerAdsLinkClickFalcoEvent").log(function(){return{message_id:c.props.messageID,page_id:c.props.pageID}});new(b("MessengerAdsWebTypedLogger"))().setEvent("messenger_ads_link_click").setIsSponsored(this.props.isSponsored).setItemID(g&&g.id).setMessageID(this.props.messageID).setPageID(this.props.pageID).log()}}if(this.state.nuxDisabled||!this.$2())return;this.$3();this.interactionTime=0;this.cancelMinConsumeTimeout=setTimeout(function(){c.$4()||c.setState({showNux:!0,nuxDisabled:!0})},l);this.cancelMaxConsumeTimeout=setTimeout(function(){c.$4()||(c.setState({showNux:!1,nuxDisabled:!1}),c.clearTimeouts())},m);var h=Date.now();this.cancelWindowInteractionTimeout=setTimeout(function(){c.$5(function(){this.interactionTime||(this.interactionTime=Date.now()-h)}.bind(c))},0)};d.clearTimeouts=function(){this.cancelWindowInteractionTimeout&&(clearTimeout(this.cancelWindowInteractionTimeout),this.cancelWindowInteractionTimeout=null),this.cancelMaxConsumeTimeout&&(clearTimeout(this.cancelMaxConsumeTimeout),this.cancelMaxConsumeTimeout=null),this.cancelMinConsumeTimeout&&(clearTimeout(this.cancelMinConsumeTimeout),this.cancelMinConsumeTimeout=null)};d.onNUXCloseButtonClick=function(){this.setState({showNux:!1}),this.$6(),this.$7(),this.clearTimeouts()};d.renderLayers=function(){var a=this;return this.$2()?b("ReactFragment").create(b("React").jsx(b("XUIAmbientNUX.react"),{contextRef:function(){return a.refs.mercury_fallback_share_attachment},shown:this.state.showNux,onCloseButtonClick:this.onNUXCloseButtonClick.bind(this),position:"below",width:"custom",customwidth:300,children:h._("Nu kan du spara l\u00e4nkar och videoklipp p\u00e5 Facebook genom att h\u00f6gerklicka p\u00e5 ett meddelande.")})):null};d.$3=function(){this.$8||(this.$9=[],this.$8=[Event.listen(window,"click",this.$10.bind(this,j)),Event.listen(window,"focus",this.$10.bind(this,i)),Event.listen(window,"scroll",this.$10.bind(this,k))])};d.$10=function(a){this.$9.forEach(function(b){b.call(this,a)},this)};d.$5=function(a){this.$9.push(a)};d.$4=function(){return this.interactionTime&&this.interactionTime>0};d.$7=function(){if(this.$8){while(this.$8.length)this.$8.pop().remove();this.$8=null;this.$9=null}};d.$2=function(){return b("MessengerDotComSaveModule").eligible_for_nux&&this.$11()};d.$11=function(){var a=this.props.attachment;if(!a)return!1;a=a.style_list;return b("SaveMessageUtils").isSavableMessageAttachment(a)};d.$6=function(){new(b("AsyncRequest"))().setURI(b("XMessengerDotComSavedForLaterNuxSeenController").getURIBuilder().getURI()).setData({action:"impression",surface:"messenger_dot_com_message",mechanism:"save_message_nux",object_id:this.props.message_id,collection_id:98}).send()};return c}(b("React").Component);a.propTypes={attachment:b("MercuryShareAttachmentReactShape"),isSponsored:(c=b("prop-types")).bool,location:c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),messageID:c.string,pageID:c.string};e.exports=a}),null);
__d("MercurySharePreview.react",["cx","invariant","AsyncRequest","LeftRight.react","MercuryFallbackShareAttachment.react","MercuryShareAttachmentRenderLocations","React","XShareScrapeAttachmentAsyncController","XUICloseButton.react","XUISpinner.react","gkx","prop-types","setImmediate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=1337,c.$2=null,c.state={attachmentData:null,loading:!1},c.$11=function(){c.$5(),c.props.onClose&&c.props.onClose(c.props.threadID)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.$3(this.props.share),this.$4(this.props.uri)};d.componentWillUnmount=function(){this.$5()};d.UNSAFE_componentWillReceiveProps=function(a){a.share&&a.uri&&h(0,3593),!a.share&&!a.uri&&this.$5(),this.$3(a.share),this.$4(a.uri)};d.$3=function(a){var b=this.state.attachmentData||this.state.loading;a&&!b&&this.$6(a)};d.$4=function(a){var b=this.state.attachmentData||this.state.loading;a&&!(b&&this.props.uri===a)&&this.$7(a)};d.getShareData=function(){return this.state.attachmentData&&this.state.attachmentData.share_data};d.isLoading=function(){return this.state.loading};d.$6=function(a){var c=this,d=b("XShareScrapeAttachmentAsyncController").getURIBuilder().getURI();this.$2=new(b("AsyncRequest"))().setURI(d).setData({image_height:this.props.imageSize.height,image_width:this.props.imageSize.width,share_params:a.params,share_type:a.type}).setHandler(this.$8.bind(this,this.$9()));b("setImmediate")(function(){c.props.onLoading&&c.props.onLoading(c.props.threadID)});this.$2&&this.$2.send();this.setState({loading:!0,attachmentData:null})};d.$7=function(a){var c=this;this.$2=new(b("AsyncRequest"))().setURI("/message_share_attachment/fromURI/").setData({image_height:this.props.imageSize.height,image_width:this.props.imageSize.width,uri:a}).setHandler(this.$8.bind(this,this.$9()));b("setImmediate")(function(){c.props.onLoading&&c.props.onLoading(c.props.threadID)});this.$2&&this.$2.send();this.setState({loading:!0,attachmentData:null})};d.$9=function(){return++this.$1};d.$10=function(){return this.$1};d.$8=function(a,b){if(this.$10()!==a)return;a=b.payload;a?(this.props.onLoaded&&this.props.onLoaded(this.props.threadID,a),this.setState({loading:!1,attachmentData:a})):this.props.onClose&&this.props.onClose(this.props.threadID)};d.$5=function(){this.$9(),this.$2&&this.$2.abort(),this.$2=null,this.setState({loading:!1,attachmentData:null})};d.render=function(){var a="_tig _tih";if(this.state.loading)return b("React").jsxs(b("LeftRight.react"),{direction:b("LeftRight.react").DIRECTION.right,className:a,children:[b("React").jsx(b("XUISpinner.react"),{className:"_tii",size:"large",background:"light"}),b("React").jsx(b("XUICloseButton.react"),{className:"_tij",shade:"dark",size:"small",onClick:this.$11})]});a=this.state.attachmentData;return!a?b("React").jsx("div",{}):b("React").jsxs("div",{children:[b("React").jsx(b("MercuryFallbackShareAttachment.react"),{attachment:a,location:b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW}),b("React").jsx(b("XUICloseButton.react"),{className:"_tij",shade:"dark",size:"small",onClick:this.$11})]})};return c}(b("React").Component);a.propTypes={threadID:(c=b("prop-types")).string,imageSize:c.shape({width:c.number.isRequired,height:c.number.isRequired}).isRequired,location:c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()).isRequired,share:c.shape({params:c.array,type:c.number}),uri:c.string,onClose:c.func,onLoaded:c.func,onLoading:c.func};e.exports=a}),null);