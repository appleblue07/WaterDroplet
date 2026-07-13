//const { createElement } = require("react");

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const playBtn = document.getElementById("playBtn");

let check_gameStart = false;

playBtn.addEventListener("click", () => {
    check_gameStart = true;
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
    if(check_gameStart){
        if(leftPressed){
            playerX -= 30;
        }

        if(rightPressed){
            playerX += 30;
        }
    }

    player.style.left = playerX + "px";
    leftPressed = false;
    rightPressed = false;
    requestAnimationFrame(update);
}

update();



// // 랜덤으로 물방울 생성
function CreateDroplet(){
    if(check_gameStart){
        const droplet = document.createElement("div");
        droplet.className = "droplet";
        document.body.appendChild(droplet);

        const x = Math.random() * 1000;
        const y = Math.random() * 1000;
        droplet.style.left = x + "px";
        droplet.style.top = y + "px";
    }
}

setInterval(CreateDroplet, 200);

console.log("연결 완");