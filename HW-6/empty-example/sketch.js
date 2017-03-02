var button= {};

function setup() {
  createCanvas(500,500);

  button.x = width / 2;
 button.y = height / 2;
 button.width = 100;
 button.height = 50;
 button.color_a = color(23, 11, 245);
 button.color_d = color(255, 255, 255);
 button.text = "My Button!";
}

function draw() {
  if (mouseX >= width /2) {
    background(0,255,0);
  } else {
    background(255,0,0);
  }
  if (mouseX >= button.x - button.width/2 && mouseX <= button.x + button.width/2 && mouseY >= button.y - button.height/2 && mouseY <= button.y + button.height/2) {
      fill(button.color_a);
      if( mouseIsPressed ){
          background(242, 16, 106);
      }
  } else {
      fill(button.color_d);
  }
  rectMode(CENTER);
  rect(button.x,button.y,button.width,button.height);


  fill(6, 6, 6);
  textSize(20);
  text(button.text, button.x-45, button.y);




}
