let soundFile;
let ripples = [];
let rippleRadius = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  soundFile = loadSound('ripple.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  const dim = Math.min(width, height);

  const dt = deltaTime / 1000;

  for (let i = ripples.length - 1; i >= 0; i--) {
    if (ripples[i].fade()) {
      ripples.splice(i, 1);
      
    } else {
      ripples[i].update(dt);
      ripples[i].draw();
    }
  }
}

function mouseDragged() {
  const dim = Math.min(width, height);

  if (frameCount % 10 === 0) {
    ripples.push(new Ripple(mouseX, mouseY, dim));
    soundFile.play();
    rippleRadius = 10;
  }
}

class Ripple {
  constructor(x, y, dim) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0, 1));
    this.acc = createVector();
    this.lifespan = random(1, 5);

    this.age = 0;
    this.dim = dim;
    this.r = dim * 0.05;
  }

  update(dt) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.age += dt;
  }

  fade() {
    return this.age >= this.lifespan;
  }

  draw() {
    const alpha = map(this.age, 0, this.lifespan, 255, 0);
    noFill();
    stroke(255, 255, 255, alpha);
    strokeWeight(2);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
}