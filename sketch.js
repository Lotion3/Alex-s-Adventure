var alex,alexhead,jimmy,jimmyi,w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w16,w17,w18,w19,w20,w21,w22,pr1,pr2,pr3,pr4,pr5,pr6,pr7,pr8,edges,oldman,box,osword,gamestate=10,cp1=0,lever1,lever2,lever3,alexm,alexright,alexleft,alexswitchi=0,oswi,fireball,cratei,m1i,m1,m2i,m2,olmi,m3i,m3,a2,ao,m4i,m4,firei

function preload() {
  alexhead=loadImage("sprite_0.png")
  alexm=loadImage("sprite_Alex0.png")
  alexright=loadAnimation("alexright_0.png","alexright_1.png","alexright_2.png","alexright_3.png","alexright_4.png")
  alexright.frameDelay=0.5
  alexleft=loadAnimation("alexleft_1.png","alexleft_2.png","alexleft_3.png","alexleft_4.png","alexright_0.png")
  alexleft.frameDelay=0.5
  oswi=loadImage("sword_0.png")
  jimmyi=loadImage("jimmy_0.png")
  cratei=loadImage("Crate_0.png")
  m1i=loadImage("message1_0.png")
  olmi=loadImage("oldman_0.png")
  m2i=loadImage("mesage2_0.png")
  m3i=loadImage("m3_0.png")
  ao=loadImage("ao_0.png")
  m4i=loadImage("m6_0.png")
  firei=loadImage("fireball_0.png")
}

function setup() {
  createCanvas(1800,900);
  m1=createSprite(900,450)
  m1.scale=7
  m1.visible=false
  m1.addImage("mim",m1i)
  alex=createSprite(900, 450, 50, 50);
  alex.addImage("alexi",alexm)
  alex.scale=(2)
  oldman=createSprite(1400,830,50,50)
  oldman.visible=false
  oldman.addImage("ok",olmi)
  oldman.scale=1.5
  m2=createSprite(oldman.x,oldman.y-200)
  m2.addImage("min",m2i)
  m2.visible=false
  m2.scale=3
  m3=createSprite(oldman.x,oldman.y-200)
  m3.addImage("nuisa",m3i)
  m3.scale=3
  m3.visible=false

  m4=createSprite(900,450)
  m4.addImage("jkflasbd",m4i)
  m4.scale=13
  m4.visible=false
  edges=createEdgeSprites()
  box=createSprite(150,850)
  box.visible=false
  box.addImage("crat",cratei)
  box.scale=2
  //make apear alexs 1st sword
  osword=createSprite(oldman.x,oldman.y-50,30,80)
  osword.visible=false
  osword.addImage("osi",oswi)
  osword.scale=2
  lever1=createSprite(900,800,50,50)
  lever1.visible=false
  lever2=createSprite(800,800,50,50)
  lever2.visible=false
  lever3=createSprite(700,800,50,50)
  lever3.visible=false

  jimmy=createSprite(1400,800,100,100)
  jimmy.addImage("jimmyr",jimmyi)
  jimmy.visible=false
  jimmy.scale=(20)

  fireball=createSprite(jimmy.x,jimmy.y,30,30)
  fireball.visible=false
  fireball.addImage("qwerty",firei)
}

