let user=[];
let game=[];
let heading = document.querySelector("p");
let level=0;
let state="not started";

function change(){
    if (state==="not started")
    {
        levelup();
        state = "started";
        flash();
    }
    press();
}
document.addEventListener("keydown",change);
function levelup(){
    level++;
    heading.innerText = `level ${level}`;
}

function flash() {
    let color = ["red", "yellow", "orange", "pink"];
    let randind = Math.floor(Math.random() * 4);
    let rand_color = color[randind];
    let rand_div = document.querySelector(`#${rand_color}`);
    let ocolor=rand_div.getAttribute("id");
    setTimeout(()=>{rand_div.style.backgroundColor="white"},250);
    setTimeout(()=>{rand_div.style.backgroundColor=ocolor},450);
    //console.log(rand_div);
    game.push(rand_color);
    console.log(game);
}
let btns=document.querySelectorAll(".hi");
//console.log(btns);
function press(){
    for(btn of btns ) {
        btn.addEventListener("click",tap);
    }
}
function tap() {
    if(state==="started"){
    //console.log(this);
    let ocolor = this.getAttribute("id");
    setTimeout(() => {
        this.style.backgroundColor = "aqua"
    }, 250);
    setTimeout(() => {
        this.style.backgroundColor = ocolor
    }, 450);
    user.push(this.id);
    console.log(user);
    check();
}
}
   function check(){
        if(user[user.length-1]!==game[user.length-1]){
         // console.log("wrong");
          heading.innerText=("GAME OVER PRESS ANY KEY TO RESTART!! YOUR SCORE IS:"+(level-1));
          reset();
          return;
        }
         // console.log("right");
          //setTimeout(flash,2000);
          if(user.length===game.length){
              levelup();
              user=[];
              setTimeout(flash,500);
            }
    }
     function reset(){

    state="not started";
    level=0;
    game=[];
    user=[];
    }