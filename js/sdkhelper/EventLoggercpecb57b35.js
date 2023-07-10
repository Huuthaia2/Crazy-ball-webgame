var SdkHelper;!function(t){var e=function(){function e(){}return e.init=function(){if(!this._logger){var e=t.SdkUtils.isNativeMobile;console.info("==> IsNative: "+e),t.TAHelper.init(!e),this._logger=t.TAHelper,this.startTimer()}},e.startTimer=function(){Laya.timer.loop(1e3,e,e.onTimer)},e.onTimer=function(){this._timerCounter<=0&&this.logOnlineEvent(this._timerCounter),this._timerCounter++,this._timerCounter%60==0&&this.logOnlineEvent(this._timerCounter)},e.logEvent=function(t,e){this._logger.logEvent(t,e),console.info("Log Event: ",t,e)},e.startTimeEvent=function(t,e,n){this._logger.startTimeEvent(t,e,n)},e.stopTimeEvent=function(t,e){this._logger.stopTimeEvent(t,e)},e.logUIEvent=function(t,e){var n=this.EVENTS.UI+"_"+t;this.logEvent(n,e)},e.logStartGameButtonClick=function(t){this.logUIEvent("StartButton",{mode:"mode-"+t})},e.logRestartButtonClick=function(t){this.logUIEvent("RestartButton",{mode:"mode-"+t})},e.logSkinPageButtonClick=function(t){this.logUIEvent("SkinPageButton",{pos:t})},e.logDailyGiftPage=function(t){this.logUIEvent("DailyGiftPageShow",{pos:t})},e.logDailyGiftAdButtonClick=function(){this.logUIEvent("DailyGiftAdButton")},e.logAdShowEvent=function(t,e){void 0===e&&(e=!1);var n=this.EVENTS.AD+"_"+t;if(this.logEvent(n),e){this._newAdCounter++;var i=this.EVENTS.NEW_AD,o={ad:t,counter:this._newAdCounter};this.logEvent(i,o)}},e.logOnlineEvent=function(t){if(t%60==0){var e=this.EVENTS.ONLINE+"_Time";this.logEvent(e,{time:Math.floor(t/60)+" min+"})}},e.logGameStart=function(t){var e=this.EVENTS.GAME+"_T"+t;this.startTimeEvent(e,e+"_Start")},e.logGameEnd=function(t,e,n){var i=this.EVENTS.GAME+"_T"+t,o={distance:this.getDistanceValue(e),exceed:this.getExceedValue(n),distance_num:e,exceed_num:n};console.info("Game End Event: ",o),this.stopTimeEvent(i,o)},e.getDistanceValue=function(t){var e="d";return e+="_"+this.getValue(t,500)},e.getExceedValue=function(t){var e="exceed";return e+="_"+this.getValue(t,10)},e.getValue=function(t,e){var n="",i=Math.ceil(t/e);return n+=i<=0?"0":i<=8?e*(i-1)+1+"_"+e*i:9*e+1+"+"},e.logAdjustEvent=function(t){if(!GameBaseData.isNative){return window.MiniGameInfo.isAdflyCplEnable()?void(AdflyCpl.isEventInCpl(t)&&MiniGameAnalytics.onGameEvent(t)):void MiniGameAnalytics.onGameEvent(t)}var e=touch.GameData.instance.getAdjustToken(t);e.length>0?(this.logEvent(e),console.info("Log Adjust EventName =  "+t+", EventToken = "+e)):console.info(t+"'s token is not exist")},e.logSuccessLanding=function(){var t=Laya.LocalStorage.getItem(touch.EventName.SUCCESS_LANDING),e=JSON.parse(t);e&&e.isSuccess||(Laya.LocalStorage.setItem(touch.EventName.SUCCESS_LANDING,JSON.stringify({isSuccess:!0})),this.logAdjustEvent(touch.EventName.SUCCESS_LANDING))},e.logPlayMulti=function(){this.logAdjustEvent(touch.EventName.PLAY_MULTI)},e.logPlayMultiWithTimes=function(){var t=Laya.LocalStorage.getItem(touch.EventName.PLAY_MULTI_TIMES),e=JSON.parse(t);if(e){var n=e.times;n++,Laya.LocalStorage.setItem(touch.EventName.PLAY_MULTI_TIMES,JSON.stringify({times:n})),this.logAdjustEvent(touch.EventName.PLAY_MULTI+n)}else(e={}).times=1,Laya.LocalStorage.setItem(touch.EventName.PLAY_MULTI_TIMES,JSON.stringify({times:1})),this.logAdjustEvent(touch.EventName.PLAY_MULTI+"1")},e.logPlaySingle=function(){this.logAdjustEvent(touch.EventName.PLAY_SINGLE)},e.logPlaySingleWithTimes=function(){var t=Laya.LocalStorage.getItem(touch.EventName.PLAY_SINGLE_TIMES),e=JSON.parse(t);if(e){var n=e.times;n++,Laya.LocalStorage.setItem(touch.EventName.PLAY_SINGLE_TIMES,JSON.stringify({times:n})),this.logAdjustEvent(touch.EventName.PLAY_SINGLE+n)}else(e={}).times=1,Laya.LocalStorage.setItem(touch.EventName.PLAY_SINGLE_TIMES,JSON.stringify({times:1})),this.logAdjustEvent(touch.EventName.PLAY_SINGLE+"1")},e.logAwardReceive=function(){this.logAdjustEvent(touch.EventName.AWARD_RECEIVE)},e.logAwardReceiveWithTimes=function(){var t=Laya.LocalStorage.getItem(touch.EventName.AWARD_RECEIVE_TIMES),e=JSON.parse(t);if(e){var n=e.times;n++,Laya.LocalStorage.setItem(touch.EventName.AWARD_RECEIVE_TIMES,JSON.stringify({times:n})),this.logAdjustEvent(touch.EventName.AWARD_RECEIVE+n)}else(e={}).times=1,Laya.LocalStorage.setItem(touch.EventName.AWARD_RECEIVE_TIMES,JSON.stringify({times:1})),this.logAdjustEvent(touch.EventName.AWARD_RECEIVE+"1")},e.logAwardReceiveAd=function(){this.logAdjustEvent(touch.EventName.AWARD_RECEIVE_AD)},e.logAwardReceiveAdWithTimes=function(){var t=Laya.LocalStorage.getItem(touch.EventName.AWARD_RECEIVE_AD_TIMES),e=JSON.parse(t);if(e){var n=e.times;n++,Laya.LocalStorage.setItem(touch.EventName.AWARD_RECEIVE_AD_TIMES,JSON.stringify({times:n})),this.logAdjustEvent(touch.EventName.AWARD_RECEIVE_AD+n)}else(e={}).times=1,Laya.LocalStorage.setItem(touch.EventName.AWARD_RECEIVE_AD_TIMES,JSON.stringify({times:1})),this.logAdjustEvent(touch.EventName.AWARD_RECEIVE_AD+"1")},e.logAwardReceiveAdRevive=function(){this.logAdjustEvent(touch.EventName.REVIVE_AD)},e.logMoveDistance=function(t){if(void 0===t||t<=0)console.info("logMoveDistance distance is undefined or <= 0");else{var e=touch.EventName.RUN_METERS;e=e.replace("#",t.toString()),this.logAdjustEvent(e)}},e.logOverPlayer=function(t){if(void 0===t||t<=0)console.info("logOverPlayer playerNum is undefined or <= 0");else{var e=touch.EventName.SURPASS_PLAYERS;e=e.replace("#",t.toString()),this.logAdjustEvent(e)}},e.logMultiScore=function(t){if(void 0===t||t<=0)console.info("logMultiScore score is undefined or <= 0");else{var e=touch.EventName.SCORE_MULTI;e+=t,this.logAdjustEvent(e)}},e._timerCounter=0,e.EVENTS={UI:"UI",AD:"AD",NEW_AD:"NEW_AD",ONLINE:"ONLINE",GAME_START:"GAME_START",GAME_END:"GAME_END",GAME:"GAME"},e._newAdCounter=0,e}();t.EventLogger=e}(SdkHelper||(SdkHelper={}));