let birdImage;
let wolfImage;
let lionImage;
let frogImage;

let birdSound;
let wolfSound;
let lionSound;
let frogSound;


function preload(){
    birdImage = loadImage('images/parrot.png');
    wolfImage = loadImage('images/wolf.png');
    lionImage = loadImage('images/lion.png');
    frogImage = loadImage('images/frog.png');

    wolfSound = loadSound('sounds/wolf.mp3');
    frogSound = loadSound('sounds/frog.mp3');
    birdSound = loadSound('sounds/parrot.mp3');
    lionSound = loadSound('sounds/lion.mp3');
}

function setup(){
    createCanvas(1250,500);
    background(0);
    noStroke();
}

function draw(){
    //images
    fill(0,0,255);
    rect(100,100,150,150)
    fill(169);
    rect(400,100,150,150);
    fill(227, 177, 39);
    rect(700,100,150,150);
    fill(31, 166, 92);
    rect(1000,100,150,150);
    //sound buttons
    fill(255)
    rect(100,300,150,40);
    rect(400,300,150,40);
    rect(700,300,150,40);
    rect(1000,300,150,40);
    fill(0);
    text('Sound #1', 150,323);
    text('Sound #2', 450, 323);
    text('Sound #3', 750, 323);
    text('Sound #4', 1050, 323);
    //KEYBOXES
    fill(255, 255, 255);
    text('Hold Left Arrow Key to choose Parrot', 80,370);
    text('Hold Right Arrow Key to choose Wolf', 380,370);
    text('Hold Up Arrow Key to choose Lion', 680,370);
    text('Hold Down Arrow Key to choose Frog', 980,370);
    
    image(birdImage, 100, 100, 150, 150);
    image(wolfImage, 400, 100, 150, 150);
    image(lionImage, 700, 100, 150, 150);
    image(frogImage, 1000, 100, 150, 150);
}

function mouseClicked(){
    if(mouseX > 100 && mouseX < 250 && mouseY > 300 && mouseY < 340){
        console.log(wolfSound.isPlaying());
        wolfSound.play();
        console.log(wolfSound.isPlaying());
        setTimeout(() => {
            if(keyIsDown(RIGHT_ARROW) || mouseX > 400 && mouseX < 550 && mouseY > 100 && mouseY < 250){
                text('Correct!', 150,400);
            }
        
            else{
                text('Wrong!', 150, 400);
            }}, 3000);

     }
  
     if(mouseX > 400 && mouseX < 550 && mouseY > 300 && mouseY <340){
        frogSound.play();
        setTimeout(() => {
            if(keyIsDown(DOWN_ARROW)){
                text('Correct!', 450,400);
            }
        
            else{
                text('Wrong!', 450, 400);
            }}, 3000);
     }
  
     if(mouseX > 700 && mouseX < 850 && mouseY > 300 && mouseY <340){
        birdSound.play();
        setTimeout(() => {
            if(keyIsDown(LEFT_ARROW)){
                text('Correct!', 750,400);
            }
        
            else{
                text('Wrong!', 750, 400);
            }}, 3000);
     }

    if(mouseX > 1000 && mouseX < 1150 && mouseY > 300 && mouseY <340){
        lionSound.play();
        setTimeout(() => {
            if(keyIsDown(UP_ARROW)){
                text('Correct!', 1050,400);
            }
        
            else{
                text('Wrong', 1050, 400);
            }}, 3000);
    }


}