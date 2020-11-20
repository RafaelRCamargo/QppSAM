let ascii = ["(>﹏<)", "(◞‸◟)", "(^▼^) ´↑", "(＾～＾)", "•̀ o´•́", "ツ"];

let random

let gameOver = (x) => {
  random = Math.floor(Math.random() * 4);
  if (x == 1) {
    document.querySelector(".reset").style.display = "inline"
    document.querySelector(".reset").style.animation = "reset 1.5s cubic-bezier(0,.18,1,.61)"
    timer.reset();
    
    setTimeout(function () {
      document.querySelector(`.gameOver`).style.display = "none";
      document.querySelector(`.q${qst}`).style.display = "none";
      qst = 1;
      document.querySelector(`.q${qst}`).style.display = "inline";
    }, 1000)
    
    setTimeout(function () {
    document.querySelector(".reset").style.display = "none"
    document.querySelector(".reset").style.animation = ""
    }, 2000)

  } else if (x == 0) {
    document.querySelector(`.gameOver`).style.display = "none";
  } else if (gO == 1) {
    createPopUp("Game Over!", "Traduzindo: Perdeu ಠ_ಠ, mais sorte da próxima vêz!");
    document.querySelector(`.q${qst}`).style.display = "none";
    document.querySelector("span.ascii").innerHTML = ascii[random];
    document.querySelector(`.gameOver`).style.display = "inline";
    gO = 0;
  }
}; // Game Over :(
