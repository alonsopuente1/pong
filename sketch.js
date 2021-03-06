let height = 600;
let width = 600;
let p1moveUp = false;
let p2moveUp = false;
let p1moveDown = false;
let p2moveDown = false;
let player1;
let player2;
let ball;

function setup() {
  createCanvas(width, height);
  textSize(20);
  player1 = new Player(10, height / 2, false);
  player2 = new Player(height - 10, height / 2, false);
  ball = new Ball(height / 2, height / 2);
}


function draw() {
  background(0);
  text(player1.score, width / 2 - 20, 27);
  text(player2.score, width / 2 + 10, 27);
  if(p1moveUp) {
    player1.MoveUp();
  }
  if(p1moveDown) {
    player1.MoveDown();
  }
  if(p2moveDown) {
	player2.MoveDown();
  }
  if(p2moveUp) {
	player2.MoveUp();
  }
  player1.DrawPlayer();
  player2.DrawPlayer();
  ball.Update(player1, player2);
  DrawMiddle();
}

function keyReleased() {
  if(keyCode === UP_ARROW) {
    p2moveUp = false
  }

  if(keyCode === DOWN_ARROW) {
    p2moveDown = false
  }
  if(keyCode == 87) {
	p1moveUp = false;
  }
  if(keyCode == 83) {
	p1moveDown = false;
  }
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    p2moveUp = true;
  }
  if(keyCode === DOWN_ARROW) {
    p2moveDown = true;
  }
  if(keyCode === 83) {
	p1moveDown = true;
  }
  if(keyCode == 87) {
	p1moveUp = true;
  }
  if(keyCode == 82) {
	  ball.y = height / 2;
	  ball.x = width / 2;
  }
  console.log(keyCode);
}
