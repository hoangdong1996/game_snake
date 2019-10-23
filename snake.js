function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function () {
        ctx.fillStyle = "green";
        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    };

    this.update = function () {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total - 1] = {x: this.x, y: this.y};

        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        if (this.x < 0) {
            this.x = canv.width;
        }
        if (this.x > canv.height) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = canv.height;
        }
        if (this.y > canv.height) {
            this.y = 0;
        }
    };
    
    this.eat = function (food) {
        if (this.x === food.x && this.y === food.y) {
            this.total++;
            return true;
        }
        return false;
    };

    this.changeDirection = function (evt) {
        switch (evt.keyCode) {
            case 37 : //left
                this.xspeed = -scale;
                this.yspeed = 0;
                break;
            case 38: //up
                this.xspeed = 0 ;
                this.yspeed = -scale;
                break;
            case 39: //right
                this.xspeed = scale;
                this.yspeed =  0;
                break;
            case 40: //down
                this.xspeed = 0;
                this.yspeed = scale;
                break;
        }
    };

    this.score = function () {
        ctx.fillStyle = "black";
        ctx.fillText ("SCORE: " + this.total, 10, canv.height - 10);
    };
}