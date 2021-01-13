var fixed,moving ; 

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 100);
  fixed.shapeColor = "white";

  moving = createSprite(200,200,100,50)
  moving.shapeColor = "white"
}

function draw() {
  background("black");  
  if(moving.x - fixed.x <moving.width/2 + fixed.width/2 &&
    fixed.x - moving.x <moving.width/2 + fixed.width/2&&
    moving.y - fixed.y <moving.height/2 + fixed.height/2&&
    fixed.y - moving.y <moving.height/2 + fixed.height/2){
      fixed.shapeColor = "red"
      moving.shapeColor = "red"

  }
  else{
    fixed.shapeColor = "white"
    moving.shapeColor = "white"
  }
  moving.y = mouseY;
  moving.x = mouseX;
  drawSprites();
}