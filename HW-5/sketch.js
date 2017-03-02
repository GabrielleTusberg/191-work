var linept={};
var g=10



function setup() {
  createCanvas(500,500);
  background(10, 9, 9);

  linept.centerX = 0;
  linept.centerY = height/2;
  linept.X= 0;
  linept.Y= 0;

  frameRate(60);


}

function draw() {


  // drawlines
  g= (g + 5) % 254;
  stroke(242, g, 254-g, 40);


  line(linept.centerX, linept.centerY, map(linept.X, 0, width, -width, width*2), linept.Y);
  linept.X= linept.X + random(10,80);
  linept.X= linept.X % width;


  console.log (linept.X);
  linept.Y= linept.Y + random(10,40);
  linept.Y=linept.Y % height;

  linept.centerX += 0.1;
}
