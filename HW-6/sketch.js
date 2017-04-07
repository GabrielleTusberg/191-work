
//setting variables
var button= {};
var x = 400;
var y = 400;
var d = 100;
var state = false;


function setup() {
  createCanvas(500,500);

// making the size and color of the rectangular button
  button.x = width / 2;
 button.y = height / 2;
 button.width = 50;
 button.height = 50;
 button.color_a = color(18, 18, 17);
 button.color_d = color(231, 238, 241);

}
//calling draw function
function draw() {
// conditional statement to make animation when ellipse button is pressed.
  if (state) {
    background(255,0,0,10);

    rect (random(0, width), random(0, height), 10, 10);

    fill(255,255,255);
    rect(random(0, width), random(0, height), 15, 15);

  } else {
    background(255, 255, 255);
  }
  ellipse(x, y, d, d);
  fill(230,210,255);

//if the mouseX is inside the left/right portion of the rectangle fill the button color (white)
// if the mouseIsPressed the background color will change
  if (mouseX >= button.x - button.width/2 && mouseX <= button.x + button.width/2 && mouseY >= button.y - button.height/2 && mouseY <= button.y + button.height/2) {
      fill(button.color_a);
      if( mouseIsPressed ){
          background(242, 16, 106);
      }
  } else {
      fill(button.color_d);
  }
//placing the button
  rectMode(CENTER);
  rect(button.x,button.y,button.width,button.height);

}
//calling mousePressed function to make animation and button work while mouseX is inside the ellipse
function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < d/2) {
    state = !state;
  }
}
  if (mouseX >= width /2) {
    background(255, 255, 255);
  } else {
    background(255,255,255);

}
