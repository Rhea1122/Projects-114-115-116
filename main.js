var noseX = 0; 
var noseY = 0; 
function preload() 
{ 
    moustache = loadImage("moustache.jpg")
}
function setup() 
{ 
    var canvas = createCanvas(400,400); 
    canvas.center(); 
    video = createCapture(VIDEO); 
    video.size(300,300); 
    video.hide(); 
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); 
} 
function draw() 
{ 
    image(video,0,0,300,300); 
    image(moustache,noseX,noseY,30,30); 
} 
function modelLoaded() 
{ 
    console.log('PoseNet is initialized'); 
} 
function takesnapshot() 
{ 
    save('Filterimg.png'); 
} 
function gotPoses(results) 
{ 
    if(results.length>0) 
    { 
    console.log(results); 
    noseX = results[0].pose.nose.x-13; 
    noseY = results[0].pose.nose.y; 
    console.log("Nose x = " + noseX); 
    console.log("Nose y = " + noseY); 
    } 
}