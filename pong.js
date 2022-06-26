class Player {
  constructor(x, y, ai) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 50;
    this.score = 0;
    this.isAI = ai;
  }

  MoveUp() {
    if (this.y <= 0) {
      this.y = 0;
      return;
    }
    this.y -= 3.7;
  }

  Move(ball) {
    if (this.isAI && ball.y > this.y + this.height / 2) {
      this.MoveDown();
    }
    if (this.isAI && ball.y < this.y + this.height / 2) {
      this.MoveUp();
    }
  }

  MoveDown() {
    if (this.y + this.height >= height) {
      this.y = height - this.height;
      return;
    }
    this.y += 3.7;
  }

  DrawPlayer() {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    if (random(0, 2) > 1) {
      this.xSpeed = -4;
    } else {
      this.xSpeed = 4;
    }
    this.ySpeed = random(-5, 5);
  }

  Collision() {
    let testX;
    let testY;
    if (this.x < player1.x) {
      testX = player1.x;
    } else if (this.x > player1.x + player1.width) {
      testX = player1.x + player1.width;
    }
    if (this.y < player1.y) {
      testY = player1.y;
    } else if (this.y > player1.y + player1.height) {
      testY = player1.y + player1.height;
    }
    let distX = this.x - testX;
    let distY = this.y - testY;
    let distance = Math.sqrt(distX * distX + distY * distY);
    if (distance < 20) {
      return true;
    }
    return false;
  }

  Update(player1, player2) {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x + 10 >= width) {
      player1.score++;
      this.Reset();
    }
    if (this.x - 10 <= 0) {
      player2.score++;
      this.Reset();
    }
    if (this.y - 10 <= 0) {
      this.ySpeed *= -1;
    }
    if (this.y + 10 >= height) {
      this.ySpeed *= -1;
    }
    if (
      this.x - 10 <= player1.x + player1.width &&
      this.y - 10 <= player1.y + player1.height &&
      this.y + 10 >= player1.y
    ) {
      this.xSpeed *= -1;
      let distance = this.y - (player1.y + player1.height / 2);
      this.ySpeed = distance / 5;
    }
    if (
      this.x + 10 >= player2.x &&
      this.y - 10 >= player2.y &&
      this.y + 10 <= player2.y + player2.height
    ) {
      this.xSpeed *= -1;
      let distance = this.y - (player2.y + player2.height / 2);
      this.ySpeed = distance / 5;
    }
    if (this.ySpeed < -15) {
      this.ySpeed = -15;
    }
    if (this.ySpeed > 15) {
      this.ySpeed = 15;
    }
    ellipse(this.x, this.y, 20, 20);
  }

  Reset() {
    this.x = height / 2;
    this.y = height / 2;
    this.ySpeed = random(-5, 5);
  }
}

function DrawMiddle() {
  for (let i = 0; i <= height; i += 30) {
    stroke(255);
    line(height / 2, i + 10, height / 2, i + 30);
  }
}
