var touch,__extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(e,o)};return function(e,o){function i(){this.constructor=e}if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();!function(t){var e;!function(t){t[t.REVIVE=0]="REVIVE",t[t.NO_REVIVE=1]="NO_REVIVE"}(e=t.ReviveChoice||(t.ReviveChoice={}));var o=function(o){function i(){var t=o.call(this)||this;return t._reviveCountdown=0,t._choice=0,t.btnNoRevive.clickHandler=Laya.Handler.create(t,t.onNoRevive,null,!1),t.btnRevive.clickHandler=Laya.Handler.create(t,t.onRevive,null,!1),t.txtScore.text=GameBaseData.score.toFixed(0),t}return __extends(i,o),i.prototype._open=function(t,e,i){this._parent&&(this.width=this._parent.width,this.height=this._parent.height),o.prototype._open.call(this,t,e,i)},i.prototype.onTimer=function(){this._reviveCountdown--,this._updateCountDownDisplay(),this._reviveCountdown<=0&&(this.stopTimer(),this.onNoRevive())},i.prototype.stopTimer=function(){this.timer.clearAll(this)},i.prototype.destroy=function(t){o.prototype.destroy.call(this,t),console.info("Dialog Destroyed")},i.prototype._updateCountDownDisplay=function(){this.txtCountdown.text=this._reviveCountdown.toString()},i.prototype.onRevive=function(){this.stopTimer(),this._choice=e.REVIVE,this._closeHandler&&this._closeHandler(this._choice),this.close()},i.prototype.onNoRevive=function(){this.stopTimer(),this._choice=e.NO_REVIVE,this._closeHandler&&this._closeHandler(this._choice),this.close()},Object.defineProperty(i.prototype,"closeHanlder",{set:function(t){this._closeHandler=t},enumerable:!1,configurable:!0}),i.prototype.startCountDown=function(){this._reviveCountdown=t.GameConfig.REVIVE_COUNTDOWN,this._updateCountDownDisplay(),this.timer.loop(1e3,this,this.onTimer),this.updateDisplay()},i.prototype.updateDisplay=function(){this.txtScore.text=GameBaseData.score.toFixed(0)},i}(ui.ReviveDialogUI);t.GameReviveDialog=o}(touch||(touch={}));