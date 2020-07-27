// C'est de la merde ça marche pas ! et j'ai aucune idée pour l'améliorer ! 
// Pour tirer fléche du haut
// Exo trop dur pour mon cerveau limité, je ne vois absolument pas quoi faire

let canvas = document.getElementById("playZone");
let score = document.getElementById('score');
let ctx = canvas.getContext("2d");
let x = 50;
let y = 450;
let my= 400;
let mx;
let dx = 2;
 let dy = -2;
 let xx =2;
let rightPressed = false;
let leftPressed = false;
let spacePressed = false;
let randomX = Math.random()*450;
let randomY = Math.random()*400;
let touch = false;
let arrayEnnemies = [];



document.getElementById('start').addEventListener('click',function start(){
  // let ennemie1= new lol(randomX,randomY,"green",55,55);
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
    // x += dx;
    x += 2;
    if (x + dx > 450){
      x = 450;
  }
}
else if(leftPressed) {
    // x += -dx;
    x +=-2;
    if (x < 0){
      x = 0;
  }  
  }
}

function missile(){
let mx =x;
ctx.beginPath();
ctx.rect(mx,my, 50, 50);
 ctx.fillStyle = "blue";
 ctx.fill();
 ctx.closePath();

}
function drawMissile() {
  //  ctx.clearRect(mx,(my+dy),50,50);
     missile();
      my += dy;
  }

// function lol(width, height, color, x, y) {
//    this.width = width;
//      this.height = height;
//      this.x = x;
//     this.y = y;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//  }
 function ennemies(){
 ctx.beginPath();
  ctx.rect(randomX, randomY, 55, 55);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
 }
 function drawEnnemies(){
//  ctx.clearRect(0,randomY, canvas.width,canvas.height);
   ennemies();
   randomX += xx;
   if(randomX + xx > (canvas.width-50) || randomX+ xx < 0) {
     xx = -xx;
 }
 }
  let myVar =setInterval(drawEnnemies,5);

setInterval(draw,20);

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
    console.log(spacePressed);
    if (my<0){
      my = 400;
    }
    if (spacePressed ===true) {
    drawMissile();
    var interval = setInterval(drawMissile,10);
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
  50 + my > randomY) {
   // collision détectée !
    touch = true;
    console.log("touche");
    score.innerHTML= +1;
}
}
setInterval(collide,10);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", spaceShoot, false);
document.addEventListener("keyup", spaceNot, false);
});
