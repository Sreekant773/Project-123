function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    PoseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#808080');
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(result){
    if(result.length > 0)
    {
        console.log("results")
    }
}