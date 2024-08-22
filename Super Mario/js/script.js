const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

/* Funções */

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {

        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 88) {
        
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`

        mario.src = "img/game-over.png";
        mario.style.width = "67px";
        mario.style.margin = "25px";

        clearInterval(loop);
    }


}, 10);

/* Eventos */

document.addEventListener("keydown", jump);