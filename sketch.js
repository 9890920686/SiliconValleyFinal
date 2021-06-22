var player1 , player2 , top1 , top2 , bottom1, bottom2
var left1 , left2 , right1, right2
var goalpostplayer1 , goalpostplayer2
var footballpitch , football , footballspr
var player1img , player2img
var scoreplayer1 = 0 ;
var scoreplayer2 = 0 ;
 gameState="serve";

function preload(){

football = loadImage("Football.png")

footballpitch = loadImage("Footballpitchnew.jpg")

player1img = loadImage("player1.png")

player2img = loadImage("player2.png")

}

function setup(){

createCanvas(500,600)

createEdgeSprites();



top1 = createSprite(250,0,500,10)
top2 = createSprite(250,170,500,2)

bottom1 = createSprite(250,430,500,2)
bottom2 = createSprite(250,600,500,10)

left1 = createSprite(0,300,10,600)
left2 = createSprite(15,300,2,600)

right1 = createSprite(485,300,2,600)
right2 = createSprite(500,300,10,600)

goalpostplayer1 = createSprite(250,560,109,25)
goalpostplayer2 = createSprite(250,40,109,25)

player1 = createSprite(250,510,50,10)
player2 = createSprite(250,90,50,10)

footballspr = createSprite(250,300,10,10)
footballspr.addImage(football)
footballspr.velocityX=0
footballspr.velocityY=0

footballspr.scale=0.20

player1.addImage(player1img)
player2.addImage(player2img)

player1.scale=0.5
player2.scale=0.5

player1.setCollider("rectangle",0,0,90,90)
player2.setCollider("rectangle",0,0,90,90)

top1.shapeColor="white"
top2.shapeColor="white"

bottom1.shapeColor="white"
bottom2.shapeColor="white"

left1.shapeColor="white"
left2.shapeColor="white"

right1.shapeColor="white"
right2.shapeColor="white"

goalpostplayer1.shapeColor="black"
goalpostplayer2.shapeColor="black"

}

function draw(){

background(footballpitch)

if(gameState == "serve"){

fill("black")
textSize(15)
text("Press space to start the game",149,225)  

fill("black")
textSize(15)
stroke("red")
strokeWeight(5)
text("use Arrow keys",320,550)
text("use WASD keys",320,100)



}

if(keyDown("space")){

    ballMovement();
    gameState="play"
    
}

if(footballspr.isTouching(goalpostplayer1) || footballspr.isTouching(goalpostplayer2)){

    gameState="stop"

}

if(footballspr.y>600 || footballspr.y<0){
    footballspr.x=250
    footballspr.y=300
}

if(gameState=="stop"){

    if(footballspr.isTouching(goalpostplayer1)){
        scoreplayer2=scoreplayer2 + 1
    }

    if(footballspr.isTouching(goalpostplayer2)){
        scoreplayer1=scoreplayer1 + 1
    }
    
    fill("black")
    textSize(15);
    text("press space to serve again",150,235)

        footballspr.x=250
        footballspr.y=300

        footballspr.velocityX=0
        footballspr.velocityY=0
}

if(scoreplayer1 == 5){
    gameState="p1w"
}
if(scoreplayer2 == 5){
    gameState="p2w"
}

if(gameState == "p1w"){
    
    fill("red")
    textSize(15)
    text("Player 1 won refresh the page to restart",150,230)

    footballspr.x=250
    footballspr.y=300

    footballspr.velocityX=0
    footballspr.velocityY=0
}

if(gameState == "p2w"){
    
    fill("red")
    textSize(15)
    text("Player 2 won refresh the page to restart",150,235)

    footballspr.x=250
    footballspr.y=300

    footballspr.velocityX=0
    footballspr.velocityY=0
}




footballspr.bounceOff(player1);
footballspr.bounceOff(player2);

fill("black")
textSize(15)
noStroke()
text("Player1: "+scoreplayer1 , 40,360)
text("Player2: "+scoreplayer2 , 40, 260)

player1.velocityX=0
player1.velocityY=0

player2.velocityX=0
player2.velocityY=0



footballspr.bounceOff(right1);
footballspr.bounceOff(left2);

//player1 limits

if(player1.isTouching(goalpostplayer1)){
player1.y=player1.y-5
}

if(player1.isTouching(bottom1)){
player1.y=player1.y+5
}

if(player1.isTouching(left2)){
player1.x=player1.x+5
}

if(player1.isTouching(right1)){
player1.x=player1.x-5
}

//player2 limits

if(player2.isTouching(goalpostplayer2)){
player2.y=player2.y+5
}

if(player2.isTouching(top2)){
    player2.y=player2.y-5
}

if(player2.isTouching(left2)){
    player2.x=player2.x+5
}

if(player2.isTouching(right1)){
    player2.x=player2.x-5
}



Player1Movement();
Player2Movement();

drawSprites();

}


function Player1Movement(){


if(keyDown(UP_ARROW)){
player1.velocityX=0
player1.velocityY= (-5) 
}

if(keyDown(DOWN_ARROW)){

player1.velocityX=0
player1.velocityY=5

}
if(keyDown(LEFT_ARROW)){
player1.velocityX=-5
player1.velocityY=0
}
if(keyDown(RIGHT_ARROW)){

player1.velocityX=5
player1.velocityY=0
}

}

function Player2Movement(){
if(keyDown("a")){
player2.velocityX=-5
player2.veocityY=0
}
if(keyDown("d")){
player2.velocityX=5
player2.velocityY=0
}
if(keyDown("w")){
player2.velocityX=0
player2.velocityY=-5
}
if(keyDown("s")){
player2.velocityX=0
player2.velocityY=5
}

}

function ballMovement(){

    footballspr.velocityX=3
    footballspr.velocityY=4
}

