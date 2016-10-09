var Helpers = require('Helpers');
cc.Class({
    extends: cc.Component,

    properties: {
        prefabs: {
            default: [],
            type: [cc.Prefab]
        },
        prefab:cc.Prefab,
        spawnInterval: 0
    },
    
    addSpawn: function () {
        var randomIdx = Helpers.getRandomInt(0, this.prefabs.length);
        var monster = cc.instantiate(this.prefabs[randomIdx]);
        monster.parent = this.node;
        monster.position = this.getRandomPosition();
    },
    
    addbomb:function(){
         var monster = cc.instantiate(this.prefab);
        monster.parent = this.node;
        monster.position = this.getRandomPosition();
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        self.schedule(self.addSpawn, self.spawnInterval);
         self.schedule(self.addbomb, 20);
        
    },

    getRandomPosition: function() {
        return cc.p(cc.random0To1() * 640, 300);
    },

});
