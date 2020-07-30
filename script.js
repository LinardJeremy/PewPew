// C'est de la merde ça marche pas ! et j'ai aucune idée pour l'améliorer ! 
// Exo trop dur pour mon cerveau limité, je ne vois absolument pas quoi faire

let canvas = document.getElementById("playZone");
let score = document.getElementById('score');
let s =1;
// score.innerHTML=0;
let ctx = canvas.getContext("2d");
let x = 50;
let y = 450;
let my= 400;
let mx;
let dx = 4;
 let dy = -3;
 let xx =2;
let rightPressed = false;
let leftPressed = false;
let spacePressed = false;
let randomX = Math.random()*450;
let randomY = Math.random()*350;
let touch = false;
document.getElementById("restart").disabled = true;


document.getElementById("start").addEventListener('click', function(){
let interval = setInterval(draw,15);
document.getElementById("start").disabled = true;
  
   function endGame(){
    if (s==11){
       clearInterval(interval);
       ctx.clearRect(0,0,canvas.width,canvas.height);
       ctx.fillStyle= 'blue';
       ctx.font = 'bold 50px serif';
       ctx.fillText('Partie finie, GG',50,250);
document.getElementById("restart").disabled = false;
       

     }
   }
    setInterval(endGame,15);

})
document.getElementById("restart").addEventListener('click', function(){
  document.getElementById("restart").disabled = true;
  document.getElementById("start").disabled = true;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  let interval =setInterval(draw,15);
  score.innerHTML = 0;
  s=1;
  function endGame(){
    if (s==11){
      clearInterval(interval);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle= 'blue';
      ctx.font = 'bold 50px serif';
      ctx.fillText('Partie finie, GG',50,250);
      document.getElementById("restart").disabled = false;


    }
  }
  setInterval(endGame,15);

});

function drawRect() {
ctx.beginPath();
 ctx.rect(x, y, 50, 50);
 ctx.fillStyle = "#FF0000";
 ctx.fill();
 ctx.closePath();
}
function missile(){
let mx =x;
ctx.beginPath();
ctx.rect(mx,my, 20, 20);
 ctx.fillStyle = "blue";
 ctx.fill();
 ctx.closePath();

}
 function ennemies(){
 ctx.beginPath();
 ctx.rect(randomX, randomY, 30, 30);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
 }
 function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawRect();
  missile();
  ennemies();
  my += dy;
  randomX += xx;
      if(randomX + xx > (canvas.width-50) || randomX+ xx < 0) {
      xx = -xx;
    }
  if(rightPressed) {
     x += dx;
    
    if (x + dx > 450){
      x = 450;
  }
}
else if(leftPressed) {
    // x += -dx;
    x +=-dx;
    if (x < 0){
      x = 0;
  }  
  }
}
// let interval = setInterval(draw,15);
 function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
      rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft") {
      leftPressed = false;
  }
}
function spaceShoot(e){
  if(e.keyCode == 32) {
    spacePressed = true;
    if (my<0){
      my = 400;
    }
     if (spacePressed ===true) {
    // return draw();
     }
}
}
function spaceNot(e){
  if(e.keyCode == 32 ) {
    spacePressed = false;
}
}
function collide (){
if (x < randomX+ 30 &&
  x + 30 > randomX &&
  my < randomY + 30 &&
  20 + my > randomY) {
   // collision détectée !
 randomY = Math.random()*400;
 randomX = Math.random()*450;
 touch = true;
    console.log("touche");
    score.innerHTML= s;
    if (touch===true){
    touch = false;
    s++;
    }
}
}

setInterval(collide,30);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", spaceShoot, false);
document.addEventListener("keyup", spaceNot, false);

