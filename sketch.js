const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(200,300,40,40);
    box2= new Box(200,200,40,80);
    ground= new Ground(200,390,40,20)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
}