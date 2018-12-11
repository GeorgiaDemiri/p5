i = "white";
var x;
var y;
constant = 250;
angle = 0.05;
scalar = 100;
speed = 0.05;

function setup() {
    createCanvas(500, 500);
    background("pink");

  }
function draw() {
  fill(i);
  x = constant + sin(angle) * scalar;
  y = constant + cos(angle) * scalar;
  ellipse(x, y, 50, 50);
  angle = angle + speed;
}

  function mouseReleased() { loop(); }
  function mousePressed() { noLoop(); }