var SdkHelper;!function(t){var i=function(){function t(){}return t.init=function(t){void 0===t&&(t=!1),this._fake=t,t||this.ta||(this.ta=Laya.PlatformClass.createClass("sdkhelper.GAHelper"))},t.logEvent=function(t,i){if(!this._fake&&this.ta){var e="";void 0!==i&&(e=JSON.stringify(i)),this.ta.call("logEvent",t,e)}},t.startTimeEvent=function(t,i,e){if(!this._fake&&this.ta){var a="";void 0!==e&&(a=JSON.stringify(e)),this.ta.call("startTimeEvent",t,i,a)}},t.stopTimeEvent=function(t,i){if(!this._fake&&this.ta){var e="";void 0!==i&&(e=JSON.stringify(i)),this.ta.call("stopTimeEvent",t,e)}},t._fake=!1,t}();t.TAHelper=i}(SdkHelper||(SdkHelper={}));