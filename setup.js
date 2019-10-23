let canv = document.getElementById("myCanvas");
let ctx = canv.getContext("2d");
let scale = 20;
let row = canv.height/scale;
let column = canv.width/scale;
let snake;
let food;

function setup() {
    snake = new Snake();
    food = new Food();

    food.location();

    let a = window.setInterval(function () {
        ctx.clearRect(0, 0, canv.width, canv.height);
        snake.draw();
        snake.update();
        food.draw();
        if (snake.eat(food)) {
            food.location();
        }
        snake.score();
    },100);
}

window.addEventListener("keydown", function (evt) {
    snake.changeDirection(evt);
});

setup();
