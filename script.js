let pumpkin, tree, sign, home;
let button1, button2, button3;
let bgImg;
let homeScreenShown = true;
let mode = 0;
let currentGame;

function preload(){
  bgImg = loadImage('forest.jpeg');

  // implement home buttons
  pumpkin = loadImage('pumpkinButton.png');
  leafPile = loadImage('leafPile.png');
  sign = loadImage('sign.png');
  home = loadImage('61972.png');
  
}

function setup() {
  createCanvas(600, 400);

  pumpkin.resize(100,100);
  leafPile.resize(150,150);
  sign.resize(100,150);
  home.resize(25,25);

  // leads to shapes game
  button1 = new Button(125, 290, pumpkin);
  // leads to matching game
  button2 = new Button(250, 265, leafPile);
  // leads to sign game
  button3 = new Button(400, 240, sign);
  // leads to home screen
  homeButton = new Button(10,10,home);
}

function draw() {
  // print background
  bgImg.resize(600,400);
  background(bgImg);
  
  // draw buttons
  button1.display();
  button2.display();
  button3.display();
  homeButton.display();
  
  if (mode == 1){
    execShapesGame()
  } else if(mode == 2){
    execMatchingGame()
  } else if (mode == 3){
    execSignGame()
  } else if (mode == 4){
    homeScreen()
  }
}
function mousePressed() {
  //console.log('Mouse pressed within the target area');
  console.log(mouseX, mouseY)
  
  // Check if the mouse is over a button
  if(homeScreenShown){
  if (button1.over()) mode = 1;
  if (button2.over()) mode = 2;
  if (button3.over()) mode = 3;
  }
  
  if (homeButton.over()) mode = 4;
  
}

function homeScreen(){
  background(bgImg);
  
  button1.display();
  button2.display();
  button3.display();
  
  homeButton.display();
  
  homeScreenShown = true;
}

function execShapesGame(){
  // hide home screen buttons
  button1.hide();
  button2.hide();
  button3.hide();
  
  background("red");
  homeScreenShown = false;
  
  homeButton.display();  
}

function execMatchingGame(){
  // hide home screen buttons
  button1.hide();
  button2.hide();
  button3.hide();
  
  background("green");
  homeScreenShown = false;
  
  homeButton.display();
}

function execSignGame(){
  // hide home screen buttons
  button1.hide();
  button2.hide();
  button3.hide();

  background("blue");
  homeScreenShown = false;
  
  homeButton.display();
}

class Button {  
  constructor(inX, inY, inImg) {
    this.x = inX;
    this.y = inY;
    this.img = inImg;
  }

  pressed(mode){
    if (mode == 1){
      console.log("pressed 1");
    } else if (mode == 2){
      console.log("pressed 2");
    } else if (mode == 3){
      console.log("pressed 3");
    } else if (mode == 4){
      console.log("pressed 4");
    }
  }

  display() {
    stroke(0);
    image(this.img, this.x, this.y);
  }
  
  over() {
    if (mouseX > this.x && mouseX < this.x + this.img.width
        && mouseY >
        this.y && mouseY < this.y + this.img.height) {
      return true;
    } else {
      return false;
    }
  }
  hide(){
    this.alpha = 0;
  }
}

