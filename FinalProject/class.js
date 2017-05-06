function Regions(shape, init_x, init_y, width, height,sound){
  this.shape=shape
  this.x= init_x
  this.y= init_y
  this.width= width
  this.height= height
  this.sound= sound
  this.isPressed = false;
  this.minDelay = 60;
  this.timer = this.minDelay;
}

Regions.prototype.display = function () {

  push();
  translate(this.x, this.y);
  if ( this.shape === "ellipse" ){
    ellipseMode(CENTER);
    ellipse(0, 0,this.width,this.height);
  }else{
    rectMode(CENTER);
    rect(0, 0,this.width, this.height);
  }
  pop();
}

Regions.prototype.checkMouse= function(){

  // console.log(this.isPressed);
  // console.log(this.timer);
  if (this.isPressed) {
    this.timer--;
    if (this.timer <= 0) {
      this.timer = this.minDelay;

    }
  } else {
    this.timer = this.minDelay;
  }

  this.isPressed = false;



  if ( this.shape === "ellipse" ){
    var dis= dist(this.x,this.y,mouseX, mouseY);
    if (dis<= this.width/2 && mouseIsPressed) {
      // console.log("sunpressed");
      this.isPressed = true;
    }
  } else {
    if (
      mouseX>=this.x-this.width/2 &&
      mouseX<=this.x+this.width/2 &&
      mouseY>=this.y-this.height/2 &&
      mouseY<=this.y+this.height/2 &&
      mouseIsPressed
    ){
      // console.log("rectpressed")
      this.isPressed = true;

    }
  }

  if (this.isPressed && this.timer == this.minDelay) {
    this.sound.play();
    console.log("Played Sound");

  }
}
