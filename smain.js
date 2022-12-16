music_file1 = "";

music_file2 = "";

Left_WristX = 0;
Left_WristY = 0;

Right_WristX = 0;

Right_WristY = 0;

function setup(){
    
    canvas = createCanvas(393, 393);

    canvas.center();

    video = createCapture(VIDEO);

    video.hide();

     posenet = ml5.poseNet(video, moddelloaded);

    posenet.on('pose', gotPoses); //Turns on the cool posenet variable model power! //
}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

        Right_WristX = results[0].pose.RightWrist.x;

        Left_WristX = results[0].pose.LeftWrist.x;

        Right_WristY = results[0].pose.RightWrist.y;

        Left_WristY = results[0].pose.LeftWrist.y;

           console.log("The Left WristX = " + Left_WristX + "And Next up.. The Left Wrist Y = " + Left_WristY);

          console.log("The Right Wrist X = " + Right_WristX + "Next up.. THE RIGHT WRIST Y IS " + Right_WristY);
          
    }
}

function moddelloaded(){

    console.log("The PoseNet Model is Ready and Working/Initialized!")
}

function draw(){
    image(video, 0, 0, 393, 393);

}

function preload(){

    music_file1 = loadSound("music.mp3");

   music_file2 = loadSound("music2.mp3");
}