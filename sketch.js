var scene;

var bottle1,bottle2,bottle3;
var pt1,pt2,pt3,pt4;

var gun,bullet;

function preload(){
  backgroundImage=loadImage("Images/background.png")
  gunimage=loadImage("Images/gun.png")
  bottle = loadImage("Images/bottle.png")
  barrel = loadImage("Images/barrel.png")
}
function setup() {
  createCanvas(1200,1000);
  
  scene  = createSprite(600,500,1200,1000);
  scene.addImage(backgroundImage);
  scene.scale = 1.5;
  gun=createSprite(1000,630,10,10);
  gun.addImage(gunimage);
  gun.scale = 0.7;
   

  pt1=createSprite(200,600,10,10);
  pt1.addImage(barrel);
  pt2=createSprite(370,500,10,10);
  pt2.addImage(barrel);
  pt3=createSprite(530,550,10,10);
  pt3.addImage(barrel);

  bottle1=createSprite(195,470,80,80);
  bottle1.addImage(bottle);
  bottle1.scale = 0.3
  bottle2=createSprite(360,370,80,80);
  bottle2.addImage(bottle);
  bottle2.scale = 0.3
  bottle3=createSprite(520,430,80,80);
  bottle3.addImage(bottle);
  bottle3.scale = 0.3

 // pt4=new platform(900,830,1800,30)

}

function draw() {
  background(255);  

  drawSprites();
  camera.position.x = mouseX;
  camera.position.y = mouseY;

  if(mousePressedOver(bottle1)){
    bottle1.addImage()
  }
               

}