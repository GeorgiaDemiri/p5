let myVideo;
let myButton;
let playing = true;
function setup() {
    let canvas = createCanvas(600, 500);
    
    myVideo = createCapture('myVideo');
    myVideo.size = (300, 250);
    myButton = createButton('take pics');

    myButton.mousePressed(Shot);
}
function Shot() {
    if (playing) {
        myVideo.pause();
        myVideo.loadPixels(); myVideo.play();
    }


}


function draw() {
    background(123, 145, 253); image(myVideo, 0, 0);
}

