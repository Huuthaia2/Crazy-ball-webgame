var touch,__extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();!function(t){var e=function(t){function e(){var e=t.call(this)||this;return e._currentPage=0,e._onPageChange=null,e.on(Laya.Event.MOUSE_UP,e,e.onMouseUp),e.on(Laya.Event.MOUSE_OUT,e,e.onMouseOut),e.renderHandler=Laya.Handler.create(e,e.renderItem),e}return __extends(e,t),e.prototype.destroy=function(){this.off(Laya.Event.MOUSE_UP,this,this.onMouseUp),this.off(Laya.Event.MOUSE_OUT,this,this.onMouseOut)},e.prototype.onMouseUp=function(t){this._updatePage()},e.prototype.onMouseOut=function(t){this._updatePage()},e.prototype._updatePage=function(){this.scrollBar.stopScroll();var t=0;(this._cellOffset>0?this.totalPage+1:this.totalPage)>1&&(t=Math.ceil((this.scrollBar.value-this._cellOffset-this._cellSize/2)/this._cellSize)),this.tweenTo(t),this._currentPage=t,this._onPageChange&&this._onPageChange(t)},Object.defineProperty(e.prototype,"pageId",{get:function(){return this._currentPage},set:function(t){this._currentPage=t,this.tweenTo(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onPageChangeHandler",{get:function(){return this._onPageChange},set:function(t){this._onPageChange=t},enumerable:!1,configurable:!0}),e}(Laya.List);t.PageView=e}(touch||(touch={}));