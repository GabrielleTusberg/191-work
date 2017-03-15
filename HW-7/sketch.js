var button= {};
var x = 400;
var y = 400;
var d = 100;
var state = false;


function setup() {
  createCanvas(500,500);

  button.x = width / 2;
  button.y = height / 2;
  button.width = 50;
  button.height = 50;
  button.color_a = color(18, 18, 17);
  button.color_d = color(231, 238, 241);

  button.pressed = function (){
    if (mouseX >= this.x - this.width/2 && mouseX <= this.x + this.width/2 && mouseY >= this.y - this.height/2 && mouseY <= this.y + this.height/2) {
      fill(this.color_a);
      if( mouseIsPressed ){

        state = !state;

      } else {
        fill(this.color_d);
      }

    }
  }
}

function draw() {
  if (state) {
    background(255,0,0,10);
  

    rect (random(0, width), random(0, height), 10, 10);

    fill(255,255,255);
    rect(random(0, width), random(0, height), 15, 15);

  } else {
    background(255, 255, 255);
  }

  rectMode(CENTER);
  rect(button.x,button.y,button.width,button.height);





}


function mousePressed() {
  button.pressed();
}
