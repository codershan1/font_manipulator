rightwrist = 0;
leftwrist = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 600);

    canvas = createCanvas(550, 550);
    canvas.position(630, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw() {
    background('pink');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {}
        console.log(results);
    }

