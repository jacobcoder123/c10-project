var ship ;
var ship_moveing ;
var sea;
var sea_Img;
function preload()
{
 ship_moveing = loadAnimation("ship-4.png","ship-3.png","ship-2.png","ship-1.png")
 sea_Img = loadImage("sea.png");
}

function setup() 
{
  createCanvas(400,400);
  sea = createSprite (200,200,400,400);
  sea.addImage ("flow",sea_Img);
  sea.scale=0.3
  ship = createSprite(200,275,20,50);
  ship.addAnimation("moveing",ship_moveing)
  ship.scale = 0.2
 
}


function draw() 
{
  background("blue");
  sea.velocityX = -2
  if(sea.x<0
  {
    sea.x = sea.width/2 ;
  }
 drawSprites();
}