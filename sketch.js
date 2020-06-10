const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var lander;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(400,400);
    var lander_options={
    isStatic:true
    }
    engine = Engine.create();
    world = engine.world;
    lander=Bodies.rectangle(200,200,30,30,lander_options);
    World.add(world,lander);
    console.log(lander);

}
function draw(){
    background("black");
    rectMode(CENTER);
    Engine.update(engine);
    rect(lander.position.x,lander.position.y,30,30);
}