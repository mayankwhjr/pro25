class Container{
    constructor(x, y,width,height) {
      var options = {
          
          
          
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.image=loadImage("container.jpg")
    }
    display(){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue")
    fill("green");
    rect(0, 0, this.width, this.height);
    ImageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
};