var game2,__extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();!function(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return __extends(n,t),n.parepare=function(){var t=new touch.CustomMaterial;t.setDiffuseTexture(e.AssetLoader.instance.get(e.GameConfig2.Assets.WHITE_CUBE_TEX)),t.setColor(new Laya.Vector4(193/255,207/255,193/255,1)),t.setFogColor(new Laya.Vector4(193/255,207/255,193/255,1));var o=new n(new Laya.BoxMesh(5,5,30));o.meshRender.material=t,n._template=o,n._material=t;for(var r=0;r<touch.GameDefine.MAX_BUILD_NUM;r++)n.create(!0).recycle()},n.create=function(e){void 0===e&&(e=!1);var t=e?null:touch.Pool.getItem(n.POOL);return t||(t=n.instantiate(n._template)),t.name=n.NODE_NAME,t},Object.defineProperty(n.prototype,"Pool",{get:function(){return n.POOL},enumerable:!1,configurable:!0}),n.POOL="building",n.NODE_NAME="building",n}(e.GameBlock);e.BuildingBlock=t}(game2||(game2={}));