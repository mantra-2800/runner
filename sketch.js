var runner;
var hurdle
var score = 0;
var track,hurdles
var back;
var hurdleGroup;
var invisibleG;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
var gameState=END;
var over;
var gameOver;

function preload(){
man_running=loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png");
ground = loadImage("track.jpeg");
hurdle1 = loadImage("hurdle.png");
back1 = loadImage("ground2.png");
over = loadImage("gameOver.png");
gameState=PLAY
}
function setup(){
createCanvas(800,600)

track = createSprite(400,300,800,600);
track.addImage("TRACK1",ground);

gameOver = createSprite(200,200,40,40);
gameOver.addImage(over)
gameOver.visible = false;

runner = createSprite(300,350,150,150)
runner.addAnimation("RUNNER1",man_running);
runner.scale = 0.5;
runner.setCollider("circle",0,0,70)
runner.debug = true;

invisibleG = createSprite(109,599,2000,40)
invisibleG.visible = false;

hurdleGroup=new Group();

if(track.x<500){
    track.x=track.width/2
}

}
function draw(){
background("white")
if(gameState===PLAY){
hurdleGroup = createGroup();
runner.collide(invisibleG);

if(keyDown("SPACE")){
runner.velocityY = -10;
}
runner.velocityY = runner.velocityY+0.5;

if(hurdleGroup.isTouching(runner)){
    gameState = END;
    console.log("runner touch obstacle")
}
}

if(gameState===END){
gameOver.visible = true;

}

spawnHurdle();
drawSprites();

}
function spawnHurdle(){
if(frameCount%100===0){
    hurdle = createSprite(600,400,150,150);
    hurdle.addImage("HURDLES",hurdle1);
    hurdle.scale = 0.5;
    hurdle.velocityX = -2; 
    hurdle.debug = true
    hurdleGroup.add(hurdle);
}



}