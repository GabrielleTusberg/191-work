function setup() {

  createCanvas(800,800);
  background(250, 250, 250);

//The Head
  push()
  translate(400,400);
  fill(0,255,0);
  ellipse(0,0,300,300);

//The outer part of the eyes
  fill(182, 235, 7);
  ellipse(75,-75,50,50);
  ellipse(-75,-75,50,50);

// Inner part of the eyes
  fill(255,0,230);
  ellipse(75,-75,30,30);
  ellipse(-75,-75,30,30);
  pop()

//The hair1
push();
fill(27, 110, 26);
triangle(400,300,-300,400,-400,300);
pop();

//The hair2
push();
fill(27, 110, 26);
triangle(400,300,300,-400,400,-300);
pop();

//The hair3
push();
fill(27, 110, 26);
triangle(400,300,-300,-400,-400,-300);
pop();

//The neck
  push()
  translate(400,600);
  fill(61, 156, 224);
  ellipse(0,0,100,100);
  pop()

//The body
  push()
  translate(400,775);
  fill(240, 52, 198);
  rectMode(CENTER);
  rect(0,0,200,250);
  pop()

//This is me trying to make a frown
  push()
  translate(200,800);
  noFill();
  arc(200,-350,100,50,60,60,HALF_PI, PI);
  pop()

//Title
  textSize(40);
  fill(7, 167, 182);
  text("The Crabby Monster",400,140);





}

function draw() {

}
