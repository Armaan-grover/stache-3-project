function preload() {
    noseX = 0;
    noseY = 0;
    stache = loadImage("pngfind.com-mustache-transparent-png-915825.png");
}
function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 350)
    video.hide()
    

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotposes)
  
}

function draw(){
    image(video, 0, 0, 400, 350)
    image(stache, noseX, noseY, 50, 50)
   }
function modelLoaded() {
    console.log("The model has loaded")
}
function takeImg() {
    save("stacheFace.png");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x)
        console.log("Nose Y = " + results[0].pose.nose.y)
         noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y-20;
    }
}