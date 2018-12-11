function setup() {
    // create canvas
    createCanvas(800,500);
    // set background color
    background('#31bc33');
    }
function draw (){
    fill (180, mouseX/4, mouseY/2);
    ellipse (400,250, 100,150);
}