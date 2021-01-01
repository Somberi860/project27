
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob;
var constrainedground;
var rope;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(535,180,60);
	bob1 = new Bob(430,180,60);
	bob2 = new Bob(465,180,60);
	bob3 = new Bob(335,180,60);
	bob4 = new Bob(295,180,60);
	ground = new Ground(430,200,350,30);
	rope1 = new Rope(bob.body,ground.body,-bobDiameter*2,0);
	constrainedground = new Ground(430,200,350,30);
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bob.display();
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope1.display();
  
 
}



