function Stars(init_x, init_y, init_z, size) {
    this.rotateX = 0;
    this.rotateY = 0;
    this.rotateZ = 0;
    this.pos_x = init_x;
    this.pos_y = init_y;
    this.pos_z = init_z

    this.size = size;
}

Stars.prototype.display = function() {
    push();
    translate(this.pos_x, this.pos_y, this.pos_z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);



    // fill(255);
    sphere(this.size);

    for (var i = 0; i < 360; i += 36) {
      for (var j = 0; j < 360; j += 36) {

        push();
        rotateY(radians(j));
        rotateX(radians(i + 180));
        translate(0, this.size, 0);
        cone(this.size / 2, this.size * 2);
        pop();
      }
    }


    pop();
}
