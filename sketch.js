const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,ground,box1,box2;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var boy,boyImage;

function preload(){
  boyImage=loadImage("boy.png")
}

function setup() {
  createCanvas(1200,700);
  
  engine=Engine.create();
  world=engine.world;

  ground= new Ground(600,520,1200,10); 

  boy = createSprite(200,400,50,50);
  boy.addImage(boyImage);
  boy.scale=0.1;

  // tree = new Tree(900,260);

  // stone = new Stone(0,0)
  
  // mango1= new Mango(1120,100);
  // mango2= new Mango(770,130);
  // mango3= new Mango(1010,140);
  // mango4= new Mango(1020,70);
  // mango5= new Mango(1100,70);
  // mango6= new Mango(120,330);
  // mango7= new Mango(120,330);
  // mango8= new Mango(120,330);
  // mango9= new Mango(120,330);
  // mango10= new Mango(120,330);

  // chain= new Chain(stone.body,{})


}

function draw() {
  rectMode(CENTER);
  background("grey");
  textSize(25);
  fill("yellow");
  text("PRESS THE 'SPACE' BUTTON TO PLAY AGAIN ",50,50);

  Engine.update(engine);

  
  

  ground.display();
  
  // mango1.display();
  // mango2.display();
  // mango3.display();
  // mango4.display();
  // mango5.display();
  // mango6.display();
  // mango7.display();
  // mango8.display();
  // mango9.display();
  // mango10.display();

  // chain.display();

  // stone.display();
  
  fill("red")
  text (mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85});
  }
}





