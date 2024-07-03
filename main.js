function preload()
{
    
}

function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    val = "";
    classifier = ml5.imageClassifier ('https://teachablemachine.withgoogle.com/models/Z6uEng5z5/model.json',modelLoaded());
}

function modelLoaded()
{
    console.log("loaded_model");
}

function draw()
{
    image(video,0,0,400,300);
    classifier.classify(video,gotResult);
    if(val == "grey")
    {
        filter(GRAY);
    }
    if(val == "blur")
    {
        filter(BLUR);

    }
    if(val == "invert")
    {
        filter(INVERT);
    }
}

function gotResult(error,result)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_accuracy_nothing").innerHTML = result[0].confidence;
    }
}

function grey()
{
    val = "grey";
    draw();
}

function invert()
{
    val = "invert";
    draw();
}

function blur()
{
    val = "blur";
    draw();
}