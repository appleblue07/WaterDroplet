
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {

    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
});


/** 플레이어 이동*/
const player = document.getElementById("player");
let playerX = window.innerWidth / 2;

let leftPressed = false;
let rightPressed = false;

document.addEventListener("keydown", (event) => {

    if(event.key == "a"){
        leftPressed = true;
    }

    if(event.key == "d"){
        rightPressed = true;
    }
});

function update(){

    if(leftPressed){
        playerX -= 30;
    }

    if(rightPressed){
        playerX += 30;
    }

    player.style.left = playerX + "px";
    leftPressed = false;
    rightPressed = false;
    requestAnimationFrame(update);
}

update();





console.log("연결 완");