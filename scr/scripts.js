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

let dropletArr = [];

function createDroplet(){
    if(check_gameStart){
        const droplet = document.createElement("div");
        droplet.className = "droplet";
        document.body.appendChild(droplet);
        
        const x = Math.random() * 1600;
        const y = Math.random() * 900;
        
        const drop = {
            element : droplet,
            x : x,
            y : y,
            speed : 2
        };
        dropletArr.push(drop);
        
        droplet.style.left = drop.x + "px";
        droplet.style.top = drop.y + "px";
    }
}

// 물방울 움직이기
function dropletDrop(){
    for(let i = dropletArr.length - 1 ; i >= 0 ; i--){
        dropletArr[i].y -= dropletArr[i].speed;
        if(dropletArr[i].y < 0) 
        {
            dropletArr[i].element.remove();   // 화면에서 삭제
            dropletArr.splice(i, 1); // 배열에서 삭제
        }
        else dropletArr[i].element.style.top = dropletArr[i].y + "px";
    }
}
setInterval(dropletDrop, 10);


setInterval(createDroplet, 300);



console.log("연결 완");