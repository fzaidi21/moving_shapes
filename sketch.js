var circleX = 0;
var rectX = 640;
var triX = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0, 100, 0);
  
  //circle
  fill(216, 191, 216);
  noStroke();
  ellipse(circleX, 46, 70, 70);
  
  circleX = circleX + 1;
  
  //rectangle
  fill(106,	90,	205	);
  noStroke();
  rect(rectX, 60, 70, 70);
  
  rectX = rectX - 1;
  
  //triangle
  fill(131,	139,	131);
  noStroke();
  triangle(triX, 75, 58, 20, 86, 75);
  
  triX = triX + 1;
}