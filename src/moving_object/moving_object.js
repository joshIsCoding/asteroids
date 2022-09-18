function MovingObject(opts) {
  this.xPos = opts.pos[0];
  this.yPos = opts.pos[1];
  this.vel = opts.vel;
  this.radius = opts.radius;
  this.color = opts.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.xPos, this.yPos, this.radius, 0, 360);
  ctx.closePath();
  ctx.fill();
}

module.exports = MovingObject;
