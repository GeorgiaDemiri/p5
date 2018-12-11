// initialize the angle
let theta = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}
function draw() {
  push();
  translate(width / 2, height / 2);
  rotate(radians(theta/3600));
  rect(-15, -80, 30, 100);
  pop();
  push();
  translate(width / 2, height / 2);
  rotate(radians(theta/60 ));
  rect(-10, -190, 20, 200);
  pop();
  push();
  translate(width / 2, height / 2);
  rotate(radians(theta));
  rect(-5, -295, 10, 300);
  pop();

  theta++;
}