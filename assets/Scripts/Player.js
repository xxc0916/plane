var Player = cc.Class({
    extends: cc.Component,

    properties: {
    button:cc.Node,
    re:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
    
        cc.director.getCollisionManager().enabled = true;
        //cc.director.getCollisionManager().enabledDebugDraw = true;
        //记录touch的坐标x,y值
        this.touchx = 0;
        this.touchy = 0;
        this.AddTouchEvent();      
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
        
    // },
    onDisabled: function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },
    touchButton:function(){
    this.button.active = false
    },
    restart:function(){
       cc.director.loadScene('MenuScreen') 
    },
    AddTouchEvent:function () {
        var touchStart = function (event) {
           this.touchx = event.touch.getLocationX();
           this.touchy = event.touch.getLocationY();
        }
        var touchMove = function (event) {
            this.node.setPositionX(this.node.getPositionX() + event.touch.getLocationX() - this.touchx);
            this.node.setPositionY(this.node.getPositionY() + event.touch.getLocationY() - this.touchy);
            this.touchx = event.touch.getLocationX();
            this.touchy = event.touch.getLocationY();
        }
        var touchEnd = function (event) {
            
        }
        this.node.on(cc.Node.EventType.TOUCH_START,touchStart,this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,touchMove,this);
        this.node.on(cc.Node.EventType.TOUCH_END,touchEnd,this); 
    },
     onCollisionEnter: function (other, self) {
          if (other.node.group === 'bomb') {
               this.button.active = true
               return
            }
      var anim = this.getComponent(cc.Animation);
        anim.play('hero_die');
        anim.on('stop', this.onStop, this);
    },
    onStop:function(){
         //cc.game.pause();
         //this.re.active = true
         //this.node.active =false
          cc.director.loadScene('MenuScreen') 
    }
});
