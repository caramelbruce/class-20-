var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = 2


  movingRect = createSprite(200,600,80,30);
  movingRect.shapeColor = "red";
  movingRect.velocityY = -2
}

function draw() {
  background("black");  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  //isTouching
  /*
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 ){
    fixedRect.shapeColor = "lightblue";
    movingRect.shapeColor = "lightblue";
  }
  else {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  */

  //bounceOff

  
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 ){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }

   if ( movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 ){
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1);
  }
  



  drawSprites();
}