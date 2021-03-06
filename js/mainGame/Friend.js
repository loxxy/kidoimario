function Friend() {
  var gameUI = GameUI.getInstance();

  var element = new Image();
  element.src = 'images/friends.png';

  this.type;
  this.x;
  this.y;
  this.velX = 2;
  this.velY = 0;
  this.grounded = false;
  this.sX;
  this.sY = 0;
  this.width = 32;
  this.height = 64;

  var that = this;

  this.princess = function(x, y) {
    that.type = 12;
    that.sX = 0;
    that.sY = -6;
  };

  this.boy = function(x, y) {
    that.type = 13;
    that.sX = 0;
    that.sY = -6;
  };
    
  this.draw = function() {
    gameUI.draw(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
  };

  this.update = function() {
    if (that.type == 30) {
      var gravity = 0.2;

      if (that.grounded) {
        that.velY = 0;
      }

      that.velY += gravity;

      that.x += that.velX;
      that.y += that.velY;
    }
  };
}
