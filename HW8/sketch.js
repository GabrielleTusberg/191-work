var objArr= []
var starArr = []

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);

  for(var i= 0; i < 3; i++){
    objArr.push( new Spikes3d(random(width)-width/2, random(height)-height/2, 0, 100) );
  }
  for(var i= 0; i < 50; i++){
    starArr.push( new Stars(random(width)-width/2, random(height)-height/2, -100, random(5,20)) );
  }

}
function draw(){
  background(10);
  for(var j = 0; j< starArr.length; j++){
    starArr[j].display();
  }

  for(var i = 0; i< objArr.length; i++){
    objArr[i].display();
    objArr[i].rotate_obj();

  }
}
