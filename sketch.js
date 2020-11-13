const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var g1,b1,polygon,image,s1,Hexa_img;


function preload() {
  Hexa_img=loadImage("HG200.png")
  
}




function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  g1=new Ground(370,265,300,20);
  b1=new Box(330,235,30,40)
  b2=new Box(360,235,30,40)
  b3=new Box(390,235,30,40)
  b4=new Box(420,235,30,40)
  b5=new Box(360,195,30,40)
  b6=new Box(390,195,30,40)
  b7=new Box(375,155,30,40)

  //var imag=loadImage("HG200.png")
  polygon=Matter.Bodies.circle(300,200,10)
  World.add(world,polygon)
  

  s1=new Slingshot(polygon,100,200)

  score=0

  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);


  g1.display();
  b1.display()
  b1.score();
  b2.display()
  b2.score()
  b3.display()
  b3.score()
  b4.display()
  b4.score()
  b5.display()
  b5.score()
  b6.display()
  b6.score()
  b7.display()
  b7.score()
  s1.display()
  imageMode(CENTER)
  image(Hexa_img,polygon.position.x,polygon.position.y,20,20)
  

  noStroke();
    textSize(40)
    fill("white")
    text("Score: " + score,900,50)
}



function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  s1.fly();
}

function keyPressed(){
  if(keyCode === 32){
    s1.attach(this.polygon)
  }
}
 
