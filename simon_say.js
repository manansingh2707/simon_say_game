let gameseq = [];
let userseq = [];

let start = false;
let level = 0;

let highscore = 0;

let btns = ["red", "blue", "green", "orange"];

let h2 = document.querySelector("h2")
let h4 = document.querySelector("h4")
let button = document.querySelector("button");

document.addEventListener("keydown",function (){
    if(start == false){
        console.log("game started");
        start = true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randonidx = Math.floor(Math.random()*3);
    let rcolor = btns[randonidx];
    let randbtn = document.querySelector(`.${rcolor}`);
    gameseq.push(rcolor);
    console.log(gameseq)
    gameflash(randbtn);
}
function gamecheck(idx){
    // let idx = level-1
    if(level > highscore){
        highscore = level;
    }
    if(gameseq[idx] === userseq[idx]){
        if(gameseq.length == userseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h4.innerHTML = `High score: ${highscore}`;
        h2.innerHTML = `Game over! your score is ${level}<br> press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        }, 150)
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn = this
    gameflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    // console.log(userseq);
    gamecheck(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq = []
    level = 0;
    userseq = [];
    start = false;
}
