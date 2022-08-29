class Ball {
  constructor(x, y, raio) 
  {
    var options = {
      isStatic: true
    };
    this.raio = raio;
    this.body = Bodies.circle(x, y, this.raio, options);
    this.image = loadImage("./assets/Soccer_ball.png");
    // this.width = width;
   // this.v = v;
   
    this.trajectory = [];
    World.add(world, this.body);
  }

   //criar função para remover a bola do mundo também
   remove(index){
    Matter.Body.setVelocity(this.body, {x:0, y:0});

    setTimeout(() => {
      Matter.World.remove(world, this.body);
      delete balls[index];
    },1000);

    //5.sketch, criar condição para chamar as funções no momento correto

  }

  shoot() {
    var newAngle = player1.angle;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
    x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});

       
  }

//  update(){
//   this.x += this.v;
//   this.y += this.v;
//  }

//  collide(other){
//   return !(this.x + this.width < other.x + other.width || this.x > other.x + other.width && this.y + this.width < other.y || this.y > other.x + other.width ){
//     console.log("colidiu")
//   }

//   else{
//     console.log("colision")
//   }
// }

  display() {
   //console.log(this.body.position)
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.raio, this.raio);
    pop();

    
    
    if(this.body.velocity.x >0 && pos.x > 10 && !this.isSink ){
      var position = [pos.x, pos.y];
      this.trajectory.push(position);
    }
  
    for(var i = 0; i <this.trajectory.length; i++){
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 3,3);
    }
  }

  
}
