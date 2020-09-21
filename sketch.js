
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Dustbin;
var ground1;
var paper1;
var dustbinimage;
var Dsprite; 

function preload()
{
 dustbinimage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Dustbin = new dustbin(900,330);
	ground1 = new ground (600,350,1200,20);
	paper1 = new Paper (400,200,25);
	Dsprite = createSprite(900,330,20,20);
	Dsprite.addImage(dustbinimage);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Dustbin.display();
  ground1.display();
  paper1.display();
 // dustbinimage.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
  
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45});
	
	}
  }


