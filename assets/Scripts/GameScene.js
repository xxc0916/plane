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
     
    },

    // use this for initialization
    onLoad: function () {
        var action = cc.sequence(cc.fadeOut(0),cc.fadeIn(1));
        this.canvas.runAction(action);
        this.genbulletTime = 0;
        this.bulletsContainer = []
        
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.GenerateBullets(dt);
    },
    
    //生成己方子弹的逻辑
    GenerateBullets:function (dt) {
        this.genbulletTime += dt;
        if (this.genbulletTime >= this.genbulletspeedtime) {
            this.genbulletTime = 0;
            var m_bullet = cc.instantiate(this.bulletPre);
            m_bullet.setPosition(this.player.getPositionX(),this.player.getPositionY());
            m_bullet.parent = this.canvas;
        }
    },
    // //生成敌方子弹的逻辑
    // GenerateBullets2:function () {
    //         var m_bullet = cc.instantiate(this.bulletPre);
    //         m_bullet.setPosition(this.enemy2.getPositionX(),this.enemy2.getPositionY());
    //         m_bullet.parent = this.canvas;
    //         cc.log('1')
    // },
    
});
