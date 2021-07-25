const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let bridge;
var base;
var base2;
var jointLink;
var jointPoint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
base = new Base(100,height - 10,500,20)
base2 = new Base(width -200,height - 10,500,20)
Matter.Composite.add(base.body,jointPoint);
jointLink = new Link(bridge ,jointPoint)

  frameRate(80);
  
}

function draw() {
  background(51);
  base.display();
  base2.display();
  bridge.display();
  jointLink.display()
  Engine.update(engine);

}