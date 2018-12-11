let i = 30;

var control = false;

function setup() {
    createCanvas(500, 500);
    noLoop();
}
function draw () {
    // set background color
    background('#31bc33');
if (i==30) {
    control = false;
  }
  ellipse(width/2,height/2,i);
}
function mousePressed() {
    if (i < (height - 30) && control == false) {
        // increase the size of the ellipse
        i = i + 20;
    }
    else {
        // else control will change to true
        control = true;
        // decrease the size of the ellipse
        i = i - 20;
    }
    // use redraw to update the size of ellipse
    redraw();
}
  



