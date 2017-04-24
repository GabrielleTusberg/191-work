var objArr= []
var starArr = []
var mx =  0;
var my = 0;

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);

  for(var i= 0; i < 50; i++){
    starArr.push( new Stars(random(width)-width/2, random(height)-height/2, -100, random(5,20)) );
  }

}
function draw(){
  background(10);

  mx = mouseX-width/2;
  my = mouseY- height/2;

  for(var j = 0; j< starArr.length; j++){
    starArr[j].display();
  }

  for(var i = 0; i< objArr.length; i++){
    objArr[i].display();
    objArr[i].move();
    objArr[i].collisionCheck(objArr,i);
  }
  if (objArr.length < 1) {
         spawnSpike();
     }
}
function spawnSpike(){
    for (var i = 0; i < 6; i++) {
        objArr.push( new Spikes3d (
          random(-width/2, width/2),
          random(-height/2, height/2),
          0,
            random(80, 180),
            random(0, 5)
        ));
    }
}

function mouseCollision(obj, idx){
    var collision = false;

    var distance = dist(obj.pos.x, obj.pos.y, mx, my);

    if (distance <= obj.rad) {
        collision = true;
    }
    if (collision) {
        objArr.splice(idx,1);
    }
}
