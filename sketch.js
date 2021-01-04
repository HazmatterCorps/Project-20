var garden, gardenImage;
var cat, cat_laying, cat_running, cat_sitting, edges;
var mouse, mouse_standing, mouse_teasing, mouse_sitting, edges;


function preload() {
    //load the images here
    gardenImage=loadImage("garden.png")

    cat_laying = loadAnimation("tomOne.png", "tomFive.png");
    cat_sitting = loadAnimation("tomFour.png", "tomSix.png");
    cat_running = loadAnimation("tomTwo.png", "tomThree.png");

    mouse_standing = loadAnimation("jerryTwo.png", "jerryFive.png");   
    mouse_teasing = loadAnimation("jerryThree.png", "jerryOne.png");
    mouse_sitting = loadAnimation("jerryFour.png", "jerrySix.png");

}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400)
    garden.addImage(gardenImage)


    //create tom and jerry sprites here
    cat=createSprite(900, 650, 100, 100);
    cat.addAnimation("laying", cat_laying);
    cat.scale=0.08

    mouse=createSprite(100, 650,100,100);
    mouse.addAnimation("standing", mouse_standing);
    mouse.scale=0.08
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)*2){
        cat.velocityX = 0;
        cat.addAnimation("sitting", cat_sitting);
        cat.changeAnimation("sitting")
        mouse.addAnimation("sitting", mouse_sitting);
        mouse.changeAnimation("sitting")  
    }

    drawSprites();
}

function keyPressed(){

if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("running", cat_running);
    cat.changeAnimation("running")
    cat.scale=0.1

    mouse.addAnimation("teasing", mouse_teasing);
    mouse.changeAnimation("teasing")
}


}

