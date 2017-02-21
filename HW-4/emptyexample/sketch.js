var circleX = 0;
var circleY = 0;
var r = 0;
var b = 255;


function setup() {
createCanvas(800,600);
}

function draw() {
// background
r = map(mouseX, 0, 800, 0, 255);
b = map(mouseY, 0, 600, 255,0);
background(r,0,b);

//clicker thing
ellipse(mouseX, mouseY, 100, 30, 30);
fill(179, 40, 174);

//head
translate(350,200);
fill(181, 30, 84);
ellipse(0,0,300,300);

//The outer part of the eyes
push()
fill(230, 171, 178);
ellipse(75,-75,50,50);
ellipse(-75,-75,50,50);
pop()

// Inner part of the eyes
push()
fill(255,0,230);
ellipse(75,-75,30,30);
ellipse(-75,-75,30,30);
pop()

// Inner part of the eyes 2
push()
fill(254, 254, 254);
ellipse(75,-75,10,10);
ellipse(-75,-75,10,10);
pop()

// mouth
push()
fill(0,0,0);
ellipse(0,0,90, 100);
pop()

//blue ball 1
translate(150,100);
fill(88, 17, 221);
ellipse(circleX,0,50,50);
circleX =circleX + 2;


//purple ball 1
translate(200,200);
fill(93, 10, 133);
ellipse(circleX,0,100,100);
circleX =circleX + 1;

//trying to make other balls come down Yaxis
//Y ball orange
translate(350,200);
fill(245, 172, 62);
ellipse(circleY,0,50,50);
circleY =circleY + 2;

// Y ball yellow

translate(350,200);
fill(232, 242, 41);
ellipse(circleY,0,100,100);
circleY =circleY + 1;



}
