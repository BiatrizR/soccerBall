class Players {
 
  constructor(x, y, width, height, angle, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = image;


    this.body = Bodies.rectangle(x, y, width, height);
    World.add(world, this.body);
    
    
  }

  collide(other){
     if(this.x + (this.width/2) < other.body.x + other.raio || this.x + (this.width/2) > other.body.x + other.body.raio ){
        console.log("Está a esquerda")
     }
  }
  
  
 

  display() {
    //console.log(this.angle)

    var pos = this.body.position

    if (keyIsDown(RIGHT_ARROW) ) {
      this.angle += 10;
      this.x += 2
    }

    if (keyIsDown(LEFT_ARROW) ) {
      this.angle -= 10;
      this.x -= 2
    }
    
    if (keyIsDown(UP_ARROW) ) {
      this.angle -= 10;
      this.y -= 2
    }

    if (keyIsDown(DOWN_ARROW) ) {
      this.angle += 10;
      this.y += 2
    }
    /*
    if(keyCode == UP_ARROW){
      this.y -= 2
    }
  
    if(keyCode == DOWN_ARROW){
      this.y += 2
    }
    if(keyCode == LEFT_ARROW){
      
    }
    if(keyCode == RIGHT_ARROW){
      
    }
    */

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,0,0, this.width, this.height);
    pop();
      
  }
  
}
