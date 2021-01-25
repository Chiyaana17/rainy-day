const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var drops1=[]
function preload()
{
walk=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
t1=loadAnimation("images/thunderbolt/1.png","images/thunderbolt/4.png")
t2=loadAnimation("images/thunderbolt/2.png","images/thunderbolt/3.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
  world = engine.world;
  umbrella=Matter.Bodies.circle(width/2+15,height-260,100,{isStatic:true})
  Matter.World.add(world,umbrella)
  man = createSprite(width/2,height-180,50,200)
  man.addAnimation("walks",walk)
  man.scale=0.55
	Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background(0);
  if(frameCount%100==0){
   thunder1=createSprite(random(0,800),0)
   thunder1.addAnimation("t4",t1)
   thunder1.addAnimation("t3",t2)
   thunder1.scale=0.5
    thunder1.lifetime=20
    var thunder=Math.round(random(1,2))
    thunder1.x=random(0,800) 
  switch(thunder){
    case 1:
      thunder1.changeAnimation("t4")
      break;
      case 2:
        thunder1.changeAnimation("t3")
        break;
    }
    thunder1.tint=rgb(255,255,255,1)
  }
  
  drop1 = new drops(random(0,800),random(0,700),5)
    drops1.push(drop1)
  for(var i=0;i<drops1.length;i++){
drops1[i].display()
if(drops1[i].body.position.y>700){
  Matter.World.remove(world,drops1[i])  
  drops1.splice(i,1)
  i--
}
}
drawSprites()}