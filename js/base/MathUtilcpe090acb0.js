var touch;!function(t){var r=function(){function t(){}return t.randomInt=function(t,r){var n=r-t+1;return Math.floor(t+Math.random()*n)},t.randomNumbers=function(r,n,o){var a=[];o>n-r+1&&(o=n-r+1);for(var i=0;i<o;i++){for(var u=t.randomInt(r,n);a.indexOf(u)>=0;)u=t.randomInt(r,n);a.push(u)}return a},t.randomColor=function(){return"#"+Math.ceil(255*Math.random()).toString(16)+Math.ceil(255*Math.random()).toString(16)+Math.ceil(255*Math.random()).toString(16)},t.getColor=function(t,r,n){return"#"+Math.ceil(t).toString(16)+Math.ceil(r).toString(16)+Math.ceil(n).toString(16)},t.randomColorValue=function(){return Math.ceil(255*Math.random())},t.vec4ToHexStr=function(t){for(var r=[255*t.x,255*t.y,255*t.z,255*t.w],n="#",o=0;o<r.length;o++)n+=Math.floor(r[o]).toString(16);return n},t}();t.MathUtil=r}(touch||(touch={}));