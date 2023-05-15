difference=0;
leftWristX=0;
rightWristX=0;

function preload(){
}

function setup(){
video= createCapture(VIDEO);
video.size(550,500);
video.position(100,250)
canvas= createCanvas(550,500);
canvas.position(950,200);

PoseNet = ml5.poseNet(video, modelLoaded);
PoseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model has been loaded");
}

function draw(){
    background("#c5f0ee");
    document.getElementById('wh').innerHTML= "Width and Height of the Font is "+ difference +" px";
    textSize(difference);
    fill("#5c1275");
    text("Aayan",50,400);
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference= Math.floor(leftWristX - rightWristX);
   
    }
}