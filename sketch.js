const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;


var ball;
var balls = [];


var player1, player2, player1Img, player2Img;
var players = [];



var posiX = 250;
var posiY = 350;
function preload() {

  backgroundImg = loadImage("./assets/campo-bg.png");
  player1Img = loadImage("./assets/ballRed.png");
  player2Img = loadImage("./assets/ballBlue.png");
}

function setup() {
  canvas = createCanvas(1100, 700);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);


  player1 = new Players(250, 350, 40, 40, angle, player1Img);
  // player2 = new Players(850, 350, 40, 40, angle, player2Img);
  ball = new Ball(550, 350, 25);

  
  // boat = new Boat(width -120, height -60, 170,170,-80);
}

function draw() {
  background(0);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();
    // Ball.update();
    ball.display();
    player1.display();
    // player2.isplay();
    player1.collide(ball.body);
 
 
 
 
  

  // collision(player1, Ball)
  
//  if(Matter.SAT.collides(player1, Ball) ){

//   console.log("colidiu")
//  }

  // if(Ball.collide(player1)){
  //   player1.bounce(Ball)
  // }
 
  // collisionBall();
  

 
   
//  boat.display();
}


// function collisionBall(){
//   //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
 
//     //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
 
//       var collision = collideRectCircle(player1.x, player1.y, player1.width, player1.height, (Ball.x + Ball.r), (Ball.y + Ball.r),Ball.r * 2);
//       if (collision) {
     
//         console.log("Collision with " );
//       }
     
  
// }



//1. Criar uma função para verificar quando a bola tocar no navio
// //colocar um parametro de indíce que será inserido a variavel de loop das bolas de canhão


// function collisionBall(){
  
//   //for (var i = 0; i < boats.length; i++) {
//     if (Ball!== undefined && player1 !== undefined) {
//       var collision = Matter.SAT.collides(Ball.body, player1.body);

//       if (collision.collided) {
//        console.log("colisioooon")
//       }
//     }
//   //}
// }




function controls(){
 
  if(keyCode == UP_ARROW){
    player1.y -= 2
  }

  if(keyCode == DOWN_ARROW){
    player1.y += 2
  }
  if(keyCode == LEFT_ARROW){
    player1.x -= 2
  }
  if(keyCode == RIGHT_ARROW){
    player1.x += 2
  }
}




function keyReleased() {

  for (var i = 0; i < players.length; i++) {
   
    collisionBall(i);
  }
 
  if (keyCode == 32) {
    
   ball.shoot();
  }
 
}


function keyPressed(){
  
  if(keyCode == 32){
  
 // var cannonBall = new CannonBall(player1.x, player1.y);
  
  
 // balls.push(cannonBall);
  }
}


// function collision(bodyA, bodyB){

//   if (bodyA.x - bodyB.x < bodyB.width/2 + bodyA.width/2
//   && bodyB.x - bodyA.x < bodyB.width/2 + bodyA.width/2
//   && bodyA.y - bodyB.y < bodyB.height/2 + bodyA.height/2
//   && bodyB.y - bodyA.y < bodyB.height/2 + bodyA.height/2) {
 
//     return true

// }
//   else {
//   bodyA.shapeColor = "green";
//   bodyB.shapeColor = "green";
//   return false
//   }
// }

//8.escrever uma condição dentro da função para verificar se a posição 
//x da bala é mair ou igual a largura da tela 





