var Enity = require("Enity");

cc.Class({
    extends: Enity,

    properties: {
        speed:0,
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
        
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.node.setPositionY(this.node.getPositionY() + this.speed);
    },
    
    
});
