var game2,__extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();!function(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return __extends(n,t),n.prepare=function(){var t=new touch.CustomMaterial,o=e.AssetLoader.instance.get(e.GameConfig2.Assets.PLANE_TEX.key);t.setDiffuseTexture(o),t.setHasLight(!1);var r=new n(e.AssetLoader.instance.get(e.GameConfig2.Assets.PLANE_MESH.key));r.transform.localScale=new Laya.Vector3(10,1,10),r.meshRender.sharedMaterial=t,n._template=r;for(var a=0;a<3;a++)n.create(!0).recycle()},n.create=function(e){void 0===e&&(e=!1);var t=e?null:touch.Pool.getItem(n.POOL);t?console.info("Plane: get from pool"):(console.info("Plane: create new obj"),t=n.instantiate(n._template));return t.meshRender.material.setFogColor(touch.SkinManager.fogColors[0]),t},Object.defineProperty(n.prototype,"Pool",{get:function(){return n.POOL},enumerable:!1,configurable:!0}),n.POOL="plane",n}(e.GameBlock);e.PlaneBlock=t}(game2||(game2={}));