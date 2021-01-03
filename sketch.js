
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var rect1,rect2;
var ball1,ball2,ball3,ball4,ball5;
var c1,c2,c3,c4,c5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	rect1 = createSprite(380,180,600,50)
	rect1.shapeColor = "grey"

	rect2 = createSprite(0,700,1600,30)
	rect2.shapeColor = "brown"

	
	ball1 = new Ball(200,300,50)
	ball2 = new Ball(300,300,50)
	ball3 = new Ball(400,300,50)
	ball4 = new Ball(500,300,50)
	ball5 = new Ball(600,300,50)


	c1 = new Thread(ball1.body,{x:200,y:200})
	c2 = new Thread(ball2.body,{x:300,y:200})
	c3 = new Thread(ball3.body,{x:400, y:200})
	c4 = new Thread(ball4.body,{x:500, y:200})
	c5 = new Thread(ball5.body,{x:600, y:200})







	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  //engine.update()
  

	ball1.display()
	ball2.display()
	ball3.display()
	ball4.display()
	ball5.display()
	fly()
	c1.display()
	c2.display()
	c3.display()
	c4.display()
	c5.display()
  drawSprites();
 
}

function fly(){
	if(keyDown("up")){
		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:20});
}
}



