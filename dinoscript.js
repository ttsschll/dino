// Load the game
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const points = document.getElementById("points");
const highscore = document.getElementById("highscorevalue");
const hint = document.getElementById("hint");

let score = 0;
let beat = new Audio('a-long-way-166385.mp3');
let ouch = new Audio('whip-ouch-323268.mp3');

// Initialise the game
updateHighscore();


function jump() {
    start();

    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 400);
    }
}

function start() {
    if(!cactus.classList.contains("play")) {
        cactus.classList.add("play");
        beat.play();

        hint.classList.add("verpissdich");
    }
}

function updateHighscore() {
    var highscoreValue = localStorage.getItem("highscore");
    points.innerText = score++;
    highscore.innerText = highscoreValue;

    if (score > highscoreValue) {
        localStorage.setItem("highscore", score);
    }
}

document.addEventListener("keydown", function (event) {
    jump();
});

let isAlive = setInterval(function () {
    if (!cactus.classList.contains("play")) return;

    // get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    updateHighscore();


    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // collision
        beat.pause();
        ouch.play();
        alert("YOU LOST!");
        window.location.reload();
        //if(confirm("YOU LOST!")) document.location.reload();
    }
}, 10);

