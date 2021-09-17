var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bullets = 70;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bullet_Image = loadImage("assets/bullet.png")
  bgImg = loadImage("assets/bg.jpeg");
  Zombie_Image = loadImage("assets/zombie.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300);

   bulletgroup = new Group();
   Zombiegroup = new Group();

}

function draw() {
  background(0); 

    


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  bullet = createSprite(displayWidth-1150,player.y-25,20,10);
  bullet.velocityX=10;
  bullet.addImage(bullet_Image);
  bullet.scale = 0.1;
  bullets = bullets-1;
  bullet.lifetime=displayWidth/2;
  player.depth=bullet.depth;
  player.depth+=2;
  bulletgroup.add(bullet);
  player.addImage(shooter_shooting);
  

 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
enemy();
drawSprites();

}
function enemy(){
  if(frameCount%50===0){
    Zombie = createSprite(random(500,1100),random(100,500),40,40);
    Zombie.velocityX = -3;
    Zombie.addImage(Zombie_Image);
    Zombiegroup.add(Zombie);
    Zombie.scale=0.15;
  }
}