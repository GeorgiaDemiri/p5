var i;
var j;


function setup() {
  // create canvas
  createCanvas(500, 500);
  // set background color
  background('pink');
}


function draw() {
  fill(0, 180, 0);
  for (i = 20; i < width; i += 40) {

    for (j = 20; j < height; j += 100) {
      fill(0, (i + j + 0) / 3, 0);
      ellipse(i, j, 20, 20);
      if (j == 220) {
        ellipseMode(CENTER);
        fill("yellow");
        ellipse(i, j, 10, 10);

      }
    }
  }


}
