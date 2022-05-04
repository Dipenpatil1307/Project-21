var spaceImg,space;
var meteorImg,meteor,mateorsGroup;
var rocketImg,rocket;
var gameState = "play";


function preload(){
spaceImg = loadImage("Space.png");
meteorImg = loadImage("Meteor.png");
rocketImg = loadImage("Rocket.png");
}

function setup() {
 createCanvas(400,600);

space = createSprite(200,300);
space.addImage("space",spaceImg);
space.velocityY=2;
space.scale = 2.2;





meteorsGroup = new Group();

rocket = createSprite(200,400,40,40);
rocket.addImage("rocket",rocketImg);
rocket.scale = 0.2;
}


function draw() {
background("black");

if(space.y>400){
space.y=300
}

if(gameState === "play"){

if(keyDown(LEFT_ARROW)){
rocket.x=rocket.x -8;
}

if(keyDown(RIGHT_ARROW)){
rocket.x=rocket.x +8;
}

}
spawnMeteors();

if(meteorsGroup.isTouching(rocket)){
rocket.destroy();
rocket.velocityY=0;
meteor.destroy
gameState = "end";

}



function spawnMeteors(){
if(frameCount % 120 == 0){

var meteor = createSprite(200,-50);
meteor.x=Math.round(random(50,400));
meteor.addImage(meteorImg); 
meteor.velocityY = 3;
meteor.scale = 0.04


meteor.setLifeTime = 700;
rocket.depth = meteor.x
meteorsGroup.add(meteor);
}

}


 
drawSprites();
}