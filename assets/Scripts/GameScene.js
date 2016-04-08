cc.Class({
    extends: cc.Component,

    properties: {
        canvas:{
            default:null,
            type:cc.Node
        },
        player:{
            default:null,
            type:cc.Node
        },
        bulletPre:{
            default:null,
            type:cc.Prefab
        },
        genbulletspeedtime:0,
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var action = cc.sequence(cc.fadeOut(0),cc.fadeIn(1));
        this.canvas.runAction(action);
        this.genbulletTime = 0;
        this.bulletsContainer = new Array();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.GenerateBullets(dt);
    },
    
    //生成子弹的逻辑
    GenerateBullets:function (dt) {
        this.genbulletTime += dt;
        if (this.genbulletTime >= this.genbulletspeedtime) {
            this.genbulletTime = 0;
            var m_bullet = cc.instantiate(this.bulletPre);
            m_bullet.setPosition(this.player.getPositionX(),this.player.getPositionY());
            m_bullet.parent = this.canvas;
        }
    },
    
});
