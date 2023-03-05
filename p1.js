var numLayers = 5; 
var circleRadius = 50; 
var circleGap = 20;

function setup() {
  createCanvas(650, 650);
  noStroke();
}

function draw() {
  background(0);
  
  for (var i = 0; i < numLayers; i++) {
    var radius = circleRadius + (i * circleGap);
    var numCircles = 6 + (i * 2);
    
    drawLayer(radius, numCircles);
  }
}

function drawLayer(radius, numCircles) {
  var angleStep = 360 / numCircles;
  
  for (var i = 0; i < numCircles; i++) {
    var angle = i * angleStep;
    var x = radius * cos(radians(angle));
    var y = radius * sin(radians(angle));
    
    fill(300 - (i * 30));
    ellipse(width/2 + x, height/2 + y, circleRadius);
  }
}
