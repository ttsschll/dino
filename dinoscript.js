const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const points = document.getElementById("points");
const highscore = document.getElementById("highscorevalue");
let score = 0;

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 400);
    }
}

document.addEventListener("keydown", function (event) {
    jump();
});

let isAlive = setInterval(function () {
    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    var highscoreValue = localStorage.getItem("highscore");
    points.innerText = score++;
    highscore.innerText = highscoreValue;

    if (score > highscoreValue) {
        localStorage.setItem("highscore", score);
    }


    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // collision
        alert("YOU LOST!");
        window.location.reload();
        //if(confirm("YOU LOST!")) document.location.reload();
    }
}, 10);

