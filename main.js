var song1="";
var song2="";
var leftwristx=0;
var leftwristy=0;
var rightwristx=0;
var rightwristy=0;
var scoreleftwrist=0;
var scorerightwrist=0;
function preload(){
song1=loadSound("song1.mp3");
song2=loadSound("song2.mp3");
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotposes);
}
function draw(){
image(video,0,0,600,500);
}
function stgrade(){
song1.play();
}
function modelLoaded(){
console.log("poseNet is intialized");
}
function gotposes(results){
console.log(results);
if (results.length>0){
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log("lwx="+leftwristx+"lwy="+leftwristy+"rwx="+rightwristx+"rwy="+rightwristy);
    scoreleftwrist=results[0].pose.keypoints[9].score;
    scorerightwrist=results[0].pose.keypoints[10].score;
}
}