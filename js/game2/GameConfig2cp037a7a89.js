var game2;!function(e){var s=function(){function e(){}return e.init=function(){for(s=0;s<touch.GameConfig.SKIN_VIDEO.length;s++)e.Assets.SKINS.push({assetType:Laya.Texture2D,url:"res/skin/skin"+s+".png",key:"texture:skin"+s});for(var s=0;s<touch.SkinManager.AI_NAME_NUM;s++)e.Assets.AI_NAMES.push({assetType:Laya.Texture2D,url:"res/ai_names/"+s+".png",key:"texture:ai_name"+s})},e.Assets={SPEED_WIND_NODE:{assetType:Laya.Sprite3D,url:"res/scene/layaScene.lh",key:"node:speedWind"},DEAD_POINT_MESH:{assetType:Laya.Mesh,url:"res/scene/deadpoint.lm",key:"mesh:deadpoint"},BOOST_MESH:{assetType:Laya.Mesh,url:"res/scene/boost-acc.lm",key:"mesh:boost"},PLANE_MESH:{assetType:Laya.Mesh,url:"res/scene/plane.lm",key:"mesh:plane"},PLANE_TEX:{assetType:Laya.Texture2D,url:"res/skin/plane.png",key:"texture:plane"},WHITE_CUBE_TEX:{assetType:Laya.Texture2D,url:"res/skin/whiteCube.png",key:"texture:whiteCube"},CUBE_TEX:{assetType:Laya.Texture2D,url:"res/skin/cube.png",key:"texture:cube"},SKINS:[],AI_NAMES:[]},e.POOLS={PLANE:"plane"},e}();e.GameConfig2=s}(game2||(game2={}));