var botao1;
var botao2;
var box1,box2

function setup(){
 createCanvas(1280, 570)
botao1 = createSprite(200,200,250,70)
botao2 = createSprite(200,300,250,70)

box1 = createSprite(850,400,900,500)
box2 = createSprite(850,100,900,100)
}

function draw(){
background('black')

drawSprites()
}

function mousePressed(){

}