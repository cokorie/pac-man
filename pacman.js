class Pacman {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
    }

    moveProcess() {
        this.changeDirectionIfPossible();
        this.moveForwards();
        if(this.checkCollision()) {
            this.moveBackwards();
        }
    }

    eat() {

    }

    moveBackwards() {

    }

    moveForwards() {
        switch(this.direction) {
            
        }
    }

    checkCollision() {

    }

    checkGhostCollision() {

    }

    changeDirectionIfPossible() {

    }

    changeAnimation() {

    }

    draw() {

    }
}