var path,boy,cash,diamonds,jewelry,sword, bomb;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup, bombGroup;

//Estados do Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("fimdeJogo.png");
  bombImg = loadImage("bomba.png");
}

function setup(){
  createCanvas(400,600);
  // Movendo fundo
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;

  //criando menino correndo
  boy = createSprite(70,580,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.08;

  cashG=new Group();
  diamondsG=new Group();
  jewelryG=new Group();
  swordGroup=new Group();
  bombGroup = new Group();
}

function draw() {

  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;
  
    edges= createEdgeSprites();
    boy.collide(edges);
  
    //código para reiniciar o fundo
    if(path.y > 400 ){
      path.y = height/2;
    }
    
    createCash();
    createDiamonds();
    createjewelry();
    createSword();
    createBomb();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();

      treasureCollection=+ 150;
      treasureCollection= 150;
      treasureCollection= treasureCollection - 150;
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy) || bombGroup.isTouching(boy)) {
        gameState=END;
        
        boy.addAnimation(endImg);
        boy.addAnimation("SahilRunning",endImg);
        boy.addAnimation("SahilRunning");
        boy.addAnimation("SahilRunning", endImg);

        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach;
        diamondsG.destroyEach;
        jewelryG.destroyEach;
        swordGroup.destroyEach;
        bombGroup.destroyEach;

        cashG.destroy();
        diamondsG.destroy();
        jewelryG.destroy();
        swordGroup.destroy();
        bombGroup.destroy();

        cashG.destroyEach();
        diamondsG.destroyEach();
        jewelryG.destroyEach();
        swordGroup.destroyEach();
        bombGroup.destroyEach();
        
        cashGdestroyEach();
        diamondsGdestroyEach();
        jewelryGdestroyEach();
        swordGroupdestroyEach();
        bombGroupdestroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        bombGroup.setVelocityEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 210;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 210;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 210;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 210;
  swordGroup.add(sword);
  }
}

function createBomb(){
  if (World.frameCount % 650 == 0) {
  var bomb = createSprite(Math.round(random(50, 350),40, 10, 10));
  bomb.addImage(bombImg);
  bomb.scale=0.05;
  bomb.velocityY = 3;
  bomb.lifetime = 210;
  bombGroup.add(bomb);
  }
}
