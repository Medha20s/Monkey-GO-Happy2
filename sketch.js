
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  survivalTime=0;
  
}


function draw() {
  
  background("white");
  
  food();
  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time :"+ survivalTime, 100,50);
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
  
  
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  

  monkey.velocityY = monkey.velocityY + 0.8
  
  
  drawSprites();
}

function food (){
  if (World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-6;
    banana.lifetime=100;
    banana.scale=0.1;
    
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(600,315,10,40);
   obstacle.velocityX = -5;
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      case 2: obstacle.addImage(obstacleImage);
              break;
      case 3: obstacle.addImage(obstacleImage);
              break;
      case 4: obstacle.addImage(obstacleImage);
              break;
      case 5: obstacle.addImage(obstacleImage);
              break;
      case 6: obstacle.addImage(obstacleImage);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}
