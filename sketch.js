
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;
    roof = new Roof(250,100,300,50);
	World.add(world,roof);
    bobObject1 = new Bob(250,300,50);
	bobObject2 = new Bob(300,300,50);
	bobObject3 = new Bob(350,300,50);
	bobObject4 = new Bob(400,300,50);
	bobObject5 = new Bob(450,300,50);

	rope1 = new rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3 = new rope(bobObject3.body,roof.body,-bobDiameter*0,0);
	rope4 = new rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5 = new rope(bobObject5.body,roof.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
	background("white");
Engine.update(engine);
roof.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
	}
}

