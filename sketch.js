var fixedRect, movingRect;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,400,100,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(800, 400, 100, 50);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;

  gameObject2 = createSprite(900, 400, 100, 50);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;
  
  
}

function draw() {
  background(0,0,0);  
// to move moving rect along with mouse
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  drawSprites();
}

