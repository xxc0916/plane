var Player = cc.Class({
    extends: cc.Component,

    properties: {
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
        //记录touch的坐标x,y值
        this.touchx = 0;
        this.touchy = 0;
        this.AddTouchEvent();      
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {
        
    // },
    
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
    
});
