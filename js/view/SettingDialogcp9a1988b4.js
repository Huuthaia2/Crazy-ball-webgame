var touch,__extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function c(){this.constructor=t}if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n),t.prototype=null===n?Object.create(n):(c.prototype=n.prototype,new c)}}();!function(e){var t=function(t){function n(n){var c=t.call(this)||this;return c._main=null,c._main=n,c.cbMusic.selected=e.GameData.instance.isMusicOn,c.cbSound.selected=e.GameData.instance.isSoundOn,c.cbVibrate.selected=e.GameData.instance.isVibrateOn,c.cbMusic.clickHandler=Laya.Handler.create(c,c.onClickMusic,null,!1),c.cbSound.clickHandler=Laya.Handler.create(c,c.onClickSound,null,!1),c.cbVibrate.clickHandler=Laya.Handler.create(c,c.onClickVibrate,null,!1),c.btnClose.clickHandler=Laya.Handler.create(c,c.onClickClose,null,!1),c}return __extends(n,t),n.prototype.destroy=function(){null!=this.cbMusic.clickHandler&&(this.cbMusic.clickHandler.recover(),this.cbMusic.clickHandler=null),null!=this.cbSound.clickHandler&&(this.cbSound.clickHandler.recover(),this.cbSound.clickHandler=null),null!=this.cbVibrate.clickHandler&&(this.cbVibrate.clickHandler.recover(),this.cbVibrate.clickHandler=null),null!=this.btnClose.clickHandler&&(this.btnClose.clickHandler.recover(),this.btnClose.clickHandler=null),t.prototype.destroy.call(this)},n.prototype.onClickMusic=function(){e.SoundManager.setMusicVolume(this.cbMusic.selected?1:0),e.GameData.instance.isMusicOn=this.cbMusic.selected},n.prototype.onClickSound=function(){e.SoundManager.setSoundVolume(this.cbSound.selected?1:0),e.GameData.instance.isSoundOn=this.cbSound.selected},n.prototype.onClickVibrate=function(){e.GameData.instance.isVibrateOn=this.cbVibrate.selected},n.prototype.onClickClose=function(){this.close(),SdkHelper.SdkUtils.setAdflyState(1)},n}(ui.SettingDialogUI);e.SettingDialog=t}(touch||(touch={}));