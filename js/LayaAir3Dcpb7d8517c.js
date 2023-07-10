var LayaAir3D = function () {
    function a() {
        this._resCount = 0;
        console.info("Crazy Ball, Version: 1.0.0 build: 1"), GameBaseData.isNative && (console.info("IronSource init..."), SdkHelper.IronSourceHelper.init(), SdkHelper.IronSourceHelper.loadInterstitial(), SdkHelper.IronSourceHelper.checkState(), console.info("PayHelper init..."), SdkHelper.PayHelper.init()), console.log("LayaGame Initing"), Laya3D.init(touch.Config.SCREEN_WIDTH, touch.Config.SCREEN_HEIGHT, !0), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, UIConfig.closeDialogOnSide = !1, touch.SoundManager.init(), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.oncheckVersion), Laya.ResourceVersion.FILENAME_VERSION)
    }
    return a.prototype.oncheckVersion = function () {
        if ("undefined" != typeof minigame) {
            var a = this;
            minigame.initializeAsync().then(function () {
                console.log("FB initializeAsync"), minigame.getEntryPointAsync().then(function (a) {
                    console.info("Entry Point: ", a)
                });
                var e = minigame.context.getType();
                console.info("Context Type: ", e), a.loadRes()
            })
        } else this.loadRes()
    }, a.prototype.loadRes = function () {
        Laya.loader.load(["res/atlas/core.atlas", "res/atlas/index.atlas", "res/atlas/game.atlas", "res/atlas/head.atlas", "res/atlas/v1.1/share.atlas", "res/atlas/v1.1/ui.atlas", "res/atlas/v1.1/animation.atlas"], Laya.Handler.create(this, this.onAtlasLoadComplete));
        var a = new Laya.BitmapFont;
        a.loadFont("font/yahei120.fnt", new Laya.Handler(this, this.onFontLoaded, ["yahei120", a]));
        var e = new Laya.BitmapFont;
        e.loadFont("font/yahei.fnt", new Laya.Handler(this, this.onFontLoaded, ["yahei", e]))
    }, a.prototype.onAtlasLoadComplete = function (a) {
        a ? (this._resCount++, this.checkLoadedComplete()) : alert("资源加载失败！")
    }, a.prototype.onFontLoaded = function (a, e) {
        Laya.Text.registerBitmapFont(a, e), this._resCount++, this.checkLoadedComplete()
    }, a.prototype.checkLoadedComplete = function () {
        if (this._resCount >= 3)
            if (GameBaseData.isNative) this.startGame();
            else {
                null === minigame || void 0 === minigame || minigame.setLoadingProgress(100);
                var a = this;
                null === minigame || void 0 === minigame || minigame.startGameAsync().then(function () {
                    a.startGame()
                }).catch(function (a) {
                    console.info("startGameAsync error: " + a)
                })
            }
        else(GameBaseData.isMiniGame() || GameBaseData.isFbIG()) && (GameBaseData.isNative || null === minigame || void 0 === minigame || minigame.setLoadingProgress(Math.floor(20 * this._resCount / 3)))
    }, a.prototype.startGame = function () {
        touch.GameModule.instance.init()
    }, a.prototype.test = function () {
        var a = new Laya.Scene;
        Laya.stage.addChild(a);
        var e = new Laya.PointLight;
        e.transform.position = new Laya.Vector3(0, 20, 7.5), e.range = 100, e.attenuation = new Laya.Vector3(0, 0, 0), a.addChild(e);
        var t = new Laya.DirectionLight;
        a.addChild(t);
        var n = new Laya.Camera(0, .1, 100);
        a.addChild(n), n.transform.rotate(new Laya.Vector3(-.05, 0, 0), !0, !0), n.transform.position = new Laya.Vector3(0, 1.5, 1.5), n.clearColor = null;
        var o = Laya.MeshSprite3D.load("res/scene/LayaScene_cha/cha.lh");
        a.addChild(o), this.loadParticle(a)
    }, a.prototype.loadParticle = function (a) {
        var e = Laya.MeshSprite3D.load("res/pengzhuang/texiao.lh");
        setTimeout(function () {
            console.info("Particle: ", e);
            var t = e.getChildByName("pengzhuang");
            a.addChild(t), t.transform.position = new Laya.Vector3(0, 0, -2)
        }, 1e3)
    }, a
}();
new LayaAir3D;