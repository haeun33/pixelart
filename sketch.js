function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  var x = mouseX;
  var y = mouseY;
  var a = x % 10;
  var b = y % 10;
  x = x - a;
  y = y - b;
  strokeWeight(1);
  if (keyIsPressed) {
    if (key == 'r'){
      fill(255, 0, 0);
    }
    if (key == 'g'){
      fill(0, 255, 0);
    }
    if (key == 'b'){
      fill(0, 0, 255);
    }
    if (key == 'w'){
      fill(255, 255, 255);
    }
    if (key == 'y'){
      fill(255, 215, 0);
    }
    if (key == 'B'){
      fill(99, 68, 25);
    }
    if (key == 'p'){
      fill(255, 0, 210);
    }
    if (key == 'd'){
      fill(0, 0, 0);
    }
    if (key == 'n'){
      noStroke();
    }
    if (key == 's'){
      strokeWeight(1);
      stroke(0);
    }
  }

  if (mouseIsPressed == false) {
    rect(x, y, 10, 10);
  }
}