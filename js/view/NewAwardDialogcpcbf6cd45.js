var touch,__extends=this&&this.__extends||function(){var t=function(i,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])})(i,n)};return function(i,n){function e(){this.constructor=i}if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(i,n),i.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();!function(t){var i;!function(t){t[t.DIAMOND=0]="DIAMOND",t[t.SKIN=1]="SKIN"}(i=t.NewAwardDialogType||(t.NewAwardDialogType={}));var n=function(t){function n(){var i=t.call(this)||this;return i._closeHandler=null,i.btnClaimNormal.clickHandler=Laya.Handler.create(i,i.onClaimNormal,null,!1),i.btnClaimExtra.clickHandler=Laya.Handler.create(i,i.onClaimExtra,null,!1),i.btnChangeSkin.clickHandler=Laya.Handler.create(i,i.onClaimNormal,null,!1),i}return __extends(n,t),n.prototype.setCloseHandler=function(t){this._closeHandler=t},n.prototype.setDisplayOption=function(t){if(this.btnClaimNormal.visible=!1,this.btnClaimExtra.visible=!1,this.boxDiamond.visible=!1,this.btnChangeSkin.visible=!1,this.txtTitle.visible=!1,this.imgTitle.visible=!0,t.type==i.DIAMOND)this.imgTitle.skin="v1.1/ui/txt_congratulations.png",this.btnClaimNormal.visible=!0,t.showAdsButton?(this.btnClaimExtra.visible=!0,this.btnClaimExtra.x=272,this.btnClaimNormal.x=524):(this.btnClaimExtra.visible=!1,this.btnClaimNormal.x=375),this.boxDiamond.visible=!0,this.txtDiamond.text="x"+t.value.toString(),this.imgAward.skin="v1.1/ui/image_pile_diamonds.png";else if(t.type==i.SKIN){this.imgTitle.skin="v1.1/ui/txt_newskin.png",this.btnChangeSkin.visible=!0;var n=t.value;this.imgAward.skin="index/skin"+n+".png"}this.imgAward.centerX=0,this.imgAward.centerY=0},n.popup=function(t,i){var e=new n;Laya.stage.addChild(e),e.setCloseHandler(i),e.setDisplayOption(t),e.popup()},n.prototype._open=function(i,n,e){this._parent&&(this.width=this._parent.width,this.height=this._parent.height),t.prototype._open.call(this,i,n,e)},n.showDiamondAwards=function(t,e,o){n.popup({type:i.DIAMOND,showAdsButton:e,value:t},o)},n.showSkinAwards=function(t,e){n.popup({type:i.SKIN,value:t},e)},n.prototype.onClaimNormal=function(){this.close(),this._closeHandler&&this._closeHandler(!1)},n.prototype.onClaimExtra=function(){this.close(),this._closeHandler&&this._closeHandler(!0)},n}(ui.NewAwardDialogUI);t.NewAwardDialog=n}(touch||(touch={}));