const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26;
var hero;
var rope;
var monster;

function preload() {
    backgroundImage = loadImage("Monster-01.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(390, 500, 1600, 10);

  box1 = new Box(600, 470, 50, 50);
  box2 = new Box(600, 420, 50, 50);
  box3 = new Box(600, 370, 50, 50);
  box4 = new Box(600, 320, 50, 50);
  box5 = new Box(600, 270, 50, 50);
  box6 = new Box(600, 220, 50, 50);
  box7 = new Box(600, 170, 50, 50);
  box8 = new Box(700, 420, 50, 50);
  box9 = new Box(700, 370, 50, 50);
  box10 = new Box(700, 320, 50, 50);
  box11 = new Box(700, 270, 50, 50);
  box12 = new Box(700, 220, 50, 50);
  box13 = new Box(700, 170, 50, 50);
  box14 = new Box(800, 470, 50, 50);
  box15 = new Box(800, 420, 50, 50);
  box16 = new Box(800, 370, 50, 50);
  box17 = new Box(800, 320, 50, 50);
  box18 = new Box(800, 270, 50, 50);
  box19 = new Box(800, 220, 50, 50);
  box20 = new Box(800, 170, 50, 50);
  box21 = new Box(800, 420, 50, 50);
  box22 = new Box(900, 420, 50, 50);
  box23 = new Box(900, 370, 50, 50);
  box24 = new Box(900, 320, 50, 50);
  box25 = new Box(900, 270, 50, 50);
  box26 = new Box(900, 470, 50, 50);
  hero = new Hero(300, 300, 300, 200);
  rope = new Rope(hero.body, {x: 500, y: 50});
  monster = new Monster(1100, 354.9172778972389, 250, 280);
}

function draw() {
  Engine.update(engine);
  background("lightBlue");

  monster.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display(); 
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  hero.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  rope.fly();
}