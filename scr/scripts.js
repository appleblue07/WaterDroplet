const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {

    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
});

console.log("연결 완");