const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,50,50);
    box2 = new Box(920,300,50,50);
    box3 = new Box(700, 220, 50, 50);
    box4 = new Box(920, 220, 50, 50);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810,220);
    log1 = new Log(810, 260, 300, PI/2);
    log2 = new Log(810, 170, 300, PI/2);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    box3.display();
    pig2.display();
    box4.display();
}