function draw() {
  background(43, 43, 43);
  console.log(gamestate)
  console.log(alex.x)
  alex.collide(edges) 
  if(gamestate===0){
    osword.visible=false
  }
  if(keyDown("down")){
    alex.velocityY=10
  }
  if(keyDown("left")){
    alex.velocityX=-10
  }
  if(keyDown("right")){
    alex.velocityX=10
  }
  if(keyWentUp("down")){
    alex.velocityY=0
  }
  if(keyWentUp("left")||keyWentUp("right")){
    alex.velocityX=0
  }
  if(keyWentUp("space")&&alex.y>800){
    alex.velocityY=-30
  }

  alex.velocityY=alex.velocityY+1


  if(gamestate===0){
    alex.x=10
    alex.y=10
    oldman.visible=true
    gamestate=1
    m1.visible=false
    alex.visible=true
  }

  if(mousePressedOver(m1)&&gamestate===10){
    gamestate=0
  }
  
if(mousePressedOver(m2)&&gamestate===2){
  m2.visible=false
  m3.visible=true

}

  if(gamestate===10){
   m1.visible=true
   alex.visible=false 
  }


  if(mousePressedOver(lever3)){
    jimmy.visible=true
    gamestate=6
  }
  
  if(gamestate===6){
    lever3.visible=false
    lever2.visible=false
    lever1.visible=false
    fireball.visible=true
    fireball.velocityX=-10
    fireball.y=alex.y
  }

  //if(alex.isTouching(fireball)){
    //fireball.x=jimmy.x
    //fireball.y=jimmy.y
 // }

  if(mousePressedOver(lever3)&&gamestate===5){
    gamestate=6
    lever2.visible=false
    lever1.visible=false
    lever3.visible=false
    cp1=2
  }
 
  if(gamestate===4){
    textSize(80)
    m2.visible=false
    m3.visible=false
  }

  

  if(gamestate===5){
    textSize(30)
    text("1",lever1.x,lever2.y-50)
    text("2",lever2.x,lever2.y-50)
    text("3",lever3.x,lever3.y-50)
    lever3.visible=true
    lever2.visible=true
    lever1.visible=true
    textSize(50)
    text("WKHH",900,450)
  }


  if(alex.x>oldman.x-50&&gamestate===1){
    textSize(30)
    text("Click to talk",oldman.x,oldman.y-70)
    oldman.visible=true
  }

  if(alexswitchi===1){
    if(keyDown("right")){
      alex.addAnimation("alexi",alexright)
      alexright.frameDelay=0.4
    }

    //if(keyWentUp("right")||keyWentUp("left")){
     // alex.addImage("alexi",alexm)
   // }

    if(keyDown("left")){
      alex.addAnimation("alexi",alexleft)
      alexleft.frameDelay=0.4
    }
  }

  if(mousePressedOver(oldman)&&gamestate===1){
    textSize(30)
    m2.visible=true
    box.visible=true
    gamestate=2
  }
  if(alex.isTouching(box)&&gamestate===2&&alex.x<box.x){
    box.x=box.x+10
  }
  if(alex.isTouching(box)&&gamestate===2&&alex.x>box.x){
    box.x=box.x-10
  }
  if(box.x>oldman.x-50&&gamestate===2){
    box.visible=false
    gamestate=4
    textSize(30)
    text("thank you here is a gift",oldman.x,oldman.y-50)
    oldman.visible=false
    osword.visible=true
  }
  //change sword animation laksh
  if(alex.isTouching(osword)&&gamestate===4){
    gamestate=5
    cp1=1
    osword.visible=false
    levelover()
    alex.addImage("alexi",ao)
  }

  if((gamestate===6||gamestate===12)&&mousePressedOver(jimmy)&&alex.isTouching(jimmy)){
    jimmy.visible=false
    fireball.visible=false
    gamestate=15
  }

  if(alex.isTouching(fireball)&&gamestate===6){
    alex.x=100
    alex.y=100
    fireball.x=jimmy.x
    fireball.y=jimmy.y
  }
  
  if(alex.isTouching(fireball)&&gamestate===12){
    fireball.x=jimmy.x
    fireball.y=jimmy.y
  }

  if(keyDown("up")&&(gamestate===12||gamestate===6)){
    gamestate=12
  }
    
  if(keyWentUp("up")&&(gamestate===12||gamestate===6)){
    gamestate=6
  }

  if(gamestate===15){
    m4.visible=true
    fireball.visible=false
  }

  drawSprites();
}

function dissapear(){
  w1.visible=false
  w2.visible=false
  w3.visible=false
  w4.visible=false
  w5.visible=false
  w6.visible=false
  w7.visible=false
  w8.visible=false
  w9.visible=false
  w10.visible=false
  w11.visible=false
  w12.visible=false
  w13.visible=false
  w14.visible=false
  w15.visible=false
  w16.visible=false
  w17.visible=false
  w18.visible=false
  w19.visible=false
  w20.visible=false
  w21.visible=false
  w22.visible=false
  pr1.visible=false
  pr2.visible=false
  pr3.visible=false
  pr4.visible=false
  pr5.visible=false
  pr6.visible=false
  pr7.visible=false
  pr8.visible=false
}

function alexreset(){
  alex.y=10
  alex.x=10
}

function levelover(){
  alex.x=900
  alex.y=450
  alex.velocityX=0
  alex.velocityY=0
}

function alexsi(){
  alexswitchi=1
}