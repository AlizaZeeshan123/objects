function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(500, 300, 100, 70);
  box1 = createSprite(350,350,70,30)
  box2 = createSprite(350,150,60,90) 
  box1.velocityY = -3
}

function draw() {
  background("lightgreen");  
  moving.x = mouseX
  moving.y = mouseY
  if (collision(fixed,moving)){
fixed.shapeColor = "blue"
moving.shapeColor = "lightblue"
  }else{
    fixed.shapeColor = "red"
    moving.shapeColor = "orange"  
  }
if(collision(box1,box2)){
  box1.visible = false
  box2.visible = false
}else{
  box1.visible = true
  box2.visible = true
}
  
  drawSprites();
}

