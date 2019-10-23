function Food() {
    this.x;
    this.y;

    this.location = function () {
        this.x = Math.floor(Math.random()*column)*scale;
        this.y = Math.floor(Math.random()*row)*scale;

    };
    this.draw = function () {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}