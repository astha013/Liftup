import {
  __commonJS
} from "./chunk-PR4QN5HX.js";

// node_modules/@cometchat-pro/chat/CometChat.js
var require_CometChat = __commonJS({
  "node_modules/@cometchat-pro/chat/CometChat.js"(exports, module) {
    !function(t, e) {
      if ("object" == typeof exports && "object" == typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        var n = e();
        for (var o in n) ("object" == typeof exports ? exports : t)[o] = n[o];
      }
    }(window, function() {
      return function(n) {
        var o = {};
        function s(t) {
          if (o[t]) return o[t].exports;
          var e = o[t] = { i: t, l: false, exports: {} };
          return n[t].call(e.exports, e, e.exports, s), e.l = true, e.exports;
        }
        return s.m = n, s.c = o, s.d = function(t, e, n2) {
          s.o(t, e) || Object.defineProperty(t, e, { enumerable: true, get: n2 });
        }, s.r = function(t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: true });
        }, s.t = function(e, t) {
          if (1 & t && (e = s(e)), 8 & t) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var n2 = /* @__PURE__ */ Object.create(null);
          if (s.r(n2), Object.defineProperty(n2, "default", { enumerable: true, value: e }), 2 & t && "string" != typeof e) for (var o2 in e) s.d(n2, o2, (function(t2) {
            return e[t2];
          }).bind(null, o2));
          return n2;
        }, s.n = function(t) {
          var e = t && t.__esModule ? function() {
            return t.default;
          } : function() {
            return t;
          };
          return s.d(e, "a", e), e;
        }, s.o = function(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, s.p = "", s(s.s = 38);
      }([function(t, e, n) {
        "use strict";
        e.__esModule = true, e.validateConversationType = e.validateUpdateUser = e.validateCreateUser = e.validateMessage = e.validateChatType = e.validateMsgId = e.validateArray = e.validateHideMessagesFromBlockedUsers = e.validateId = e.validateCreateGroup = e.validateJoinGroup = e.validateUpdateGroup = e.validateScope = e.isAudio = e.isVideo = e.isImage = e.getUpdatedSettings = e.getAppSettings = e.getCurrentTime = e.Logger = e.createUidFromJid = e.format = e.getOrdinalSuffix = e.isFalsy = e.isTruthy = e.isObject = e.getJidHost = e.getChatHost = void 0;
        var o = n(14), i = n(1), s = n(6), a = n(2), E = n(16), c = n(17), u = n(19), r = n(3), S = n(13);
        function l(t2) {
          return null != t2 && ("string" == typeof t2 && (t2 = t2.trim()), "object" == typeof t2 && 0 === Object.keys(t2).length && (t2 = void 0)), ["", 0, "0", false, null, "null", void 0, "undefined"].includes(t2);
        }
        function p(t2) {
          for (var o2 = [], e2 = 1; e2 < arguments.length; e2++) o2[e2 - 1] = arguments[e2];
          return t2.split("%s").reduce(function(t3, e3, n2) {
            return t3 + e3 + (o2[n2] || "");
          }, "");
        }
        e.getChatHost = function(t2) {
          return t2[i.APP_SETTINGS.KEYS.CHAT_HOST_OVERRIDE] ? t2[i.APP_SETTINGS.KEYS.CHAT_HOST_OVERRIDE] : t2[i.APP_SETTINGS.KEYS.CHAT_HOST_APP_SPECIFIC] ? t2[i.APP_SETTINGS.KEYS.CHAT_HOST_APP_SPECIFIC] : t2[i.APP_SETTINGS.KEYS.CHAT_HOST];
        }, e.getJidHost = function(t2) {
          return t2[i.APP_SETTINGS.KEYS.JID_HOST_OVERRIDE] ? t2[i.APP_SETTINGS.KEYS.JID_HOST_OVERRIDE] : t2[i.APP_SETTINGS.KEYS.CHAT_HOST];
        }, e.isObject = function(t2) {
          return t2 instanceof Object && t2.constructor === Object;
        }, e.isTruthy = function(t2) {
          return [true, 1, "1", "true", "TRUE"].includes(t2);
        }, e.isFalsy = l, e.getOrdinalSuffix = function(t2) {
          var e2 = t2 % 10, n2 = t2 % 100;
          return 1 == e2 && 11 != n2 ? t2 + "st" : 2 == e2 && 12 != n2 ? t2 + "nd" : 3 == e2 && 13 != n2 ? t2 + "rd" : t2 + "th";
        }, e.format = p, e.createUidFromJid = function(t2) {
          return t2.substring(t2.lastIndexOf("]") + 1, t2.lastIndexOf("@"));
        };
        var C = function() {
          function t2() {
          }
          return t2.log = function(t3, e2) {
          }, t2.error = function(t3, e2) {
          }, t2.info = function(t3, e2) {
          }, t2;
        }();
        function T() {
          return new Promise(function(e2, n2) {
            s.makeApiCall("appSettings").then(function(t2) {
              o.LocalStorage.getInstance().set(i.LOCAL_STORE.KEY_APP_SETTINGS, t2.data), t2.data.MODE && r.CometChat.setMode(t2.data.MODE), e2(t2.data);
            }, function(t2) {
              n2(new a.CometChatException(t2.error));
            });
          });
        }
        e.Logger = C, e.getCurrentTime = function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, e.getAppSettings = function() {
          return new Promise(function(e2, n2) {
            o.LocalStorage.getInstance().get(i.LOCAL_STORE.KEY_APP_SETTINGS).then(function(t2) {
              l(t2) ? T().then(function(t3) {
                e2(t3);
              }, function(t3) {
                n2(t3);
              }) : e2(t2);
            }, function(t2) {
              n2(t2);
            });
          });
        }, e.getUpdatedSettings = T, e.isImage = function(t2) {
          var e2;
          return t2.type && t2.type.toLowerCase().includes("image") && (e2 = true), e2;
        }, e.isVideo = function(t2) {
          var e2;
          return t2.type && t2.type.toLowerCase().includes("video") && (e2 = true), e2;
        }, e.isAudio = function(t2) {
          var e2;
          return t2.type && t2.type.toLowerCase().includes("audio") && (e2 = true), e2;
        }, e.validateScope = function(t2) {
          return typeof t2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "SCOPE", "SCOPE", "Scope"))) : l(t2) ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID), "SCOPE", "SCOPE", "scope", "scope"))) : t2 != r.CometChat.GROUP_MEMBER_SCOPE.ADMIN && t2 != r.CometChat.GROUP_MEMBER_SCOPE.MODERATOR && t2 != r.CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT ? new a.CometChatException(i.GroupErrors.INVALID_SCOPE) : void 0;
        }, e.validateUpdateGroup = function(t2) {
          return t2.hasOwnProperty(i.GroupConstants.KEYS.GUID) ? typeof t2[i.GroupConstants.KEYS.GUID] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID"))) : l(t2[i.GroupConstants.KEYS.GUID]) ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID"))) : t2.hasOwnProperty(i.GroupConstants.KEYS.NAME) && "" === t2[i.GroupConstants.KEYS.NAME] ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_STRING), "GROUP_NAME", "GROUP_NAME", "Group name"))) : void 0 : new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")));
        }, e.validateJoinGroup = function(t2, e2, n2) {
          if (typeof t2 == i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.OBJECT) {
            if (!t2.hasOwnProperty(i.GroupConstants.KEYS.GUID)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")));
            if (typeof t2[i.GroupConstants.KEYS.GUID] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
            if (l(t2[i.GroupConstants.KEYS.GUID])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")));
            if (!t2.hasOwnProperty(i.GroupConstants.KEYS.TYPE)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_TYPE", "GROUP_TYPE", "Group type", "Group type")));
            if (typeof t2[i.GroupConstants.KEYS.TYPE] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
            if (l(t2[i.GroupConstants.KEYS.TYPE])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
            if (t2[i.GroupConstants.KEYS.TYPE].toLowerCase() != r.CometChat.GROUP_TYPE.PUBLIC && t2[i.GroupConstants.KEYS.TYPE].toLowerCase() != r.CometChat.GROUP_TYPE.PASSWORD && t2[i.GroupConstants.KEYS.TYPE].toLowerCase() != r.CometChat.GROUP_TYPE.PROTECTED && t2[i.GroupConstants.KEYS.TYPE].toLowerCase() != r.CometChat.GROUP_TYPE.PRIVATE) return new a.CometChatException(i.GroupErrors.INVALID_GROUP_TYPE);
            if (t2[i.GroupConstants.KEYS.TYPE].toLowerCase() == r.CometChat.GROUP_TYPE.PASSWORD) {
              if (!t2.hasOwnProperty(i.GroupConstants.KEYS.PASSWORD)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PASSWORD_COMPULSORY), "PASSWORD", "PASSWORD")));
              if (typeof t2[i.GroupConstants.KEYS.PASSWORD] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
              if (l(t2[i.GroupConstants.KEYS.PASSWORD])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")));
            }
          } else {
            if (void 0 !== t2) {
              if (typeof t2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
              if (l(t2)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")));
            }
            if (void 0 !== e2) {
              if (typeof e2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
              if (l(e2)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
              if (e2.toLowerCase() != r.CometChat.GROUP_TYPE.PUBLIC && e2.toLowerCase() != r.CometChat.GROUP_TYPE.PASSWORD && e2.toLowerCase() != r.CometChat.GROUP_TYPE.PROTECTED && e2.toLowerCase() != r.CometChat.GROUP_TYPE.PRIVATE) return new a.CometChatException(i.GroupErrors.INVALID_GROUP_TYPE);
              if (e2.toLowerCase() == r.CometChat.GROUP_TYPE.PASSWORD) {
                if (typeof n2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
                if (l(n2)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")));
              }
            }
          }
        }, e.validateCreateGroup = function(t2) {
          if (!t2.hasOwnProperty(i.GroupConstants.KEYS.GUID)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")));
          if (typeof t2[i.GroupConstants.KEYS.GUID] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
          if (l(t2[i.GroupConstants.KEYS.GUID])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")));
          if (!t2.hasOwnProperty(i.GroupConstants.KEYS.NAME)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_NAME", "GROUP_NAME", "Group name", "Group name")));
          if (typeof t2[i.GroupConstants.KEYS.NAME] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_NAME", "GROUP_NAME", "Group name")));
          if (l(t2[i.GroupConstants.KEYS.NAME])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_NAME", "GROUP_NAME", "name", "name")));
          if (!t2.hasOwnProperty(i.GroupConstants.KEYS.TYPE)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_TYPE", "GROUP_TYPE", "Group type", "Group type")));
          if (typeof t2[i.GroupConstants.KEYS.TYPE] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
          if (l(t2[i.GroupConstants.KEYS.TYPE])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
          if (t2[i.GroupConstants.KEYS.TYPE].toLowerCase() != r.CometChat.GROUP_TYPE.PUBLIC && t2[i.GroupConstants.KEYS.TYPE].toLowerCase() != r.CometChat.GROUP_TYPE.PASSWORD && t2[i.GroupConstants.KEYS.TYPE].toLowerCase() != r.CometChat.GROUP_TYPE.PROTECTED && t2[i.GroupConstants.KEYS.TYPE].toLowerCase() != r.CometChat.GROUP_TYPE.PRIVATE) return new a.CometChatException(i.GroupErrors.INVALID_GROUP_TYPE);
          if (t2[i.GroupConstants.KEYS.TYPE].toLowerCase() == r.CometChat.GROUP_TYPE.PASSWORD) {
            if (!t2.hasOwnProperty(i.GroupConstants.KEYS.PASSWORD)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PASSWORD_COMPULSORY), "PASSWORD", "PASSWORD")));
            if (typeof t2[i.GroupConstants.KEYS.PASSWORD] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
            if (l(t2[i.GroupConstants.KEYS.PASSWORD])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")));
          }
          if (t2.hasOwnProperty(i.GroupConstants.KEYS.TAGS)) {
            if (!Array.isArray(t2[i.GroupConstants.KEYS.TAGS])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_AN_ARRAY), "GROUP_TAGS", "GROUP_TAGS", "Group tags")));
            if (0 === t2[i.GroupConstants.KEYS.TAGS].length) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_ARRAY), "GROUP_TAGS", "GROUP_TAGS", "Group tags")));
          }
        }, e.validateId = function(t2, e2) {
          if ("user" === e2) {
            if (typeof t2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID")));
            if (l(t2)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID), "UID", "UID", "UID", "UID")));
          }
          if ("group" === e2) {
            if (typeof t2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
            if (l(t2)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")));
          }
        }, e.validateHideMessagesFromBlockedUsers = function(t2) {
          if (typeof t2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_BOOLEAN), "HIDE_MESSAGES_FROM_BLOCKED_USERS", "HIDE_MESSAGES_FROM_BLOCKED_USERS", "hideMessagesFromBlockedUsers")));
        }, e.validateArray = function(t2, e2) {
          var n2 = "List should be an array.";
          return n2 = "blockUsers" === e2 ? "blockUsers() method accepts an array of users." : "unblockUsers" === e2 ? "unblockUsers() method accepts an array of users." : "groupMembers" === e2 ? "addMembersToGroup() method accepts members list as an array of users." : "addMembersToGroup() method accepts bannedMembers list as an array of users.", typeof t2 != i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.OBJECT ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_ARRAY), "USER_LIST", "USER_LIST", n2))) : Array.isArray(t2) ? void 0 : new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_ARRAY), "USER_LIST", "USER_LIST", n2)));
        }, e.validateMsgId = function(t2) {
          return isNaN(t2) ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "Message Id"))) : l(t2) ? new a.CometChatException(S.ERRORS.PARAMETER_MISSING) : void 0;
        }, e.validateChatType = function(t2) {
          return typeof t2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type"))) : l(t2) ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID), "RECEIVER_TYPE", "RECEIVER_TYPE", "receiver type", "receiver type"))) : t2 != i.MessageConstatnts.RECEIVER_TYPE.GROUP && t2 != i.MessageConstatnts.RECEIVER_TYPE.USER ? new a.CometChatException(i.MessageErrors.INVALID_RECEIVER_TYPE) : void 0;
        }, e.validateMessage = function(t2) {
          var e2 = t2;
          if (typeof e2.getReceiverId() !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_ID", "RECEIVER_ID", "Receiver Id")));
          if (l(e2.getReceiverId())) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID), "RECEIVER_ID", "RECEIVER_ID", "receiver id", "receiver id")));
          if (typeof e2.getReceiverType() !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver Type")));
          if (l(e2.getReceiverType())) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID), "RECEIVER_TYPE", "RECEIVER_TYPE", "receiver type", "receiver type")));
          if (e2.getReceiverType() != i.MessageConstatnts.RECEIVER_TYPE.GROUP && e2.getReceiverType() != i.MessageConstatnts.RECEIVER_TYPE.USER) return new a.CometChatException(i.MessageErrors.INVALID_RECEIVER_TYPE);
          if (t2 instanceof E.TextMessage) {
            var n2 = t2;
            if (typeof n2.getText() !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "MESSAGE_TEXT", "MESSAGE_TEXT", "Message text")));
            if ("" === n2.getText().trim()) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_STRING), "MESSAGE_TEXT", "MESSAGE_TEXT", "Message text")));
          }
          if (t2 instanceof c.MediaMessage) {
            var o2 = t2;
            if (o2.getData() && o2.getData().hasOwnProperty("attachments")) for (var s2 = o2.getAttachments(), r2 = 0; r2 < s2.length; r2++) {
              if (!s2[r2].getExtension()) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MISSING_KEY), "extension", "Attachment")));
              if (!s2[r2].getMimeType()) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MISSING_KEY), "mimeType", "Attachment")));
              if (!s2[r2].getName()) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MISSING_KEY), "name", "Attachment")));
              if (!s2[r2].getUrl()) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MISSING_KEY), "url", "Attachment")));
            }
            if (o2.hasOwnProperty("files")) {
              for (r2 = 0; r2 < o2.files.length; r2++) if (!(o2.files[r2] instanceof Blob)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_BLOB), "MEDIA_OBJECT", "MEDIA_OBJECT", "Media object")));
            }
          }
          if (t2 instanceof u.CustomMessage && l(t2.getCustomData())) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID), "CUSTOM_DATA", "CUSTOM_DATA", "custom data", "custom data")));
        }, e.validateCreateUser = function(t2) {
          if (!t2.hasOwnProperty(i.UserConstants.UID)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "UID", "UID", "UID", "UID")));
          if (typeof t2[i.UserConstants.UID] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID")));
          if (l(t2[i.UserConstants.UID])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_USER_PROPERTY), "UID", "UID", "UID", "UID")));
          if (!t2.hasOwnProperty(i.UserConstants.NAME)) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "USER_NAME", "USER_NAME", "User name", "User name")));
          if (typeof t2[i.UserConstants.NAME] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "USER_NAME", "USER_NAME", "User name")));
          if (l(t2[i.UserConstants.NAME])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_USER_PROPERTY), "USER_NAME", "USER_NAME", "name", "name")));
          if (t2.hasOwnProperty(i.UserConstants.AVATAR) && "" === t2[i.UserConstants.AVATAR]) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_STRING), "USER_AVATAR", "USER_AVATAR", "User avatar")));
          if (t2.hasOwnProperty(i.UserConstants.META_DATA) && "" === t2[i.UserConstants.META_DATA]) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_STRING), "USER_METADATA", "USER_METADATA", "User metadata")));
          if (t2.hasOwnProperty(i.UserConstants.LINK) && "" === t2[i.UserConstants.LINK]) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_STRING), "USER_LINK", "USER_LINK", "User link")));
          if (t2.hasOwnProperty(i.UserConstants.STATUS_MESSAGE) && "" === t2[i.UserConstants.STATUS_MESSAGE]) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_STRING), "USER_STATUS_MESSAGE", "USER_STATUS_MESSAGE", "User status message")));
          if (t2.hasOwnProperty(i.UserConstants.ROLE) && "" === t2[i.UserConstants.ROLE]) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_STRING), "USER_ROLE", "USER_ROLE", "User role")));
          if (t2.hasOwnProperty(i.UserConstants.TAGS)) {
            if (!Array.isArray(t2[i.UserConstants.TAGS])) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_AN_ARRAY), "USER_TAGS", "USER_TAGS", "User tags")));
            if (0 === t2[i.UserConstants.TAGS].length) return new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_ARRAY), "USER_TAGS", "USER_TAGS", "User tags")));
          }
        }, e.validateUpdateUser = function(t2) {
          return t2.hasOwnProperty(i.UserConstants.UID) ? typeof t2[i.UserConstants.UID] !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID"))) : l(t2[i.UserConstants.UID]) ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID_USER_PROPERTY), "UID", "UID", "UID", "UID"))) : t2.hasOwnProperty(i.UserConstants.NAME) && "" === t2[i.UserConstants.NAME] ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.EMPTY_STRING), "USER_NAME", "USER_NAME", "User name"))) : void 0 : new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.PARAMETER_COMPULSORY), "UID", "UID", "UID", "UID")));
        }, e.validateConversationType = function(t2) {
          return typeof t2 !== i.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.MUST_BE_A_STRING), "CONVERSATION_TYPE", "CONVERSATION_TYPE", "Conversation type"))) : l(t2) ? new a.CometChatException(JSON.parse(p(JSON.stringify(i.GENERAL_ERROR.INVALID), "CONVERSATION_TYPE", "CONVERSATION_TYPE", "conversation type", "conversation type"))) : (t2 = t2.toLowerCase()) != r.CometChat.RECEIVER_TYPE.USER && t2 != r.CometChat.RECEIVER_TYPE.GROUP ? new a.CometChatException(i.ConversationErrors.INVALID_CONVERSATION_TYPE) : void 0;
        };
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.ONLINE_MEMBER_COUNT_API = e.JWT_API = e.ProsodyApiErrors = e.PROSODY_API = e.API_ERROR_CODES = e.SESSION_STORE = e.CONNECTION_STATUS = e.COMMON_UTILITY_CONSTANTS = e.APP_SETTINGS = e.PresenceConstatnts = e.FeatureRestrictionErrors = e.MessageErrors = e.ExtensionErrors = e.ConversationErrors = e.GroupErrors = e.UserErrors = e.ReceiptErrors = e.GENERAL_ERROR = e.PARAMETER_ERROR = e.CALL_ERROR = e.Errors = e.UserConstants = e.GroupMemersConstans = e.GroupConstants = e.CallConstants = e.BlockedUsersConstants = e.ActionConstatnts = e.TYPING_NOTIFICATION = e.MessageCategory = e.ATTACHMENTS_CONSTANTS = e.MessageConstatnts = e.READ_RECEIPTS = e.DELIVERY_RECEIPTS = e.ResponseConstants = e.LOCAL_STORE = e.ANALYTICS = e.WS = e.SDKHeader = e.APPINFO = e.GROUP_MEMBER_SCOPE = e.GroupMemberScope = e.GROUP_TYPE = e.GroupType = e.CALLING_COMPONENT_VERSION = e.DEFAULT_VALUES = e.constants = void 0;
        var o, s, r, i = n(2);
        e.constants = { DEFAULT_STORE: "cometchat", MSG_VER_PRE: "store-ver-pre", MSG_VER_POST: "store-ver-post" }, e.DEFAULT_VALUES = { ZERO: 0, MSGS_LIMIT: 30, MSGS_MAX_LIMIT: 100, USERS_LIMIT: 30, USERS_MAX_LIMIT: 100, GROUPS_LIMIT: 30, GROUPS_MAX_LIMIT: 100, CONVERSATION_MAX_LIMIT: 50, CALL_TIMEOUT: 45, DEFAULT_MSG_ID: 0, DEFAULT_MAX_TYPING_INDICATOR_LIMIT: 5, REGION_DEFAULT: "eu", REGION_DEFAULT_EU: "eu", REGION_DEFAULT_US: "us", REGION_DEFAULT_IN: "in", REGION_DEFAULT_PRIVATE: "private" }, e.CALLING_COMPONENT_VERSION = 5, (o = e.GroupType || (e.GroupType = {})).Public = "public", o.Private = "private", o.Protected = "protected", o.Password = "password", e.GROUP_TYPE = { PUBLIC: "public", PRIVATE: "private", PROTECTED: "password", PASSWORD: "password" }, (s = e.GroupMemberScope || (e.GroupMemberScope = {})).Admin = "admin", s.Moderator = "moderator", s.Member = "member", e.GROUP_MEMBER_SCOPE = { ADMIN: "admin", MODERATOR: "moderator", PARTICIPANT: "participant" }, e.APPINFO = { platform: "WEB", sdkVersion: "v3.0.12", apiVersion: "v3.0", sdkVersionWithUnderScore: "3_0_12" }, e.SDKHeader = { platform: "javascript", sdkVersion: "3.0.12", sdk: "%s@%s" }, e.WS = { CONVERSATION: { TYPE: { CHAT: "chat", GROUP_CHAT: "groupchat" } } }, e.ANALYTICS = { analyticsHost: "metrics-%s.cometchat.io", analyticsVersion: "v1" }, e.LOCAL_STORE = { COMMON_STORE: "common_store", MESSAGE_LISTENERS_LIST: "message_listeners_list", USERS_STORE: "users_store", MESSAGES_STORE: "messages_store", KEYS_STORE: "keys_store", STORE_STRING: "%s:%s", KEY_STRING: "%s/%s", KEY_USER: "user", KEY_APP_SETTINGS: "app_settings", KEY_APP_ID: "appId", KEY_DEVICE_ID: "deviceId", KEY_MESSAGE_LISTENER_LIST: "all" }, e.ResponseConstants = { RESPONSE_KEYS: { KEY_DATA: "data", KEY_META: "meta", KEY_CURSOR: "cursor", KEY_ACTION: "action", KEY_MESSAGE: "message", KEY_ERROR: "error", KEY_ERROR_DETAILS: "details", KEY_ERROR_CODE: "code", KEY_ERROR_MESSAGE: "message", KEY_AUTH_TOKEN: "authToken", KEY_WS_CHANNEL: "wsChannel", KEY_IDENTITY: "identity", KEY_SERVICE: "identity", KEY_ENTITIES: "entities", KEY_ENTITITY: "entity", KEY_ENTITYTYPE: "entityType", KEY_ATTACHMENTS: "attachments", CODE_REQUEST_OK: 200, CODE_BAD_REQUEST: 401, UNREAD_UNDELIVERED_KEYS: { ENTITY: "entity", ENTITY_TYPE: "entityType", ENTITY_Id: "entityId", COUNT: "count" }, GROUP_MEMBERS_RESPONSE: { SUCCESS: "success", ERROR: "error", MESSAGE: "message" }, KEY_ENTITY_TYPE: { USER: "user", GROUP: "group" } } }, e.DELIVERY_RECEIPTS = { RECEIVER_ID: "receiverId", RECEIVER_TYPE: "type", RECIPIENT: "recipient", MESSAGE_ID: "messageId", RECEIVED: "delivered", DELIVERED_AT: "deliveredAt", ID: "id", TIME: "time", DELIVERED_TO_ME_AT: "deliveredToMeAt" }, e.READ_RECEIPTS = { RECEIVER_ID: "receiverId", RECEIVER_TYPE: "type", RECIPIENT: "recipient", MESSAGE_ID: "messageId", READ: "read", READ_AT: "readAt", ID: "id", TIME: "time", READ_BY_ME_AT: "readByMeAt" }, e.MessageConstatnts = { TYPE: { TEXT: "text", MEDIA: "media", IMAGE: "image", VIDEO: "video", AUDIO: "audio", FILE: "file", CUSTOM: "custom" }, CATEGORY: { MESSAGE: "message", ACTION: "action", CALL: "call", CUSTOM: "custom" }, RECEIVER_TYPE: { USER: "user", GROUP: "group" }, KEYS: { ATTATCHMENT: "attatchment", ATTATCHMENTS: "attachments", ACTION: "action", TYPE: "type", DATA: "data", ID: "id", MUID: "muid", SENDER: "sender", RECEIVER: "receiver", RECEIVER_ID: "receiverId", CATEGORY: "category", RECEIVER_TYPE: "receiverType", SENT_AT: "sentAt", STATUS: "status", TEXT: "text", URL: "url", METADATA: "metadata", RECEIPTS: "receipts", MY_RECEIPTS: "myReceipt", CUSTOM_DATA: "customData", CUSTOM_SUB_TYPE: "subType", RESOURCE: "resource" }, KNOWN_MEDIA_TYPE: { IMAGE: [], VIDEO: [], AUDIO: [], FILE: [] }, PAGINATION: { AFFIX: { APPEND: "append", PREPEND: "prepend" }, CURSOR_FILEDS: { ID: "id", SENT_AT: "sentAt" }, CURSOR_AFFIX_DEFAULT: "prepend", CURSOR_FIELD_DEFAULT: "sentAt", KEYS: { PER_PAGE: "per_page", CURSOR_AFFIX: "cursorAffix", AFFIX: "affix", CURSOR_FIELD: "cursorField", CURSOR_VALUE: "cursorValue", UID: "uid", SENT_AT: "sentAt", ID: "id", CURRENT_PAGE: "page", UNREAD: "unread", HIDE_MESSAGES_FROM_BLOCKED_USER: "hideMessagesFromBlockedUsers", SEARCH_KEY: "searchKey", ONLY_UPDATES: "onlyUpdates", UPDATED_AT: "updatedAt", CATEGORY: "category", CATEGORIES: "categories", TYPE: "type", TYPES: "types", HIDE_REPLIES: "hideReplies", HIDE_DELETED_MESSAGES: "hideDeleted", WITH_TAGS: "withTags", TAGS: "tags" } } }, e.ATTACHMENTS_CONSTANTS = { KEYS: { EXTENSION: "extension", MIME_TYPE: "mimeType", NAME: "name", SIZE: "size", URL: "url" } }, (r = e.MessageCategory || (e.MessageCategory = {})).ACTION = "action", r.MESSAGE = "message", r.CALL = "call", r.CUSTOM = "custom", e.TYPING_NOTIFICATION = { RECEIVER_ID: "receiverId", RECEIVER_TYPE: "receiverType", META: "metadata", KEYS: { TYPING_NOTIFICATION: "typingNotification", TIMESTAMP: "timestamp" }, ACTIONS: { STARTED: "started", ENDED: "ended" } }, e.ActionConstatnts = { ACTION_SUBJECTS: { ACTION_ON: "on", ACTION_BY: "by", ACTION_FOR: "for" }, ACTION_ENTITY_TYPE: { GROUP_USER: "groupuser", USER: "user", GROUP: "group", MESSAGE: "message" }, ACTION_KEYS: { ACTION_CREATED: "created", ACTION_UPDATED: "updated", ACTION_DELETED: "deleted", ENTITIES: "entities", ENTITY: "entity", ENTITY_TYPE: "entityType", TYPE_MEMBER_JOINED: "joined", TYPE_MEMBER_LEFT: "left", TYPE_MEMBER_KICKED: "kicked", TYPE_MEMBER_BANNED: "banned", TYPE_MEMBER_UNBANNED: "unbanned", TYPE_MEMBER_INVITED: "invited", TYPE_MEMBER_ADDED: "added", ACTION_SCOPE_CHANGED: "scopeChanged", ACTION_TYPE_USER: "user", ACTION_TYPE_GROUP: "group", ACTION_TYPE_GROUP_MEMBER: "groupMember", TYPE_MESSAGE_EDITED: "edited", TYPE_MESSAGE_DELETED: "deleted", ACTION_TYPE_CALL: "call", EXTRAS: "extras", SCOPE: "scope", NEW: "new", OLD: "old" }, ActionMessages: { ACTION_GROUP_JOINED_MESSAGE: "%s joined", ACTION_GROUP_LEFT_MESSAGE: "%s left", ACTION_MEMBER_KICKED_MESSAGE: "%s kicked %s", ACTION_MEMBER_BANNED_MESSAGE: "%s banned %s", ACTION_MEMBER_UNBANNED_MESSAGE: "%s unbanned %s", ACTION_MEMBER_INVITED_MESSAGE: "%s banned %s", ACTION_MESSAGE_EDITED_MESSAGE: " Message Edited", ACTION_MESSAGE_DELETED_MESSAGE: "Message Deleted", ACTION_MEMBER_SCOPE_CHANGED: "%s made %s %s", ACTION_MEMBER_ADDED_TO_GROUP: "%s added %s" }, ACTION_TYPE: { TYPE_MEMBER_JOINED: "joined", TYPE_MEMBER_LEFT: "left", TYPE_MEMBER_KICKED: "kicked", TYPE_MEMBER_BANNED: "banned", TYPE_MEMBER_UNBANNED: "unbanned", TYPE_MEMBER_INVITED: "invited", TYPE_MEMBER_SCOPE_CHANGED: "scopeChanged", TYPE_MESSAGE: "message", TYPE_MESSAGE_EDITED: "edited", TYPE_MESSAGE_DELETED: "deleted", TYPE_MEMBER_ADDED: "added" }, ACTIONS: { MEMBER_ADDED: "added", MEMBER_JOINED: "joined", MEMBER_LEFT: "left", MEMBER_KICKED: "kicked", MEMBER_BANNED: "banned", MEMBER_UNBANNED: "unbanned", MEMBER_INVITED: "invited", MEMBER_SCOPE_CHANGED: "scopeChanged", MESSAGE_EDITED: "edited", MESSSAGE_DELETED: "deleted", TYPE_USER: "user", TYPE_GROUP: "group", TYPE_GROUP_MEMBER: "groupMember" } }, e.BlockedUsersConstants = { REQUEST_KEYS: { DIRECTIONS: { BOTH: "both", HAS_BLOCKED_ME: "hasBlockedMe", BLOCKED_BY_ME: "blockedByMe" } } }, e.CallConstants = { CALL_MODE: { DEFAULT: "DEFAULT", SPOTLIGHT: "SPOTLIGHT", SINGLE: "SINGLE", TILE: "TILE", GRID: "GRID" }, CALL_TYPE: { AUDIO: "audio", VIDEO: "video" }, RECEIVER_TYPE_GROUP: "group", RECEIVER_TYPE_USER: "user", CALL_KEYS: { CALL_DATA: "data", CALL_ID: "id", CALL_SESSION_ID: "sessionid", CALL_RECEIVER: "receiver", CALL_SENDER: "sender", CALL_RECEIVER_TYPE: "receiverType", CALL_STATUS: "status", CALL_TYPE: "type", CALL_INITIATED_AT: "initiatedAt", CALL_JOINED_AT: "joinedAt", CALL_LEFT_AT: "leftAt", CALL_METADATA: "metadata", CALL_ENTITIES: "entities", CALL_ENTITY_TYPE: "entityType", CALL_ENTITY: "entity", CALL_ENTITY_USER: "user", CALL_ENTITY_GROUP: "group" }, CALL_STATUS: { INITIATED: "initiated", ONGOING: "ongoing", UNANSWERED: "unanswered", REJECTED: "rejected", BUSY: "busy", CANCELLED: "cancelled", ENDED: "ended" }, AUDIO_INPUT_DEVICES: "audioInputDevices", AUDIO_OUTPUT_DEVICES: "audioOutputDevices", VIDEO_INPUT_DEVICES: "videoInputDevices", POST_MESSAGES: { TYPES: { ACTION_MESSAGE: "cometchat_action_message", HANGUP: "hangup", COMETCHAT_RTC_SETTINGS: "cometchat_rtc_settings" }, ACTIONS: { USER_JOINED: "onUserJoined", USER_LEFT: "onUserLeft", USER_LIST_CHANGED: "onUserListChanged", INITIAL_DEVICE_LIST: "initialDeviceList", DEVICE_CHANGE: "onDeviceChange", LOAD: "LOAD", CHANGE_AUDIO_INPUT: "changeAudioInput", CHANGE_AUDIO_OUTPUT: "changeAudioOutput", CHANGE_VIDEO_INPUT: "changeVideoInput", MUTE_AUDIO: "muteAudio", UNMUTE_AUDIO: "unMuteAudio", PAUSE_VIDEO: "pauseVideo", UNPAUSE_VIDEO: "unPauseVideo", SWITCH_MODE: "switchMode", START_SCREENSHARE: "startScreenShare", STOP_SCREENSHARE: "stopScreenShare", END_CALL: "endCall", START_RECORDING: "startRecording", STOP_RECORDING: "stopRecording", RECORDING_TOGGLED: "onRecordingToggled", USER_MUTED: "onUserMuted", SCREEN_SHARE_STARTED: "SCREEN_SHARE_STARTED", SCREEN_SHARE_STOPPED: "SCREEN_SHARE_ENDED", SWITCH_TO_VIDEO_CALL: "switchedToVideo", SWITCHED_TO_VIDEO_CALL: "onCallSwitchedToVideo", OPEN_VIRTUAL_BACKGROUND: "openVirtualBackgroundMenu", SET_BACKGROUND_BLUR: "setBackgroundBlur", SET_BACKGROUND_IMAGE: "setBackgroundImage" } }, MEDIA_DEVICE: { ID: "id", NAME: "name", ACTIVE: "active" }, ZOOM_BUTTON_DEFAULT_PARAMS: { position: "bottom-right", visible: true }, NAME_LABEL_DEFAULT_PARAMS: { position: "bottom-left", visible: true, color: "rgba(27, 27, 27, 0.4)" }, NETWORK_LABEL_DEFAULT_PARAMS: { position: "bottom-right", visible: true }, MAIN_VIDEO_CONTAINER_SETTINGS: { KEYS: { POSITION: "position", VISIBILITY: "visible", COLOR: "color" } } }, e.GroupConstants = { KEYS: { NAME: "name", GUID: "guid", TYPE: "type", PASSWORD: "password", ICON: "icon", DESCRIPTION: "description", OWNER: "owner", METADATA: "metadata", CREATED_AT: "createdAt", UPDATED_AT: "updatedAt", HAS_JOINED: "hasJoined", WS_CHANNEL: "wsChannel", TAGS: "tags" } }, e.GroupMemersConstans = { KEYS: { SCOPE: "scope", UID: "uid", GUID: "guid", USER: "user", NAME: "name" } }, e.UserConstants = { UID: "uid", NAME: "name", AUTH_TOKEN: "authToken", AVATAR: "avatar", LAST_ACTIVE_AT: "lastActiveAt", LINK: "link", META_DATA: "metadata", ROLE: "role", STATUS: "status", STATUS_MESSAGE: "statusMessage", USER_NAME: "user_name", TAGS: "tags", SORT_BY: { NAME: "name", STATUS: "status" }, SORT_ORDER: { ASCENDING: "asc", DESCENDING: "desc" } }, e.Errors = { ERROR_IO_EXCEPTION: "ERROR_IO_EXCEPTION", ERROR_JSON_EXCEPTION: "ERROR_JSON_EXCEPTION", ERROR_PASSWORD_MISSING: "ERROR_PASSWORD_MISSING", ERROR_LIMIT_EXCEEDED: "ERROR_LIMIT_EXCEEDED", ERROR_USER_NOT_LOGGED_IN: "ERROR_USER_NOT_LOGGED_IN", ERROR_INVALID_GUID: "ERROR_INVALID_GUID", ERROR_PASSWORD_MISSING_MESSAGE: "Password is mandatory for a password group", ERROR_LIMIT_EXCEEDED_MESSAGE: "Limit Exceeded Max limit of %s", ERROR_USER_NOT_LOGGED_IN_MESSAGE: "Please log in to CometChat before calling this method", ERROR_INVALID_GUID_MESSAGE: "Please provide a valid GUID", ERROR_DEFAULT_MESSAGE: "Something went wrong", ERR_SETTINGS_HASH_OUTDATED: "ERR_SETTINGS_HASH_OUTDATED", ERR_NO_AUTH: "ERR_NO_AUTH" }, e.CALL_ERROR = { CALL_ALREADY_INITIATED: { code: "CALL_ALREADY_INITIATED", name: "CALL_ALREADY_INITIATED", message: "There is already call in progress", details: {} }, ERROR_IN_CALLING: { code: "CALL_IN_PROGRESS", name: "CALL_ALREADY_INITIATED", message: "There is already call in progress", details: {} }, CANNOT_ACCEPT_CALL: { code: "CALL_IN_PROGRESS", name: "CALL_IN_PROGRESS", message: "There is already a call in progress", details: {} }, NOT_INITIALIZED: { code: "NOT_INITIALIZED", name: "NOT_INITIALIZED", message: "Please call the CometChat.init() method before calling any other methods related to CometChat.", details: {} }, NOT_LOGGED_IN: { code: "NOT_LOGGED_IN", name: "NOT_LOGGED_IN", message: "Please login before starting a call.", details: {} }, SESSION_ID_REQUIRED: { code: "SESSION_ID_REQUIRED", name: "SESSION_ID_REQUIRED", message: "Please make sure you are passing correct session id.", details: {} }, CALL_SETTINGS_REQUIRED: { code: "CALL_SETTINGS_REQUIRED", name: "CALL_SETTINGS_REQUIRED", message: "Please make sure you are passing the call settings object.", details: {} }, JWT_NOT_FOUND: { code: "JWT_NOT_FOUND", name: "JWT_NOT_FOUND", message: "There was some issue while fetching JWT from API.", details: {} } }, e.PARAMETER_ERROR = { PARAMETER_REQUIRED: { code: "%s_NOT_PROVIDED", name: "%s_NOT_PROVIDED", message: "please provide the %s.", details: {} } }, e.GENERAL_ERROR = { MUST_BE_A_STRING: { code: "INVALID_%s", name: "INVALID_%s", message: "%s should be a string.", details: {} }, MUST_BE_A_NUMBER: { code: "INVALID_%s", name: "INVALID_%s", message: "%s should be a number.", details: {} }, MUST_BE_A_OBJECT: { code: "INVALID_%s", name: "INVALID_%s", message: "%s should be a object.", details: {} }, MUST_BE_AN_ARRAY: { code: "INVALID_%s", name: "INVALID_%s", message: "%s should be an array.", details: {} }, MUST_BE_A_BOOLEAN: { code: "INVALID_%s", name: "INVALID_%s", message: "%s should be a boolean.", details: {} }, MUST_BE_A_BLOB: { code: "INVALID_%s", name: "INVALID_%s", message: "%s should be a blob.", details: {} }, INVALID: { code: "INVALID_%s", name: "INVALID_%s", message: "Invalid %s. Please provide a valid %s.", details: {} }, METHOD_COMPULSORY: { code: "%s_IS_COMPULSORY", name: "%s_IS_COMPULSORY", message: "%s is required.", details: {} }, LIMIT_EXCEEDED: { code: "ERROR_%s_EXCEEDED", name: "ERROR_%s_EXCEEDED", message: "Limit exceeded max limit of %s.", details: {} }, MUST_BE_A_POSITIVE_NUMBER: { code: "INVALID_%s", name: "INVALID_%s", message: "%s should be a postive integer greater than 0.", details: {} }, INVALID_MEDIA_FILE: { code: "INVALID_%s", name: "INVALID_%s", message: "The message type does not match the file's mime type.", details: {} }, EMPTY_STRING: { code: "INVALID_%s", name: "INVALID_%s", message: "%s cannot be empty.", details: {} }, MISSING_KEY: { code: "MISSING_KEY", name: "MISSING_KEY", message: "The key %s is missing from the %s object.", details: {} }, EMPTY_ARRAY: { code: "INVALID_%s", name: "INVALID_%s", message: "The parameter %s should be an array and it cannot be empty.", details: {} }, INVALID_SEARCH_KEYWORD: { code: "INVALID_SEARCH_KEYWORD", name: "INVALID_SEARCH_KEYWORD", message: "Invalid search keyword. Please provide a valid search keyword.", details: {} }, INVALID_GROUP_PROPERTY: { code: "INVALID_%s", name: "INVALID_%s", message: "Invalid %s provided for the group. Please provide a valid %s.", details: {} }, INVALID_USER_PROPERTY: { code: "INVALID_%s", name: "INVALID_%s", message: "Invalid %s provided for a user. Please provide a valid %s.", details: {} }, PARAMETER_MUST_BE_A_NUMBER: { code: "INVALID_%s", name: "INVALID_%s", message: "%s method accepts parameter as a number.", details: {} }, PARAMETER_MUST_BE_AN_ARRAY: { code: "INVALID_%s", name: "INVALID_%s", message: "%s method accepts parameter as an array.", details: {} }, PARAMETER_MUST_BE_A_BOOLEAN: { code: "INVALID_%s", name: "INVALID_%s", message: "%s method accepts parameter as a boolean.", details: {} }, PARAMETER_MUST_BE_A_POSITIVE_NUMBER: { code: "INVALID_%s", name: "INVALID_%s", message: "%s method accepts parameter to be a positive number greater than 0.", details: {} }, PARAMETER_MUST_BE_A_STRING: { code: "INVALID_%s", name: "INVALID_%s", message: "%s method accepts parameter as a string.", details: {} }, PARAMETER_COMPULSORY: { code: "%s_IS_COMPULSORY", name: "%s_IS_COMPULSORY", message: "%s cannot be blank. Please provide a valid %s.", details: {} }, PASSWORD_COMPULSORY: { code: "%s_IS_COMPULSORY", name: "%s_IS_COMPULSORY", message: "Password is mandatory for a password group.", details: {} }, INVALID_ARRAY: { code: "INVALID_%s", name: "INVALID_%s", message: "%s", details: {} } }, e.ReceiptErrors = { MISSING_PARAMETERS: { code: "MISSING_PARAMETERS", name: "MISSING_PARAMETERS", message: "Expected 4 parameters received 3", details: {} }, INVALID_PARAMETER: { code: "INVALID_%s", name: "INVALID_%s", message: "%s", details: {} }, NO_WEBSOCKET_CONNECTION: { code: "NO_WEBSOCKET_CONNECTION", name: "NO_WEBSOCKET_CONNECTION", message: "Connection to our Websockets server is broken. Please retry after some time.", details: {} }, RECEIPTS_TEMPORARILY_BLOCKED: { code: "RECEIPTS_TEMPORARILY_BLOCKED", name: "RECEIPTS_TEMPORARILY_BLOCKED", message: "Due to high load. Receipts have been blocked for your app.", details: {} }, UNKNOWN_ERROR_OCCURRED: { code: "UNKNOWN_ERROR_OCCURRED", name: "UNKNOWN_ERROR_OCCURRED", message: "Unknown error occurred while marking a message as read.", details: {} } }, e.UserErrors = { INVALID_STATUS: new i.CometChatException({ code: "INVALID_STATUS_VALUE", name: "INVALID_STATUS_VALUE", message: "The `status` parameter accepts only `online` or `offline`.", details: "" }), INVALID_DIRECTION: new i.CometChatException({ code: "INVALID_DIRECTION_VALUE", name: "INVALID_DIRECTION_VALUE", message: "The `direction` parameter accepts only `both`, `blockeyByMe` or `hasBlockedMe`.", details: "" }), USER_NOT_LOGGED_IN: new i.CometChatException({ code: "USER_NOT_LOGGED_IN", name: "USER_NOT_LOGGED_IN", message: "Please log in to CometChat before calling this method.", details: "" }) }, e.GroupErrors = { NOT_A_GROUP: new i.CometChatException({ code: "NOT_A_GROUP", message: "Please use group class to construct a new group." }), INVALID_SCOPE: new i.CometChatException({ code: "INVALID_SCOPE_VALUE", name: "INVALID_SCOPE_VALUE", message: "Scope can be `admin`, `moderator` or `participant`.", details: "" }), INVALID_GROUP_TYPE: new i.CometChatException({ code: "INVALID_GROUP_TYPE", name: "INVALID_GROUP_TYPE", message: "Group type can be `public`, `private`, `protected` or `password`.", details: "" }) }, e.ConversationErrors = { INVALID_CONVERSATION_TYPE: { code: "INVALID_CONVERSATION_TYPE", name: "INVALID_CONVERSATION_TYPE", message: "Conversation type can be `user` or `group`.", details: "Please check the value of conversationType." }, CONVERSATION_NOT_FOUND: { code: "CONVERSATION_NOT_FOUND", name: "CONVERSATION_NOT_FOUND", message: "Conversation for %s %s not found.", details: "Please check the value of conversationWith and conversationType." } }, e.ExtensionErrors = { INVALID_EXTENSION: { code: "ERROR_INVALID_EXTENSION", name: "ERROR_INVALID_EXTENSION", message: "The provided extension cannot be null or empty. Please provide a valid extension.", details: {} }, EXTENSION_NOT_FOUND: { code: "ERROR_EXTENSION_NOT_FOUND", name: "ERROR_EXTENSION_NOT_FOUND", message: "The provided extension could not be found.", details: {} } }, e.MessageErrors = { INVALID_RECEIVER_TYPE: { code: "INVALID_RECEIVER_TYPE", name: "INVALID_RECEIVER_TYPE", message: "Receiver type can be `user` or `group`.", details: "Please check the value of receiverType." } }, e.FeatureRestrictionErrors = { INVALID_FEATURE: { code: "ERROR_INVALID_FEATURE", name: "ERROR_INVALID_FEATURE", message: "The provided feature cannot be null or empty. Please provide a valid feature.", details: {} }, FEATURE_NOT_FOUND: { code: "ERROR_FEATURE_NOT_FOUND", name: "ERROR_FEATURE_NOT_FOUND", message: "The provided feature could not be found.", details: {} } }, e.PresenceConstatnts = { STATUS: { ONLINE: "online", AVAILABLE: "available", OFFLINE: "offline", JOINED: "JOINED", LEFT: "LEFT" } }, e.APP_SETTINGS = { APP_SETTINGS: "app_settings", KEYS: { CHAT_HOST: "CHAT_HOST", CHAT_USE_SSL: "CHAT_USE_SSL", GROUP_SERVICE: "GROUP_SERVICE", CALL_SERVICE: "CALL_SERVICE", CHAT_WS_PORT: "CHAT_WS_PORT", CHAT_WSS_PORT: "CHAT_WSS_PORT", CHAT_HTTP_BIND_PORT: "CHAT_HTTP_BIND_PORT", CHAT_HTTPS_BIND_PORT: "CHAT_HTTPS_BIND_PORT", ADMIN_API_HOST: "ADMIN_API_HOST", CLIENT_API_HOST: "CLIENT_API_HOST", WEBRTC_HOST: "WEBRTC_HOST", WEBRTC_USE_SSL: "WEBRTC_USE_SSL", WEBRTC_WS_PORT: "WEBRTC_WS_PORT", WEBRTC_WSS_PORT: "WEBRTC_WSS_PORT", WEBRTC_HTTP_BIND_PORT: "WEBRTC_HTTP_BIND_PORT", WEBRTC_HTTPS_BIND_PORT: "WEBRTC_HTTPS_BIND_PORT", EXTENSION_LIST: "extensions", EXTENSION_KEYS: { ID: "id", NAME: "name" }, JID_HOST_OVERRIDE: "JID_HOST_OVERRIDE", CHAT_HOST_OVERRIDE: "CHAT_HOST_OVERRIDE", CHAT_HOST_APP_SPECIFIC: "CHAT_HOST_APP_SPECIFIC", MODE: "MODE", CONNECTION_TYPE: "connection_type", DEFAULT_MODE: "DEFAULT", LIMITED_TRANSIENT: "LIMITED_TRANSIENT", NO_TRANSIENT: "NO_TRANSIENT", POLLING_ENABLED: "POLLING_ENABLED", POLLING_INTERVAL: "POLLING_INTERVAL", ANALYTICS_PING_DISABLED: "ANALYTICS_PING_DISABLED", ANALYTICS_HOST: "ANALYTICS_HOST", ANALYTICS_VERSION: "ANALYTICS_VERSION", ANALYTICS_USE_SSL: "ANALYTICS_USE_SSL", SETTINGS_HASH: "settingsHash", SETTINGS_HASH_RECEIVED_AT: "settingsHashReceivedAt", DENY_FALLBACK_TO_POLLING: "DENY_FALLBACK_TO_POLLING", APP_VERSION: "APP_VERSION", MAIN_DOMAIN: "MAIN_DOMAIN", CHAT_API_VERSION: "CHAT_API_VERSION", WS_API_VERSION: "WS_API_VERSION", REGION: "REGION", EXTENSION_DOMAIN: "EXTENSION_DOMAIN", WEBRTC_API_SUBDOMAIN: "WEBRTC_API_SUBDOMAIN", WEBRTC_WEB_FRONTEND_HOST: "WEBRTC_WEB_FRONTEND_HOST", WEBRTC_WEB_FRONTEND_VERSION: "WEBRTC_WEB_FRONTEND_VERSION" } }, e.COMMON_UTILITY_CONSTANTS = { TYPE_CONSTANTS: { BOOLEAN: "boolean", STRING: "string", OBJECT: "object", NUMBER: "number" } }, e.CONNECTION_STATUS = { CONNECTED: "connected", CONNECTING: "connecting", DISCONNECTED: "disconnected", FEATURE_THROTTLED: "featureThrottled" }, e.SESSION_STORE = { SESSION_ID: "sessionId" }, e.API_ERROR_CODES = { AUTH_ERR_AUTH_TOKEN_NOT_FOUND: "AUTH_ERR_AUTH_TOKEN_NOT_FOUND" }, e.PROSODY_API = { DOMAIN_PREFIX: "xmpp", PATH: { ROOM: "room", ROOM_SIZE: "room-size", SESSIONS: "sessions" }, RESPONSE: { PARTICIPANTS: "participants" }, QUERY_PARAMETERS: { DOMAIN: "domain", ROOM: "room" } }, e.ProsodyApiErrors = { INVALID_SESSIONID: { code: "ERROR_INVALID_SESSIONID", name: "ERROR_INVALID_SESSIONID", message: "The provided sessionId cannot be null or empty. Please provide a valid sessionId.", details: "" }, INVALID_TYPE: { code: "ERROR_INVALID_TYPE", name: "ERROR_INVALID_TYPE", message: "The provided type cannot be null or empty. Please provide a valid type.", details: "" } }, e.JWT_API = { KEYS: { PASSTHROUGH: "passthrough", EXPAND: "expand" } }, e.ONLINE_MEMBER_COUNT_API = { ENDPOINTS: { GET_ONLINE_MEMBER_COUNT: "api/%s/online-members" }, RESPONSE: { ONLINE_USERS_COUNT: "onlineUsersCount", GROUPS: "groups" }, ERRORS: { INVALID_GROUPLIST: { code: "ERROR_INVALID_GROUPLIST", name: "ERROR_INVALID_GROUPLIST", message: "Grouplist cannot be null or empty.", details: "" } } };
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.CometChatException = void 0;
        var o = function(t2) {
          null !== t2.code && void 0 !== t2.code && "" !== t2.code && (this.code = t2.code), null !== t2.name && void 0 !== t2.name && "" !== t2.name && (this.name = t2.name), null !== t2.message && void 0 !== t2.message && "" !== t2.message && (this.message = t2.message), null !== t2.details && void 0 !== t2.details && "" !== t2.details && (this.details = t2.details);
        };
        e.CometChatException = o;
      }, function(t, e, n) {
        "use strict";
        var p = this && this.__assign || function() {
          return (p = Object.assign || function(t2) {
            for (var e2, n2 = 1, o2 = arguments.length; n2 < o2; n2++) for (var s2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
            return t2;
          }).apply(this, arguments);
        }, E = this && this.__awaiter || function(t2, i2, a2, E2) {
          return new (a2 || (a2 = Promise))(function(n2, e2) {
            function o2(t3) {
              try {
                r2(E2.next(t3));
              } catch (t4) {
                e2(t4);
              }
            }
            function s2(t3) {
              try {
                r2(E2.throw(t3));
              } catch (t4) {
                e2(t4);
              }
            }
            function r2(t3) {
              var e3;
              t3.done ? n2(t3.value) : (e3 = t3.value, e3 instanceof a2 ? e3 : new a2(function(t4) {
                t4(e3);
              })).then(o2, s2);
            }
            r2((E2 = E2.apply(t2, i2 || [])).next());
          });
        }, c = this && this.__generator || function(n2, o2) {
          var s2, r2, i2, t2, a2 = { label: 0, sent: function() {
            if (1 & i2[0]) throw i2[1];
            return i2[1];
          }, trys: [], ops: [] };
          return t2 = { next: e2(0), throw: e2(1), return: e2(2) }, "function" == typeof Symbol && (t2[Symbol.iterator] = function() {
            return this;
          }), t2;
          function e2(e3) {
            return function(t3) {
              return function(e4) {
                if (s2) throw new TypeError("Generator is already executing.");
                for (; a2; ) try {
                  if (s2 = 1, r2 && (i2 = 2 & e4[0] ? r2.return : e4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, e4[1])).done) return i2;
                  switch (r2 = 0, i2 && (e4 = [2 & e4[0], i2.value]), e4[0]) {
                    case 0:
                    case 1:
                      i2 = e4;
                      break;
                    case 4:
                      return a2.label++, { value: e4[1], done: false };
                    case 5:
                      a2.label++, r2 = e4[1], e4 = [0];
                      continue;
                    case 7:
                      e4 = a2.ops.pop(), a2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = 0 < (i2 = a2.trys).length && i2[i2.length - 1]) && (6 === e4[0] || 2 === e4[0])) {
                        a2 = 0;
                        continue;
                      }
                      if (3 === e4[0] && (!i2 || e4[1] > i2[0] && e4[1] < i2[3])) {
                        a2.label = e4[1];
                        break;
                      }
                      if (6 === e4[0] && a2.label < i2[1]) {
                        a2.label = i2[1], i2 = e4;
                        break;
                      }
                      if (i2 && a2.label < i2[2]) {
                        a2.label = i2[2], a2.ops.push(e4);
                        break;
                      }
                      i2[2] && a2.ops.pop(), a2.trys.pop();
                      continue;
                  }
                  e4 = o2.call(n2, a2);
                } catch (t4) {
                  e4 = [6, t4], r2 = 0;
                } finally {
                  s2 = i2 = 0;
                }
                if (5 & e4[0]) throw e4[1];
                return { value: e4[0] ? e4[1] : void 0, done: true };
              }([e3, t3]);
            };
          }
        };
        e.__esModule = true, e.CometChat = void 0;
        var u = n(28), w = n(0), K = n(2), T = n(6), C = n(4), d = n(14), S = n(17), l = n(7), _ = n(16), g = n(10), h = n(11), b = n(1), a = n(8), A = n(15), r = n(30), o = n(23), s = n(21), B = n(31), R = n(13), i = n(20), I = n(40), f = n(41), O = n(42), N = n(43), y = n(45), m = n(46), L = n(25), M = n(26), v = n(36), P = n(19), D = n(34), U = n(48), Y = n(49), F = n(50), V = n(35), x = n(24), k = n(18), J = n(51), H = n(52), W = n(53), G = n(37), j = n(5), X = n(62), q = n(29), Q = n(32), z = n(27), Z = n(63), $ = W.WSConnectionHelper.getInstance(), tt = G.ListenerHandlers.getInstance(), et = function() {
          function G2(t2) {
            try {
              G2.appId = t2, G2.localStorage = d.LocalStorage.getInstance(), G2.keyStore = r.KeyStore.getInstance();
            } catch (t3) {
              w.Logger.error("CometChat: constructor", t3);
            }
          }
          return G2.setAuthToken = function(t2) {
            try {
              G2.authToken = t2;
            } catch (t3) {
              w.Logger.error("CometChat: setAuthToken", t3);
            }
          }, G2.prototype.getAuthToken = function() {
            try {
              return G2.authToken;
            } catch (t2) {
              w.Logger.error("CometChat: getAuthToken", t2);
            }
          }, G2.getAppId = function() {
            try {
              return G2.appId;
            } catch (t2) {
              w.Logger.error("CometChat: getAppId", t2);
            }
          }, G2.prototype.getApiKey = function() {
            try {
              return G2.apiKey;
            } catch (t2) {
              w.Logger.error("CometChat: getApiKey", t2);
            }
          }, G2.getMode = function() {
            try {
              return G2.mode;
            } catch (t2) {
              w.Logger.error("CometChat: getMode", t2);
            }
          }, G2.setMode = function(t2) {
            try {
              G2.mode = t2;
            } catch (t3) {
              w.Logger.error("CometChat: getMode", t3);
            }
          }, G2.getSessionId = function() {
            try {
              return G2.sessionId;
            } catch (t2) {
              w.Logger.error("CometChat: getSessionId", t2);
            }
          }, G2.onStorageEvent = function(t2) {
            if (document && !document.hasFocus()) {
              var e2 = G2.appId + ":common_store/user";
              t2.key === e2 && null === t2.newValue && (G2.authToken = void 0, G2.didAnalyticsPingStart() && G2.clearAnalyticsPingTimer(), $.WSLogout(), G2.pushToLoginListener("", "Logout_Success")), t2.key === e2 && null === t2.oldValue && d.LocalStorage.getInstance().get("user").then(function(t3) {
                t3 && (G2.user = new C.Me(t3), G2.setAuthToken(G2.user.getAuthToken()), t3.jwt && (G2.jwt = t3.jwt), d.LocalStorage.getInstance().get("app_settings").then(function(t4) {
                  if (t4) {
                    if (t4.hasOwnProperty(b.APP_SETTINGS.KEYS.APP_VERSION)) {
                      var e3 = parseInt(b.APPINFO.sdkVersion.charAt(1));
                      t4[b.APP_SETTINGS.KEYS.APP_VERSION] < e3 && (G2.appSettings.shouldAutoEstablishSocketConnection() || (G2.shouldConnectToWS = false), G2.getInstance().internalRestart(G2.user.getAuthToken()));
                    } else G2.appSettings.shouldAutoEstablishSocketConnection() || (G2.shouldConnectToWS = false), G2.getInstance().internalRestart(G2.user.getAuthToken());
                    if (t4[b.APP_SETTINGS.KEYS.MODE] && (G2.mode = t4[b.APP_SETTINGS.KEYS.MODE]), t4[b.APP_SETTINGS.KEYS.SETTINGS_HASH] && (G2.settingsHash = t4[b.APP_SETTINGS.KEYS.SETTINGS_HASH]), t4[b.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (G2.settingsHashReceivedAt = t4[b.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), G2.isAnalyticsDisabled = !!t4[b.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], G2.didAnalyticsPingStart() || G2.isAnalyticsDisabled || !G2.appSettings.shouldAutoEstablishSocketConnection() || (G2.pingAnalytics(), G2.startAnalyticsPingTimer()), G2.getConnectionStatus() !== b.CONNECTION_STATUS.CONNECTED) {
                      var n2 = new C.User(G2.user);
                      G2.pushToLoginListener(n2, "Login_Success"), G2.appSettings.shouldAutoEstablishSocketConnection() && G2.WSLogin(G2.user);
                    }
                  }
                }));
              });
            }
          }, G2.beforeUnload = function(t2) {
            var e2 = G2.getDataFromSessionStorage(b.SESSION_STORE.SESSION_ID);
            G2.removeDataFromSessionStorage(b.SESSION_STORE.SESSION_ID), d.LocalStorage.getInstance().set(b.SESSION_STORE.SESSION_ID, e2);
          }, G2.didAnalyticsPingStart = function() {
            try {
              return G2.isAnalyticsPingStarted;
            } catch (t2) {
              w.Logger.error("CometChat: didAnalyticsPingStart", t2);
            }
          }, G2.getDataFromSessionStorage = function(t2) {
            if (window.sessionStorage) return window.sessionStorage.getItem(t2);
          }, G2.addDataToSessionStorage = function(t2, e2) {
            window.sessionStorage && window.sessionStorage.setItem(t2, e2);
          }, G2.removeDataFromSessionStorage = function(t2) {
            window.sessionStorage && window.sessionStorage.removeItem(t2);
          }, G2.init = function(s2, t2) {
            var o2 = this;
            return void 0 === s2 && (s2 = ""), new Promise(function(n2, e2) {
              try {
                "object" == typeof s2 && (s2.hasOwnProperty("appId") && (s2 = s2.appId), s2.hasOwnProperty("appSettings") && (t2 = s2.appSettings)), w.isFalsy(t2) ? t2 = new Y.AppSettingsBuilder().setRegion(Y.AppSettings.REGION_EU).build() : t2.getRegion() == Y.AppSettings.REGION_PRIVATE && (t2.region = s2), o2.appSettings = t2, w.isFalsy(s2) ? e2(new K.CometChatException(R.INIT_ERROR.NO_APP_ID)) : (window.addEventListener && (window.addEventListener("storage", G2.onStorageEvent, false), window.addEventListener("beforeunload", G2.beforeUnload, false)), o2.initialzed = true, G2.appId = s2, G2.getInstance(s2), d.LocalStorage.getInstance().get(b.SESSION_STORE.SESSION_ID).then(function(t3) {
                  null == t3 || null == t3 ? (G2.sessionId = b.APPINFO.platform + "-" + b.APPINFO.sdkVersionWithUnderScore + "-" + Z() + "-" + (/* @__PURE__ */ new Date()).getTime(), G2.addDataToSessionStorage(b.SESSION_STORE.SESSION_ID, G2.getSessionId()), d.LocalStorage.getInstance().remove(b.SESSION_STORE.SESSION_ID)) : (G2.sessionId = t3.toLocaleString(), d.LocalStorage.getInstance().remove(b.SESSION_STORE.SESSION_ID), G2.addDataToSessionStorage(b.SESSION_STORE.SESSION_ID, G2.getSessionId())), d.LocalStorage.getInstance().get(b.LOCAL_STORE.KEY_APP_ID).then(function(t4) {
                    if (null == t4 || null == t4) G2.appId = s2, G2.getInstance(s2), d.LocalStorage.getInstance().set(b.LOCAL_STORE.KEY_APP_ID, s2), n2(true);
                    else {
                      var e3 = t4.toLocaleString();
                      e3 === s2 ? (G2.appId = e3, G2.getInstance(e3), d.LocalStorage.getInstance().get(b.LOCAL_STORE.KEY_USER).then(function(t5) {
                        t5 ? (G2.isLoggedOut = false, G2.user = new C.Me(t5), G2.setAuthToken(G2.user.getAuthToken()), t5.jwt && (G2.jwt = t5.jwt), n2(true), d.LocalStorage.getInstance().get(b.LOCAL_STORE.KEY_APP_SETTINGS).then(function(t6) {
                          if (t6) {
                            if (t6.hasOwnProperty(b.APP_SETTINGS.KEYS.APP_VERSION)) {
                              var e4 = parseInt(b.APPINFO.sdkVersion.charAt(1));
                              t6[b.APP_SETTINGS.KEYS.APP_VERSION] < e4 && (o2.appSettings.shouldAutoEstablishSocketConnection() || (G2.shouldConnectToWS = false), G2.getInstance().internalRestart(G2.user.getAuthToken()));
                            } else o2.appSettings.shouldAutoEstablishSocketConnection() || (G2.shouldConnectToWS = false), G2.getInstance().internalRestart(G2.user.getAuthToken());
                            t6[b.APP_SETTINGS.KEYS.MODE] && (G2.mode = t6[b.APP_SETTINGS.KEYS.MODE]), t6[b.APP_SETTINGS.KEYS.SETTINGS_HASH] && (G2.settingsHash = t6[b.APP_SETTINGS.KEYS.SETTINGS_HASH]), t6[b.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (G2.settingsHashReceivedAt = t6[b.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), G2.isAnalyticsDisabled = !!t6[b.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], G2.didAnalyticsPingStart() || G2.isAnalyticsDisabled || !o2.appSettings.shouldAutoEstablishSocketConnection() || (G2.pingAnalytics(), G2.startAnalyticsPingTimer()), $ && !$.connection && o2.appSettings.shouldAutoEstablishSocketConnection() && (G2.isConnectingFromInit = true, G2.WSLogin(G2.user));
                          }
                        })) : n2(true);
                      })) : o2.clearCache().then(function() {
                        G2.apiKey = void 0, G2.user = void 0, G2.authToken = void 0, G2.cometChat = void 0, G2.mode = void 0, $.WSLogout(), G2.appId = s2, d.LocalStorage.getInstance().set(b.LOCAL_STORE.KEY_APP_ID, s2), G2.getInstance(s2), n2(true);
                      });
                    }
                    r.KeyStore.getInstance().get(b.LOCAL_STORE.KEY_DEVICE_ID).then(function(t5) {
                      if (null == t5) {
                        var e4 = Z(), n3 = (/* @__PURE__ */ new Date()).getTime(), o3 = s2 + "_" + e4 + "_" + n3;
                        r.KeyStore.getInstance().set(b.LOCAL_STORE.KEY_DEVICE_ID, o3);
                      }
                    });
                  });
                }));
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.isInitialized = function() {
            try {
              return this.initialzed;
            } catch (t2) {
              w.Logger.error("CometChat: isInitialized", t2);
            }
          }, G2.getInstance = function(t2) {
            try {
              return this.cometChat || (this.cometChat = new G2(t2)), this.cometChat;
            } catch (t3) {
              w.Logger.error("CometChat: getInstance", t3);
            }
          }, G2.registerTokenForPushNotification = function(l2, p2) {
            var C2 = this;
            return new Promise(function(u2, S2) {
              try {
                G2.keyStore.get(b.LOCAL_STORE.KEY_DEVICE_ID).then(function(c2) {
                  w.getAppSettings().then(function(t2) {
                    var e2 = "", n2 = c2, o2 = b.APPINFO.platform, s2 = b.APPINFO.sdkVersion, r2 = t2[b.APP_SETTINGS.KEYS.CHAT_API_VERSION];
                    if (navigator && (e2 = navigator.userAgent), null == n2) {
                      var i2 = Z(), a2 = (/* @__PURE__ */ new Date()).getTime();
                      n2 = C2.appId + "_" + i2 + "_" + a2, G2.keyStore.set(b.LOCAL_STORE.KEY_DEVICE_ID, n2);
                    }
                    var E2 = { platform: o2, deviceId: n2, appInfo: { version: s2, apiVersion: r2, userAgent: e2, pushNotification: { fcmDeviceToken: l2, settings: p2 } } };
                    T.makeApiCall("updateMyDetails", {}, E2, false).then(function(t3) {
                      u2("Token Registration successful");
                    }, function(t3) {
                      S2(new K.CometChatException(t3.error));
                    }).catch(function(t3) {
                      S2(new K.CometChatException(t3));
                    });
                  }, function(t2) {
                    S2(new K.CometChatException(t2));
                  });
                });
              } catch (t2) {
                S2(new K.CometChatException(t2));
              }
            });
          }, G2.pushToLoginListener = function(e2, n2) {
            tt.loginHandlers.map(function(t2) {
              try {
                if (t2._eventListener) switch (n2) {
                  case "Login_Success":
                    w.isFalsy(t2._eventListener.loginSuccess) || t2._eventListener.loginSuccess(e2);
                    break;
                  case "Login_Failure":
                    w.isFalsy(t2._eventListener.loginFailure) || t2._eventListener.loginFailure(e2);
                    break;
                  case "Logout_Success":
                    w.isFalsy(t2._eventListener.logoutSuccess) || t2._eventListener.logoutSuccess();
                }
              } catch (t3) {
                w.Logger.error("ConnectionHandlers: onConnected Status", t3);
              }
            });
          }, G2.login = function() {
            for (var E2 = this, c2 = [], t2 = 0; t2 < arguments.length; t2++) c2[t2] = arguments[t2];
            return new Promise(function(i2, a2) {
              try {
                if (G2.loginInProgress) {
                  G2.isLoggedOut = true;
                  var e2 = new K.CometChatException(R.LOGIN_ERROR.REQUEST_IN_PROGRESS);
                  return a2(e2);
                }
                G2.loginInProgress = true, G2.isConnectingFromInit = false, G2.localStorage.get(b.LOCAL_STORE.KEY_APP_ID).then(function(t3) {
                  if (null == t3 || null == t3) {
                    var e3 = new K.CometChatException(R.LOGIN_ERROR.NOT_INITIALIZED);
                    return G2.internalRestart || G2.pushToLoginListener(e3, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(e3);
                  }
                  var n2 = t3.toLocaleString();
                  if (E2.getInstance(n2), G2.appId = n2, d.LocalStorage.getInstance().set(b.LOCAL_STORE.KEY_APP_ID, n2), "object" == typeof c2[0]) {
                    var o2 = c2[0];
                    c2[0].hasOwnProperty("authToken") ? c2[0] = o2.authToken : c2[0].hasOwnProperty("username") && c2[0].hasOwnProperty("apiKey") && (c2[0] = o2.username, c2[1] = o2.apiKey);
                  }
                  if (2 == c2.length) {
                    if (w.isFalsy(c2[0]) || w.isFalsy(c2[1])) {
                      e3 = new K.CometChatException(R.ERRORS.PARAMETER_MISSING);
                      return G2.internalRestart || G2.pushToLoginListener(e3, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(e3);
                    }
                  } else {
                    if (1 != c2.length) {
                      e3 = new K.CometChatException(R.ERRORS.PARAMETER_MISSING);
                      return G2.internalRestart || G2.pushToLoginListener(e3, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(e3);
                    }
                    if (w.isFalsy(c2[0])) {
                      var e3 = new K.CometChatException(R.ERRORS.PARAMETER_MISSING);
                      return G2.internalRestart || G2.pushToLoginListener(e3, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(e3);
                    }
                  }
                  if (w.isFalsy(E2.getAppId())) {
                    e3 = new K.CometChatException(R.LOGIN_ERROR.NOT_INITIALIZED);
                    return G2.internalRestart || G2.pushToLoginListener(e3, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(e3);
                  }
                  return G2.localStorage.get(b.LOCAL_STORE.KEY_USER).then(function(r2) {
                    if (2 == c2.length) {
                      G2.apiKey = c2[1];
                      var t4 = c2[0];
                      if (null != r2 && r2.uid !== c2[0]) G2.localStorage.clearStore().then(function() {
                        $.WSLogout(), G2.generateAuthToken(t4).then(function(t5) {
                          G2.user = new C.Me(t5), G2.setAuthToken(G2.user.getAuthToken()), G2.getLoggedInUser().then(function(t6) {
                            (G2.user = new C.Me(t6)).setAuthToken(G2.authToken), G2.setAuthToken(G2.user.getAuthToken());
                            var e5 = G2.user;
                            e5.setStatus(b.PresenceConstatnts.STATUS.ONLINE), G2.localStorage.set("user", e5);
                            var n4 = new C.User(e5);
                            i2(n4), G2.isConnectingFromInit || G2.internalRestart || G2.pushToLoginListener(n4, "Login_Success"), G2.loginInProgress = false, G2.didAnalyticsPingStart() || G2.isAnalyticsDisabled || !G2.appSettings.shouldAutoEstablishSocketConnection() || (G2.pingAnalytics(), G2.startAnalyticsPingTimer()), G2.isLoggedOut = false, (G2.appSettings.shouldAutoEstablishSocketConnection() || G2.internalRestart) && G2.shouldConnectToWS && G2.WSLogin(G2.user);
                          }, function(t6) {
                            return G2.internalRestart || G2.pushToLoginListener(t6, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(t6);
                          });
                        }, function(t5) {
                          return G2.internalRestart || G2.pushToLoginListener(t5, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(t5);
                        });
                      });
                      else {
                        if (!w.isFalsy(G2.authToken)) {
                          var e4 = new C.User(E2.user);
                          return G2.internalRestart || G2.pushToLoginListener(e4, "Login_Success"), G2.loginInProgress = false, G2.isLoggedOut = false, i2(e4);
                        }
                        if (!w.isFalsy(t4)) {
                          if (w.isFalsy(G2.apiKey)) {
                            var n3 = new K.CometChatException(R.LOGIN_ERROR.UNAUTHORISED);
                            return G2.internalRestart || G2.pushToLoginListener(n3, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(n3);
                          }
                          E2.generateAuthToken(t4).then(function(t5) {
                            E2.user = new C.Me(t5), E2.setAuthToken(G2.user.getAuthToken()), E2.getLoggedInUser().then(function(t6) {
                              E2.user = new C.Me(t6), E2.user.setAuthToken(G2.authToken), E2.setAuthToken(E2.user.getAuthToken()), $.WSLogout();
                              var e5 = E2.user;
                              e5.setStatus(b.PresenceConstatnts.STATUS.ONLINE), E2.localStorage.set("user", e5);
                              var n4 = new C.User(e5);
                              i2(n4), G2.isConnectingFromInit || G2.internalRestart || G2.pushToLoginListener(n4, "Login_Success"), G2.loginInProgress = false, G2.didAnalyticsPingStart() || G2.isAnalyticsDisabled || !G2.appSettings.shouldAutoEstablishSocketConnection() || (G2.pingAnalytics(), G2.startAnalyticsPingTimer()), G2.isLoggedOut = false, (G2.appSettings.shouldAutoEstablishSocketConnection() || G2.internalRestart) && G2.shouldConnectToWS && E2.WSLogin(E2.user);
                            }, function(t6) {
                              return G2.internalRestart || G2.pushToLoginListener(t6, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(t6);
                            });
                          }, function(t5) {
                            return G2.internalRestart || G2.pushToLoginListener(t5, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(t5);
                          });
                        }
                      }
                    } else G2.authToken = c2[0], E2.getLoggedInUser().then(function(t5) {
                      if (t5.authToken != c2[0]) {
                        var o3 = E2;
                        o3.localStorage.clearStore().then(function() {
                          $.WSLogout(), o3.getLoggedInUser().then(function(t6) {
                            (G2.user = new C.Me(t6)).setAuthToken(G2.authToken), G2.setAuthToken(G2.user.getAuthToken());
                            var e6 = G2.user;
                            e6.setStatus(b.PresenceConstatnts.STATUS.ONLINE), o3.localStorage.set("user", e6);
                            var n5 = new C.User(e6);
                            i2(n5), G2.isConnectingFromInit || G2.internalRestart || G2.pushToLoginListener(n5, "Login_Success"), G2.loginInProgress = false, G2.didAnalyticsPingStart() || G2.isAnalyticsDisabled || !G2.appSettings.shouldAutoEstablishSocketConnection() || (G2.pingAnalytics(), G2.startAnalyticsPingTimer()), G2.isLoggedOut = false, (G2.appSettings.shouldAutoEstablishSocketConnection() || G2.internalRestart) && G2.shouldConnectToWS && G2.WSLogin(new C.Me(t6));
                          }, function(t6) {
                            return G2.internalRestart || G2.pushToLoginListener(t6, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(t6);
                          });
                        });
                      } else {
                        if (r2) {
                          var e5 = new C.User(t5);
                          return G2.internalRestart || G2.pushToLoginListener(e5, "Login_Success"), G2.loginInProgress = false, G2.isLoggedOut = false, i2(e5);
                        }
                        (G2.user = new C.Me(t5)).setAuthToken(G2.authToken), G2.setAuthToken(G2.user.getAuthToken());
                        var n4 = G2.user;
                        n4.setStatus(b.PresenceConstatnts.STATUS.ONLINE), G2.localStorage.set("user", n4);
                        var s2 = new C.User(n4);
                        i2(s2), G2.isConnectingFromInit || G2.internalRestart || G2.pushToLoginListener(s2, "Login_Success"), G2.loginInProgress = false, G2.didAnalyticsPingStart() || G2.isAnalyticsDisabled || !G2.appSettings.shouldAutoEstablishSocketConnection() || (G2.pingAnalytics(), G2.startAnalyticsPingTimer()), G2.isLoggedOut = false, (G2.appSettings.shouldAutoEstablishSocketConnection() || G2.internalRestart) && G2.shouldConnectToWS && G2.WSLogin(new C.Me(t5));
                      }
                    }, function(t5) {
                      return G2.internalRestart || G2.pushToLoginListener(t5, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(t5);
                    });
                  });
                });
              } catch (t3) {
                e2 = new K.CometChatException(t3);
                return G2.internalRestart || G2.pushToLoginListener(e2, "Login_Failure"), G2.loginInProgress = false, G2.isLoggedOut = true, a2(e2);
              }
            });
          }, G2.sendMessage = function(a2) {
            var t2 = this;
            return new Promise(function(r2, i2) {
              return E(t2, void 0, void 0, function() {
                var e2, n2, o2, s2 = this;
                return c(this, function(t3) {
                  try {
                    return a2 instanceof _.TextMessage || a2 instanceof S.MediaMessage || a2 instanceof P.CustomMessage || (a2 = a2[b.MessageConstatnts.KEYS.ATTATCHMENT] ? (e2 = b.MessageConstatnts.TYPE.FILE, w.isImage(a2[b.MessageConstatnts.KEYS.ATTATCHMENT]) ? e2 = b.MessageConstatnts.TYPE.IMAGE : w.isAudio(a2[b.MessageConstatnts.KEYS.ATTATCHMENT]) ? e2 = b.MessageConstatnts.TYPE.AUDIO : w.isVideo(a2[b.MessageConstatnts.KEYS.ATTATCHMENT]) && (e2 = b.MessageConstatnts.TYPE.VIDEO), new S.MediaMessage(a2[b.MessageConstatnts.KEYS.RECEIVER_ID], a2[b.MessageConstatnts.KEYS.ATTATCHMENT], e2, a2[b.MessageConstatnts.KEYS.RECEIVER_TYPE])) : new _.TextMessage(a2[b.MessageConstatnts.KEYS.RECEIVER_ID], a2[b.MessageConstatnts.KEYS.TEXT], a2[b.MessageConstatnts.KEYS.RECEIVER_TYPE])), (n2 = w.validateMessage(a2)) instanceof K.CometChatException ? (i2(n2), [2]) : (a2.receiver = a2.receiverId, delete a2.receiverId, o2 = a2.parentMessageId, [2, T.makeApiCall(o2 ? "sendMessageInThread" : "sendMessage", o2 ? { parentId: o2 } : {}, a2, a2 instanceof S.MediaMessage).then(function(n3) {
                      return E(s2, void 0, void 0, function() {
                        var e3;
                        return c(this, function(t4) {
                          return e3 = g.MessageController.trasformJSONMessge(n3.data), L.MessageListnerMaping.getInstance().set("all", parseInt(e3.id)), r2(e3), [2];
                        });
                      });
                    }, function(t4) {
                      i2(new K.CometChatException(t4.error));
                    })]);
                  } catch (t4) {
                    i2(new K.CometChatException(t4));
                  }
                  return [2];
                });
              });
            });
          }, G2.sendDirectMessage = function(t2) {
            try {
              return Object.assign(t2, { receiverType: b.MessageConstatnts.RECEIVER_TYPE.USER }), this.sendMessage(t2);
            } catch (t3) {
              w.Logger.error("CometChat: sendDirectMessage", t3);
            }
          }, G2.sendGroupMessage = function(t2) {
            try {
              return Object.assign(t2, { receiverType: b.MessageConstatnts.RECEIVER_TYPE.GROUP }), this.sendMessage(t2);
            } catch (t3) {
              w.Logger.error("CometChat: sendGroupMessage", t3);
            }
          }, G2.sendMediaMessage = function(t2) {
            try {
              return this.sendMessage(t2);
            } catch (t3) {
              w.Logger.error("CometChat: sendMediaMessage", t3);
            }
          }, G2.sendCustomMessage = function(t2) {
            try {
              return this.sendMessage(t2);
            } catch (t3) {
              w.Logger.error("CometChat: sendCustomMessage", t3);
            }
          }, G2.getLastDeliveredMessageId = function() {
            return E(this, void 0, void 0, function() {
              var e2;
              return c(this, function(t2) {
                switch (t2.label) {
                  case 0:
                    return t2.trys.push([0, 2, , 3]), [4, L.MessageListnerMaping.getInstance().get(b.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST)];
                  case 1:
                    return [2, t2.sent()];
                  case 2:
                    return e2 = t2.sent(), w.Logger.error("CometChat: getLastDeliveredMessageId", e2), [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          }, G2.startTyping = function(t2) {
            try {
              if (w.isFalsy(t2)) return;
              var e2 = void 0, n2 = this.RECEIVER_TYPE.USER, o2 = {};
              if (t2 instanceof M.TypingIndicator) e2 = t2.getReceiverId(), n2 = t2.getReceiverType(), o2 = t2.getMetadata();
              else {
                if (!t2.hasOwnProperty(b.TYPING_NOTIFICATION.RECEIVER_ID)) return;
                e2 = t2[b.TYPING_NOTIFICATION.RECEIVER_ID], t2.hasOwnProperty(b.TYPING_NOTIFICATION.RECEIVER_TYPE) && (n2 = t2[b.TYPING_NOTIFICATION.RECEIVER_TYPE]), t2.hasOwnProperty(b.TYPING_NOTIFICATION.META) && (o2 = t2[b.TYPING_NOTIFICATION.META]);
              }
              if (w.isFalsy(e2)) return;
              if (null == v.TypingNotificationController.getTypingStartedMap(e2)) {
                var s2 = G2.getMode();
                return w.isFalsy(s2) || s2 && s2 !== b.APP_SETTINGS.KEYS.NO_TRANSIENT && s2 !== b.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? ($.startTypingIndicator(e2, n2, o2), v.TypingNotificationController.addTypingStarted(e2), void v.TypingNotificationController.removeTypingEnded(e2)) : void 0;
              }
            } catch (t3) {
              w.Logger.error("CometChat: startTyping", t3);
            }
          }, G2.endTyping = function(t2) {
            try {
              if (w.isFalsy(t2)) return;
              var e2 = void 0, n2 = this.RECEIVER_TYPE.USER, o2 = {};
              if (t2 instanceof M.TypingIndicator) e2 = t2.getReceiverId(), n2 = t2.getReceiverType(), o2 = t2.getMetadata();
              else {
                if (!t2.hasOwnProperty(b.TYPING_NOTIFICATION.RECEIVER_ID)) return;
                e2 = t2[b.TYPING_NOTIFICATION.RECEIVER_ID], t2.hasOwnProperty(b.TYPING_NOTIFICATION.RECEIVER_TYPE) && (n2 = t2[b.TYPING_NOTIFICATION.RECEIVER_TYPE]), n2 = n2 == this.RECEIVER_TYPE.USER ? b.WS.CONVERSATION.TYPE.CHAT : b.WS.CONVERSATION.TYPE.GROUP_CHAT, t2.hasOwnProperty(b.TYPING_NOTIFICATION.META) && (o2 = t2[b.TYPING_NOTIFICATION.META]);
              }
              if (w.isFalsy(e2)) return;
              if (null == v.TypingNotificationController.getTypingEndedMap(e2)) {
                var s2 = G2.getMode();
                return w.isFalsy(s2) || s2 && s2 !== b.APP_SETTINGS.KEYS.NO_TRANSIENT && s2 !== b.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? ($.pauseTypingIndicator(e2, n2, o2), v.TypingNotificationController.addTypingEnded(e2), void v.TypingNotificationController.removeTypingStarted(e2)) : void 0;
              }
            } catch (t3) {
              w.Logger.error("CometChat: endTyping", t3);
            }
          }, G2.markAsRead = function() {
            for (var E2 = [], t2 = 0; t2 < arguments.length; t2++) E2[t2] = arguments[t2];
            return new Promise(function(t3, e2) {
              try {
                var n2 = void 0, o2 = void 0, s2 = void 0, r2 = void 0;
                if (3 === E2.length) return e2(new K.CometChatException(b.ReceiptErrors.MISSING_PARAMETERS));
                if (4 === E2.length) {
                  if (w.isFalsy(E2[0]) || "string" != typeof E2[0]) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "MESSAGE_ID", "MESSAGE_ID", "Message ID should be a string."))));
                  if (n2 = E2[0], w.isFalsy(E2[1]) || "string" != typeof E2[1]) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_ID", "RECEIVER_ID", "Receiver ID should be a string."))));
                  if (o2 = E2[1], w.isFalsy(E2[2]) || "string" != typeof E2[2]) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type should be a string."))));
                  if (s2 = E2[2], w.isFalsy(E2[3]) || "string" != typeof E2[3]) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "SENDER_ID", "SENDER_ID", "Sender ID should be a string."))));
                  r2 = E2[3];
                } else {
                  if (1 !== E2.length) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "ARGUMENTS", "ARGUMENTS", "markAsRead() expects either 1 or 4 arguments."))));
                  if (w.isFalsy(E2[0]) || !(E2[0] instanceof l.BaseMessage)) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "MESSAGE", "MESSAGE", "Invalid message object received."))));
                  var i2 = E2[0];
                  n2 = i2.getId().toString(), o2 = (s2 = i2.getReceiverType()) === b.MessageConstatnts.RECEIVER_TYPE.USER ? i2.getSender().getUid() === G2.user.getUid() ? i2.getReceiverId() : i2.getSender().getUid() : i2.getReceiverId(), r2 = i2.getSender().getUid();
                }
                var a2 = G2.getMode();
                return w.isFalsy(a2) || a2 && a2 !== b.APP_SETTINGS.KEYS.NO_TRANSIENT && a2 !== b.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? G2.getConnectionStatus() === b.CONNECTION_STATUS.CONNECTED ? ($.markAsRead(o2, s2, n2, r2), t3()) : e2(new K.CometChatException(b.ReceiptErrors.NO_WEBSOCKET_CONNECTION)) : e2(new K.CometChatException(b.ReceiptErrors.RECEIPTS_TEMPORARILY_BLOCKED));
              } catch (t4) {
                return w.Logger.error("CometChat: markAsRead", t4), e2(new K.CometChatException(b.ReceiptErrors.UNKNOWN_ERROR_OCCURRED));
              }
            });
          }, G2.markAsDelivered = function() {
            for (var E2 = [], t2 = 0; t2 < arguments.length; t2++) E2[t2] = arguments[t2];
            return new Promise(function(t3, e2) {
              try {
                var n2 = void 0, o2 = void 0, s2 = void 0, r2 = void 0;
                if (3 === E2.length) return e2(new K.CometChatException(b.ReceiptErrors.MISSING_PARAMETERS));
                if (4 === E2.length) {
                  if (w.isFalsy(E2[0]) || "string" != typeof E2[0]) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "MESSAGE_ID", "MESSAGE_ID", "Message ID should be a string."))));
                  if (n2 = E2[0], w.isFalsy(E2[1]) || "string" != typeof E2[1]) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_ID", "RECEIVER_ID", "Receiver ID should be a string."))));
                  if (o2 = E2[1], w.isFalsy(E2[2]) || "string" != typeof E2[2]) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type should be a string."))));
                  if (s2 = E2[2], w.isFalsy(E2[3]) || "string" != typeof E2[3]) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "SENDER_ID", "SENDER_ID", "Sender ID should be a string."))));
                  r2 = E2[3];
                } else {
                  if (1 !== E2.length) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "ARGUMENTS", "ARGUMENTS", "markAsDelivered() expects either 1 or 4 arguments."))));
                  if (w.isFalsy(E2[0]) || !(E2[0] instanceof l.BaseMessage)) return e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ReceiptErrors.INVALID_PARAMETER), "MESSAGE", "MESSAGE", "Invalid message object received."))));
                  var i2 = E2[0];
                  n2 = i2.getId().toString(), o2 = (s2 = i2.getReceiverType()) === b.MessageConstatnts.RECEIVER_TYPE.USER ? i2.getSender().getUid() === G2.user.getUid() ? i2.getReceiverId() : i2.getSender().getUid() : i2.getReceiverId(), r2 = i2.getSender().getUid();
                }
                var a2 = G2.getMode();
                return w.isFalsy(a2) || a2 && a2 !== b.APP_SETTINGS.KEYS.NO_TRANSIENT && a2 !== b.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? G2.getConnectionStatus() === b.CONNECTION_STATUS.CONNECTED ? ($.markAsDelivered(o2, s2, n2, r2), t3()) : e2(new K.CometChatException(b.ReceiptErrors.NO_WEBSOCKET_CONNECTION)) : e2(new K.CometChatException(b.ReceiptErrors.RECEIPTS_TEMPORARILY_BLOCKED));
              } catch (t4) {
                return w.Logger.error("CometChat: markAsDelivered", t4), e2(new K.CometChatException(b.ReceiptErrors.UNKNOWN_ERROR_OCCURRED));
              }
            });
          }, G2.sendTransientMessage = function(t2) {
            try {
              if (w.isFalsy(t2)) return;
              var e2 = void 0, n2 = void 0, o2 = {};
              if (!(t2 instanceof z.TransientMessage)) return;
              if (e2 = t2.getReceiverId(), n2 = t2.getReceiverType(), o2 = t2.getData(), w.isFalsy(e2) || w.isFalsy(n2)) return;
              var s2 = G2.getMode();
              return w.isFalsy(s2) || s2 && s2 !== b.APP_SETTINGS.KEYS.NO_TRANSIENT ? void $.sendTransientMessage(e2, n2, o2) : void 0;
            } catch (t3) {
              w.Logger.error("CometChat: sendTransientMessage", t3);
            }
          }, G2.sendTestMessage = function(o2) {
            return E(this, void 0, void 0, function() {
              var e2, n2;
              return c(this, function(t2) {
                switch (t2.label) {
                  case 0:
                    return t2.trys.push([0, 3, , 4]), (e2 = o2) instanceof l.BaseMessage ? [3, 2] : [4, F.CometChatHelper.processMessage(o2)];
                  case 1:
                    e2 = t2.sent(), t2.label = 2;
                  case 2:
                    return e2 instanceof _.TextMessage && W.WSConnectionHelper.getInstance().publishMessage(e2), [3, 4];
                  case 3:
                    return n2 = t2.sent(), w.Logger.error("CometChat: sendTestMessage", n2), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }, G2.getMessageDetails = function(t2) {
            return new Promise(function(e2, n2) {
              try {
                w.isFalsy(t2) ? n2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING)) : T.makeApiCall("getMessageDetails", { messageId: t2 }).then(function(t3) {
                  e2(g.MessageController.trasformJSONMessge(t3.data));
                }, function(t3) {
                  w.Logger.error("CometChat:GetMessageDetails:", t3), n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.getMessageReceipts = function(o2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateMsgId(o2);
                if (t2 instanceof K.CometChatException) return void n2(t2);
                w.isFalsy(o2) ? n2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING)) : T.makeApiCall("getMessageDetails", { messageId: o2 }).then(function(t3) {
                  g.MessageController.getReceiptsFromJSON(t3.data).then(function(t4) {
                    e2(t4);
                  }, function(t4) {
                    n2(new K.CometChatException(t4));
                  });
                }, function(t3) {
                  w.Logger.error("CometChat:GetMessageDetails:", t3), n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.getUnreadMessageCount = function(n2) {
            void 0 === n2 && (n2 = false);
            var s2 = 0;
            return new Promise(function(o2, e2) {
              try {
                var t2 = w.validateHideMessagesFromBlockedUsers(n2);
                if (t2 instanceof K.CometChatException) return void e2(t2);
                n2 && (s2 = 1), T.makeApiCall("getMessages", {}, { unread: 1, count: 1, hideMessagesFromBlockedUsers: s2 }).then(function(t3) {
                  var e3 = {}, n3 = {};
                  t3.data.map(function(t4) {
                    t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == b.MessageConstatnts.RECEIVER_TYPE.GROUP ? n3[t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT] : e3[t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT];
                  }), o2({ users: e3, groups: n3 });
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.getUnreadMessageCountForAllUsers = function(o2) {
            void 0 === o2 && (o2 = false);
            var s2 = 0;
            return new Promise(function(n2, e2) {
              try {
                var t2 = w.validateHideMessagesFromBlockedUsers(o2);
                if (t2 instanceof K.CometChatException) return void e2(t2);
                o2 && (s2 = 1), T.makeApiCall("getMessages", {}, { hideMessagesFromBlockedUsers: s2, receiverType: b.MessageConstatnts.RECEIVER_TYPE.USER, unread: 1, count: 1 }).then(function(t3) {
                  var e3 = {};
                  t3.data.map(function(t4) {
                    e3[t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT];
                  }), n2(p({}, e3));
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.getUnreadMessageCountForAllGroups = function(o2) {
            void 0 === o2 && (o2 = false);
            var s2 = 0;
            return new Promise(function(n2, e2) {
              try {
                var t2 = w.validateHideMessagesFromBlockedUsers(o2);
                if (t2 instanceof K.CometChatException) return void e2(t2);
                o2 && (s2 = 1), T.makeApiCall("getMessages", {}, { hideMessagesFromBlockedUsers: s2, receiverType: b.MessageConstatnts.RECEIVER_TYPE.GROUP, unread: 1, count: 1 }).then(function(t3) {
                  var e3 = {};
                  t3.data.map(function(t4) {
                    t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == b.MessageConstatnts.RECEIVER_TYPE.GROUP && (e3[t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT]);
                  }), n2(p({}, e3));
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.getUnreadMessageCountForUser = function(s2, r2) {
            void 0 === r2 && (r2 = false);
            var i2 = 0;
            return new Promise(function(n2, e2) {
              try {
                var t2 = w.validateId(s2, "user");
                if (t2 instanceof K.CometChatException) return void e2(t2);
                var o2 = w.validateHideMessagesFromBlockedUsers(r2);
                if (o2 instanceof K.CometChatException) return void e2(o2);
                r2 && (i2 = 1), T.makeApiCall("getUserMessages", { listId: s2 }, { hideMessagesFromBlockedUsers: i2, unread: 1, count: 1, uid: s2 }).then(function(t3) {
                  var e3 = {};
                  t3.data.map(function(t4) {
                    e3[t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT];
                  }), n2(p({}, e3));
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.getUnreadMessageCountForGroup = function(s2, r2) {
            void 0 === r2 && (r2 = false);
            var i2 = 0;
            return new Promise(function(n2, e2) {
              try {
                var t2 = w.validateId(s2, "group");
                if (t2 instanceof K.CometChatException) return void e2(t2);
                var o2 = w.validateHideMessagesFromBlockedUsers(r2);
                if (o2 instanceof K.CometChatException) return void e2(o2);
                r2 && (i2 = 1), T.makeApiCall("getGroupMessages", { listId: s2 }, { hideMessagesFromBlockedUsers: i2, unread: 1, count: 1, guid: s2 }).then(function(t3) {
                  var e3 = {};
                  t3.data.map(function(t4) {
                    t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == b.MessageConstatnts.RECEIVER_TYPE.GROUP && (e3[t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = t4[b.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT]);
                  }), n2(p({}, e3));
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.editMessage = function(o2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateMsgId(o2.getId());
                if (t2 instanceof K.CometChatException) return void n2(t2);
                T.makeApiCall("updateMessage", { messageId: o2.getId() }, o2).then(function(t3) {
                  e2(g.MessageController.trasformJSONMessge(t3.data).getActionOn());
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.deleteMessage = function(o2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateMsgId(o2);
                if (t2 instanceof K.CometChatException) return void n2(t2);
                T.makeApiCall("deleteMessage", { messageId: o2 }, { id: o2 }).then(function(t3) {
                  e2(g.MessageController.trasformJSONMessge(t3.data).getActionOn());
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.getOnlineUserCount = function() {
            return new Promise(function(o2, s2) {
              try {
                w.getAppSettings().then(function(t2) {
                  var e2 = w.format(new u.EndpointFactory().wsApi, w.getChatHost(t2), w.format(b.ONLINE_MEMBER_COUNT_API.ENDPOINTS.GET_ONLINE_MEMBER_COUNT, t2[b.APP_SETTINGS.KEYS.WS_API_VERSION])), n2 = { appId: G2.appId, Authorization: G2.jwt, Accept: "application/json", "Content-Type": "application/json" };
                  T.postData(e2, "POST", {}, n2, false).then(function(t3) {
                    return t3.json();
                  }).then(function(t3) {
                    return t3.hasOwnProperty(b.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? o2(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA][b.ONLINE_MEMBER_COUNT_API.RESPONSE.ONLINE_USERS_COUNT]) : s2(new K.CometChatException(t3.error));
                  }).catch(function() {
                    var t3 = { error: R.FETCH_ERROR.ERROR_IN_API_CALL };
                    return s2(t3);
                  });
                }, function(t2) {
                  return s2(new K.CometChatException(t2));
                });
              } catch (t2) {
                return s2(new K.CometChatException(t2));
              }
            });
          }, G2.getOnlineGroupMemberCount = function(i2) {
            return new Promise(function(s2, r2) {
              try {
                if (!i2 || 0 == i2.length) return r2(new K.CometChatException(b.ONLINE_MEMBER_COUNT_API.ERRORS.INVALID_GROUPLIST));
                w.getAppSettings().then(function(t2) {
                  var e2 = w.format(new u.EndpointFactory().wsApi, w.getChatHost(t2), w.format(b.ONLINE_MEMBER_COUNT_API.ENDPOINTS.GET_ONLINE_MEMBER_COUNT, t2[b.APP_SETTINGS.KEYS.WS_API_VERSION])), n2 = { groups: i2 }, o2 = { appId: G2.appId, Authorization: G2.jwt, Accept: "application/json", "Content-Type": "application/json" };
                  T.postData(e2, "POST", n2, o2, false).then(function(t3) {
                    return t3.json();
                  }).then(function(t3) {
                    return t3.hasOwnProperty(b.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? s2(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA][b.ONLINE_MEMBER_COUNT_API.RESPONSE.GROUPS]) : r2(new K.CometChatException(t3.error));
                  }).catch(function() {
                    var t3 = { error: R.FETCH_ERROR.ERROR_IN_API_CALL };
                    return r2(t3);
                  });
                }, function(t2) {
                  return r2(new K.CometChatException(t2));
                });
              } catch (t2) {
                return r2(new K.CometChatException(t2));
              }
            });
          }, G2.createUser = function(s2, r2) {
            return new Promise(function(n2, e2) {
              try {
                if (w.isFalsy(r2)) return void e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.GENERAL_ERROR.INVALID), "AUTH_KEY", "AUTH_KEY", "AUTH_KEY", "AUTH_KEY"))));
                G2.apiKey = r2;
                var t2 = w.validateCreateUser(s2);
                if (t2 instanceof K.CometChatException) return void e2(t2);
                if (!(s2 instanceof C.User)) {
                  var o2 = void 0;
                  if (!s2.hasOwnProperty(b.UserConstants.UID)) return void e2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING));
                  if (!s2.hasOwnProperty(b.UserConstants.NAME)) return void e2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING));
                  o2 = new C.User(s2[b.UserConstants.UID], s2[b.UserConstants.NAME]), s2.hasOwnProperty(b.UserConstants.AVATAR) && o2.setAvatar(s2[b.UserConstants.AVATAR]), s2.hasOwnProperty(b.UserConstants.ROLE) && o2.setRole(s2[b.UserConstants.ROLE]), s2.hasOwnProperty(b.UserConstants.META_DATA) && o2.setMetadata(s2[b.UserConstants.META_DATA]), s2.hasOwnProperty(b.UserConstants.LINK) && o2.setLink(s2[b.UserConstants.LINK]), s2.hasOwnProperty(b.UserConstants.STATUS_MESSAGE) && o2.setStatusMessage(s2[b.UserConstants.STATUS_MESSAGE]), s2.hasOwnProperty(b.UserConstants.TAGS) && o2.setTags(s2[b.UserConstants.TAGS]), s2 = o2;
                }
                T.makeApiCall("createUser", {}, s2).then(function(t3) {
                  var e3 = h.UsersController.trasformJSONUser(t3.data);
                  n2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.updateUser = function(o2, i2) {
            var a2 = this;
            return new Promise(function(s2, e2) {
              try {
                if (w.isFalsy(i2)) return void e2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.GENERAL_ERROR.INVALID), "AUTH_KEY", "AUTH_KEY", "AUTH_KEY", "AUTH_KEY"))));
                G2.apiKey = i2;
                var t2 = w.validateUpdateUser(o2);
                if (t2 instanceof K.CometChatException) return void e2(t2);
                if (!(o2 instanceof C.User)) {
                  var n2 = void 0;
                  if (!o2.hasOwnProperty(b.UserConstants.UID)) return void e2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING));
                  n2 = new C.User(o2[b.UserConstants.UID]), o2.hasOwnProperty(b.UserConstants.NAME) && n2.setName(o2[b.UserConstants.NAME]), o2.hasOwnProperty(b.UserConstants.AVATAR) && n2.setAvatar(o2[b.UserConstants.AVATAR]), o2.hasOwnProperty(b.UserConstants.ROLE) && n2.setRole(o2[b.UserConstants.ROLE]), o2.hasOwnProperty(b.UserConstants.META_DATA) && n2.setMetadata(o2[b.UserConstants.META_DATA]), o2.hasOwnProperty(b.UserConstants.LINK) && n2.setLink(o2[b.UserConstants.LINK]), o2.hasOwnProperty(b.UserConstants.STATUS_MESSAGE) && n2.setStatusMessage(o2[b.UserConstants.STATUS_MESSAGE]), o2.hasOwnProperty(b.UserConstants.TAGS) && n2.setTags(o2[b.UserConstants.TAGS]), o2 = n2;
                }
                var r2 = o2.uid;
                T.makeApiCall("updateUser", { uid: r2 }, o2).then(function(o3) {
                  if (a2.user && r2.toLocaleLowerCase() === a2.user.getUid().toLocaleLowerCase()) d.LocalStorage.getInstance().get("user").then(function(t4) {
                    if (t4) {
                      var e3 = h.UsersController.trasformJSONUser(o3.data), n3 = o3.data;
                      n3.wsChannel = t4.wsChannel, n3.authToken = G2.authToken, n3.status = b.PresenceConstatnts.STATUS.ONLINE, t4.jwt && (n3.jwt = t4.jwt), G2.user = new C.Me(n3), a2.localStorage.set("user", G2.user), s2(e3);
                    }
                  });
                  else {
                    var t3 = h.UsersController.trasformJSONUser(o3.data);
                    s2(t3);
                  }
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.updateCurrentUserDetails = function(s2) {
            var r2 = this;
            return new Promise(function(o2, e2) {
              try {
                s2.uid = r2.user.uid;
                var t2 = w.validateUpdateUser(s2);
                if (t2 instanceof K.CometChatException) return void e2(t2);
                if (!(s2 instanceof C.User)) {
                  var n2 = void 0;
                  s2.hasOwnProperty(b.UserConstants.UID) && (n2 = new C.User(s2[b.UserConstants.UID])), s2.hasOwnProperty(b.UserConstants.NAME) && n2.setName(s2[b.UserConstants.NAME]), s2.hasOwnProperty(b.UserConstants.AVATAR) && n2.setAvatar(s2[b.UserConstants.AVATAR]), s2.hasOwnProperty(b.UserConstants.ROLE) && n2.setRole(s2[b.UserConstants.ROLE]), s2.hasOwnProperty(b.UserConstants.META_DATA) && n2.setMetadata(s2[b.UserConstants.META_DATA]), s2.hasOwnProperty(b.UserConstants.LINK) && n2.setLink(s2[b.UserConstants.LINK]), s2.hasOwnProperty(b.UserConstants.STATUS_MESSAGE) && n2.setStatusMessage(s2[b.UserConstants.STATUS_MESSAGE]), s2.hasOwnProperty(b.UserConstants.TAGS) && n2.setTags(s2[b.UserConstants.TAGS]), s2 = n2;
                }
                T.makeApiCall("updateMyDetails", {}, s2).then(function(t3) {
                  var e3 = h.UsersController.trasformJSONUser(t3.data), n3 = G2.user = new C.Me(t3.data);
                  n3.setStatus(b.PresenceConstatnts.STATUS.ONLINE), G2.localStorage.set("user", n3), o2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.getUser = function(o2) {
            return new Promise(function(n2, e2) {
              try {
                "object" == typeof o2 && o2.hasOwnProperty("uid") && (o2 = o2.uid);
                var t2 = w.validateId(o2, "user");
                if (t2 instanceof K.CometChatException) return void e2(t2);
                T.makeApiCall("user", { uid: o2 }).then(function(t3) {
                  var e3 = h.UsersController.trasformJSONUser(t3.data);
                  n2(e3);
                }).catch(function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.getLoggedInUser = function() {
            var l2 = this;
            return new Promise(function(u2, S2) {
              try {
                G2.localStorage.get(b.LOCAL_STORE.KEY_USER).then(function(t2) {
                  if (t2) u2(G2.user = new C.Me(t2));
                  else {
                    var r2 = "", i2 = "", a2 = b.APPINFO.platform, E2 = b.APPINFO.sdkVersion, c2 = b.APPINFO.apiVersion;
                    G2.keyStore.get(b.LOCAL_STORE.KEY_DEVICE_ID).then(function(t3) {
                      if (i2 = t3, navigator && (r2 = navigator.userAgent), null == i2) {
                        var e2 = Z(), n2 = (/* @__PURE__ */ new Date()).getTime();
                        i2 = l2.appId + "_" + e2 + "_" + n2, G2.keyStore.set(b.LOCAL_STORE.KEY_DEVICE_ID, i2);
                      }
                      var o2 = { version: E2, apiVersion: c2, userAgent: r2 };
                      w.isFalsy(l2.platform) || (o2.platform = l2.platform), w.isFalsy(l2.language) || (o2.language = l2.language), w.isFalsy(l2.resource) || (o2.resource = l2.resource);
                      var s2 = { platform: a2, deviceId: i2, appInfo: o2 };
                      T.makeApiCall("updateMyDetails", {}, s2, false).then(function(t4) {
                        t4.data.jwt && (G2.jwt = t4.data.jwt);
                        var e3 = t4.data.settings;
                        e3 && (d.LocalStorage.getInstance().set("app_settings", e3), e3[b.APP_SETTINGS.KEYS.MODE] && G2.setMode(e3[b.APP_SETTINGS.KEYS.MODE]), e3[b.APP_SETTINGS.KEYS.SETTINGS_HASH] && (G2.settingsHash = e3[b.APP_SETTINGS.KEYS.SETTINGS_HASH]), e3[b.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (G2.settingsHashReceivedAt = e3[b.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), G2.isAnalyticsDisabled = !!e3[b.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED]), u2(new C.Me(t4.data));
                      }, function(t4) {
                        S2(new K.CometChatException(t4.error));
                      }).catch(function(t4) {
                        S2(new K.CometChatException(t4));
                      });
                    });
                  }
                });
              } catch (t2) {
                S2(new K.CometChatException(t2));
              }
            });
          }, G2.getLoggedinUser = function() {
            return new Promise(function(e2, n2) {
              try {
                G2.localStorage.get(b.LOCAL_STORE.KEY_USER).then(function(t2) {
                  e2(t2 ? new C.User(t2) : null);
                }, function(t2) {
                  e2(null);
                });
              } catch (t2) {
                n2(new K.CometChatException(t2));
              }
            });
          }, G2.blockUsers = function(o2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateArray(o2, "blockUsers");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                w.isFalsy(o2) ? n2(new K.CometChatException(R.USERS_REQUEST_ERRORS.EMPTY_USERS_LIST)) : T.makeApiCall("blockUsers", {}, { blockedUids: o2 }).then(function(t3) {
                  e2(t3.data);
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.unblockUsers = function(o2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateArray(o2, "unblockUsers");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                w.isFalsy(o2) ? n2(new K.CometChatException(R.USERS_REQUEST_ERRORS.EMPTY_USERS_LIST)) : T.makeApiCall("unblockUsers", {}, { blockedUids: o2 }).then(function(t3) {
                  e2(t3.data);
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.getConversation = function(i2, a2) {
            return new Promise(function(n2, o2) {
              try {
                var t2 = w.validateConversationType(a2);
                if (t2 instanceof K.CometChatException) return void o2(t2);
                var e2 = w.validateId(i2, a2);
                if (e2 instanceof K.CometChatException) return void o2(e2);
                a2 = a2.toLowerCase(), i2 = i2.toLowerCase();
                var s2 = {}, r2 = "";
                a2 === b.MessageConstatnts.RECEIVER_TYPE.GROUP ? (r2 = "getGroupConversation", s2.guid = i2) : (r2 = "getUserConversation", s2.uid = i2), T.makeApiCall(r2, s2).then(function(t3) {
                  if (t3.data) {
                    var e3 = t3.data;
                    n2(x.ConversationController.trasformJSONConversation(e3.conversationId, e3.conversationType, e3.lastMessage, e3.conversationWith, parseInt(e3.unreadMessageCount), e3.tags ? e3.tags : []));
                  } else o2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ConversationErrors.CONVERSATION_NOT_FOUND), a2, i2))));
                }, function(t3) {
                  o2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                o2(new K.CometChatException(t3));
              }
            });
          }, G2.tagConversation = function(i2, a2, E2) {
            return void 0 === E2 && (E2 = []), new Promise(function(n2, o2) {
              try {
                var t2 = w.validateConversationType(a2);
                if (t2 instanceof K.CometChatException) return void o2(t2);
                var e2 = w.validateId(i2, a2);
                if (e2 instanceof K.CometChatException) return void o2(e2);
                a2 = a2.toLowerCase(), i2 = i2.toLowerCase();
                var s2 = {}, r2 = "";
                a2 === b.MessageConstatnts.RECEIVER_TYPE.GROUP ? (r2 = "updateGroupConversation", s2.guid = i2) : (r2 = "updateUserConversation", s2.uid = i2), T.makeApiCall(r2, s2, { tags: E2 }).then(function(t3) {
                  if (t3.data) {
                    var e3 = t3.data;
                    n2(x.ConversationController.trasformJSONConversation(e3.conversationId, e3.conversationType, e3.lastMessage, e3.conversationWith, parseInt(e3.unreadMessageCount), e3.tags ? e3.tags : []));
                  } else o2(new K.CometChatException(JSON.parse(w.format(JSON.stringify(b.ConversationErrors.CONVERSATION_NOT_FOUND), a2, i2))));
                }, function(t3) {
                  o2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                o2(new K.CometChatException(t3));
              }
            });
          }, G2.deleteConversation = function(i2, a2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateConversationType(a2);
                if (t2 instanceof K.CometChatException) return void n2(t2);
                var o2 = w.validateId(i2, a2);
                if (o2 instanceof K.CometChatException) return void n2(o2);
                var s2 = {}, r2 = "";
                a2 = a2.toLowerCase(), i2 = i2.toLowerCase(), a2 === b.MessageConstatnts.RECEIVER_TYPE.GROUP ? (r2 = "deleteGroupConversation", s2.guid = i2) : (r2 = "deleteUserConversation", s2.uid = i2), T.makeApiCall(r2, s2).then(function(t3) {
                  e2("Conversation deleted successfully.");
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.createGroup = function(s2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateCreateGroup(s2);
                if (t2 instanceof K.CometChatException) return void n2(t2);
                if (!(s2 instanceof a.Group)) {
                  var o2 = void 0;
                  if (!s2.hasOwnProperty(b.GroupConstants.KEYS.GUID)) return void n2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING));
                  if (!s2.hasOwnProperty(b.GroupConstants.KEYS.NAME)) return void n2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING));
                  if (o2 = new a.Group(s2[b.GroupConstants.KEYS.GUID], s2[b.GroupConstants.KEYS.NAME], ""), s2.hasOwnProperty(b.GroupConstants.KEYS.TYPE)) if (s2[b.GroupConstants.KEYS.TYPE].toLocaleLowerCase() == b.GroupType.Password) {
                    if (!s2.hasOwnProperty(b.GroupConstants.KEYS.PASSWORD)) return void n2(new K.CometChatException(R.GROUP_CREATION_ERRORS.EMPTY_PASSWORD));
                    o2.setType(b.GROUP_TYPE.PASSWORD), o2.setPassword(s2[b.GroupConstants.KEYS.PASSWORD]);
                  } else o2.setType(s2[b.GroupConstants.KEYS.TYPE]);
                  else o2.setType(b.GROUP_TYPE.PUBLIC);
                  s2.hasOwnProperty(b.GroupConstants.KEYS.ICON) && o2.setIcon(s2[b.GroupConstants.KEYS.ICON]), s2.hasOwnProperty(b.GroupConstants.KEYS.DESCRIPTION) && o2.setDescription(s2[b.GroupConstants.KEYS.DESCRIPTION]), s2.hasOwnProperty(b.GroupConstants.KEYS.TAGS) && o2.setTags(s2[b.GroupConstants.KEYS.TAGS]), s2 = o2;
                }
                T.makeApiCall("createGroup", {}, s2).then(function(t3) {
                  A.GroupsController.trasformJSONGroup(t3.data).setHasJoined(true), e2(A.GroupsController.trasformJSONGroup(t3.data));
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.getGroup = function(o2) {
            return new Promise(function(e2, n2) {
              try {
                "object" == typeof o2 && o2.hasOwnProperty("guid") && (o2 = o2.guid);
                var t2 = w.validateId(o2, "group");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                T.makeApiCall("getGroup", { guid: o2 }).then(function(t3) {
                  e2(A.GroupsController.trasformJSONGroup(t3.data));
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.joinGroup = function(s2, r2, i2) {
            return void 0 === r2 && (r2 = b.GroupType.Public), void 0 === i2 && (i2 = ""), new Promise(function(n2, e2) {
              try {
                var t2 = w.validateJoinGroup(s2, r2, i2);
                if (t2 instanceof K.CometChatException) return void e2(t2);
                var o2 = void 0;
                "object" == typeof s2 && (s2.hasOwnProperty(b.GroupConstants.KEYS.GUID) ? (s2.hasOwnProperty(b.GroupConstants.KEYS.TYPE) && (r2 = s2[b.GroupConstants.KEYS.TYPE], s2[b.GroupConstants.KEYS.TYPE].toLocaleLowerCase() === b.GroupType.Password && s2.hasOwnProperty(b.GroupConstants.KEYS.PASSWORD) && (i2 = s2[b.GroupConstants.KEYS.PASSWORD])), s2 = s2[b.GroupConstants.KEYS.GUID]) : e2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING))), o2 = w.isFalsy(i2) ? new a.Group(s2, "name", r2) : new a.Group(s2, "name", r2, i2), T.makeApiCall("joinGroup", o2, o2).then(function(t3) {
                  var e3 = A.GroupsController.trasformJSONGroup(t3.data[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA][b.ActionConstatnts.ACTION_KEYS.ENTITIES][b.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][b.ActionConstatnts.ACTION_KEYS.ENTITY]);
                  e3.setHasJoined(true), n2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.updateGroup = function(s2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateUpdateGroup(s2);
                if (t2 instanceof K.CometChatException) return void n2(t2);
                if (!(s2 instanceof a.Group)) {
                  var o2 = void 0;
                  if (!s2.hasOwnProperty(b.GroupConstants.KEYS.GUID)) return void n2(new K.CometChatException(R.ERRORS.PARAMETER_MISSING));
                  o2 = new a.Group(b.GroupConstants.KEYS.GUID, "", ""), s2.hasOwnProperty(b.GroupConstants.KEYS.TYPE) ? o2.setType(s2[b.GroupConstants.KEYS.TYPE]) : (s2[b.GroupConstants.KEYS.TYPE] = b.GROUP_TYPE.PUBLIC, o2.setType[b.GROUP_TYPE.PUBLIC]), s2.hasOwnProperty(b.GroupConstants.KEYS.NAME) && o2.setName(s2[b.GroupConstants.KEYS.NAME]), s2.hasOwnProperty(b.GroupConstants.KEYS.ICON) && o2.setIcon(s2[b.GroupConstants.KEYS.ICON]), s2.hasOwnProperty(b.GroupConstants.KEYS.DESCRIPTION) && o2.setDescription(s2[b.GroupConstants.KEYS.DESCRIPTION]), s2.hasOwnProperty(b.GroupConstants.KEYS.TAGS) && o2.setTags(s2[b.GroupConstants.KEYS.TAGS]), s2 = o2;
                }
                T.makeApiCall("updateGroup", s2, s2).then(function(t3) {
                  e2(A.GroupsController.trasformJSONGroup(t3.data));
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.deleteGroup = function(o2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateId(o2, "group");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                T.makeApiCall("deleteGroup", { guid: o2 }).then(function(t3) {
                  e2(true);
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.leaveGroup = function(o2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateId(o2, "group");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                T.makeApiCall("leaveGroup", { guid: o2 }).then(function(t3) {
                  e2(true);
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.kickGroupMember = function(s2, r2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateId(s2, "group");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                var o2 = w.validateId(r2, "user");
                if (o2 instanceof K.CometChatException) return void n2(o2);
                T.makeApiCall("kickGroupMembers", { guid: s2, uid: r2 }).then(function(t3) {
                  e2(true);
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.updateGroupMemberScope = function(r2, i2, a2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateId(r2, "group");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                var o2 = w.validateId(i2, "user");
                if (o2 instanceof K.CometChatException) return void n2(o2);
                var s2 = w.validateScope(a2);
                if (s2 instanceof K.CometChatException) return void n2(s2);
                T.makeApiCall("changeScopeOfMember", { guid: r2, uid: i2 }, { scope: a2 }).then(function(t3) {
                  e2(true);
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.banGroupMember = function(s2, r2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateId(s2, "group");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                var o2 = w.validateId(r2, "user");
                if (o2 instanceof K.CometChatException) return void n2(o2);
                T.makeApiCall("banGroupMember", { guid: s2, uid: r2 }).then(function(t3) {
                  e2(true);
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.unbanGroupMember = function(s2, r2) {
            return new Promise(function(e2, n2) {
              try {
                var t2 = w.validateId(s2, "group");
                if (t2 instanceof K.CometChatException) return void n2(t2);
                var o2 = w.validateId(r2, "user");
                if (o2 instanceof K.CometChatException) return void n2(o2);
                T.makeApiCall("unbanGroupMember", { guid: s2, uid: r2 }).then(function(t3) {
                  e2(true);
                }, function(t3) {
                  n2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                n2(new K.CometChatException(t3));
              }
            });
          }, G2.addMembersToGroup = function(i2, a2, E2) {
            var c2 = [], u2 = [], S2 = [], l2 = [];
            return new Promise(function(t2, e2) {
              try {
                var n2 = w.validateId(i2, "group");
                if (n2 instanceof K.CometChatException) return void e2(n2);
                var o2 = w.validateArray(a2, "groupMembers");
                if (o2 instanceof K.CometChatException) return void e2(o2);
                if (E2) {
                  var s2 = w.validateArray(E2, "bannedMembers");
                  if (s2 instanceof K.CometChatException) return void e2(s2);
                }
                w.isFalsy(a2) && w.isFalsy(E2) ? e2(new K.CometChatException({})) : w.isFalsy(a2) || w.isFalsy(E2) ? w.isFalsy(a2) ? E2.map(function(t3) {
                  l2.push(t3);
                }) : (a2.filter(function(t3) {
                  if (t3.getScope() == b.GROUP_MEMBER_SCOPE.ADMIN) return true;
                }).map(function(t3) {
                  c2.push(t3.getUid());
                }), a2.filter(function(t3) {
                  if (t3.getScope() == b.GROUP_MEMBER_SCOPE.MODERATOR) return true;
                }).map(function(t3) {
                  u2.push(t3.getUid());
                }), a2.filter(function(t3) {
                  if (t3.getScope() == b.GROUP_MEMBER_SCOPE.PARTICIPANT) return true;
                }).map(function(t3) {
                  S2.push(t3.getUid());
                })) : (a2.filter(function(t3) {
                  if (t3.getScope() == b.GROUP_MEMBER_SCOPE.ADMIN) return true;
                }).map(function(t3) {
                  c2.push(t3.getUid());
                }), a2.filter(function(t3) {
                  if (t3.getScope() == b.GROUP_MEMBER_SCOPE.MODERATOR) return true;
                }).map(function(t3) {
                  u2.push(t3.getUid());
                }), a2.filter(function(t3) {
                  if (t3.getScope() == b.GROUP_MEMBER_SCOPE.PARTICIPANT) return true;
                }).map(function(t3) {
                  S2.push(t3.getUid());
                }), E2.map(function(t3) {
                  l2.push(t3);
                }));
                var r2 = {};
                w.isFalsy(c2) || (r2 = p(p({}, r2), { admins: c2 })), w.isFalsy(S2) || (r2 = p(p({}, r2), { participants: S2 })), w.isFalsy(u2) || (r2 = p(p({}, r2), { moderators: u2 })), w.isFalsy(l2) || (r2 = p(p({}, r2), { usersToBan: l2 })), T.makeApiCall("addMemebersToGroup", { guid: i2 }, r2).then(function(e3) {
                  var n3 = {};
                  Object.keys(e3.data.admins).map(function(t3) {
                    e3.data.admins[t3][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? n3[t3] = b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : n3[t3] = e3.data.admins[t3][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(e3.data.participants).map(function(t3) {
                    e3.data.participants[t3][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? n3[t3] = b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : n3[t3] = e3.data.participants[t3][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(e3.data.moderators).map(function(t3) {
                    e3.data.moderators[t3][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? n3[t3] = b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : n3[t3] = e3.data.moderators[t3][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(e3.data.usersToBan).map(function(t3) {
                    e3.data.usersToBan[t3][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? n3[t3] = b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : n3[t3] = e3.data.usersToBan[t3][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), t2(n3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.transferGroupOwnership = function(s2, r2) {
            return new Promise(function(n2, e2) {
              try {
                var t2 = w.validateId(s2, "group");
                if (t2 instanceof K.CometChatException) return void e2(t2);
                var o2 = w.validateId(r2, "user");
                if (o2 instanceof K.CometChatException) return void e2(o2);
                T.makeApiCall("transferOwnership", { guid: s2 }, { owner: r2 }).then(function(t3) {
                  var e3;
                  e3 = t3 && t3.data && t3.data.message ? t3.data.message : "Ownership transferred to user " + r2 + " for the group with guid " + s2 + ".", n2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.createGroupWithMembers = function(i2, a2, E2) {
            var c2 = [], u2 = [], S2 = [], l2 = [];
            return new Promise(function(r2, e2) {
              try {
                var t2 = w.validateCreateGroup(i2);
                if (t2 instanceof K.CometChatException) return void e2(t2);
                if (a2 && 0 < a2.length) {
                  var n2 = w.validateArray(a2, "groupMembers");
                  if (n2 instanceof K.CometChatException) return void e2(n2);
                  a2.map(function(t3) {
                    t3.getScope() === b.GROUP_MEMBER_SCOPE.ADMIN && c2.push(t3.getUid()), t3.getScope() === b.GROUP_MEMBER_SCOPE.MODERATOR && u2.push(t3.getUid()), t3.getScope() === b.GROUP_MEMBER_SCOPE.PARTICIPANT && S2.push(t3.getUid());
                  });
                }
                if (E2 && 0 < E2.length) {
                  var o2 = w.validateArray(E2, "bannedMembers");
                  if (o2 instanceof K.CometChatException) return void e2(o2);
                  E2.map(function(t3) {
                    l2.push(t3);
                  });
                }
                var s2 = {};
                s2 = p({}, i2), w.isFalsy(c2) || (s2.members = p(p({}, s2.members), { admins: c2 })), w.isFalsy(S2) || (s2.members = p(p({}, s2.members), { participants: S2 })), w.isFalsy(u2) || (s2.members = p(p({}, s2.members), { moderators: u2 })), w.isFalsy(l2) || (s2.members = p(p({}, s2.members), { usersToBan: l2 })), T.makeApiCall("createGroup", {}, s2).then(function(t3) {
                  var e3 = { members: {} }, n3 = t3.data.members.data ? t3.data.members.data : { admins: {}, moderators: {}, participants: {}, usersToBan: {} };
                  Object.keys(n3.admins).map(function(t4) {
                    n3.admins[t4][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? e3.members[t4] = b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : e3.members[t4] = n3.admins[t4][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(n3.participants).map(function(t4) {
                    n3.participants[t4][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? e3.members[t4] = b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : e3.members[t4] = n3.participants[t4][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(n3.moderators).map(function(t4) {
                    n3.moderators[t4][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? e3.members[t4] = b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : e3.members[t4] = n3.moderators[t4][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(n3.usersToBan).map(function(t4) {
                    n3.usersToBan[t4][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? e3.members[t4] = b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : e3.members[t4] = n3.usersToBan[t4][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][b.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), delete t3.data.members;
                  var o3 = t3.data, s3 = A.GroupsController.trasformJSONGroup(o3);
                  s3.setHasJoined(true), e3 = p(p({}, e3), { group: s3 }), r2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.initiateCall = function(e2) {
            var s2 = this;
            return new Promise(function(n2, o2) {
              var t2 = s2.getActiveCall();
              if (null === t2) try {
                w.isFalsy(JSON.parse(JSON.stringify(e2)).sender) ? w.isFalsy(t2) ? (e2.setStatus(b.CallConstants.CALL_STATUS.INITIATED), e2.receiver = e2.receiverId.toString(), delete e2.receiverId, T.makeApiCall("createCallSession", {}, e2).then(function(t3) {
                  var e3 = g.MessageController.trasformJSONMessge(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  B.CallController.getInstance().initiateCall(e3).then(function(t4) {
                    n2(e3);
                  }).catch(function(t4) {
                    o2(new K.CometChatException(t4));
                  });
                }, function(t3) {
                  o2(new K.CometChatException(t3.error));
                })) : o2(new K.CometChatException(b.CALL_ERROR.ERROR_IN_CALLING)) : B.CallController.getInstance().initiateCall(e2).then(function(t3) {
                  n2(Object.assign(e2));
                }).catch(function(t3) {
                  o2(new K.CometChatException(t3));
                });
              } catch (t3) {
                o2(new K.CometChatException(t3));
              }
              else o2(new K.CometChatException(b.CALL_ERROR.CALL_ALREADY_INITIATED));
            });
          }, G2.acceptCall = function(o2) {
            var s2 = this;
            return new Promise(function(n2, e2) {
              if (null === s2.getActiveCall()) try {
                var t2 = {};
                t2[b.CallConstants.CALL_KEYS.CALL_STATUS] = b.CallConstants.CALL_STATUS.ONGOING, T.makeApiCall("updateCallSession", { sessionid: o2 }, t2).then(function(t3) {
                  var e3 = g.MessageController.trasformJSONMessge(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  B.CallController.getInstance().onCallStarted(e3), n2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
              else e2(new K.CometChatException(b.CALL_ERROR.CANNOT_ACCEPT_CALL));
            });
          }, G2.rejectCall = function(t2, e2) {
            try {
              switch (e2) {
                case b.CallConstants.CALL_STATUS.REJECTED:
                  return this.rejectIncomingCall(t2);
                case b.CallConstants.CALL_STATUS.CANCELLED:
                  return this.cancelCall(t2);
                case b.CallConstants.CALL_STATUS.BUSY:
                  return this.sendBusyResponse(t2);
                default:
                  return this.endCall(t2, true);
              }
            } catch (t3) {
              w.Logger.error("CometChat: rejectCall", t3);
            }
          }, G2.endCall = function(s2, r2) {
            var i2 = this;
            return new Promise(function(n2, e2) {
              w.isFalsy(r2) && (r2 = false);
              var o2 = i2.getActiveCall();
              if (null !== o2) {
                if (o2.getSessionId() === s2) try {
                  var t2 = {};
                  t2[b.CallConstants.CALL_KEYS.CALL_STATUS] = b.CallConstants.CALL_STATUS.ENDED, o2.getJoinedAt() && (t2[b.CallConstants.CALL_KEYS.CALL_JOINED_AT] = o2.getJoinedAt()), T.makeApiCall("updateCallSession", { sessionid: s2 }, t2).then(function(t3) {
                    r2 || B.CallController.getInstance().endSession();
                    var e3 = g.MessageController.trasformJSONMessge(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                    n2(e3), B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onCallEnded(e3), B.CallController.getInstance().endCall();
                  }, function(t3) {
                    w.Logger.log("calling Log", { error: t3 }), r2 || B.CallController.getInstance().endSession(), o2.setStatus(b.CallConstants.CALL_STATUS.ENDED), n2(o2), B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onCallEnded(o2), B.CallController.getInstance().endCall();
                  });
                } catch (t3) {
                  e2(new K.CometChatException(t3));
                }
              } else r2 || B.CallController.getInstance().endSession(), n2(null), B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onCallEnded(null), B.CallController.getInstance().endCall();
            });
          }, G2.getActiveCall = function() {
            try {
              return B.CallController.getInstance().getActiveCall();
            } catch (t2) {
              w.Logger.error("CometChat: getActiveCall", t2);
            }
          }, G2.startCall = function(o2, s2, r2) {
            var i2 = this;
            try {
              var a2, E2, c2, u2, S2, l2, p2, C2, T2, d2, _2 = this.getActiveCall(), g2 = false, h2 = true, A2 = true, R2 = true, I2 = true, f2 = true, O2 = true, N2 = false, y2 = false, m2 = b.CallConstants.CALL_MODE.DEFAULT, L2 = false, M2 = false, v2 = false, P2 = true, D2 = true, U2 = {}, Y2 = this.user;
              u2 = new J.VirtualBackgroundBuilder().build(), S2 = new J.MainVideoContainerSetting(), w.getAppSettings().then(function(t2) {
                if (C2 = t2[b.APP_SETTINGS.KEYS.WEBRTC_HOST], U2[b.APP_SETTINGS.KEYS.ANALYTICS_HOST] = t2[b.APP_SETTINGS.KEYS.ANALYTICS_HOST], U2[b.APP_SETTINGS.KEYS.ANALYTICS_VERSION] = t2[b.APP_SETTINGS.KEYS.ANALYTICS_VERSION], U2[b.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED] = t2[b.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], U2[b.APP_SETTINGS.KEYS.ANALYTICS_USE_SSL] = t2[b.APP_SETTINGS.KEYS.ANALYTICS_USE_SSL], l2 = t2[b.APP_SETTINGS.KEYS.REGION], w.isFalsy(r2) || B.CallController.getInstance().setCallListner(r2), w.isFalsy(i2.appSettings)) B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.NOT_INITIALIZED));
                else if (l2) if (Y2) if ((d2 = new H.RTCUser(Y2.getUid())).setName(Y2.getName()), d2.setAvatar(Y2.getAvatar()), d2.setResource(G2.getSessionId()), G2.appId) if (p2 = G2.appId, "string" == typeof o2) {
                  if (_2) {
                    var e2 = _2.getType();
                    g2 = e2 === b.CallConstants.CALL_TYPE.AUDIO, E2 = _2.getSessionId();
                  } else {
                    if (w.isFalsy(o2)) return void (B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.SESSION_ID_REQUIRED)));
                    E2 = ("v1." + l2 + "." + G2.getAppId() + "." + o2).toLowerCase();
                  }
                  if (!E2) return void (B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.SESSION_ID_REQUIRED)));
                  P2 = !!g2;
                  var n2 = { uid: Y2.getUid(), sessionId: E2 };
                  G2.getJWT(n2).then(function(t3) {
                    t3.hasOwnProperty("token") ? (d2.setJWT(t3.token), a2 = new J.CallSettingsBuilder().setSessionID(E2).enableDefaultLayout(h2).setIsAudioOnlyCall(g2).setUser(d2).setRegion(l2).setAppId(p2).setDomain(C2).showEndCallButton(I2).showMuteAudioButton(R2).showPauseVideoButton(A2).showScreenShareButton(f2).showModeButton(O2).setMode(m2).setAnalyticsSettings(U2).startWithAudioMuted(N2).startWithVideoMuted(y2).showRecordingButton(L2).startRecordingOnCallStart(M2).forceLegacyUI(v2).showSwitchToVideoCallButton(P2).setVirtualBackground(u2).showVirtualBackgroundSetting(D2).setMainVideoContainerSetting(S2).build(), B.CallController.getInstance().startCall(a2, s2)) : B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.JWT_NOT_FOUND));
                  }, function(t3) {
                    B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(t3));
                  });
                } else {
                  if (w.isFalsy(o2)) return void (B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.CALL_SETTINGS_REQUIRED)));
                  if (_2) {
                    e2 = _2.getType();
                    g2 = e2 === b.CallConstants.CALL_TYPE.AUDIO, E2 = _2.getSessionId();
                  } else {
                    if (g2 = o2.isAudioOnlyCall(), w.isFalsy(o2.getSessionId())) return void (B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.SESSION_ID_REQUIRED)));
                    E2 = ("v1." + l2 + "." + G2.getAppId() + "." + o2.getSessionId()).toLowerCase();
                  }
                  if (!E2) return void (B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.SESSION_ID_REQUIRED)));
                  h2 = o2.isDefaultLayoutEnabled(), A2 = o2.isPauseVideoButtonEnabled(), R2 = o2.isMuteAudioButtonEnabled(), I2 = o2.isEndCallButtonEnabled(), f2 = o2.isScreenShareButtonEnabled(), m2 = o2.getMode(), T2 = o2.getLocalizedStringObject(), c2 = o2.getCustomCSS(), O2 = o2.isModeButtonEnabled(), N2 = o2.getStartWithAudioMuted(), y2 = o2.getStartWithVideoMuted(), L2 = o2.isRecordingButtonEnabled(), M2 = o2.shouldStartRecordingOnCallStart(), v2 = o2.shouldUseLegacyUI(), P2 = !!g2 && o2.isAudioToVideoButtonEnabled(), u2 = o2.getVirtualBackground(), D2 = o2.isVirtualBackgroundSettingEnabled(), S2 = o2.getMainVideoContainerSetting();
                  n2 = { uid: Y2.getUid(), sessionId: E2 };
                  G2.getJWT(n2).then(function(t3) {
                    t3.hasOwnProperty("token") ? (d2.setJWT(t3.token), a2 = new J.CallSettingsBuilder().setSessionID(E2).enableDefaultLayout(h2).setIsAudioOnlyCall(g2).setUser(d2).setRegion(l2).setAppId(p2).setDomain(C2).showEndCallButton(I2).showMuteAudioButton(R2).showPauseVideoButton(A2).showScreenShareButton(f2).showModeButton(O2).setMode(m2).setLocalizedStringObject(T2).setCustomCSS(c2).setAnalyticsSettings(U2).startWithAudioMuted(N2).startWithVideoMuted(y2).showRecordingButton(L2).startRecordingOnCallStart(M2).forceLegacyUI(v2).showSwitchToVideoCallButton(P2).setVirtualBackground(u2).showVirtualBackgroundSetting(D2).setMainVideoContainerSetting(S2).build(), B.CallController.getInstance().startCall(a2, s2)) : B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.JWT_NOT_FOUND));
                  }, function(t3) {
                    B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(t3));
                  });
                }
                else B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.NOT_INITIALIZED));
                else B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.NOT_LOGGED_IN));
                else B.CallController.getInstance().getCallListner() && B.CallController.getInstance().getCallListner()._eventListener.onError(new K.CometChatException(b.CALL_ERROR.NOT_INITIALIZED));
              }, function(t2) {
                w.Logger.error("CometChat: startCall", t2);
              });
            } catch (t2) {
              w.Logger.error("CometChat: startCall", t2);
            }
          }, G2.getCallParticipantCount = function(E2, c2) {
            return new Promise(function(i2, a2) {
              try {
                w.getAppSettings().then(function(t2) {
                  if (w.isFalsy(E2)) return a2(new K.CometChatException(b.ProsodyApiErrors.INVALID_SESSIONID));
                  if (w.isFalsy(c2)) return a2(new K.CometChatException(b.ProsodyApiErrors.INVALID_TYPE));
                  var e2 = t2[b.APP_SETTINGS.KEYS.REGION], n2 = {}, o2 = t2[b.APP_SETTINGS.KEYS.WEBRTC_HOST], s2 = t2[b.APP_SETTINGS.KEYS.WEBRTC_API_SUBDOMAIN], r2 = w.format(new u.EndpointFactory().prosodyApi, s2, o2, b.PROSODY_API.PATH.ROOM_SIZE);
                  "direct" === c2.toLowerCase() && (E2 = ("v1." + e2 + "." + G2.getAppId() + "." + E2).toLowerCase()), n2[b.PROSODY_API.QUERY_PARAMETERS.DOMAIN] = o2, n2[b.PROSODY_API.QUERY_PARAMETERS.ROOM] = E2, T.postData(r2, "GET", n2, {}, false).then(function(t3) {
                    return t3.text();
                  }).then(function(t3) {
                    var e3 = t3 ? JSON.parse(t3) : {};
                    return e3.hasOwnProperty(b.PROSODY_API.RESPONSE.PARTICIPANTS) ? i2(e3[b.PROSODY_API.RESPONSE.PARTICIPANTS]) : i2(0);
                  }).catch(function() {
                    var t3 = { error: R.FETCH_ERROR.ERROR_IN_API_CALL };
                    return a2(t3);
                  });
                }, function(t2) {
                  return a2(new K.CometChatException(t2));
                });
              } catch (t2) {
                return a2(new K.CometChatException(t2));
              }
            });
          }, G2.rejectIncomingCall = function(o2) {
            return new Promise(function(n2, e2) {
              try {
                var t2 = {};
                t2[b.CallConstants.CALL_KEYS.CALL_STATUS] = b.CallConstants.CALL_STATUS.REJECTED, T.makeApiCall("updateCallSession", { sessionid: o2 }, t2).then(function(t3) {
                  var e3 = g.MessageController.trasformJSONMessge(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  n2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.cancelCall = function(o2) {
            var s2 = this;
            return new Promise(function(n2, e2) {
              try {
                var t2 = {};
                t2[b.CallConstants.CALL_KEYS.CALL_STATUS] = b.CallConstants.CALL_STATUS.CANCELLED, T.makeApiCall("updateCallSession", { sessionid: o2 }, t2).then(function(t3) {
                  var e3 = g.MessageController.trasformJSONMessge(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  s2.getActiveCall().getSessionId() === o2 && B.CallController.getInstance().endCallSession(), n2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.sendBusyResponse = function(o2) {
            return new Promise(function(n2, e2) {
              try {
                var t2 = {};
                t2[b.CallConstants.CALL_KEYS.CALL_STATUS] = b.CallConstants.CALL_STATUS.BUSY, T.makeApiCall("updateCallSession", { sessionid: o2 }, t2).then(function(t3) {
                  var e3 = g.MessageController.trasformJSONMessge(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  n2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.sendUnansweredResponse = function(o2) {
            return new Promise(function(n2, e2) {
              try {
                var t2 = {};
                t2[b.CallConstants.CALL_KEYS.CALL_STATUS] = b.CallConstants.CALL_STATUS.UNANSWERED, T.makeApiCall("updateCallSession", { sessionid: o2 }, t2).then(function(t3) {
                  var e3 = g.MessageController.trasformJSONMessge(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  $.publishCallMessage(e3), n2(e3);
                }, function(t3) {
                  e2(new K.CometChatException(t3.error));
                });
              } catch (t3) {
                e2(new K.CometChatException(t3));
              }
            });
          }, G2.addConnectionListener = function(t2, e2) {
            try {
              tt.addConnectionEventListener(t2, e2);
            } catch (t3) {
              w.Logger.error("CometChat: addConnectionListener", t3);
            }
          }, G2.removeConnectionListener = function(t2) {
            try {
              tt.removeConnectionEventListener(t2);
            } catch (t3) {
              w.Logger.error("CometChat: removeConnectionListener", t3);
            }
          }, G2.addMessageListener = function(t2, e2) {
            try {
              tt.addMessageEventListener(t2, e2);
            } catch (t3) {
              w.Logger.error("CometChat: addMessageListener", t3);
            }
          }, G2.removeMessageListener = function(t2) {
            try {
              tt.removeMessageEventListener(t2);
            } catch (t3) {
              w.Logger.error("CometChat: removeMessageListener", t3);
            }
          }, G2.addCallListener = function(t2, e2) {
            try {
              tt.addCallEventListener(t2, e2);
            } catch (t3) {
              w.Logger.error("CometChat: addCallListener", t3);
            }
          }, G2.removeCallListener = function(t2) {
            try {
              tt.removeCallEventListener(t2);
            } catch (t3) {
              w.Logger.error("CometChat: removeCallListener", t3);
            }
          }, G2.addUserListener = function(t2, e2) {
            try {
              tt.addUserEventListener(t2, e2);
            } catch (t3) {
              w.Logger.error("CometChat: addUserListener", t3);
            }
          }, G2.removeUserListener = function(t2) {
            try {
              tt.removeUserEventListener(t2);
            } catch (t3) {
              w.Logger.error("CometChat: removeUserListener", t3);
            }
          }, G2.addGroupListener = function(t2, e2) {
            try {
              tt.addGroupEventListener(t2, e2);
            } catch (t3) {
              w.Logger.error("CometChat: addGroupListener", t3);
            }
          }, G2.removeGroupListener = function(t2) {
            try {
              tt.removeGroupEventListener(t2);
            } catch (t3) {
              w.Logger.error("CometChat: removeGroupListener", t3);
            }
          }, G2.addLoginListener = function(t2, e2) {
            try {
              tt.addLoginEventListener(t2, e2);
            } catch (t3) {
              w.Logger.error("CometChat: addLoginListener", t3);
            }
          }, G2.removeLoginListener = function(t2) {
            try {
              tt.removeLoginEventListener(t2);
            } catch (t3) {
              w.Logger.error("CometChat: removeLoginListener", t3);
            }
          }, G2.generateAuthToken = function(S2) {
            var l2 = this;
            return new Promise(function(o2, s2) {
              try {
                var r2 = {}, i2 = "", a2 = "", E2 = b.APPINFO.platform, c2 = b.APPINFO.sdkVersion, u2 = b.APPINFO.apiVersion;
                navigator && (a2 = navigator.userAgent), G2.keyStore.get(b.LOCAL_STORE.KEY_DEVICE_ID).then(function(t2) {
                  if (null == (i2 = t2)) {
                    var e2 = Z(), n2 = (/* @__PURE__ */ new Date()).getTime();
                    i2 = l2.appId + "_" + e2 + "_" + n2, G2.keyStore.set(b.LOCAL_STORE.KEY_DEVICE_ID, i2);
                  }
                  r2 = { platform: E2, deviceId: i2, appInfo: { version: c2, apiVersion: u2, userAgent: a2 } }, T.makeApiCall("authToken", { uid: S2 }, r2).then(function(t3) {
                    o2(t3.data);
                  }).catch(function(t3) {
                    s2(new K.CometChatException(t3.error));
                  });
                }, function(t2) {
                  w.Logger.error("Got error while fetching data from key store", t2);
                });
              } catch (t2) {
                s2(new K.CometChatException(t2));
              }
            });
          }, G2.tryReconnectingToWS = function() {
            G2.WSReconnectionInProgress || G2.startWSReconnectionTimer();
          }, G2.prototype.makeWSConnection = function() {
            G2.WSLogin(G2.user);
          }, G2.prototype.accidentallyDisconnected = function() {
            G2.currentConnectionStatus = b.CONNECTION_STATUS.CONNECTING, tt.connectionHandlers.map(function(t2) {
              try {
                t2._eventListener && (w.isFalsy(t2._eventListener.inConnecting) || t2._eventListener.inConnecting());
              } catch (t3) {
                w.Logger.error("ConnectionHandlers: inConnecting Status", t3);
              }
            }), G2.tryReconnectingToWS();
          }, G2.WSLogin = function(t2) {
            var n2 = this;
            $.connection ? w.Logger.error("CometChat :: WSLogin", $.connection) : $.WSLogin(t2.getJWT(), function(t3) {
              switch (t3) {
                case j.READY_STATE.CONNECTING:
                  (e2 = G2.getConnectionStatus()) == b.CONNECTION_STATUS.DISCONNECTED && (n2.currentConnectionStatus = b.CONNECTION_STATUS.CONNECTING, tt.connectionHandlers.map(function(t4) {
                    try {
                      t4._eventListener && (w.isFalsy(t4._eventListener.inConnecting) || t4._eventListener.inConnecting());
                    } catch (t5) {
                      w.Logger.error("connectionHandlers: Connecting Status", t5);
                    }
                  }));
                  break;
                case j.READY_STATE.OPEN:
                  (e2 = G2.getConnectionStatus()) == b.CONNECTION_STATUS.CONNECTING && (n2.currentConnectionStatus = b.CONNECTION_STATUS.CONNECTED, tt.connectionHandlers.map(function(t4) {
                    try {
                      t4._eventListener && (w.isFalsy(t4._eventListener.onConnected) || t4._eventListener.onConnected());
                    } catch (t5) {
                      w.Logger.error("connectionHandlers: Connected Status", t5);
                    }
                  })), G2.WSReconnectionInProgress && G2.clearWSReconnectionTimer();
                  break;
                case j.READY_STATE.CLOSING:
                  break;
                case j.READY_STATE.CLOSED:
                  var e2;
                  (e2 = G2.getConnectionStatus()) !== b.CONNECTION_STATUS.DISCONNECTED && e2 !== b.CONNECTION_STATUS.CONNECTING && (n2.currentConnectionStatus = b.CONNECTION_STATUS.DISCONNECTED, tt.connectionHandlers.map(function(t4) {
                    try {
                      t4._eventListener && (w.isFalsy(t4._eventListener.onDisconnected) || t4._eventListener.onDisconnected());
                    } catch (t5) {
                      w.Logger.error("connectionHandlers: Disconnected Status", t5);
                    }
                  })), $.connection && ($.connection = null), G2.isLoggedOut || G2.disconnectedByUser || n2.tryReconnectingToWS();
              }
            });
          }, G2.pingAnalytics = function() {
            var c2 = this;
            try {
              G2.keyStore.get("deviceId").then(function(E2) {
                w.getAppSettings().then(function(t2) {
                  var e2 = null;
                  window && window.location && window.location.origin && (e2 = window.location.origin);
                  var n2 = "", o2 = E2, s2 = { version: b.SDKHeader.sdkVersion, apiVersion: t2[b.APP_SETTINGS.KEYS.CHAT_API_VERSION], origin: e2, uts: (/* @__PURE__ */ new Date()).getTime() };
                  w.isFalsy(c2.resource) || (s2.resource = c2.resource), w.isFalsy(c2.platform) || (s2.platform = c2.platform), w.isFalsy(c2.language) || (s2.language = c2.language), navigator && (n2 = navigator.userAgent);
                  var r2 = { appInfo: s2, uid: G2.user.getUid(), userAgent: n2, deviceId: o2, platform: b.SDKHeader.platform };
                  w.isFalsy(G2.getSessionId()) || (r2.wsId = G2.getSessionId());
                  var i2 = "https://" + t2[b.APP_SETTINGS.KEYS.ANALYTICS_HOST] + "/" + t2[b.APP_SETTINGS.KEYS.ANALYTICS_VERSION] + "/ping", a2 = { appId: G2.appId, sdk: w.format(b.SDKHeader.sdk, b.SDKHeader.platform, b.SDKHeader.sdkVersion), "Content-Type": "application/json" };
                  G2.settingsHash && (a2.settingsHash = G2.settingsHash), G2.settingsHashReceivedAt && (a2.settingsHashReceivedAt = G2.settingsHashReceivedAt), G2.jwt && (a2.Authorization = "Bearer " + G2.jwt), G2.authToken && (a2.authToken = G2.authToken), T.postData(i2, "POST", r2, a2, false).then(function(t3) {
                    return t3.json();
                  }).then(function(t3) {
                    if (t3.hasOwnProperty(b.ResponseConstants.RESPONSE_KEYS.KEY_DATA)) w.Logger.log("Analytics Ping Request Data", t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                    else if (t3.hasOwnProperty(b.ResponseConstants.RESPONSE_KEYS.KEY_ERROR)) {
                      var e3 = t3[b.ResponseConstants.RESPONSE_KEYS.KEY_ERROR];
                      w.Logger.log("Analytics Ping Request Error", new K.CometChatException(e3));
                      var n3 = e3.code;
                      if (n3 === b.Errors.ERR_SETTINGS_HASH_OUTDATED) {
                        var o3 = G2.authToken;
                        G2.getInstance().internalRestart(o3);
                      }
                      n3 === b.Errors.ERR_NO_AUTH && c2.updateJWT();
                    }
                  }).catch(function(t3) {
                    w.Logger.error("CometChat: pingAnalytics Fetch Error", t3);
                  });
                }, function(t2) {
                  w.Logger.error("CometChat: pingAnalytics getSettings Error", t2);
                });
              }, function(t2) {
                w.Logger.error("CometChat: pingAnalytics getDeviceId Error", t2);
              });
            } catch (t2) {
              w.Logger.error("CometChat: pingAnalytics", t2);
            }
          }, G2.updateJWT = function() {
            T.makeApiCall("getMyDetails", {}, {}, false).then(function(t2) {
              var e2 = t2.data, n2 = e2.settings, o2 = new C.Me(e2);
              if (e2.hasOwnProperty("jwt") && e2.jwt && (G2.jwt = e2.jwt), d.LocalStorage.getInstance().set("user", o2), n2 && n2[b.APP_SETTINGS.KEYS.SETTINGS_HASH] && G2.settingsHash !== n2[b.APP_SETTINGS.KEYS.SETTINGS_HASH]) {
                var s2 = G2.getInstance().getAuthToken();
                G2.getInstance().internalRestart(s2);
              }
              w.Logger.log("CometChat: updateJWT response", t2);
            }, function(t2) {
              w.Logger.error("CometChat: updateJWT Fetch Error", t2);
            }).catch(function(t2) {
              w.Logger.error("CometChat: updateJWT", t2);
            });
          }, G2.startAnalyticsPingTimer = function() {
            var t2 = this;
            G2.isAnalyticsPingStarted = true, G2.analyticsPingTimer = setInterval(function() {
              try {
                t2.pingAnalytics();
              } catch (t3) {
                w.Logger.error("CometChat: startAnalyticsPingTimer", t3);
              }
            }, G2.settingsInterval);
          }, G2.clearAnalyticsPingTimer = function() {
            try {
              G2.isAnalyticsPingStarted = false, clearInterval(G2.analyticsPingTimer);
            } catch (t2) {
              w.Logger.error("CometChat: clearAnalyticsPingTimer", t2);
            }
          }, G2.startWSReconnectionTimer = function() {
            G2.WSReconnectionInProgress = true, G2.WSReconnectionTimer = setInterval(function() {
              try {
                G2.WSLogin(G2.user);
              } catch (t2) {
                w.Logger.error("CometChat: startWSReconnectionTimer", t2);
              }
            }, G2.WSReconnectionTimerInterval);
          }, G2.clearWSReconnectionTimer = function() {
            G2.WSReconnectionInProgress = false, clearInterval(G2.WSReconnectionTimer);
          }, G2.getJWT = function(r2) {
            return new Promise(function(o2, s2) {
              try {
                q.getEndPoint("getJWT").then(function(t2) {
                  var e2 = { appId: G2.appId, Accept: "application/json", authToken: G2.authToken, resource: G2.getSessionId(), sdk: w.format(b.SDKHeader.sdk, b.SDKHeader.platform, b.SDKHeader.sdkVersion), "Content-Type": "application/json" }, n2 = {};
                  n2[b.JWT_API.KEYS.PASSTHROUGH] = r2, T.postData(t2.endpoint, t2.method, n2, e2, false).then(function(t3) {
                    return t3.json();
                  }).then(function(t3) {
                    t3.hasOwnProperty(b.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? o2(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]) : s2(new K.CometChatException(t3.error));
                  }).catch(function(t3) {
                    var e3 = { error: R.FETCH_ERROR.ERROR_IN_API_CALL };
                    s2(new K.CometChatException(e3));
                  });
                }, function(t2) {
                  s2(new K.CometChatException(t2));
                });
              } catch (t2) {
                s2(new K.CometChatException(t2));
              }
            });
          }, G2.getConnectionStatus = function() {
            return this.currentConnectionStatus;
          }, G2.prototype.setConnectionStatus = function(t2) {
            G2.currentConnectionStatus = t2;
          }, G2.isExtensionEnabled = function(r2) {
            return new Promise(function(o2, s2) {
              try {
                if (w.isFalsy(r2)) return s2(new K.CometChatException(b.ExtensionErrors.INVALID_EXTENSION));
                w.getAppSettings().then(function(t2) {
                  if (t2.extensions) {
                    var e2 = t2.extensions;
                    if (0 < e2.length) {
                      var n2 = e2.some(function(t3) {
                        return t3.id === r2;
                      });
                      return o2(n2);
                    }
                    return o2(false);
                  }
                  return s2(new K.CometChatException(b.ExtensionErrors.EXTENSION_NOT_FOUND));
                }, function(t2) {
                  return s2(new K.CometChatException(t2));
                });
              } catch (t2) {
                return s2(new K.CometChatException(t2));
              }
            });
          }, G2.getExtensionDetails = function(i2) {
            return new Promise(function(s2, r2) {
              try {
                if (w.isFalsy(i2)) return r2(new K.CometChatException(b.ExtensionErrors.INVALID_EXTENSION));
                w.getAppSettings().then(function(t2) {
                  if (t2.extensions) {
                    var e2 = t2.extensions;
                    if (0 < e2.length) {
                      var n2 = e2.filter(function(t3) {
                        return t3.id === i2;
                      });
                      if (0 < n2.length) {
                        var o2 = new X.CCExtension(n2[0]);
                        return s2(o2);
                      }
                      return r2(new K.CometChatException(b.ExtensionErrors.EXTENSION_NOT_FOUND));
                    }
                    return r2(new K.CometChatException(b.ExtensionErrors.EXTENSION_NOT_FOUND));
                  }
                  return r2(new K.CometChatException(b.ExtensionErrors.EXTENSION_NOT_FOUND));
                }, function(t2) {
                  return r2(new K.CometChatException(t2));
                });
              } catch (t2) {
                return r2(new K.CometChatException(t2));
              }
            });
          }, G2.getAppSettings = function() {
            return new Promise(function(e2, n2) {
              try {
                T.makeApiCall("appSettings").then(function(t2) {
                  d.LocalStorage.getInstance().set(b.LOCAL_STORE.KEY_APP_SETTINGS, t2.data), e2(t2.data);
                }, function(t2) {
                  n2(new K.CometChatException(t2.error));
                });
              } catch (t2) {
                n2(new K.CometChatException(t2));
              }
            });
          }, G2.isFeatureEnabled = function(s2) {
            return new Promise(function(n2, o2) {
              try {
                if (w.isFalsy(s2)) return o2(new K.CometChatException(b.FeatureRestrictionErrors.INVALID_FEATURE));
                w.getAppSettings().then(function(t2) {
                  if (t2.parameters) {
                    var e2 = t2.parameters;
                    return e2.hasOwnProperty(s2) ? n2(e2[s2]) : n2(false);
                  }
                  return o2(new K.CometChatException(b.FeatureRestrictionErrors.FEATURE_NOT_FOUND));
                }, function(t2) {
                  return o2(new K.CometChatException(t2));
                });
              } catch (t2) {
                return o2(new K.CometChatException(t2));
              }
            });
          }, G2.logout = function() {
            var o2 = this;
            return new Promise(function(e2, n2) {
              try {
                G2.didAnalyticsPingStart() && G2.clearAnalyticsPingTimer(), G2.WSReconnectionInProgress && G2.clearWSReconnectionTimer(), G2.isLoggedOut = true, G2.WSReconnectionInProgress = false, G2.isAnalyticsDisabled = false, T.makeApiCall("userLogout").then(function(t2) {
                  o2.clearCache().then(function() {
                    G2.apiKey = void 0, G2.user = void 0, G2.authToken = void 0, G2.cometChat = void 0, G2.mode = void 0, $.WSLogout(), G2.pushToLoginListener("", "Logout_Success"), e2(t2.data);
                  });
                }, function(t2) {
                  o2.clearCache().then(function() {
                    G2.apiKey = void 0, G2.user = void 0, G2.authToken = void 0, G2.cometChat = void 0, G2.mode = void 0, $.WSLogout(), G2.pushToLoginListener("", "Logout_Success"), new K.CometChatException(t2.error).code == R.SERVER_ERRORS.AUTH_ERR.code ? e2({}) : n2(new K.CometChatException(t2.error));
                  });
                });
              } catch (t2) {
                n2(new K.CometChatException(t2));
              }
            });
          }, G2.callExtension = function(r2, i2, a2, E2) {
            return void 0 === E2 && (E2 = {}), new Promise(function(o2, s2) {
              try {
                w.getAppSettings().then(function(t2) {
                  var e2 = w.format(new u.EndpointFactory().extensionApi, r2, t2[b.APP_SETTINGS.KEYS.REGION], t2[b.APP_SETTINGS.KEYS.EXTENSION_DOMAIN], a2), n2 = { appId: G2.appId, Accept: "application/json", authToken: G2.authToken, resource: G2.getSessionId(), sdk: w.format(b.SDKHeader.sdk, b.SDKHeader.platform, b.SDKHeader.sdkVersion), chatApiVersion: t2[b.APP_SETTINGS.KEYS.CHAT_API_VERSION], "Content-Type": "application/json" };
                  T.postData(e2, i2, E2, n2, false).then(function(t3) {
                    return t3.json();
                  }).then(function(t3) {
                    t3.hasOwnProperty(b.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? o2(t3[b.ResponseConstants.RESPONSE_KEYS.KEY_DATA]) : s2(new K.CometChatException(t3.error));
                  }).catch(function(t3) {
                    var e3 = { error: R.FETCH_ERROR.ERROR_IN_API_CALL };
                    s2(e3);
                  });
                }, function(t2) {
                  return s2(new K.CometChatException(t2));
                });
              } catch (t2) {
                return s2(new K.CometChatException(t2));
              }
            });
          }, G2.setSource = function(t2, e2, n2) {
            w.isFalsy(t2) || (this.resource = t2), w.isFalsy(e2) || (this.platform = e2), w.isFalsy(n2) || (this.language = n2);
          }, G2.clearCache = function() {
            return new Promise(function(t2, e2) {
              try {
                d.LocalStorage.getInstance().clearStore().then(function() {
                  G2.removeDataFromSessionStorage(b.SESSION_STORE.SESSION_ID), w.Logger.info("CometChat: clearCache => All store cleared successfully", "true"), t2(true);
                });
              } catch (t3) {
                w.Logger.error("CometChat: clearCache", t3), e2(t3);
              }
            });
          }, G2.connect = function() {
            G2.user && ($.connection || (G2.disconnectedByUser = false, G2.WSLogin(G2.user)), G2.didAnalyticsPingStart() || G2.isAnalyticsDisabled || (G2.pingAnalytics(), G2.startAnalyticsPingTimer()));
          }, G2.disconnect = function() {
            G2.user && (G2.disconnectedByUser = true, $.connection && $.WSLogout(), G2.didAnalyticsPingStart() && G2.clearAnalyticsPingTimer());
          }, G2.prototype.internalRestart = function(t2) {
            G2.internalRestart || G2.getInstance().internalLogout(false).then(function() {
              G2.internalRestart = true, G2.login(t2).then(function(t3) {
                G2.shouldConnectToWS = true, G2.internalRestart = false;
              }, function(t3) {
                w.Logger.error("CometChat: internalRestart :: login", t3), G2.internalRestart = false;
              });
            }, function(t3) {
              w.Logger.error("CometChat: internalRestart :: internalLogout", t3);
            });
          }, G2.prototype.internalLogout = function(n2) {
            return void 0 === n2 && (n2 = true), new Promise(function(t2, e2) {
              try {
                G2.didAnalyticsPingStart() && G2.clearAnalyticsPingTimer(), G2.WSReconnectionInProgress && G2.clearWSReconnectionTimer(), G2.isLoggedOut = true, G2.WSReconnectionInProgress = false, G2.isAnalyticsDisabled = false, G2.clearCache().then(function() {
                  G2.apiKey = void 0, G2.user = void 0, G2.authToken = void 0, G2.cometChat = void 0, G2.mode = void 0, $.WSLogout(), n2 && G2.pushToLoginListener("", "Logout_Success"), t2(true);
                });
              } catch (t3) {
                w.Logger.error("CometChat: internalLogout", t3), e2(t3);
              }
            });
          }, G2.initialzed = false, G2.CometChatException = K.CometChatException, G2.TextMessage = _.TextMessage, G2.MediaMessage = S.MediaMessage, G2.CustomMessage = P.CustomMessage, G2.Action = i.Action, G2.Call = s.Call, G2.TypingIndicator = M.TypingIndicator, G2.TransientMessage = z.TransientMessage, G2.Group = a.Group, G2.User = C.User, G2.GroupMember = D.GroupMember, G2.Conversation = V.Conversation, G2.USER_STATUS = { ONLINE: b.PresenceConstatnts.STATUS.ONLINE, OFFLINE: b.PresenceConstatnts.STATUS.OFFLINE }, G2.MessagesRequest = m.MessagesRequest, G2.MessagesRequestBuilder = m.MessagesRequestBuilder, G2.UsersRequest = N.UsersRequest, G2.UsersRequestBuilder = N.UsersRequestBuilder, G2.ConversationsRequest = y.ConversationsRequest, G2.ConversationsRequestBuilder = y.ConversationsRequestBuilder, G2.BlockedUsersRequest = U.BlockedUsersRequest, G2.BlockedUsersRequestBuilder = U.BlockedUsersRequestBuilder, G2.GroupsRequest = I.GroupsRequest, G2.GroupsRequestBuilder = I.GroupsRequestBuilder, G2.GroupMembersRequest = f.GroupMembersRequest, G2.GroupMembersRequestBuilder = f.GroupMembersRequestBuilder, G2.BannedMembersRequest = O.BannedMembersRequest, G2.BannedMembersRequestBuilder = O.BannedMembersRequestBuilder, G2.CallSettings = J.CallSettings, G2.CallSettingsBuilder = J.CallSettingsBuilder, G2.MainVideoContainerSetting = J.MainVideoContainerSetting, G2.VirtualBackground = J.VirtualBackground, G2.VirtualBackgroundBuilder = J.VirtualBackgroundBuilder, G2.AppSettings = Y.AppSettings, G2.AppSettingsBuilder = Y.AppSettingsBuilder, G2.MessageListener = o.MessageListener, G2.UserListener = o.UserListener, G2.GroupListener = o.GroupListener, G2.OngoingCallListener = o.OngoingCallListener, G2.CallListener = o.CallListener, G2.ConnectionListener = o.ConnectionListener, G2.LoginListener = o.LoginListener, G2.CallController = B.CallController, G2.CometChatHelper = F.CometChatHelper, G2.Attachment = k.Attachment, G2.MediaDevice = Q.MediaDevice, G2.MESSAGE_TYPE = b.MessageConstatnts.TYPE, G2.CATEGORY_MESSAGE = b.MessageConstatnts.CATEGORY.MESSAGE, G2.CATEGORY_ACTION = b.MessageConstatnts.CATEGORY.ACTION, G2.CATEGORY_CALL = b.MessageConstatnts.CATEGORY.CALL, G2.CATEGORY_CUSTOM = b.MessageConstatnts.CATEGORY.CUSTOM, G2.ACTION_TYPE = b.ActionConstatnts.ACTIONS, G2.CALL_TYPE = b.CallConstants.CALL_TYPE, G2.RECEIVER_TYPE = b.MessageConstatnts.RECEIVER_TYPE, G2.CALL_STATUS = b.CallConstants.CALL_STATUS, G2.GROUP_MEMBER_SCOPE = b.GROUP_MEMBER_SCOPE, G2.GROUP_TYPE = b.GROUP_TYPE, G2.MESSAGE_REQUEST = b.MessageConstatnts.PAGINATION.CURSOR_FILEDS, G2.CONNECTION_STATUS = b.CONNECTION_STATUS, G2.CALL_MODE = b.CallConstants.CALL_MODE, G2.SORT_BY = b.UserConstants.SORT_BY, G2.SORT_ORDER = b.UserConstants.SORT_ORDER, G2.WSReconnectionInProgress = false, G2.WSReconnectionTimerInterval = 5e3, G2.currentConnectionStatus = b.CONNECTION_STATUS.DISCONNECTED, G2.isConnectingFromInit = false, G2.loginInProgress = false, G2.internalRestart = false, G2.settingsInterval = 6e4, G2.isAnalyticsPingStarted = false, G2.isLoggedOut = true, G2.isAnalyticsDisabled = false, G2.disconnectedByUser = false, G2.shouldConnectToWS = true, G2;
        }();
        e.CometChat = et;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.Me = e.User = void 0;
        var r = n(2), i = n(13), a = n(1), E = function() {
          function t2() {
            for (var t3 = [], e2 = 0; e2 < arguments.length; e2++) t3[e2] = arguments[e2];
            if (this.hasBlockedMe = false, this.blockedByMe = false, this.deactivatedAt = 0, 1 === t3.length) typeof t3[0] === a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? this.uid = t3[0] : (this.uid = t3[0].uid, this.name = t3[0].name, t3[0].authToken && (this.authToken = t3[0].authToken), t3[0].avatar && (this.avatar = t3[0].avatar), t3[0].lastActiveAt && (this.lastActiveAt = t3[0].lastActiveAt), t3[0].link && (this.link = t3[0].link), t3[0].metadata && (this.metadata = t3[0].metadata), t3[0].role && (this.role = t3[0].role), t3[0].statusMessage && (this.statusMessage = t3[0].statusMessage), t3[0].status && "offline" !== t3[0].status ? this.status = "online" : this.status = "offline", t3[0].tags && (this.tags = t3[0].tags), t3[0].deactivatedAt && (this.deactivatedAt = t3[0].deactivatedAt));
            else {
              if (2 !== t3.length) throw new r.CometChatException(i.ERRORS.PARAMETER_MISSING);
              this.uid = t3[0], this.name = t3[1];
            }
          }
          return t2.prototype.getUid = function() {
            return this.uid.toString();
          }, t2.prototype.setUid = function(t3) {
            this.uid = t3;
          }, t2.prototype.getName = function() {
            return this.name.toString();
          }, t2.prototype.setName = function(t3) {
            t3 && (this.name = t3);
          }, t2.prototype.getAuthToken = function() {
            return this.authToken;
          }, t2.prototype.setAuthToken = function(t3) {
            this.authToken = t3;
          }, t2.prototype.getAvatar = function() {
            return this.avatar;
          }, t2.prototype.setAvatar = function(t3) {
            this.avatar = t3;
          }, t2.prototype.getLastActiveAt = function() {
            return this.lastActiveAt;
          }, t2.prototype.setLastActiveAt = function(t3) {
            this.lastActiveAt = t3;
          }, t2.prototype.getLink = function() {
            return this.link;
          }, t2.prototype.setLink = function(t3) {
            return this.link = t3;
          }, t2.prototype.getMetadata = function() {
            return this.metadata;
          }, t2.prototype.setMetadata = function(t3) {
            this.metadata = t3;
          }, t2.prototype.getRole = function() {
            return this.role;
          }, t2.prototype.setRole = function(t3) {
            this.role = t3;
          }, t2.prototype.getStatus = function() {
            return this.status;
          }, t2.prototype.setStatus = function(t3) {
            this.status = t3;
          }, t2.prototype.getStatusMessage = function() {
            return this.statusMessage;
          }, t2.prototype.setStatusMessage = function(t3) {
            this.statusMessage = t3;
          }, t2.prototype.setBlockedByMe = function(t3) {
            this.blockedByMe = t3;
          }, t2.prototype.getBlockedByMe = function() {
            return this.blockedByMe;
          }, t2.prototype.setHasBlockedMe = function(t3) {
            this.hasBlockedMe = t3;
          }, t2.prototype.getHasBlockedMe = function() {
            return this.hasBlockedMe;
          }, t2.prototype.setTags = function(t3) {
            this.tags = t3;
          }, t2.prototype.getTags = function() {
            return this.tags;
          }, t2.prototype.setDeactivatedAt = function(t3) {
            this.deactivatedAt = t3;
          }, t2.prototype.getDeactivatedAt = function() {
            return this.deactivatedAt;
          }, t2;
        }(), c = function(n2) {
          function t2(t3) {
            var e2 = n2.call(this, t3) || this;
            return e2.wsChannel = t3.wsChannel, t3.jwt && (e2.jwt = t3.jwt), e2;
          }
          return s(t2, n2), t2.prototype.getWsChannel = function() {
            return this.wsChannel;
          }, t2.prototype.getJWT = function() {
            return this.jwt;
          }, t2;
        }(e.User = E);
        e.Me = c;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.KEYS = e.AUTH = e.MESSAGE = e.PRESENCE = e.RECEIPTS = e.TRANSIENT_MESSAGE = e.TYPING_INDICATOR = e.LOGOUT_REASON = e.LOGOUT_CODE = e.READY_STATE = e.WS = void 0, e.WS = { protocol: "wss://" }, e.READY_STATE = { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3, INVALID_JWT: 4 }, e.LOGOUT_CODE = 1e3, e.LOGOUT_REASON = "User logged out", e.TYPING_INDICATOR = { TYPE: "typing_indicator", ACTION: { STARTED: "started", ENDED: "ended" } }, e.TRANSIENT_MESSAGE = { TYPE: "transient_message" }, e.RECEIPTS = { TYPE: "receipts", ACTION: { READ: "read", DELIVERED: "delivered" }, RECEIPT_TYPE: { READ_RECEIPT: "read", DELIVERY_RECEIPT: "delivery" } }, e.PRESENCE = { TYPE: "presence", ACTION: { ONLINE: "online", AVAILABLE: "available", OFFLINE: "offline" } }, e.MESSAGE = { TYPE: "message" }, e.AUTH = { TYPE: "auth" }, e.KEYS = { TYPE: "type", ACTION: "action", APP_ID: "appId", RECEIVER: "receiver", RECEIVER_TYPE: "receiverType", DEVICE_ID: "deviceId", BODY: "body", USER: "user", METADATA: "metadata", MESSAGE_ID: "messageId", TIMESTAMP: "timestamp", STATUS: "status", CODE: "code", SENDER: "sender", MESSAGE_SENDER: "messageSender", PRESENCE_SUBSCRIPTION: "presenceSubscription", AUTH: "auth", PING: "ping", DATA: "data", PARAMS: "params", ACK: "ack", PONG: "pong" };
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.postData = e.makeAdminApiCall = e.makeApiCall = void 0;
        var E = n(29), c = n(3), u = n(0), S = n(2), l = n(13), p = n(1);
        function C(n2, t2, o, e2, s) {
          var r;
          return void 0 === n2 && (n2 = ""), void 0 === t2 && (t2 = "GET"), void 0 === o && (o = {}), void 0 === e2 && (e2 = {}), o = u.isFalsy(o) ? void 0 : ("GET" == t2 && (n2 += "?", Object.keys(o).map(function(t3, e3) {
            n2 = e3 === Object.keys(o).length - 1 ? n2 + t3 + "=" + o[t3] : n2 + t3 + "=" + o[t3] + "&";
          }), o = void 0), s && (r = new FormData(), Object.keys(o).map(function(t3) {
            if ("data" != t3) {
              if ("tags" == t3) r.append(t3 + "[]", o[t3]);
              else if ("metadata" != t3) if ("files" === t3) for (var e3 = 0; e3 < o[t3].length; e3++) r.append(t3 + "[]", o[t3][e3]);
              else r.append(t3, o[t3]);
            } else r.append(t3, JSON.stringify(o[t3]));
          })), JSON.stringify(o)), fetch(n2, { method: t2, mode: "cors", cache: "no-cache", headers: e2, redirect: "follow", referrer: "no-referrer", body: s ? r : o });
        }
        e.makeApiCall = function(s, t2, r, i) {
          void 0 === s && (s = ""), void 0 === t2 && (t2 = {}), void 0 === r && (r = {});
          var a = c.CometChat.getInstance(c.CometChat.getAppId());
          return new Promise(function(n2, o) {
            try {
              E.getEndPoint(s, t2).then(function(t3) {
                var e2 = { resource: c.CometChat.getSessionId(), appId: c.CometChat.getAppId(), Accept: "application/json", sdk: u.format(p.SDKHeader.sdk, p.SDKHeader.platform, p.SDKHeader.sdkVersion) };
                i || (e2["Content-Type"] = "application/json"), t3.hasOwnProperty("isAdminApi") && t3.isAdminApi ? a.getApiKey() ? e2.apiKey = a.getApiKey() : o({ error: { code: "API_KEY_NOT_SET", message: "An apiKey is needed to use the " + s + " api.", name: "API_KEY_NOT_SET" } }) : a.getAuthToken() ? e2.authToken = a.getAuthToken() : o({ error: { code: "USER_NOT_LOGED_IN", message: "An authToken is need to use the " + s + " end-point. PS- We are aware of the spelling mistake, but in order to maintain backward compatibility we cannot change it :(", name: "User not logged-in" } }), C(t3.endpoint, t3.method, r, e2, i).then(function(t4) {
                  return t4.json();
                }).then(function(t4) {
                  if (t4.hasOwnProperty("data")) t4.data.hasOwnProperty("authToken") && c.CometChat.setAuthToken(t4.data.authToken), n2(t4);
                  else {
                    if (t4.hasOwnProperty("error")) {
                      var e3 = t4.error;
                      e3.hasOwnProperty("code") && e3.code === p.API_ERROR_CODES.AUTH_ERR_AUTH_TOKEN_NOT_FOUND && c.CometChat.getInstance().internalLogout().then(function() {
                        u.Logger.log("CometChat: makeApiCall", "User logged out");
                      });
                    }
                    o(t4);
                  }
                }).catch(function(t4) {
                  var e3 = { error: l.FETCH_ERROR.ERROR_IN_API_CALL };
                  o(e3);
                });
              }).catch(function(t3) {
                return o;
              });
            } catch (t3) {
              o(new S.CometChatException(t3));
            }
          });
        }, e.makeAdminApiCall = function(s, t2, r, i) {
          void 0 === s && (s = ""), void 0 === t2 && (t2 = {}), void 0 === r && (r = {});
          var a = c.CometChat.getInstance(c.CometChat.getAppId());
          return new Promise(function(n2, o) {
            E.getEndPoint(s, t2).then(function(t3) {
              var e2 = { appId: c.CometChat.getAppId(), Accept: "application/json", sdk: u.format(p.SDKHeader.sdk, p.SDKHeader.platform, p.SDKHeader.sdkVersion) };
              i || (e2["Content-Type"] = "application/json"), t3.hasOwnProperty("isAdminApi") && t3.isAdminApi ? a.getApiKey() ? e2.apiKey = a.getApiKey() : o({ error: "An apiKey is need to use the " + s + " api." }) : a.getAuthToken() ? e2.authToken = a.getAuthToken() : o({ error: "An authToken is need to use the " + s + " api." }), C(t3.endpoint, t3.method, r, e2, i).then(function(t4) {
                return t4.json();
              }).then(function(t4) {
                t4.hasOwnProperty("data") ? (t4.data.hasOwnProperty("authToken") && c.CometChat.setAuthToken(t4.data.authToken), n2(t4)) : o(t4);
              }).catch(function(t4) {
                var e3 = { error: l.FETCH_ERROR.ERROR_IN_API_CALL };
                o(e3);
              });
            }).catch(function(t3) {
              return o;
            });
          });
        }, e.postData = C;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.BaseMessage = void 0;
        var o = function() {
          function t2(t3, e2, n2, o2) {
            this.receiverId = t3, this.type = e2, this.receiverType = n2, this.category = o2;
          }
          return t2.prototype.getId = function() {
            return this.id;
          }, t2.prototype.setId = function(t3) {
            this.id = t3;
          }, t2.prototype.getConversationId = function() {
            return this.conversationId;
          }, t2.prototype.setConversationId = function(t3) {
            this.conversationId = t3;
          }, t2.prototype.getParentMessageId = function() {
            return this.parentMessageId;
          }, t2.prototype.setParentMessageId = function(t3) {
            this.parentMessageId = t3;
          }, t2.prototype.getMuid = function() {
            return this.muid;
          }, t2.prototype.setMuid = function(t3) {
            this.muid = t3;
          }, t2.prototype.getSender = function() {
            return this.sender;
          }, t2.prototype.setSender = function(t3) {
            this.sender = t3;
          }, t2.prototype.getReceiver = function() {
            return this.receiver;
          }, t2.prototype.setReceiver = function(t3) {
            this.receiver = t3;
          }, t2.prototype.getReceiverId = function() {
            return this.receiverId;
          }, t2.prototype.setReceiverId = function(t3) {
            this.receiverId = t3;
          }, t2.prototype.getType = function() {
            return this.type;
          }, t2.prototype.setType = function(t3) {
            this.type = t3;
          }, t2.prototype.getReceiverType = function() {
            return this.receiverType;
          }, t2.prototype.setReceiverType = function(t3) {
            this.receiverType = t3;
          }, t2.prototype.getSentAt = function() {
            return this.sentAt;
          }, t2.prototype.setSentAt = function(t3) {
            this.sentAt = t3;
          }, t2.prototype.getStatus = function() {
            return this.status;
          }, t2.prototype.setStatus = function(t3) {
            this.status = t3;
          }, t2.prototype.getDeliveredAt = function() {
            return this.deliveredAt;
          }, t2.prototype.setDeliveredAt = function(t3) {
            this.deliveredAt = t3;
          }, t2.prototype.getDeliveredToMeAt = function() {
            return this.deliveredToMeAt;
          }, t2.prototype.setDeliveredToMeAt = function(t3) {
            this.deliveredToMeAt = t3;
          }, t2.prototype.getReadAt = function() {
            return this.readAt;
          }, t2.prototype.setReadAt = function(t3) {
            this.readAt = t3;
          }, t2.prototype.getReadByMeAt = function() {
            return this.readByMeAt;
          }, t2.prototype.setReadByMeAt = function(t3) {
            this.readByMeAt = t3;
          }, t2.prototype.getCategory = function() {
            return this.category;
          }, t2.prototype.setCategory = function(t3) {
            this.category = t3;
          }, t2.prototype.getEditedAt = function() {
            return this.editedAt;
          }, t2.prototype.setEditedAt = function(t3) {
            this.editedAt = t3;
          }, t2.prototype.getEditedBy = function() {
            return this.editedBy;
          }, t2.prototype.setEditedBy = function(t3) {
            this.editedBy = t3;
          }, t2.prototype.getDeletedAt = function() {
            return this.deletedAt;
          }, t2.prototype.setDeletedAt = function(t3) {
            this.deletedAt = t3;
          }, t2.prototype.getDeletedBy = function() {
            return this.deletedBy;
          }, t2.prototype.setDeletedBy = function(t3) {
            this.deletedBy = t3;
          }, t2.prototype.getReplyCount = function() {
            return this.replyCount;
          }, t2.prototype.setReplyCount = function(t3) {
            this.replyCount = t3;
          }, t2.prototype.getRawMessage = function() {
            return this.rawMessage;
          }, t2.prototype.setRawMessage = function(t3) {
            this.rawMessage = t3;
          }, t2;
        }();
        e.BaseMessage = o;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.Group = void 0;
        var o = n(1), s = function() {
          function t2(t3, e2, n2, o2, s2, r, i) {
            this.hasJoined = false, this.membersCount = 0, this.guid = t3, e2 && (this.name = e2), n2 && (this.type = n2), !o2 && "" !== o2 || "password" != n2 || (this.password = o2), (s2 || "" === s2) && (this.icon = s2), (r || "" === r) && (this.description = r), i && (this.hasJoined = i);
          }
          return t2.prototype.getGuid = function() {
            return this.guid;
          }, t2.prototype.setGuid = function(t3) {
            this.guid = t3;
          }, t2.prototype.getName = function() {
            return this.name;
          }, t2.prototype.setName = function(t3) {
            t3 && (this.name = t3);
          }, t2.prototype.getType = function() {
            return this.type;
          }, t2.prototype.setType = function(t3) {
            this.type = t3;
          }, t2.prototype.getPassword = function() {
            return this.password;
          }, t2.prototype.setPassword = function(t3) {
            this.password = t3;
          }, t2.prototype.getIcon = function() {
            return this.icon;
          }, t2.prototype.setIcon = function(t3) {
            this.icon = t3;
          }, t2.prototype.getDescription = function() {
            return this.description;
          }, t2.prototype.setDescription = function(t3) {
            this.description = t3;
          }, t2.prototype.getOwner = function() {
            return this.owner;
          }, t2.prototype.setOwner = function(t3) {
            this.owner = t3;
          }, t2.prototype.getMetadata = function() {
            return this.metadata;
          }, t2.prototype.setMetadata = function(t3) {
            this.metadata = t3;
          }, t2.prototype.getCreatedAt = function() {
            return this.createdAt;
          }, t2.prototype.setCreatedAt = function(t3) {
            this.createdAt = t3;
          }, t2.prototype.getUpdatedAt = function() {
            return this.updatedAt;
          }, t2.prototype.setUpdatedAt = function(t3) {
            this.updatedAt = t3;
          }, t2.prototype.getHasJoined = function() {
            return this.hasJoined;
          }, t2.prototype.setHasJoined = function(t3) {
            this.hasJoined = t3;
          }, t2.prototype.getWsChannel = function() {
            return this.wsChannel;
          }, t2.prototype.setWsChannel = function(t3) {
            this.wsChannel = t3;
          }, t2.prototype.setScope = function(t3) {
            this.scope = t3;
          }, t2.prototype.getScope = function() {
            return this.scope;
          }, t2.prototype.getJoinedAt = function() {
            return this.joinedAt;
          }, t2.prototype.setJoinedAt = function(t3) {
            this.joinedAt = t3;
          }, t2.prototype.getMembersCount = function() {
            return this.membersCount;
          }, t2.prototype.setMembersCount = function(t3) {
            this.membersCount = t3;
          }, t2.prototype.setTags = function(t3) {
            this.tags = t3;
          }, t2.prototype.getTags = function() {
            return this.tags;
          }, t2.TYPE = o.GroupType, t2.Type = t2.TYPE, t2;
        }();
        e.Group = s;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.CometChatEvent = void 0;
        var i = n(0), o = n(5), s = function() {
          function t2(t3, e2, n2, o2, s2, r) {
            i.isFalsy(t3) || (this.appId = t3), i.isFalsy(e2) || (this.receiver = e2), i.isFalsy(n2) || (this.receiverType = n2), i.isFalsy(s2) || (this.deviceId = s2), i.isFalsy(o2) || (this.sender = o2), i.isFalsy(r) || (this.messageSender = r);
          }
          return t2.prototype.getAppId = function() {
            return this.appId;
          }, t2.prototype.setAppId = function(t3) {
            this.appId = t3;
          }, t2.prototype.getReceiver = function() {
            return this.receiver;
          }, t2.prototype.setReceiver = function(t3) {
            this.receiver = t3;
          }, t2.prototype.getSender = function() {
            return this.sender;
          }, t2.prototype.setSender = function(t3) {
            this.sender = t3;
          }, t2.prototype.getReceiverType = function() {
            return this.receiverType;
          }, t2.prototype.setReceiverType = function(t3) {
            this.receiverType = t3;
          }, t2.prototype.getType = function() {
            return this.type;
          }, t2.prototype.setType = function(t3) {
            this.type = t3;
          }, t2.prototype.getDeviceId = function() {
            return this.deviceId;
          }, t2.prototype.setDeviceId = function(t3) {
            this.deviceId = t3;
          }, t2.prototype.getMessageSender = function() {
            return this.messageSender;
          }, t2.prototype.setMessageSender = function(t3) {
            this.messageSender = t3;
          }, t2.prototype.getCometChatEventJSON = function() {
            var t3 = {};
            return t3[o.KEYS.APP_ID] = this.getAppId(), t3[o.KEYS.RECEIVER] = this.getReceiver(), t3[o.KEYS.RECEIVER_TYPE] = this.getReceiverType(), t3[o.KEYS.DEVICE_ID] = this.getDeviceId(), t3[o.KEYS.TYPE] = this.getType(), t3[o.KEYS.SENDER] = this.getSender(), i.isFalsy(this.getMessageSender()) || (t3[o.KEYS.MESSAGE_SENDER] = this.getMessageSender()), t3;
          }, t2;
        }();
        e.CometChatEvent = s;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.MessageController = void 0;
        var i = n(7), a = n(16), E = n(17), c = n(0), u = n(1), S = n(20), l = n(21), p = n(22), r = n(2), C = n(18), T = n(19), d = n(3), _ = n(11), o = function() {
          function t2() {
          }
          return t2.trasformJSONMessge = function(n2) {
            try {
              var t3 = null;
              n2.hasOwnProperty("rawMessage") || (t3 = JSON.parse(JSON.stringify(n2)));
              var e2 = void 0;
              switch (n2[u.MessageConstatnts.KEYS.CATEGORY]) {
                case u.MessageConstatnts.CATEGORY.ACTION:
                  e2 = S.Action.actionFromJSON(n2);
                  break;
                case u.MessageConstatnts.CATEGORY.CALL:
                  e2 = l.Call.callFromJSON(n2);
                  break;
                case u.MessageConstatnts.CATEGORY.MESSAGE:
                  switch (n2[u.MessageConstatnts.KEYS.TYPE]) {
                    case u.MessageConstatnts.TYPE.TEXT:
                      e2 = new a.TextMessage(n2[u.MessageConstatnts.KEYS.RECEIVER], n2[u.MessageConstatnts.KEYS.DATA][u.MessageConstatnts.KEYS.TEXT], n2[u.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                      break;
                    case u.MessageConstatnts.TYPE.CUSTOM:
                      e2 = new T.CustomMessage(n2[u.MessageConstatnts.KEYS.RECEIVER], n2[u.MessageConstatnts.KEYS.DATA][u.MessageConstatnts.KEYS.CUSTOM_DATA], n2[u.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                      break;
                    default:
                      if (e2 = new E.MediaMessage(n2[u.MessageConstatnts.KEYS.RECEIVER], n2[u.MessageConstatnts.KEYS.DATA][u.MessageConstatnts.KEYS.URL], n2[u.MessageConstatnts.KEYS.TYPE], n2[u.MessageConstatnts.KEYS.RECEIVER_TYPE]), n2.hasOwnProperty(u.MessageConstatnts.KEYS.DATA)) {
                        var o2 = n2[u.MessageConstatnts.KEYS.DATA];
                        if (o2.hasOwnProperty(u.MessageConstatnts.KEYS.ATTATCHMENTS)) {
                          var s, r2 = o2[u.MessageConstatnts.KEYS.ATTATCHMENTS];
                          new Array();
                          r2.map(function(t4) {
                            s = new C.Attachment(t4);
                          }), e2.setAttachment(s);
                        }
                        o2.hasOwnProperty(u.MessageConstatnts.KEYS.TEXT) && e2.setCaption(o2[u.MessageConstatnts.KEYS.TEXT]);
                      }
                      e2.hasOwnProperty("file") && delete e2.file;
                  }
                  break;
                case u.MessageConstatnts.CATEGORY.CUSTOM:
                  e2 = new T.CustomMessage(n2[u.MessageConstatnts.KEYS.RECEIVER], n2[u.MessageConstatnts.KEYS.DATA][u.MessageConstatnts.KEYS.CUSTOM_DATA], n2[u.MessageConstatnts.KEYS.RECEIVER_TYPE], n2.type);
              }
              n2[u.MessageConstatnts.KEYS.MY_RECEIPTS] && (n2[u.MessageConstatnts.KEYS.MY_RECEIPTS] = n2[u.MessageConstatnts.KEYS.MY_RECEIPTS], Object.keys(n2[u.MessageConstatnts.KEYS.MY_RECEIPTS]).map(function(t4) {
                var e3 = new p.MessageReceipt();
                t4 == u.DELIVERY_RECEIPTS.DELIVERED_AT && (e3.setReceiptType(e3.RECEIPT_TYPE.DELIVERY_RECEIPT), e3.setDeliveredAt(n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.DELIVERY_RECEIPTS.DELIVERED_AT]), c.isFalsy(n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.DELIVERY_RECEIPTS.RECIPIENT]) ? n2[u.DELIVERY_RECEIPTS.DELIVERED_TO_ME_AT] = n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.DELIVERY_RECEIPTS.DELIVERED_AT] : e3.setSender(n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.DELIVERY_RECEIPTS.RECIPIENT]), e3.setReceiverType(n2[u.MessageConstatnts.KEYS.RECEIVER_TYPE]), e3.setReceiver(n2[u.MessageConstatnts.KEYS.RECEIVER])), n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.READ_RECEIPTS.READ_AT] && (e3.setReceiptType(e3.RECEIPT_TYPE.READ_RECEIPT), e3.setReadAt(n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.READ_RECEIPTS.READ_AT]), c.isFalsy(n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.READ_RECEIPTS.RECIPIENT]) ? n2[u.READ_RECEIPTS.READ_BY_ME_AT] = n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.READ_RECEIPTS.READ_AT] : e3.setSender(n2[u.MessageConstatnts.KEYS.MY_RECEIPTS][u.READ_RECEIPTS.RECIPIENT]), e3.setReceiverType(n2[u.MessageConstatnts.KEYS.RECEIVER_TYPE]), e3.setReceiver(n2[u.MessageConstatnts.KEYS.RECEIVER]));
              }));
              try {
                if (Object.assign(e2, n2), (n2 = e2).parentId && (n2.parentMessageId = n2.parentId, delete n2.parentId), n2 instanceof i.BaseMessage && (c.isFalsy(t3) || n2.setRawMessage(t3)), n2 instanceof a.TextMessage) n2.setSender(n2.getSender()), n2.setReceiver(n2.getReceiver()), n2.getData()[u.MessageConstatnts.KEYS.METADATA] && n2.setMetadata(n2.getData()[u.MessageConstatnts.KEYS.METADATA]);
                else if (n2 instanceof E.MediaMessage) n2.getData()[u.MessageConstatnts.KEYS.METADATA] && n2.setMetadata(n2.getData()[u.MessageConstatnts.KEYS.METADATA]), n2.setSender(n2.getSender()), n2.setReceiver(n2.getReceiver());
                else if (n2 instanceof S.Action) n2.setSender(n2.getSender()), n2.setReceiver(n2.getActionFor()), n2.setActionBy(n2.getActionBy()), n2.setActionOn(n2.getActionOn()), n2.setActionFor(n2.getActionFor()), n2.setMessage(n2.getMessage());
                else if (n2 instanceof l.Call) {
                  try {
                    n2.setSender(n2.getSender());
                  } catch (t4) {
                    c.Logger.error("MessageController: trasformJSONMessge: setSender", t4);
                  }
                  try {
                    n2.setCallInitiator(n2.getCallInitiator());
                  } catch (t4) {
                    c.Logger.error("MessageController: trasformJSONMessge: setCallInitiator", t4);
                  }
                  try {
                    n2.setReceiver(n2.getCallReceiver()), n2.setCallReceiver(n2.getCallReceiver());
                  } catch (t4) {
                    c.Logger.error("MessageController: trasformJSONMessge: setCallreceiver", t4);
                  }
                } else n2 instanceof T.CustomMessage && (n2.getData()[u.MessageConstatnts.KEYS.METADATA] && n2.setMetadata(n2.getData()[u.MessageConstatnts.KEYS.METADATA]), n2.setCustomData(n2.getData()[u.MessageConstatnts.KEYS.CUSTOM_DATA]), n2.setSubType(n2.getData()[u.MessageConstatnts.KEYS.CUSTOM_SUB_TYPE]), n2.setSender(n2.getSender()), n2.setReceiver(n2.getReceiver()));
              } catch (t4) {
                c.Logger.error("MessageController: trasformJSONMessge: Main", t4), n2 = null;
              }
              return n2;
            } catch (t4) {
              c.Logger.error("MessageController: trasformJSONMessge", t4);
            }
          }, t2.getReceiptsFromJSON = function(s) {
            return new Promise(function(t3, e2) {
              try {
                var o2 = [];
                d.CometChat.getLoggedInUser().then(function(n2) {
                  c.isFalsy(s.receipts) ? t3([]) : (s.receipts.data.map(function(t4) {
                    var e3 = new p.MessageReceipt();
                    t4[u.DELIVERY_RECEIPTS.DELIVERED_AT] && (e3.setReceiptType(e3.RECEIPT_TYPE.DELIVERY_RECEIPT), e3.setDeliveredAt(t4[u.DELIVERY_RECEIPTS.DELIVERED_AT]), e3.setTimestamp(t4[u.DELIVERY_RECEIPTS.DELIVERED_AT]), c.isFalsy(t4[u.DELIVERY_RECEIPTS.RECIPIENT]) ? e3.setSender(n2) : e3.setSender(_.UsersController.trasformJSONUser(t4[u.DELIVERY_RECEIPTS.RECIPIENT])), e3.setReceiverType(s[u.MessageConstatnts.KEYS.RECEIVER_TYPE]), e3.setReceiver(s[u.MessageConstatnts.KEYS.RECEIVER])), t4[u.READ_RECEIPTS.READ_AT] && (e3.setReceiptType(e3.RECEIPT_TYPE.READ_RECEIPT), e3.setReadAt(t4[u.READ_RECEIPTS.READ_AT]), e3.setTimestamp(t4[t4[u.READ_RECEIPTS.READ_AT]]), c.isFalsy(t4[u.READ_RECEIPTS.RECIPIENT]) ? e3.setSender(n2) : e3.setSender(_.UsersController.trasformJSONUser(t4[u.READ_RECEIPTS.RECIPIENT])), e3.setReceiverType(s[u.MessageConstatnts.KEYS.RECEIVER_TYPE]), e3.setReceiver(s[u.MessageConstatnts.KEYS.RECEIVER])), o2.push(e3);
                  }), t3(o2));
                });
              } catch (t4) {
                e2(new r.CometChatException(t4));
              }
            });
          }, t2;
        }();
        e.MessageController = o;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.UsersController = void 0;
        var o = n(4), s = n(0), r = function() {
          function t2() {
          }
          return t2.trasformJSONUser = function(t3) {
            var e2;
            try {
              t3.uid = t3.uid.toString(), t3.name = t3.name.toString(), t3.status && "offline" !== t3.status ? t3.status = "online" : t3.status = "offline", e2 = new o.User(t3), Object.assign(e2, t3), t3 = e2;
            } catch (t4) {
              s.Logger.error("UsersController:transformJSONUser", t4);
            }
            return t3;
          }, t2;
        }();
        e.UsersController = r;
      }, function(t, e, n) {
        (function(o) {
          t.exports = function s(r, i, a) {
            function E(n2, t3) {
              if (!i[n2]) {
                if (!r[n2]) {
                  if (c) return c(n2, true);
                  var e2 = new Error("Cannot find module '" + n2 + "'");
                  throw e2.code = "MODULE_NOT_FOUND", e2;
                }
                var o2 = i[n2] = { exports: {} };
                r[n2][0].call(o2.exports, function(t4) {
                  var e3 = r[n2][1][t4];
                  return E(e3 || t4);
                }, o2, o2.exports, s, r, i, a);
              }
              return i[n2].exports;
            }
            for (var c = false, t2 = 0; t2 < a.length; t2++) E(a[t2]);
            return E;
          }({ 1: [function(t2, u, e2) {
            (function(e3) {
              "use strict";
              var n2, o2, t3 = e3.MutationObserver || e3.WebKitMutationObserver;
              if (t3) {
                var s = 0, r = new t3(c), i = e3.document.createTextNode("");
                r.observe(i, { characterData: true }), n2 = function() {
                  i.data = s = ++s % 2;
                };
              } else if (e3.setImmediate || void 0 === e3.MessageChannel) n2 = "document" in e3 && "onreadystatechange" in e3.document.createElement("script") ? function() {
                var t4 = e3.document.createElement("script");
                t4.onreadystatechange = function() {
                  c(), t4.onreadystatechange = null, t4.parentNode.removeChild(t4), t4 = null;
                }, e3.document.documentElement.appendChild(t4);
              } : function() {
                setTimeout(c, 0);
              };
              else {
                var a = new e3.MessageChannel();
                a.port1.onmessage = c, n2 = function() {
                  a.port2.postMessage(0);
                };
              }
              var E = [];
              function c() {
                var t4, e4;
                o2 = true;
                for (var n3 = E.length; n3; ) {
                  for (e4 = E, E = [], t4 = -1; ++t4 < n3; ) e4[t4]();
                  n3 = E.length;
                }
                o2 = false;
              }
              u.exports = function(t4) {
                1 !== E.push(t4) || o2 || n2();
              };
            }).call(this, void 0 !== o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
          }, {}], 2: [function(t2, e2, n2) {
            "use strict";
            var s = t2(1);
            function c() {
            }
            var u = {}, r = ["REJECTED"], i = ["FULFILLED"], a = ["PENDING"];
            function o2(t3) {
              if ("function" != typeof t3) throw new TypeError("resolver must be a function");
              this.state = a, this.queue = [], this.outcome = void 0, t3 !== c && p(this, t3);
            }
            function E(t3, e3, n3) {
              this.promise = t3, "function" == typeof e3 && (this.onFulfilled = e3, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n3 && (this.onRejected = n3, this.callRejected = this.otherCallRejected);
            }
            function S(e3, n3, o3) {
              s(function() {
                var t3;
                try {
                  t3 = n3(o3);
                } catch (t4) {
                  return u.reject(e3, t4);
                }
                t3 === e3 ? u.reject(e3, new TypeError("Cannot resolve promise with itself")) : u.resolve(e3, t3);
              });
            }
            function l(t3) {
              var e3 = t3 && t3.then;
              if (t3 && ("object" == typeof t3 || "function" == typeof t3) && "function" == typeof e3) return function() {
                e3.apply(t3, arguments);
              };
            }
            function p(e3, t3) {
              var n3 = false;
              function o3(t4) {
                n3 || (n3 = true, u.reject(e3, t4));
              }
              function s2(t4) {
                n3 || (n3 = true, u.resolve(e3, t4));
              }
              var r2 = C(function() {
                t3(s2, o3);
              });
              "error" === r2.status && o3(r2.value);
            }
            function C(t3, e3) {
              var n3 = {};
              try {
                n3.value = t3(e3), n3.status = "success";
              } catch (t4) {
                n3.status = "error", n3.value = t4;
              }
              return n3;
            }
            (e2.exports = o2).prototype.catch = function(t3) {
              return this.then(null, t3);
            }, o2.prototype.then = function(t3, e3) {
              if ("function" != typeof t3 && this.state === i || "function" != typeof e3 && this.state === r) return this;
              var n3 = new this.constructor(c);
              if (this.state !== a) {
                var o3 = this.state === i ? t3 : e3;
                S(n3, o3, this.outcome);
              } else this.queue.push(new E(n3, t3, e3));
              return n3;
            }, E.prototype.callFulfilled = function(t3) {
              u.resolve(this.promise, t3);
            }, E.prototype.otherCallFulfilled = function(t3) {
              S(this.promise, this.onFulfilled, t3);
            }, E.prototype.callRejected = function(t3) {
              u.reject(this.promise, t3);
            }, E.prototype.otherCallRejected = function(t3) {
              S(this.promise, this.onRejected, t3);
            }, u.resolve = function(t3, e3) {
              var n3 = C(l, e3);
              if ("error" === n3.status) return u.reject(t3, n3.value);
              var o3 = n3.value;
              if (o3) p(t3, o3);
              else {
                t3.state = i, t3.outcome = e3;
                for (var s2 = -1, r2 = t3.queue.length; ++s2 < r2; ) t3.queue[s2].callFulfilled(e3);
              }
              return t3;
            }, u.reject = function(t3, e3) {
              t3.state = r, t3.outcome = e3;
              for (var n3 = -1, o3 = t3.queue.length; ++n3 < o3; ) t3.queue[n3].callRejected(e3);
              return t3;
            }, o2.resolve = function(t3) {
              return t3 instanceof this ? t3 : u.resolve(new this(c), t3);
            }, o2.reject = function(t3) {
              var e3 = new this(c);
              return u.reject(e3, t3);
            }, o2.all = function(t3) {
              var n3 = this;
              if ("[object Array]" !== Object.prototype.toString.call(t3)) return this.reject(new TypeError("must be an array"));
              var o3 = t3.length, s2 = false;
              if (!o3) return this.resolve([]);
              for (var r2 = new Array(o3), i2 = 0, e3 = -1, a2 = new this(c); ++e3 < o3; ) E2(t3[e3], e3);
              return a2;
              function E2(t4, e4) {
                n3.resolve(t4).then(function(t5) {
                  r2[e4] = t5, ++i2 !== o3 || s2 || (s2 = true, u.resolve(a2, r2));
                }, function(t5) {
                  s2 || (s2 = true, u.reject(a2, t5));
                });
              }
            }, o2.race = function(t3) {
              var e3 = this;
              if ("[object Array]" !== Object.prototype.toString.call(t3)) return this.reject(new TypeError("must be an array"));
              var n3 = t3.length, o3 = false;
              if (!n3) return this.resolve([]);
              for (var s2, r2 = -1, i2 = new this(c); ++r2 < n3; ) s2 = t3[r2], e3.resolve(s2).then(function(t4) {
                o3 || (o3 = true, u.resolve(i2, t4));
              }, function(t4) {
                o3 || (o3 = true, u.reject(i2, t4));
              });
              return i2;
            };
          }, { 1: 1 }], 3: [function(e2, t2, n2) {
            (function(t3) {
              "use strict";
              "function" != typeof t3.Promise && (t3.Promise = e2(2));
            }).call(this, void 0 !== o ? o : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
          }, { 2: 2 }], 4: [function(t2, e2, n2) {
            "use strict";
            var o2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
              return typeof t3;
            } : function(t3) {
              return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
            }, E = function() {
              try {
                if ("undefined" != typeof indexedDB) return indexedDB;
                if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                if ("undefined" != typeof msIndexedDB) return msIndexedDB;
              } catch (t3) {
                return;
              }
            }();
            function i(e3, n3) {
              e3 = e3 || [], n3 = n3 || {};
              try {
                return new Blob(e3, n3);
              } catch (t3) {
                if ("TypeError" !== t3.name) throw t3;
                for (var o3 = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, s2 = new o3(), r2 = 0; r2 < e3.length; r2 += 1) s2.append(e3[r2]);
                return s2.getBlob(n3.type);
              }
            }
            "undefined" == typeof Promise && t2(3);
            var S = Promise;
            function l(t3, e3) {
              e3 && t3.then(function(t4) {
                e3(null, t4);
              }, function(t4) {
                e3(t4);
              });
            }
            function c(t3, e3, n3) {
              "function" == typeof e3 && t3.then(e3), "function" == typeof n3 && t3.catch(n3);
            }
            function u(t3) {
              return "string" != typeof t3 && (t3 = String(t3)), t3;
            }
            function r() {
              if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1];
            }
            var a = "local-forage-detect-blob-support", s = void 0, p = {}, C = Object.prototype.toString, T = "readonly", d = "readwrite";
            function _(t3) {
              return "boolean" == typeof s ? S.resolve(s) : (o3 = t3, new S(function(n3) {
                var t4 = o3.transaction(a, d), e3 = i([""]);
                t4.objectStore(a).put(e3, "key"), t4.onabort = function(t5) {
                  t5.preventDefault(), t5.stopPropagation(), n3(false);
                }, t4.oncomplete = function() {
                  var t5 = navigator.userAgent.match(/Chrome\/(\d+)/), e4 = navigator.userAgent.match(/Edge\//);
                  n3(e4 || !t5 || 43 <= parseInt(t5[1], 10));
                };
              }).catch(function() {
                return false;
              })).then(function(t4) {
                return s = t4;
              });
              var o3;
            }
            function g(t3) {
              var e3 = p[t3.name], n3 = {};
              n3.promise = new S(function(t4, e4) {
                n3.resolve = t4, n3.reject = e4;
              }), e3.deferredOperations.push(n3), e3.dbReady ? e3.dbReady = e3.dbReady.then(function() {
                return n3.promise;
              }) : e3.dbReady = n3.promise;
            }
            function h(t3) {
              var e3 = p[t3.name], n3 = e3.deferredOperations.pop();
              if (n3) return n3.resolve(), n3.promise;
            }
            function A(t3, e3) {
              var n3 = p[t3.name], o3 = n3.deferredOperations.pop();
              if (o3) return o3.reject(e3), o3.promise;
            }
            function R(s2, r2) {
              return new S(function(e3, n3) {
                if (p[s2.name] = p[s2.name] || { forages: [], db: null, dbReady: null, deferredOperations: [] }, s2.db) {
                  if (!r2) return e3(s2.db);
                  g(s2), s2.db.close();
                }
                var t3 = [s2.name];
                r2 && t3.push(s2.version);
                var o3 = E.open.apply(E, t3);
                r2 && (o3.onupgradeneeded = function(t4) {
                  var e4 = o3.result;
                  try {
                    e4.createObjectStore(s2.storeName), t4.oldVersion <= 1 && e4.createObjectStore(a);
                  } catch (t5) {
                    if ("ConstraintError" !== t5.name) throw t5;
                  }
                }), o3.onerror = function(t4) {
                  t4.preventDefault(), n3(o3.error);
                }, o3.onsuccess = function() {
                  var t4 = o3.result;
                  t4.onversionchange = function(t5) {
                    t5.target.close();
                  }, e3(t4), h(s2);
                };
              });
            }
            function I(t3) {
              return R(t3, false);
            }
            function f(t3) {
              return R(t3, true);
            }
            function O(t3, e3) {
              if (!t3.db) return true;
              var n3 = !t3.db.objectStoreNames.contains(t3.storeName), o3 = t3.version < t3.db.version, s2 = t3.version > t3.db.version;
              if (o3 && (t3.version, t3.version = t3.db.version), s2 || n3) {
                if (n3) {
                  var r2 = t3.db.version + 1;
                  r2 > t3.version && (t3.version = r2);
                }
                return true;
              }
              return false;
            }
            function N(t3) {
              var e3 = function(t4) {
                for (var e4 = t4.length, n3 = new ArrayBuffer(e4), o3 = new Uint8Array(n3), s2 = 0; s2 < e4; s2++) o3[s2] = t4.charCodeAt(s2);
                return n3;
              }(atob(t3.data));
              return i([e3], { type: t3.type });
            }
            function y(t3) {
              return t3 && t3.__local_forage_encoded_blob;
            }
            function m(t3) {
              var e3 = this, n3 = e3._initReady().then(function() {
                var t4 = p[e3._dbInfo.name];
                if (t4 && t4.dbReady) return t4.dbReady;
              });
              return c(n3, t3, t3), n3;
            }
            function L(e3, n3, o3, s2) {
              void 0 === s2 && (s2 = 1);
              try {
                var t3 = e3.db.transaction(e3.storeName, n3);
                o3(null, t3);
              } catch (t4) {
                if (0 < s2 && (!e3.db || "InvalidStateError" === t4.name || "NotFoundError" === t4.name)) return S.resolve().then(function() {
                  if (!e3.db || "NotFoundError" === t4.name && !e3.db.objectStoreNames.contains(e3.storeName) && e3.version <= e3.db.version) return e3.db && (e3.version = e3.db.version + 1), f(e3);
                }).then(function() {
                  return function(n4) {
                    g(n4);
                    for (var o4 = p[n4.name], s3 = o4.forages, t5 = 0; t5 < s3.length; t5++) {
                      var e4 = s3[t5];
                      e4._dbInfo.db && (e4._dbInfo.db.close(), e4._dbInfo.db = null);
                    }
                    return n4.db = null, I(n4).then(function(t6) {
                      return n4.db = t6, O(n4) ? f(n4) : t6;
                    }).then(function(t6) {
                      n4.db = o4.db = t6;
                      for (var e5 = 0; e5 < s3.length; e5++) s3[e5]._dbInfo.db = t6;
                    }).catch(function(t6) {
                      throw A(n4, t6), t6;
                    });
                  }(e3).then(function() {
                    L(e3, n3, o3, s2 - 1);
                  });
                }).catch(o3);
                o3(t4);
              }
            }
            var M = { _driver: "asyncStorage", _initStorage: function(t3) {
              var o3 = this, s2 = { db: null };
              if (t3) for (var e3 in t3) s2[e3] = t3[e3];
              var r2 = p[s2.name];
              r2 || (r2 = { forages: [], db: null, dbReady: null, deferredOperations: [] }, p[s2.name] = r2), r2.forages.push(o3), o3._initReady || (o3._initReady = o3.ready, o3.ready = m);
              var n3 = [];
              function i2() {
                return S.resolve();
              }
              for (var a2 = 0; a2 < r2.forages.length; a2++) {
                var E2 = r2.forages[a2];
                E2 !== o3 && n3.push(E2._initReady().catch(i2));
              }
              var c2 = r2.forages.slice(0);
              return S.all(n3).then(function() {
                return s2.db = r2.db, I(s2);
              }).then(function(t4) {
                return s2.db = t4, O(s2, o3._defaultConfig.version) ? f(s2) : t4;
              }).then(function(t4) {
                s2.db = r2.db = t4, o3._dbInfo = s2;
                for (var e4 = 0; e4 < c2.length; e4++) {
                  var n4 = c2[e4];
                  n4 !== o3 && (n4._dbInfo.db = s2.db, n4._dbInfo.version = s2.version);
                }
              });
            }, _support: function() {
              try {
                if (!E || !E.open) return false;
                var t3 = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), e3 = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                return (!t3 || e3) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange;
              } catch (t4) {
                return false;
              }
            }(), iterate: function(a2, t3) {
              var E2 = this, e3 = new S(function(r2, i2) {
                E2.ready().then(function() {
                  L(E2._dbInfo, T, function(t4, e4) {
                    if (t4) return i2(t4);
                    try {
                      var n3 = e4.objectStore(E2._dbInfo.storeName), o3 = n3.openCursor(), s2 = 1;
                      o3.onsuccess = function() {
                        var t5 = o3.result;
                        if (t5) {
                          var e5 = t5.value;
                          y(e5) && (e5 = N(e5));
                          var n4 = a2(e5, t5.key, s2++);
                          void 0 !== n4 ? r2(n4) : t5.continue();
                        } else r2();
                      }, o3.onerror = function() {
                        i2(o3.error);
                      };
                    } catch (t5) {
                      i2(t5);
                    }
                  });
                }).catch(i2);
              });
              return l(e3, t3), e3;
            }, getItem: function(i2, t3) {
              var a2 = this;
              i2 = u(i2);
              var e3 = new S(function(s2, r2) {
                a2.ready().then(function() {
                  L(a2._dbInfo, T, function(t4, e4) {
                    if (t4) return r2(t4);
                    try {
                      var n3 = e4.objectStore(a2._dbInfo.storeName), o3 = n3.get(i2);
                      o3.onsuccess = function() {
                        var t5 = o3.result;
                        void 0 === t5 && (t5 = null), y(t5) && (t5 = N(t5)), s2(t5);
                      }, o3.onerror = function() {
                        r2(o3.error);
                      };
                    } catch (t5) {
                      r2(t5);
                    }
                  });
                }).catch(r2);
              });
              return l(e3, t3), e3;
            }, setItem: function(a2, e3, t3) {
              var E2 = this;
              a2 = u(a2);
              var n3 = new S(function(r2, i2) {
                var t4;
                E2.ready().then(function() {
                  return t4 = E2._dbInfo, "[object Blob]" === C.call(e3) ? _(t4.db).then(function(t5) {
                    return t5 ? e3 : (o3 = e3, new S(function(n4, t6) {
                      var e4 = new FileReader();
                      e4.onerror = t6, e4.onloadend = function(t7) {
                        var e5 = btoa(t7.target.result || "");
                        n4({ __local_forage_encoded_blob: true, data: e5, type: o3.type });
                      }, e4.readAsBinaryString(o3);
                    }));
                    var o3;
                  }) : e3;
                }).then(function(s2) {
                  L(E2._dbInfo, d, function(t5, e4) {
                    if (t5) return i2(t5);
                    try {
                      var n4 = e4.objectStore(E2._dbInfo.storeName);
                      null === s2 && (s2 = void 0);
                      var o3 = n4.put(s2, a2);
                      e4.oncomplete = function() {
                        void 0 === s2 && (s2 = null), r2(s2);
                      }, e4.onabort = e4.onerror = function() {
                        var t6 = o3.error ? o3.error : o3.transaction.error;
                        i2(t6);
                      };
                    } catch (t6) {
                      i2(t6);
                    }
                  });
                }).catch(i2);
              });
              return l(n3, t3), n3;
            }, removeItem: function(i2, t3) {
              var a2 = this;
              i2 = u(i2);
              var e3 = new S(function(s2, r2) {
                a2.ready().then(function() {
                  L(a2._dbInfo, d, function(t4, e4) {
                    if (t4) return r2(t4);
                    try {
                      var n3 = e4.objectStore(a2._dbInfo.storeName), o3 = n3.delete(i2);
                      e4.oncomplete = function() {
                        s2();
                      }, e4.onerror = function() {
                        r2(o3.error);
                      }, e4.onabort = function() {
                        var t5 = o3.error ? o3.error : o3.transaction.error;
                        r2(t5);
                      };
                    } catch (t5) {
                      r2(t5);
                    }
                  });
                }).catch(r2);
              });
              return l(e3, t3), e3;
            }, clear: function(t3) {
              var i2 = this, e3 = new S(function(s2, r2) {
                i2.ready().then(function() {
                  L(i2._dbInfo, d, function(t4, e4) {
                    if (t4) return r2(t4);
                    try {
                      var n3 = e4.objectStore(i2._dbInfo.storeName), o3 = n3.clear();
                      e4.oncomplete = function() {
                        s2();
                      }, e4.onabort = e4.onerror = function() {
                        var t5 = o3.error ? o3.error : o3.transaction.error;
                        r2(t5);
                      };
                    } catch (t5) {
                      r2(t5);
                    }
                  });
                }).catch(r2);
              });
              return l(e3, t3), e3;
            }, length: function(t3) {
              var i2 = this, e3 = new S(function(s2, r2) {
                i2.ready().then(function() {
                  L(i2._dbInfo, T, function(t4, e4) {
                    if (t4) return r2(t4);
                    try {
                      var n3 = e4.objectStore(i2._dbInfo.storeName), o3 = n3.count();
                      o3.onsuccess = function() {
                        s2(o3.result);
                      }, o3.onerror = function() {
                        r2(o3.error);
                      };
                    } catch (t5) {
                      r2(t5);
                    }
                  });
                }).catch(r2);
              });
              return l(e3, t3), e3;
            }, key: function(a2, t3) {
              var E2 = this, e3 = new S(function(r2, i2) {
                a2 < 0 ? r2(null) : E2.ready().then(function() {
                  L(E2._dbInfo, T, function(t4, e4) {
                    if (t4) return i2(t4);
                    try {
                      var n3 = e4.objectStore(E2._dbInfo.storeName), o3 = false, s2 = n3.openKeyCursor();
                      s2.onsuccess = function() {
                        var t5 = s2.result;
                        t5 ? 0 === a2 ? r2(t5.key) : o3 ? r2(t5.key) : (o3 = true, t5.advance(a2)) : r2(null);
                      }, s2.onerror = function() {
                        i2(s2.error);
                      };
                    } catch (t5) {
                      i2(t5);
                    }
                  });
                }).catch(i2);
              });
              return l(e3, t3), e3;
            }, keys: function(t3) {
              var a2 = this, e3 = new S(function(r2, i2) {
                a2.ready().then(function() {
                  L(a2._dbInfo, T, function(t4, e4) {
                    if (t4) return i2(t4);
                    try {
                      var n3 = e4.objectStore(a2._dbInfo.storeName), o3 = n3.openKeyCursor(), s2 = [];
                      o3.onsuccess = function() {
                        var t5 = o3.result;
                        t5 ? (s2.push(t5.key), t5.continue()) : r2(s2);
                      }, o3.onerror = function() {
                        i2(o3.error);
                      };
                    } catch (t5) {
                      i2(t5);
                    }
                  });
                }).catch(i2);
              });
              return l(e3, t3), e3;
            }, dropInstance: function(a2, t3) {
              t3 = r.apply(this, arguments);
              var e3, n3 = this.config();
              if ((a2 = "function" != typeof a2 && a2 || {}).name || (a2.name = a2.name || n3.name, a2.storeName = a2.storeName || n3.storeName), a2.name) {
                var o3 = a2.name === n3.name && this._dbInfo.db, s2 = o3 ? S.resolve(this._dbInfo.db) : I(a2).then(function(t4) {
                  var e4 = p[a2.name], n4 = e4.forages;
                  e4.db = t4;
                  for (var o4 = 0; o4 < n4.length; o4++) n4[o4]._dbInfo.db = t4;
                  return t4;
                });
                e3 = a2.storeName ? s2.then(function(t4) {
                  if (t4.objectStoreNames.contains(a2.storeName)) {
                    var s3 = t4.version + 1;
                    g(a2);
                    var o4 = p[a2.name], r2 = o4.forages;
                    t4.close();
                    for (var e4 = 0; e4 < r2.length; e4++) {
                      var n4 = r2[e4];
                      n4._dbInfo.db = null, n4._dbInfo.version = s3;
                    }
                    var i2 = new S(function(e5, n5) {
                      var o5 = E.open(a2.name, s3);
                      o5.onerror = function(t5) {
                        var e6 = o5.result;
                        e6.close(), n5(t5);
                      }, o5.onupgradeneeded = function() {
                        var t5 = o5.result;
                        t5.deleteObjectStore(a2.storeName);
                      }, o5.onsuccess = function() {
                        var t5 = o5.result;
                        t5.close(), e5(t5);
                      };
                    });
                    return i2.then(function(t5) {
                      o4.db = t5;
                      for (var e5 = 0; e5 < r2.length; e5++) {
                        var n5 = r2[e5];
                        n5._dbInfo.db = t5, h(n5._dbInfo);
                      }
                    }).catch(function(t5) {
                      throw (A(a2, t5) || S.resolve()).catch(function() {
                      }), t5;
                    });
                  }
                }) : s2.then(function(t4) {
                  g(a2);
                  var o4 = p[a2.name], s3 = o4.forages;
                  t4.close();
                  for (var e4 = 0; e4 < s3.length; e4++) {
                    var n4 = s3[e4];
                    n4._dbInfo.db = null;
                  }
                  var r2 = new S(function(e5, n5) {
                    var o5 = E.deleteDatabase(a2.name);
                    o5.onerror = function() {
                      var t5 = o5.result;
                      t5 && t5.close(), n5(o5.error);
                    }, o5.onblocked = function() {
                    }, o5.onsuccess = function() {
                      var t5 = o5.result;
                      t5 && t5.close(), e5(t5);
                    };
                  });
                  return r2.then(function(t5) {
                    o4.db = t5;
                    for (var e5 = 0; e5 < s3.length; e5++) {
                      var n5 = s3[e5];
                      h(n5._dbInfo);
                    }
                  }).catch(function(t5) {
                    throw (A(a2, t5) || S.resolve()).catch(function() {
                    }), t5;
                  });
                });
              } else e3 = S.reject("Invalid arguments");
              return l(e3, t3), e3;
            } }, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P = /^~~local_forage_type~([^~]+)~/, D = "__lfsc__:", U = D.length, Y = "arbf", G = "blob", w = U + Y.length, K = Object.prototype.toString;
            function b(t3) {
              var e3, n3, o3, s2, r2, i2 = 0.75 * t3.length, a2 = t3.length, E2 = 0;
              "=" === t3[t3.length - 1] && (i2--, "=" === t3[t3.length - 2] && i2--);
              var c2 = new ArrayBuffer(i2), u2 = new Uint8Array(c2);
              for (e3 = 0; e3 < a2; e3 += 4) n3 = v.indexOf(t3[e3]), o3 = v.indexOf(t3[e3 + 1]), s2 = v.indexOf(t3[e3 + 2]), r2 = v.indexOf(t3[e3 + 3]), u2[E2++] = n3 << 2 | o3 >> 4, u2[E2++] = (15 & o3) << 4 | s2 >> 2, u2[E2++] = (3 & s2) << 6 | 63 & r2;
              return c2;
            }
            function B(t3) {
              var e3, n3 = new Uint8Array(t3), o3 = "";
              for (e3 = 0; e3 < n3.length; e3 += 3) o3 += v[n3[e3] >> 2], o3 += v[(3 & n3[e3]) << 4 | n3[e3 + 1] >> 4], o3 += v[(15 & n3[e3 + 1]) << 2 | n3[e3 + 2] >> 6], o3 += v[63 & n3[e3 + 2]];
              return n3.length % 3 == 2 ? o3 = o3.substring(0, o3.length - 1) + "=" : n3.length % 3 == 1 && (o3 = o3.substring(0, o3.length - 2) + "=="), o3;
            }
            var F = { serialize: function(e3, n3) {
              var t3 = "";
              if (e3 && (t3 = K.call(e3)), e3 && ("[object ArrayBuffer]" === t3 || e3.buffer && "[object ArrayBuffer]" === K.call(e3.buffer))) {
                var o3, s2 = D;
                e3 instanceof ArrayBuffer ? (o3 = e3, s2 += Y) : (o3 = e3.buffer, "[object Int8Array]" === t3 ? s2 += "si08" : "[object Uint8Array]" === t3 ? s2 += "ui08" : "[object Uint8ClampedArray]" === t3 ? s2 += "uic8" : "[object Int16Array]" === t3 ? s2 += "si16" : "[object Uint16Array]" === t3 ? s2 += "ur16" : "[object Int32Array]" === t3 ? s2 += "si32" : "[object Uint32Array]" === t3 ? s2 += "ui32" : "[object Float32Array]" === t3 ? s2 += "fl32" : "[object Float64Array]" === t3 ? s2 += "fl64" : n3(new Error("Failed to get type for BinaryArray"))), n3(s2 + B(o3));
              } else if ("[object Blob]" === t3) {
                var r2 = new FileReader();
                r2.onload = function() {
                  var t4 = "~~local_forage_type~" + e3.type + "~" + B(this.result);
                  n3(D + G + t4);
                }, r2.readAsArrayBuffer(e3);
              } else try {
                n3(JSON.stringify(e3));
              } catch (t4) {
                n3(null, t4);
              }
            }, deserialize: function(t3) {
              if (t3.substring(0, U) !== D) return JSON.parse(t3);
              var e3, n3 = t3.substring(w), o3 = t3.substring(U, w);
              if (o3 === G && P.test(n3)) {
                var s2 = n3.match(P);
                e3 = s2[1], n3 = n3.substring(s2[0].length);
              }
              var r2 = b(n3);
              switch (o3) {
                case Y:
                  return r2;
                case G:
                  return i([r2], { type: e3 });
                case "si08":
                  return new Int8Array(r2);
                case "ui08":
                  return new Uint8Array(r2);
                case "uic8":
                  return new Uint8ClampedArray(r2);
                case "si16":
                  return new Int16Array(r2);
                case "ur16":
                  return new Uint16Array(r2);
                case "si32":
                  return new Int32Array(r2);
                case "ui32":
                  return new Uint32Array(r2);
                case "fl32":
                  return new Float32Array(r2);
                case "fl64":
                  return new Float64Array(r2);
                default:
                  throw new Error("Unkown type: " + o3);
              }
            }, stringToBuffer: b, bufferToString: B };
            function V(t3, e3, n3, o3) {
              t3.executeSql("CREATE TABLE IF NOT EXISTS " + e3.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n3, o3);
            }
            function x(t3, o3, s2, r2, i2, a2) {
              t3.executeSql(s2, r2, i2, function(t4, n3) {
                n3.code === n3.SYNTAX_ERR ? t4.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [o3.storeName], function(t5, e3) {
                  e3.rows.length ? a2(t5, n3) : V(t5, o3, function() {
                    t5.executeSql(s2, r2, i2, a2);
                  }, a2);
                }, a2) : a2(t4, n3);
              }, a2);
            }
            function k(i2, t3, a2, E2) {
              var c2 = this;
              i2 = u(i2);
              var e3 = new S(function(s2, r2) {
                c2.ready().then(function() {
                  void 0 === t3 && (t3 = null);
                  var n3 = t3, o3 = c2._dbInfo;
                  o3.serializer.serialize(t3, function(e4, t4) {
                    t4 ? r2(t4) : o3.db.transaction(function(t5) {
                      x(t5, o3, "INSERT OR REPLACE INTO " + o3.storeName + " (key, value) VALUES (?, ?)", [i2, e4], function() {
                        s2(n3);
                      }, function(t6, e5) {
                        r2(e5);
                      });
                    }, function(t5) {
                      if (t5.code === t5.QUOTA_ERR) {
                        if (0 < E2) return void s2(k.apply(c2, [i2, n3, a2, E2 - 1]));
                        r2(t5);
                      }
                    });
                  });
                }).catch(r2);
              });
              return l(e3, a2), e3;
            }
            var J = { _driver: "webSQLStorage", _initStorage: function(t3) {
              var o3 = this, s2 = { db: null };
              if (t3) for (var e3 in t3) s2[e3] = "string" != typeof t3[e3] ? t3[e3].toString() : t3[e3];
              var n3 = new S(function(e4, n4) {
                try {
                  s2.db = openDatabase(s2.name, String(s2.version), s2.description, s2.size);
                } catch (t4) {
                  return n4(t4);
                }
                s2.db.transaction(function(t4) {
                  V(t4, s2, function() {
                    o3._dbInfo = s2, e4();
                  }, function(t5, e5) {
                    n4(e5);
                  });
                }, n4);
              });
              return s2.serializer = F, n3;
            }, _support: "function" == typeof openDatabase, iterate: function(c2, t3) {
              var e3 = this, n3 = new S(function(E2, n4) {
                e3.ready().then(function() {
                  var a2 = e3._dbInfo;
                  a2.db.transaction(function(t4) {
                    x(t4, a2, "SELECT * FROM " + a2.storeName, [], function(t5, e4) {
                      for (var n5 = e4.rows, o3 = n5.length, s2 = 0; s2 < o3; s2++) {
                        var r2 = n5.item(s2), i2 = r2.value;
                        if (i2 && (i2 = a2.serializer.deserialize(i2)), void 0 !== (i2 = c2(i2, r2.key, s2 + 1))) return void E2(i2);
                      }
                      E2();
                    }, function(t5, e4) {
                      n4(e4);
                    });
                  });
                }).catch(n4);
              });
              return l(n3, t3), n3;
            }, getItem: function(e3, t3) {
              var r2 = this;
              e3 = u(e3);
              var n3 = new S(function(s2, n4) {
                r2.ready().then(function() {
                  var o3 = r2._dbInfo;
                  o3.db.transaction(function(t4) {
                    x(t4, o3, "SELECT * FROM " + o3.storeName + " WHERE key = ? LIMIT 1", [e3], function(t5, e4) {
                      var n5 = e4.rows.length ? e4.rows.item(0).value : null;
                      n5 && (n5 = o3.serializer.deserialize(n5)), s2(n5);
                    }, function(t5, e4) {
                      n4(e4);
                    });
                  });
                }).catch(n4);
              });
              return l(n3, t3), n3;
            }, setItem: function(t3, e3, n3) {
              return k.apply(this, [t3, e3, n3, 1]);
            }, removeItem: function(s2, t3) {
              var r2 = this;
              s2 = u(s2);
              var e3 = new S(function(n3, o3) {
                r2.ready().then(function() {
                  var e4 = r2._dbInfo;
                  e4.db.transaction(function(t4) {
                    x(t4, e4, "DELETE FROM " + e4.storeName + " WHERE key = ?", [s2], function() {
                      n3();
                    }, function(t5, e5) {
                      o3(e5);
                    });
                  });
                }).catch(o3);
              });
              return l(e3, t3), e3;
            }, clear: function(t3) {
              var s2 = this, e3 = new S(function(n3, o3) {
                s2.ready().then(function() {
                  var e4 = s2._dbInfo;
                  e4.db.transaction(function(t4) {
                    x(t4, e4, "DELETE FROM " + e4.storeName, [], function() {
                      n3();
                    }, function(t5, e5) {
                      o3(e5);
                    });
                  });
                }).catch(o3);
              });
              return l(e3, t3), e3;
            }, length: function(t3) {
              var s2 = this, e3 = new S(function(o3, n3) {
                s2.ready().then(function() {
                  var e4 = s2._dbInfo;
                  e4.db.transaction(function(t4) {
                    x(t4, e4, "SELECT COUNT(key) as c FROM " + e4.storeName, [], function(t5, e5) {
                      var n4 = e5.rows.item(0).c;
                      o3(n4);
                    }, function(t5, e5) {
                      n3(e5);
                    });
                  });
                }).catch(n3);
              });
              return l(e3, t3), e3;
            }, key: function(s2, t3) {
              var r2 = this, e3 = new S(function(o3, n3) {
                r2.ready().then(function() {
                  var e4 = r2._dbInfo;
                  e4.db.transaction(function(t4) {
                    x(t4, e4, "SELECT key FROM " + e4.storeName + " WHERE id = ? LIMIT 1", [s2 + 1], function(t5, e5) {
                      var n4 = e5.rows.length ? e5.rows.item(0).key : null;
                      o3(n4);
                    }, function(t5, e5) {
                      n3(e5);
                    });
                  });
                }).catch(n3);
              });
              return l(e3, t3), e3;
            }, keys: function(t3) {
              var o3 = this, e3 = new S(function(s2, n3) {
                o3.ready().then(function() {
                  var e4 = o3._dbInfo;
                  e4.db.transaction(function(t4) {
                    x(t4, e4, "SELECT key FROM " + e4.storeName, [], function(t5, e5) {
                      for (var n4 = [], o4 = 0; o4 < e5.rows.length; o4++) n4.push(e5.rows.item(o4).key);
                      s2(n4);
                    }, function(t5, e5) {
                      n3(e5);
                    });
                  });
                }).catch(n3);
              });
              return l(e3, t3), e3;
            }, dropInstance: function(n3, t3) {
              t3 = r.apply(this, arguments);
              var o3 = this.config();
              (n3 = "function" != typeof n3 && n3 || {}).name || (n3.name = n3.name || o3.name, n3.storeName = n3.storeName || o3.storeName);
              var e3, s2 = this;
              return l(e3 = n3.name ? new S(function(t4) {
                var e4, r2;
                e4 = n3.name === o3.name ? s2._dbInfo.db : openDatabase(n3.name, "", "", 0), n3.storeName ? t4({ db: e4, storeNames: [n3.storeName] }) : t4((r2 = e4, new S(function(s3, n4) {
                  r2.transaction(function(t5) {
                    t5.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t6, e5) {
                      for (var n5 = [], o4 = 0; o4 < e5.rows.length; o4++) n5.push(e5.rows.item(o4).name);
                      s3({ db: r2, storeNames: n5 });
                    }, function(t6, e5) {
                      n4(e5);
                    });
                  }, function(t5) {
                    n4(t5);
                  });
                })));
              }).then(function(a2) {
                return new S(function(r2, i2) {
                  a2.db.transaction(function(o4) {
                    function t4(e5) {
                      return new S(function(t5, n5) {
                        o4.executeSql("DROP TABLE IF EXISTS " + e5, [], function() {
                          t5();
                        }, function(t6, e6) {
                          n5(e6);
                        });
                      });
                    }
                    for (var e4 = [], n4 = 0, s3 = a2.storeNames.length; n4 < s3; n4++) e4.push(t4(a2.storeNames[n4]));
                    S.all(e4).then(function() {
                      r2();
                    }).catch(function(t5) {
                      i2(t5);
                    });
                  }, function(t4) {
                    i2(t4);
                  });
                });
              }) : S.reject("Invalid arguments"), t3), e3;
            } };
            function H(t3, e3) {
              var n3 = t3.name + "/";
              return t3.storeName !== e3.storeName && (n3 += t3.storeName + "/"), n3;
            }
            function W() {
              return !function() {
                var t3 = "_localforage_support_test";
                try {
                  return localStorage.setItem(t3, true), localStorage.removeItem(t3), false;
                } catch (t4) {
                  return true;
                }
              }() || 0 < localStorage.length;
            }
            var j = { _driver: "localStorageWrapper", _initStorage: function(t3) {
              var e3 = {};
              if (t3) for (var n3 in t3) e3[n3] = t3[n3];
              return e3.keyPrefix = H(t3, this._defaultConfig), W() ? ((this._dbInfo = e3).serializer = F, S.resolve()) : S.reject();
            }, _support: function() {
              try {
                return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem;
              } catch (t3) {
                return false;
              }
            }(), iterate: function(E2, t3) {
              var c2 = this, e3 = c2.ready().then(function() {
                for (var t4 = c2._dbInfo, e4 = t4.keyPrefix, n3 = e4.length, o3 = localStorage.length, s2 = 1, r2 = 0; r2 < o3; r2++) {
                  var i2 = localStorage.key(r2);
                  if (0 === i2.indexOf(e4)) {
                    var a2 = localStorage.getItem(i2);
                    if (a2 && (a2 = t4.serializer.deserialize(a2)), void 0 !== (a2 = E2(a2, i2.substring(n3), s2++))) return a2;
                  }
                }
              });
              return l(e3, t3), e3;
            }, getItem: function(n3, t3) {
              var o3 = this;
              n3 = u(n3);
              var e3 = o3.ready().then(function() {
                var t4 = o3._dbInfo, e4 = localStorage.getItem(t4.keyPrefix + n3);
                return e4 && (e4 = t4.serializer.deserialize(e4)), e4;
              });
              return l(e3, t3), e3;
            }, setItem: function(i2, t3, e3) {
              var a2 = this;
              i2 = u(i2);
              var n3 = a2.ready().then(function() {
                void 0 === t3 && (t3 = null);
                var r2 = t3;
                return new S(function(n4, o3) {
                  var s2 = a2._dbInfo;
                  s2.serializer.serialize(t3, function(t4, e4) {
                    if (e4) o3(e4);
                    else try {
                      localStorage.setItem(s2.keyPrefix + i2, t4), n4(r2);
                    } catch (t5) {
                      "QuotaExceededError" !== t5.name && "NS_ERROR_DOM_QUOTA_REACHED" !== t5.name || o3(t5), o3(t5);
                    }
                  });
                });
              });
              return l(n3, e3), n3;
            }, removeItem: function(e3, t3) {
              var n3 = this;
              e3 = u(e3);
              var o3 = n3.ready().then(function() {
                var t4 = n3._dbInfo;
                localStorage.removeItem(t4.keyPrefix + e3);
              });
              return l(o3, t3), o3;
            }, clear: function(t3) {
              var o3 = this, e3 = o3.ready().then(function() {
                for (var t4 = o3._dbInfo.keyPrefix, e4 = localStorage.length - 1; 0 <= e4; e4--) {
                  var n3 = localStorage.key(e4);
                  0 === n3.indexOf(t4) && localStorage.removeItem(n3);
                }
              });
              return l(e3, t3), e3;
            }, length: function(t3) {
              var e3 = this.keys().then(function(t4) {
                return t4.length;
              });
              return l(e3, t3), e3;
            }, key: function(n3, t3) {
              var o3 = this, e3 = o3.ready().then(function() {
                var e4, t4 = o3._dbInfo;
                try {
                  e4 = localStorage.key(n3);
                } catch (t5) {
                  e4 = null;
                }
                return e4 && (e4 = e4.substring(t4.keyPrefix.length)), e4;
              });
              return l(e3, t3), e3;
            }, keys: function(t3) {
              var r2 = this, e3 = r2.ready().then(function() {
                for (var t4 = r2._dbInfo, e4 = localStorage.length, n3 = [], o3 = 0; o3 < e4; o3++) {
                  var s2 = localStorage.key(o3);
                  0 === s2.indexOf(t4.keyPrefix) && n3.push(s2.substring(t4.keyPrefix.length));
                }
                return n3;
              });
              return l(e3, t3), e3;
            }, dropInstance: function(e3, t3) {
              if (t3 = r.apply(this, arguments), !(e3 = "function" != typeof e3 && e3 || {}).name) {
                var n3 = this.config();
                e3.name = e3.name || n3.name, e3.storeName = e3.storeName || n3.storeName;
              }
              var o3, s2 = this;
              return l(o3 = e3.name ? new S(function(t4) {
                e3.storeName ? t4(H(e3, s2._defaultConfig)) : t4(e3.name + "/");
              }).then(function(t4) {
                for (var e4 = localStorage.length - 1; 0 <= e4; e4--) {
                  var n4 = localStorage.key(e4);
                  0 === n4.indexOf(t4) && localStorage.removeItem(n4);
                }
              }) : S.reject("Invalid arguments"), t3), o3;
            } }, X = function(t3, e3) {
              for (var n3 = t3.length, o3 = 0; o3 < n3; ) {
                if ((s2 = t3[o3]) === (r2 = e3) || "number" == typeof s2 && "number" == typeof r2 && isNaN(s2) && isNaN(r2)) return true;
                o3++;
              }
              var s2, r2;
              return false;
            }, q = Array.isArray || function(t3) {
              return "[object Array]" === Object.prototype.toString.call(t3);
            }, Q = {}, z = {}, Z = { INDEXEDDB: M, WEBSQL: J, LOCALSTORAGE: j }, $ = [Z.INDEXEDDB._driver, Z.WEBSQL._driver, Z.LOCALSTORAGE._driver], tt = ["dropInstance"], et = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(tt), nt = { description: "", driver: $.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
            function ot(e3, n3) {
              e3[n3] = function() {
                var t3 = arguments;
                return e3.ready().then(function() {
                  return e3[n3].apply(e3, t3);
                });
              };
            }
            function st() {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var e3 = arguments[t3];
                if (e3) for (var n3 in e3) e3.hasOwnProperty(n3) && (q(e3[n3]) ? arguments[0][n3] = e3[n3].slice() : arguments[0][n3] = e3[n3]);
              }
              return arguments[0];
            }
            var rt = function() {
              function s2(t3) {
                for (var e3 in function(t4, e4) {
                  if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
                }(this, s2), Z) if (Z.hasOwnProperty(e3)) {
                  var n3 = Z[e3], o3 = n3._driver;
                  this[e3] = o3, Q[o3] || this.defineDriver(n3);
                }
                this._defaultConfig = st({}, nt), this._config = st({}, this._defaultConfig, t3), this._driverSet = null, this._initDriver = null, this._ready = false, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
                });
              }
              return s2.prototype.config = function(t3) {
                if ("object" !== (void 0 === t3 ? "undefined" : o2(t3))) return "string" == typeof t3 ? this._config[t3] : this._config;
                if (this._ready) return new Error("Can't call config() after localforage has been used.");
                for (var e3 in t3) {
                  if ("storeName" === e3 && (t3[e3] = t3[e3].replace(/\W/g, "_")), "version" === e3 && "number" != typeof t3[e3]) return new Error("Database version must be a number.");
                  this._config[e3] = t3[e3];
                }
                return !("driver" in t3 && t3.driver) || this.setDriver(this._config.driver);
              }, s2.prototype.defineDriver = function(u2, t3, e3) {
                var n3 = new S(function(e4, n4) {
                  try {
                    var o3 = u2._driver, t4 = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                    if (!u2._driver) return void n4(t4);
                    for (var s3 = et.concat("_initStorage"), r2 = 0, i2 = s3.length; r2 < i2; r2++) {
                      var a2 = s3[r2], E2 = !X(tt, a2);
                      if ((E2 || u2[a2]) && "function" != typeof u2[a2]) return void n4(t4);
                    }
                    !function() {
                      for (var t5 = function(n6) {
                        return function() {
                          var t6 = new Error("Method " + n6 + " is not implemented by the current driver"), e6 = S.reject(t6);
                          return l(e6, arguments[arguments.length - 1]), e6;
                        };
                      }, e5 = 0, n5 = tt.length; e5 < n5; e5++) {
                        var o4 = tt[e5];
                        u2[o4] || (u2[o4] = t5(o4));
                      }
                    }();
                    var c2 = function(t5) {
                      Q[o3], Q[o3] = u2, z[o3] = t5, e4();
                    };
                    "_support" in u2 ? u2._support && "function" == typeof u2._support ? u2._support().then(c2, n4) : c2(!!u2._support) : c2(true);
                  } catch (t5) {
                    n4(t5);
                  }
                });
                return c(n3, t3, e3), n3;
              }, s2.prototype.driver = function() {
                return this._driver || null;
              }, s2.prototype.getDriver = function(t3, e3, n3) {
                var o3 = Q[t3] ? S.resolve(Q[t3]) : S.reject(new Error("Driver not found."));
                return c(o3, e3, n3), o3;
              }, s2.prototype.getSerializer = function(t3) {
                var e3 = S.resolve(F);
                return c(e3, t3), e3;
              }, s2.prototype.ready = function(t3) {
                var e3 = this, n3 = e3._driverSet.then(function() {
                  return null === e3._ready && (e3._ready = e3._initDriver()), e3._ready;
                });
                return c(n3, t3, t3), n3;
              }, s2.prototype.setDriver = function(t3, e3, n3) {
                var r2 = this;
                q(t3) || (t3 = [t3]);
                var o3 = this._getSupportedDrivers(t3);
                function i2() {
                  r2._config.driver = r2.driver();
                }
                function a2(t4) {
                  return r2._extend(t4), i2(), r2._ready = r2._initStorage(r2._config), r2._ready;
                }
                var s3 = null !== this._driverSet ? this._driverSet.catch(function() {
                  return S.resolve();
                }) : S.resolve();
                return this._driverSet = s3.then(function() {
                  var t4 = o3[0];
                  return r2._dbInfo = null, r2._ready = null, r2.getDriver(t4).then(function(t5) {
                    var s4;
                    r2._driver = t5._driver, i2(), r2._wrapLibraryMethodsWithReady(), r2._initDriver = (s4 = o3, function() {
                      var n4 = 0;
                      function o4() {
                        for (; n4 < s4.length; ) {
                          var t6 = s4[n4];
                          return n4++, r2._dbInfo = null, r2._ready = null, r2.getDriver(t6).then(a2).catch(o4);
                        }
                        i2();
                        var e4 = new Error("No available storage method found.");
                        return r2._driverSet = S.reject(e4), r2._driverSet;
                      }
                      return o4();
                    });
                  });
                }).catch(function() {
                  i2();
                  var t4 = new Error("No available storage method found.");
                  return r2._driverSet = S.reject(t4), r2._driverSet;
                }), c(this._driverSet, e3, n3), this._driverSet;
              }, s2.prototype.supports = function(t3) {
                return !!z[t3];
              }, s2.prototype._extend = function(t3) {
                st(this, t3);
              }, s2.prototype._getSupportedDrivers = function(t3) {
                for (var e3 = [], n3 = 0, o3 = t3.length; n3 < o3; n3++) {
                  var s3 = t3[n3];
                  this.supports(s3) && e3.push(s3);
                }
                return e3;
              }, s2.prototype._wrapLibraryMethodsWithReady = function() {
                for (var t3 = 0, e3 = et.length; t3 < e3; t3++) ot(this, et[t3]);
              }, s2.prototype.createInstance = function(t3) {
                return new s2(t3);
              }, s2;
            }(), it = new rt();
            e2.exports = it;
          }, { 3: 3 }] }, {}, [4])(4);
        }).call(this, n(39));
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.FETCH_ERROR = e.TYPINGNOTIFICATION_CONSTANTS = e.LOGIN_ERROR = e.MESSAGE_ERRORS = e.MESSAGES_REQUEST_ERRORS = e.USERS_REQUEST_ERRORS = e.GROUP_CREATION_ERRORS = e.INIT_ERROR = e.ERRORS = e.SERVER_ERRORS = void 0, e.SERVER_ERRORS = { AUTH_ERR: { code: "AUTH_ERR_AUTH_TOKEN_NOT_FOUND", message: "The auth token %s% does not exist. Please make sure you are logged in and have a valid auth token or try login again." } }, e.ERRORS = { PARAMETER_MISSING: { code: "MISSING_PARAMETERS", name: "Invalid or no parameter passed to the method." } }, e.INIT_ERROR = { NO_APP_ID: { code: e.ERRORS.PARAMETER_MISSING.code, name: e.ERRORS.PARAMETER_MISSING.name, message: "AppID cannot be empty. Please specify a valid appID.", details: {} } }, e.GROUP_CREATION_ERRORS = { EMPTY_PASSWORD: { code: "ERR_EMPTY_GROUP_PASS", details: void 0, message: "Password is mandatory to join a group.", name: void 0 } }, e.USERS_REQUEST_ERRORS = { EMPTY_USERS_LIST: { code: "EMPTY_USERS_LIST", name: "EMPTY_USERS_LIST", message: "The users list needs to have atleast one UID.", details: {} } }, e.MESSAGES_REQUEST_ERRORS = { REQUEST_IN_PROGRESS_ERROR: { code: "REQUEST_IN_PROGRESS", name: "REQUEST_IN_PROGRESS", message: "Request in progress.", details: {} }, NOT_ENOUGH_PARAMS: { code: "NOT_ENOUGH_PARAMETERS", name: "NOT_ENOUGH_PARAMETERS", message: "`Timestamp`, `MessageId` or `updatedAfter` is required to use the 'fetchNext()' method.", details: {} } }, e.MESSAGE_ERRORS = { INVALID_CUSTOM_DATA: { code: "-1", name: "%s_CUSTOM_DATA", message: "", details: {} } }, e.LOGIN_ERROR = { NOT_INITIALIZED: { code: "-1", name: "COMETCHAT_INITIALIZATION_NOT_DONE", message: "please initialize the cometchat before using login method.", details: {} }, UNAUTHORISED: { code: 401, name: "USER_NOT_AUTHORISED", message: "The `authToken` of the user is not authorised. Please verify again.", details: {} }, WS_CONNECTION_FAIL: { code: -1, name: "WS_CONNECTION_FAIL", message: "WS Connection failed. %s", details: {} }, WS_CONNECTION_FAIL_PORT_ERROR: { code: -1, name: "WS_CONNECTION_FAIL", message: "WS Connection failed. Trying to connect with port: %s", details: {} }, WS_CONNECTION_FALLBACK_FAIL_PORT_ERROR: { code: -1, name: "WS_CONNECTION_FALLBACK_FAIL", message: "WS Connection fallback failed. Trying to connect with port: %s", details: {} }, WS_AUTH_FAIL: { code: -1, name: "WS_AUTH_FAIL", message: "WS username/password not correct.", details: {} }, NO_INTERNET: { code: -1, name: "NO_INTERNET_CONNECTION", message: "You do not have internet connection.", details: {} }, REQUEST_IN_PROGRESS: { code: -1, name: "LOGIN_IN_PROGRESS", message: "Please wait until the previous login request ends.", details: {} } }, e.TYPINGNOTIFICATION_CONSTANTS = { TOO_MANY_REQUEST: { code: "TOO_MANY_REQUEST", name: "TOO MANY REQUEST", message: "too many request, wait for `%s` seconds before sending next request.", details: {} } }, e.FETCH_ERROR = { ERROR_IN_API_CALL: { code: "FAILED_TO_FETCH", name: "FAILED_TO_FETCH", message: "There is an unknown issue with the API request. Please check your internet connection and verify the api call.", details: {} } };
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.LocalStorage = void 0;
        var o = n(0), s = n(1), r = n(12), i = n(3), a = n(2), E = function() {
          function t2(t3) {
            this.store = s.constants.DEFAULT_STORE, o.isFalsy(t3) || (this.store = t3), this.localStore = r.createInstance({ name: o.format(s.LOCAL_STORE.STORE_STRING, i.CometChat.getAppId(), s.LOCAL_STORE.COMMON_STORE) }), this.localStore.setDriver([r.LOCALSTORAGE, r.INDEXEDDB, r.WEBSQL]);
          }
          return t2.getInstance = function() {
            return null == t2.localStorage && (t2.localStorage = new t2()), t2.localStorage;
          }, t2.prototype.set = function(t3, e2) {
            return this.localStore.setItem(t3, JSON.stringify(e2));
          }, t2.prototype.remove = function(t3) {
            this.localStore.removeItem(t3);
          }, t2.prototype.update = function(t3, e2) {
            this.remove(t3), this.set(t3, e2);
          }, t2.prototype.get = function(t3) {
            var o2 = this;
            return new Promise(function(n2, e2) {
              try {
                o2.localStore.getItem(t3).then(function(e3) {
                  try {
                    n2(JSON.parse(e3));
                  } catch (t4) {
                    n2(e3);
                  }
                }, function(t4) {
                  e2(t4);
                });
              } catch (t4) {
                e2(new a.CometChatException(t4));
              }
            });
          }, t2.prototype.clearStore = function() {
            var o2 = this;
            return new Promise(function(n2, e2) {
              try {
                o2.localStore.keys().then(function(t3) {
                  if (0 < t3.length) for (var e3 = 0; e3 < t3.length; e3++) "appId" !== t3[e3] && o2.localStore.removeItem(t3[e3]), e3 === t3.length - 1 && n2(true);
                });
              } catch (t3) {
                e2(t3);
              }
            });
          }, t2.prototype.clear = function(t3) {
          }, t2.prototype.selectStore = function(t3) {
            this.store = t3;
          }, t2.localStorage = null, t2;
        }();
        e.LocalStorage = E;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.GroupsController = void 0;
        var o = n(8), s = n(1), r = n(0), i = function() {
          function t2() {
          }
          return t2.trasformJSONGroup = function(t3) {
            var e2;
            try {
              e2 = new o.Group(t3[s.GroupConstants.KEYS.GUID], t3[s.GroupConstants.KEYS.NAME], t3[s.GroupConstants.KEYS.TYPE]), t3.wsChannel && delete t3.wsChannel, Object.assign(e2, t3), t3 = e2;
            } catch (t4) {
              r.Logger.error("GroupsController:transformJSONGroup", t4);
            }
            return t3;
          }, t2;
        }();
        e.GroupsController = i;
      }, function(t, e, n) {
        "use strict";
        var o, r = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        }), i = this && this.__assign || function() {
          return (i = Object.assign || function(t2) {
            for (var e2, n2 = 1, o2 = arguments.length; n2 < o2; n2++) for (var s2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
            return t2;
          }).apply(this, arguments);
        };
        e.__esModule = true, e.TextMessage = void 0;
        var s = n(7), a = n(1), E = n(4), c = n(8), u = n(0), S = function(s2) {
          function t2(t3, e2, n2) {
            var o2 = s2.call(this, t3, "text", n2, a.MessageCategory.MESSAGE) || this;
            return o2.type = "text", o2.data = { text: e2 }, o2.text = e2, o2;
          }
          return r(t2, s2), t2.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch (t3) {
              return this.sender;
            }
          }, t2.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch (t3) {
              return this.receiver;
            }
          }, t2.prototype.getMetadata = function() {
            return this.data.metadata && (this.metadata = this.data.metadata), this.metadata;
          }, t2.prototype.setMetadata = function(t3) {
            this.metadata = t3, this.data = i(i({}, this.data), { metadata: t3 });
          }, t2.prototype.getData = function() {
            return this.data;
          }, t2.prototype.setData = function(t3) {
            this.data = t3;
          }, t2.prototype.getText = function() {
            return this.text;
          }, t2.prototype.setText = function(t3) {
            this.text = t3, this.data.text = t3;
          }, t2.prototype.setProcessedText = function(t3) {
            this.processedText = t3;
          }, t2.prototype.getProcessedText = function() {
            return this.processedText;
          }, t2.prototype.getTags = function() {
            return this.tags;
          }, t2.prototype.setTags = function(t3) {
            this.tags = t3;
          }, t2.prototype.getSenderFromData = function() {
            try {
              var t3 = this.getData();
              if (t3[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new E.User(t3[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (t4) {
              u.Logger.error("TextMessageModel: getSenderFromData", t4);
            }
          }, t2.prototype.getReceiverFromData = function() {
            try {
              var t3 = this.getData(), e2 = t3[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (t3[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new E.User(e2);
              var n2 = new c.Group(e2[a.GroupConstants.KEYS.GUID], e2[a.GroupConstants.KEYS.NAME], e2[a.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(n2, e2);
            } catch (t4) {
              u.Logger.error("TextMessageModel: getReceiverFromData", t4);
            }
          }, t2.TYPE = a.MessageConstatnts.TYPE.TEXT, t2.RECEIVER_TYPE = a.MessageConstatnts.RECEIVER_TYPE, t2.CATEGORY = a.MessageConstatnts.CATEGORY.MESSAGE, t2;
        }(s.BaseMessage);
        e.TextMessage = S;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        }), i = this && this.__assign || function() {
          return (i = Object.assign || function(t2) {
            for (var e2, n2 = 1, o2 = arguments.length; n2 < o2; n2++) for (var s2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
            return t2;
          }).apply(this, arguments);
        };
        e.__esModule = true, e.MediaMessage = void 0;
        var r = n(7), a = n(1), E = n(4), c = n(18), u = n(8), S = n(0), l = function(r2) {
          function t2(t3, e2, n2, o2) {
            var s2 = r2.call(this, t3, n2, o2, a.MessageCategory.MESSAGE) || this;
            return s2.data = {}, "object" != typeof e2 ? s2.data = { url: e2 } : e2 && (0 < e2.length ? s2.files = e2 : s2.files = [e2]), s2;
          }
          return s(t2, r2), t2.prototype.setCaption = function(t3) {
            this.caption = t3, this.data[a.MessageConstatnts.KEYS.TEXT] = t3;
          }, t2.prototype.getCaption = function() {
            return this.data[a.MessageConstatnts.KEYS.TEXT];
          }, t2.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch (t3) {
              return this.sender;
            }
          }, t2.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch (t3) {
              return this.receiver;
            }
          }, t2.prototype.getMetadata = function() {
            return this.data.metadata && (this.metadata = this.data.metadata), this.metadata;
          }, t2.prototype.setMetadata = function(t3) {
            this.metadata = t3, this.data = i(i({}, this.data), { metadata: t3 });
          }, t2.prototype.getData = function() {
            return this.data;
          }, t2.prototype.setData = function(t3) {
            this.data = t3;
          }, t2.prototype.getAttachment = function() {
            return new c.Attachment(this.data.attachments[0]);
          }, t2.prototype.setAttachment = function(t3) {
            this.data.attachments = [c.Attachment.toJSON(t3)];
          }, t2.prototype.getAttachments = function() {
            var t3 = [];
            if (this.data.attachments && 0 < this.data.attachments.length) for (var e2 = 0; e2 < this.data.attachments.length; e2++) t3.push(new c.Attachment(this.data.attachments[e2]));
            return t3;
          }, t2.prototype.setAttachments = function(t3) {
            var e2 = [];
            if (t3 && 0 < t3.length) for (var n2 = 0; n2 < t3.length; n2++) e2.push(c.Attachment.toJSON(t3[n2]));
            this.data.attachments = e2;
          }, t2.prototype.getURL = function() {
            try {
              var t3 = this.getData();
              if (t3[a.MessageConstatnts.KEYS.URL]) return t3[a.MessageConstatnts.KEYS.URL];
            } catch (t4) {
              S.Logger.error("MediaMessageModel: getURL", t4);
            }
          }, t2.prototype.getTags = function() {
            return this.tags;
          }, t2.prototype.setTags = function(t3) {
            this.tags = t3;
          }, t2.prototype.getSenderFromData = function() {
            try {
              var t3 = this.getData();
              if (t3[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new E.User(t3[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.SENDER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (t4) {
              S.Logger.error("MediaMessageModel: getSenderFromData", t4);
            }
          }, t2.prototype.getReceiverFromData = function() {
            try {
              var t3 = this.getData(), e2 = t3[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (t3[a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][a.MessageConstatnts.KEYS.RECEIVER][a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [a.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new E.User(e2);
              var n2 = new u.Group(e2[a.GroupConstants.KEYS.GUID], e2[a.GroupConstants.KEYS.NAME], e2[a.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(n2, e2);
            } catch (t4) {
              S.Logger.error("MediaMessageModel: getReceiverFromData", t4);
            }
          }, t2.TYPE = a.MessageConstatnts.TYPE, t2.RECEIVER_TYPE = a.MessageConstatnts.RECEIVER_TYPE, t2.CATEGORY = a.MessageConstatnts.CATEGORY, t2;
        }(r.BaseMessage);
        e.MediaMessage = l;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.Attachment = void 0;
        var o = n(1), s = function() {
          function e2(t2) {
            t2.hasOwnProperty(o.ATTACHMENTS_CONSTANTS.KEYS.EXTENSION) && (this.extension = t2[o.ATTACHMENTS_CONSTANTS.KEYS.EXTENSION]), t2.hasOwnProperty(o.ATTACHMENTS_CONSTANTS.KEYS.MIME_TYPE) && (this.mimeType = t2[o.ATTACHMENTS_CONSTANTS.KEYS.MIME_TYPE]), t2.hasOwnProperty(o.ATTACHMENTS_CONSTANTS.KEYS.NAME) && (this.name = t2[o.ATTACHMENTS_CONSTANTS.KEYS.NAME]), t2.hasOwnProperty(o.ATTACHMENTS_CONSTANTS.KEYS.SIZE) && (this.size = t2[o.ATTACHMENTS_CONSTANTS.KEYS.SIZE]), t2.hasOwnProperty(o.ATTACHMENTS_CONSTANTS.KEYS.URL) && (this.url = t2[o.ATTACHMENTS_CONSTANTS.KEYS.URL]);
          }
          return e2.prototype.createFileFromJSON = function(t2) {
            return new e2(t2);
          }, e2.toJSON = function(t2) {
            return { extension: t2.getExtension(), mimeType: t2.getMimeType(), name: t2.getName(), url: t2.getUrl(), size: t2.getSize() };
          }, e2.prototype.getExtension = function() {
            return this.extension;
          }, e2.prototype.setExtension = function(t2) {
            this.extension = t2;
          }, e2.prototype.getMimeType = function() {
            return this.mimeType;
          }, e2.prototype.setMimeType = function(t2) {
            this.mimeType = t2;
          }, e2.prototype.getName = function() {
            return this.name;
          }, e2.prototype.setName = function(t2) {
            this.name = t2;
          }, e2.prototype.getSize = function() {
            return this.size;
          }, e2.prototype.setSize = function(t2) {
            this.size = t2;
          }, e2.prototype.getUrl = function() {
            return this.url;
          }, e2.prototype.setUrl = function(t2) {
            this.url = t2;
          }, e2;
        }();
        e.Attachment = s;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        }), r = this && this.__assign || function() {
          return (r = Object.assign || function(t2) {
            for (var e2, n2 = 1, o2 = arguments.length; n2 < o2; n2++) for (var s2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
            return t2;
          }).apply(this, arguments);
        };
        e.__esModule = true, e.CustomMessage = void 0;
        var i = n(7), E = n(1), c = n(4), u = n(0), S = n(8), a = function(a2) {
          function t2() {
            for (var t3 = [], e2 = 0; e2 < arguments.length; e2++) t3[e2] = arguments[e2];
            var n2 = this;
            if (3 == t3.length) {
              var o2 = t3[0], s2 = t3[1], r2 = t3[2];
              n2 = a2.call(this, o2, E.MessageConstatnts.TYPE.CUSTOM, s2, E.MessageCategory.MESSAGE) || this, ("object" != typeof r2 || Array.isArray(r2)) && (r2 = {}), n2.customData = r2, u.isFalsy(n2.data) && (n2.data = {}), n2.data[E.MessageConstatnts.KEYS.CUSTOM_DATA] = r2;
            }
            if (4 == t3.length) {
              o2 = t3[0], s2 = t3[1];
              var i2 = t3[2];
              r2 = t3[3];
              n2 = a2.call(this, o2, i2, s2, E.MessageCategory.CUSTOM) || this, ("object" != typeof r2 || Array.isArray(r2)) && (r2 = {}), n2.customData = r2, u.isFalsy(n2.data) && (n2.data = {}), n2.data[E.MessageConstatnts.KEYS.CUSTOM_DATA] = r2;
            }
            return n2;
          }
          return s(t2, a2), t2.prototype.getCustomData = function() {
            return this.customData;
          }, t2.prototype.setCustomData = function(t3) {
            this.customData = t3, this.data[E.MessageConstatnts.KEYS.CUSTOM_DATA] = t3;
          }, t2.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch (t3) {
              return this.sender;
            }
          }, t2.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch (t3) {
              return this.receiver;
            }
          }, t2.prototype.getSubType = function() {
            return this.subType;
          }, t2.prototype.setSubType = function(t3) {
            this.subType = t3, this.data = r(r({}, this.data), { subType: t3 });
          }, t2.prototype.getMetadata = function() {
            return this.metadata;
          }, t2.prototype.setMetadata = function(t3) {
            this.metadata = t3, this.data = r(r({}, this.data), { metadata: t3 });
          }, t2.prototype.getData = function() {
            return this.data;
          }, t2.prototype.getTags = function() {
            return this.tags;
          }, t2.prototype.setTags = function(t3) {
            this.tags = t3;
          }, t2.prototype.getSenderFromData = function() {
            try {
              var t3 = this.getData();
              if (t3[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new c.User(t3[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (t4) {
              u.Logger.error("CustomMessageModel: getSenderFromData", t4);
            }
          }, t2.prototype.getReceiverFromData = function() {
            try {
              var t3 = this.getData(), e2 = t3[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (t3[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new c.User(e2);
              var n2 = new S.Group(e2[E.GroupConstants.KEYS.GUID], e2[E.GroupConstants.KEYS.NAME], e2[E.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(n2, e2);
            } catch (t4) {
              u.Logger.error("CustomMessageModel: getReceiverFromData", t4);
            }
          }, t2;
        }(i.BaseMessage);
        e.CustomMessage = a;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        }), r = this && this.__assign || function() {
          return (r = Object.assign || function(t2) {
            for (var e2, n2 = 1, o2 = arguments.length; n2 < o2; n2++) for (var s2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
            return t2;
          }).apply(this, arguments);
        };
        e.__esModule = true, e.Action = void 0;
        var i = n(7), c = n(8), u = n(4), S = n(1), a = n(0), l = n(10), E = function(t2) {
          function e2() {
            return null !== t2 && t2.apply(this, arguments) || this;
          }
          return s(e2, t2), e2.actionFromJSON = function(t3) {
            var e3 = new this(t3[S.MessageConstatnts.KEYS.RECEIVER], t3[S.MessageConstatnts.KEYS.TYPE], t3[S.MessageConstatnts.KEYS.RECEIVER_TYPE], S.MessageCategory.ACTION), n2 = t3[S.MessageConstatnts.KEYS.DATA];
            if (e3.data = n2, e3.setAction(n2[S.MessageConstatnts.KEYS.ACTION]), n2[S.ActionConstatnts.ACTION_KEYS.EXTRAS]) {
              var o2 = n2[S.ActionConstatnts.ACTION_KEYS.EXTRAS];
              if (o2[S.ActionConstatnts.ACTION_KEYS.SCOPE]) {
                var s2 = o2[S.ActionConstatnts.ACTION_KEYS.SCOPE];
                s2[S.ActionConstatnts.ACTION_KEYS.NEW] && s2[S.ActionConstatnts.ACTION_KEYS.OLD] && (e3.setOldScope(s2[S.ActionConstatnts.ACTION_KEYS.OLD]), e3.setNewScope(s2[S.ActionConstatnts.ACTION_KEYS.NEW]));
              }
            }
            n2[S.MessageConstatnts.KEYS.METADATA] && e3.setMetadata(n2[S.MessageConstatnts.KEYS.METADATA]);
            var r2 = n2[S.ActionConstatnts.ACTION_KEYS.ENTITIES];
            if (r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY]) if (r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][S.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == S.ActionConstatnts.ACTION_ENTITY_TYPE.USER) {
              var i2 = new u.User(r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][S.ActionConstatnts.ACTION_KEYS.ENTITY]);
              Object.assign(i2, r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][S.ActionConstatnts.ACTION_KEYS.ENTITY]), e3.actionBy = i2, e3.setSender(i2);
            } else {
              var a2 = new c.Group("", "", "");
              Object.assign(a2, r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][S.ActionConstatnts.ACTION_KEYS.ENTITY]), e3.actionBy = a2;
            }
            if (r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR]) if (r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][S.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == S.ActionConstatnts.ACTION_ENTITY_TYPE.USER) {
              i2 = new u.User(r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][S.ActionConstatnts.ACTION_KEYS.ENTITY]);
              Object.assign(i2, r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][S.ActionConstatnts.ACTION_KEYS.ENTITY]), e3.actionFor = i2;
            } else {
              a2 = new c.Group("", "", "");
              Object.assign(a2, r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][S.ActionConstatnts.ACTION_KEYS.ENTITY]), e3.actionFor = a2;
            }
            if (r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON]) {
              if (r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][S.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == S.ActionConstatnts.ACTION_ENTITY_TYPE.USER) {
                i2 = new u.User(r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][S.ActionConstatnts.ACTION_KEYS.ENTITY]);
                Object.assign(i2, r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][S.ActionConstatnts.ACTION_KEYS.ENTITY]), e3.actionOn = i2;
              } else if (r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][S.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == S.ActionConstatnts.ACTION_ENTITY_TYPE.GROUP) {
                a2 = new c.Group("", "", "");
                Object.assign(a2, r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][S.ActionConstatnts.ACTION_KEYS.ENTITY]), e3.actionOn = a2;
              } else if (r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][S.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == S.ActionConstatnts.ACTION_ENTITY_TYPE.MESSAGE) {
                var E2 = l.MessageController.trasformJSONMessge(r2[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][S.ActionConstatnts.ACTION_KEYS.ENTITY]);
                e3.actionOn = E2;
              }
            }
            return e3.setMessage(e3.getActionMessage(e3)), e3;
          }, e2.prototype.getOldScope = function() {
            return this.oldScope;
          }, e2.prototype.setOldScope = function(t3) {
            this.oldScope = t3;
          }, e2.prototype.getNewScope = function() {
            return this.newScope;
          }, e2.prototype.setNewScope = function(t3) {
            this.newScope = t3;
          }, e2.prototype.getRawData = function() {
            return this.rawData;
          }, e2.prototype.setRawData = function(t3) {
            this.rawData = t3;
          }, e2.prototype.getMessage = function() {
            return this.message;
          }, e2.prototype.setMessage = function(t3) {
            this.message = t3;
          }, e2.prototype.getAction = function() {
            return this.action;
          }, e2.prototype.setAction = function(t3) {
            this.action = t3;
          }, e2.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch (t3) {
              return this.sender;
            }
          }, e2.prototype.getActionBy = function() {
            return this.actionBy;
          }, e2.prototype.setActionBy = function(t3) {
            this.actionBy = t3;
          }, e2.prototype.getActionOn = function() {
            return this.actionOn;
          }, e2.prototype.setActionOn = function(t3) {
            this.actionOn = t3;
          }, e2.prototype.getActionFor = function() {
            return this.actionFor;
          }, e2.prototype.setActionFor = function(t3) {
            this.actionFor = t3;
          }, e2.prototype.getMetadata = function() {
            return this.data.metadata && (this.metadata = this.data.metadata), this.metadata;
          }, e2.prototype.setMetadata = function(t3) {
            this.metadata = t3, this.data = r(r({}, this.data), { metadata: t3 });
          }, e2.prototype.getActionMessage = function(t3) {
            var e3 = "";
            switch (t3.getType()) {
              case S.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_USER:
              case S.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_GROUP:
                switch (t3.getAction()) {
                  case S.ActionConstatnts.ACTION_KEYS.ACTION_CREATED:
                  case S.ActionConstatnts.ACTION_KEYS.ACTION_UPDATED:
                  case S.ActionConstatnts.ACTION_KEYS.ACTION_DELETED:
                }
                break;
              case S.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_GROUP_MEMBER:
                switch (t3.getAction()) {
                  case S.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_JOINED:
                    var n2 = t3.getActionBy();
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_GROUP_JOINED_MESSAGE, n2.getName());
                    break;
                  case S.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_LEFT:
                    n2 = t3.getActionBy();
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_GROUP_LEFT_MESSAGE, n2.getName());
                    break;
                  case S.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_KICKED:
                    n2 = t3.getActionBy();
                    var o2 = t3.getActionOn();
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_MEMBER_KICKED_MESSAGE, n2.getName(), o2.getName());
                    break;
                  case S.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_BANNED:
                    n2 = t3.getActionBy(), o2 = t3.getActionOn();
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_MEMBER_BANNED_MESSAGE, n2.getName(), o2.getName());
                    break;
                  case S.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_UNBANNED:
                    n2 = t3.getActionBy(), o2 = t3.getActionOn();
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_MEMBER_UNBANNED_MESSAGE, n2.getName(), o2.getName());
                    break;
                  case S.ActionConstatnts.ACTION_KEYS.ACTION_SCOPE_CHANGED:
                    n2 = t3.getActionBy(), o2 = t3.getActionOn();
                    var s2 = t3.getNewScope();
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_MEMBER_SCOPE_CHANGED, n2.getName(), o2.getName(), s2);
                    break;
                  case S.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_ADDED:
                    n2 = t3.getActionBy(), o2 = t3.getActionOn();
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_MEMBER_ADDED_TO_GROUP, n2.getName(), o2.getName());
                    break;
                  case S.ActionConstatnts.ACTION_KEYS.TYPE_MESSAGE_EDITED:
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_MESSAGE_EDITED_MESSAGE, "");
                    break;
                  case S.ActionConstatnts.ACTION_KEYS.TYPE_MESSAGE_DELETED:
                    e3 = a.format(S.ActionConstatnts.ActionMessages.ACTION_MESSAGE_DELETED_MESSAGE, "");
                }
            }
            return e3;
          }, e2.prototype.getSenderFromData = function() {
            var t3 = this.data[S.ActionConstatnts.ACTION_KEYS.ENTITIES];
            if (t3[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY] && t3[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][S.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == S.ActionConstatnts.ACTION_ENTITY_TYPE.USER) {
              var e3 = new u.User(t3[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][S.ActionConstatnts.ACTION_KEYS.ENTITY]);
              return Object.assign(e3, t3[S.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][S.ActionConstatnts.ACTION_KEYS.ENTITY]), e3;
            }
          }, e2.TYPE = S.MessageConstatnts.TYPE, e2.RECEIVER_TYPE = S.MessageConstatnts.RECEIVER_TYPE, e2.CATEGORY = S.MessageConstatnts.CATEGORY, e2.ACTION_TYPE = S.ActionConstatnts.ACTION_TYPE, e2;
        }(i.BaseMessage);
        e.Action = E;
      }, function(t, e, n) {
        "use strict";
        var o, r = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        }), i = this && this.__assign || function() {
          return (i = Object.assign || function(t2) {
            for (var e2, n2 = 1, o2 = arguments.length; n2 < o2; n2++) for (var s2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
            return t2;
          }).apply(this, arguments);
        };
        e.__esModule = true, e.Call = void 0;
        var s = n(7), a = n(8), E = n(1), c = n(0), u = n(4), S = function(s2) {
          function t2(t3, e2, n2, o2) {
            return c.isFalsy(o2) ? s2.call(this, t3, e2, n2, E.MessageCategory.CALL) || this : s2.call(this, t3, e2, n2, o2) || this;
          }
          return r(t2, s2), t2.prototype.getCallInitiator = function() {
            return this.getCallInitiatedByFromData();
          }, t2.prototype.setCallInitiator = function(t3) {
            this.callInitiator = t3;
          }, t2.prototype.getCallReceiver = function() {
            return this.getCallReceivedByFromData();
          }, t2.prototype.setCallReceiver = function(t3) {
            this.callReceiver = t3;
          }, t2.prototype.getData = function() {
            return this.data;
          }, t2.prototype.setData = function(t3) {
            this.data = t3;
          }, t2.prototype.getSessionId = function() {
            return this.sessionId;
          }, t2.prototype.setSessionId = function(t3) {
            this.sessionId = t3;
          }, t2.prototype.getMetadata = function() {
            return this.data.metadata && (this.metadata = this.data.metadata), this.metadata;
          }, t2.prototype.setMetadata = function(t3) {
            this.metadata = t3, this.data = i(i({}, this.data), { metadata: t3 });
          }, t2.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch (t3) {
              return this.sender;
            }
          }, t2.prototype.getAction = function() {
            return this.action;
          }, t2.prototype.setAction = function(t3) {
            this.action = t3;
          }, t2.prototype.getInitiatedAt = function() {
            return this.initiatedAt;
          }, t2.prototype.setInitiatedAt = function(t3) {
            this.initiatedAt = t3;
          }, t2.prototype.getJoinedAt = function() {
            return this.joinedAt;
          }, t2.prototype.setJoinedAt = function(t3) {
            this.joinedAt = t3;
          }, t2.prototype.getRawData = function() {
            return this.rawData;
          }, t2.prototype.setRawData = function(t3) {
            this.rawData = t3;
          }, t2.callFromJSON = function(t3) {
            try {
              var e2 = new this(t3[E.MessageConstatnts.KEYS.RECEIVER], t3[E.MessageConstatnts.KEYS.TYPE], t3[E.MessageConstatnts.KEYS.RECEIVER_TYPE], E.MessageCategory.CALL), n2 = t3[E.MessageConstatnts.KEYS.DATA];
              e2.setAction(n2[E.MessageConstatnts.KEYS.ACTION]), n2[E.MessageConstatnts.KEYS.METADATA] && e2.setMetadata(n2[E.MessageConstatnts.KEYS.METADATA]);
              var o2 = n2[E.ActionConstatnts.ACTION_KEYS.ENTITIES];
              if (o2[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY]) o2[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY];
              if (o2[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON]) {
                var s3 = o2[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON];
                if (s3[E.CallConstants.CALL_KEYS.CALL_ENTITY]) {
                  var r2 = s3[E.CallConstants.CALL_KEYS.CALL_ENTITY];
                  if (r2[E.CallConstants.CALL_KEYS.CALL_SESSION_ID] && (e2.sessionId = r2[E.CallConstants.CALL_KEYS.CALL_SESSION_ID]), r2[E.CallConstants.CALL_KEYS.CALL_STATUS] && (e2.status = r2[E.CallConstants.CALL_KEYS.CALL_STATUS]), r2[E.CallConstants.CALL_KEYS.CALL_DATA]) {
                    var i2 = r2[E.CallConstants.CALL_KEYS.CALL_DATA];
                    if (i2[E.CallConstants.CALL_KEYS.CALL_METADATA] && (e2.metadata = i2[E.CallConstants.CALL_KEYS.CALL_METADATA]), i2[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES]) i2[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES];
                  }
                  r2[E.CallConstants.CALL_KEYS.CALL_INITIATED_AT] && (e2.initiatedAt = r2[E.CallConstants.CALL_KEYS.CALL_INITIATED_AT]), r2[E.CallConstants.CALL_KEYS.CALL_JOINED_AT] && (e2.joinedAt = r2[E.CallConstants.CALL_KEYS.CALL_JOINED_AT]), r2[E.CallConstants.CALL_KEYS.CALL_LEFT_AT] && (e2.joinedAt = r2[E.CallConstants.CALL_KEYS.CALL_LEFT_AT]);
                }
              }
              return e2;
            } catch (t4) {
              c.Logger.error("CallModel: callFromJSON", t4);
            }
          }, t2.prototype.getSenderFromData = function() {
            try {
              var t3 = this.getData();
              if ((t3 = t3[E.ActionConstatnts.ACTION_KEYS.ENTITIES])[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][E.CallConstants.CALL_KEYS.CALL_ENTITY]) return new u.User(t3[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][E.CallConstants.CALL_KEYS.CALL_ENTITY]);
            } catch (t4) {
              c.Logger.error("CallModel:getSenderFromData", t4);
            }
          }, t2.prototype.getCallInitiatedByFromData = function() {
            try {
              var t3 = this.getData();
              if ((t3 = t3[E.ActionConstatnts.ACTION_KEYS.ENTITIES])[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][E.CallConstants.CALL_KEYS.CALL_ENTITY][E.CallConstants.CALL_KEYS.CALL_DATA][E.ActionConstatnts.ACTION_KEYS.ENTITIES][E.CallConstants.CALL_KEYS.CALL_SENDER]) return new u.User(t3[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][E.CallConstants.CALL_KEYS.CALL_ENTITY][E.CallConstants.CALL_KEYS.CALL_DATA][E.ActionConstatnts.ACTION_KEYS.ENTITIES][E.CallConstants.CALL_KEYS.CALL_SENDER][E.CallConstants.CALL_KEYS.CALL_ENTITY]);
            } catch (t4) {
              c.Logger.error("CallModel:getCallInitiatedByFromData", t4);
            }
          }, t2.prototype.getCallReceivedByFromData = function() {
            try {
              var t3 = this.getData();
              if ((t3 = t3[E.ActionConstatnts.ACTION_KEYS.ENTITIES])[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][E.CallConstants.CALL_KEYS.CALL_ENTITY]) {
                if (t3[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][E.CallConstants.CALL_KEYS.CALL_ENTITY_TYPE] == E.CallConstants.CALL_KEYS.CALL_ENTITY_USER) return new u.User(t3[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][E.CallConstants.CALL_KEYS.CALL_ENTITY]);
                var e2 = new a.Group(t3[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][E.CallConstants.CALL_KEYS.CALL_ENTITY][E.GroupConstants.KEYS.GUID], t3[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][E.CallConstants.CALL_KEYS.CALL_ENTITY][E.GroupConstants.KEYS.NAME], t3[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][E.CallConstants.CALL_KEYS.CALL_ENTITY][E.GroupConstants.KEYS.TYPE]);
                return Object.assign(e2, t3[E.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][E.CallConstants.CALL_KEYS.CALL_ENTITY]);
              }
            } catch (t4) {
              c.Logger.error("CallModel:getCallReceivedByFromData", t4);
            }
          }, t2.TYPE = E.MessageConstatnts.TYPE, t2.RECEIVER_TYPE = E.MessageConstatnts.RECEIVER_TYPE, t2.CATEGORY = E.MessageConstatnts.CATEGORY, t2.ACTION_TYPE = E.ActionConstatnts.ACTION_TYPE, t2;
        }(s.BaseMessage);
        e.Call = S;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.MessageReceipt = void 0;
        var o = function() {
          function t2() {
            this.RECEIPT_TYPE = { READ_RECEIPT: "read", DELIVERY_RECEIPT: "delivery" }, this.receiptType = this.RECEIPT_TYPE.DELIVERY_RECEIPT;
          }
          return t2.prototype.getReceiverType = function() {
            return this.receiverType;
          }, t2.prototype.setReceiverType = function(t3) {
            this.receiverType = t3;
          }, t2.prototype.getSender = function() {
            return this.sender;
          }, t2.prototype.setSender = function(t3) {
            this.sender = t3;
          }, t2.prototype.getReceiver = function() {
            return this.receiver;
          }, t2.prototype.setReceiver = function(t3) {
            this.receiver = t3;
          }, t2.prototype.getTimestamp = function() {
            return this.timestamp;
          }, t2.prototype.setTimestamp = function(t3) {
            this.timestamp = t3;
          }, t2.prototype.setReadAt = function(t3) {
            this.readAt = t3;
          }, t2.prototype.getReadAt = function() {
            return this.readAt;
          }, t2.prototype.setDeliveredAt = function(t3) {
            this.deliveredAt = t3;
          }, t2.prototype.getDeliveredAt = function() {
            return this.deliveredAt;
          }, t2.prototype.getMessageId = function() {
            return this.messageId;
          }, t2.prototype.setMessageId = function(t3) {
            this.messageId = t3;
          }, t2.prototype.getReceiptType = function() {
            return this.receiptType;
          }, t2.prototype.setReceiptType = function(t3) {
            void 0 === t3 && (t3 = this.RECEIPT_TYPE.DELIVERY_RECEIPT), this.receiptType = t3;
          }, t2;
        }();
        e.MessageReceipt = o;
      }, function(t, e, n) {
        "use strict";
        var o, i = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.WSConnectionListener = e.UserLoginListener = e.CallsListener = e.UserCallListener = e.GroupsListener = e.UsersListener = e.MessagesListener = e.Listener = e.ConnectionListener = e.LoginListener = e.OngoingCallListener = e.GroupListener = e.UserListener = e.CallListener = e.MessageListener = void 0;
        var s = n(0), r = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
          this.onTextMessageReceived = void 0, this.onMediaMessageReceived = void 0, this.onCustomMessageReceived = void 0, this.onTypingStarted = void 0, this.onTypingEnded = void 0, this.onMessagesDelivered = void 0, this.onMessagesRead = void 0, this.onMessageEdited = void 0, this.onMessageDeleted = void 0, this.onTransientMessageReceived = void 0, s.isFalsy(t2[0].onTextMessageReceived) || (this.onTextMessageReceived = t2[0].onTextMessageReceived), s.isFalsy(t2[0].onMediaMessageReceived) || (this.onMediaMessageReceived = t2[0].onMediaMessageReceived), s.isFalsy(t2[0].onTypingStarted) || (this.onTypingStarted = t2[0].onTypingStarted), s.isFalsy(t2[0].onTypingEnded) || (this.onTypingEnded = t2[0].onTypingEnded), s.isFalsy(t2[0].onMessagesDelivered) || (this.onMessagesDelivered = t2[0].onMessagesDelivered), s.isFalsy(t2[0].onMessagesRead) || (this.onMessagesRead = t2[0].onMessagesRead), s.isFalsy(t2[0].onCustomMessageReceived) || (this.onCustomMessageReceived = t2[0].onCustomMessageReceived), s.isFalsy(t2[0].onMessageEdited) || (this.onMessageEdited = t2[0].onMessageEdited), s.isFalsy(t2[0].onMessageDeleted) || (this.onMessageDeleted = t2[0].onMessageDeleted), s.isFalsy(t2[0].onTransientMessageReceived) || (this.onTransientMessageReceived = t2[0].onTransientMessageReceived);
        };
        e.MessageListener = r;
        var a = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
          this.onIncomingCallReceived = void 0, this.onOutgoingCallAccepted = void 0, this.onOutgoingCallRejected = void 0, this.onIncomingCallCancelled = void 0, this.onCallEndedMessageReceived = void 0, s.isFalsy(t2[0].onIncomingCallReceived) || (this.onIncomingCallReceived = t2[0].onIncomingCallReceived), s.isFalsy(t2[0].onOutgoingCallAccepted) || (this.onOutgoingCallAccepted = t2[0].onOutgoingCallAccepted), s.isFalsy(t2[0].onOutgoingCallRejected) || (this.onOutgoingCallRejected = t2[0].onOutgoingCallRejected), s.isFalsy(t2[0].onIncomingCallCancelled) || (this.onIncomingCallCancelled = t2[0].onIncomingCallCancelled), s.isFalsy(t2[0].onCallEndedMessageReceived) || (this.onCallEndedMessageReceived = t2[0].onCallEndedMessageReceived);
        };
        e.CallListener = a;
        var E = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
          s.isFalsy(t2[0].onUserOnline) || (this.onUserOnline = t2[0].onUserOnline), s.isFalsy(t2[0].onUserOffline) || (this.onUserOffline = t2[0].onUserOffline);
        };
        e.UserListener = E;
        var c = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
          s.isFalsy(t2[0].onGroupMemberJoined) || (this.onGroupMemberJoined = t2[0].onGroupMemberJoined), s.isFalsy(t2[0].onGroupMemberLeft) || (this.onGroupMemberLeft = t2[0].onGroupMemberLeft), s.isFalsy(t2[0].onGroupMemberKicked) || (this.onGroupMemberKicked = t2[0].onGroupMemberKicked), s.isFalsy(t2[0].onGroupMemberBanned) || (this.onGroupMemberBanned = t2[0].onGroupMemberBanned), s.isFalsy(t2[0].onGroupMemberUnbanned) || (this.onGroupMemberUnbanned = t2[0].onGroupMemberUnbanned), s.isFalsy(t2[0].onGroupMemberScopeChanged) || (this.onGroupMemberScopeChanged = t2[0].onGroupMemberScopeChanged), s.isFalsy(t2[0].onMemberAddedToGroup) || (this.onGroupMemberAddedToGroup = t2[0].onMemberAddedToGroup);
        };
        e.GroupListener = c;
        var u = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
          s.isFalsy(t2[0].onYouLeft) || (this.onYouLeft = t2[0].onYouLeft), s.isFalsy(t2[0].onYouJoined) || (this.onYouJoined = t2[0].onYouJoined), s.isFalsy(t2[0].onUserJoined) || (this.onUserJoined = t2[0].onUserJoined), s.isFalsy(t2[0].onUserLeft) || (this.onUserLeft = t2[0].onUserLeft), s.isFalsy(t2[0].onUserListUpdated) || (this.onUserListUpdated = t2[0].onUserListUpdated), s.isFalsy(t2[0].onMediaDeviceListUpdated) || (this.onMediaDeviceListUpdated = t2[0].onMediaDeviceListUpdated), s.isFalsy(t2[0].onRecordingStarted) || (this.onRecordingStarted = t2[0].onRecordingStarted), s.isFalsy(t2[0].onRecordingStopped) || (this.onRecordingStopped = t2[0].onRecordingStopped), s.isFalsy(t2[0].onScreenShareStarted) || (this.onScreenShareStarted = t2[0].onScreenShareStarted), s.isFalsy(t2[0].onScreenShareStopped) || (this.onScreenShareStopped = t2[0].onScreenShareStopped), s.isFalsy(t2[0].onUserMuted) || (this.onUserMuted = t2[0].onUserMuted), s.isFalsy(t2[0].onCallSwitchedToVideo) || (this.onCallSwitchedToVideo = t2[0].onCallSwitchedToVideo), s.isFalsy(t2[0].onCallEnded) || (this.onCallEnded = t2[0].onCallEnded), s.isFalsy(t2[0].onError) || (this.onError = t2[0].onError);
        };
        e.OngoingCallListener = u;
        var S = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
          s.isFalsy(t2[0].loginSuccess) || (this.loginSuccess = t2[0].loginSuccess), s.isFalsy(t2[0].loginFailure) || (this.loginFailure = t2[0].loginFailure), s.isFalsy(t2[0].logoutSuccess) || (this.logoutSuccess = t2[0].logoutSuccess), s.isFalsy(t2[0].logoutFailure) || (this.logoutFailure = t2[0].logoutFailure);
        };
        e.LoginListener = S;
        var l = function() {
          for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
          this.onConnected = void 0, this.inConnecting = void 0, this.onDisconnected = void 0, this.onFeatureThrottled = void 0, s.isFalsy(t2[0].onConnected) || (this.onConnected = t2[0].onConnected), s.isFalsy(t2[0].inConnecting) || (this.inConnecting = t2[0].inConnecting), s.isFalsy(t2[0].onDisconnected) || (this.onDisconnected = t2[0].onDisconnected), s.isFalsy(t2[0].onFeatureThrottled) || (this.onFeatureThrottled = t2[0].onFeatureThrottled);
        };
        e.ConnectionListener = l;
        var p = function(t2, e2) {
          this._name = t2, this._callback = e2;
        }, C = function(r2) {
          function t2(t3, e2, n2, o2) {
            var s2 = r2.call(this, t3, o2) || this;
            return s2._eventListener = e2, n2 && (s2._cursor = n2), s2;
          }
          return i(t2, r2), t2;
        }(e.Listener = p);
        e.MessagesListener = C;
        var T = function(r2) {
          function t2(t3, e2, n2, o2) {
            var s2 = r2.call(this, t3, o2) || this;
            return s2._eventListener = e2, n2 && (s2._cursor = n2), s2;
          }
          return i(t2, r2), t2;
        }(p);
        e.UsersListener = T;
        var d = function(r2) {
          function t2(t3, e2, n2, o2) {
            var s2 = r2.call(this, t3, o2) || this;
            return s2._eventListener = e2, n2 && (s2._cursor = n2), s2;
          }
          return i(t2, r2), t2;
        }(p);
        e.GroupsListener = d;
        var _ = function(s2) {
          function t2(t3, e2, n2) {
            var o2 = s2.call(this, "callListner", n2) || this;
            return o2._eventListener = t3, o2;
          }
          return i(t2, s2), t2;
        }(p);
        e.UserCallListener = _;
        var g = function(r2) {
          function t2(t3, e2, n2, o2) {
            var s2 = r2.call(this, t3, o2) || this;
            return s2._eventListener = e2, s2;
          }
          return i(t2, r2), t2;
        }(p);
        e.CallsListener = g;
        var h = function(r2) {
          function t2(t3, e2, n2, o2) {
            var s2 = r2.call(this, t3, o2) || this;
            return s2._eventListener = e2, n2 && (s2._cursor = n2), s2;
          }
          return i(t2, r2), t2;
        }(p);
        e.UserLoginListener = h;
        var A = function(r2) {
          function t2(t3, e2, n2, o2) {
            var s2 = r2.call(this, t3, o2) || this;
            return s2._eventListener = e2, n2 && (s2._cursor = n2), s2;
          }
          return i(t2, r2), t2;
        }(p);
        e.WSConnectionListener = A;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.ConversationController = void 0;
        var a = n(35), E = n(0), o = function() {
          function t2() {
          }
          return t2.trasformJSONConversation = function(t3, e2, n2, o2, s, r) {
            var i;
            try {
              i = new a.Conversation(t3, e2, n2, o2, s, r);
            } catch (t4) {
              E.Logger.error("ConversationController:transformJSONConversation", t4);
            }
            return i;
          }, t2;
        }();
        e.ConversationController = o;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.MessageListnerMaping = void 0;
        var o = n(0), s = n(1), r = n(12), i = n(3), a = function() {
          function t2(t3) {
            this.store = s.constants.DEFAULT_STORE, o.isFalsy(t3) || (this.store = t3), this.settingsStore = r.createInstance({ name: o.format(s.LOCAL_STORE.STORE_STRING, i.CometChat.getAppId(), s.LOCAL_STORE.MESSAGE_LISTENERS_LIST) }), this.settingsStore.setDriver([r.LOCALSTORAGE, r.INDEXEDDB, r.WEBSQL]);
          }
          return t2.getInstance = function() {
            return null == t2.settingsStore && (t2.settingsStore = new t2()), t2.settingsStore;
          }, t2.prototype.set = function(t3, e2) {
            return this.settingsStore.setItem(t3, e2);
          }, t2.prototype.remove = function(t3) {
            this.settingsStore.removeItem(t3);
          }, t2.prototype.get = function(t3) {
            return this.settingsStore.getItem(t3);
          }, t2.prototype.clearStore = function() {
            return this.settingsStore.clear();
          }, t2.prototype.clear = function(t3) {
          }, t2.prototype.selectStore = function(t3) {
            this.store = t3;
          }, t2.settingsStore = null, t2;
        }();
        e.MessageListnerMaping = a;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.TypingIndicator = void 0;
        var o = function() {
          function t2(t3, e2, n2) {
            this.receiverId = t3, this.receiverType = e2, this.metadata = n2;
          }
          return t2.prototype.getReceiverType = function() {
            return this.receiverType;
          }, t2.prototype.setReceiverType = function(t3) {
            this.receiverType = t3;
          }, t2.prototype.getReceiverId = function() {
            return this.receiverId;
          }, t2.prototype.setReceiverId = function(t3) {
            this.receiverId = t3;
          }, t2.prototype.getMetadata = function() {
            return this.metadata;
          }, t2.prototype.setMetadata = function(t3) {
            this.metadata = t3;
          }, t2.prototype.getSender = function() {
            return this.sender;
          }, t2.prototype.setSender = function(t3) {
            this.sender = t3;
          }, t2;
        }();
        e.TypingIndicator = o;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.TransientMessage = void 0;
        var o = function() {
          function t2(t3, e2, n2) {
            this.receiverId = t3, this.receiverType = e2, this.data = n2 || {};
          }
          return t2.prototype.getReceiverId = function() {
            return this.receiverId;
          }, t2.prototype.setReceiverId = function(t3) {
            this.receiverId = t3;
          }, t2.prototype.getReceiverType = function() {
            return this.receiverType;
          }, t2.prototype.setReceiverType = function(t3) {
            this.receiverType = t3;
          }, t2.prototype.getData = function() {
            return this.data;
          }, t2.prototype.setData = function(t3) {
            this.data = t3;
          }, t2.prototype.getSender = function() {
            return this.sender;
          }, t2.prototype.setSender = function(t3) {
            this.sender = t3;
          }, t2;
        }();
        e.TransientMessage = o;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.EndpointFactory = void 0;
        var c = n(0), u = n(1), o = n(14), S = n(3), l = n(2), s = function() {
          function E() {
            this.baseUrl = "https://%s.apiclient-%s.cometchat.io/", this.apiVersion = u.APPINFO.apiVersion, this.adminApiUrl = "https://%s.api-%s.cometchat.io/", this.adminApiVersion = u.APPINFO.apiVersion, this.extensionApi = "https://%s-%s.%s/%s", this.prosodyApi = "https://%s.%s/%s", this.wsApi = "https://%s/%s", this.uriEndpoints = { authToken: { endpoint: "users/{{uid}}/auth_tokens", method: "POST", data: { uid: "string|max:100" }, isAdminApi: true }, appSettings: { endpoint: "settings", method: "GET" }, login: { endpoint: "admin/users/auth", method: "POST", data: { uid: "string|max:100" } }, logout: { endpoint: "admin/users/auth/{{authToken}}", method: "DELETE" }, getMyDetails: { endpoint: "me", method: "GET" }, updateMyDetails: { endpoint: "me", method: "PUT" }, getJWT: { endpoint: "me/jwt", method: "POST" }, users: { endpoint: "users", method: "GET" }, user: { endpoint: "users/{{uid}}", method: "GET" }, blockUsers: { endpoint: "blockedusers", method: "POST" }, blockedUsersList: { endpoint: "blockedusers", method: "GET" }, unblockUsers: { endpoint: "blockedusers", method: "DELETE" }, userLogout: { endpoint: "me", method: "DELETE" }, createUser: { endpoint: "users", method: "POST", isAdminApi: true }, updateUser: { endpoint: "users/{{uid}}", method: "PUT", isAdminApi: true }, sendFriendRequests: { endpoint: "user/friends", method: "POST", data: { uids: "array<string|max:100>" } }, getFriends: { endpoint: "user/friends", method: "GET" }, unfriend: { endpoint: "user/friends/{{uid}}/{{gid}}", method: "DELETE", data: { uids: "array<string|max:100>" } }, acceptFriendRequest: { endpoint: "user/friends/{{uid}}/accept", method: "PUT", data: { uids: "array<string|max:100>" } }, rejectFriendRequest: { endpoint: "user/friends/{{uid}}/reject", method: "DELETE", data: { uids: "array<string|max:100>" } }, createGroup: { endpoint: "groups", method: "POST", data: { guid: "required|string|max:100", name: "required|string|max:100", type: "enum|public,protected,password", password: "filled|string|max:100" } }, getGroups: { endpoint: "groups", method: "GET" }, getGroup: { endpoint: "groups/{{guid}}", method: "GET" }, updateGroup: { endpoint: "groups/{{guid}}", method: "PUT" }, deleteGroup: { endpoint: "groups/{{guid}}", method: "DELETE" }, addGroupMembers: { endpoint: "groups/{{guid}}/members", method: "POST", data: { uids: "array<string|max:100>" } }, getGroupMembers: { endpoint: "groups/{{guid}}/members", method: "GET" }, joinGroup: { endpoint: "groups/{{guid}}/members", method: "POST" }, leaveGroup: { endpoint: "groups/{{guid}}/members", method: "DELETE" }, kickGroupMembers: { endpoint: "groups/{{guid}}/members/{{uid}}", method: "DELETE", data: { uids: "array<string|max:100>" } }, changeScopeOfMember: { endpoint: "groups/{{guid}}/members/{{uid}}", method: "PUT", data: { uids: "array<string|max:100>" } }, banGroupMember: { endpoint: "groups/{{guid}}/bannedusers/{{uid}}", method: "POST", data: { uids: "array<string|max:100>" } }, unbanGroupMember: { endpoint: "groups/{{guid}}/bannedusers/{{uid}}", method: "DELETE", data: { uids: "array<string|max:100>" } }, addMemebersToGroup: { endpoint: "groups/{{guid}}/members", method: "PUT" }, getBannedGroupMembers: { endpoint: "groups/{{guid}}/bannedusers", method: "GET" }, promotemoteGroupMember: { endpoint: "groups/{{guid}}/promote", method: "PUT", data: { uids: "array<string|max:100>" } }, demoteGroupMember: { endpoint: "groups/{{guid}}/demote", method: "DELETE", data: { uids: "array<string|max:100>" } }, transferOwnership: { endpoint: "groups/{{guid}}/owner", method: "PATCH" }, sendMessage: { endpoint: "messages", method: "POST", data: { sender: "array:string:max:100>", isGroupMember: "filled|boolean|bail", data: "required|json" } }, sendMessageInThread: { endpoint: "messages/{{parentId}}/thread", method: "POST", data: { sender: "array:string:max:100>", isGroupMember: "filled|boolean|bail", data: "required|json" } }, getMessages: { endpoint: "messages", method: "GET" }, getMessageDetails: { endpoint: "messages/{{messageId}}", method: "GET" }, getUserMessages: { endpoint: "users/{{listId}}/messages", method: "GET" }, getGroupMessages: { endpoint: "groups/{{listId}}/messages", method: "GET" }, getThreadMessages: { endpoint: "messages/{{listId}}/thread", method: "GET" }, getMessage: { endpoint: "user/messages/{{muid}}", method: "GET" }, updateMessage: { endpoint: "messages/{{messageId}}", method: "PUT" }, deleteMessage: { endpoint: "messages/{{messageId}}", method: "DELETE" }, createCallSession: { endpoint: "calls", method: "POST", data: {} }, updateCallSession: { endpoint: "calls/{{sessionid}}", method: "put", data: {} }, getConversations: { endpoint: "conversations", method: "GET" }, getUserConversation: { endpoint: "users/{{uid}}/conversation", method: "GET" }, getGroupConversation: { endpoint: "groups/{{guid}}/conversation", method: "GET" }, deleteUserConversation: { endpoint: "users/{{uid}}/conversation", method: "DELETE" }, deleteGroupConversation: { endpoint: "groups/{{guid}}/conversation", method: "DELETE" }, updateUserConversation: { endpoint: "users/{{uid}}/conversation", method: "PUT" }, updateGroupConversation: { endpoint: "groups/{{guid}}/conversation", method: "PUT" }, updateCallType: { endpoint: "calls/{{sessionid}}/type", method: "PATCH" } };
          }
          return E.prototype.getEndpointData = function(a) {
            return new Promise(function(s2, e2) {
              try {
                var r = S.CometChat.appSettings.getAdminHost(), i = S.CometChat.appSettings.getClientHost();
                o.LocalStorage.getInstance().get(u.LOCAL_STORE.KEY_APP_SETTINGS).then(function(t2) {
                  if (c.isFalsy(t2)) {
                    var e3 = {};
                    if (new E().uriEndpoints.hasOwnProperty(a)) if ((e3 = new E().uriEndpoints[a]).hasOwnProperty("isAdminApi")) if (c.isFalsy(r)) {
                      var n2 = c.format(new E().adminApiUrl, S.CometChat.getAppId(), S.CometChat.appSettings.getRegion()) + new E().adminApiVersion + "/" + e3.endpoint;
                      e3.endpoint = n2, s2(e3);
                    } else {
                      n2 = "https://" + r + "/" + e3.endpoint;
                      e3.endpoint = n2, s2(e3);
                    }
                    else if (c.isFalsy(i)) {
                      n2 = c.format(new E().baseUrl, S.CometChat.getAppId(), S.CometChat.appSettings.getRegion()) + new E().apiVersion + "/" + e3.endpoint;
                      e3.endpoint = n2, s2(e3);
                    } else {
                      n2 = "https://" + i + "/" + e3.endpoint;
                      e3.endpoint = n2, s2(e3);
                    }
                  } else {
                    e3 = {};
                    if (new E().uriEndpoints.hasOwnProperty(a)) if ((e3 = new E().uriEndpoints[a]).hasOwnProperty("isAdminApi")) {
                      var o2 = "https://" + t2[u.APP_SETTINGS.KEYS.ADMIN_API_HOST] + "/" + t2[u.APP_SETTINGS.KEYS.CHAT_API_VERSION] + "/" + e3.endpoint;
                      e3.endpoint = o2, s2(e3);
                    } else {
                      o2 = "https://" + t2[u.APP_SETTINGS.KEYS.CLIENT_API_HOST] + "/" + t2[u.APP_SETTINGS.KEYS.CHAT_API_VERSION] + "/" + e3.endpoint;
                      e3.endpoint = o2, s2(e3);
                    }
                  }
                }, function(t2) {
                  var e3;
                  if (new E().uriEndpoints.hasOwnProperty(a)) if ((e3 = new E().uriEndpoints[a]).hasOwnProperty(["isAdminApi"])) if (c.isFalsy(r)) {
                    var n2 = c.format(new E().adminApiUrl, S.CometChat.getAppId(), S.CometChat.appSettings.getRegion()) + new E().adminApiVersion + "/" + e3.endpoint;
                    e3.endpoint = n2, s2(e3);
                  } else e3.endpoint = "https://" + r + "/" + e3.endpoint, s2(e3);
                  else if (c.isFalsy(i)) {
                    n2 = c.format(new E().baseUrl, S.CometChat.getAppId(), S.CometChat.appSettings.getRegion()) + new E().apiVersion + "/" + e3.endpoint;
                    e3.endpoint = n2, s2(e3);
                  } else e3.endpoint = "https://" + i + "/" + e3.endpoint, s2(e3);
                });
              } catch (t2) {
                e2(new l.CometChatException(t2));
              }
            });
          }, E;
        }();
        e.EndpointFactory = s;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.getEndPoint = void 0;
        var o = n(28), i = n(2);
        e.getEndPoint = function(t2, r) {
          void 0 === t2 && (t2 = ""), void 0 === r && (r = {});
          var e2 = new o.EndpointFactory();
          return new Promise(function(o2, s) {
            try {
              e2.getEndpointData(t2).then(function(t3) {
                var e3 = t3;
                if (e3) {
                  for (var n2 in r) e3.endpoint = e3.endpoint.replace("{{" + n2 + "}}", r[n2]);
                  o2(e3);
                } else s({ error: "Unknown endPoint name." });
              });
            } catch (t3) {
              s(new i.CometChatException(t3));
            }
          });
        };
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.KeyStore = void 0;
        var o = n(3), s = n(0), r = n(1), i = n(12), a = n(2), E = function() {
          function t2(t3) {
            this.store = r.constants.DEFAULT_STORE, s.isFalsy(t3) || (this.store = t3), this.keyStore = i.createInstance({ name: s.format(r.LOCAL_STORE.STORE_STRING, o.CometChat.getAppId(), r.LOCAL_STORE.KEYS_STORE) }), this.keyStore.setDriver([i.LOCALSTORAGE, i.INDEXEDDB, i.WEBSQL]);
          }
          return t2.getInstance = function() {
            return null == t2.KeyStore && (t2.KeyStore = new t2()), t2.KeyStore;
          }, t2.prototype.set = function(t3, e2) {
            return this.keyStore.setItem(t3, e2);
          }, t2.prototype.remove = function(t3) {
            this.keyStore.removeItem(t3);
          }, t2.prototype.get = function(t3) {
            var o2 = this;
            return new Promise(function(n2, e2) {
              try {
                o2.keyStore.getItem(t3).then(function(e3) {
                  try {
                    n2(JSON.parse(e3));
                  } catch (t4) {
                    n2(e3);
                  }
                }, function(t4) {
                  e2(t4);
                });
              } catch (t4) {
                e2(new a.CometChatException(t4));
              }
            });
          }, t2.prototype.clearStore = function() {
            return this.keyStore.clear();
          }, t2;
        }();
        e.KeyStore = E;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.CallController = void 0;
        var h = n(1), A = n(0), R = n(3), s = n(2), o = n(23), r = n(32), I = n(4), f = n(6), i = function() {
          function g() {
            this.TAG = "calling Log", this.CALL_NO_ANSWER_INTERVAL = 45e3, this.view = void 0, this.isDev = false;
          }
          return g.prototype.getCallListner = function() {
            return g.callListner;
          }, g.prototype.setCallListner = function(t2) {
            g.callListner = new o.UserCallListener(t2);
          }, g.getInstance = function() {
            try {
              return null != this.callController && null != this.callController || (this.callController = new g()), this.callController;
            } catch (t2) {
              A.Logger.error("CallController: getInstance", t2);
            }
          }, g.prototype.getActiveCall = function() {
            try {
              return A.isFalsy(this.call) ? null : this.call;
            } catch (t2) {
              A.Logger.error("CallController: getActiveCall", t2);
            }
          }, g.prototype.initiateCall = function(n2) {
            var o2 = this;
            return new Promise(function(t2, e2) {
              try {
                A.isFalsy(o2.call) ? null != n2 && null != n2 ? (o2.call = n2, o2.startCallTimer(), t2(n2)) : e2(new s.CometChatException(h.CALL_ERROR.ERROR_IN_CALLING)) : e2(new s.CometChatException(h.CALL_ERROR.CALL_ALREADY_INITIATED));
              } catch (t3) {
                e2(new s.CometChatException(t3));
              }
            });
          }, g.prototype.endCall = function(t2) {
            var e2 = this;
            try {
              document.getElementsByName("frame").forEach(function(t3) {
                e2.view && (e2.view.removeChild(t3), e2.view = void 0);
              }), this.endCallSession();
            } catch (t3) {
              A.Logger.error("CallController: endCall", t3);
            }
          }, g.prototype.onCallStarted = function(n2) {
            var o2 = this;
            return new Promise(function(t2, e2) {
              try {
                A.isFalsy(o2.call) ? null != n2 && null != n2 ? t2(o2.call = n2) : e2(new s.CometChatException(h.CALL_ERROR.ERROR_IN_CALLING)) : e2(new s.CometChatException(h.CALL_ERROR.CALL_ALREADY_INITIATED));
              } catch (t3) {
                e2(new s.CometChatException(t3));
              }
            });
          }, g.prototype.endCallSession = function() {
            try {
              this.call = void 0, g.callController = void 0, this.timer && this.stopCallTimer(), this.view = void 0, this.removeListener(), g.callScreen = null, g.callSettings = null;
            } catch (t2) {
              A.Logger.error("CallController:EndCallSession", { e: t2 });
            }
          }, g.prototype.startCallTimer = function() {
            var e2 = this;
            try {
              this.timer = setTimeout(function() {
                e2.call ? R.CometChat.sendUnansweredResponse(e2.call.getSessionId()).then(function(t2) {
                  e2.endCallSession();
                }, function(t2) {
                  e2.endCallSession();
                }) : e2.endCallSession();
              }, this.CALL_NO_ANSWER_INTERVAL);
            } catch (t2) {
              A.Logger.error("CallController: startCallTimer", t2);
            }
          }, g.prototype.stopCallTimer = function() {
            try {
              clearTimeout(this.timer);
            } catch (t2) {
              A.Logger.error("CallController: stopCallTimer", t2);
            }
          }, g.prototype.startCall = function(e2, n2) {
            var o2 = this;
            try {
              this.timer && this.stopCallTimer();
              var s2 = document.createElement("iframe");
              this.getCallUrl().then(function(t2) {
                s2.src = t2 + "", s2.name = "frame", s2.setAttribute("allow", "camera; microphone; display-capture;"), s2.setAttribute("width", "100%"), s2.setAttribute("height", "100%"), g.callScreen = s2, g.callSettings = e2, n2 && (o2.view = n2), n2.appendChild(s2), o2.addListener();
              });
            } catch (t2) {
              A.Logger.error("CallController: startCall", t2);
            }
          }, g.prototype.addListener = function() {
            window.addEventListener("message", this.handler, true);
          }, g.prototype.removeListener = function() {
            window.removeEventListener("message", this.handler, true);
          }, g.prototype.handler = function(t2) {
            var e2, n2 = this, o2 = g.callSettings, s2 = g.callScreen, r2 = g.getInstance().getActiveCall();
            try {
              if (void 0 !== (e2 = JSON.parse(t2.data)) && e2.type == h.CallConstants.POST_MESSAGES.TYPES.HANGUP) g.deviceList = null, r2 ? (A.Logger.info(this.TAG, g.callListner), window.setTimeout(function() {
                R.CometChat.endCall(r2.getSessionId(), true).then(function(t3) {
                  A.Logger.info(n2.TAG, { call: t3 });
                }).catch(function(t3) {
                  A.Logger.info(n2.TAG, "The Call Was Already Ended");
                });
              }, 1e3)) : R.CometChat.endCall(o2.getSessionId(), true).then(function(t3) {
                A.Logger.info(n2.TAG, { call: t3 });
              }).catch(function(t3) {
                A.Logger.info(n2.TAG, "The Call Was Already Ended");
              });
              else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.USER_JOINED) {
                if (e2.value) {
                  var i2 = void 0, a = e2.value;
                  A.isFalsy(a.uid) || A.isFalsy(a.name) || ((i2 = new I.User(a)).setStatus("online"), R.CometChat.user.getUid().toLowerCase() != i2.getUid().toLowerCase() && g.callListner && (A.isFalsy(g.callListner._eventListener.onUserJoined) || g.callListner._eventListener.onUserJoined(i2)));
                }
              } else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.USER_LEFT) {
                if (e2.value) {
                  i2 = void 0, a = e2.value;
                  A.isFalsy(a.uid) || A.isFalsy(a.name) || ((i2 = new I.User(a)).setStatus("online"), R.CometChat.user.getUid().toLowerCase() != i2.getUid().toLowerCase() && g.callListner && (A.isFalsy(g.callListner._eventListener.onUserLeft) || g.callListner._eventListener.onUserLeft(i2)));
                }
              } else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.USER_LIST_CHANGED) {
                var E = [];
                if (e2.value && 0 < e2.value.length) e2.value.map(function(t3) {
                  if (!A.isFalsy(t3.uid) && !A.isFalsy(t3.name)) {
                    var e3 = new I.User(t3);
                    e3.setStatus("online"), E.push(e3);
                  }
                }), g.callListner && (A.isFalsy(g.callListner._eventListener.onUserListUpdated) || g.callListner._eventListener.onUserListUpdated(E));
              } else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.INITIAL_DEVICE_LIST) A.Logger.info("initialDeviceList received in SDK = ", e2), e2.value && (g.deviceList = e2.value);
              else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.DEVICE_CHANGE) {
                if (A.Logger.info("onDeviceChange received in SDK = ", e2), e2.value) {
                  g.deviceList = e2.value;
                  var c = g.getAvailableDeviceObject(g.deviceList);
                  g.callListner && (A.isFalsy(g.callListner._eventListener.onMediaDeviceListUpdated) || g.callListner._eventListener.onMediaDeviceListUpdated(c));
                }
              } else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.RECORDING_TOGGLED) {
                if (A.Logger.info("onRecordingToggled received in SDK = ", e2), e2.value) {
                  if ((C = e2.value).hasOwnProperty("user") && C.hasOwnProperty("recordingStarted") && !A.isFalsy(C.user.uid) && !A.isFalsy(C.user.name)) {
                    var u = new I.User(C.user);
                    u.setStatus("online");
                    var S = C.recordingStarted;
                    g.callListner && (S ? A.isFalsy(g.callListner._eventListener.onRecordingStarted) || g.callListner._eventListener.onRecordingStarted(u) : A.isFalsy(g.callListner._eventListener.onRecordingStopped) || g.callListner._eventListener.onRecordingStopped(u));
                  }
                }
              } else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.USER_MUTED) {
                if (A.Logger.info("onUserMuted received in SDK = ", e2), e2.value) {
                  if ((C = e2.value).hasOwnProperty("muted") && C.hasOwnProperty("mutedBy") && !A.isFalsy(C.muted.uid) && !A.isFalsy(C.muted.name) && !A.isFalsy(C.mutedBy.uid) && !A.isFalsy(C.mutedBy.name)) {
                    var l = new I.User(C.muted);
                    l.setStatus("online");
                    var p = new I.User(C.mutedBy);
                    p.setStatus("online"), g.callListner && (A.isFalsy(g.callListner._eventListener.onUserMuted) || g.callListner._eventListener.onUserMuted(l, p));
                  }
                }
              } else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.SCREEN_SHARE_STARTED) g.callListner && (A.isFalsy(g.callListner._eventListener.onScreenShareStarted) || g.callListner._eventListener.onScreenShareStarted(null));
              else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.SCREEN_SHARE_STOPPED) g.callListner && (A.isFalsy(g.callListner._eventListener.onScreenShareStopped) || g.callListner._eventListener.onScreenShareStopped(null));
              else if (void 0 !== e2 && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.SWITCHED_TO_VIDEO_CALL) {
                if (e2.value) {
                  var C = e2.value;
                  if (A.Logger.info("onCallSwitchedToVideo received in SDK = ", C), C.hasOwnProperty("initiator") && C.hasOwnProperty("sessionId") && !A.isFalsy(C.initiator.uid) && !A.isFalsy(C.sessionId) && C.hasOwnProperty("accepted") && !A.isFalsy(C.accepted.uid)) {
                    var T = C.sessionId, d = new I.User(C.initiator);
                    d.setStatus("online");
                    var _ = new I.User(C.accepted);
                    if (_.setStatus("online"), g.getInstance().getCallListner() && (A.isFalsy(g.getInstance().getCallListner()._eventListener.onCallSwitchedToVideo) || g.getInstance().getCallListner()._eventListener.onCallSwitchedToVideo(T, d, _)), C.initiator.uid.toLowerCase() === R.CometChat.user.getUid().toLowerCase() && !C.sessionId.includes("v1.")) try {
                      f.makeApiCall("updateCallType", { sessionid: T }, { type: "video" }).then(function(t3) {
                      }, function(t3) {
                        A.Logger.error("CallController :: onSwitchedToVideo", t3);
                      });
                    } catch (t3) {
                      A.Logger.error("CallController :: onSwitchedToVideo", t3);
                    }
                  }
                }
              } else void 0 !== e2 && e2.type && e2.action && e2.type == h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && e2.action == h.CallConstants.POST_MESSAGES.ACTIONS.LOAD && null != s2.contentWindow && s2.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.COMETCHAT_RTC_SETTINGS, callsettings: JSON.stringify(o2) }, "*");
            } catch (t3) {
              e2 = void 0, A.Logger.error("CallController: startCall", t3);
            }
          }, g.prototype.getCallUrl = function() {
            var t2 = this, o2 = void 0;
            return new Promise(function(e2, n2) {
              try {
                t2.isDev ? (o2 = "https://rtc-test.cometchat.io/?v=" + h.CALLING_COMPONENT_VERSION, e2(o2)) : A.getAppSettings().then(function(t3) {
                  o2 = "https://" + t3[h.APP_SETTINGS.KEYS.WEBRTC_WEB_FRONTEND_HOST] + "/?v=" + h.CALLING_COMPONENT_VERSION, e2(o2);
                });
              } catch (t3) {
                n2(new s.CometChatException(t3));
              }
            });
          }, g.getAvailableDeviceArray = function(t2) {
            var e2 = [];
            try {
              return t2 && 0 < t2.length && t2.map(function(t3) {
                e2.push(new r.MediaDevice(t3.deviceId, t3.label, t3.active));
              }), e2;
            } catch (t3) {
              return A.Logger.error("CallController: getAvailableDeviceArray", t3), e2;
            }
          }, g.getAvailableDeviceObject = function(t2) {
            var e2 = [], n2 = [], o2 = [];
            try {
              return A.isFalsy(t2) || A.isFalsy(t2[h.CallConstants.AUDIO_INPUT_DEVICES]) || (e2 = g.getAvailableDeviceArray(t2[h.CallConstants.AUDIO_INPUT_DEVICES])), A.isFalsy(t2) || A.isFalsy(t2[h.CallConstants.AUDIO_OUTPUT_DEVICES]) || (n2 = g.getAvailableDeviceArray(t2[h.CallConstants.AUDIO_OUTPUT_DEVICES])), A.isFalsy(t2) || A.isFalsy(t2[h.CallConstants.VIDEO_INPUT_DEVICES]) || (o2 = g.getAvailableDeviceArray(t2[h.CallConstants.VIDEO_INPUT_DEVICES])), { audioInputDevices: e2, audioOutputDevices: n2, videoInputDevices: o2 };
            } catch (t3) {
              return A.Logger.error("CallController: getAvailableDeviceObject", t3), { audioInputDevices: e2, audioOutputDevices: n2, videoInputDevices: o2 };
            }
          }, g.prototype.getAudioInputDevices = function() {
            var e2 = [];
            try {
              return A.isFalsy(g.deviceList) || A.isFalsy(g.deviceList[h.CallConstants.AUDIO_INPUT_DEVICES]) || (e2 = g.getAvailableDeviceArray(g.deviceList[h.CallConstants.AUDIO_INPUT_DEVICES])), e2;
            } catch (t2) {
              return A.Logger.error("CallController: getAudioInputDevices", t2), e2;
            }
          }, g.prototype.getAudioOutputDevices = function() {
            var e2 = [];
            try {
              return A.isFalsy(g.deviceList) || A.isFalsy(g.deviceList[h.CallConstants.AUDIO_OUTPUT_DEVICES]) || (e2 = g.getAvailableDeviceArray(g.deviceList[h.CallConstants.AUDIO_OUTPUT_DEVICES])), e2;
            } catch (t2) {
              return A.Logger.error("CallController: getAudioOutputDevices", t2), e2;
            }
          }, g.prototype.getVideoInputDevices = function() {
            var e2 = [];
            try {
              return A.isFalsy(g.deviceList) || A.isFalsy(g.deviceList[h.CallConstants.VIDEO_INPUT_DEVICES]) || (e2 = g.getAvailableDeviceArray(g.deviceList[h.CallConstants.VIDEO_INPUT_DEVICES])), e2;
            } catch (t2) {
              return A.Logger.error("CallController: getVideoInputDevices", t2), e2;
            }
          }, g.prototype.setAudioInputDevice = function(e2) {
            try {
              if (g.callScreen && !A.isFalsy(e2)) {
                var t2 = g.getAvailableDeviceArray(g.deviceList[h.CallConstants.AUDIO_INPUT_DEVICES]).filter(function(t3) {
                  return t3[h.CallConstants.MEDIA_DEVICE.ID] === e2 && !t3[h.CallConstants.MEDIA_DEVICE.ACTIVE];
                });
                t2 && 0 < t2.length && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_AUDIO_INPUT, value: e2 }, "*");
              }
            } catch (t3) {
              A.Logger.error("CallController: setAudioInputDevice", t3);
            }
          }, g.prototype.setAudioOutputDevice = function(e2) {
            try {
              if (g.callScreen && !A.isFalsy(e2)) {
                var t2 = g.getAvailableDeviceArray(g.deviceList[h.CallConstants.AUDIO_OUTPUT_DEVICES]).filter(function(t3) {
                  return t3[h.CallConstants.MEDIA_DEVICE.ID] === e2 && !t3[h.CallConstants.MEDIA_DEVICE.ACTIVE];
                });
                t2 && 0 < t2.length && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_AUDIO_OUTPUT, value: e2 }, "*");
              }
            } catch (t3) {
              A.Logger.error("CallController: setAudioOutputDevice", t3);
            }
          }, g.prototype.setVideoInputDevice = function(e2) {
            try {
              if (g.callScreen && !A.isFalsy(e2)) {
                var t2 = g.getAvailableDeviceArray(g.deviceList[h.CallConstants.VIDEO_INPUT_DEVICES]).filter(function(t3) {
                  return t3[h.CallConstants.MEDIA_DEVICE.ID] === e2 && !t3[h.CallConstants.MEDIA_DEVICE.ACTIVE];
                });
                t2 && 0 < t2.length && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_VIDEO_INPUT, value: e2 }, "*");
              }
            } catch (t3) {
              A.Logger.error("CallController: setVideoInputDevice", t3);
            }
          }, g.prototype.muteAudio = function(t2) {
            try {
              g.callScreen && (t2 ? g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.MUTE_AUDIO }, "*") : g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.UNMUTE_AUDIO }, "*"));
            } catch (t3) {
              A.Logger.error("CallController: muteAudio", t3);
            }
          }, g.prototype.pauseVideo = function(t2) {
            try {
              g.callScreen && (t2 ? g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.PAUSE_VIDEO }, "*") : g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.UNPAUSE_VIDEO }, "*"));
            } catch (t3) {
              A.Logger.error("CallController: pauseVideo", t3);
            }
          }, g.prototype.setMode = function(t2) {
            try {
              g.callScreen && !A.isFalsy(t2) && (t2 = t2.toUpperCase(), -1 < Object.values(h.CallConstants.CALL_MODE).indexOf(t2) && t2 != h.CallConstants.CALL_MODE.SINGLE && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.SWITCH_MODE, value: t2 }, "*"));
            } catch (t3) {
              A.Logger.error("CallController: setMode", t3);
            }
          }, g.prototype.startScreenShare = function() {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.START_SCREENSHARE }, "*");
            } catch (t2) {
              A.Logger.error("CallController: startScreenShare", t2);
            }
          }, g.prototype.stopScreenShare = function() {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.STOP_SCREENSHARE }, "*");
            } catch (t2) {
              A.Logger.error("CallController: stopScreenShare", t2);
            }
          }, g.prototype.startRecording = function() {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.START_RECORDING }, "*");
            } catch (t2) {
              A.Logger.error("CallController: startRecording", t2);
            }
          }, g.prototype.stopRecording = function() {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.STOP_RECORDING }, "*");
            } catch (t2) {
              A.Logger.error("CallController: stopRecording", t2);
            }
          }, g.prototype.switchToVideoCall = function() {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.SWITCH_TO_VIDEO_CALL }, "*");
            } catch (t2) {
              A.Logger.error("CallController: switchToVideoCall", t2);
            }
          }, g.prototype.openVirtualBackground = function() {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.OPEN_VIRTUAL_BACKGROUND }, "*");
            } catch (t2) {
              A.Logger.error("CallController: openVirtualBackground", t2);
            }
          }, g.prototype.setBackgroundBlur = function(t2) {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.SET_BACKGROUND_BLUR, value: t2 }, "*");
            } catch (t3) {
              A.Logger.error("CallController: openVirtualBackground", t3);
            }
          }, g.prototype.setBackgroundImage = function(t2) {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.SET_BACKGROUND_IMAGE, value: t2 }, "*");
            } catch (t3) {
              A.Logger.error("CallController: openVirtualBackground", t3);
            }
          }, g.prototype.endSession = function() {
            try {
              g.callScreen && g.callScreen.contentWindow.postMessage({ type: h.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE, action: h.CallConstants.POST_MESSAGES.ACTIONS.END_CALL }, "*");
            } catch (t2) {
              A.Logger.error("CallController: endSession", t2);
            }
          }, g.callController = void 0, g.callListner = void 0, g;
        }();
        e.CallController = i;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.MediaDevice = void 0;
        var o = n(0), s = function() {
          function t2(t3, e2, n2) {
            this.id = "", this.name = "", this.active = false, o.isFalsy(t3) || (this.id = t3), o.isFalsy(e2) || (this.name = e2), this.active = !!n2;
          }
          return t2.prototype.getId = function() {
            return this.id;
          }, t2.prototype.setId = function(t3) {
            this.id = t3 || "";
          }, t2.prototype.getName = function() {
            return this.name;
          }, t2.prototype.setName = function(t3) {
            this.name = t3 || "";
          }, t2.prototype.getIsActive = function() {
            return this.active;
          }, t2.prototype.setIsActive = function(t3) {
            this.active = !!t3;
          }, t2;
        }();
        e.MediaDevice = s;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.GroupMembersController = void 0;
        var o = n(34), s = n(1), r = n(0), i = function() {
          function t2() {
          }
          return t2.trasformJSONGroupMember = function(e2) {
            var t3;
            try {
              return e2.status && "offline" !== e2.status ? e2.status = "online" : e2.status = "offline", t3 = new o.GroupMember(e2[s.GroupMemersConstans.KEYS.UID]), Object.assign(t3, e2), t3;
            } catch (t4) {
              return r.Logger.error("GroupMembersController:trasformJSONGroupMember", { e: t4, groupMember: e2 }), e2;
            }
          }, t2;
        }();
        e.GroupMembersController = i;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.GroupMember = void 0;
        var r = n(4), i = n(1), a = function(o2) {
          function t2(t3, e2) {
            var n2 = o2.call(this, t3) || this;
            return n2.joinedAt = 0, e2 && (n2.scope = e2), n2;
          }
          return s(t2, o2), t2.prototype.setScope = function(t3) {
            this.scope = t3;
          }, t2.prototype.setJoinedAt = function(t3) {
            this.joinedAt = t3;
          }, t2.prototype.setGuid = function(t3) {
            this.guid = t3;
          }, t2.prototype.getScope = function() {
            return this.scope;
          }, t2.prototype.getJoinedAt = function() {
            return this.joinedAt;
          }, t2.prototype.getGuid = function() {
            return this.guid;
          }, t2.GroupMemberScope = i.GroupMemberScope, t2;
        }(r.User);
        e.GroupMember = a;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.Conversation = void 0;
        var i = n(10), a = n(1), E = n(11), c = n(15), o = function() {
          function t2(t3, e2, n2, o2, s, r) {
            this.conversationId = t3, this.conversationType = e2, r && 0 < r.length && (this.tags = r), void 0 !== n2 && void 0 !== (this.lastMessage = n2).id && (this.lastMessage = i.MessageController.trasformJSONMessge(n2)), this.conversationType == a.MessageConstatnts.RECEIVER_TYPE.USER ? this.conversationWith = E.UsersController.trasformJSONUser(o2) : this.conversationWith = c.GroupsController.trasformJSONGroup(o2), this.unreadMessageCount = void 0 !== s ? s : 0;
          }
          return t2.prototype.setConversationId = function(t3) {
            this.conversationId = t3;
          }, t2.prototype.setConversationType = function(t3) {
            this.conversationType = t3;
          }, t2.prototype.setLastMessage = function(t3) {
            this.lastMessage = t3;
          }, t2.prototype.setConversationWith = function(t3) {
            this.conversationWith = t3;
          }, t2.prototype.setUnreadMessageCount = function(t3) {
            this.unreadMessageCount = t3;
          }, t2.prototype.getConversationId = function() {
            return this.conversationId;
          }, t2.prototype.getConversationType = function() {
            return this.conversationType;
          }, t2.prototype.getLastMessage = function() {
            return this.lastMessage;
          }, t2.prototype.getConversationWith = function() {
            return this.conversationWith;
          }, t2.prototype.getUnreadMessageCount = function() {
            return this.unreadMessageCount;
          }, t2.prototype.getTags = function() {
            return this.tags;
          }, t2;
        }();
        e.Conversation = o;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.TypingNotificationController = void 0;
        var o = n(0), s = function() {
          function t2() {
          }
          return t2.addTypingStarted = function(t3) {
            this.TYPING_STARTED_MAP[t3] = o.getCurrentTime();
          }, t2.removeTypingStarted = function(t3) {
            delete this.TYPING_STARTED_MAP[t3];
          }, t2.getTypingStartedMap = function(t3) {
            if (t3) return this.TYPING_STARTED_MAP[t3];
          }, t2.addTypingEnded = function(t3) {
            this.TYPING_ENDED_MAP[t3] = o.getCurrentTime();
          }, t2.removeTypingEnded = function(t3) {
            delete this.TYPING_ENDED_MAP[t3];
          }, t2.getTypingEndedMap = function(t3) {
            if (t3) return this.TYPING_ENDED_MAP[t3];
          }, t2.addIncomingTypingStarted = function(t3) {
            this.INCOMING_TYPING_STARTED_MAP[t3.getReceiverId()] = { typingNotification: t3, timestamp: o.getCurrentTime() };
          }, t2.removeIncomingTypingStarted = function(t3) {
            delete this.INCOMING_TYPING_STARTED_MAP[t3.getReceiverId()];
          }, t2.TYPING_STARTED_MAP = {}, t2.TYPING_ENDED_MAP = {}, t2.INCOMING_TYPING_STARTED_MAP = {}, t2;
        }();
        e.TypingNotificationController = s;
      }, function(t, e, n) {
        "use strict";
        var o = this && this.__spreadArrays || function() {
          for (var t2 = 0, e2 = 0, n2 = arguments.length; e2 < n2; e2++) t2 += arguments[e2].length;
          var o2 = Array(t2), s2 = 0;
          for (e2 = 0; e2 < n2; e2++) for (var r2 = arguments[e2], i2 = 0, a = r2.length; i2 < a; i2++, s2++) o2[s2] = r2[i2];
          return o2;
        };
        e.__esModule = true, e.ListenerHandlers = void 0;
        var s = n(0), r = n(23), i = function() {
          function t2() {
            this.connectionHandlers = [], this.loginHandlers = [], this.messageHandlers = [], this.userHandlers = [], this.groupHandlers = [], this.callHandlers = [];
          }
          return t2.getInstance = function() {
            return null != this.listenerHandlers && null != this.listenerHandlers || (this.listenerHandlers = new t2()), this.listenerHandlers;
          }, t2.prototype.addConnectionEventListener = function(e2, t3) {
            try {
              this.connectionHandlers = this.connectionHandlers.filter(function(t4) {
                return t4._name != e2;
              }), this.connectionHandlers = o(this.connectionHandlers, [new r.WSConnectionListener(e2, t3)]);
            } catch (t4) {
              s.Logger.error("ListenerHandlers: addWSConnectionEventListener", t4);
            }
          }, t2.prototype.removeConnectionEventListener = function(e2) {
            try {
              this.connectionHandlers = this.connectionHandlers.filter(function(t3) {
                return t3._name !== e2;
              });
            } catch (t3) {
              s.Logger.error("ListenerHandlers: removeWSConnectionEventListener", t3);
            }
          }, t2.prototype.addLoginEventListener = function(e2, t3) {
            try {
              this.loginHandlers = this.loginHandlers.filter(function(t4) {
                return t4._name != e2;
              }), this.loginHandlers = o(this.loginHandlers, [new r.UserLoginListener(e2, t3)]);
            } catch (t4) {
              s.Logger.error("ListenerHandlers: addLoginEventListener", t4);
            }
          }, t2.prototype.removeLoginEventListener = function(e2) {
            try {
              this.loginHandlers = this.loginHandlers.filter(function(t3) {
                return t3._name !== e2;
              });
            } catch (t3) {
              s.Logger.error("ListenerHandlers: removeLoginEventListener", t3);
            }
          }, t2.prototype.addMessageEventListener = function(e2, t3) {
            try {
              this.messageHandlers = this.messageHandlers.filter(function(t4) {
                return t4._name != e2;
              }), this.messageHandlers = o(this.messageHandlers, [new r.MessagesListener(e2, t3)]);
            } catch (t4) {
              s.Logger.error("ListenerHandlers: addMessageEventListener", t4);
            }
          }, t2.prototype.removeMessageEventListener = function(e2) {
            try {
              this.messageHandlers = this.messageHandlers.filter(function(t3) {
                return t3._name !== e2;
              });
            } catch (t3) {
              s.Logger.error("ListenerHandlers: removeMessageEventListener", t3);
            }
          }, t2.prototype.addUserEventListener = function(e2, t3) {
            try {
              this.userHandlers = this.userHandlers.filter(function(t4) {
                return t4._name != e2;
              }), this.userHandlers = o(this.userHandlers, [new r.UsersListener(e2, t3)]);
            } catch (t4) {
              s.Logger.error("ListenerHandlers: addUserEventListener", t4);
            }
          }, t2.prototype.removeUserEventListener = function(e2) {
            try {
              this.userHandlers = this.userHandlers.filter(function(t3) {
                return t3._name !== e2;
              });
            } catch (t3) {
              s.Logger.error("ListenerHandlers: removeUserEventListener", t3);
            }
          }, t2.prototype.addGroupEventListener = function(e2, t3) {
            try {
              this.groupHandlers = this.groupHandlers.filter(function(t4) {
                return t4._name != e2;
              }), this.groupHandlers = o(this.groupHandlers, [new r.GroupsListener(e2, t3)]);
            } catch (t4) {
              s.Logger.error("ListenerHandlers: addGroupEventListener", t4);
            }
          }, t2.prototype.removeGroupEventListener = function(e2) {
            try {
              this.groupHandlers = this.groupHandlers.filter(function(t3) {
                return t3._name !== e2;
              });
            } catch (t3) {
              s.Logger.error("ListenerHandlers: removeGroupEventListener", t3);
            }
          }, t2.prototype.addCallEventListener = function(e2, t3) {
            try {
              this.callHandlers = this.callHandlers.filter(function(t4) {
                return t4._name != e2;
              }), this.callHandlers = o(this.callHandlers, [new r.CallsListener(e2, t3)]);
            } catch (t4) {
              s.Logger.error("ListenerHandlers: addCallEventListener", t4);
            }
          }, t2.prototype.removeCallEventListener = function(e2) {
            try {
              this.callHandlers = this.callHandlers.filter(function(t3) {
                return t3._name !== e2;
              });
            } catch (t3) {
              s.Logger.error("ListenerHandlers: removeCallEventListener", t3);
            }
          }, t2.listenerHandlers = new t2(), t2;
        }();
        e.ListenerHandlers = i;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.CometChat = e.init = void 0;
        var o = n(3);
        e.init = function(t2) {
          return o.CometChat.getInstance(t2);
        }, e.CometChat = o.CometChat;
      }, function(t, e) {
        var n;
        n = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          n = n || new Function("return this")();
        } catch (t2) {
          "object" == typeof window && (n = window);
        }
        t.exports = n;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.GroupsRequestBuilder = e.GroupsRequest = void 0;
        var s = n(6), o = n(0), r = n(2), i = n(15), a = n(1), E = function() {
          function t2(t3) {
            this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 1, this.total_pages = -1, this.hasJoined = 0, this.withTags = false, this.pagination = { total: 0, count: 0, per_page: 0, current_page: 0, total_pages: 0, links: [] }, o.isFalsy(t3) || (o.isFalsy(t3.limit) || (this.limit = t3.limit), o.isFalsy(t3.searchKeyword) || (this.searchKeyword = t3.searchKeyword), o.isFalsy(t3.hasJoined) || (this.hasJoined = 1), o.isFalsy(t3.tags) || (this.tags = t3.tags), o.isFalsy(t3.showTags) || (this.withTags = t3.showTags));
          }
          return t2.prototype.validateGroupBuilder = function() {
            if (void 0 === this.limit) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > a.DEFAULT_VALUES.GROUPS_MAX_LIMIT) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", a.DEFAULT_VALUES.GROUPS_MAX_LIMIT)));
            if (this.limit < a.DEFAULT_VALUES.ZERO) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (void 0 !== this.searchKeyword) {
              if (typeof this.searchKeyword !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              if (o.isFalsy(this.searchKeyword.trim())) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (void 0 !== this.withTags) {
              if (typeof this.withTags !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()")));
              1 == this.withTags ? this.withTags = true : this.withTags = false;
            }
            return void 0 === this.tags || Array.isArray(this.tags) ? void 0 : new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "TAGS", "TAGS", "setTags()")));
          }, t2.prototype.fetchNext = function() {
            var o2 = this;
            return new Promise(function(e2, n2) {
              try {
                var t3 = o2.validateGroupBuilder();
                if (t3 instanceof r.CometChatException) return void n2(t3);
                s.makeApiCall("getGroups", {}, o2.getNextData()).then(function(t4) {
                  if (t4.meta && (o2.total_pages = t4.meta.pagination.total_pages), 0 < t4.data.length) {
                    o2.pagination = t4.meta.pagination;
                    var n3 = [];
                    t4.data.map(function(t5, e3) {
                      n3.push(i.GroupsController.trasformJSONGroup(t5));
                    }), e2(n3);
                  }
                  e2([]);
                }, function(t4) {
                  n2(new r.CometChatException(t4.error));
                });
              } catch (t4) {
                n2(new r.CometChatException(t4));
              }
            });
          }, t2.prototype.getNextData = function() {
            var t3 = {};
            if (t3.per_page = this.limit, o.isFalsy(this.searchKeyword) || (t3.searchKey = this.searchKeyword), o.isFalsy(this.hasJoined) || (t3.hasJoined = 1), o.isFalsy(this.tags) || (t3.tags = this.tags), o.isFalsy(this.withTags) || (t3.withTags = 1), 1 == this.current_page) t3.page = this.next_page, this.next_page++, this.current_page++;
            else {
              if (this.next_page > this.total_pages) return t3.page = this.next_page, t3;
              t3.page = this.next_page++;
            }
            return t3;
          }, t2.MAX_LIMIT = 100, t2.DEFAULT_LIMIT = 30, t2;
        }();
        e.GroupsRequest = E;
        var c = function() {
          function t2() {
          }
          return t2.prototype.setLimit = function(t3) {
            return this.limit = t3, this;
          }, t2.prototype.setSearchKeyword = function(t3) {
            return this.searchKeyword = t3, this;
          }, t2.prototype.joinedOnly = function(t3) {
            return this.hasJoined = t3, this;
          }, t2.prototype.setTags = function(t3) {
            return this.tags = t3, this;
          }, t2.prototype.withTags = function(t3) {
            return this.showTags = t3, this;
          }, t2.prototype.build = function() {
            return new E(this);
          }, t2;
        }();
        e.GroupsRequestBuilder = c;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.GroupMembersRequestBuilder = e.GroupMembersRequest = void 0;
        var s = n(6), o = n(0), r = n(14), i = n(2), a = n(33), E = n(1), c = function() {
          function t2(t3) {
            this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 1, this.total_pages = -1, this.pagination = { total: 0, count: 0, per_page: 0, current_page: 0, total_pages: 0, links: [] }, this.store = r.LocalStorage.getInstance(), o.isFalsy(t3) || (this.limit = t3.limit, this.guid = t3.guid, o.isFalsy(t3.searchKeyword) || (this.searchKeyword = t3.searchKeyword), o.isFalsy(t3.scopes) || (this.scopes = t3.scopes));
          }
          return t2.prototype.validateGroupMembersBuilder = function() {
            if (void 0 === this.limit) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > E.DEFAULT_VALUES.USERS_MAX_LIMIT) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", E.DEFAULT_VALUES.USERS_MAX_LIMIT)));
            if (this.limit < E.DEFAULT_VALUES.ZERO) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (void 0 !== this.searchKeyword) {
              if (typeof this.searchKeyword !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              if (o.isFalsy(this.searchKeyword.trim())) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (void 0 !== this.guid) {
              if (typeof this.guid !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "GroupMembersRequestBuilder()")));
              if (o.isFalsy(this.guid)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")));
            }
            return void 0 === this.scopes || Array.isArray(this.scopes) ? void 0 : new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_SCOPES", "SET_SCOPES", "setScopes()")));
          }, t2.prototype.fetchNext = function() {
            var o2 = this;
            return new Promise(function(n2, e2) {
              try {
                var t3 = o2.validateGroupMembersBuilder();
                if (t3 instanceof i.CometChatException) return void e2(t3);
                s.makeApiCall("getGroupMembers", { guid: o2.guid }, o2.getNextData()).then(function(t4) {
                  if (t4.meta && (o2.total_pages = t4.meta.pagination.total_pages), 0 < t4.data.length) {
                    o2.pagination = t4.meta.pagination;
                    var e3 = [];
                    t4.data.map(function(t5) {
                      t5.guid = o2.guid, e3.push(a.GroupMembersController.trasformJSONGroupMember(t5));
                    }), n2(e3);
                  } else n2([]);
                }, function(t4) {
                  e2(new i.CometChatException(t4.error));
                });
              } catch (t4) {
                e2(new i.CometChatException(t4));
              }
            });
          }, t2.prototype.getNextData = function() {
            var t3 = {};
            if (t3.per_page = this.limit, o.isFalsy(this.searchKeyword) || (t3.searchKey = this.searchKeyword), o.isFalsy(this.scopes) || (t3.scopes = this.scopes), 1 == this.current_page) t3.page = this.next_page, this.next_page++, this.current_page++;
            else {
              if (this.next_page > this.total_pages) return t3.page = this.next_page, t3;
              t3.page = this.next_page++;
            }
            return t3;
          }, t2.MAX_LIMIT = 2, t2.DEFAULT_LIMIT = 1, t2;
        }();
        e.GroupMembersRequest = c;
        var u = function() {
          function t2(t3) {
            this.guid = t3;
          }
          return t2.prototype.setLimit = function(t3) {
            return this.limit = t3, this;
          }, t2.prototype.setSearchKeyword = function(t3) {
            return this.searchKeyword = t3, this;
          }, t2.prototype.setScopes = function(t3) {
            return this.scopes = t3, this;
          }, t2.prototype.build = function() {
            return new c(this);
          }, t2;
        }();
        e.GroupMembersRequestBuilder = u;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.BannedMembersRequestBuilder = e.BannedMembersRequest = void 0;
        var s = n(6), o = n(0), r = n(2), i = n(33), a = n(1), E = function() {
          function t2(t3) {
            this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 1, this.total_pages = -1, this.pagination = { total: 0, count: 0, per_page: 0, current_page: 0, total_pages: 0, links: [] }, o.isFalsy(t3) || (this.limit = t3.limit, this.guid = t3.guid, o.isFalsy(t3.searchKeyword) || (this.searchKeyword = t3.searchKeyword), o.isFalsy(t3.scopes) || (this.scopes = t3.scopes));
          }
          return t2.prototype.validateBannedMembersBuilder = function() {
            if (void 0 === this.limit) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > a.DEFAULT_VALUES.USERS_MAX_LIMIT) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", a.DEFAULT_VALUES.USERS_MAX_LIMIT)));
            if (this.limit < a.DEFAULT_VALUES.ZERO) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (void 0 !== this.searchKeyword) {
              if (typeof this.searchKeyword !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              if (o.isFalsy(this.searchKeyword.trim())) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (void 0 !== this.guid) {
              if (typeof this.guid !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "GroupMembersRequestBuilder()")));
              if (o.isFalsy(this.guid)) return new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")));
            }
            return void 0 === this.scopes || Array.isArray(this.scopes) ? void 0 : new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_SCOPES", "SET_SCOPES", "setScopes()")));
          }, t2.prototype.fetchNext = function() {
            var o2 = this;
            return new Promise(function(n2, e2) {
              try {
                var t3 = o2.validateBannedMembersBuilder();
                if (t3 instanceof r.CometChatException) return void e2(t3);
                s.makeApiCall("getBannedGroupMembers", { guid: o2.guid }, o2.getNextData()).then(function(t4) {
                  if (t4.meta && (o2.total_pages = t4.meta.pagination.total_pages), 0 < t4.data.length) {
                    o2.pagination = t4.meta.pagination;
                    var e3 = [];
                    t4.data.map(function(t5) {
                      t5.guid = o2.guid, e3.push(i.GroupMembersController.trasformJSONGroupMember(t5));
                    }), n2(e3);
                  } else n2([]);
                }, function(t4) {
                  e2(new r.CometChatException(t4.error));
                });
              } catch (t4) {
                e2(new r.CometChatException(t4));
              }
            });
          }, t2.prototype.getNextData = function() {
            var t3 = {};
            if (t3.per_page = this.limit, o.isFalsy(this.searchKeyword) || (t3.searchKey = this.searchKeyword), o.isFalsy(this.scopes) || (t3.scopes = this.scopes), 1 == this.current_page) t3.page = this.next_page, this.next_page++, this.current_page++;
            else {
              if (this.next_page > this.total_pages) return t3.page = this.next_page, t3;
              t3.page = this.next_page++;
            }
            return t3;
          }, t2.MAX_LIMIT = 2, t2.DEFAULT_LIMIT = 1, t2;
        }();
        e.BannedMembersRequest = E;
        var c = function() {
          function t2(t3) {
            this.guid = t3;
          }
          return t2.prototype.setLimit = function(t3) {
            return this.limit = t3, this;
          }, t2.prototype.setSearchKeyword = function(t3) {
            return this.searchKeyword = t3, this;
          }, t2.prototype.setScopes = function(t3) {
            return this.scopes = t3, this;
          }, t2.prototype.build = function() {
            return new E(this);
          }, t2;
        }();
        e.BannedMembersRequestBuilder = c;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.UsersRequestBuilder = e.UsersRequest = void 0;
        var s = n(6), o = n(0), r = n(11), i = n(2), a = n(44), E = n(1), c = function() {
          function e2(t2) {
            this.next_page = 1, this.current_page = 1, this.total_pages = -1, this.hideBlockedUsers = false, this.friendsOnly = false, this.fetchingInProgress = false, this.withTags = false, this.pagination = { total: 0, count: 0, per_page: 0, current_page: 0, total_pages: 0, links: [] }, e2.userStore = a.UserStore.getInstance(), o.isFalsy(t2) || (this.limit = t2.limit, o.isFalsy(t2.searchKeyword) || (this.searchKeyword = t2.searchKeyword), o.isFalsy(t2.status) || (t2.status == e2.USER_STATUS.ONLINE ? this.status = E.PresenceConstatnts.STATUS.AVAILABLE : this.status = t2.status), o.isFalsy(t2.shouldHideBlockedUsers) || (this.hideBlockedUsers = t2.shouldHideBlockedUsers), o.isFalsy(t2.showFriendsOnly) || (this.friendsOnly = t2.showFriendsOnly), o.isFalsy(t2.showTags) || (this.withTags = t2.showTags), o.isFalsy(t2.role) || (this.role = t2.role), o.isFalsy(t2.roles) || (this.roles = t2.roles), o.isFalsy(t2.tags) || (this.tags = t2.tags), o.isFalsy(t2.UIDs) || (this.UIDs = t2.UIDs), o.isFalsy(t2.SortBy) || (this.sortBy = t2.SortBy), o.isFalsy(t2.SearchIn) || (this.searchIn = t2.SearchIn), o.isFalsy(t2.SortOrder) || (this.sortOrder = t2.SortOrder));
          }
          return e2.prototype.validateUserBuilder = function() {
            if (void 0 === this.limit) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > E.DEFAULT_VALUES.USERS_MAX_LIMIT) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", E.DEFAULT_VALUES.USERS_MAX_LIMIT)));
            if (this.limit < E.DEFAULT_VALUES.ZERO) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (void 0 !== this.searchKeyword) {
              if (typeof this.searchKeyword !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              if (o.isFalsy(this.searchKeyword.trim())) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (this.status) {
              if (typeof this.status !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_STATUS", "SET_STATUS", "setStatus()")));
              if ("available" != this.status.toLowerCase() && "offline" != this.status.toLowerCase()) return new i.CometChatException(E.UserErrors.INVALID_STATUS);
            }
            if (void 0 !== this.hideBlockedUsers) {
              if (typeof this.hideBlockedUsers !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_BLOCKED_USERS", "HIDE_BLOCKED_USERS", "hideBlockedUsers()")));
              1 == this.hideBlockedUsers ? this.hideBlockedUsers = true : this.hideBlockedUsers = false;
            }
            if (void 0 !== this.friendsOnly) {
              if (typeof this.friendsOnly !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "FRIENDS_ONLY", "FRIENDS_ONLY", "friendsOnly()")));
              1 == this.friendsOnly ? this.friendsOnly = true : this.friendsOnly = false;
            }
            if (void 0 !== this.withTags) {
              if (typeof this.withTags !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()")));
              1 == this.withTags ? this.withTags = true : this.withTags = false;
            }
            if (void 0 !== this.roles && !Array.isArray(this.roles)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "ROLES", "ROLES", "setRoles()")));
            if (void 0 !== this.tags && !Array.isArray(this.tags)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "TAGS", "TAGS", "setTags()")));
            if (void 0 !== this.UIDs && !Array.isArray(this.UIDs)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "UIDs", "UIDs", "setUIDs()")));
            if (this.sortBy) {
              if (typeof this.sortBy !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SORT_BY", "SORT_BY", "sortBy()")));
              if (o.isFalsy(this.sortBy.trim())) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "SORT_BY", "SORT_BY", "sort by", "sort by")));
              this.sortBy = this.sortBy.trim().toLowerCase();
            }
            if (this.sortOrder) {
              if (typeof this.sortOrder !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SORT_BY_ORDER", "SORT_BY_ORDER", "sortByOrder()")));
              if (o.isFalsy(this.sortOrder.trim())) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.INVALID), "SORT_BY_ORDER", "SORT_BY_ORDER", "sort order", "sort order")));
              this.sortOrder = this.sortOrder.trim().toLowerCase();
            }
            return this.searchIn && !Array.isArray(this.searchIn) ? new i.CometChatException(JSON.parse(o.format(JSON.stringify(E.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SEARCH_IN", "SEARCH_IN", "searchIn()"))) : void 0;
          }, e2.prototype.fetchNext = function() {
            var o2 = this;
            return new Promise(function(n2, e3) {
              try {
                if (o2.fetchingInProgress) o2.fetchingInProgress = false, n2([]);
                else {
                  o2.fetchingInProgress = true;
                  var t2 = o2.validateUserBuilder();
                  if (t2 instanceof i.CometChatException) return void e3(t2);
                  s.makeApiCall("users", {}, o2.getNextData()).then(function(t3) {
                    if (t3.meta && (o2.total_pages = t3.meta.pagination.total_pages), 0 < t3.data.length) {
                      o2.pagination = t3.meta.pagination;
                      var e4 = [];
                      t3.data.map(function(t4) {
                        e4.push(r.UsersController.trasformJSONUser(t4));
                      }), n2(e4);
                    } else n2([]);
                    o2.fetchingInProgress = false;
                  }, function(t3) {
                    o2.fetchingInProgress = false, e3(new i.CometChatException(t3.error));
                  });
                }
              } catch (t3) {
                o2.fetchingInProgress = false, e3(new i.CometChatException(t3));
              }
            });
          }, e2.prototype.getNextData = function() {
            var t2 = {};
            if (t2.per_page = this.limit, o.isFalsy(this.searchKeyword) || (t2.searchKey = this.searchKeyword), o.isFalsy(this.status) || (t2.status = this.status), o.isFalsy(this.hideBlockedUsers) || (t2.hideBlockedUsers = 1), o.isFalsy(this.role) || (t2.roles = this.role), o.isFalsy(this.roles) || (t2.roles = this.roles), o.isFalsy(this.tags) || (t2.tags = this.tags), o.isFalsy(this.friendsOnly) || (t2.friendsOnly = 1), o.isFalsy(this.withTags) || (t2.withTags = 1), o.isFalsy(this.UIDs) || (t2.uids = this.UIDs), o.isFalsy(this.sortBy) || (t2.sortBy = this.sortBy), o.isFalsy(this.sortOrder) || (t2.sortOrder = this.sortOrder), o.isFalsy(this.searchIn) || (t2.searchIn = this.searchIn), 1 == this.current_page) t2.page = this.next_page, this.next_page++, this.current_page++;
            else {
              if (this.next_page > this.total_pages) return t2.page = this.next_page, t2;
              t2.page = this.next_page++;
            }
            return t2;
          }, e2.USER_STATUS = { ONLINE: E.PresenceConstatnts.STATUS.ONLINE, OFFLINE: E.PresenceConstatnts.STATUS.OFFLINE }, e2;
        }();
        e.UsersRequest = c;
        var u = function() {
          function t2() {
            this.shouldHideBlockedUsers = false;
          }
          return t2.prototype.setLimit = function(t3) {
            return this.limit = t3, this;
          }, t2.prototype.setStatus = function(t3) {
            return this.status = t3, this;
          }, t2.prototype.setSearchKeyword = function(t3) {
            return this.searchKeyword = t3, this;
          }, t2.prototype.hideBlockedUsers = function(t3) {
            return this.shouldHideBlockedUsers = t3, this;
          }, t2.prototype.setRole = function(t3) {
            return this.role = t3, this;
          }, t2.prototype.setRoles = function(t3) {
            return this.roles = t3, this;
          }, t2.prototype.friendsOnly = function(t3) {
            return this.showFriendsOnly = t3, this;
          }, t2.prototype.setTags = function(t3) {
            return this.tags = t3, this;
          }, t2.prototype.withTags = function(t3) {
            return this.showTags = t3, this;
          }, t2.prototype.setUIDs = function(t3) {
            return this.UIDs = t3, this;
          }, t2.prototype.sortBy = function(t3) {
            return this.SortBy = t3, this;
          }, t2.prototype.sortByOrder = function(t3) {
            return this.SortOrder = t3, this;
          }, t2.prototype.searchIn = function(t3) {
            return this.SearchIn = t3, this;
          }, t2.prototype.build = function() {
            return this.role && this.roles && this.roles.push(this.role), new c(this);
          }, t2;
        }();
        e.UsersRequestBuilder = u;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.UserStore = void 0;
        var o = n(3), s = n(0), r = n(1), i = n(12), a = function() {
          function t2(t3) {
            this.store = r.constants.DEFAULT_STORE, s.isFalsy(t3) || (this.store = t3), this.userStore = i.createInstance({ name: s.format(r.LOCAL_STORE.STORE_STRING, o.CometChat.getAppId(), r.LOCAL_STORE.USERS_STORE) }), this.userStore.setDriver([i.LOCALSTORAGE, i.INDEXEDDB, i.WEBSQL]);
          }
          return t2.getInstance = function() {
            return null == t2.UserStore && (t2.UserStore = new t2()), t2.UserStore;
          }, t2.prototype.set = function(t3, e2) {
            return this.userStore.setItem(t3, e2);
          }, t2.prototype.remove = function(t3) {
            this.userStore.removeItem(t3);
          }, t2.prototype.get = function(t3) {
            return this.userStore.getItem(t3);
          }, t2.prototype.clearStore = function() {
            var n2 = this;
            return new Promise(function(t3, e2) {
              n2.userStore.clear().then(function() {
                t3(true);
              }).catch(function(t4) {
                e2(t4);
              });
            });
          }, t2.prototype.clear = function(t3) {
          }, t2.prototype.selectStore = function(t3) {
            this.store = t3;
          }, t2.prototype.storeUsers = function(t3) {
            var e2 = this;
            return t3.map(function(t4) {
              e2.set(t4.getUid(), t4);
            }), true;
          }, t2.prototype.storeUser = function(t3) {
            return this.set(t3.getUid(), t3), true;
          }, t2;
        }();
        e.UserStore = a;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.ConversationsRequestBuilder = e.ConversationsRequest = void 0;
        var s = n(6), o = n(0), r = n(2), i = n(24), a = n(1), E = function() {
          function t2(t3) {
            this.limit = 100, this.next_page = 1, this.current_page = 1, this.total_pages = -1, this.fetchingInProgress = false, this.getUserAndGroupTags = false, this.withTags = false, this.pagination = { total: 0, count: 0, per_page: 0, current_page: 0, total_pages: 0, links: [] }, o.isFalsy(t3) || (this.limit = t3.limit, o.isFalsy(t3.conversationType) || (this.conversationType = t3.conversationType), o.isFalsy(t3.getUserAndGroupTags) || (this.getUserAndGroupTags = t3.getUserAndGroupTags), t3.tags && (this.tags = t3.tags), o.isFalsy(t3.WithTags) || (this.withTags = t3.WithTags), t3.groupTags && (this.groupTags = t3.groupTags), t3.userTags && (this.userTags = t3.userTags));
          }
          return t2.prototype.validateConversationBuilder = function() {
            return void 0 === this.limit ? new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit"))) : isNaN(this.limit) ? new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))) : this.limit > a.DEFAULT_VALUES.CONVERSATION_MAX_LIMIT ? new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", a.DEFAULT_VALUES.CONVERSATION_MAX_LIMIT))) : this.limit < a.DEFAULT_VALUES.ZERO ? new r.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))) : void 0;
          }, t2.prototype.fetchNext = function() {
            var o2 = this;
            return new Promise(function(n2, e2) {
              try {
                if (o2.fetchingInProgress) o2.fetchingInProgress = false, n2([]);
                else {
                  o2.fetchingInProgress = true;
                  var t3 = o2.validateConversationBuilder();
                  if (t3 instanceof r.CometChatException) return void e2(t3);
                  s.makeApiCall("getConversations", {}, o2.getNextData()).then(function(t4) {
                    if (t4.meta && (o2.total_pages = t4.meta.pagination.total_pages), 0 < t4.data.length) {
                      o2.pagination = t4.meta.pagination;
                      var e3 = [];
                      t4.data.map(function(t5) {
                        e3.push(i.ConversationController.trasformJSONConversation(t5.conversationId, t5.conversationType, t5.lastMessage, t5.conversationWith, parseInt(t5.unreadMessageCount), t5.tags ? t5.tags : []));
                      }), n2(e3);
                    } else n2([]);
                    o2.fetchingInProgress = false;
                  }, function(t4) {
                    o2.fetchingInProgress = false, e2(new r.CometChatException(t4.error));
                  });
                }
              } catch (t4) {
                o2.fetchingInProgress = false, e2(new r.CometChatException(t4));
              }
            });
          }, t2.prototype.getNextData = function() {
            var t3 = {};
            if (t3.per_page = this.limit, o.isFalsy(this.conversationType) || (t3.conversationType = this.conversationType), o.isFalsy(this.getUserAndGroupTags) || (t3.withUserAndGroupTags = this.getUserAndGroupTags), o.isFalsy(this.tags) || (t3.tags = this.tags), o.isFalsy(this.withTags) || (t3.withTags = this.withTags), o.isFalsy(this.userTags) || (t3.userTags = this.userTags), o.isFalsy(this.groupTags) || (t3.groupTags = this.groupTags), 1 == this.current_page) t3.page = this.next_page, this.next_page++, this.current_page++;
            else {
              if (this.next_page > this.total_pages) return t3.page = this.next_page, t3;
              t3.page = this.next_page++;
            }
            return t3;
          }, t2;
        }();
        e.ConversationsRequest = E;
        var c = function() {
          function t2() {
            this.WithTags = false;
          }
          return t2.prototype.setLimit = function(t3) {
            return this.limit = t3, this;
          }, t2.prototype.setConversationType = function(t3) {
            return this.conversationType = t3, this;
          }, t2.prototype.withUserAndGroupTags = function(t3) {
            return "boolean" == typeof t3 && (this.getUserAndGroupTags = t3), this;
          }, t2.prototype.setTags = function(t3) {
            return this.tags = t3, this;
          }, t2.prototype.withTags = function(t3) {
            return this.WithTags = t3, this;
          }, t2.prototype.setGroupTags = function(t3) {
            return this.groupTags = t3, this;
          }, t2.prototype.setUserTags = function(t3) {
            return this.userTags = t3, this;
          }, t2.prototype.build = function() {
            return new E(this);
          }, t2;
        }();
        e.ConversationsRequestBuilder = c;
      }, function(t, e, n) {
        "use strict";
        var h = this && this.__awaiter || function(t2, i2, a2, E) {
          return new (a2 || (a2 = Promise))(function(n2, e2) {
            function o2(t3) {
              try {
                r2(E.next(t3));
              } catch (t4) {
                e2(t4);
              }
            }
            function s2(t3) {
              try {
                r2(E.throw(t3));
              } catch (t4) {
                e2(t4);
              }
            }
            function r2(t3) {
              var e3;
              t3.done ? n2(t3.value) : (e3 = t3.value, e3 instanceof a2 ? e3 : new a2(function(t4) {
                t4(e3);
              })).then(o2, s2);
            }
            r2((E = E.apply(t2, i2 || [])).next());
          });
        }, A = this && this.__generator || function(n2, o2) {
          var s2, r2, i2, t2, a2 = { label: 0, sent: function() {
            if (1 & i2[0]) throw i2[1];
            return i2[1];
          }, trys: [], ops: [] };
          return t2 = { next: e2(0), throw: e2(1), return: e2(2) }, "function" == typeof Symbol && (t2[Symbol.iterator] = function() {
            return this;
          }), t2;
          function e2(e3) {
            return function(t3) {
              return function(e4) {
                if (s2) throw new TypeError("Generator is already executing.");
                for (; a2; ) try {
                  if (s2 = 1, r2 && (i2 = 2 & e4[0] ? r2.return : e4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, e4[1])).done) return i2;
                  switch (r2 = 0, i2 && (e4 = [2 & e4[0], i2.value]), e4[0]) {
                    case 0:
                    case 1:
                      i2 = e4;
                      break;
                    case 4:
                      return a2.label++, { value: e4[1], done: false };
                    case 5:
                      a2.label++, r2 = e4[1], e4 = [0];
                      continue;
                    case 7:
                      e4 = a2.ops.pop(), a2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = 0 < (i2 = a2.trys).length && i2[i2.length - 1]) && (6 === e4[0] || 2 === e4[0])) {
                        a2 = 0;
                        continue;
                      }
                      if (3 === e4[0] && (!i2 || e4[1] > i2[0] && e4[1] < i2[3])) {
                        a2.label = e4[1];
                        break;
                      }
                      if (6 === e4[0] && a2.label < i2[1]) {
                        a2.label = i2[1], i2 = e4;
                        break;
                      }
                      if (i2 && a2.label < i2[2]) {
                        a2.label = i2[2], a2.ops.push(e4);
                        break;
                      }
                      i2[2] && a2.ops.pop(), a2.trys.pop();
                      continue;
                  }
                  e4 = o2.call(n2, a2);
                } catch (t4) {
                  e4 = [6, t4], r2 = 0;
                } finally {
                  s2 = i2 = 0;
                }
                if (5 & e4[0]) throw e4[1];
                return { value: e4[0] ? e4[1] : void 0, done: true };
              }([e3, t3]);
            };
          }
        }, s = this && this.__spreadArrays || function() {
          for (var t2 = 0, e2 = 0, n2 = arguments.length; e2 < n2; e2++) t2 += arguments[e2].length;
          var o2 = Array(t2), s2 = 0;
          for (e2 = 0; e2 < n2; e2++) for (var r2 = arguments[e2], i2 = 0, a2 = r2.length; i2 < a2; i2++, s2++) o2[s2] = r2[i2];
          return o2;
        };
        e.__esModule = true, e.MessagesRequestBuilder = e.MessagesRequest = void 0;
        var R = n(2), I = n(6), f = n(10), O = n(0), r = n(47), N = n(1), i = n(13), y = n(25), o = function() {
          function t2(t3) {
            this.limit = N.DEFAULT_VALUES.MSGS_LIMIT, this.timestamp = 0, this.id = N.DEFAULT_VALUES.DEFAULT_MSG_ID, this.messageStore = r.MessagesStore.getInstance(), this.endpointName = "getUserMessages", this.listId = "", this.totalPages = 0, this.unread = false, this.inProgress = false, this.hideMessagesFromBlockedUsers = false, this.updatedAt = 0, this.onlyUpdates = 0, this.paginationMeta = {}, this.WithTags = false, this.hideDeletedMessages = false, this.limit = t3.limit, this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.PER_PAGE] = this.limit, this.uid = t3.uid, this.guid = t3.guid, this.parentMessageId = t3.parentMessageId, this.timestamp = t3.timestamp, this.timestamp && (this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.SENT_AT] = this.timestamp), this.id = t3.id, this.id != N.DEFAULT_VALUES.DEFAULT_MSG_ID && (this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.ID] = this.id), this.hideMessagesFromBlockedUsers = t3.HideMessagesFromBlockedUsers, this.hideMessagesFromBlockedUsers && (this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.HIDE_MESSAGES_FROM_BLOCKED_USER] = this.hideMessagesFromBlockedUsers), this.unread = t3.unread, this.unread && (this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.UNREAD] = this.unread), t3.searchKey && (this.searchKey = t3.searchKey, this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY] = this.searchKey), t3.onlyUpdate && (this.onlyUpdates = t3.onlyUpdate, this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.ONLY_UPDATES] = this.onlyUpdates), t3.updatedAt && (this.updatedAt = t3.updatedAt, this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.UPDATED_AT] = this.updatedAt), t3.category && (this.category = t3.category), t3.categories && (this.categories = t3.categories), t3.type && (this.type = t3.type), t3.types && (this.types = t3.types), t3.WithTags && (this.WithTags = t3.WithTags), t3.tags && (this.tags = t3.tags), t3.HideReplies && (this.hideReplies = t3.HideReplies, this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.HIDE_REPLIES] = this.hideReplies), this.hideDeletedMessages = t3.HideDeletedMessages, this.hideDeletedMessages && (this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.HIDE_DELETED_MESSAGES] = this.hideDeletedMessages);
          }
          return t2.prototype.fetchNext = function() {
            var t3 = this;
            return new Promise(function(s2, r2) {
              return h(t3, void 0, void 0, function() {
                var e2, n2, o2;
                return A(this, function(t4) {
                  switch (t4.label) {
                    case 0:
                      if (t4.trys.push([0, 5, , 6]), this.inProgress) return this.inProgress = false, r2(new R.CometChatException(i.MESSAGES_REQUEST_ERRORS.REQUEST_IN_PROGRESS_ERROR)), [2];
                      if (this.inProgress = true, this.onlyUpdates) {
                        if (0 == this.updatedAt) return this.inProgress = false, r2(new R.CometChatException(i.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2];
                      } else if (0 == this.timestamp && 0 == this.id && 0 == this.updatedAt) return this.inProgress = false, r2(new R.CometChatException(i.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2];
                      this.affix = N.MessageConstatnts.PAGINATION.AFFIX.APPEND, this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, this.currentMethod = N.MessageConstatnts.PAGINATION.AFFIX.APPEND, t4.label = 1;
                    case 1:
                      return t4.trys.push([1, 3, , 4]), [4, this.makeAPICall()];
                    case 2:
                      return e2 = t4.sent(), s2(e2), this.inProgress = false, [3, 4];
                    case 3:
                      return n2 = t4.sent(), this.inProgress = false, r2(new R.CometChatException(n2)), [3, 4];
                    case 4:
                      return [3, 6];
                    case 5:
                      return o2 = t4.sent(), this.inProgress = false, r2(new R.CometChatException(o2)), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            });
          }, t2.prototype.fetchPrevious = function() {
            var t3 = this;
            return new Promise(function(s2, r2) {
              return h(t3, void 0, void 0, function() {
                var e2, n2, o2;
                return A(this, function(t4) {
                  switch (t4.label) {
                    case 0:
                      if (t4.trys.push([0, 5, , 6]), this.inProgress) return r2(new R.CometChatException(i.MESSAGES_REQUEST_ERRORS.REQUEST_IN_PROGRESS_ERROR)), this.inProgress = false, [2];
                      if (this.inProgress = true, this.onlyUpdates && 0 == this.updatedAt) return this.inProgress = false, r2(new R.CometChatException(i.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2];
                      this.affix = N.MessageConstatnts.PAGINATION.AFFIX.PREPEND, this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, this.currentMethod = N.MessageConstatnts.PAGINATION.AFFIX.PREPEND, t4.label = 1;
                    case 1:
                      return t4.trys.push([1, 3, , 4]), [4, this.makeAPICall()];
                    case 2:
                      return e2 = t4.sent(), s2(e2), this.inProgress = false, [3, 4];
                    case 3:
                      return n2 = t4.sent(), this.inProgress = false, r2(new R.CometChatException(n2)), [3, 4];
                    case 4:
                      return [3, 6];
                    case 5:
                      return o2 = t4.sent(), this.inProgress = false, r2(new R.CometChatException(o2)), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            });
          }, t2.prototype.makeAPICall = function() {
            var g = this;
            return new Promise(function(s2, e2) {
              try {
                var t3 = g.uid;
                if (void 0 !== t3) {
                  if (typeof t3 !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "UID", "UID", "setUID()"))));
                  if (O.isFalsy(t3.trim())) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.INVALID), "UID", "UID", "UID", "UID"))));
                  g.uid = t3.trim();
                }
                var n2 = g.guid;
                if (void 0 !== n2) {
                  if (typeof n2 !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "setGUID()"))));
                  if (O.isFalsy(n2.trim())) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID"))));
                  g.guid = n2.trim();
                }
                var o2 = g.parentMessageId;
                if (void 0 !== o2) {
                  if (isNaN(o2)) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "PARENT_MESSAGE_ID", "PARENT_MESSAGE_ID", "setParentMessageId()"))));
                  if (o2 < N.DEFAULT_VALUES.ZERO) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "PARENT_MESSAGE_ID", "PARENT_MESSAGE_ID", "setParentMessageId()"))));
                }
                var r2 = g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.PER_PAGE];
                if (void 0 === r2) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit"))));
                if (isNaN(r2)) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))));
                if (r2 > N.DEFAULT_VALUES.MSGS_MAX_LIMIT) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", N.DEFAULT_VALUES.MSGS_MAX_LIMIT))));
                if (r2 < N.DEFAULT_VALUES.ZERO) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))));
                var i2 = g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY];
                if (void 0 !== i2) {
                  if (typeof i2 !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()"))));
                  if (O.isFalsy(i2.trim())) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword"))));
                  g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY] = i2.trim();
                }
                var a2 = g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.ID];
                if (void 0 !== a2) {
                  if (isNaN(a2)) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "setMessageId()"))));
                  if (a2 < N.DEFAULT_VALUES.ZERO) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "setMessageId()"))));
                }
                var E = g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.SENT_AT];
                if (void 0 !== E) {
                  if (isNaN(E)) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "TIMESTAMP", "TIMESTAMP", "setTimestamp()"))));
                  if (E < N.DEFAULT_VALUES.ZERO) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "TIMESTAMP", "TIMESTAMP", "setTimestamp()"))));
                }
                var c = g.hideMessagesFromBlockedUsers;
                if (void 0 !== c) {
                  if (typeof c !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_MESSAGES_FROM_BLOCKED_USERS", "HIDE_MESSAGES_FROM_BLOCKED_USERS", "hideMessagesFromBlockedUsers()"))));
                  g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.HIDE_MESSAGES_FROM_BLOCKED_USER] = 1 == c ? 1 : 0;
                }
                var u = g.unread;
                if (void 0 !== u) {
                  if (typeof u !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "UNREAD", "UNREAD", "setUnread()"))));
                  g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.UNREAD] = 1 == u ? 1 : 0;
                }
                var S = g.category;
                if (void 0 !== S) {
                  if (typeof S !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_CATEGORY", "SET_CATEGORY", "setCategory()"))));
                  if (O.isFalsy(S.trim())) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.INVALID), "SET_CATEGORY", "SET_CATEGORY", "category", "category"))));
                  g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.CATEGORIES] = S.trim();
                }
                var l = g.categories;
                if (void 0 !== l) {
                  if (!Array.isArray(l)) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_CATEGORIES", "SET_CATEGORIES", "setCategories()"))));
                  0 < l.length && (g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.CATEGORIES] = l);
                }
                var p = g.type;
                if (void 0 !== p) {
                  if (typeof p !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_TYPE", "SET_TYPE", "setType()"))));
                  if (O.isFalsy(p.trim())) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.INVALID), "SET_TYPE", "SET_TYPE", "type", "type"))));
                  g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.TYPES] = p.trim();
                }
                var C = g.types;
                if (void 0 !== C) {
                  if (!Array.isArray(C)) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_TYPES", "SET_TYPES", "setTypes()"))));
                  0 < C.length && (g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.TYPES] = C);
                }
                var T = g.tags;
                if (void 0 !== T) {
                  if (!Array.isArray(T)) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_TAGS", "SET_TAGS", "setTags()"))));
                  0 < T.length && (g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.TAGS] = T);
                }
                var d = g.WithTags;
                if (void 0 !== d) {
                  if (typeof d !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()"))));
                  g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.WITH_TAGS] = 1 == d ? 1 : 0;
                }
                var _ = g.hideDeletedMessages;
                if (void 0 !== _) {
                  if (typeof _ !== N.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void e2(new R.CometChatException(JSON.parse(O.format(JSON.stringify(N.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_DELETED_MESSAGES", "HIDE_DELETED_MESSAGES", "hideDeletedMessages()"))));
                  g.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.HIDE_DELETED_MESSAGES] = 1 == _ ? 1 : 0;
                }
                if (g.createEndpoint(), g.totalPages) {
                  if (1 != g.totalPages) ;
                  else if (g.lastAffix == g.affix) return void s2([]);
                }
                I.makeApiCall(g.endpointName, { listId: g.listId }, g.paginationMeta).then(function(e3) {
                  return h(g, void 0, void 0, function() {
                    var n3, o3 = this;
                    return A(this, function(t4) {
                      return n3 = [], e3[N.ResponseConstants.RESPONSE_KEYS.KEY_META][N.ResponseConstants.RESPONSE_KEYS.KEY_CURSOR].hasOwnProperty(N.MessageConstatnts.PAGINATION.KEYS.ID) && 0 == this.id && (this.id = parseInt(e3.meta.cursor[N.MessageConstatnts.PAGINATION.KEYS.ID])), e3[N.ResponseConstants.RESPONSE_KEYS.KEY_META][N.ResponseConstants.RESPONSE_KEYS.KEY_CURSOR].hasOwnProperty(N.MessageConstatnts.PAGINATION.KEYS.SENT_AT) && 0 == this.timestamp && (this.timestamp = e3.meta.cursor[N.MessageConstatnts.PAGINATION.KEYS.SENT_AT]), e3.meta.pagination.hasOwnProperty("total_pages") && (this.totalPages = e3.meta.pagination.total_pages), e3.meta.cursor.hasOwnProperty("affix") && (this.lastAffix = e3.meta.cursor.affix), e3.data[0] ? (0 < this.id && (this.id = parseInt(e3.data[0].id)), 0 < this.timestamp && (this.timestamp = e3.data[0].sentAt), e3.data.map(function(e4) {
                        y.MessageListnerMaping.getInstance().get(N.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST).then(function(t5) {
                          parseInt(e4.id) > t5 && y.MessageListnerMaping.getInstance().set(N.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST, parseInt(e4.id));
                        }, function(t5) {
                          y.MessageListnerMaping.getInstance().set(N.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST, parseInt(e4.id));
                        }), o3.affix == N.MessageConstatnts.PAGINATION.AFFIX.APPEND ? (o3.id < parseInt(e4.id) && 0 < o3.id && (o3.id = parseInt(e4.id)), o3.timestamp < e4.sentAt && 0 < o3.timestamp && (o3.timestamp = e4.sentAt), o3.updatedAt < e4.updatedAt && 0 < o3.updatedAt && (o3.updatedAt = e4.updatedAt)) : (o3.id > parseInt(e4.id) && (o3.id = parseInt(e4.id)), o3.timestamp > e4.sentAt && (o3.timestamp = e4.sentAt), o3.updatedAt > e4.updatedAt && (o3.updatedAt = e4.updatedAt)), o3.id && (o3.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.ID] = o3.id), o3.timestamp && (o3.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.SENT_AT] = o3.timestamp), o3.updatedAt && (o3.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.UPDATED_AT] = o3.updatedAt), n3.push(f.MessageController.trasformJSONMessge(e4));
                      })) : n3 = [], s2(n3), [2];
                    });
                  });
                }, function(t4) {
                  e2(new R.CometChatException(t4.error));
                });
              } catch (t4) {
                e2(new R.CometChatException(t4));
              }
            });
          }, t2.prototype.createEndpoint = function() {
            this.parentMessageId ? (this.endpointName = "getThreadMessages", this.listId = this.parentMessageId.toString(), this.hideReplies && (this.hideReplies = false, delete this.paginationMeta[N.MessageConstatnts.PAGINATION.KEYS.HIDE_REPLIES])) : (O.isFalsy(this.guid) || O.isFalsy(this.uid)) && O.isFalsy(this.guid) ? (O.isFalsy(this.uid) ? this.endpointName = "getMessages" : this.endpointName = "getUserMessages", this.listId = this.uid) : (this.endpointName = "getGroupMessages", this.listId = this.guid);
          }, t2.prototype.makeData = function() {
            var t3 = {};
            t3[N.MessageConstatnts.PAGINATION.KEYS.PER_PAGE] = this.limit, t3[N.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, (O.isFalsy(this.guid) || O.isFalsy(this.uid)) && O.isFalsy(this.guid) && O.isFalsy(this.uid);
          }, t2.prototype.getFilteredPreviousDataByReceiverId = function(e2) {
            return h(this, void 0, void 0, function() {
              var n2, o2 = this;
              return A(this, function(t3) {
                switch (t3.label) {
                  case 0:
                    switch (n2 = [], e2) {
                      case "user":
                        return [3, 1];
                      case "group":
                        return [3, 3];
                      case "both":
                        return [3, 5];
                    }
                    return [3, 7];
                  case 1:
                    return [4, r.MessagesStore.getInstance().get(this.uid).then(function(e3) {
                      Object.keys(e3).filter(function(t4) {
                        return parseInt(t4) > o2.id;
                      }).map(function(t4) {
                        n2 = s(n2, [e3[t4]]);
                      });
                    })];
                  case 2:
                    return t3.sent(), [3, 9];
                  case 3:
                    return [4, r.MessagesStore.getInstance().get(this.guid).then(function(e3) {
                      Object.keys(e3).filter(function(t4) {
                        return parseInt(t4) > o2.id;
                      }).map(function(t4) {
                        n2 = s(n2, [e3[t4]]);
                      });
                    })];
                  case 4:
                    t3.sent(), t3.label = 5;
                  case 5:
                    return [4, r.MessagesStore.getInstance().get(this.guid).then(function(e3) {
                      Object.keys(e3).filter(function(t4) {
                        return parseInt(t4) > o2.id;
                      }).filter(function(t4) {
                        return e3[t4].sender.uid == o2.uid;
                      }).map(function(t4) {
                        n2 = s(n2, [e3[t4]]);
                      });
                    })];
                  case 6:
                    return t3.sent(), [3, 9];
                  case 7:
                    return [4, r.MessagesStore.getInstance().getAllMessages().then(function(e3) {
                      Object.keys(e3).filter(function(t4) {
                        return parseInt(t4) > o2.id;
                      }).map(function(t4) {
                        n2 = s(n2, [e3[t4]]);
                      });
                    })];
                  case 8:
                    return t3.sent(), [3, 9];
                  case 9:
                    return [2, n2];
                }
              });
            });
          }, t2.prototype.getFilteredNextDataByReceiverId = function(e2) {
            return h(this, void 0, void 0, function() {
              var n2, o2 = this;
              return A(this, function(t3) {
                switch (t3.label) {
                  case 0:
                    switch (n2 = [], e2) {
                      case "user":
                        return [3, 1];
                      case "group":
                        return [3, 3];
                      case "both":
                        return [3, 5];
                    }
                    return [3, 7];
                  case 1:
                    return [4, r.MessagesStore.getInstance().get(this.uid).then(function(e3) {
                      Object.keys(e3).filter(function(t4) {
                        return parseInt(t4) > o2.id;
                      }).map(function(t4) {
                        n2 = s(n2, [e3[t4]]);
                      });
                    })];
                  case 2:
                    return t3.sent(), [3, 9];
                  case 3:
                    return [4, r.MessagesStore.getInstance().get(this.guid).then(function(e3) {
                      Object.keys(e3).filter(function(t4) {
                        return parseInt(t4) > o2.id;
                      }).map(function(t4) {
                        n2 = s(n2, [e3[t4]]);
                      });
                    })];
                  case 4:
                    t3.sent(), t3.label = 5;
                  case 5:
                    return [4, r.MessagesStore.getInstance().get(this.guid).then(function(e3) {
                      Object.keys(e3).filter(function(t4) {
                        return parseInt(t4) > o2.id;
                      }).filter(function(t4) {
                        return e3[t4].sender.uid == o2.uid;
                      }).map(function(t4) {
                        n2 = s(n2, [e3[t4]]);
                      });
                    })];
                  case 6:
                    return t3.sent(), [3, 9];
                  case 7:
                    return [4, r.MessagesStore.getInstance().getAllMessages().then(function(e3) {
                      Object.keys(e3).filter(function(t4) {
                        return parseInt(t4) > o2.id;
                      }).map(function(t4) {
                        n2 = s(n2, [e3[t4]]);
                      });
                    })];
                  case 8:
                    return t3.sent(), [3, 9];
                  case 9:
                    return [2, n2];
                }
              });
            });
          }, t2;
        }();
        e.MessagesRequest = o;
        var a = function() {
          function t2() {
            this.maxLimit = N.DEFAULT_VALUES.MSGS_MAX_LIMIT, this.timestamp = 0, this.id = N.DEFAULT_VALUES.DEFAULT_MSG_ID, this.unread = false, this.HideMessagesFromBlockedUsers = false, this.onlyUpdate = 0, this.HideDeletedMessages = false, this.WithTags = false;
          }
          return t2.prototype.setLimit = function(t3) {
            return this.limit = t3, this;
          }, t2.prototype.setGUID = function(t3) {
            return this.guid = t3, this;
          }, t2.prototype.setUID = function(t3) {
            return this.uid = t3, this;
          }, t2.prototype.setParentMessageId = function(t3) {
            return this.parentMessageId = t3, this;
          }, t2.prototype.setTimestamp = function(t3) {
            return void 0 === t3 && (t3 = O.getCurrentTime()), this.timestamp = t3, this;
          }, t2.prototype.setMessageId = function(t3) {
            return void 0 === t3 && (t3 = N.DEFAULT_VALUES.DEFAULT_MSG_ID), this.id = t3, this;
          }, t2.prototype.setUnread = function(t3) {
            return void 0 === t3 && (t3 = false), this.unread = t3, this;
          }, t2.prototype.hideMessagesFromBlockedUsers = function(t3) {
            return void 0 === t3 && (t3 = false), this.HideMessagesFromBlockedUsers = t3, this;
          }, t2.prototype.setSearchKeyword = function(t3) {
            return this.searchKey = t3, this;
          }, t2.prototype.setUpdatedAfter = function(t3) {
            return this.updatedAt = t3, this;
          }, t2.prototype.updatesOnly = function(t3) {
            return t3 && (this.onlyUpdate = 1), this;
          }, t2.prototype.setCategory = function(t3) {
            return this.category = t3, this;
          }, t2.prototype.setCategories = function(t3) {
            return this.categories = t3, this;
          }, t2.prototype.setType = function(t3) {
            return this.type = t3, this;
          }, t2.prototype.setTypes = function(t3) {
            return this.types = t3, this;
          }, t2.prototype.hideReplies = function(t3) {
            return this.HideReplies = t3, this;
          }, t2.prototype.hideDeletedMessages = function(t3) {
            return this.HideDeletedMessages = t3, this;
          }, t2.prototype.setTags = function(t3) {
            return this.tags = t3, this;
          }, t2.prototype.withTags = function(t3) {
            return this.WithTags = t3, this;
          }, t2.prototype.build = function() {
            return this.category && this.categories && this.categories.push(this.category), this.type && this.types && this.types.push(this.type), new o(this);
          }, t2;
        }();
        e.MessagesRequestBuilder = a;
      }, function(t, e, n) {
        "use strict";
        var a = this && this.__assign || function() {
          return (a = Object.assign || function(t2) {
            for (var e2, n2 = 1, o2 = arguments.length; n2 < o2; n2++) for (var s2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, s2) && (t2[s2] = e2[s2]);
            return t2;
          }).apply(this, arguments);
        };
        e.__esModule = true, e.MessagesStore = void 0;
        var o = n(3), E = n(0), c = n(1), s = n(12), r = function() {
          function t2(t3) {
            this.store = c.constants.DEFAULT_STORE, E.isFalsy(t3) || (this.store = t3), this.messagesStore = s.createInstance({ name: E.format(c.LOCAL_STORE.STORE_STRING, o.CometChat.getAppId(), c.LOCAL_STORE.MESSAGES_STORE) }), this.messagesStore.setDriver([s.LOCALSTORAGE, s.INDEXEDDB, s.WEBSQL]);
          }
          return t2.getInstance = function() {
            return null == t2.MessagesStore && (t2.MessagesStore = new t2()), t2.MessagesStore;
          }, t2.prototype.set = function(t3, e2) {
            return this.messagesStore.setItem(t3, e2);
          }, t2.prototype.remove = function(t3) {
            this.messagesStore.removeItem(t3);
          }, t2.prototype.get = function(t3) {
            return this.messagesStore.getItem(t3);
          }, t2.prototype.clearStore = function() {
            var n2 = this;
            return new Promise(function(t3, e2) {
              n2.messagesStore.clear().then(function() {
                t3(true);
              }).catch(function(t4) {
                e2(t4);
              });
            });
          }, t2.prototype.getAllMessages = function() {
            var n2 = this, o2 = {};
            return new Promise(function(t3, e2) {
              n2.messagesStore.iterate(function(t4, e3, n3) {
                e3 != c.constants.MSG_VER_POST && e3 != c.constants.MSG_VER_POST && (o2 = a(a({}, o2), t4));
              }).then(function() {
                t3(o2);
              });
            });
          }, t2.prototype.clear = function(t3) {
          }, t2.prototype.selectStore = function(t3) {
            this.store = t3;
          }, t2.prototype.storeMessages = function(t3) {
            var n2 = this;
            if (o.CometChat.user.getUid()) {
              var s2 = o.CometChat.user.getUid(), r2 = {}, i = 0;
              return this.get(c.constants.MSG_VER_POST).then(function(o2) {
                t3.map(function(t4) {
                  var e2;
                  if (!E.isFalsy(t4)) {
                    0 == i && (i = parseInt(t4.getId().toString())), i > t4.getId() && (i = parseInt(t4.getId().toString())), o2 < t4.getId() && (o2 = parseInt(t4.getId().toString()));
                    var n3 = void 0;
                    n3 = t4.getSender() instanceof Object ? t4.getSender().getUid() : t4.getSender(), t4.getReceiverType() == c.MessageConstatnts.RECEIVER_TYPE.GROUP && (n3 = t4.getReceiver()), t4.getSender() instanceof Object ? t4.getSender().getUid() == s2 && (n3 = t4.getReceiver()) : t4.getSender() == s2 && (n3 = t4.getReceiver()), r2[n3] || (r2[n3] = {}), r2[n3] = a(a({}, r2[n3]), ((e2 = {})[t4.getId()] = t4, e2));
                  }
                }), n2.get(c.constants.MSG_VER_PRE).then(function(t4) {
                  (0 < i && i < t4 || null == t4) && n2.set(c.constants.MSG_VER_PRE, i);
                }) && 0 < o2 && n2.set(c.constants.MSG_VER_POST, o2), Object.keys(r2).map(function(e2) {
                  n2.get(e2).then(function(t4) {
                    null == t4 && (t4 = {}), n2.set(e2, a(a({}, r2[e2]), t4));
                  });
                });
              }), true;
            }
          }, t2;
        }();
        e.MessagesStore = r;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.BlockedUsersRequestBuilder = e.BlockedUsersRequest = void 0;
        var s = n(6), o = n(0), r = n(11), i = n(2), a = n(1), E = function() {
          function t2(t3) {
            this.next_page = 1, this.current_page = 1, this.total_pages = -1, this.fetchingInProgress = false, this.pagination = { total: 0, count: 0, per_page: 0, current_page: 0, total_pages: 0, links: [] }, o.isFalsy(t3) || (this.limit = t3.limit, o.isFalsy(t3.searchKeyword) || (this.searchKeyword = t3.searchKeyword), o.isFalsy(t3.direction) || (this.direction = t3.direction));
          }
          return t2.prototype.validateBlockedUsersBuilder = function() {
            if (void 0 === this.limit) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > a.DEFAULT_VALUES.USERS_MAX_LIMIT) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", a.DEFAULT_VALUES.USERS_MAX_LIMIT)));
            if (this.limit < a.DEFAULT_VALUES.ZERO) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (void 0 !== this.searchKeyword) {
              if (typeof this.searchKeyword !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              if (o.isFalsy(this.searchKeyword.trim())) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.INVALID), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "search keyword", "search keyword")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (void 0 !== this.direction) {
              if (typeof this.direction !== a.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new i.CometChatException(JSON.parse(o.format(JSON.stringify(a.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_DIRECTION", "SET_DIRECTION", "setDirection()")));
              if (this.direction != a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BOTH && this.direction != a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BLOCKED_BY_ME && this.direction != a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.HAS_BLOCKED_ME) return new i.CometChatException(a.UserErrors.INVALID_DIRECTION);
            }
          }, t2.prototype.fetchNext = function() {
            var o2 = this;
            return new Promise(function(n2, e2) {
              try {
                if (o2.fetchingInProgress) o2.fetchingInProgress = false, n2([]);
                else {
                  o2.fetchingInProgress = true;
                  var t3 = o2.validateBlockedUsersBuilder();
                  if (t3 instanceof i.CometChatException) return void e2(t3);
                  s.makeApiCall("blockedUsersList", {}, o2.getNextData()).then(function(t4) {
                    if (t4.meta && (o2.total_pages = t4.meta.pagination.total_pages), 0 < t4.data.length) {
                      o2.pagination = t4.meta.pagination;
                      var e3 = [];
                      t4.data.map(function(t5) {
                        e3.push(r.UsersController.trasformJSONUser(t5));
                      }), n2(e3);
                    } else n2([]);
                    o2.fetchingInProgress = false;
                  }, function(t4) {
                    o2.fetchingInProgress = false, e2(new i.CometChatException(t4.error));
                  });
                }
              } catch (t4) {
                o2.fetchingInProgress = false, e2(new i.CometChatException(t4));
              }
            });
          }, t2.prototype.getNextData = function() {
            var t3 = {};
            if (t3.per_page = this.limit, o.isFalsy(this.direction) || (t3.direction = this.direction), o.isFalsy(this.searchKeyword) || (t3.searchKey = this.searchKeyword), 1 == this.current_page) t3.page = this.next_page, this.next_page++, this.current_page++;
            else {
              if (this.next_page > this.total_pages) return t3.page = this.next_page, t3;
              t3.page = this.next_page++;
            }
            return t3;
          }, t2.MAX_LIMIT = 2, t2.DEFAULT_LIMIT = 1, t2.directions = a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS, t2;
        }();
        e.BlockedUsersRequest = E;
        var c = function() {
          function t2() {
          }
          return t2.prototype.setLimit = function(t3) {
            return this.limit = t3, this;
          }, t2.prototype.setSearchKeyword = function(t3) {
            return this.searchKeyword = t3, this;
          }, t2.prototype.setDirection = function(t3) {
            return this.direction = t3, this;
          }, t2.prototype.blockedByMe = function() {
            return this.direction = a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BLOCKED_BY_ME, this;
          }, t2.prototype.hasBlockedMe = function() {
            return this.direction = a.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.HAS_BLOCKED_ME, this;
          }, t2.prototype.build = function() {
            return new E(this);
          }, t2;
        }();
        e.BlockedUsersRequestBuilder = c;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.AppSettingsBuilder = e.AppSettings = void 0;
        var o = n(1), s = function() {
          function e2(t2) {
            this.subscriptionType = e2.SUBSCRIPTION_TYPE_NONE, this.roles = null, this.region = o.DEFAULT_VALUES.REGION_DEFAULT, this.autoJoinGroup = true, this.establishSocketConnection = true, this.adminHost = null, this.clientHost = null, this.subscriptionType = t2.subscriptionType, this.roles = t2.roles, this.region = t2.region, this.autoJoinGroup = t2.autoJoinGroup, this.establishSocketConnection = t2.establishSocketConnection, this.adminHost = t2.adminHost, this.clientHost = t2.clientHost;
          }
          return e2.prototype.getSubscriptionType = function() {
            return this.subscriptionType;
          }, e2.prototype.getRoles = function() {
            return this.roles;
          }, e2.prototype.getRegion = function() {
            return this.region;
          }, e2.prototype.getIsAutoJoinEnabled = function() {
            return this.autoJoinGroup;
          }, e2.prototype.shouldAutoEstablishSocketConnection = function() {
            return this.establishSocketConnection;
          }, e2.prototype.getAdminHost = function() {
            return this.adminHost;
          }, e2.prototype.getClientHost = function() {
            return this.clientHost;
          }, e2.SUBSCRIPTION_TYPE_NONE = "NONE", e2.SUBSCRIPTION_TYPE_ALL_USERS = "ALL_USERS", e2.SUBSCRIPTION_TYPE_ROLES = "ROLES", e2.SUBSCRIPTION_TYPE_FRIENDS = "FRIENDS", e2.REGION_EU = o.DEFAULT_VALUES.REGION_DEFAULT_EU, e2.REGION_US = o.DEFAULT_VALUES.REGION_DEFAULT_US, e2.REGION_IN = o.DEFAULT_VALUES.REGION_DEFAULT_IN, e2.REGION_PRIVATE = o.DEFAULT_VALUES.REGION_DEFAULT_PRIVATE, e2;
        }();
        e.AppSettings = s;
        var r = function() {
          function t2() {
            this.subscriptionType = s.SUBSCRIPTION_TYPE_NONE, this.roles = null, this.region = o.DEFAULT_VALUES.REGION_DEFAULT, this.autoJoinGroup = true, this.establishSocketConnection = true, this.adminHost = null, this.clientHost = null;
          }
          return t2.prototype.subscribePresenceForAllUsers = function() {
            return this.subscriptionType = s.SUBSCRIPTION_TYPE_ALL_USERS, this;
          }, t2.prototype.subscribePresenceForRoles = function(t3) {
            return this.subscriptionType = s.SUBSCRIPTION_TYPE_ROLES, this.roles = t3, this;
          }, t2.prototype.subscribePresenceForFriends = function() {
            return this.subscriptionType = s.SUBSCRIPTION_TYPE_FRIENDS, this;
          }, t2.prototype.setRegion = function(t3) {
            return void 0 === t3 && (t3 = o.DEFAULT_VALUES.REGION_DEFAULT), this.region = t3.toLowerCase(), this;
          }, t2.prototype.enableAutoJoinForGroups = function(t3) {
            return void 0 === t3 && (t3 = true), this.autoJoinGroup = t3, this;
          }, t2.prototype.autoEstablishSocketConnection = function(t3) {
            return void 0 === t3 && (t3 = true), this.establishSocketConnection = t3, this;
          }, t2.prototype.overrideAdminHost = function(t3) {
            return this.adminHost = t3, this;
          }, t2.prototype.overrideClientHost = function(t3) {
            return this.clientHost = t3, this;
          }, t2.prototype.build = function() {
            return new s(this);
          }, t2;
        }();
        e.AppSettingsBuilder = r;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.CometChatHelper = void 0;
        var S = n(10), l = n(1), p = n(11), C = n(15), T = n(24), o = n(3), s = n(2), r = n(0), i = function() {
          function t2() {
          }
          return t2.processMessage = function(t3) {
            try {
              return S.MessageController.trasformJSONMessge(t3);
            } catch (t4) {
              r.Logger.error("CometChatHelper: processMessage", t4);
            }
          }, t2.getConversationFromMessage = function(u) {
            return new Promise(function(E, c) {
              try {
                o.CometChat.getLoggedinUser().then(function(t3) {
                  if (null !== t3) {
                    var e2 = S.MessageController.trasformJSONMessge(u), n2 = e2.receiverType, o2 = e2.conversationId, s2 = void 0, r2 = S.MessageController.trasformJSONMessge(u);
                    if (n2 == l.MessageConstatnts.RECEIVER_TYPE.USER) {
                      var i2 = p.UsersController.trasformJSONUser(e2[l.MessageConstatnts.KEYS.SENDER]);
                      s2 = i2.getUid() == t3.getUid() ? p.UsersController.trasformJSONUser(e2[l.MessageConstatnts.KEYS.RECEIVER]) : i2;
                    } else s2 = C.GroupsController.trasformJSONGroup(e2[l.MessageConstatnts.KEYS.RECEIVER]);
                    var a = T.ConversationController.trasformJSONConversation(o2, n2, r2, s2, 0, []);
                    E(a);
                  } else c(l.UserErrors.USER_NOT_LOGGED_IN);
                }, function(t3) {
                  c(new s.CometChatException(t3.error));
                });
              } catch (t3) {
                c(new s.CometChatException(t3));
              }
            });
          }, t2;
        }();
        e.CometChatHelper = i;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.MainVideoContainerSetting = e.VirtualBackgroundBuilder = e.VirtualBackground = e.CallSettingsBuilder = e.CallSettings = void 0;
        var o = n(1), s = n(0), r = function() {
          function t2(t3) {
            this.sessionID = t3.sessionID, this.defaultLayout = t3.defaultLayout, this.isAudioOnly = t3.isAudioOnly, this.region = t3.region, this.user = t3.user, this.mode = t3.mode, this.domain = t3.domain, this.ShowEndCallButton = t3.ShowEndCallButton, this.ShowMuteAudioButton = t3.ShowMuteAudioButton, this.ShowPauseVideoButton = t3.ShowPauseVideoButton, this.ShowScreenShareButton = t3.ShowScreenShareButton, this.ShowSwitchModeButton = t3.ShowSwitchModeButton, this.StartAudioMuted = t3.StartAudioMuted, this.StartVideoMuted = t3.StartVideoMuted, this.localizedObject = t3.localizedObject, this.analyticsSettings = t3.analyticsSettings, this.appId = t3.appId, this.customCSS = t3.customCSS, this.ShowRecordingButton = t3.ShowRecordingButton, this.StartRecordingOnCallStart = t3.StartRecordingOnCallStart, this.useLegacyUI = t3.useLegacyUI, this.ShowSwitchToVideoCallButton = t3.ShowSwitchToVideoCallButton, this.VirtualBackground = t3.virtualBackground, this.ShowVirtualBackgroundSetting = t3.ShowVirtualBackgroundSetting, this.MainVideoContainerSetting = t3.MainVideoContainerSetting;
          }
          return t2.prototype.shouldUseLegacyUI = function() {
            return this.useLegacyUI;
          }, t2.prototype.isRecordingButtonEnabled = function() {
            return this.ShowRecordingButton;
          }, t2.prototype.shouldStartRecordingOnCallStart = function() {
            return this.StartRecordingOnCallStart;
          }, t2.prototype.getCustomCSS = function() {
            return this.customCSS;
          }, t2.prototype.getSessionId = function() {
            return this.sessionID;
          }, t2.prototype.isAudioOnlyCall = function() {
            return this.isAudioOnly;
          }, t2.prototype.getUser = function() {
            return this.user;
          }, t2.prototype.getRegion = function() {
            return this.region;
          }, t2.prototype.getAppId = function() {
            return this.appId;
          }, t2.prototype.getDomain = function() {
            return this.domain;
          }, t2.prototype.isDefaultLayoutEnabled = function() {
            return this.defaultLayout;
          }, t2.prototype.getMode = function() {
            return this.mode;
          }, t2.prototype.getStartWithAudioMuted = function() {
            return this.StartAudioMuted;
          }, t2.prototype.getStartWithVideoMuted = function() {
            return this.StartVideoMuted;
          }, t2.prototype.isEndCallButtonEnabled = function() {
            return this.ShowEndCallButton;
          }, t2.prototype.isMuteAudioButtonEnabled = function() {
            return this.ShowMuteAudioButton;
          }, t2.prototype.isPauseVideoButtonEnabled = function() {
            return this.ShowPauseVideoButton;
          }, t2.prototype.isScreenShareButtonEnabled = function() {
            return this.ShowScreenShareButton;
          }, t2.prototype.isModeButtonEnabled = function() {
            return this.ShowSwitchModeButton;
          }, t2.prototype.getLocalizedStringObject = function() {
            return this.localizedObject;
          }, t2.prototype.getAnalyticsSettings = function() {
            return this.analyticsSettings;
          }, t2.prototype.isAudioToVideoButtonEnabled = function() {
            return this.ShowSwitchToVideoCallButton;
          }, t2.prototype.getVirtualBackground = function() {
            return this.VirtualBackground;
          }, t2.prototype.isVirtualBackgroundSettingEnabled = function() {
            return this.ShowVirtualBackgroundSetting;
          }, t2.prototype.getMainVideoContainerSetting = function() {
            return this.MainVideoContainerSetting;
          }, t2.POSITION_TOP_LEFT = "top-left", t2.POSITION_TOP_RIGHT = "top-right", t2.POSITION_BOTTOM_LEFT = "bottom-left", t2.POSITION_BOTTOM_RIGHT = "bottom-right", t2.ASPECT_RATIO_DEFAULT = "default", t2.ASPECT_RATIO_CONTAIN = "contain", t2.ASPECT_RATIO_COVER = "cover", t2;
        }();
        e.CallSettings = r;
        var i = function() {
          function t2() {
            this.defaultLayout = true, this.isAudioOnly = false, this.mode = o.CallConstants.CALL_MODE.DEFAULT, this.ShowEndCallButton = true, this.ShowMuteAudioButton = true, this.ShowPauseVideoButton = true, this.ShowScreenShareButton = true, this.ShowSwitchModeButton = true, this.StartAudioMuted = false, this.StartVideoMuted = false, this.localizedObject = {}, this.analyticsSettings = {}, this.ShowRecordingButton = false, this.StartRecordingOnCallStart = false, this.useLegacyUI = false, this.ShowSwitchToVideoCallButton = true, this.virtualBackground = new E().build(), this.ShowVirtualBackgroundSetting = true, this.MainVideoContainerSetting = new c();
          }
          return t2.prototype.setSessionID = function(t3) {
            return this.sessionID = t3, this;
          }, t2.prototype.enableDefaultLayout = function(t3) {
            return this.defaultLayout = t3, this;
          }, t2.prototype.setIsAudioOnlyCall = function(t3) {
            return this.isAudioOnly = t3, this;
          }, t2.prototype.setRegion = function(t3) {
            return this.region = t3, this;
          }, t2.prototype.setDomain = function(t3) {
            return this.domain = t3, this;
          }, t2.prototype.setUser = function(t3) {
            return this.user = t3, this;
          }, t2.prototype.setMode = function(t3) {
            return this.mode = t3, this;
          }, t2.prototype.showEndCallButton = function(t3) {
            return this.ShowEndCallButton = t3, this;
          }, t2.prototype.showMuteAudioButton = function(t3) {
            return this.ShowMuteAudioButton = t3, this;
          }, t2.prototype.showPauseVideoButton = function(t3) {
            return this.ShowPauseVideoButton = t3, this;
          }, t2.prototype.showScreenShareButton = function(t3) {
            return this.ShowScreenShareButton = t3, this;
          }, t2.prototype.showModeButton = function(t3) {
            return this.ShowSwitchModeButton = t3, this;
          }, t2.prototype.setLocalizedStringObject = function(t3) {
            return this.localizedObject = t3, this;
          }, t2.prototype.setAnalyticsSettings = function(t3) {
            return this.analyticsSettings = t3, this;
          }, t2.prototype.setAppId = function(t3) {
            return this.appId = t3, this;
          }, t2.prototype.startWithAudioMuted = function(t3) {
            return this.StartAudioMuted = t3, this;
          }, t2.prototype.startWithVideoMuted = function(t3) {
            return this.StartVideoMuted = t3, this;
          }, t2.prototype.setCustomCSS = function(t3) {
            return this.customCSS = t3, this;
          }, t2.prototype.showRecordingButton = function(t3) {
            return this.ShowRecordingButton = t3, this;
          }, t2.prototype.startRecordingOnCallStart = function(t3) {
            return this.StartRecordingOnCallStart = t3, this;
          }, t2.prototype.forceLegacyUI = function(t3) {
            return this.useLegacyUI = t3, this;
          }, t2.prototype.showSwitchToVideoCallButton = function(t3) {
            return this.ShowSwitchToVideoCallButton = t3, this;
          }, t2.prototype.setVirtualBackground = function(t3) {
            return this.virtualBackground = t3, this;
          }, t2.prototype.showVirtualBackgroundSetting = function(t3) {
            return this.ShowVirtualBackgroundSetting = t3, this;
          }, t2.prototype.setMainVideoContainerSetting = function(t3) {
            return this.MainVideoContainerSetting = t3, this;
          }, t2.prototype.build = function() {
            return new r(this);
          }, t2;
        }();
        e.CallSettingsBuilder = i;
        var a = function() {
          function t2(t3) {
            this.AllowBackgroundBlur = t3.AllowBackgroundBlur, this.AllowUserImages = t3.AllowUserImages, this.ShowDefaultImages = t3.ShowDefaultImages, this.SetImages = t3.SetImages, this.EnforceBackgroundBlur = t3.EnforceBackgroundBlur, this.EnforceBackgroundImage = t3.EnforceBackgroundImage;
          }
          return t2.prototype.shouldAllowBackgroundBlur = function() {
            return this.AllowBackgroundBlur;
          }, t2.prototype.shouldAllowUserImages = function() {
            return this.AllowUserImages;
          }, t2.prototype.shouldShowDefaultImages = function() {
            return this.ShowDefaultImages;
          }, t2.prototype.getImages = function() {
            return this.SetImages;
          }, t2.prototype.isBackgroundBlurEnforced = function() {
            return this.EnforceBackgroundBlur;
          }, t2.prototype.getEnforcedBackgroundImage = function() {
            return this.EnforceBackgroundImage;
          }, t2;
        }();
        e.VirtualBackground = a;
        var E = function() {
          function t2() {
            this.AllowBackgroundBlur = true, this.AllowUserImages = true, this.ShowDefaultImages = true, this.SetImages = [], this.EnforceBackgroundBlur = 0, this.EnforceBackgroundImage = "";
          }
          return t2.prototype.allowBackgroundBlur = function(t3) {
            return this.AllowBackgroundBlur = t3, this;
          }, t2.prototype.allowUserImages = function(t3) {
            return this.AllowUserImages = t3, this;
          }, t2.prototype.showDefaultImages = function(t3) {
            return this.ShowDefaultImages = t3, this;
          }, t2.prototype.setImages = function(t3) {
            return this.SetImages = t3, this;
          }, t2.prototype.enforceBackgroundBlur = function(t3) {
            return this.EnforceBackgroundBlur = t3, this;
          }, t2.prototype.enforceBackgroundImage = function(t3) {
            return this.EnforceBackgroundImage = t3, this;
          }, t2.prototype.build = function() {
            return new a(this);
          }, t2;
        }();
        e.VirtualBackgroundBuilder = E;
        var c = function() {
          function t2() {
            this.videoFit = r.ASPECT_RATIO_CONTAIN, this.zoomButton = o.CallConstants.ZOOM_BUTTON_DEFAULT_PARAMS, this.nameLabel = o.CallConstants.NAME_LABEL_DEFAULT_PARAMS, this.network = o.CallConstants.NETWORK_LABEL_DEFAULT_PARAMS;
          }
          return t2.prototype.setMainVideoAspectRatio = function(t3) {
            this.videoFit = t3;
          }, t2.prototype.setFullScreenButtonParams = function(t3, e2) {
            s.isFalsy(t3) || (this.zoomButton[o.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.POSITION] = t3), null != e2 && null != e2 && (this.zoomButton[o.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.VISIBILITY] = e2);
          }, t2.prototype.setNameLabelParams = function(t3, e2, n2) {
            s.isFalsy(t3) || (this.nameLabel[o.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.POSITION] = t3), null != e2 && null != e2 && (this.nameLabel[o.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.VISIBILITY] = e2), s.isFalsy(n2) || (this.nameLabel[o.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.COLOR] = n2);
          }, t2.prototype.setNetworkLabelParams = function(t3, e2) {
            s.isFalsy(t3) || (this.network[o.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.POSITION] = t3), null != e2 && null != e2 && (this.network[o.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.VISIBILITY] = e2);
          }, t2;
        }();
        e.MainVideoContainerSetting = c;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.RTCUser = void 0;
        var o = n(0), s = function() {
          function t2(t3) {
            this.avatar = "", o.isFalsy(t3) || (this.uid = t3.toString());
          }
          return t2.prototype.setUID = function(t3) {
            this.uid = t3 ? t3.toString() : "";
          }, t2.prototype.getUID = function() {
            return this.uid.toString();
          }, t2.prototype.setName = function(t3) {
            this.name = t3 ? t3.toString() : "";
          }, t2.prototype.getName = function() {
            return this.name.toString();
          }, t2.prototype.setAvatar = function(t3) {
            this.avatar = t3 ? t3.toString() : "";
          }, t2.prototype.getAvatar = function() {
            return this.avatar.toString();
          }, t2.prototype.setJWT = function(t3) {
            this.jwt = t3 ? t3.toString() : "";
          }, t2.prototype.getJWT = function() {
            return this.jwt.toString();
          }, t2.prototype.setResource = function(t3) {
            this.resource = t3 ? t3.toString() : "";
          }, t2.prototype.getResource = function() {
            return this.resource.toString();
          }, t2;
        }();
        e.RTCUser = s;
      }, function(t, e, n) {
        "use strict";
        var o = this && this.__awaiter || function(t2, i2, a2, E2) {
          return new (a2 || (a2 = Promise))(function(n2, e2) {
            function o2(t3) {
              try {
                r2(E2.next(t3));
              } catch (t4) {
                e2(t4);
              }
            }
            function s2(t3) {
              try {
                r2(E2.throw(t3));
              } catch (t4) {
                e2(t4);
              }
            }
            function r2(t3) {
              var e3;
              t3.done ? n2(t3.value) : (e3 = t3.value, e3 instanceof a2 ? e3 : new a2(function(t4) {
                t4(e3);
              })).then(o2, s2);
            }
            r2((E2 = E2.apply(t2, i2 || [])).next());
          });
        }, s = this && this.__generator || function(n2, o2) {
          var s2, r2, i2, t2, a2 = { label: 0, sent: function() {
            if (1 & i2[0]) throw i2[1];
            return i2[1];
          }, trys: [], ops: [] };
          return t2 = { next: e2(0), throw: e2(1), return: e2(2) }, "function" == typeof Symbol && (t2[Symbol.iterator] = function() {
            return this;
          }), t2;
          function e2(e3) {
            return function(t3) {
              return function(e4) {
                if (s2) throw new TypeError("Generator is already executing.");
                for (; a2; ) try {
                  if (s2 = 1, r2 && (i2 = 2 & e4[0] ? r2.return : e4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, e4[1])).done) return i2;
                  switch (r2 = 0, i2 && (e4 = [2 & e4[0], i2.value]), e4[0]) {
                    case 0:
                    case 1:
                      i2 = e4;
                      break;
                    case 4:
                      return a2.label++, { value: e4[1], done: false };
                    case 5:
                      a2.label++, r2 = e4[1], e4 = [0];
                      continue;
                    case 7:
                      e4 = a2.ops.pop(), a2.trys.pop();
                      continue;
                    default:
                      if (!(i2 = 0 < (i2 = a2.trys).length && i2[i2.length - 1]) && (6 === e4[0] || 2 === e4[0])) {
                        a2 = 0;
                        continue;
                      }
                      if (3 === e4[0] && (!i2 || e4[1] > i2[0] && e4[1] < i2[3])) {
                        a2.label = e4[1];
                        break;
                      }
                      if (6 === e4[0] && a2.label < i2[1]) {
                        a2.label = i2[1], i2 = e4;
                        break;
                      }
                      if (i2 && a2.label < i2[2]) {
                        a2.label = i2[2], a2.ops.push(e4);
                        break;
                      }
                      i2[2] && a2.ops.pop(), a2.trys.pop();
                      continue;
                  }
                  e4 = o2.call(n2, a2);
                } catch (t4) {
                  e4 = [6, t4], r2 = 0;
                } finally {
                  s2 = i2 = 0;
                }
                if (5 & e4[0]) throw e4[1];
                return { value: e4[0] ? e4[1] : void 0, done: true };
              }([e3, t3]);
            };
          }
        };
        e.__esModule = true, e.WSConnectionHelper = void 0;
        var l = n(3), p = n(1), r = n(31), i = n(36), C = n(0), a = n(37), E = n(30), c = n(25), u = n(20), S = n(21), T = n(54), d = n(55), _ = n(56), g = n(57), h = n(58), A = n(59), R = n(60), I = n(22), f = n(27), O = n(26), N = n(5), y = n(61), m = a.ListenerHandlers.getInstance(), L = function() {
          function e2() {
          }
          return e2.getInstance = function() {
            try {
              return null != this.wsConnectionHelper && null != this.wsConnectionHelper || (this.wsConnectionHelper = new e2()), this.wsConnectionHelper;
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: getInstance", t2);
            }
          }, e2.prototype.WSLogin = function(e3, n2) {
            var o2 = this;
            try {
              y.getWSURL().then(function(t2) {
                o2.connection = new WebSocket(t2), n2 && o2.connection && o2.connection.readyState == N.READY_STATE.CONNECTING && n2(o2.connection.readyState), o2.connection.onopen = function(t3) {
                  o2.onOpen(t3, n2), o2.authenticateUser(e3);
                }, o2.connection.onclose = function(t3) {
                  o2.onClose(t3, n2);
                }, o2.connection.onmessage = function(t3) {
                  o2.onMessage(t3);
                };
              }, function(t2) {
                C.Logger.error("WSConnectionHelper :: WSLogin", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: WSLogin", t2);
            }
          }, e2.prototype.onOpen = function(t2, e3) {
            try {
              e3 && this.connection && e3(this.connection.readyState);
            } catch (t3) {
              C.Logger.error("WSConnectionHelper: onOpen", t3);
            }
          }, e2.prototype.onClose = function(t2, e3) {
            try {
              e3 && this.connection && e3(this.connection.readyState);
            } catch (t3) {
              C.Logger.error("WSConnectionHelper: onClose", t3);
            }
          }, e2.prototype.onMessage = function(t2) {
            if (t2.data && "string" == typeof t2.data) try {
              var e3 = JSON.parse(t2.data);
              if (e3 && e3.action && e3.action === N.KEYS.PONG) return;
              var n2 = this.getCometChatEventFromMessage(JSON.parse(t2.data));
              if (n2.getDeviceId() === l.CometChat.getSessionId() && n2.getType() !== N.AUTH.TYPE) return;
              switch (n2.getType()) {
                case N.TYPING_INDICATOR.TYPE:
                  this.publishTypingIndicator(n2);
                  break;
                case N.RECEIPTS.TYPE:
                  this.publishReceipts(n2);
                  break;
                case N.PRESENCE.TYPE:
                  this.publishPresence(n2);
                  break;
                case N.AUTH.TYPE:
                  this.authResponseReceived(n2);
                  break;
                case N.MESSAGE.TYPE:
                  this.publishMessages(n2);
                  break;
                case N.TRANSIENT_MESSAGE.TYPE:
                  this.publishTransientMessage(n2);
                  break;
                default:
                  C.Logger.log("WSHelper: onMessage :: unknown type", t2.data);
              }
            } catch (t3) {
              C.Logger.error("WSHelper: onMessage", t3);
            }
            else C.Logger.log("WSHelper: onMessage :: object data", t2.data);
          }, e2.prototype.authenticateUser = function(u2) {
            var S2 = this;
            try {
              l.CometChat.getLoggedinUser().then(function(c2) {
                c2 ? E.KeyStore.getInstance().get("deviceId").then(function(E2) {
                  C.getAppSettings().then(function(t2) {
                    var e3 = null;
                    window && window.location && window.location.origin && (e3 = window.location.origin);
                    var n2 = "", o2 = E2, s2 = { version: p.SDKHeader.sdkVersion, apiVersion: t2[p.APP_SETTINGS.KEYS.CHAT_API_VERSION], origin: e3, uts: (/* @__PURE__ */ new Date()).getTime() };
                    C.isFalsy(l.CometChat.resource) || (s2.resource = l.CometChat.resource), C.isFalsy(l.CometChat.platform) || (s2.platform = l.CometChat.platform), C.isFalsy(l.CometChat.language) || (s2.language = l.CometChat.language), navigator && (n2 = navigator.userAgent);
                    var r2 = { appInfo: s2, userAgent: n2, deviceId: o2, platform: p.SDKHeader.platform }, i2 = new T.CometChatAuthEvent(l.CometChat.getAppId(), "", "", c2.getUid(), l.CometChat.getSessionId());
                    if (i2.setAuth(u2), i2.setPresenceSubscription(l.CometChat.appSettings.getSubscriptionType()), i2.setDeviceId(l.CometChat.getSessionId()), i2.setExtraParmaeters(r2), y.checkConnection(S2.connection)) {
                      var a2 = i2.getAsString();
                      S2.connection.send(a2);
                    }
                  });
                }) : C.Logger.log("no logged-in user", "null");
              }, function(t2) {
                C.Logger.log("error in fetching logged-in user", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: startTypingIndicator", t2);
            }
          }, e2.prototype.authResponseReceived = function(t2) {
            try {
              "200" === t2.getCode() && "OK" === t2.getStatus() && this.startPingingWS();
            } catch (t3) {
              C.Logger.error("WSConnectionHelper: authResponseReceived", t3);
            }
          }, e2.prototype.WSLogout = function() {
            try {
              this.clearPingTimer(), y.checkConnection(this.connection) && this.connection.close(N.LOGOUT_CODE, N.LOGOUT_REASON);
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: WSLogout", t2);
            }
          }, e2.prototype.startPingingWS = function() {
            var t2 = this;
            try {
              e2.pingTimer || (e2.pingTimer = setInterval(function() {
                return o(t2, void 0, void 0, function() {
                  var e3, n2;
                  return s(this, function(t3) {
                    switch (t3.label) {
                      case 0:
                        return y.checkConnection(this.connection) ? (e3 = new _.CometChatPingEvent("", "", "", "", ""), n2 = e3.getAsString(), this.connection.send(n2), [4, this.listenForPong()]) : [3, 2];
                      case 1:
                        t3.sent() ? (C.Logger.log("WSConnectionHelper :: startPingingWS", "pong success"), l.CometChat.getConnectionStatus() != p.CONNECTION_STATUS.CONNECTED && (this.WSLogout(), this.connection = null, l.CometChat.getInstance().makeWSConnection())) : (C.Logger.log("WSConnectionHelper :: startPingingWS", "pong failure"), this.WSLogout(), this.connection = null, l.CometChat.getInstance().setConnectionStatus(p.CONNECTION_STATUS.DISCONNECTED), m.connectionHandlers.map(function(t4) {
                          try {
                            t4._eventListener && (C.isFalsy(t4._eventListener.onDisconnected) || t4._eventListener.onDisconnected());
                          } catch (t5) {
                            C.Logger.error("WSConnectionHandlers: Disconnected Status", t5);
                          }
                        }), l.CometChat.getInstance().accidentallyDisconnected()), t3.label = 2;
                      case 2:
                        return [2];
                    }
                  });
                });
              }, 15e3));
            } catch (t3) {
              C.Logger.error("WSConnectionHelper: startPingingWS", t3);
            }
          }, e2.prototype.listenForPong = function() {
            var o2 = this;
            return new Promise(function(e3, t2) {
              var n2 = setTimeout(function() {
                e3(false);
              }, 3e3);
              o2.connection.addEventListener("message", function(t3) {
                t3 && t3.data && "string" == typeof t3.data && (JSON.parse(t3.data).action === N.KEYS.PONG && (clearTimeout(n2), e3(true)));
              });
            });
          }, e2.prototype.clearPingTimer = function() {
            e2.pingTimer && (clearInterval(e2.pingTimer), e2.pingTimer = void 0);
          }, e2.prototype.sendOnlineEvent = function() {
            var o2 = this;
            try {
              y.checkConnection(this.connection) && l.CometChat.getLoggedinUser().then(function(t2) {
                if (t2) {
                  t2.authToken && delete t2.authToken;
                  var e3 = { appId: l.CometChat.getAppId(), deviceId: l.CometChat.getSessionId(), type: N.PRESENCE.TYPE, body: { action: N.PRESENCE.ACTION.ONLINE, timestamp: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), user: t2 } };
                  if (y.checkConnection(o2.connection)) {
                    var n2 = y.stringifyMessage(e3);
                    o2.connection.send(n2);
                  }
                } else C.Logger.log("no logged-in user", "null");
              }, function(t2) {
                C.Logger.log("error in fetching logged-in user", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: sendOnlineEvent", t2);
            }
          }, e2.prototype.sendOfflineEvent = function() {
            var o2 = this;
            try {
              y.checkConnection(this.connection) && l.CometChat.getLoggedinUser().then(function(t2) {
                if (t2) {
                  t2.authToken && delete t2.authToken;
                  var e3 = { appId: l.CometChat.getAppId(), deviceId: l.CometChat.getSessionId(), type: N.PRESENCE.TYPE, body: { action: N.PRESENCE.ACTION.OFFLINE, timestamp: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3), user: t2 } };
                  if (y.checkConnection(o2.connection)) {
                    var n2 = y.stringifyMessage(e3);
                    o2.connection.send(n2);
                  }
                } else C.Logger.log("no logged-in user", "null");
              }, function(t2) {
                C.Logger.log("error in fetching logged-in user", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: sendOfflineEvent", t2);
            }
          }, e2.prototype.startTypingIndicator = function(s2, r2, i2) {
            var a2 = this;
            try {
              l.CometChat.getLoggedinUser().then(function(t2) {
                if (t2) {
                  var e3 = new O.TypingIndicator(s2, r2);
                  t2.authToken && delete t2.authToken, e3.setSender(t2), i2 && e3.setMetadata(i2);
                  var n2 = new R.CometChatTypingEvent(l.CometChat.getAppId(), s2, r2, t2.getUid(), l.CometChat.getSessionId());
                  if (n2.setAction(N.TYPING_INDICATOR.ACTION.STARTED), n2.setTypingIndicator(e3), y.checkConnection(a2.connection)) {
                    var o2 = n2.getAsString();
                    a2.connection.send(o2);
                  }
                } else C.Logger.log("no logged-in user", "null");
              }, function(t2) {
                C.Logger.log("error in fetching logged-in user", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: startTypingIndicator", t2);
            }
          }, e2.prototype.pauseTypingIndicator = function(s2, r2, i2) {
            var a2 = this;
            try {
              l.CometChat.getLoggedinUser().then(function(t2) {
                if (t2) {
                  var e3 = new O.TypingIndicator(s2, r2);
                  t2.authToken && delete t2.authToken, e3.setSender(t2), i2 && e3.setMetadata(i2);
                  var n2 = new R.CometChatTypingEvent(l.CometChat.getAppId(), s2, r2, t2.getUid(), l.CometChat.getSessionId());
                  if (n2.setAction(N.TYPING_INDICATOR.ACTION.ENDED), n2.setTypingIndicator(e3), y.checkConnection(a2.connection)) {
                    var o2 = n2.getAsString();
                    a2.connection.send(o2);
                  }
                } else C.Logger.log("no logged-in user", "null");
              }, function(t2) {
                C.Logger.log("error in fetching logged-in user", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: pauseTypingIndicator", t2);
            }
          }, e2.prototype.markAsRead = function(s2, r2, i2, a2) {
            var E2 = this;
            try {
              l.CometChat.getMode();
              l.CometChat.getLoggedinUser().then(function(t2) {
                if (t2) {
                  var e3 = new h.CometChatReceiptEvent(l.CometChat.getAppId(), s2, r2, t2.getUid(), l.CometChat.getSessionId(), a2);
                  e3.setAction(N.RECEIPTS.ACTION.READ);
                  var n2 = new I.MessageReceipt();
                  if (t2.authToken && delete t2.authToken, n2.setSender(t2), n2.setReceiverType(r2), n2.setReceiver(s2), n2.setReceiptType(N.RECEIPTS.RECEIPT_TYPE.READ_RECEIPT), n2.setMessageId(i2), n2.setTimestamp(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3).toString()), e3.setMessageReceipt(n2), y.checkConnection(E2.connection)) {
                    var o2 = e3.getAsString();
                    E2.connection.send(o2);
                  }
                } else C.Logger.log("no logged-in user", "null");
              }, function(t2) {
                C.Logger.log("error in fetching logged-in user", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: markAsRead", t2);
            }
          }, e2.prototype.markAsDelivered = function(s2, r2, i2, a2) {
            var E2 = this;
            try {
              l.CometChat.getMode();
              l.CometChat.getLoggedinUser().then(function(t2) {
                if (t2) {
                  var e3 = new h.CometChatReceiptEvent(l.CometChat.getAppId(), s2, r2, t2.getUid(), l.CometChat.getSessionId(), a2);
                  e3.setAction(N.RECEIPTS.ACTION.DELIVERED);
                  var n2 = new I.MessageReceipt();
                  if (t2.authToken && delete t2.authToken, n2.setSender(t2), n2.setReceiverType(r2), n2.setReceiver(s2), n2.setReceiptType(N.RECEIPTS.RECEIPT_TYPE.DELIVERY_RECEIPT), n2.setMessageId(i2), n2.setTimestamp(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3).toString()), e3.setMessageReceipt(n2), y.checkConnection(E2.connection)) {
                    var o2 = e3.getAsString();
                    E2.connection.send(o2);
                  }
                } else C.Logger.log("no logged-in user", "null");
              }, function(t2) {
                C.Logger.log("error in fetching logged-in user", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: markAsDelivered", t2);
            }
          }, e2.prototype.sendTransientMessage = function(s2, r2, i2) {
            var a2 = this;
            try {
              l.CometChat.getLoggedinUser().then(function(t2) {
                if (t2) {
                  var e3 = new f.TransientMessage(s2, r2, i2);
                  t2.authToken && delete t2.authToken, e3.setSender(t2);
                  var n2 = new A.CometChatTransientEvent(l.CometChat.getAppId(), s2, r2, t2.getUid(), l.CometChat.getSessionId());
                  if (n2.setTransientMessage(e3), y.checkConnection(a2.connection)) {
                    var o2 = n2.getAsString();
                    a2.connection.send(o2);
                  }
                } else C.Logger.log("no logged-in user", "null");
              }, function(t2) {
                C.Logger.log("error in fetching logged-in user", t2);
              });
            } catch (t2) {
              C.Logger.error("WSConnectionHelper: sendTransientMessage", t2);
            }
          }, e2.prototype.publishTypingIndicator = function(t2) {
            try {
              var e3 = t2.getTypingIndicator();
              switch (t2.getAction()) {
                case N.TYPING_INDICATOR.ACTION.STARTED:
                  m.messageHandlers.map(function(t3) {
                    t3._eventListener.onTypingStarted && t3._eventListener.onTypingStarted(e3);
                  }), i.TypingNotificationController.addIncomingTypingStarted(e3);
                  break;
                case N.TYPING_INDICATOR.ACTION.ENDED:
                  m.messageHandlers.map(function(t3) {
                    t3._eventListener.onTypingEnded && t3._eventListener.onTypingEnded(e3);
                  }), i.TypingNotificationController.removeIncomingTypingStarted(e3);
              }
            } catch (t3) {
              C.Logger.error("WSHelper: publishTypingIndicator", t3);
            }
          }, e2.prototype.publishReceipts = function(t2) {
            try {
              var e3 = t2.getMessageReceipt();
              switch (t2.getAction()) {
                case N.RECEIPTS.ACTION.DELIVERED:
                  m.messageHandlers.map(function(t3) {
                    t3._eventListener.onMessagesDelivered && t3._eventListener.onMessagesDelivered(e3);
                  });
                  break;
                case N.RECEIPTS.ACTION.READ:
                  m.messageHandlers.map(function(t3) {
                    t3._eventListener.onMessagesRead && t3._eventListener.onMessagesRead(e3);
                  });
              }
            } catch (t3) {
              C.Logger.error("WSHelper: publishReceipts", t3);
            }
          }, e2.prototype.publishPresence = function(t2) {
            try {
              var e3 = t2.getUser();
              switch (e3.setLastActiveAt(t2.getTimestamp()), t2.getAction()) {
                case N.PRESENCE.ACTION.ONLINE:
                case N.PRESENCE.ACTION.AVAILABLE:
                  e3.setStatus(p.PresenceConstatnts.STATUS.ONLINE), m.userHandlers.map(function(t3) {
                    C.isFalsy(t3._eventListener.onUserOnline) || t3._eventListener.onUserOnline(e3);
                  });
                  break;
                case N.PRESENCE.ACTION.OFFLINE:
                  e3.setStatus(p.PresenceConstatnts.STATUS.OFFLINE), m.userHandlers.map(function(t3) {
                    C.isFalsy(t3._eventListener.onUserOffline) || t3._eventListener.onUserOffline(e3);
                  });
              }
            } catch (t3) {
              C.Logger.error("WSHelper: publishPresence", t3);
            }
          }, e2.prototype.publishMessages = function(t2) {
            try {
              var e3 = t2.getMessage();
              e3 && e3.getId() && c.MessageListnerMaping.getInstance().set("all", e3.getId()), e3 instanceof S.Call ? this.publishCallMessage(e3) : e3 instanceof u.Action ? this.publishActionMessage(e3) : this.publishMessage(e3);
            } catch (t3) {
              C.Logger.error("WSHelper: publishMessages", t3);
            }
          }, e2.prototype.publishMessage = function(n2) {
            try {
              m.messageHandlers.map(function(t2) {
                if (t2._eventListener) {
                  var e3 = n2;
                  switch (e3.getType()) {
                    case p.MessageConstatnts.TYPE.TEXT:
                      C.isFalsy(t2._eventListener.onTextMessageReceived) || t2._eventListener.onTextMessageReceived(n2);
                      break;
                    case p.MessageConstatnts.TYPE.CUSTOM:
                      C.isFalsy(t2._eventListener.onCustomMessageReceived) || t2._eventListener.onCustomMessageReceived(n2);
                      break;
                    default:
                      e3.getCategory() == p.MessageCategory.CUSTOM ? C.isFalsy(t2._eventListener.onCustomMessageReceived) || t2._eventListener.onCustomMessageReceived(n2) : C.isFalsy(t2._eventListener.onMediaMessageReceived) || t2._eventListener.onMediaMessageReceived(n2);
                  }
                }
              });
            } catch (t2) {
              C.Logger.error("WSHelper: publishMessage", t2);
            }
          }, e2.prototype.publishCallMessage = function(e3) {
            try {
              var n2 = r.CallController.getInstance().getActiveCall();
              switch (e3.getStatus()) {
                case p.CallConstants.CALL_STATUS.INITIATED:
                  e3.getReceiverType() == p.CallConstants.RECEIVER_TYPE_GROUP ? m.callHandlers.map(function(t2) {
                    e3.getCallInitiator().getUid().toLocaleLowerCase() != l.CometChat.user.getUid().toLocaleLowerCase() && (C.isFalsy(t2._eventListener.onIncomingCallReceived) || t2._eventListener.onIncomingCallReceived(e3));
                  }) : m.callHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onIncomingCallReceived) || t2._eventListener.onIncomingCallReceived(e3);
                  });
                  break;
                case p.CallConstants.CALL_STATUS.ONGOING:
                  e3.getReceiverType() == p.CallConstants.RECEIVER_TYPE_GROUP ? e3.getCallInitiator().getUid().toLocaleLowerCase() == l.CometChat.user.getUid().toLocaleLowerCase() && m.callHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onOutgoingCallAccepted) || t2._eventListener.onOutgoingCallAccepted(e3);
                  }) : m.callHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onOutgoingCallAccepted) || t2._eventListener.onOutgoingCallAccepted(e3);
                  });
                  break;
                case p.CallConstants.CALL_STATUS.UNANSWERED:
                  if (e3.getCallInitiator().getUid().toLocaleLowerCase() == l.CometChat.user.getUid().toLocaleLowerCase()) m.callHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onOutgoingCallRejected) || t2._eventListener.onOutgoingCallRejected(e3);
                  });
                  else {
                    if (null !== n2 && n2.getSessionId() === e3.getSessionId()) try {
                      r.CallController.getInstance().endCall();
                    } catch (t2) {
                      C.Logger.error("CallError", t2);
                    }
                    m.callHandlers.map(function(t2) {
                      C.isFalsy(t2._eventListener.onIncomingCallCancelled) || t2._eventListener.onIncomingCallCancelled(e3);
                    });
                  }
                  break;
                case p.CallConstants.CALL_STATUS.REJECTED:
                  if (e3.getReceiverType() == p.CallConstants.RECEIVER_TYPE_GROUP) e3.getCallInitiator().getUid().toLocaleLowerCase() == l.CometChat.user.getUid().toLocaleLowerCase() && m.callHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onOutgoingCallRejected) || t2._eventListener.onOutgoingCallRejected(e3);
                  });
                  else {
                    if (null !== n2 && n2.getSessionId() === e3.getSessionId()) try {
                      r.CallController.getInstance().endCall();
                    } catch (t2) {
                      C.Logger.error("CallError", t2);
                    }
                    m.callHandlers.map(function(t2) {
                      C.isFalsy(t2._eventListener.onOutgoingCallRejected) || t2._eventListener.onOutgoingCallRejected(e3);
                    });
                  }
                  break;
                case p.CallConstants.CALL_STATUS.BUSY:
                  e3.getReceiverType() == p.CallConstants.RECEIVER_TYPE_GROUP ? e3.getCallInitiator().getUid().toLocaleLowerCase() == l.CometChat.user.getUid().toLocaleLowerCase() && m.callHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onOutgoingCallRejected) || t2._eventListener.onOutgoingCallRejected(e3);
                  }) : m.callHandlers.map(function(t2) {
                    if (null !== n2 && n2.getSessionId() === e3.getSessionId()) try {
                      r.CallController.getInstance().endCall();
                    } catch (t3) {
                      C.Logger.error("CallError", t3);
                    }
                    C.isFalsy(t2._eventListener.onOutgoingCallRejected) || t2._eventListener.onOutgoingCallRejected(e3);
                  });
                  break;
                case p.CallConstants.CALL_STATUS.CANCELLED:
                  if (m.callHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onIncomingCallCancelled) || t2._eventListener.onIncomingCallCancelled(e3);
                  }), null !== n2 && n2.getSessionId() === e3.getSessionId()) try {
                    r.CallController.getInstance().endCall();
                  } catch (t2) {
                    C.Logger.error("CallError", t2);
                  }
                  break;
                case p.CallConstants.CALL_STATUS.ENDED:
                  if (m.callHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onCallEndedMessageReceived) || t2._eventListener.onCallEndedMessageReceived(e3);
                  }), r.CallController.getInstance().getCallListner() && r.CallController.getInstance().getCallListner()._eventListener.onCallEnded(e3), null !== n2 && n2.getSessionId() === e3.getSessionId()) try {
                    r.CallController.getInstance().endCall();
                  } catch (t2) {
                    C.Logger.error("CallError", t2);
                  }
                  break;
                default:
                  C.Logger.log("WSHelper: publishCallMessage :: unknown status", e3);
              }
            } catch (t2) {
              C.Logger.error("WSHelper: publishCallMessage", t2);
            }
          }, e2.prototype.publishActionMessage = function(e3) {
            try {
              switch (e3.getAction()) {
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_JOINED:
                  m.groupHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onGroupMemberJoined) || t2._eventListener.onGroupMemberJoined(e3, e3.getActionBy(), e3.getActionFor());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_INVITED:
                  m.groupHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onGroupMemberJoined) || t2._eventListener.onGroupMemberJoined(e3, e3.getActionBy(), e3.getActionFor());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_LEFT:
                  m.groupHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onGroupMemberLeft) || t2._eventListener.onGroupMemberLeft(e3, e3.getActionBy(), e3.getActionFor());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_BANNED:
                  m.groupHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onGroupMemberBanned) || t2._eventListener.onGroupMemberBanned(e3, e3.getActionOn(), e3.getActionBy(), e3.getActionFor());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_KICKED:
                  m.groupHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onGroupMemberKicked) || t2._eventListener.onGroupMemberKicked(e3, e3.getActionOn(), e3.getActionBy(), e3.getActionFor());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_UNBANNED:
                  m.groupHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onGroupMemberUnbanned) || t2._eventListener.onGroupMemberUnbanned(e3, e3.getActionOn(), e3.getActionBy(), e3.getActionFor());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_SCOPE_CHANGED:
                  m.groupHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onGroupMemberScopeChanged) || t2._eventListener.onGroupMemberScopeChanged(e3, e3.getActionOn(), e3.getNewScope(), e3.getOldScope(), e3.getActionFor());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MESSAGE_EDITED:
                  m.messageHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onMessageEdited) || t2._eventListener.onMessageEdited(e3.getActionOn());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MESSAGE_DELETED:
                  m.messageHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onMessageDeleted) || t2._eventListener.onMessageDeleted(e3.getActionOn());
                  });
                  break;
                case p.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_ADDED:
                  m.groupHandlers.map(function(t2) {
                    C.isFalsy(t2._eventListener.onGroupMemberAddedToGroup) || t2._eventListener.onGroupMemberAddedToGroup(e3, e3.getActionOn(), e3.getActionBy(), e3.getActionFor());
                  });
                  break;
                default:
                  C.Logger.log("WSHelper: publishActionMessage :: unknown action", e3);
              }
            } catch (t2) {
              C.Logger.error("WSHelper: publishActionMessage", t2);
            }
          }, e2.prototype.publishTransientMessage = function(t2) {
            try {
              var e3 = t2.getTransientMessage();
              m.messageHandlers.map(function(t3) {
                t3._eventListener.onTransientMessageReceived && t3._eventListener.onTransientMessageReceived(e3);
              });
            } catch (t3) {
              C.Logger.error("WSHelper: publishTransientMessage", t3);
            }
          }, e2.prototype.getCometChatEventFromMessage = function(t2) {
            try {
              if (t2.hasOwnProperty(N.KEYS.TYPE)) switch (t2.type) {
                case N.TYPING_INDICATOR.TYPE:
                  return R.CometChatTypingEvent.getTypingEventFromJSON(t2);
                case N.RECEIPTS.TYPE:
                  return h.CometChatReceiptEvent.getReceiptEventFromJSON(t2);
                case N.PRESENCE.TYPE:
                  return g.CometChatPresenceEvent.getPresenceEventFromJSON(t2);
                case N.MESSAGE.TYPE:
                  return d.CometChatMessageEvent.getMessageEventFromJSON(t2);
                case N.AUTH.TYPE:
                  return T.CometChatAuthEvent.getAuthEventFromJSON(t2);
                case N.TRANSIENT_MESSAGE.TYPE:
                  return A.CometChatTransientEvent.getTransientEventFromJSON(t2);
              }
            } catch (t3) {
              C.Logger.error("WSConnectionHelper: getCometChatEventFromMessage", t3);
            }
          }, e2.wsConnectionHelper = new e2(), e2;
        }();
        e.WSConnectionHelper = L;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.CometChatAuthEvent = void 0;
        var S = n(5), r = function(i) {
          function u(t2, e2, n2, o2, s2) {
            var r2 = i.call(this, t2, e2, n2, o2, s2) || this;
            return r2.setType(S.AUTH.TYPE), r2;
          }
          return s(u, i), u.prototype.getStatus = function() {
            return this.status;
          }, u.prototype.setStatus = function(t2) {
            this.status = t2;
          }, u.prototype.getCode = function() {
            return this.code;
          }, u.prototype.setCode = function(t2) {
            this.code = t2;
          }, u.prototype.setAuth = function(t2) {
            this.auth = t2;
          }, u.prototype.getAuth = function() {
            return this.auth;
          }, u.prototype.setPresenceSubscription = function(t2) {
            this.presenceSubscription = t2;
          }, u.prototype.getPresenceSubscription = function() {
            return this.presenceSubscription;
          }, u.prototype.setDeviceId = function(t2) {
            this.deviceId = t2;
          }, u.prototype.getdeviceId = function() {
            return this.deviceId;
          }, u.prototype.setExtraParmaeters = function(t2) {
            this.params = t2;
          }, u.prototype.getExtraParameters = function() {
            return this.params;
          }, u.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, u.prototype.getAsJSONObject = function() {
            var t2 = this.getCometChatEventJSON(), e2 = {};
            return e2[S.KEYS.AUTH] = this.auth, e2[S.KEYS.DEVICE_ID] = this.deviceId, e2[S.KEYS.PRESENCE_SUBSCRIPTION] = this.presenceSubscription, e2[S.KEYS.PARAMS] = this.params, t2[S.KEYS.BODY] = e2, t2;
          }, u.getAuthEventFromJSON = function(t2) {
            var e2 = t2[S.KEYS.APP_ID], n2 = t2[S.KEYS.RECEIVER], o2 = t2[S.KEYS.RECEIVER_TYPE], s2 = t2[S.KEYS.DEVICE_ID], r2 = t2[S.KEYS.SENDER], i2 = t2[S.KEYS.BODY], a = i2[S.KEYS.STATUS], E = i2[S.KEYS.CODE], c = new u(e2, n2, o2, r2, s2);
            return c.setStatus(a), c.setCode(E), c;
          }, u;
        }(n(9).CometChatEvent);
        e.CometChatAuthEvent = r;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.CometChatMessageEvent = void 0;
        var u = n(10), S = n(5), r = function(i) {
          function c(t2, e2, n2, o2, s2) {
            var r2 = i.call(this, t2, e2, n2, o2, s2) || this;
            return r2.setType(S.MESSAGE.TYPE), r2;
          }
          return s(c, i), c.prototype.getMessage = function() {
            return this.message;
          }, c.prototype.setMessage = function(t2) {
            this.message = t2;
          }, c.getMessageEventFromJSON = function(t2) {
            var e2 = t2[S.KEYS.APP_ID], n2 = t2[S.KEYS.RECEIVER], o2 = t2[S.KEYS.RECEIVER_TYPE], s2 = t2[S.KEYS.DEVICE_ID], r2 = t2[S.KEYS.SENDER], i2 = t2[S.KEYS.BODY], a = new c(e2, n2, o2, r2, s2), E = u.MessageController.trasformJSONMessge(i2);
            return a.setMessage(E), a;
          }, c;
        }(n(9).CometChatEvent);
        e.CometChatMessageEvent = r;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.CometChatPingEvent = void 0;
        var i = n(5), r = function(r2) {
          function t2(t3, e2, n2, o2, s2) {
            return r2.call(this, t3, e2, n2, o2, s2) || this;
          }
          return s(t2, r2), t2.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, t2.prototype.getAsJSONObject = function() {
            var t3 = {};
            return t3[i.KEYS.ACTION] = i.KEYS.PING, t3[i.KEYS.ACK] = "true", t3;
          }, t2;
        }(n(9).CometChatEvent);
        e.CometChatPingEvent = r;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.CometChatPresenceEvent = void 0;
        var u = n(5), r = n(9), S = n(4), i = function(i2) {
          function c(t2, e2, n2, o2, s2) {
            var r2 = i2.call(this, t2, e2, n2, o2, s2) || this;
            return r2.setType(u.PRESENCE.TYPE), r2;
          }
          return s(c, i2), c.prototype.getAction = function() {
            return this.action;
          }, c.prototype.setAction = function(t2) {
            this.action = t2;
          }, c.prototype.getUser = function() {
            return this.user;
          }, c.prototype.setUser = function(t2) {
            this.user = t2;
          }, c.prototype.getTimestamp = function() {
            return this.timestamp;
          }, c.prototype.setTimestamp = function(t2) {
            this.timestamp = t2;
          }, c.getPresenceEventFromJSON = function(t2) {
            var e2 = t2[u.KEYS.APP_ID], n2 = t2[u.KEYS.DEVICE_ID], o2 = t2[u.KEYS.SENDER], s2 = t2[u.KEYS.BODY], r2 = s2[u.KEYS.ACTION], i3 = s2[u.KEYS.USER], a = s2[u.KEYS.TIMESTAMP], E = new c(e2, "", "", o2, n2);
            return E.setAction(r2), E.setUser(new S.User(i3)), E.setTimestamp(a), E;
          }, c;
        }(r.CometChatEvent);
        e.CometChatPresenceEvent = i;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.CometChatReceiptEvent = void 0;
        var C = n(5), r = n(9), T = n(22), d = n(4), i = function(a) {
          function p(t2, e2, n2, o2, s2, r2) {
            var i2 = a.call(this, t2, e2, n2, o2, s2, r2) || this;
            return i2.setType(C.RECEIPTS.TYPE), i2;
          }
          return s(p, a), p.prototype.getAction = function() {
            return this.action;
          }, p.prototype.setAction = function(t2) {
            this.action = t2;
          }, p.prototype.getMessageReceipt = function() {
            return this.receipt;
          }, p.prototype.setMessageReceipt = function(t2) {
            this.receipt = t2;
          }, p.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, p.prototype.getAsJSONObject = function() {
            var t2 = this.getCometChatEventJSON(), e2 = {};
            return e2[C.KEYS.ACTION] = this.action, e2[C.KEYS.MESSAGE_ID] = this.receipt.getMessageId(), e2[C.KEYS.USER] = this.receipt.getSender(), t2[C.KEYS.BODY] = e2, t2;
          }, p.getReceiptEventFromJSON = function(t2) {
            var e2 = t2[C.KEYS.APP_ID], n2 = t2[C.KEYS.RECEIVER], o2 = t2[C.KEYS.RECEIVER_TYPE], s2 = t2[C.KEYS.DEVICE_ID], r2 = t2[C.KEYS.SENDER], i2 = t2[C.KEYS.BODY], a2 = i2[C.KEYS.ACTION], E = i2[C.KEYS.USER], c = i2[C.KEYS.MESSAGE_ID], u = i2[C.KEYS.TIMESTAMP], S = new p(e2, n2, o2, r2, s2);
            S.setAction(a2);
            var l = new T.MessageReceipt();
            return l.setSender(new d.User(E)), l.setReceiverType(o2), l.setReceiver(n2), a2 === C.RECEIPTS.ACTION.DELIVERED && (l.setReceiptType(C.RECEIPTS.RECEIPT_TYPE.DELIVERY_RECEIPT), l.setDeliveredAt(u)), a2 === C.RECEIPTS.ACTION.READ && (l.setReceiptType(C.RECEIPTS.RECEIPT_TYPE.READ_RECEIPT), l.setReadAt(u)), l.setMessageId(c.toString()), l.setTimestamp(u), S.setMessageReceipt(l), S;
          }, p;
        }(r.CometChatEvent);
        e.CometChatReceiptEvent = i;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.CometChatTransientEvent = void 0;
        var l = n(5), r = n(9), p = n(27), C = n(4), i = function(i2) {
          function S(t2, e2, n2, o2, s2) {
            var r2 = i2.call(this, t2, e2, n2, o2, s2) || this;
            return r2.setType(l.TRANSIENT_MESSAGE.TYPE), r2;
          }
          return s(S, i2), S.prototype.getTransientMessage = function() {
            return this.transientMessage;
          }, S.prototype.setTransientMessage = function(t2) {
            this.transientMessage = t2;
          }, S.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, S.prototype.getAsJSONObject = function() {
            var t2 = this.getCometChatEventJSON(), e2 = {};
            return e2[l.KEYS.USER] = this.transientMessage.getSender(), this.transientMessage.getData() && (e2[l.KEYS.DATA] = this.transientMessage.getData()), t2[l.KEYS.BODY] = e2, t2;
          }, S.getTransientEventFromJSON = function(t2) {
            var e2 = t2[l.KEYS.APP_ID], n2 = t2[l.KEYS.RECEIVER], o2 = t2[l.KEYS.RECEIVER_TYPE], s2 = t2[l.KEYS.DEVICE_ID], r2 = t2[l.KEYS.SENDER], i3 = t2[l.KEYS.BODY], a = i3[l.KEYS.USER], E = i3[l.KEYS.DATA], c = new S(e2, n2, o2, r2, s2), u = new p.TransientMessage(n2, o2, E);
            return u.setSender(new C.User(a)), i3.hasOwnProperty(l.KEYS.DATA) && i3[l.KEYS.DATA] && u.setData(E), c.setTransientMessage(u), c;
          }, S;
        }(r.CometChatEvent);
        e.CometChatTransientEvent = i;
      }, function(t, e, n) {
        "use strict";
        var o, s = this && this.__extends || (o = function(t2, e2) {
          return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        }, function(t2, e2) {
          function n2() {
            this.constructor = t2;
          }
          o(t2, e2), t2.prototype = null === e2 ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
        });
        e.__esModule = true, e.CometChatTypingEvent = void 0;
        var p = n(5), r = n(9), C = n(26), T = n(4), i = function(i2) {
          function l(t2, e2, n2, o2, s2) {
            var r2 = i2.call(this, t2, e2, n2, o2, s2) || this;
            return r2.setType(p.TYPING_INDICATOR.TYPE), r2;
          }
          return s(l, i2), l.prototype.getAction = function() {
            return this.action;
          }, l.prototype.setAction = function(t2) {
            this.action = t2;
          }, l.prototype.getTypingIndicator = function() {
            return this.typingIndicator;
          }, l.prototype.setTypingIndicator = function(t2) {
            this.typingIndicator = t2;
          }, l.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, l.prototype.getAsJSONObject = function() {
            var t2 = this.getCometChatEventJSON(), e2 = {};
            return e2[p.KEYS.ACTION] = this.action, e2[p.KEYS.USER] = this.typingIndicator.getSender(), this.typingIndicator.getMetadata() && (e2[p.KEYS.METADATA] = this.typingIndicator.getMetadata()), t2[p.KEYS.BODY] = e2, t2;
          }, l.getTypingEventFromJSON = function(t2) {
            var e2 = t2[p.KEYS.APP_ID], n2 = t2[p.KEYS.RECEIVER], o2 = t2[p.KEYS.RECEIVER_TYPE], s2 = t2[p.KEYS.DEVICE_ID], r2 = t2[p.KEYS.SENDER], i3 = t2[p.KEYS.BODY], a = i3[p.KEYS.ACTION], E = i3[p.KEYS.USER], c = i3[p.KEYS.METADATA], u = new l(e2, n2, o2, r2, s2);
            u.setAction(a);
            var S = new C.TypingIndicator(n2, o2);
            return S.setSender(new T.User(E)), i3.hasOwnProperty(p.KEYS.METADATA) && i3[p.KEYS.METADATA] && S.setMetadata(c), u.setTypingIndicator(S), u;
          }, l;
        }(r.CometChatEvent);
        e.CometChatTypingEvent = i;
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.getWSURL = e.stringifyMessage = e.checkConnection = void 0;
        var o = n(1), s = n(0), r = n(5);
        e.checkConnection = function(t2) {
          return t2 && t2.readyState === r.READY_STATE.OPEN;
        }, e.stringifyMessage = function(t2) {
          return JSON.stringify(t2);
        }, e.getWSURL = function() {
          return new Promise(function(n2, t2) {
            s.getAppSettings().then(function(t3) {
              var e2 = r.WS.protocol + s.getChatHost(t3) + ":" + t3[o.APP_SETTINGS.KEYS.CHAT_WSS_PORT];
              n2(e2);
            }, function(t3) {
              s.Logger.error("WSHelper :: getWSURL", t3);
            });
          });
        };
      }, function(t, e, n) {
        "use strict";
        e.__esModule = true, e.CCExtension = void 0;
        var o = n(0), s = function() {
          function t2(t3) {
            this.id = "", this.name = "", t3 && (o.isFalsy(t3.id) || (this.id = t3.id), o.isFalsy(t3.name) || (this.name = t3.name));
          }
          return t2.prototype.getId = function() {
            return this.id;
          }, t2.prototype.getName = function() {
            return this.name;
          }, t2;
        }();
        e.CCExtension = s;
      }, function(t, e, n) {
        var i = n(64), a = n(65);
        t.exports = function(t2, e2, n2) {
          var o = e2 && n2 || 0;
          "string" == typeof t2 && (e2 = "binary" === t2 ? new Array(16) : null, t2 = null);
          var s = (t2 = t2 || {}).random || (t2.rng || i)();
          if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e2) for (var r = 0; r < 16; ++r) e2[o + r] = s[r];
          return e2 || a(s);
        };
      }, function(t, e) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
          var o = new Uint8Array(16);
          t.exports = function() {
            return n(o), o;
          };
        } else {
          var s = new Array(16);
          t.exports = function() {
            for (var t2, e2 = 0; e2 < 16; e2++) 0 == (3 & e2) && (t2 = 4294967296 * Math.random()), s[e2] = t2 >>> ((3 & e2) << 3) & 255;
            return s;
          };
        }
      }, function(t, e) {
        for (var s = [], n = 0; n < 256; ++n) s[n] = (n + 256).toString(16).substr(1);
        t.exports = function(t2, e2) {
          var n2 = e2 || 0, o = s;
          return [o[t2[n2++]], o[t2[n2++]], o[t2[n2++]], o[t2[n2++]], "-", o[t2[n2++]], o[t2[n2++]], "-", o[t2[n2++]], o[t2[n2++]], "-", o[t2[n2++]], o[t2[n2++]], "-", o[t2[n2++]], o[t2[n2++]], o[t2[n2++]], o[t2[n2++]], o[t2[n2++]], o[t2[n2++]]].join("");
        };
      }]);
    });
  }
});
export default require_CometChat();
//# sourceMappingURL=@cometchat-pro_chat.js.map
