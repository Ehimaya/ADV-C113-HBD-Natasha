function preload() {
}

function setup() {
  canvas = createCanvas(450, 400);
  canvas.center();
  
  video = createCapture(VIDEO);
  video.size(450,400);
  video.hide();
}

function draw() {
  image(video, 0, 0, 450, 400);
  
  fill('#FFAE42')
  stroke('#FFAE42')
  rect(1, 20, 800, 10);

  fill('#FFAE42')
  stroke('#FFAE42')
  rect(25, 1, 10, 800);

  fill('#FFAE42')
  stroke('#FFAE42')
  rect(1, 370, 800, 10);
  
  fill('#FFAE42')
  stroke('#FFAE42')
  rect(415, 1, 10, 800);
}

function take_snapshot(){    
  save('student_name.png');
}
