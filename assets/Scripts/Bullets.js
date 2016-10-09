cc.Class({
    extends: cc.Component,

    properties: {
     bomb:cc.Prefab
    },

    // use this for initialization
    onLoad: function () {
      
    },
    bumb:function(){
         for(var i = 0;i < 40; i++){
             for(var j = 0;j <2 ;j++){
            var newNode = cc.instantiate(this.bomb);
            this.node.addChild(newNode);
            newNode.setPosition(cc.p(20*(i + 1) ,20*j))}
       }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
