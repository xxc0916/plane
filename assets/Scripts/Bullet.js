//var Enity = require("Enity");

cc.Class({
    extends: cc.Component,

    properties: {
        speed:0,

    },

    // use this for initialization
    onLoad: function () {
        
    },
     onCollisionEnter: function (other, self) {
    this.node.destroy()
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.node.setPositionY(this.node.getPositionY() + this.speed);
        if(this.node.y >1000)
        {
            this.node.destroy()
        }
    },
    
    
});
