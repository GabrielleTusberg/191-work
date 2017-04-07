//constructor method
function Spikes3d(init_x, init_y, init_z, size) {
    this.rotateX = 0;
    this.rotateY = 0;
    this.rotateZ = 0;
    this.pos_x = init_x;
    this.pos_y = init_y;
    this.pos_z = init_z

    this.size = size;
}

Spikes3d.prototype.display = function() {
    push();
    translate(this.pos_x, this.pos_y, this.pos_z);
    rotateX(this.rotateX);
    rotateY(this.rotateY);
    rotateZ(this.rotateZ);



    sphere(this.size);

    //push();
    //rotateX(Half_PIE);
    //  plane(this.size * 3, this.size * 3);
    //pop();

    push();

    box(this.size * 1.5, this.size * 1.5, this.size * 1.5);


    pop();

    pop();


};


Spikes3d.prototype.rotate_obj = function() {
    var amount = random(-0.1, 0.1);
    var choice = floor(random(3));
    if (choice == 0) {
        this.rotateX += amount;
    } else if (choice == 1) {
        this.rotateY += amount;

    } else if (choice == 2) {
        this.rotateZ += amount;

    }

};
