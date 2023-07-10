var touch;!function(e){var n=function(){function n(){}return Object.defineProperty(n,"curSkinIndex",{get:function(){return n._curSkinIndex},set:function(e){n._curSkinIndex=e},enumerable:!1,configurable:!0}),n.setNextSkinIndex=function(){n.curSkinIndex=(n.curSkinIndex+1)%n.fogColors.length},n.resetSkinIndex=function(){n._curSkinIndex=e.MathUtil.randomInt(0,1)},Object.defineProperty(n,"curBgColor",{get:function(){return n.bgColors[n._curSkinIndex]},enumerable:!1,configurable:!0}),Object.defineProperty(n,"curFogColor",{get:function(){return n.fogColors[n._curSkinIndex]},enumerable:!1,configurable:!0}),n.getPlaneColor=function(e){return n.PLANE_COLORS[e]},n.getBuildingColor=function(e){return n.buildColors[e]},n.getDeadPointColor=function(e){return n.DEAD_COLORS[e]},n.getSkinsByUnlockCondition=function(a){for(var t=n.getTotalSkins(),r=[],o=0;o<t;o++){var i=e.TaskManager.instance.getSkinUnlockCondition(o);if(!i){if(a!=e.TASK_VALUE_TYPE.NONE)continue;i=n.getDefaultUnlockCondition(o)}i.type==a&&r.push({skin:i.rewardValue,taskType:i.type,taskValue:i.value,unlocked:n.isSkinUnlocked(o),price:i.price})}return r},n.getSkinInfoById=function(a){var t=e.TaskManager.instance.getSkinUnlockCondition(a);t||(t=n.getDefaultUnlockCondition(a));return{skin:t.rewardValue,taskType:t.type,taskValue:t.value,unlocked:n.isSkinUnlocked(a),price:t.price}},n.getDefaultUnlockCondition=function(n){return{type:e.TASK_VALUE_TYPE.NONE,value:e.GameConfig.RANDOM_PRICE,rewardType:e.REWARD_TYPE.SKIN,rewardValue:n}},n.isSkinUnlocked=function(a){if(n._data.unlocked.indexOf(a)>=0)return!0;var t=e.TaskManager.instance.getSkinUnlockCondition(a);if(!t||t.type==e.TASK_VALUE_TYPE.NONE)return!1;if(t.value<=0)return!0;return e.TaskManager.instance.getTaskProgress(t.type).value>=t.value},n.getNextUnlockedSkinTask=function(n){for(var a=e.TaskManager.instance.getSkinUnlockTasks(),t=null,r=0;r<a.length;r++){var o=a[r];if(o.type==n&&o.rewardType==e.REWARD_TYPE.SKIN){var i=o.rewardValue;if(!this.isSkinUnlocked(i)){t=o;break}}}return t},n.getDefaultSkinId=function(){return 0},n.getTotalSkins=function(){return 30},n.init=function(){this._data={unlocked:[n.getDefaultSkinId()],newSkinMarks:[]},this.load()},n.load=function(){var e=!1,a=Laya.LocalStorage.getItem(n.DATA);if(a&&""!=a){var t=JSON.parse(a);if(t){if(t.unlocked)for(o=0;o<t.unlocked.length;o++){var r=t.unlocked[o];this.unlockSkin(r)&&(e=!0)}if(t.newSkinMarks)for(var o=0;o<t.newSkinMarks.length;o++)this._data.newSkinMarks.push(t.newSkinMarks[o])}}else this._migrateOldData(),e=!0;e&&this.save()},n._migrateOldData=function(){e.GameData.instance.getUnlockSkins().forEach(function(e){n.unlockSkin(e)});for(var a=0;a<e.GameConfig.SKIN_VIDEO.length;a++)e.GameData.instance.isSkinUnlockedByProgress(a)&&n.unlockSkin(a)},n.save=function(){var e=JSON.stringify(this._data);Laya.LocalStorage.setItem(n.DATA,e)},n.unlockSkin=function(e,n){return this._data.unlocked.indexOf(e)<0&&(this._data.unlocked.push(e),n&&this.markNewSkin(e),!0)},n.markNewSkin=function(e){this._data.newSkinMarks.indexOf(e)<0&&this._data.newSkinMarks.push(e)},n.clearNewSkinMark=function(e){var n=this._data.newSkinMarks.indexOf(e);n>=0&&(this._data.newSkinMarks=this._data.newSkinMarks.slice(n,n+1))},n.clearAllNewSkinMarks=function(){this._data.newSkinMarks=[]},n.hasNewSkin=function(){return this._data.newSkinMarks.length>0},n.getNewSkins=function(){return this._data.newSkinMarks},n.buildColors=[new Laya.Vector4(207/255,233/255,246/255,1),new Laya.Vector4(207/255,233/255,246/255,1),new Laya.Vector4(207/255,233/255,246/255,1),new Laya.Vector4(207/255,233/255,246/255,1),new Laya.Vector4(207/255,233/255,246/255,1),new Laya.Vector4(207/255,233/255,246/255,1)],n.planeTexture="res/skin/plane.png",n.bgColors=[new Laya.Vector4(193/255,207/255,193/255,1),new Laya.Vector4(193/255,207/255,193/255,1)],n.fogColors=[new Laya.Vector4(193/255,207/255,193/255,1),new Laya.Vector4(193/255,207/255,193/255,1)],n.PLANE_COLORS=[new Laya.Vector4(176/255,206/255,.8,1),new Laya.Vector4(167/255,202/255,196/255,1),new Laya.Vector4(145/255,190/255,182/255,1),new Laya.Vector4(129/255,192/255,175/255,1),new Laya.Vector4(114/255,181/255,162/255,1),new Laya.Vector4(100/255,166/255,152/255,1),new Laya.Vector4(86/255,149/255,140/255,1),new Laya.Vector4(80/255,139/255,135/255,1),new Laya.Vector4(138/255,176/255,249/255,1),new Laya.Vector4(116/255,186/255,1,1),new Laya.Vector4(68/255,159/255,229/255,1),new Laya.Vector4(37/255,139/255,200/255,1)],n.DEAD_COLORS=[new Laya.Vector4(1,209/255,45/255,1),new Laya.Vector4(1,0,1,1),new Laya.Vector4(1,1,1,1),new Laya.Vector4(190/255,70/255,48/255,1),new Laya.Vector4(1,90/255,0,1),new Laya.Vector4(1/255,144/255,195/255,1),new Laya.Vector4(0,0,0,1),new Laya.Vector4(1,0,0,1),new Laya.Vector4(0,240/255,240/255,1),new Laya.Vector4(1,1,1,1),new Laya.Vector4(0,1,1,1),new Laya.Vector4(30/255,20/255,110/255,1),new Laya.Vector4(1,1,20/255,1),new Laya.Vector4(140/255,50/255,185/255,1),new Laya.Vector4(1,182/255,2/255,1),new Laya.Vector4(1/255,142/255,239/255,1),new Laya.Vector4(0,0,0,1),new Laya.Vector4(106/255,47/255,167/255,1),new Laya.Vector4(0,0,1,1),new Laya.Vector4(2/255,67/255,130/255,1),new Laya.Vector4(107/255,28/255,220/255,1),new Laya.Vector4(0,0,0,1),new Laya.Vector4(105/255,18/255,180/255,1),new Laya.Vector4(0,0,0,1),new Laya.Vector4(0,0,0,1),new Laya.Vector4(96/255,90/255,27/255,1),new Laya.Vector4(90/255,5/255,22/255,1),new Laya.Vector4(220/255,190/255,40/255,1),new Laya.Vector4(175/255,0,28/255,1),new Laya.Vector4(67/255,166/255,107/255,1)],n.AI_NAME_NUM=50,n._curSkinIndex=0,n.DATA="SkinData",n}();e.SkinManager=n}(touch||(touch={}));