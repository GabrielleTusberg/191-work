var bg;
var bird
var value = 0;
var areaArr =[];
var sound1
var sound2
var sound3
function preload(){
sound1=loadSound('sound/sun.mp3');
sound2=loadSound('sound/rain.mp3');
sound3=loadSound('sound/birdnoise.mp3');

bird = loadImage("images/bird.png");
bg = loadImage("images/background.png");
}

function setup() {
//createCanvas(3515,2605);
createCanvas(windowWidth, windowHeight);

areaArr.push(new Regions("ellipse",width*0.842,height*0.15,width*0.26,width*0.26, sound1));
areaArr.push(new Regions("rect", width*.16, height*.38,width*.142,height*.768, sound3));
areaArr.push(new Regions("rect",width*.48,height*.9,width, height*.253, sound2));


//areaArr.push(new Regions("rect",,900,900));
//areaArr.push(new Regions("ellipse",))

}

function draw() {
image(bg,0,0,width,height);
for (var i = 0; i < areaArr.length; i++) {
  // areaArr[i].display();
  areaArr[i].checkMouse();

// console.log(mouseX,mouseY);

cursor("images/bird.png",16,16);

}
}

///function mousePressed() {
//  if (value == 0) {
  //  value = 255;
  //} else {
  //  value = 0;
  //}
//}
