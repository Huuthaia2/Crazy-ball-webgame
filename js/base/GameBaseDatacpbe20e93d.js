var GAME_MODE;!function(e){e[e.MULTIPLE_PLAYER=0]="MULTIPLE_PLAYER",e[e.SINGLE_PLAYER=1]="SINGLE_PLAYER"}(GAME_MODE||(GAME_MODE={}));var H5_Platform;!function(e){e.NONE="native",e.FBIG="fbig",e.MINIGAME="minigame"}(H5_Platform||(H5_Platform={}));var GameBaseData=function(){function e(){}return Object.defineProperty(e,"isNative",{get:function(){return Laya.Render.isConchApp},enumerable:!1,configurable:!0}),Object.defineProperty(e,"isSupportPay",{get:function(){var n=window.MiniGameInfo;return e.isNative||n.isH5Android()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"isH5",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"isSinglePlayerMode",{get:function(){return this.currentMatch.mode==GAME_MODE.SINGLE_PLAYER},enumerable:!1,configurable:!0}),Object.defineProperty(e,"isMultiplePlayerMode",{get:function(){return this.currentMatch.mode==GAME_MODE.MULTIPLE_PLAYER},enumerable:!1,configurable:!0}),Object.defineProperty(e,"currentGameMode",{get:function(){return this.currentMatch.mode},enumerable:!1,configurable:!0}),e.newMatch=function(e){this._matchData={mode:e,distance:0,exceed:0,diamond:0}},e.rematch=function(){this.newMatch(this.currentGameMode)},e.isMiniGame=function(){return this.h5Platform===H5_Platform.MINIGAME&&!this.isNative},e.isFbIG=function(){return this.h5Platform===H5_Platform.FBIG&&!this.isNative},Object.defineProperty(e,"currentMatch",{get:function(){return this._matchData},enumerable:!1,configurable:!0}),Object.defineProperty(e,"score",{get:function(){return this.isSinglePlayerMode?this.currentMatch.distance:this.currentMatch.exceed},enumerable:!1,configurable:!0}),e.getFriendList=function(e,n,t){for(var r=[],i=0;i<6;i++){var a=new RankObj;a.rank=i,a.name="名称"+i,a.uuid="uuid"+i,a.pic=null,a.score=100-i+"",r.push(a)}this.UID="uuid4",this.myRank_friend=r[0],this.myRank_friend=null,this.friendRank=r,n&&n()},e.getFriendList_model1=function(e,n,t){for(var r=[],i=0;i<6;i++){var a=new RankObj;a.rank=i,a.name="名称"+i,a.uuid="uuid"+i,a.pic=null,a.score=100-i+"",r.push(a)}this.UID="uuid5",this.myRank_friend_model1=r[4],this.myRank_friend_model1=null,this.friendRank_model1=r,n&&n()},e.getInitBeyondFriend=function(e,n){for(var t=[],r=0;r<6;r++){var i=new RankObj;i.rank=r,i.name="名称"+r,i.uuid="uuid"+r,i.pic=null,i.score=300*r*6-r+"",t.push(i)}t.sort(function(e,n){return e.score-n.score}),n&&n(t,6)},e.getSupportedAPIs=function(){},e.deepCopy=function(e){return JSON.parse(JSON.stringify(e))},e.h5Platform=H5_Platform.MINIGAME,e.enableShare=!1,e.isPayExist=!0,e.isDebug=!1,e.isErbei=!1,e.isIOS=!1,e.myRank=null,e.myRank_friend=null,e.allRank=[],e.friendRank=[],e.newModeMyRank=null,e.newModeallRank=[],e.myRank_model1=null,e.myRank_friend_model1=null,e.allRank_model1=[],e.friendRank_model1=[],e.beyondList=[],e.beyondHead=[],e.beyondLoadTime=0,e.beyondRankLength_mode0=0,e.beyondRankLength_mode1=0,e.fbHead="",e.isShowGameView=!1,e.UID=null,e.modelDif=0,e.modelGoal=0,e.modelScore=0,e.modelSpeed=0,e.reviveCount=0,e.gameSpeed=1,e.gameLvInit=0,e.jrTimse=0,e._newUser1=0,e._newUser2=0,e._newUser3=0,e}(),RankObj=function(){return function(){}}();