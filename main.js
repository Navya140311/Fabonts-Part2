noseX = 0;
noseY = 0;
difference = 0;
left_wrist_x = 0;
right_wrist_x = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(580, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet IS Intialised!');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("Y coordinate of nose is:" + noseY + "X coordinate of nose is:" + noseX);
        console.log("X coordinate of leftWrist is:" + left_wrist_x + "X coordinate of rightWrist is:" + right_wrist_x);
    }
}

