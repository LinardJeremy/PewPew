// C'est de la merde ça marche pas ! et j'ai aucune idée pour l'améliorer ! 
// Pour tirer fléche du haut
// Exo trop dur pour mon cerveau limité, je ne vois absolument pas quoi faire

let canvas = document.getElementById("playZone");
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


document.getElementById('start').addEventListener('click',function start(){
function drawRect() {
ctx.beginPath();
 ctx.rect(x, y, 50, 50);
 ctx.fillStyle = "#FF0000";
 ctx.fill();
 ctx.closePath();
}
function draw() {
  ctx.clearRect(x,y,x+dx,y+dy);
  drawRect();
  if(rightPressed) {
    x += dx;
    if (x + dx > 450){
      x = 450;
  }
}
else if(leftPressed) {
    x += -dx;
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
 if (my+dy<-450){
  my=0;
  clearTimeout(drawMissile);
}

}
function drawMissile() {
   ctx.clearRect(mx, my,mx+dx,my+dy);
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
function drawEnnemies(){
  ctx.clearRect(0,0, canvas.width,canvas.height);
  ennemies();
  randomX += xx;
  if(randomX + xx > (canvas.width-50) || randomX+ xx < 0) {
    xx = -xx;
}

}
setInterval(drawEnnemies,10);
setInterval(draw,10);

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
  if(e.key == "Up" || e.key =="ArrowUp") {
    spacePressed = true;
    console.log(spacePressed);
    if (spacePressed ===true) {
    drawMissile();
    var interval = setInterval(drawMissile,10);
    }
    if (spacePressed===false){
      clearInterval(interval);
    }
}

}
function spaceNot(e){
  if(e.key == "Up" || e.key =="ArrowUp" ) {
    spacePressed = false;
}
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", spaceShoot, false);
document.addEventListener("keyup", spaceNot, false);
});
