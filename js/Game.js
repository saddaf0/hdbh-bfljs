class Game {
  constructor() {}

  

  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
       gameState=data.val()
    })
  }
update(state){
    // "/" root database
  database.ref("/").update({
    gameState:state
  })
}

handleElements(){
  form.hide();
  form.position(20,30)
  form.title.class("gameTitleAfterEffect")
}

start() {
    form = new Form();
    form.display();
    player = new Player();

    car1=createSprite(width/2-100,height-100);
    car1.addImage("car1Image",car1img);
    car1.scale=0.05

    car2=createSprite(width/2-100,height-100);
    car2.addImage("car2Image",car2img);
    car2.scale=0.05;

    cars=[car1,car2]
  }

play(){
  this.handleElements();
  drawSprite()
}







}