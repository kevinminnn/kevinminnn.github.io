let hue;
let ringCount = 10;
let rings = [];

function setup() {
  createCanvas(650, 650);
  hue = random(0, 360);
  
  for (let i = 0; i < ringCount; i++) {
    let diameter = random(50, 150);
    let arcLength = random(0.5, 1.5);
    let arcAngle = random(-PI, PI);
    let spinSpeed = random(-1, 1);
    
    rings.push({ diameter, arcLength, arcAngle, spinSpeed });
  }
}

function draw() {
  background(0);
  strokeWeight(5);
  stroke(255);

  let centerX = width / 2;
  let centerY = height / 2;

  for (let i = 0; i < ringCount; i++) {
    let { diameter, arcLength, arcAngle, spinSpeed } = rings[i];
    let spin = millis() / 1000 * spinSpeed;
    let x = centerX + diameter * cos(spin + arcAngle);
    let y = centerY + diameter * sin(spin + arcAngle);
    
    noFill();
    ellipse(x, y, diameter, diameter);
  }
}
