

function setup() {
  // create canvas
  createCanvas(800, 500);
  // set background color

  background("yellow");
}
var xPos;

function draw() {
  for (xPos = 1; xPos < width; xPos=xPos+800/500) {
    point(xPos, xPos * 5 / 8);
  }
}