var Enity = cc.Class({
    extends: cc.Component,

    properties: {
      speed: cc.v2(0, 0),
    },
    // use this for initialization
    onLoad: function () {
   this.speed.x = getRandomInt(-100,100)
    this.speed.y = getRandomInt(100,200)
    },
    onCollisionEnter: function (other, self) {
     var anim = this.getComponent(cc.Animation);
     anim.play();
    anim.on('stop', this.onStop, this);
    },
   onStop:function(){
       this.node.destroy()
   },
    update: function (dt) {
         
      this.node.x += this.speed.x*dt
      this.node.y -= this.speed.y*dt
      if(this.node.x <0){
          this.node.x = 640
      }
       if(this.node.x > 640){
          this.node.x = 0
      }
      if(this.node.y < -1000)
      {
          this.node.destroy()
      }
    },
});
 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
 }
