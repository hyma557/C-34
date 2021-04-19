const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;

var c1, c2, c3, c4, c5;
var trainSound 
var crashSound
var flag = 0;
var t1, t2, t3, t4, t5, t6;
var rock;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  t1 = new Tram(50, 170, 50, 50)
  t2 = new Tram(150, 170, 50, 50)
  t3 = new Tram(250, 170, 50, 50)
  t4 = new Tram(350, 170, 50, 50)
  t5 = new Tram(450, 170, 50, 50)
  t6 = new Tram(550, 170, 50, 50)

  c1 = new Chain(t1.body, t2.body)
  c2 = new Chain(t2.body, t3.body)
  c3 = new Chain(t3.body, t4.body)
  c4 = new Chain(t4.body, t5.body)
  c5 = new Chain(t5.body, t6.body)

  rock = new Rock(1100, 200, 100, 100)


}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  t1.show();
  t2.show();
  t3.show();
  t4.show();
  t5.show();
  t6.show();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  var collision = Matter.SAT.collides(t6.body,rock.body);
   if(collision.collided)
    { flag=1; } if(flag ===1){ textSize(30); stroke(3);
     fill('blue'); text("CRASH",500,200); crashSound.play(); }

  rock.show();
 
  }


  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(t6.body, {x:t6.body.position.x, y:t6.body.position.y},{x:0.5, y:0})
      trainSound.play()
    }
  }
  
