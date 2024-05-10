noseX=0;
noseY=0;
lipstick="";

function preload()
{
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,300,300);
    image(lipstick,noseX-20,noseY+15,40,30);
}
function take_snapshot()
{
    save('myFilterImage.png');
}
function modelLoaded()
{
    console.log('PoseNet is Intialized');
}
function gotPoses(results)
{
    if(results.length>0)
        {
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("nose x ="+noseX);
            console.log("nose y ="+noseY);
        }
}