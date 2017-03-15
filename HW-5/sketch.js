// defining a variable called "linept" are storing an empty object in that variable
var linept={};
//defining a varible "g" and assiinging the value ten;
var g=10;

//p5 set up function
function setup() {
  //define a canvas element width 500 pixels, H 500 pixels
  createCanvas(500,500);
//set background color
  background(10, 9, 9);

//define parameters for object "linept"
//centerX and centerY are focal points of our line objects
  linept.centerX = 0;
  linept.centerY = height/2;
//coordinates
  linept.X= 0;
  linept.Y= 0;

//how fast draw is called
  frameRate(60);

} // end of setup function




//p5 function that repeats itself
function draw() {


  // incrementing variable "g" by 5 modulo 254 so it does not exceed this value
  g= (g + 5) % 254;
//set stroke color of line objects
//254-"g" is setting the blue to be opposite value of green
//all with an alpha value/ opacity of 40
  stroke(242, g, 254-g, 40);

  // drawlines
  //coordinate one map is coordinate 2, X2 Y2
  line(linept.centerX, linept.centerY, map(linept.X, 0, width, -width, width*2), linept.Y);

//updating position of X2
// by adding a random value between 10 and 80 modulo so we don't exceed the width
  linept.X= linept.X + random(10,80);
  linept.X= linept.X % width;


  console.log (linept.X);
  linept.Y= linept.Y + random(10,40);
  linept.Y=linept.Y % height;

  linept.centerX += 0.1;
}
