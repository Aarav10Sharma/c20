var fixedRect, movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,50)
  fixedRect.shapeColor="green"
  movingRect=createSprite(400,200,100,50)
  movingRect.shapeColor="orange"
  fixedRect.debug=true
  movingRect.debug=true
  
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX
  movingRect.y = World.mouseY
  console.log(movingRect.x-fixedRect.x)
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)  {

    fixedRect.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else { 
    movingRect.shapeColor="orange"
    fixedRect.shapeColor="green"
  }
  drawSprites()
}