var randomSeedValue; 

function setup() {
  createCanvas(500, 500);
  randomSeedValue = floor(random(100000)); 
  randomSeed(randomSeedValue); 
}

function draw() {
  background(0);
  noFill();
  strokeWeight(3);
  
  for (var i = 0; i < 10; i++) {
    var x1 = random(width);
    var y1 = random(height);
    var x2 = random(width);
    var y2 = random(height);
    var r = random(255);
    var g = random(255);
    var b = random(255);
    stroke(r, g, b);
    rect(x1, y1, x2, y2);
  }
  
  noLoop(); 
}