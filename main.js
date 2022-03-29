function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(550, 160);

    poseNet = poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("white");
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
    }
}