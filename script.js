score = 0;
cross = true;
document.onkeydown = function (e) {
//   console.log(e.keyCode);
  if (e.keyCode == 38) {
    soldier = document.querySelector(".soldier");
    // console.log(soldier);
    soldier.classList.add("soldierAni");
    setTimeout(() => {
      soldier.classList.remove("soldierAni");
    }, 1000);
  }
  if (e.keyCode == 39) {
    soldier = document.querySelector(".soldier");
    soldierX= parseInt(window.getComputedStyle(soldier,null).getPropertyValue('left'));
    soldier.style.left = soldierX + 100 +"px";
  }
  if (e.keyCode == 37) {
    soldier = document.querySelector(".soldier");
    soldierX= parseInt(window.getComputedStyle(soldier,null).getPropertyValue('left'));
    soldier.style.left = soldierX - 100 +"px";
  }
};
setInterval(() => {
    // console.log(score)
  soldier = document.querySelector(".soldier");
  gameOver = document.querySelector(".gameover");
  fire = document.querySelector(".fire");
  boom = document.querySelector(".boom");

  soldierX= parseInt(window.getComputedStyle(soldier,null).getPropertyValue('left'));
  soldierY= parseInt(window.getComputedStyle(soldier,null).getPropertyValue('bottom'));

  fireX= parseInt(window.getComputedStyle(fire,null).getPropertyValue('left'));
  fireY= parseInt(window.getComputedStyle(fire,null).getPropertyValue('bottom'));
    // console.log(fireX,fireY);
    // console.log(soldierX,soldierY);
    difX=Math.abs(soldierX-fireX);
    difY=Math.abs(soldierY-fireY);
    // console.log(difX);
    if(difY<73 && difX<90) {
        // console.log(gameOver);
        fire.classList.remove("fireAni");
        gameOver.style.visibility = 'visible';
        boom.style.visibility = 'visible';

    }
    else if(difX<145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
          cross=true;
        },1000)
        setTimeout(()=>{
          fireDuration = parseFloat(window.getComputedStyle(fire,null).getPropertyValue('animation-duration'));
        console.log(fireDuration)
        fire.style.animationDuration = fireDuration - 0.09 +'s';
        },500)
    }
}, 10);

function updateScore(s){
    scr=document.querySelector('.scoreCnt');
    scr.innerHTML = "Your Score: " + s
    // console.log(score)
}
