var monkey, monkey_running,invisibleGround;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0;
var play=0;
var end=1;
var gameState=play;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {

  createCanvas(400, 400);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  invisibleGround=createSprite(200,380,400,10);
  //invisibleGround.visible=false;
  
   bananaGroup=new Group();
   obstaceGroup=new Group();
  
}


function draw() {
  background("white");
  
  if(gameState===play){
    
    if(keyWentDown("space")){
      monkey.velocityY=-12;
      }
    
    if(monkey.isTouching(obstaceGroup)){
      gameState=end;
      }
    if(monkey.isTouching(bananaGroup)){
      score=score+5;
       }
    
  spawnObstacles();
  spawnFood();
    
 
    
  }
  else if (gameState===end){
  
    obstaceGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
    obstacle.lifetime=-1;
    banana.lifetime=-1;
    
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleGround);
  
  text("score:"+score,350,20);
  
   drawSprites();

}

function spawnObstacles(){
  
 if(frameCount%150===0){
   obstacle=createSprite(200,330,10,10);
   obstacle.addImage(obstaceImage);
   obstacle.scale=0.25;
   obstacle.velocityX=-8;
   obstacle.lifetime=100;
   obstaceGroup.add(obstacle);
 }
}

function spawnFood(){
  
  if(frameCount%150===0){
    banana=createSprite(200,240,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-8;
    banana.lifetime=100;
    bananaGroup.add(banana);
  }
}


