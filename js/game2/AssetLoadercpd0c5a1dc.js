var game2;!function(t){var e=function(){function t(){this._cache=[]}return Object.defineProperty(t,"instance",{get:function(){return t._inst||(t._inst=new t),t._inst},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.loadAsync=function(t,e,n,r,a){(!n||n.length<=0)&&(n=e);var o=this.get(n);if(o||(o=this.getByUrl(e)),o)return a&&a.call(r,[o]),o;var i=t.load(e);return this._cache.push({key:n,url:e,asset:i}),a&&(t==Laya.Sprite3D?i.on(Laya.Event.HIERARCHY_LOADED,r,a,[i]):i.on(Laya.Event.LOADED,r,a,[i])),i},t.prototype.get=function(t){t.url&&(t=t.key);for(var e,n=0;n<this._cache.length;n++){var r=this._cache[n];if(r&&r.key==t){e=r.asset;break}}return e},t.prototype.getByUrl=function(t){for(var e,n=0;n<this._cache.length;n++){var r=this._cache[n];if(!r&&r.url==t){e=r.asset;break}}return e},t.prototype.loadAssetsAsync=function(t,e,n){for(var r=[],a=function(a){r.push(a),r.length==t.length&&n&&n.call(e,[r])},o=0;o<t.length;o++){var i=t[o];this.loadAsync(i.assetType,i.url,i.key,void 0,a)}},t}();t.AssetLoader=e}(game2||(game2={}));