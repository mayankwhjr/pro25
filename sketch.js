
var container1,ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	ball=new Ball(200,100,10)
	container1= new Container(600,650,20,70)
	container2= new Container(620,650,70,20)
	container3= new Container(650,650,20,70)
    ground=new Ground(400,height,800,20)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  container1.display();
  container2.display();
  container3.display();
  
   ground.display();
  drawSprites();
 
}
function keyPressed() {
  if (keyCode===UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:12,y:-12});
  }  
}





