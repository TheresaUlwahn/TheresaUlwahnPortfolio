if (self.CavalryLogger) { CavalryLogger.start_js(["Deffv"]); }

__d("ZenonCallLogger",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b){var c=this;this.$1=[];b.forEach(function(b){return c.$1.push(new b(a))})}var b=a.prototype;b.log=function(a){this.$1.forEach(function(b){b.processEvent(a)})};return a}();e.exports=a}),null);
__d("ZenonParticipantState",[],(function(a,b,c,d,e,f){"use strict";b=Object.freeze({UNKNOWN:0,DISCONNECTED:1,NO_ANSWER:2,REJECTED:3,UNREACHABLE:4,CONNECTION_DROPPED:5,CONTACTING:6,RINGING:7,NEGOTIATING:8,CONNECTING:9,CONNECTED:10,PARTICIPANT_LIMIT_REACHED:11,IN_ANOTHER_CALL:12,RING_TYPE_UNSUPPORTED:13});function a(a){return a==null?"disconnected":g[a]}var g=Object.freeze((c={},c[b.UNKNOWN]="disconnected",c[b.DISCONNECTED]="disconnected",c[b.NO_ANSWER]="disconnected",c[b.REJECTED]="disconnected",c[b.UNREACHABLE]="disconnected",c[b.CONNECTION_DROPPED]="disconnected",c[b.CONTACTING]="contacting",c[b.RINGING]="ringing",c[b.NEGOTIATING]="connecting",c[b.CONNECTING]="connecting",c[b.CONNECTED]="connected",c[b.PARTICIPANT_LIMIT_REACHED]="disconnected",c[b.IN_ANOTHER_CALL]="disconnected",c[b.RING_TYPE_UNSUPPORTED]="disconnected",c));e.exports={ZenonParticipantState:b,toCallParticipantState:a}}),null);
__d("ZenonPlatformExperiments",["gkx","qex"],(function(a,b,c,d,e,f){"use strict";a={useZenonPlatform:function(){var a;return(a=b("qex")._("1298004"))!=null?a:!1},useMwpp:function(){return b("gkx")("1273355")}};e.exports=a}),null);
__d("multiway_Capability",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SUPPORT_AUDIO_DEPRECATED:0,SUPPORT_VIDEO_DEPRECATED:1,SUPPORT_EXPERIMENTS_IN_JOIN_RESPONSE:2,SUPPORT_NEW_PARTICIPANT_STATES:3,SUPPORT_SDP_RENEGOTIATION:4,SUPPORT_MWPP:5,REQUIRE_FULL_SDP_IN_SMU:6,SUPPORT_PRECONNECT:7})}),null);
__d("multiway_DeviceStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({OK:0,NOT_SUPPORTED:1,IN_ANOTHER_CALL:10})}),null);
__d("multiway_DismissReason",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CALL_ENDED:0,ANSWERED_ON_ANOTHER_DEVICE:1,IN_ANOTHER_CALL:2,CONNECTION_DROPPED:3,REJECTED_ON_ANOTHER_DEVICE:4,REMOVED_BY_PARTICIPANT:5,REJECTED_BY_CALLEE:6,INTERNAL_ERROR:7,CALL_ENDED_BY_PRODUCT:9})}),null);
__d("multiway_HangupReason",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IGNORE_CALL:0,HANGUP_CALL:1,NO_ANSWER_TIMEOUT:2,CLIENT_ERROR:3,IN_ANOTHER_CALL:4,CLIENT_INTERRUPTED:5,SESSION_MIGRATED:6})}),null);
__d("multiway_MediaPauseStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NotPaused:0,Paused:1})}),null);
__d("multiway_MessageType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({JOIN:0,SERVER_MEDIA_UPDATE:1,HANGUP:2,ICE_CANDIDATE:3,RING:4,DISMISS:5,CONFERENCE_STATE:6,ADD_PARTICIPANTS:7,SUBSCRIPTION:8,CLIENT_MEDIA_UPDATE:9,DATA_MESSAGE:10,REMOVE_PARTICIPANTS:11,PING:18,P2P_PROTOCOL:19,UPDATE:20,NOTIFY:21,CONNECT:22,CLIENT_EVENT:23,SUBSCRIBE:24,UNSUBSCRIBE:25})}),null);
__d("multiway_ParticipantCallState",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:0,DISCONNECTED:1,NO_ANSWER:2,REJECTED:3,UNREACHABLE:4,CONNECTION_DROPPED:5,CONTACTING:6,RINGING:7,CONNECTING:8,CONNECTED:9,PARTICIPANT_LIMIT_REACHED:10,IN_ANOTHER_CALL:11,RING_TYPE_UNSUPPORTED:12})}),null);
__d("multiway_RingType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({GROUP_AUDIO_CALL:0,PEER_VIDEO_CALL:1,PEER_AUDIO_CALL:2,GROUP_VIDEO_CALL:3,LIVE_STREAM:4,PEER_ESCALATED_VIDEO_CALL:5,PEER_ESCALATED_AUDIO_CALL:6})}),null);
__d("multiway_RtcResponseStatusCode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({OK:200,BAD_REQUEST:400,UNAUTHORIZED:401,NOT_FOUND:404,METHOD_NOT_ALLOWED:406,CONFLICT:409,CONDITIONAL_REQUEST_FAILED:412,SERVER_INTERNAL_ERROR:500,SERVICE_UNAVAILABLE:503})}),null);
__d("multiway_RtcResponseSubCode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:1e3,EXCEEDED_MAX_ALLOWED_PARTICIPANTS:1001,MEMBERSHIP_CHECK_FAIL:1002,CONFERENCE_THROTTLED:1003,ENDPOINT_THROTTLED:1004,UNSUPPORTED_REQUEST_TYPE:2e3,CLIENT_REQUEST_UNACCEPTABLE:2001,CLIENT_RESPONSE_UNACCEPTABLE:2002,RING_RESPONSE_BODY_NOT_SET:2004,SERVER_MEDIA_UPDATE_RESPONSE_BODY_NOT_SET:2005,INVALID_SDP:2006,INVALID_CONFERENCE_NAME:2007,SERVER_INFO_CONFERENCE_NAME_MISMATCH:2008,INVALID_USER_ID:2009,INCORRECT_VERSION_RANGE:2010,SENDER_ID_MISMATCH:2011,RECIPIENT_NOT_SPECIFIED:2012,FIELD_NOT_ALLOWED:2013,USERS_NOT_SPECIFIED:2015,REQUEST_UNACCEPTABLE_FOR_ENDPOINT_STATE:2016,INVALID_CALL_ID:2017,SESSION_DESCRIPTION_ID_MISMATCH:2018,EMPTY_CLIENT_MEDIA_UPDATES:2019,INVALID_SERVER_INFO_DATA:2020,INCORRECT_STATE_VERSION:2021,MISMATCHED_STATE_FOR_VERSION:2022,MISSING_BODY_ENDPOINT:2101,MISSING_BODY_HEADER:2102,MISSING_BODY_BODY:2103,MISSING_BODY_PARAMS:2104,MISSING_BODY_REMOVE_PARTICIPANTS_REQUEST:2105,MISSING_BODY_DATA_MESSAGE_REQUEST:2106,MISSING_BODY_CLIENT_MEDIA_UPDATE_REQUEST:2107,MISSING_BODY_ADD_PARTICIPANTS_REQUEST:2108,MISSING_BODY_CONNECT_REQUEST:2109,MISSING_BODY_SUBSCRIPTION_REQUEST:2110,MISSING_BODY_JOIN_REQUEST:2111,MISSING_BODY_HANGUP_REQUEST:2112,MISSING_BODY_ICE_CANDIDATE_REQUEST:2113,MISSING_BODY_P2P_MESSAGE_REQUEST:2114,MISSING_BODY_UPDATE_REQUEST:2115,MISSING_BODY_CLIENT_EVENT_REQUEST:2116,MISSING_CONNECT_REQUEST:2117,REQUESTOR_NOT_MEMBER_CONFERENCE:3002,NOT_BROADCAST_OWNER:3003,GUEST_NOT_INVITED:3004,GUEST_DISCONNECTED:3005,GUEST_INVITATION_EXPIRED:3006,SHOULD_USE_NEW_SIGNALING_PATH:3007,BROADCAST_ALREADY_STOPPED:4002,FAILED_TO_GENERATE_SDP_ANSWER:4003,FAILED_GENERATE_SESSION_DESCRIPTION:4004,SDP_SESSION_ID_MISMATCH:4005,MEDIA_ENDPOINT_GONE:4007,MEDIA_ENDPOINT_ALREADY_EXISTS:4008,MEDIA_ENDPOINT_EXISTS_DIFFERENT_SESSION_ID:4009,LEGACY_MESSENGER_SENDER_UNSET:4010,FAILED_TO_SET_TRANSPORT_INFO:4011,NON_PRIMARY_MULTIWAY_SERVER:4012,FAILED_TO_GET_REMOTE_DESCRIPTION:4013,LOCAL_DESCRIPTION_NOT_SET:4014,INVALID_SDP_TYPE:4015,CLIENT_MEDIA_UPDATE_WITHOUT_REMOTE_SDP_INFO:4016,SDP_UNSET_ON_P2P_ANSWER:4017,MISSING_ICE_CANDIDATE_PAYLOAD:4018,P2P_PROTOCOL_UNSET:4019,CREATE_ACK_FOR_INVALID_MESSAGE_TYPE:4020,LEGACY_CLIENT_CANNOT_JOIN_SFU_MODE:4021,CONNECT_UNSUPPORTED_IN_SFU_MODE:4022,CONNECT_UNSUPPORTED_FOR_JOINED_ENDPOINTS:4023,CONFERENCE_NOT_FOUND:5001,CONFERENCE_IS_TERMINATING:5002,CONFERENCE_IS_TERMINATED:5003,CONFERENCE_NAME_EMPTY:5004,NONCE_EMPTY:5005,NONCE_MISMATCH:5006,CONFERENCE_HAS_GONE:5007,PARTICIPANT_HAS_GONE:5008,MEDIA_SERVER_NOT_FOUND:5009,MEDIA_CODECS_UNSUPPORTED_BY_CONFERENCE:6001,CONFERENCE_INCAPABLE_RENEGOTIATION:6002,REJECTING_CMU_WHEN_SMU_PENDING:6003,PARTICIPANT_NOT_SUBSCRIBED_TO_TOPIC:6004,OK:9e3})}),null);
__d("ZenonMWMessageTypes",["multiway_Capability","multiway_DeviceStatus","multiway_DismissReason","multiway_HangupReason","multiway_MediaPauseStatus","multiway_ParticipantCallState","multiway_RingType","multiway_RtcResponseStatusCode","multiway_RtcResponseSubCode","multiway_MessageType"],(function(a,b,c,d,e,f){"use strict";e.exports={ZenonMWCapability:b("multiway_Capability"),ZenonMWDeviceStatus:b("multiway_DeviceStatus"),ZenonMWDismissReason:b("multiway_DismissReason"),ZenonMWHangupReason:b("multiway_HangupReason"),ZenonMWMediaPauseStatus:b("multiway_MediaPauseStatus"),ZenonMWParticipantCallState:b("multiway_ParticipantCallState"),ZenonMWRingType:b("multiway_RingType"),ZenonMWResponseStatusCode:b("multiway_RtcResponseStatusCode"),ZenonMWResponseSubCode:b("multiway_RtcResponseSubCode"),ZenonMWSignalingPayloadType:b("multiway_MessageType")}}),null);
__d("ZenonMWMessageMap",["ZenonMWMessageTypes"],(function(a,b,c,d,e,f){a=b("ZenonMWMessageTypes").ZenonMWSignalingPayloadType;e.exports=Object.freeze((c={},c[a.JOIN]="JOIN",c[a.SERVER_MEDIA_UPDATE]="SERVER_MEDIA_UPDATE",c[a.ICE_CANDIDATE]="ICE_CANDIDATE",c[a.HANGUP]="HANGUP",c[a.RING]="RING",c[a.DISMISS]="DISMISS",c[a.CONFERENCE_STATE]="CONFERENCE_STATE",c[a.ADD_PARTICIPANTS]="ADD_PARTICIPANTS",c[a.SUBSCRIPTION]="SUBSCRIPTION",c[a.CLIENT_MEDIA_UPDATE]="CLIENT_MEDIA_UPDATE",c[a.DATA_MESSAGE]="DATA_MESSAGE",c[a.REMOVE_PARTICIPANTS]="REMOVE_PARTICIPANTS",c[a.PING]="PING",c[a.P2P_PROTOCOL]="P2P_PROTOCOL",c[a.NOTIFY]="NOTIFY",c[a.CONNECT]="CONNECT",c[a.CLIENT_EVENT]="CLIENT_EVENT",c[a.SUBSCRIBE]="SUBSCRIBE",c[a.UNSUBSCRIBE]="UNSUBSCRIBE",c))}),null);
__d("ZenonDebugLogger",["Log","LogHistory","ZenonMWMessageMap","ZenonMWMessageTypes","formatDate","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ZenonMWMessageTypes").ZenonMWSignalingPayloadType,h=null;a=function(){__p&&__p();a.getInstance=function(){h||(h=new a());return h};function a(){this.$1=b("LogHistory").getInstance("webrtc")}var c=a.prototype;c.$2=function(a){var c=b("formatDate")(new Date(),"[H:i:s:X]",{skipPatternLocalization:!0});this.$1.log("Console",c+" "+a)};c.logStateMachine=function(a,b,c,d){a=d==null?a:a+": "+d;d="["+a+"] [Current State: "+b+"] Processing event: "+c;this.$2(d)};c.logMWMessage=function(a,c){if(c.jsonPayload==null)return;var d=c.jsonPayload.header,e=b("ZenonMWMessageMap")[d.type];a="[ms] "+a+" "+e+" [messageID: "+d.transactionId+" retryCount: "+d.retryCount+"]";this.$2(a);this.logMWMessageDetails(c)};c.logMWMessageDetails=function(a){__p&&__p();if(a.jsonPayload==null){b("recoverableViolation")("Should never call logMWMessageDetails with a null jsonPayload message","rtc_www");return}a=a.jsonPayload;var c=a.header;a=a.body;var d=b("ZenonMWMessageMap")[c.type],e=c.responseStatusCode!=null,f="";switch(c.type){case g.SERVER_MEDIA_UPDATE:if(e){f="[md] "+d+" resp [currentVersion: "+((c=(c=a.serverMediaUpdateResponse)==null?void 0:c.currentVersion)!=null?c:"")+"]";break}f="[md] "+d+" req [fromVersion: "+((c=(c=a.serverMediaUpdateRequest)==null?void 0:c.fromVersion)!=null?c:"")+" toVersion: "+((c=(c=a.serverMediaUpdateRequest)==null?void 0:c.toVersion)!=null?c:"")+"]";break;case g.CLIENT_MEDIA_UPDATE:if(e){f="[md] "+d+" resp [currentVersion: "+((e=(c=a.clientMediaUpdateResponse)==null?void 0:c.currentVersion)!=null?e:"")+"]";break}f="[md] "+d+" req [fromVersion: "+((e=(c=a.clientMediaUpdateRequest)==null?void 0:c.fromVersion)!=null?e:"")+" toVersion: "+((c=(d=a.clientMediaUpdateRequest)==null?void 0:d.toVersion)!=null?c:"")+"]";break;default:return}this.$2(f)};return a}();e.exports=a}),null);
__d("ZenonSignalingMessage",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b){this.$1=a,this.$2=b}var b=a.prototype;b.getHeader=function(){return this.$1};b.getEvents=function(){return this.$2};b.setSignalingID=function(a){this.$1.signalingID=a};b.setRetryCount=function(a){this.$1.retryCount=a};return a}();e.exports=a}),null);
__d("ZenonSignalingTypes",[],(function(a,b,c,d,e,f){a={OK:0,REJECTED_FROM_VERSION_DOES_NOT_MATCH:1};e.exports={ZenonRemoteSdpResponseStatus:a}}),null);
__d("ZenonMWTranslatorUtils",["ChannelClientID","CurrentUser","FacebookAppIDs","ZenonDismissReason","ZenonMWMessageTypes","ZenonParticipantState","ZenonSignalingTypes","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ZenonDismissReason").ZenonDismissReason,h=(a=b("ZenonMWMessageTypes")).ZenonMWDeviceStatus;c=a.ZenonMWDismissReason;var i=a.ZenonMWHangupReason,j=a.ZenonMWParticipantCallState,k=a.ZenonMWResponseStatusCode,l=a.ZenonMWResponseSubCode;d=b("ZenonParticipantState").ZenonParticipantState;f=b("ZenonSignalingTypes").ZenonRemoteSdpResponseStatus;var m={mwMessageHeaderToSignalingMessageHeader:function(a){var b=a.conferenceName,c=a.transactionId,d=a.clientSessionId,e=a.serverInfoData;d=d;var f={userID:"2"};c={messageID:c,roomInfo:{name:b},signalingID:d,protocol:"mw",userInfo:{userID:"1"},remoteInfo:f,retryCount:a.retryCount};e!=null&&(c.remoteSignalingID=e);return c},signalingMessageHeaderToMWHeader:function(a,b){var c=a.messageID,d=a.roomInfo,e=a.signalingID,f=a.remoteSignalingID;d={conferenceName:d.name,transactionId:c,retryCount:a.retryCount,type:b};e!=null&&(d.clientSessionId=e);f!=null&&(d.serverInfoData=f);return d},signalingMessageHeaderToMWResponseHeader:function(a,b,c){a=m.signalingMessageHeaderToMWHeader(a,b);a.responseStatusCode=(b=c)!=null?b:k.OK;return a},createMWMessage:function(a,c){var d={appId:m.getMWAppID(),deviceId:b("ChannelClientID").getID(),userId:b("CurrentUser").getID()};return{endpoint:d,jsonPayload:{body:c,header:a}}},getMWAppID:function(){return b("FacebookAppIDs").MQTT_WEB.toString()},getCollisionContextFromAppMessages:function(a){__p&&__p();var b=null,c=null,d=null;a!=null&&a.forEach(function(a){__p&&__p();a=(a=a.body)==null?void 0:a.genericMessage;if(a!=null&&a.topic==="collision_context_payload"){a=a.data;if(a!=null){var e;a=JSON.parse(a);b=(e=a.group_thread_id)!=null?e:null;c=(e=a.peer_id)!=null?e:null;d=(e=a.server_info_data)!=null?e:null}}});return{groupThreadID:b,peerID:c,serverInfoData:d}},fromMWDismissReason:function(a){a=o[a];return(a=a)!=null?a:g.CALL_ENDED},fromMWJoinResponseStatusToDismissReason:function(a,b){if(b===l.EXCEEDED_MAX_ALLOWED_PARTICIPANTS)return g.MAX_ALLOWED_PARTICIPANTS_REACHED;switch(a){case k.METHOD_NOT_ALLOWED:case k.UNAUTHORIZED:return g.NO_PERMISSION;case k.SERVICE_UNAVAILABLE:return g.SIGNALING_MESSAGE_FAILED;case k.OK:throw new Error("Response status code is OK; should not return a dismiss reason");default:return g.CLIENT_ERROR}},fromMWParticipantState:function(a){a=q[a];return(a=a)!=null?a:j.UNKNOWN},toMWHangupReason:function(a){a=p[a];return(a=a)!=null?a:i.HANGUP_CALL},toMWDeviceStatus:function(a){a=n[a];return(a=a)!=null?a:h.OK},toZenonMediaStates:function(a){var b={tracks:[],version:0};Object.keys(a.tracks).forEach(function(c){var d=a.tracks[c];c={trackID:c,userID:d.owner,enabled:d.enabled};b.tracks.push(c);b.version++});return b},toMWMediaStatus:function(a){var b={};a.tracks.forEach(function(a){b[a.trackID]=a.enabled});return b},toMWClientMediaStatus:function(a){var b={tracks:{}};a.tracks.forEach(function(a){b.tracks[a.trackID]={enabled:a.enabled,owner:a.userID}});return b},toMWResponseStatusCode:function(a){return r[a]},getSdpVersion:function(a){__p&&__p();a=a.split("\n");if(a.length<2)throw b("unrecoverableViolation")("Expected SDP string with two or more lines, but got "+a.length,"rtc_www");a=a[1].trim();a=a.split(" ");if(a.length<3)throw b("unrecoverableViolation")("Session line should have at least 3 tokens, but got "+a.length,"rtc_www");a=parseInt(a[2],10);if(isNaN(a))throw b("unrecoverableViolation")("SDP version could not be parsed as number.","rtc_www");return a}},n={OK:h.OK,NOT_SUPPORTED:h.NOT_SUPPORTED,IN_ANOTHER_CALL:h.IN_ANOTHER_CALL},o=Object.freeze((a={},a[c.CALL_ENDED]=g.CALL_ENDED,a[c.ANSWERED_ON_ANOTHER_DEVICE]=g.ANSWERED_ON_ANOTHER_DEVICE,a[c.IN_ANOTHER_CALL]=g.IN_ANOTHER_CALL,a[c.CONNECTION_DROPPED]=g.CONNECTION_DROPPED,a[c.REJECTED_ON_ANOTHER_DEVICE]=g.REJECTED_ON_ANOTHER_DEVICE,a[c.REJECTED_BY_CALLEE]=g.REJECTED_BY_CALLEE,a[c.CALL_ENDED_BY_PRODUCT]=g.CALL_ENDED_BY_PRODUCT,a[c.INTERNAL_ERROR]=g.CLIENT_ERROR,a[c.REMOVED_BY_PARTICIPANT]=g.HANGUP_CALL,a)),p=Object.freeze((c={},c[g.IGNORE_CALL]=i.IGNORE_CALL,c[g.HANGUP_CALL]=i.HANGUP_CALL,c[g.NO_ANSWER_TIMEOUT]=i.NO_ANSWER_TIMEOUT,c[g.CLIENT_ERROR]=i.CLIENT_ERROR,c[g.IN_ANOTHER_CALL]=i.IN_ANOTHER_CALL,c[g.CLIENT_INTERRUPTED]=i.CLIENT_INTERRUPTED,c[g.SESSION_MIGRATED]=i.SESSION_MIGRATED,c)),q=Object.freeze((a={},a[j.UNKNOWN]=d.UNKNOWN,a[j.DISCONNECTED]=d.DISCONNECTED,a[j.NO_ANSWER]=d.NO_ANSWER,a[j.REJECTED]=d.REJECTED,a[j.UNREACHABLE]=d.UNREACHABLE,a[j.CONNECTION_DROPPED]=d.CONNECTION_DROPPED,a[j.CONTACTING]=d.CONTACTING,a[j.RINGING]=d.RINGING,a[j.CONNECTING]=d.CONNECTING,a[j.CONNECTED]=d.CONNECTED,a[j.PARTICIPANT_LIMIT_REACHED]=d.PARTICIPANT_LIMIT_REACHED,a[j.IN_ANOTHER_CALL]=d.IN_ANOTHER_CALL,a[j.RING_TYPE_UNSUPPORTED]=d.RING_TYPE_UNSUPPORTED,a)),r=Object.freeze((c={},c[f.OK]=k.OK,c[f.REJECTED_FROM_VERSION_DOES_NOT_MATCH]=k.CONDITIONAL_REQUEST_FAILED,c));e.exports=m}),null);
__d("ZenonMWMessageTranslator",["ZenonMWMessageTypes","ZenonMWTranslatorUtils","ZenonPlatformExperiments","ZenonSignalingMessage"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=(a=b("ZenonMWMessageTypes")).ZenonMWCapability,h=a.ZenonMWResponseStatusCode,i=a.ZenonMWRingType,j=a.ZenonMWSignalingPayloadType,k="joining_context";c={toSignalingMessage:function(a){__p&&__p();var c=a.jsonPayload.header,d=c.type,e=c.responseStatusCode==null;c=b("ZenonMWTranslatorUtils").mwMessageHeaderToSignalingMessageHeader(c);var f=[];switch(d){case j.RING:e&&(f=n(a));break;case j.DISMISS:e&&(f=o(a));break;case j.JOIN:e||(f=p(a));break;case j.ICE_CANDIDATE:e?f=q(a):f=r(a);break;case j.CONFERENCE_STATE:e&&(f=s(a));break;case j.CLIENT_MEDIA_UPDATE:e||(f=t(a));break;case j.SERVER_MEDIA_UPDATE:e&&(f=u(a));break;case j.PING:e||(f=l(a));break;case j.HANGUP:e||(f=m(a));break}return new(b("ZenonSignalingMessage"))(c,f)},toMWMessage:function(a){__p&&__p();var c=a.getHeader();a=a.getEvents();if(a.length===0)throw new Error("Unexpected Translation: called toMWMessage with empty signaling events");else{var d=a[0];switch(d.eventName){case"addParticipantsRequest":return v(c,d);case"clientInfoRequest":if(a.length>=2&&a[1].eventName==="localSdpRequest"&&(a[1].sdp.type==="offer"||a[1].sdp.type==="answer"&&b("ZenonPlatformExperiments").useMwpp()))return x(c,d,a[1]);break;case"inviteRequest":if(a.length>=3&&a[1].eventName==="clientInfoRequest"&&a[2].eventName==="localSdpRequest"&&a[2].sdp.type==="offer")return x(c,a[1],a[2],d);break;case"inviteResponse":return y(c,d);case"dismissResponse":return A(c);case"initiateRenegotiationResponse":return F(c,d);case"iceCandidateRequest":return w(c,d);case"mediaUpdateRequest":return D(c,d.mediaStates);case"participantUpdateResponse":return C(c,d);case"pingRequest":return B(c);case"remoteSdpResponse":return d.type==="offer"&&(a.length>=2&&a[1].eventName==="localSdpRequest"&&a[1].sdp.type==="answer")?E(c,d,a[1]):E(c,d);case"localSdpRequest":return D(c,d.mediaStates,d.sdp);case"terminateRequest":return z(c,d)}}return null}};function l(a){var b=[];a=a.jsonPayload.header;a={eventName:"pingResponse",ackMessageId:a.transactionId};b.push(a);return b}function m(a){var b=[];a=a.jsonPayload.header;a={eventName:"hangupResponse",ackMessageId:a.transactionId};b.push(a);return b}function n(a){__p&&__p();var c=[];a=a.jsonPayload;var d=a.header;a=a.body;a=a.ringRequest;if(a){var e=a.otherParticipants,f=a.caller,g=a.ringType,h=a.appMessages;f=f;g=g===i.PEER_VIDEO_CALL||g===i.GROUP_VIDEO_CALL||g===i.LIVE_STREAM||g===i.PEER_ESCALATED_AUDIO_CALL;d=d.conferenceName;h=b("ZenonMWTranslatorUtils").getCollisionContextFromAppMessages(h);d={eventName:"inviteRequest",roomInfo:{name:d,context:h},inviterID:f,otherParticipants:e,isRemoteOfferer:!1,requestingVideo:g};c.push(d);e=(f=(h=a.offer)==null?void 0:h.sdpString)!=null?f:"";d=(g=a.mediaStatusEx)!=null?g:null;if(e!=""&&d!=null&&b("ZenonPlatformExperiments").useMwpp()){h={sdp:e,type:"offer",version:b("ZenonMWTranslatorUtils").getSdpVersion(e)};f=b("ZenonMWTranslatorUtils").toZenonMediaStates(d);a={eventName:"remoteSdpRequest",sdp:h,mediaStates:f,negotiateType:!1};c.push(a)}}return c}function o(a){var c=[];a=a.jsonPayload.body.dismissRequest;if(a){a=a.reason;a={eventName:"terminateRequest",reason:b("ZenonMWTranslatorUtils").fromMWDismissReason(a),shouldInformPeer:!0,fromJoinResponse:!1};c.push(a)}return c}function p(a){__p&&__p();var c=[],d=a.jsonPayload.header;if(d.responseStatusCode&&d.responseStatusCode!==h.OK){var e={eventName:"terminateRequest",reason:b("ZenonMWTranslatorUtils").fromMWJoinResponseStatusToDismissReason(d.responseStatusCode,d.responseSubCode),shouldInformPeer:!1,fromJoinResponse:!0};c.push(e);return c}e=a.jsonPayload.body.joinResponse;if(!e)return c;a={ackMessageId:d.transactionId,eventName:"localSdpResponse"};c.push(a);d=(a=(d=e.answer)==null?void 0:d.sdpString)!=null?a:"";if(d!==""){a={sdp:d,type:"answer",version:b("ZenonMWTranslatorUtils").getSdpVersion(d)};d=b("ZenonMWTranslatorUtils").toZenonMediaStates(e.mediaStatusEx);e={eventName:"remoteSdpRequest",sdp:a,mediaStates:d,negotiateType:!1};c.push(e)}a={eventName:"capabilitiesRequest",capabilities:{addParticipantEnabled:!0}};c.push(a);return c}function q(a){var b=[];a=a.jsonPayload.body.iceCandidateRequest;if(a){a={eventName:"iceCandidateRequest",iceCandidates:a.iceCandidateSdps.map(function(a){return{sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,candidateSdpString:(a=a.candidateSdpString)!=null?a:""}})};b.push(a)}return b}function r(a){var b=[];a=a.jsonPayload.header;a={ackMessageId:a.transactionId,eventName:"iceCandidateResponse"};b.push(a);return b}function s(a){__p&&__p();var c=[];a=a.jsonPayload.body.conferenceStateRequest;if(a){var d=a.participantStates,e=a.appMessages,f={eventName:"participantUpdateRequest",participantStates:new Map(),versionId:a.version},g={eventName:"clientInfoRequest",userCapabilities:new Map()};Object.keys(d).forEach(function(a){var c=d[a],e=c.state;c=c.userCapabilities;f.participantStates.set(a,b("ZenonMWTranslatorUtils").fromMWParticipantState(e));g.userCapabilities.set(a,(e=c)!=null?e:"")});a=b("ZenonMWTranslatorUtils").getCollisionContextFromAppMessages(e);e={context:a,eventName:"roomContextUpdateRequest"};c.push(f);c.push(g);c.push(e)}return c}function t(a){__p&&__p();var c=[];a=a.jsonPayload;var d=a.header;a=a.body;a=a.clientMediaUpdateResponse;if(a){var e=a.answer,f=a.mediaStatus;if(e!=null&&f!=null){e=(e=e.sdpString)!=null?e:"";f=b("ZenonMWTranslatorUtils").toZenonMediaStates(f);var g={ackMessageId:d.transactionId,eventName:"localSdpResponse"};f={eventName:"remoteSdpRequest",negotiateType:!1,mediaStates:f,sdp:{sdp:e,type:"answer",version:b("ZenonMWTranslatorUtils").getSdpVersion(e)}};c.push(g);c.push(f)}else{e={ackMessageId:d.transactionId,eventName:"mediaUpdateResponse",requestVersionId:a.currentVersion};c.push(e)}}return c}function u(a){__p&&__p();var c=[];a=a.jsonPayload;var d=a.header;a=a.body;a=a.serverMediaUpdateRequest;if(!a)return c;d={eventName:"overlayConfigServerUpdateRequest",serializedConfig:(d=(d=d.extensions)==null?void 0:d.oc1)!=null?d:""};c.push(d);if(a.renegotiationRequested){d={eventName:"initiateRenegotiationRequest",version:a.toVersion,fromVersion:a.fromVersion};c.push(d)}d=(d=(d=a.answer)==null?void 0:d.sdpString)!=null?d:"";var e="answer";if(d===""){var f;d=(f=(f=a.offer)==null?void 0:f.sdpString)!=null?f:"";e="offer"}if(d==="")return c;f={sdp:d,type:e,version:b("ZenonMWTranslatorUtils").getSdpVersion(d)};e=b("ZenonMWTranslatorUtils").toZenonMediaStates(a.mediaStatus);d={eventName:"remoteSdpRequest",sdp:f,mediaStates:e,negotiateType:!1,fromVersion:a.fromVersion};c.push(d);return c}function v(a,c){c={usersToInvite:c.participants};a=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWHeader(a,j.ADD_PARTICIPANTS);return b("ZenonMWTranslatorUtils").createMWMessage(a,{addParticipantsRequest:c})}function w(a,c){c=c.iceCandidates;c=c.map(function(a){return{sdpMid:a.sdpMid,sdpMLineIndex:a.sdpMLineIndex,candidateSdpString:a.candidateSdpString}});c={iceCandidateSdps:c};a=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWHeader(a,j.ICE_CANDIDATE);return b("ZenonMWTranslatorUtils").createMWMessage(a,{iceCandidateRequest:c})}function x(a,c,d,e){c={offer:{sdpString:d.sdp.sdp},deviceCapabilities:[g.SUPPORT_NEW_PARTICIPANT_STATES,g.REQUIRE_FULL_SDP_IN_SMU,g.SUPPORT_SDP_RENEGOTIATION],userCapabilities:c.userCapabilities.get(a.userInfo.userID),mediaStatus:b("ZenonMWTranslatorUtils").toMWMediaStatus(d.mediaStates)};b("ZenonPlatformExperiments").useMwpp()&&(c.deviceCapabilities.push(g.SUPPORT_MWPP),d.sdp.type==="answer"&&(c.answer={sdpString:d.sdp.sdp}));d=e==null?void 0:e.otherParticipants;d&&(c.usersToCall=d);e=(d=e==null?void 0:e.roomInfo.context)!=null?d:a.roomInfo.context;e&&(c.appMessages=[{header:{topic_DEPRECATED:k},body:{genericMessage:{topic:k,data:JSON.stringify(e)}}}]);d=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWHeader(a,j.JOIN);e&&e.serverInfoData!=null&&(d.serverInfoData=e.serverInfoData);return b("ZenonMWTranslatorUtils").createMWMessage(d,{joinRequest:c})}function y(a,c){c=c.status;c=b("ZenonMWTranslatorUtils").toMWDeviceStatus(c);c={deviceCapabilities:[g.SUPPORT_AUDIO_DEPRECATED,g.SUPPORT_VIDEO_DEPRECATED],deviceStatus:c};a=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWResponseHeader(a,j.RING);return b("ZenonMWTranslatorUtils").createMWMessage(a,{ringResponse:c})}function z(a,c){c=c.reason;c={reason:b("ZenonMWTranslatorUtils").toMWHangupReason(c),detailedReasonString:""};a=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWHeader(a,j.HANGUP);return b("ZenonMWTranslatorUtils").createMWMessage(a,{hangupRequest:c})}function A(a){a=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWResponseHeader(a,j.DISMISS);return b("ZenonMWTranslatorUtils").createMWMessage(a,{})}function B(a){var c=Object.freeze({});a=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWHeader(a,j.PING);return b("ZenonMWTranslatorUtils").createMWMessage(a,{pingRequest:c})}function C(a,c){c={currentVersion:c.requestVersionId};a=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWResponseHeader(a,j.CONFERENCE_STATE);return b("ZenonMWTranslatorUtils").createMWMessage(a,{conferenceStateResponse:c})}function D(a,c,d){c={fromVersion:c.version,mediaUpdates:[{mediaStatus:b("ZenonMWTranslatorUtils").toMWMediaStatus(c)}],toVersion:c.version};d!==void 0&&(c.offer={sdpString:d.sdp});d=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWHeader(a,j.CLIENT_MEDIA_UPDATE);return b("ZenonMWTranslatorUtils").createMWMessage(d,{clientMediaUpdateRequest:c})}function E(a,c,d){if(c.acknowledgedVersion==null)throw new Error("Error creating ServerMediaUpdateResponse: remoteSdpResponse.acknowledgedVersion is null");var e={currentVersion:c.acknowledgedVersion};d&&(e.answer={sdpString:d.sdp.sdp},e.mediaStatus=b("ZenonMWTranslatorUtils").toMWClientMediaStatus(d.mediaStates));d=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWResponseHeader(a,j.SERVER_MEDIA_UPDATE,b("ZenonMWTranslatorUtils").toMWResponseStatusCode(c.status));return b("ZenonMWTranslatorUtils").createMWMessage(d,{serverMediaUpdateResponse:e})}function F(a,c){var d={currentVersion:c.acknowledgedVersion};a=b("ZenonMWTranslatorUtils").signalingMessageHeaderToMWResponseHeader(a,j.SERVER_MEDIA_UPDATE,b("ZenonMWTranslatorUtils").toMWResponseStatusCode(c.status));return b("ZenonMWTranslatorUtils").createMWMessage(a,{serverMediaUpdateResponse:d})}e.exports=c}),null);
__d("CallEndReason",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IGNORE_CALL:"IgnoreCall",HANGUP_CALL:"HangupCall",IN_ANOTHER_CALL:"InAnotherCall",ACCEPT_AFTER_HANGUP:"CallEndAcceptAfterHangUp",NO_ANSWER_TIMEOUT:"NoAnswerTimeout",INCOMING_TIMEOUT:"IncomingTimeout",OTHER_INSTANCE_HANDLED:"OtherInstanceHandled",SIGNALING_MESSAGE_FAILED:"SignalingMessageFailed",CONNECTION_DROPPED:"ConnectionDropped",CLIENT_INTERRUPTED:"ClientInterrupted",WEBRTC_ERROR:"WebRTCError",CLIENT_ERROR:"ClientError",NO_PERMISSION:"NoPermission",OTHER_NOT_CAPABLE:"OtherNotCapable",NO_UI_ERROR:"NoUIShown",UNSUPPORTED_VERSION:"VersionUnsupported",CALLER_NOT_VISIBLE:"CallerNotVisible",CARRIER_BLOCKED:"CarrierBlocked",OTHER_CARRIER_BLOCKED:"OtherCarrierBlocked",CLIENT_ENCRYPTION_ERROR:"ClientEncryptionError"})}),null);
__d("WebrtcMessageType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({OFFER:"offer",ANSWER:"answer",ICE_CANDIDATE:"ice_candidate",OK:"ok",HANG_UP:"hang_up",OTHER_DISMISS:"other_dismiss",MESSAGE_ACK:"msg_ack",PRANSWER:"pranswer",PING:"ping",PING_ACK:"ping_ack",ICE_RESTART_OFFER:"icerestart_offer",ICE_RESTART_ANSWER:"icerestart_answer",OFFER_ACK:"offer_ack",ANSWER_ACK:"answer_ack",SET_VIDEO:"set_video",ACK:"ack",INVALID:"invalid",OFFER_NACK:"offer_nack",NACK:"nack",VIDEO_REQUEST:"video_request",SDP_UPDATE:"sdp_update",SWITCH_TO_MULTIWAY:"switch_to_multiway",ON_HOLD:"on_hold",NEGOTIATE:"negotiate",RING:"ring",PR_OFFER_ACK:"pr_offer_ack",NOTIFY_MEDIA_STATE:"notify_media_state",CLIENT_REPORTED_EVENT:"client_reported_event"})}),null);
__d("ZenonP2PMessageTypes",["WebrtcMessageType","CallEndReason"],(function(a,b,c,d,e,f){e.exports={ZenonP2PSignalingPayloadType:b("WebrtcMessageType"),ZenonP2PCallEndReason:b("CallEndReason")}}),null);
__d("ZenonP2PTranslatorUtils",["CurrentUser","ZenonDismissReason","ZenonP2PMessageTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ZenonDismissReason").ZenonDismissReason,h=b("ZenonP2PMessageTypes").ZenonP2PCallEndReason;a={p2pMessageToSignalingMessageHeader:function(a,c){var d=c.call_id,e=c.from;c=c.source;var f=e+":"+b("CurrentUser").getID();return{messageID:a,roomInfo:{name:f},remoteSignalingID:String(d),signalingID:String(d),protocol:"p2p",userInfo:{userID:b("CurrentUser").getID()},remoteInfo:{userID:e,deviceInfo:{deviceID:c}},retryCount:0}},fromP2PCallEndReason:function(a){a=i[a];return(a=a)!=null?a:g.CALL_ENDED},toP2PCallEndReason:function(a){a=j[a];return(a=a)!=null?a:h.HANGUP_CALL}};var i=Object.freeze((c={},c[h.HANGUP_CALL]=g.HANGUP_CALL,c[h.IGNORE_CALL]=g.IGNORE_CALL,c[h.IN_ANOTHER_CALL]=g.IN_ANOTHER_CALL,c[h.ACCEPT_AFTER_HANGUP]=g.ACCEPT_AFTER_HANGUP,c[h.NO_ANSWER_TIMEOUT]=g.NO_ANSWER_TIMEOUT,c[h.INCOMING_TIMEOUT]=g.INCOMING_TIMEOUT,c[h.OTHER_INSTANCE_HANDLED]=g.OTHER_INSTANCE_HANDLED,c[h.SIGNALING_MESSAGE_FAILED]=g.SIGNALING_MESSAGE_FAILED,c[h.CONNECTION_DROPPED]=g.CONNECTION_DROPPED,c[h.CLIENT_INTERRUPTED]=g.CLIENT_INTERRUPTED,c[h.WEBRTC_ERROR]=g.WEBRTC_ERROR,c[h.CLIENT_ERROR]=g.CLIENT_ERROR,c[h.NO_PERMISSION]=g.NO_PERMISSION,c[h.OTHER_NOT_CAPABLE]=g.OTHER_NOT_CAPABLE,c[h.NO_UI_ERROR]=g.NO_UI_ERROR,c[h.UNSUPPORTED_VERSION]=g.UNSUPPORTED_VERSION,c[h.CALLER_NOT_VISIBLE]=g.CALLER_NOT_VISIBLE,c[h.CARRIER_BLOCKED]=g.CARRIER_BLOCKED,c[h.OTHER_CARRIER_BLOCKED]=g.OTHER_CARRIER_BLOCKED,c[h.CLIENT_ENCRYPTION_ERROR]=g.CLIENT_ENCRYPTION_ERROR,c)),j=Object.freeze((d={},d[g.HANGUP_CALL]=h.HANGUP_CALL,d[g.IGNORE_CALL]=h.IGNORE_CALL,d[g.IN_ANOTHER_CALL]=h.IN_ANOTHER_CALL,d[g.ACCEPT_AFTER_HANGUP]=h.ACCEPT_AFTER_HANGUP,d[g.NO_ANSWER_TIMEOUT]=h.NO_ANSWER_TIMEOUT,d[g.INCOMING_TIMEOUT]=h.INCOMING_TIMEOUT,d[g.OTHER_INSTANCE_HANDLED]=h.OTHER_INSTANCE_HANDLED,d[g.SIGNALING_MESSAGE_FAILED]=h.SIGNALING_MESSAGE_FAILED,d[g.CONNECTION_DROPPED]=h.CONNECTION_DROPPED,d[g.CLIENT_INTERRUPTED]=h.CLIENT_INTERRUPTED,d[g.WEBRTC_ERROR]=h.WEBRTC_ERROR,d[g.CLIENT_ERROR]=h.CLIENT_ERROR,d[g.NO_PERMISSION]=h.NO_PERMISSION,d[g.OTHER_NOT_CAPABLE]=h.OTHER_NOT_CAPABLE,d[g.NO_UI_ERROR]=h.NO_UI_ERROR,d[g.UNSUPPORTED_VERSION]=h.UNSUPPORTED_VERSION,d[g.CALLER_NOT_VISIBLE]=h.CALLER_NOT_VISIBLE,d[g.CARRIER_BLOCKED]=h.CARRIER_BLOCKED,d[g.OTHER_CARRIER_BLOCKED]=h.OTHER_CARRIER_BLOCKED,d[g.CLIENT_ENCRYPTION_ERROR]=h.CLIENT_ENCRYPTION_ERROR,d));e.exports=a}),null);
__d("ZenonP2PMessageTranslator",["errorCode","ZenonDismissReason","ZenonP2PMessageTypes","ZenonP2PTranslatorUtils","ZenonParticipantState","ZenonSignalingMessage"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ZenonDismissReason").ZenonDismissReason,i=b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType,j=b("ZenonParticipantState").ZenonParticipantState,k=0,l=3;a={toP2PMessage:function(a){__p&&__p();var b=a.getHeader();a=a.getEvents();if(a.length===0)throw new Error("Unexpected Translation: called toP2PMessage with empty signaling events");switch(a[0].eventName){case"answerIntentRequest":return t(b);case"inviteResponse":if(a[0].status==="NOT_SUPPORTED")return r(b);else return q(b);case"terminateRequest":return s(b,a[0]);default:return null}},toSignalingMessage:function(a){switch(a.type){case i.OFFER:return m(a);case i.HANG_UP:return n(a);case i.OTHER_DISMISS:return o(a);case i.ICE_CANDIDATE:return p(a);default:return null}}};function m(a){__p&&__p();var c=b("ZenonP2PTranslatorUtils").p2pMessageToSignalingMessageHeader(String(a.msg_id),a),d=[],e=a.escalation_conference_name,f=a.videoon,g=a.from;e={eventName:"inviteRequest",roomInfo:{name:e,context:{peerID:g,groupThreadID:null,serverInfoData:null}},inviterID:g,otherParticipants:[],isRemoteOfferer:!0,requestingVideo:f};d.push(e);f={eventName:"remoteSdpRequest",sdp:{sdp:a.sdp,type:"offer",version:0},mediaStates:{tracks:[],version:0},negotiateType:!1};d.push(f);e={eventName:"capabilitiesRequest",capabilities:{addParticipantEnabled:a.offer_escalation_support}};d.push(e);f=new Map([[g,j.CONNECTED]]);a={eventName:"participantUpdateRequest",participantStates:f,versionId:k};d.push(a);return new(b("ZenonSignalingMessage"))(c,d)}function n(a){var c=b("ZenonP2PTranslatorUtils").p2pMessageToSignalingMessageHeader(String(a.msg_id),a),d=[],e=a.reason;a=a.from;e={eventName:"terminateRequest",reason:b("ZenonP2PTranslatorUtils").fromP2PCallEndReason(e),shouldInformPeer:!0,fromJoinResponse:!1};d.push(e);e=new Map([[a,j.DISCONNECTED]]);a={eventName:"participantUpdateRequest",participantStates:e,versionId:l};d.push(a);return new(b("ZenonSignalingMessage"))(c,d)}function o(a){a=b("ZenonP2PTranslatorUtils").p2pMessageToSignalingMessageHeader(String(a.msg_id),a);var c=[],d={eventName:"terminateRequest",reason:h.OTHER_INSTANCE_HANDLED,shouldInformPeer:!0,fromJoinResponse:!1};c.push(d);return new(b("ZenonSignalingMessage"))(a,c)}function p(a){var c=b("ZenonP2PTranslatorUtils").p2pMessageToSignalingMessageHeader(String(a.msg_id),a),d=[],e=a.sdp,f=a.sdp_line_idx;a=a.sdp_mid;e={candidateSdpString:e,sdpMLineIndex:f,sdpMid:a};f={eventName:"iceCandidateRequest",iceCandidates:[e]};d.push(f);return new(b("ZenonSignalingMessage"))(c,d)}function q(a){if(a.signalingID===null)throw new Error("Unexpected P2P Translation: expected signalingID to not be null");return{type:"offer_ack",ack_id:parseInt(a.messageID,10),call_id:parseInt(a.signalingID,10),msg_id:parseInt(a.messageID,10)}}function r(a){if(a.signalingID===null)throw new Error("Unexpected P2P Translation: expected signalingID to not be null");return{type:"offer_nack",ack_id:parseInt(a.messageID,10),call_id:parseInt(a.signalingID,10),msg_id:parseInt(a.messageID,10),error_code:1356043}}function s(a,c){if(a.signalingID===null)throw new Error("Unexpected P2P Translation: expected signalingID to not be null");var d=parseInt(a.messageID,10);a=parseInt(a.signalingID,10);c=b("ZenonP2PTranslatorUtils").toP2PCallEndReason(c.reason);return{reason:c,call_id:a,msg_id:d,type:"hang_up",version:0}}function t(a){if(a.signalingID===null)throw new Error("Unexpected P2P Translation: expected signalingID to not be null");var b=parseInt(a.signalingID,10);a=parseInt(a.messageID,10);return{call_id:b,msg_id:a,type:"other_dismiss"}}e.exports=a}),null);
__d("ZenonP2PMessageValidator",["ZenonP2PMessageTypes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType;a={validateAndTransformP2PMessage:function(a){__p&&__p();a=h(a);if(a){var b=a.msg_type;switch(b){case g.OFFER:return j(a);case g.HANG_UP:return k(a);case g.ICE_CANDIDATE:return i(a);case g.OTHER_DISMISS:return l(a)}}return null}};function h(a){a=JSON.parse(a);var b=a.from,c=a.call_id,d=a.id,e=a.msg_type,f=a.payload,g=a.source;a=a.type;if(b&&c&&f){c={call_id:c,from:b,id:d,msg_type:e,payload:f,source:g,type:a};return c}else throw Error("P2P message does not have valid from, call_id, and payload fields")}function i(a){var b=a.payload,c=a.from;a=a.source;b=JSON.parse(b);var d=b.call_id,e=b.capability,f=b.label,h=b.msg_id,i=b.version,j=b.sdp,k=b.sdp_line_idx;b=b.sdp_mid;c={from:c,source:a,call_id:d,capability:e,label:f,msg_id:h,sdp:j,sdp_line_idx:k,sdp_mid:b,type:g.ICE_CANDIDATE,version:i};return c}function j(a){__p&&__p();var b,c,d,e,f=a.payload,h=a.from;a=a.source;f=JSON.parse(f);var i=f.call_id,j=f.calltype,k=f.capability;b=(b=f.escalation_conference_name)!=null?b:null;c=(c=f.experiments)!=null?c:[];d=(d=f.extraParams)!=null?d:[];e=(e=f.fbexp)!=null?e:"";var l=f.handlescollision!==void 0?f.handlescollision:!1,m=f.offer_escalation_support!==void 0?f.offer_escalation_support:!1,n=f.msg_id,o=f.sdp;f=f.videoon;i={call_id:i,calltype:j,capability:k,escalation_conference_name:b,experiments:c,extraParams:d,fbexp:e,from:h,handlescollision:l,msg_id:n,sdp:o,source:a,offer_escalation_support:m,type:g.OFFER,videoon:f};return i}function k(a){var b=a.payload,c=a.from;a=a.source;b=JSON.parse(b);var d=b.call_id,e=b.capability,f=b.reason,h=b.msg_id;b=b.subreason;d={call_id:d,capability:e,from:c,msg_id:h,reason:f,subreason:b,source:a,type:g.HANG_UP};return d}function l(a){var b=a.payload,c=a.from;a=a.source;b=JSON.parse(b);var d=b.call_id,e=b.capability;b=b.msg_id;d={call_id:d,capability:e,from:c,msg_id:b,source:a,type:g.OTHER_DISMISS};return d}e.exports=a}),null);
__d("RTWebSignalingListener",["FBMqttChannel","ZenonDebugLogger","ZenonMWMessageTranslator","ZenonP2PMessageTranslator","ZenonP2PMessageValidator","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){}var c=a.prototype;c.subscribe=function(a,c,d){__p&&__p();var e=this;b("FBMqttChannel").subscribe("/webrtc",function(d){var f=b("ZenonP2PMessageValidator").validateAndTransformP2PMessage(d);e.$1(d,c);if(f){d=b("ZenonP2PMessageTranslator").toSignalingMessage(f);d&&a(d)}});b("FBMqttChannel").subscribe("/rtc_multi",function(c){var f=JSON.parse(c);b("ZenonDebugLogger").getInstance().logMWMessage("RECEIVED [MQTT]",f);f=b("ZenonMWMessageTranslator").toSignalingMessage(f);f&&(a(f),d&&e.$2(c,d))})};c.unsubscribe=function(){b("FBMqttChannel").unsubscribeAll("/webrtc"),b("FBMqttChannel").unsubscribeAll("/rtc_multi")};c.$1=function(a,c){try{a=JSON.parse(a);c(a)}catch(a){b("recoverableViolation")("Signaling messages should be json parsable. error:"+a,"rtweb")}};c.$2=function(a,c){try{a=JSON.parse(a);c(a)}catch(a){b("recoverableViolation")("Signaling messages should be json parsable. error:"+a,"rtweb")}};return a}();e.exports=a}),null);