/* 
class signGame {
  constructor(){
    this.bg;
    this.startButton;
    this.showText = true;
    this.showText2 = true;
    this.showText3 = true;
    this.gamestartButton;
    this.readyButton;
    this.scoreButton;
    this.displaySymbols = false;
    this.firstSymbol, this.secondSymbol, this.thirdSymbol,  
    this.fourthSymbol, this.fifthSymbol;
      
    // Word list of possible symbols
    this.wordList = ["pumpkin", "leaf", "cat", "apple", "bat", "owl", "moon", "pie", "acorn", "candy", "jacket", "hedgehog", "turkey", "fox", "corn", "gnome", "dead trees", "mushroom", "scarecrow", "sunflower", "jack-o-lantern"];
  }
  
  preload() {
    bg = loadImage('wood.jpg');
  }

  setup() {
    createCanvas(600, 400);
    bg.resize(600, 400);

    // Start button
    this.startButton = createButton("Begin");
    this.startButton.position(250, 200);
    this.startButton.size(150, 80);
    this.startButton.mousePressed(homePage);
    noLoop();

    // Game start button
    this.gamestartButton = createButton("Start Game");
    this.gamestartButton.position(280, 320);
    this.gamestartButton.size(80, 80);
    this.gamestartButton.mousePressed(gameStartPage);
    this.gamestartButton.hide();

    // Ready button
    this.readyButton = createButton("Ready");
    this.readyButton.position(280, 320);
    this.readyButton.size(80, 80);
    this.readyButton.mousePressed(symbolPage);
    this.readyButton.hide();

    // Score Button
    this.scoreButton = createButton("Done");
    this.scoreButton.position(280, 320);
    this.readyButton.size(80, 80);
    this.readyButton.mousePressed(scorePage);
    this.scoreButton.hide();
  }

  draw() {
    background(bg);

    if (this.showText) {
      textSize(50);
      fill(255);
      text("Symbol Match", 150, 100);
    }

    if (!this.showText) {
      if (this.showText2) {
        textSize(50);
        fill(255);
        text("Instructions", 180, 90);
      }
      if (this.showText3) {
        textSize(20);
        fill(255);
        text("Memorize the words in the list.", 180, 150);
        text("Press the button when you are ready to begin the", 80, 200);
        text("game. You will select which of the displayed", 105, 250);
        text("symbols represents the words that you saw.", 110, 300);
      }
    }

    if (this.displaySymbols) {
      textSize(50);
      fill(255);
      text("Symbols:", 200, 70);
      textSize(27);
      fill(255);
      text(this.firstSymbol, 260, 120);
      text(this.secondSymbol, 260, 160);
      text(this.thirdSymbol, 260, 200);
      text(this.fourthSymbol, 260, 240);
      text(this.fifthSymbol, 260, 290);
    }
  }

  homePage() {
    this.startButton.hide();
    this.showText = false;
    this.showText2 = true;
    loop();
    this.gamestartButton.show();
  }

  gameStartPage() {
    this.gamestartButton.hide();
    this.showText = false;
    this.showText2 = false;
    this.showText3 = false;
    this.readyButton.show();

    this.firstSymbol = random(wordList);

    this.secondSymbol = random(wordList);
    while (this.secondSymbol === this.firstSymbol) {
      this.secondSymbol = random(wordList);
    }

    this.thirdSymbol = random(wordList);
    while (this.thirdSymbol === this.firstSymbol || this.thirdSymbol === this.secondSymbol) {
      this.thirdSymbol = random(wordList);
    }

    this.fourthSymbol = random(wordList);
    while (this.fourthSymbol === this.firstSymbol || this.fourthSymbol === this.secondSymbol || this.fourthSymbol === this.thirdSymbol) {
      this.fourthSymbol = random(wordList);
    }

    this.fifthSymbol = random(wordList);
    while (this.fifthSymbol === this.firstSymbol || this.fifthSymbol === this.secondSymbol || this.fifthSymbol === this.thirdSymbol || this.fifthSymbol === this.fourthSymbol) {
      this.fifthSymbol = random(wordList);
    }

    this.displaySymbols = true;

    loop();
  }
  // symbol pg
  symbolPage() {
    this.startButton.hide();
    this.gamestartButton.hide();
    this.readyButton.hide();
    this.showText = false;
    this.showText2 = false;
    this.showText3 = false;
    this.displaySymbols = false;

    // Continue with symbol logic...
  }

  scorePage() {
    this.startButton.hide();
    this.gamestartButton.hide();
    this.readyButton.hide();
    this.showText = false;
    this.showText2 = false;
    this.showText3 = false;
    this.displaySymbols = false;
    this.scoreButton.show();
  }
}
*/