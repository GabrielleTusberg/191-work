function Spikes3d (init_x, init_y, size, color, maxSpeed){
    this.pos = { x: init_x, y: init_y };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: random(-10, 10), y: random(-10, 10) };
    this.size = 100;
    this.rad = this.size * 0.5;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxAccSpeed = map(this.size, 40, 120, 1, 0.1);
}

Spikes3d.prototype.display = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(this.size);

    // push();

    // box(this.size, this.size, this.size);

    // pop();

    pop();
};

Spikes3d.prototype.move = function(){

      // this.acc.x = mx - this.pos.x;
      // this.acc.x = random(-3, 3);
      // this.acc.x = constrain(this.acc.x,-this.maxAccSpeed,this.maxAccSpeed);
      this.vel.x += this.acc.x;
      this.vel.x = constrain(this.vel.x,-this.maxSpeed,this.maxSpeed);

      // this.acc.y = my - this.pos.y;
      // this.acc.y = random(-3, 3);
      // this.acc.y = constrain(this.acc.y,-this.maxAccSpeed,this.maxAccSpeed);
      this.vel.y += this.acc.y;
      this.vel.y = constrain(this.vel.y,-this.maxSpeed,this.maxSpeed);


      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;

      if (this.pos.x >= width/2) {
        this.acc.x *= -1;
          this.pos.x = width/2 - this.acc.x;
      } else if (this.pos.x <= -width/2) {
          this.pos.x = -width/2 + this.acc.x;
          this.acc.x *= -1;
      }

      if (this.pos.y >= height/2) {
          this.pos.y = height/2 - this.acc.y;
          this.acc.y *= -1;
      } else if (this.pos.y <= -height/2) {
        this.acc.y *= -1;
          this.pos.y = -height/2 + this.acc.y;
      }
  }


Spikes3d.prototype.collisionCheck = function(spikeArr, myIdx){
    var maxDist, distance, otherSpike;


    for (var i = 0; i < spikeArr.length; i++) {

        var collision = false;

        otherSpike = spikeArr[i];

        if (i !== myIdx) {
            distance = dist(this.pos.x, this.pos.y, otherSpike.pos.x, otherSpike.pos.y);
            maxDist = this.size + otherSpike.size;

            if (distance <= maxDist) {
                collision = true;
            }

            if (collision) {
                this.acc.x *= -1;
                this.acc.y *= -1;
            }

        }

    }
}
