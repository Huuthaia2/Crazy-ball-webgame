var touch,__extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();!function(e){var t=laya.maths.Point,n=function(n){function i(i){var a=n.call(this)||this;a._main=null,a._userInfoButton=null,a._onlineRemainingTime=0,a._main=i,a.btnStart.clickHandler=Laya.Handler.create(a,a.onSingleMode,null,!1),a.btnLevel.clickHandler=Laya.Handler.create(a,a.onMultiplePlayerMode,null,!1),a.btnSkin.clickHandler=Laya.Handler.create(a,a.onSkin,null,!1),a.btnSetting.clickHandler=Laya.Handler.create(a,a.onSetting,null,!1),a.btnShare.clickHandler=Laya.Handler.create(a,a.onShare,null,!1);var o=e.GameData.instance.dailyVaild,l=e.GameData.instance.dailyCount;return l=o?l:l-1,a.updateOnlineReward(),Laya.timer.loop(100,a,a.time2Loop),GameBaseData.isNative&&(a.btnSkin.pos(a.btnSkin.parent.width/2-200+a.btnSkin.width/2,a.btnSkin.y),a.btnSetting.pos(a.btnSetting.parent.width/2+200-a.btnSetting.width/2,a.btnSetting.y)),a.showPlayButtons(!1),a.showLoading(!1),SdkHelper.SdkUtils.changeAdflyPos(a.btnStart.localToGlobal(new t).y),SdkHelper.SdkUtils.setAdflyState(1),console.info("===============logSuccessLanding1=================="),SdkHelper.EventLogger.logSuccessLanding(),console.info("===============logSuccessLanding2=================="),a}return __extends(i,n),i.prototype.checkPaymentOrder=function(){var e=window.minigame;e.payments.onReady(function(){e.payments.getCatalogAsync().then(function(e){console.info("====> getCatalogAsync products: ",e)}).catch(function(e){console.error("====> getCatalogAsync error: "+e)}),e.payments.getPurchasesAsync().then(function(e){console.info("====> getPurchasesAsync products: ",e)}).catch(function(e){console.error("getPurchases error: "+e)})})},i.prototype.destroy=function(){null!=this.btnStart.clickHandler&&(this.btnStart.clickHandler.recover(),this.btnStart.clickHandler=null),null!=this.btnLevel.clickHandler&&(this.btnLevel.clickHandler.recover(),this.btnLevel.clickHandler=null),null!=this.btnSkin.clickHandler&&(this.btnSkin.clickHandler.recover(),this.btnSkin.clickHandler=null),null!=this.btnShare.clickHandler&&(this.btnShare.clickHandler.recover(),this.btnShare.clickHandler=null),null!=this._userInfoButton&&(this._userInfoButton.hide(),this._userInfoButton.destroy(),this._userInfoButton=null),Laya.timer.clear(this,this.timeLoop),Laya.timer.clear(this,this.time2Loop),this._main=null,n.prototype.destroy.call(this)},i.prototype.showPlayButtons=function(e){this.boxActions.visible=e},i.prototype.showLoading=function(e){if(this.imgLoading.visible=e,e){var t=this.imgLoading;this.imgLoading.timerLoop(50,this.imgLoading,function(){t.rotation+=30})}},i.prototype.onSingleMode=function(){MiniGameEvent.onLevelStart(0),this.onSingleModeNative(),SdkHelper.EventLogger.logPlaySingle(),SdkHelper.EventLogger.logPlaySingleWithTimes()},i.prototype._onSingleModeFB=function(){this._main.event(e.GameEvent.ENTER_SINGLE_GAME),GameBaseData.newMatch(GAME_MODE.SINGLE_PLAYER),GameBaseData.getFriendList_model1(0,null,null)},i.prototype.onSingleModeNative=function(){SdkHelper.EventLogger.logStartGameButtonClick(GAME_MODE.SINGLE_PLAYER),console.info("--------------SdkHelper.SdkUtils.setAdflyState(0)1----------------"),SdkHelper.SdkUtils.setAdflyState(0),console.info("--------------SdkHelper.SdkUtils.setAdflyState(0)2----------------"),this._onSingleModeFB()},i.prototype.onSingleModeH5=function(){var e=this;SdkHelper.MiniGameSDKHelper.isInterstitialReady()?SdkHelper.MiniGameSDKHelper.showInterstitial(function(t){e._onSingleModeFB()}):this._onSingleModeFB()},i.prototype.onMultiplePlayerMode=function(){MiniGameEvent.onLevelStart(0),this.onMultiplePlayerModeNative(),SdkHelper.EventLogger.logPlayMulti(),SdkHelper.EventLogger.logPlayMultiWithTimes()},i.prototype._onMultiplePlayerModeFB=function(){GameBaseData.newMatch(GAME_MODE.MULTIPLE_PLAYER),this._main.event(e.GameEvent.ENTER_MULTIPLE_PLAYER_GAME),GameBaseData.getFriendList(0,null,null)},i.prototype.onMultiplePlayerModeH5=function(){var e=this;SdkHelper.MiniGameSDKHelper.isInterstitialReady()?SdkHelper.MiniGameSDKHelper.showInterstitial(function(t){e._onMultiplePlayerModeFB()}):this._onMultiplePlayerModeFB()},i.prototype.onMultiplePlayerModeNative=function(){SdkHelper.EventLogger.logStartGameButtonClick(GAME_MODE.MULTIPLE_PLAYER),this._onMultiplePlayerModeFB(),SdkHelper.SdkUtils.setAdflyState(0)},i.prototype.onSkin=function(){SdkHelper.EventLogger.logSkinPageButtonClick(i.PAGE),this._main.event(e.GameEvent.OPEN_SKIN),SdkHelper.SdkUtils.setAdflyState(0)},i.prototype.onSetting=function(){this._main.event(e.GameEvent.OPEN_SETTING),SdkHelper.SdkUtils.setAdflyState(0)},i.prototype.onShare=function(){SdkHelper.EventLogger.logDailyGiftPage(i.PAGE),SdkHelper.SdkUtils.setAdflyState(0),this._main.event(e.GameEvent.OPEN_GIFT)},i.prototype.updateOnlineReward=function(){this.btnShare.visible=!0,this.imgAward.visible=!1;for(var t=e.GameData.instance.onlineIndex,n=0;n<e.GameConfig.ONLINE_GIFT.length;n++){var i=e.GameConfig.ONLINE_GIFT[n];if(!(i.index<=t)){i.time<=e.GameData.instance.onlineTime&&(this.imgAward.visible=!0);break}}e.GameData.instance.dailyVaild&&(this.imgAward.visible=!0)},i.prototype.onTweenShareBtn0=function(){Laya.Tween.clearTween(this.onTweenShareBtn0),this.btnShare.scaleX=1,this.btnShare.scaleY=1,Laya.Tween.to(this.btnShare,{scaleX:.8,scaleY:.8},500,Laya.Ease.linearIn,Laya.Handler.create(this,this.onTweenShareBtn1),0,!0,!0)},i.prototype.onTweenShareBtn1=function(){Laya.Tween.clearTween(this.onTweenShareBtn1),this.btnShare.scaleX=.8,this.btnShare.scaleY=.8,Laya.Tween.to(this.btnShare,{scaleX:1,scaleY:1},500,Laya.Ease.linearIn,Laya.Handler.create(this,this.onTweenShareBtn0),0,!0,!0)},i.prototype.timeLoop=function(){this._onlineRemainingTime--,this.tfNextRewardTime.text=e.TimeUtil.getHourMinuteSecond(1e3*this._onlineRemainingTime),this._onlineRemainingTime<=0&&(Laya.timer.clear(this,this.timeLoop),this.updateOnlineReward())},i.prototype.time2Loop=function(){this.imgSkinFlag.visible=e.GameData.instance.getNewFlag(-1)>0,this.updateOnlineReward(),e.TipDialog.canCreateShortcut&&0==e.TipDialog.homeScreenState&&this._main.event(e.GameEvent.OPEN_TIP,3)},i.PAGE="Home",i}(ui.IndexViewUI);e.IndexView=n}(touch||(touch={}));