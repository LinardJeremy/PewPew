// C'est de la merde ça marche pas ! et j'ai aucune idée pour l'améliorer ! 
// Exo trop dur pour mon cerveau limité, je ne vois absolument pas quoi faire

let canvas = document.getElementById("playZone");
let score = document.getElementById('score');
let s =0;
score.innerHTML=0;
let ctx = canvas.getContext("2d");
let x = 50;
let y = 450;
let my= 400;
let mx;
let dx = 4;
 let dy = -2;
 let xx =2;
let rightPressed = false;
let leftPressed = false;
let spacePressed = false;
let randomX = Math.random()*450;
let randomY = Math.random()*400;
let touch = false;
let interval = setInterval(drawMissile,15);

// document.getElementById('start').addEventListener('click',start());


ennemies();
setInterval(ennemies, 10);
function drawRect() {
ctx.beginPath();
 ctx.rect(x, y, 50, 50);
 ctx.fillStyle = "#FF0000";
 ctx.fill();
 ctx.closePath();
}
function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawRect();
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

function missile(){
let mx =x;
ctx.beginPath();
ctx.rect(mx,my, 20, 20);
 ctx.fillStyle = "blue";
 ctx.fill();
 ctx.closePath();

}
function drawMissile() {
    ctx.clearRect(mx,(my+dy),50,50);
     missile();
      my += dy;
  }
 function ennemies(){
 ctx.beginPath();
 ctx.rect(randomX, randomY, 55, 55);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
 }
//  function drawEnnemies(){
//   // ctx.clearRect(0,randomY, canvas.width,canvas.height);
//    ennemies();
//     randomX += xx;
//    if(randomX + xx > (canvas.width-50) || randomX+ xx < 0) {
//     xx = -xx;
//  }
//  }
  // let myVar =setInterval(drawEnnemies,5);

setInterval(draw,30);

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
    // var interval = setInterval(drawMissile,10);
    return interval;
     }
}
}
function spaceNot(e){
  if(e.keyCode == 32 ) {
    spacePressed = false;
}
}
function collide (){
if (x < randomX+ 55 &&
  x + 55 > randomX &&
  my < randomY + 55 &&
  20 + my > randomY) {
   // collision détectée !
 randomY = Math.random()*400;
 randomX = Math.random()*450;
 touch = true;
    console.log("touche");
    score.innerHTML= s;
    if (touch===true){
    // clearTimeout(myVar);
    //  setTimeout(myVar,100);
    touch = false;
    s++;
    }
}
// setTimeout(myVar,50);
}
setInterval(collide,10);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", spaceShoot, false);
document.addEventListener("keyup", spaceNot, false);

