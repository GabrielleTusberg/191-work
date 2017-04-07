
//want to make more bouncing balls
var bg_color = '#d78fca';

var bouncingballs = [];
var boballs =[1,2];

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(bg_color);

    for (var i = 0; i < 400; i++) {
        bouncingballs.push(
            new BouncingBall(random(width), random(height), random(100), random(10) )
        );
    }
}

function draw() {
    background(bg_color);

    for (var i = 0; i < BouncingBall.length; i++) {
        bouncingballs[i].display();
        bouncingballs[i].move();
    }

}
