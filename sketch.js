var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1img,car2img,track
var car1,car2
var cars=[]

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1img=loadImage("assets/car1.png")
  car2img=loadImage("assets/car2.png")
  track=loadImage("assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}