var game2,__extends=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();!function(t){var o=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return __extends(o,t),Object.defineProperty(o.prototype,"Pool",{get:function(){return""},enumerable:!1,configurable:!0}),o.prototype.recycle=function(){this.removeSelf(),this.Pool&&this.Pool.length>0&&touch.Pool.recover(this.Pool,this)},o.POOL="",o}(Laya.MeshSprite3D);t.GameBlock=o}(game2||(game2={}));