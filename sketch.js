var gameState ="start"
var bg =255;
var titleImg,playButtonImg;
var countDownIMG,level1IMG,level2DownIMG,level3IMG, introBGIMG,level1BGImg,levelDisplayBGIMG;;
var level1,level2,level3, title, play, introBg;
var level =0;


function preload()
{
	countDownIMG=loadImage("images/countdown.gif")
  level1IMG=loadImage("images/level1.jpg")
  level2IMG=loadImage("images/level2.jpg")
  level3IMG=loadImage("images/level3.jpg")
  introBGIMG=loadImage("images/intro.jpg")
  titleImg=loadImage("images/title.jpg")
  playButtonImg=loadImage("images/play.png")
  level1BGImg=loadImage("images/level1BG.jpg")
  levelDisplayBGIMG=loadImage("images/leveldisplay.jpg")

}
	

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);

  level1 = createSprite(400,100);
  level1.addImage(level1IMG);
  level1.visible= false;

  level2 = createSprite(400,300);
  level2.addImage(level2IMG);
  level2.visible= false;


  level3 = createSprite(400,500);
  level3.addImage(level3IMG);
  level3.visible= false;

  title = createSprite(450,200);
  title.addImage(titleImg);
  title.visible= false;

  play = createSprite(450,350);
  play.addImage(playButtonImg);
  play.visible= false;


 
}


function draw() {
  rectMode(CENTER);
  

  // INTRO PAGE
  if (gameState ==="start")
  {
    background(introBGIMG);
    title.visible= true;
    play.visible =true;
    play.scale= 0.07;

    if(mousePressedOver(play)) 
    {
      title.visible= false;
      play.visible =false;
      gameState ="levelDisplay"
    }

  }


// LEVEL DISPLAY PAGE
  if (gameState ==="levelDisplay")
  {
    background(levelDisplayBGIMG);
    level1.visible= true;
    level2.visible= true;
    level3.visible= true;

    // CHECK FOR LEVEL1  VALIDITY
    if(mousePressedOver(level1) && level===0) 
    {
      title.visible= false;
      play.visible =false;
      gameState ="level1"
      console.log(level +gameState);
    }


     // CHECK FOR LEVEL2 VALIDITY
    if(mousePressedOver(level2) && level===1) 
    {
      title.visible= false;
      play.visible =false;
      gameState ="level2"
      console.log(level +gameState);
    }

     // CHECK FOR LEVEL3 VALIDITY
    if(mousePressedOver(level3) && level===2) 
    {
      title.visible= false;
      play.visible =false;
      gameState ="level3"
      console.log(level +gameState);
    }


  }

// LEVEL1 BEGINS
  if (gameState ==="level1")
  {

    // SET BACKGROUND IMAGE
    background(level1BGImg);

    //SET THE LEVEL VARIABLE 
    level =1;

    //MAKE THE LEVEL BUTTONS INVISIBLE
    level1.visible= false;
    level2.visible= false;
    level3.visible= false;
  
  }



  // LEVEL2 BEGINS
  if (gameState ==="level2")
  {
    // SET BACKGROUND IMAGE
    background(level2BGImg);

    //SET THE LEVEL VARIABLE 
    level =2;

    //MAKE THE LEVEL BUTTONS INVISIBLE
    level1.visible= false;
    level2.visible= false;
    level3.visible= false;
  
  }



    // LEVEL3 BEGINS
    if (gameState ==="level3")
    {
    // SET BACKGROUND IMAGE
    background(level3BGImg);

    //SET THE LEVEL VARIABLE 
    level =3;

    //MAKE THE LEVEL BUTTONS INVISIBLE
    level1.visible= false;
    level2.visible= false;
    level3.visible= false;
    
    }
  
 




 
  
  drawSprites();
  
}


function myTimeout1()
{
   bg =countDownIMG;
   background(bg);
}