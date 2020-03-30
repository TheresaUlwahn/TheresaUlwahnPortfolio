if (self.CavalryLogger) { CavalryLogger.start_js(["i7Gik"]); }

__d("NullBusinessID",[],(function(a,b,c,d,e,f){e.exports="personal-business"}),null);
__d("BizSiteIdentifier.brands",["NullBusinessID","URI","isEmpty","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i=b("NullBusinessID"),j={isBizSite:function(){return(g||(g=b("URI"))).getRequestURI(!1).getSubdomain()==="business"},getBusinessID:function(){return(g||(g=b("URI"))).getRequestURI(!1).getQueryData().business_id},createBusinessURL:function(a,c){if((h||(h=b("isEmpty")))(c)||c===i)return new(g||(g=b("URI")))(a).setSubdomain("www");c=b("nullthrows")(c);a=new(g||(g=b("URI")))(a).setSubdomain("business");j.isBizSite()&&a.setDomain((g||(g=b("URI"))).getRequestURI(!1).getDomain());c=c||j.getBusinessID();a.addQueryData("business_id",c);return a}};e.exports=j}),null);
__d("BusinessURI.brands",["BizSiteIdentifier.brands","URI","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g,h=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(a,d){a=c.call(this,a)||this;if(b("BizSiteIdentifier.brands").isBizSite()){d=d!==null&&d!==void 0&&d!==""?d:b("BizSiteIdentifier.brands").getBusinessID();d!==null&&d!==void 0&&d!==""&&a.addQueryData("business_id",d);a.$BusinessURI1(a.getSubdomain())||a.setSubdomain("business")}if(!b("isFacebookURI")(babelHelpers.assertThisInitialized(a)))throw new Error("Business URI must be FB URI");return babelHelpers.assertThisInitialized(a)||babelHelpers.assertThisInitialized(a)}var d=a.prototype;d.$BusinessURI1=function(a){return a==="developers"};return a}(g||b("URI"));a=function(a,b){return new h(a,b)};a.BusinessURI=h;e.exports=a}),null);
__d("FBProfilePhotoShadow.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","children"]);d=b("React").Children.only(d);return b("React").jsx("div",babelHelpers["extends"]({},a,{className:b("joinClasses")(c,"_38vo"),children:b("React").cloneElement(d,{className:b("joinClasses")(d.props.className,"_44ma")})}))};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBeeperItemCloseButton.react",["cx","fbt","React","XUIAbstractGlyphButton.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=h._("St\u00e4ng");return b("React").jsx(b("XUIAbstractGlyphButton.react"),babelHelpers["extends"]({},this.props,{className:"_3soc",title:a,label:a,labelIsHidden:!0}))};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationInterpolator",["cx","Badge.react","React","TextWithEmoticons.react","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=null;((c=c.entity)!=null?(c=c.work_foreign_entity_info)!=null?c.type:c:c)==="FOREIGN"&&(d=b("React").jsx(b("Badge.react"),{type:"work_non_coworker"}));typeof a==="string"&&(a=b("React").jsx(b("TextWithEmoticons.react"),{text:a}));return b("React").jsxs("span",{className:b("joinClasses")("fwb","_6btd"),children:[a,d]})}e.exports=a}),null);
__d("VideoPermalinkURI",[],(function(a,b,c,d,e,f){__p&&__p();var g={isValid:function(a){return g.parse(a)!==null},parse:function(a){__p&&__p();if(this.isValidLegacy(a)){var b=a.getQueryData();return b.v?{video_id:b.v,set_token:b.set}:null}b=a.getPath();b[b.length-1]==="/"&&(b=b.substring(0,b.length-1));a=b.split("/");if(a.length>=3&&a[2]==="videos")if(a.length===4&&this.isNumeric(a[3]))return{video_id:a[3],set_token:null};else if(a.length===5){if(this.isNumeric(a[4]))return{video_id:a[4],set_token:a[3]};else if(this.isNumeric(a[3]))return{video_id:a[3],story_id:a[4]}}else if(a.length===6&&this.isNumeric(a[4]))return{video_id:a[4],set_token:a[3],story_id:a[5]};return null},isNumeric:function(a){return/^\d+$/.exec(a)!==null},isValidLegacy:function(a){a=a.getPath();a[a.length-1]==="/"&&(a=a.substring(0,a.length-1));return a==="/photo.php"||a==="/force_photo/photo.php"||a==="/photo"||a==="/force_photo/photo/index.php"||a==="/photo/index.php"||a==="/force_photo/photo"||a==="/video.php"||a==="/video/video.php"?!0:!1},getCustomStoryURI:function(a,b){return a+b+"/"}};e.exports=g}),null);
__d("isDevelopersURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="developers"}e.exports=a}),null);
__d("NotificationURI",["BusinessURI.brands","URI","VideoPermalinkURI","isDevelopersURI","isFacebookURI"],(function(a,b,c,d,e,f){__p&&__p();var g;a={localize:function(a){__p&&__p();try{a=b("BusinessURI.brands")(a)}catch(b){return a.toString()}var c=a.getSubdomain();c=a.getUnqualifiedURI().getQualifiedURI().setSubdomain(c);if(b("isDevelopersURI")(a)){a=c.getDomain().split(".");a.length>=2&&(a.splice(-2,1,"facebook")[0]==="workplace"&&c.setDomain(a.join(".")))}return c.toString()},snowliftable:function(a){if(!a)return!1;a=new(g||(g=b("URI")))(a);var c=a.getQueryData();return b("isFacebookURI")(a)&&(b("VideoPermalinkURI").isValid(a)||"fbid"in c)},isVaultSetURI:function(a){return this._areEquals(a,"/ajax/vault/sharer_preview.php")},isAlbumDraftRecoveryDialogURI:function(a){return this._areEquals(a,"/ajax/photos/upload/overlay/")},isQuicksilverURI:function(a){return this._areEquals(a,"/games/quicksilver/spotlight/")},isDirectURI:function(a){return this._startsWith(a,"/direct/")},isIGAccountCreationURI:function(a){return this._areEquals(a,"/ads/growth/aymt/instagram/account-creation-dialog/")},_areEquals:function(a,c){if(!a)return!1;a=new(g||(g=b("URI")))(a);return b("isFacebookURI")(a)&&a.getPath()===c},_startsWith:function(a,c){if(!a)return!1;a=new(g||(g=b("URI")))(a);return b("isFacebookURI")(a)&&a.getPath().startsWith(c)}};e.exports=a}),null);
__d("VideoChainingCaller",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INTERNAL:"internal",WWW_FEED_PIVOTS:"www_feed_pivots",WWW_FEED_SNOWLIFT:"www_feed_snowlift",MISC_PHOTO_SET:"misc_photo_set",MOBILE:"mobile",SEARCH:"search",WWW_FEED_RHC:"www_feed_rhc",WWW_NOTIFICATION:"www_notification",WWW_PERMALINK:"www_permalink",WWW_PERMALINK_RHC:"www_permalink_rhc",WWW_PERMALINK_RHC_FROM_NOTIFICATION:"www_permalink_rhc_from_notification",MY_VIDEO_CHANNELS_ENT_QUERY:"my_video_channels_ent_query",TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:"top_followed_video_channels_ent_query",BADGE:"badge",PAGINATION:"pagination",SUBTITLE:"subtitle",CHANNEL_VIEW_FROM_UNKNOWN:"channel_view_from_unknown",CHANNEL_VIEW_FROM_NEWSFEED:"channel_view_from_newsfeed",CHANNEL_VIEW_FROM_EXPLOREFEED:"channel_view_from_explorefeed",LIVE_INDEXER_FROM_EXPLOREFEED:"live_indexer_from_explorefeed",LIVE_INDEXER_FROM_NEWSFEED:"live_indexer_from_newsfeed",NN_INDEXER_FROM_NEWSFEED:"nn_indexer_from_newsfeed",CHANNEL_VIEW_FROM_SEARCH:"channel_view_from_search",CHANNEL_VIEW_FROM_NEWSFEED_PIVOT:"channel_view_from_newsfeed_pivot",NEWSFEED_PIVOT_INLINE:"newsfeed_pivot_inline",MOBILE_NEWSFEED_PIVOT_INLINE:"mobile_newsfeed_pivot_inline",CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:"channel_view_from_page_call_to_action",CHANNEL_VIEW_FROM_PAGE_TIMELINE:"channel_view_from_page_timeline",CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:"channel_view_from_page_timeline_featured",CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB:"channel_view_from_page_video_tab",CHANNEL_VIEW_FROM_PAGE_HOME_HERO:"channel_view_from_page_home_hero",CHANNEL_VIEW_FROM_USER_TIMELINE:"channel_view_from_user_timeline",CHANNEL_VIEW_FROM_USER_VIDEO_TAB:"channel_view_from_user_video_tab",CHANNEL_VIEW_FROM_GROUP_TIMELINE:"channel_view_from_group_timeline",CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB:"channel_view_from_group_video_tab",CHANNEL_VIEW_FROM_VIDEO_PAGE_SPOTLIGHT:"channel_view_from_video_page_spotlight",CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_LIST:"channel_view_from_video_page_video_list",CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_TAB:"channel_view_from_video_page_video_tab",CHANNEL_VIEW_FROM_CHANNEL_TAB:"channel_view_from_channel_tab",CHANNEL_VIEW_FROM_SAVED_STORY:"channel_view_from_saved_story",SAVED_STORY_INLINE:"saved_story_inline",CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:"channel_view_from_shared_with_you_story",SHARED_WITH_YOU_STORY_INLINE:"shared_with_you_story_inline",CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:"channel_view_from_latest_from_your_channels_story",LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:"latest_from_your_channels_story_inline",CHANNEL_VIEW_FROM_CHANNEL_PIVOT:"channel_view_from_channel_pivot",CHANNEL_PIVOT_INLINE:"channel_pivot_inine",CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:"channel_view_from_recommended_channel_story",RECOMMENDED_CHANNEL_STORY_INLINE:"recommended_channel_story_inline",CHANNEL_VIEW_FROM_VIDEO_HOME:"channel_view_from_video_home",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_CHANNEL_SEE_ALL:"video_home_channel_see_all",SOCIAL_PLAYER_UP_NEXT:"social_player_up_next",CHANNEL_VIEW_FROM_CASTING:"channel_view_from_casting",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_HERO:"video_home_hero",FEED_SURVEY_SWIPE:"feed_survey_swipe",FEED_PIVOTS_INLINE:"feed_pivots_inline",CHANNEL_VIEW_FROM_FEED_PIVOTS:"channel_view_from_feed_pivots",VIDEO_SETS_CACHE_REFRESH:"video_sets_cache_refresh",VIDEO_SETS_CACHE_CHECK:"video_sets_cache_check",DUMMY_STORY_RECOMMENDED_VIDEOS:"dummy_story_recommended_videos",DUMMY_STORY_FRIENDS_ENJOYING:"dummy_story_friends_enjoying",LIVE_EVENT_VIDEO_SET:"live_event_video_set",LIVE_VIDEOS_SET:"live_videos_set",SINGLE_CREATOR_VIDEO_SET:"single_creator_video_set",FRT_TOOL:"frt_tool",DUMMY_STORY_FRIENDS_ENJOYING_NOW:"dummy_story_friends_enjoying_now",DUMMY_STORY_DUMMY_ACTION:"dummy_story_dummy_action",OCULUS_VIDEO:"oculus_video",TRENDING_DEMOGRAPHICS_LIVE:"trending_demographics_live",LIVE_MAP:"live_map",UNCONNECTED_LIVE_VIDEO:"unconnected_live_video",PROFILE_VIDEO_GALLERY:"profile_video_gallery",CHANNEL_VIEW_FROM_PLAYLIST:"channel_view_from_playlist",OCULUS_SOCIAL_HUB:"oculus_social_hub",AKIRA:"akira",IS_LIVE_VIDEO_CHAINING:"is_live_video_chaining",IS_LIVE_VIDEO_CHAINING_OTHERS:"is_live_video_chaining_others",VIDEO_CREATOR_CHAINING:"video_creator_chaining",TAHOE:"tahoe",LIVING_ROOM:"living_room",SHOWS_COVER_TRAILER:"shows_cover_trailer",SHOWS_EPISODES_TAB:"shows_episodes_tab",SHOWS_PLAYLISTS_TAB:"shows_playlists_tab",SHOWS_HOME_TAB:"shows_home_tab",SHOWS_MORE_VIDEOS_TAB:"shows_more_videos_tab",SHOW_EPISODE_FEED_RECOMMENDATIONS:"show_episode_feed_recommendations",PARENT_PAGE_TIMELINE:"parent_page_timeline",WATCH_WATCHLIST_TAB:"watch_watchlist_tab",WATCH_FEED_TAB:"watch_feed_tab",WATCH_INJECTION:"watch_injection",WATCH_TOPIC_FEED:"watch_topic_feed",WATCH_TOPIC_CHANNEL_FEED:"watch_topic_channel_feed",WATCH_SUBTOPIC_CHANNEL_FEED:"watch_subtopic_channel_feed",WATCH_SECTION_SEE_ALL:"watch_section_see_all",SOCIAL_PLAYER_FROM_VIDEO_HOME:"social_player_from_video_home",WATCH_CUSTOM_ADS:"watch_custom_ads",WATCH_EMBEDDED_ENDSCREEN:"watch_embedded_endscreen",WNS:"wns",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive",VOYAGER:"voyager",GAMES_VIDEO_CHANNEL:"games_video_channel",LOL_VIDEO_FEED:"lol_video_feed",AVD_VIDEO:"avd",LIVE_CHAINING:"live_chaining",LIVE_TAB:"live_tab",LIVING_ROOM_CHAINING:"living_room_chaining",FBLITE_TRENDING_VIDEO:"fblite_trending_video",PORTAL:"portal",LASSO:"lasso",WATCH_SOCIAL:"watch_social",MESSENGER:"messenger",CHAINING_GAMING_PROMOTION:"chaining_gaming_promotion",CHAINING_GAMING_ONLY:"chaining_gaming_only",CRICKET_VIDEOS:"cricket_videos",PREMIUM_MUSIC_VIDEO:"premium_music_video",CHANNEL_VIEW_FROM_NEWSFEED_RELATED:"channel_view_from_newsfeed_related",CHANNEL_VIEW_FROM_VIDEO_HOME_RELATED:"channel_view_from_video_home_related",FEED_SHORT_VIDEO:"feed_short_video",PHOTO_CHAINING:"photo_chaining",YOUTUBE_SHARE:"youtube_share",WATCH_RAINBOW_QP:"watch_rainbow_qp",INTEREST_DESTINATION:"interest_destination",TEST:"test",UNKNOWN:"unknown"})}),null);
__d("XLiveVideoLoadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/video/load/",{video_id:{type:"FBID",required:!0}})}),null);
__d("notificationListRendererIsStoryOnlyLiveVideoNotification",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.renderer_data;return a==null?!1:a.__typename==="LiveVideoNotificationRendererData"&&!!a.bucket_data}e.exports=a}),null);
__d("notificationListRendererOpenNotification",["AsyncRequest","Bootloader","NotificationURI","PageTransitions","URI","VideoChainingCaller","XLiveVideoLoadController","notificationListRendererIsStoryOnlyLiveVideoNotification"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a,c){__p&&__p();var d=c.renderer_data;if(d==null)return;if(!b("notificationListRendererIsStoryOnlyLiveVideoNotification")(c)&&(a.metaKey||a.ctrlKey||a.button===1))return;if(d.__typename==="LiveVideoNotificationRendererData"){a.preventDefault();d=b("XLiveVideoLoadController").getURIBuilder().setFBID("video_id",d.video_id).getURI();d=new(b("AsyncRequest"))(d).setHandler(function(d){d.payload?h(a,c):b("PageTransitions").go(c.url)});d.send()}}function h(a,b){var c=b.renderer_data;if(c==null)return;c.bucket_data?i(a,c):c.can_render_in_tahoe&&j(a,c,b)}function i(a,c){b("Bootloader").loadModules(["FBStoriesLiveNotificationHandler"],function(a){a.renderLiveStory(c)},"notificationListRendererOpenNotification")}function j(a,c,d){b("Bootloader").loadModules(["TahoeController"],function(a){var e=b("NotificationURI").localize(new(g||(g=b("URI")))(d.url)),f=c.video_channel_caller;a.openFromVideoLink(new g(e),{channelID:c.video_channel_id,caller:f?(a=b("VideoChainingCaller"))!=null?a[f]:a:null})},"notificationListRendererOpenNotification")}e.exports=a}),null);
__d("NotificationBeeperItemContents.react",["cx","invariant","Animation","AsyncRequest","Bootloader","FBProfilePhotoShadow.react","Image.react","ImageBlock.react","NotificationBeeperItemCloseButton.react","NotificationInterpolator","NotificationURI","NotificationUserActions","React","ReactDOM","TextWithEntities.react","Timestamp.react","URI","notificationListRendererOpenNotification"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.isLiveVideo=null,d.onClick=function(a){__p&&__p();d.$1();d.props.onHide();if(a.button===1||a.altKey||a.ctrlKey||a.metaKey||a.shiftKey)return;var c=d.props.notification;b("notificationListRendererOpenNotification")(a,c);if(a.isDefaultPrevented()===!0)return;var e=c.primerAttributes;if(e&&(e.rel==="async"||e.rel==="async-post")){var f=new(b("AsyncRequest"))(e.ajaxify||c.url);e.rel==="async-post"&&f.setMethod("POST");f.send();a.preventDefault()}else e&&e.rel==="theater"?(a.persist(),b("Bootloader").loadModules(["PhotoSnowlift"],function(b){b.bootstrap(e.ajaxify||c.url,a.currentTarget)},"NotificationBeeperItemContents.react"),a.preventDefault()):e&&(e.rel==="dialog"||e.rel==="dialog-post")&&(b("Bootloader").loadModules(["AsyncDialog"],function(b){b.bootstrap(e.ajaxify||c.url,a.currentTarget,"dialog")},"NotificationBeeperItemContents.react"),a.preventDefault())},d.onClose=function(){d.$1(),d.props.onHide()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(){b("NotificationUserActions").markNotificationsAsRead([this.props.notification.alert_id])};d.$2=function(){new(b("Animation"))(b("ReactDOM").findDOMNode(this.refs.inner)).from("opacity","0").to("opacity","1").duration(200).go()};d.$3=function(){var a=this.$4();a=JSON.parse(a);return a.content_id};d.$5=function(){if(this.isLiveVideo===null){var a=this.$4();this.isLiveVideo=a.indexOf("live_video")!==-1}return!!this.isLiveVideo};d.$4=function(){return this.props.notification.tracking||"{}"};d.componentDidMount=function(){var a=this;this.props.onReadyToHide(this.props.notification.alert_id);this.$5()&&b("Bootloader").loadModules(["VideoPlayerMetaData","PhotoSnowliftVideoNode"],function(b,c){c=a.$3();c&&b.genVideoData(c)},"NotificationBeeperItemContents.react")};d.componentDidUpdate=function(a){(a.notification.alert_id!==this.props.notification.alert_id||a.notification.creation_time!==this.props.notification.creation_time)&&(this.$2(),this.props.onReadyToHide(this.props.notification.alert_id))};d.render=function(){var a=this.props.notification;a.title!==null||h(0,17664,a.notif_type);var c=a.thumbnail?a.thumbnail.uri:null,d=a.icon?a.icon.uri:null,e=b("NotificationURI").localize(new(i||(i=b("URI")))(a.url));return b("React").jsxs("div",{ref:"inner",className:this.props.className,children:[b("React").jsx(b("NotificationBeeperItemCloseButton.react"),{onClick:this.onClose}),b("React").jsx("a",{href:e,onClick:this.onClick,className:"_3soi",children:b("React").jsxs(b("ImageBlock.react"),{className:"_3soj",spacing:"medium",children:[b("React").jsx(b("FBProfilePhotoShadow.react"),{className:"_2yt7",children:b("React").jsx(b("Image.react"),{src:c,className:"_3sok"+(c?"":" hidden_elem")})}),b("React").jsxs("div",{className:"_3sol",children:[b("React").jsx(b("TextWithEntities.react"),{renderEmoticons:!0,renderEmoji:!0,interpolator:b("NotificationInterpolator"),ranges:a.title.ranges,aggregatedranges:a.title.aggregated_ranges,text:a.title.text}),b("React").jsxs(b("ImageBlock.react"),{className:"_3som",children:[b("React").jsx(b("Image.react"),{className:"_1x8t"+(d?"":" hidden_elem"),src:d}),b("React").jsx(b("Timestamp.react"),{time:a.timestamp.time,text:a.timestamp.text,verbose:a.timestamp.verbose})]})]})]})})]})};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBeeperItem.react",["cx","CSSFade","NotificationBeeperConst","NotificationBeeperItemContents.react","NotificationBeeperItemRenderersList","React","ReactDOM","Style","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("NotificationBeeperConst").FADE_OUT_LENGTH;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={encounteredException:!1,fadedIn:!1,hidden:!1},c.$3=function(){c.setState({hidden:!0})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidCatch=function(){this.props.onReadyToHide(this.props.notification.alert_id),this.setState(function(a){return babelHelpers["extends"]({},a,{encounteredException:!0})})};d.componentDidMount=function(){var a=this;b("setTimeoutAcrossTransitions")(function(){a.setState({fadedIn:!0})},50);this.props.onInserted(this.props.notification.alert_id)};d.componentWillUnmount=function(){this.$1&&this.$1.cancel()};d.render=function(){var a=this;if(this.state.encounteredException)return null;var c=this.props.notification,d=c.renderer_data;c=c.tracking;d=this.$4(d);return b("React").jsx("li",{className:this.state.hidden?"hidden_elem":"",ref:function(b){return a.$2=b},"data-gt":c,children:b("React").jsx(d,{className:"_3sod"+(this.state.fadedIn?" _3soe":""),notification:this.props.notification,onHide:this.$3,onReadyToHide:this.props.onReadyToHide,onPreventHide:this.props.onPreventHide})})};d.componentDidUpdate=function(a,c,d){if(!this.$2)return;a=b("ReactDOM").findDOMNode(this.$2);if(!a)return;this.props.fadingOut?(this.$1=b("CSSFade").hide(a,{callback:this.$3,duration:h}),a.style.transitionDuration="0ms"):(this.$1&&(this.$1.cancel(),this.$1=void 0),b("Style").set(a,"opacity","1"))};d.$4=function(a){return a&&a.__typename==="LiveVideoNotificationRendererData"&&a.video_id==null?b("NotificationBeeperItemContents.react"):b("NotificationBeeperItemRenderersList")[a&&a.__typename]||b("NotificationBeeperItemContents.react")};return c}(b("React").Component);e.exports=a}),null);
__d("NotificationBeeper.react",["cx","Arbiter","ChannelConstants","FacebookWebNotificationsSubscription","NotificationBeeperConst","NotificationBeeperItem.react","NotificationConstants","NotificationSound","NotificationUpdates","NotificationUserActions","React","SubscriptionsHandler","clearTimeout","setTimeoutAcrossTransitions","shield"],(function(a,b,c,d,e,f,g){__p&&__p();var h=(a=b("NotificationBeeperConst")).ACTIVE_DELAY_LONG,i=a.BeepStates,j=a.FADE_OUT_LENGTH,k=a.IDLE_DELAY;c=b("NotificationConstants").PayloadSourceType;var l=c.CLIENT,m=c.OTHER_APPLICATION;d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={beeps:{},fading:!1,hovering:!1,soundEnabled:d.props.soundEnabled},d.onMouseEnter=function(){d.$2&&b("clearTimeout")(d.$2);var a=[],c=d.state.beeps;Object.keys(c).forEach(function(b){c[b].state!=i.PENDING?a.push(b):c[b].state=i.RENDERED});b("NotificationUserActions").markNotificationsAsSeen(a);d.setState({hovering:!0,fading:!1,beeps:c})},d.onMouseLeave=function(){d.$5(h),d.setState({hovering:!1})},d.$6=function(a){d.state.hovering||d.$5(),d.state.soundEnabled&&d.state.beeps[a].shouldPlaySound&&(d.$3||(d.$3=new(b("NotificationSound"))(d.props.soundPath)),d.$3.play(a))},d.onReadyToHide=function(a,b){d.setState(function(b){var c=babelHelpers["extends"]({},b.beeps);c[a]=babelHelpers["extends"]({},c[a],{state:i.READY_TO_HIDE});return babelHelpers["extends"]({},b,{beeps:c})}),d.$2||d.$5(b)},d.$8=function(a){d.setState(function(b){var c=babelHelpers["extends"]({},b.beeps);c[a]=babelHelpers["extends"]({},c[a],{state:i.RENDERED});return babelHelpers["extends"]({},b,{beeps:c})})},d.$7=function(){d.$2=null,d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.READY_TO_HIDE&&(b[a]=babelHelpers["extends"]({},b[a],{state:i.FADING_OUT}))});return babelHelpers["extends"]({},a,{beeps:b,fading:!0})}),b("setTimeoutAcrossTransitions")(b("shield")(d.$9,babelHelpers.assertThisInitialized(d)),j)},d.$9=function(){__p&&__p();if(!d.state.fading)return;d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.FADING_OUT&&delete b[a]});return babelHelpers["extends"]({},a,{beeps:b,fading:!1})});b("setTimeoutAcrossTransitions")(function(){d.setState(function(a){var b=babelHelpers["extends"]({},a.beeps);Object.keys(b).forEach(function(a){b[a].state==i.PENDING&&(b[a]=babelHelpers["extends"]({},b[a],{state:i.RENDERED}))});return babelHelpers["extends"]({},a,{beeps:b})})})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){__p&&__p();var a=this,c=new(b("SubscriptionsHandler"))();c.addSubscriptions(b("NotificationUpdates").subscribe("update-notifications",function(b,c){if(c.payloadsource===m||c.payloadsource===l){b=c.nodes;b&&b.length&&a.handleBeepChanges(a.$4(b))}}),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notif_sound_pref_changed"),function(b,c){a.setState({soundEnabled:c.obj.enabled})}));c.addSubscriptions(b("FacebookWebNotificationsSubscription").subscribe({event:"NEW_BEEPER",callback:function(b){var c=b.notification;b=b.should_play_sound;if(c!==null){var d;a.handleBeepChanges((d={},d[c.alert_id]={notification:c,shouldPlaySound:b},d))}}}));this.$1=c;b("Arbiter").inform("NotificationBeeper/mounted",null,"persistent")};d.componentWillUnmount=function(){this.$1&&this.$1.release(),this.$1=null};d.$5=function(a){this.$2&&b("clearTimeout")(this.$2),this.$2=b("setTimeoutAcrossTransitions")(b("shield")(this.$7,this),a==null?k:a)};d.handleBeepChanges=function(a){var b=this.state.fading?i.PENDING:i.RENDERED,c=!1,d=babelHelpers["extends"]({},this.state.beeps);Object.keys(a).reverse().forEach(function(e){var f=a[e],g=d[e];(!g||g.notification.alert_id!==f.notification.alert_id||g.notification.creation_time!==f.notification.creation_time)&&(g&&(c=!0,delete d[e]),d[e]=babelHelpers["extends"]({},f,{state:b}))});c&&this.$5();this.setState({beeps:d})};d.render=function(){var a=this,c=this.state.beeps,d=[];Object.keys(c).reverse().forEach(function(e){var f=c[e];if(f.state==i.PENDING)return;d.push(b("React").jsx(b("NotificationBeeperItem.react"),{fadingOut:a.state.fading&&f.state==i.FADING_OUT,notification:f.notification,onInserted:a.$6,onReadyToHide:a.onReadyToHide,onPreventHide:a.$8},e))},this);var e=d.length>0;e=(e?"":"hidden_elem")+" _50d1";return b("React").jsx("ul",{ref:"container",className:e,"data-gt":this.props.tracking,"data-testid":void 0,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,children:d})};d.$4=function(a){return a.reduce(function(a,b){a[b.alert_id]={notification:b,shouldPlaySound:!1};return a},{})};return c}(b("React").Component);e.exports=d}),null);
__d("NotificationBeeperContainer",["NotificationBeeper.react","React","ReactDOM"],(function(a,b,c,d,e,f){a={renderBeeper:function(a,c){b("ReactDOM").render(b("React").jsx(b("NotificationBeeper.react"),babelHelpers["extends"]({},a)),c)}};e.exports=a}),null);
__d("LiveVideoBeeperItemContents.react",["BootloadOnRender.react","JSResource","LazyComponent.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx(b("BootloadOnRender.react"),{loader:b("JSResource")("LiveVideoBeeperItemContentsImpl.react").__setRef("LiveVideoBeeperItemContents.react"),placeholder:b("React").jsx("div",{}),component:b("React").jsx(b("LazyComponent.react"),babelHelpers["extends"]({},this.props,{ref:"itemContents"}))})};return c}(b("React").Component);e.exports=a}),null);
__d("DialogHideOnSuccess",["csx","CSS"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("success",this._handle.bind(this))};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};c._handle=function(a,c){b("CSS").matchesSelector(c.getTarget(),"._s")&&this._layer.hide()};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("InnerStickyArea",["cx","ContextualLayer","CSS","DataStore","DOM","Event","IntersectionObserver","LayerHideOnTransition","Locale","Parent","Scroll","Style","Vector","gkx","removeFromArray"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){a=b("Parent").byClass(a,"scrollable")||b("Style").getScrollParent(a.parentNode);return a}a=function(){"use strict";__p&&__p();function a(a){var c=h(a);this.node=a;this._extracted=!1;this._placeholder=b("DOM").create("div",{className:"_ptr"});i.getInstance(c).register(this)}var c=a.prototype;c.update=function(){this._extracted?(b("Vector").getElementDimensions(this._placeholder).setElementWidth(this.node),b("Vector").getElementDimensions(this.node).setElementHeight(this._placeholder)):b("Vector").getElementDimensions(this.node).setElementWidth(this.node).setElementHeight(this._placeholder);return this};c.setExtracted=function(a){if(a===this._extracted)return this;a?(this.update(),b("DOM").replace(this.node,this._placeholder)):(b("Style").set(this.node,"height",null),b("Style").set(this.node,"width",null),this._placeholder.parentNode?b("DOM").replace(this._placeholder,this.node):b("DOM").remove(this.node));this._extracted=a;return this};c.getInlineNode=function(){return this._extracted?this._placeholder:this.node};c.isDisplayed=function(){var a=this.getInlineNode();return a.offsetWidth>0&&a.offsetHeight>0};c.getStickyContainer=function(){return this._stickyContainer};c.updateContainer=function(){var a=h(this.node);i.getInstance(a).register(this)};c.destroy=function(){this.getStickyContainer().unregister(this)};a.getStickyContainer=function(a){return i.getInstance(h(a))};return a}();var i=function(){"use strict";__p&&__p();function a(a){this.node=a,this._areas=[],this._fixTarget=null,this._fixedArea=null,this._initialized=!1,this._layer=new(b("ContextualLayer"))({permanent:!0},b("DOM").create("div")).setInsertParent(this.node.parentNode).disableBehavior(b("LayerHideOnTransition")),b("gkx")("678831")?this._observer=null:this._listener=b("Event").listen(a,"scroll",this.update.bind(this)),b("CSS").addClass(a,"_pts"),b("DataStore").set(a,"StickyContainer",this)}var c=a.prototype;c.isDisplayed=function(){return this.node.offsetWidth>0&&this.node.offsetHeight>0};c.register=function(a){var c=this;a.getStickyContainer()&&a.getStickyContainer().unregister(a);a._stickyContainer=this;this._areas.push(a);b("gkx")("678831")&&(this._observer===null&&(this._observer=new(b("IntersectionObserver"))(function(a){c.update()},{root:this.node,rootMargin:-b("Vector").getElementDimensions(a.node).y+"px 0px 0px 0px",threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})),this._observer.observe(a.node),this._observer.observe(a._placeholder));this.update();return this};c.unregister=function(a){b("removeFromArray")(this._areas,a),b("gkx")("678831")&&(this._observer!==null&&(this._observer.unobserve(a.node),this._observer.unobserve(a._placeholder))),this.update()};c.update=function(){__p&&__p();if(!this.isDisplayed())return this;var a=null,c=this,d=b("Scroll").getTop(this.node),e;for(var f=0;f<this._areas.length;f++){var g=this._areas[f],h=g.getInlineNode();if(!g.isDisplayed())continue;if(!b("DOM").contains(this.node.parentNode,h))continue;h=h.offsetTop;if(h<=d)(e===void 0||h>e)&&(a=g,e=h);else if(a){var i=b("Vector").getElementDimensions(a.node).y;h-i<d&&(c=g);break}}this._fixedArea===a&&this._fixTarget===c?this._fixedArea&&this._fixedArea.update():(this._fixedArea&&this._fixedArea!==a&&this._unfixArea(this._fixedArea),a&&this._fixAreaTo(a,c),this._fixedArea=a,this._fixTarget=c);return this};c.destroy=function(){b("gkx")("678831")?this._observer!==null&&(this._observer.disconnect(),this._observer=null):(this._listener&&this._listener.remove(),this._listener=null)};c._fixAreaTo=function(c,d){this._layer.hide(),c.setExtracted(!0),d instanceof a?this._layer.setInsertParent(this.node.parentNode).setAlignment(b("Locale").isRTL()?"right":"left").setContext(this.node):this._layer.setInsertParent(this.node).setContext(d.node),this._layer.setContent(c.node).show(),b("CSS").addClass(c.node,"_57kj")};c._unfixArea=function(a){this._layer.hide(),a.setExtracted(!1),b("CSS").removeClass(a.node,"_57kj")};a.getInstance=function(c){var d=b("DataStore").get(c,"StickyContainer");return d||new a(c)};return a}();e.exports=a}),null);
__d("ContextualLayerInlineTabOrder",["DOM","DOMTraverser","Event","Focus","Keys","SubscriptionsHandler","TabbableElements","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._isSetup=!1,this._ignoreFocus=!1,this._layerFocused=!0,this._layerRoot=this._layer.getContentRoot(),this._layerID=b("getOrCreateDOMID")(this._layerRoot),this._mutedTabbables=new Map([]),this._subscriptions=new(b("SubscriptionsHandler"))(),this._tabbableLayerElements=[]}var c=a.prototype;c.enable=function(){this._subscriptions.addSubscriptions(this._layer.subscribe("aftershow",this._onAfterShow.bind(this)),this._layer.subscribe("hide",this._onAfterHide.bind(this))),this._layer.isShown()&&this._onAfterShow()};c.disable=function(){this._subscriptions.release(),this._isSetup=!1};c._getContext=function(){return this._layer.getCausalElement()};c._getContextOwns=function(){var a=this._getContext();if(!a)return[];a=(a.getAttribute("aria-owns")||"").trim();a=a?a.match(/[^ ]+/g):[];return a};c._identifyTabbableElements=function(){this._tabbableLayerElements=b("TabbableElements").find(this._layerRoot),!this._tabbableLayerElements.length&&!this._mutedTabbables.size&&this._layerRoot.setAttribute("tabindex","0"),this._layerRoot.tabIndex>=0&&this._tabbableLayerElements.unshift(this._layerRoot)};c._onAfterShow=function(){this._setupTabBehavior();var a=this._getContext(),b=this._getContextOwns();a&&!b.includes(this._layerID)&&(b.push(this._layerID),a.setAttribute("aria-owns",b.join(" ")))};c._onAfterHide=function(){var a=this._getContext();if(a){var b=this._getContextOwns(),c=b.indexOf(this._layerID);c>-1&&(b.splice(c,1),a.setAttribute("aria-owns",b.join(" ")))}};c._setupTabBehavior=function(){if(!this._isSetup){var a=this._getContext();if(!this._layerRoot||!a)return;this._setupTabTriggers();this._setupTabToggle();this._isSetup=!0}};c._setupTabTriggers=function(){var a=this._getContext();b("TabbableElements").isTabbable(a)||a.setAttribute("tabindex","0");this._subscriptions.addSubscriptions(b("Event").listen(a,"keyup",this._checkNUXFocus.bind(this)),b("Event").listen(a,"keydown",this._checkNUXFocus.bind(this)),b("Event").listen(this._layerRoot,"keydown",this._checkContextFocus.bind(this)),b("Event").listen(this._layerRoot,"layerFocus",this._setNUXFocusStart.bind(this)),b("Event").listen(this._layerRoot,"layerFocusEnd",this._setNUXFocusEnd.bind(this)),b("Event").listen(this._layerRoot,"tempFocusIgnore",this._tempIgnoreFocus.bind(this)))};c._setupTabToggle=function(){this._handleLayerBlur(),this._subscriptions.addSubscriptions(b("Event").listen(document.documentElement,"click",this._checkForFocus.bind(this)),b("Event").listen(document.documentElement,"keydown",this._checkForFocus.bind(this)))};c._handleLayerBlur=function(){__p&&__p();if(!this._layerFocused)return;this._identifyTabbableElements();this._tabbableLayerElements.forEach(function(a){if(!this._mutedTabbables.has(a)){var b=a.getAttribute("tabindex");a.setAttribute("tabindex","-1");this._mutedTabbables.set(a,b)}},this);this._layerFocused=!1};c._handleLayerFocus=function(){__p&&__p();if(this._layerFocused)return;for(var a=this._mutedTabbables,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;var e=d[0];d=d[1];d===null?e.removeAttribute("tabindex"):e.setAttribute("tabindex",d)}this._mutedTabbables.clear();this._layerFocused=!0};c._checkNUXFocus=function(a){__p&&__p();if(this._ignoreFocus){a.preventDefault();this._ignoreFocus=!1;return}if(a.getTarget()!==this._getContext()||!this._layer.isShown())return;var c=b("Event").getKeyCode(a),d=this._getContextOwns();if(!d.length||c!==b("Keys").TAB)return;c=a.getModifiers();c=c.shift;var e=d[0]===this._layerID;d=d[d.length-1]===this._layerID;(a.type==="keydown"&&c&&d||a.type==="keyup"&&!c&&e)&&(a.preventDefault(),b("Event").fire(this._layerRoot,c?"layerFocusEnd":"layerFocus"))};c._setNUXFocusStart=function(){this._handleLayerFocus(),this._identifyTabbableElements(),b("Focus").set(this._tabbableLayerElements[0])};c._setNUXFocusEnd=function(){this._handleLayerFocus(),this._identifyTabbableElements(),b("Focus").set(this._tabbableLayerElements[this._tabbableLayerElements.length-1])};c._tempIgnoreFocus=function(){this._ignoreFocus=!0};c._checkContextFocus=function(a){var c=b("Event").getKeyCode(a),d=a.getModifiers();d=d.shift;this._handleLayerFocus();this._identifyTabbableElements();if(!this._tabbableLayerElements.length||c!==b("Keys").TAB||!this._getContext())return;c=this._tabbableLayerElements[0];var e=this._tabbableLayerElements[this._tabbableLayerElements.length-1];a.getTarget()===e&&!d?this._setFocusAfterLayer()&&a.preventDefault():a.getTarget()===c&&d&&(this._setFocusBeforeLayer()&&a.preventDefault())};c._isTabbableNode=function(a){return b("TabbableElements").isTabbable(a)&&!b("DOM").contains(this._layerRoot,a)};c._setFocusBeforeLayer=function(){__p&&__p();var a=this._getContextOwns();if(!a||!a.length)return!1;if(a[0]===this._layerID){var c=b("DOMTraverser").previousFilteredNode(document.body,this._getContext(),this._isTabbableNode.bind(this));b("Focus").set(c);return!0}if(a.includes(this._layerID)){c=a[a.indexOf(this._layerID)-1];return this._focusOnElement(c,!0)}return!1};c._setFocusAfterLayer=function(){__p&&__p();var a=this._getContextOwns();if(!a||!a.length)return!1;if(a[a.length-1]===this._layerID){this._refocusOnContext();return!0}if(a.includes(this._layerID)){a=a[a.indexOf(this._layerID)+1];return this._focusOnElement(a,!1)}return!1};c._focusOnElement=function(a,c){a=document.getElementById(a);if(!a)return!1;b("Event").fire(a,c?"layerFocusEnd":"layerFocus");this._handleLayerBlur();return!0};c._refocusOnContext=function(a){a=this._getContext();var c=this._getContextOwns();b("Event").fire(document.getElementById(c[0]),"tempFocusIgnore");this._handleLayerBlur();a&&(a.tabIndex==null?(a.tabIndex=-1,b("Focus").setWithoutOutline(a)):b("Focus").set(a))};c._checkForFocus=function(a){a=a.getTarget();var c=this._layer.getContentRoot();c=b("DOM").contains(c,a);!this._ignoreFocus&&!this._layerFocused&&c&&this._handleLayerFocus();this._layerFocused&&!c&&this._handleLayerBlur()};return a}();e.exports=a}),null);
__d("LayerRemoveOnHide",["DOM"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("hide",b("DOM").remove.bind(null,this._layer.getRoot()))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);