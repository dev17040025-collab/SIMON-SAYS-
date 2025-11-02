let gameArr = [];
let userArr = [];
let btns =  ["yellow" , "red" , "green" , "purple"]
let intially = false;
let level =0;
let h2 = document.querySelector("h2");

  document.addEventListener("keypress", function(){
    if(intially === false){
    console.log("Game is started")
    intially = true;
   
     levelUp();
    }
  });

  function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash")
    } ,250)
  }
  function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function() {
        btn.classList.remove("userflash")
    } ,250)
  }

  function levelUp(){
    userArr= [];
      level++;
      h2.innerText = `level ${level}`;

      let randomIdx = Math.floor(Math.random() * btns.length);
      let randomClr = btns[randomIdx];
      let randomBtn = document.querySelector(`.${randomClr}`)
    //   console.log(randomIdx);
    //   console.log(randomClr);
    //   console.log(randomBtn);
       gameArr.push(randomClr);
      console.log(gameArr);
      gameFlash(randomBtn);

    }
  function checkRes(idx){
    if(userArr[idx] === gameArr[idx]){
       if(userArr.length === gameArr.length){
          setTimeout(levelUp(),1000);
       }
    }
    else{
        h2.innerHTML = `Game Over! Your score was<b> ${level}<b>  <br>Press any key to start `;
        document.querySelector("body").style.background = "red";
        setTimeout(function () {document.querySelector("body").style.background = "white" }, 150)
        reset();
    }
  }

  function btnPress(){
    let btn = this;
    userFlash(btn);

    userClr  = btn.getAttribute("id");
    userArr.push(userClr);
    checkRes(userArr.length-1);
  }

  let allbtns =document.querySelectorAll(".btn");
    for(btn of allbtns){
    btn.addEventListener("click", btnPress);
  }

  function reset(){
    gameArr = [];
    userArr = []
    intially= false;
    level = 0;
    
  }