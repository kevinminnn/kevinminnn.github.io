let hearts = [];

function setup () {
  createCanvas(windowWidth, windowHeight);
  
  mouseX = width / 2;
  mouseY = height / 2;
}

function draw(){
  const dim = Math.min(width, height);
  background(0);

  const dt = deltaTime / 1000;
  
  for (let i = hearts.length - 1; i >= 0; i--) {
    if (hearts[i].fade()) {
      hearts.splice(i, 1);
      
    } else {
      hearts[i].update(dt);
      hearts[i].draw();
    }
  }
}

function mouseDragged() {
  const dim = Math.min(width, height);
  
  if (frameCount % 10 === 0) {
    hearts.push(new Heart(mouseX, mouseY, dim));
  }
}

class Heart {
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
    noStroke();
    fill(255, 150, 200, map(this.age, 0, this.lifespan, 200, 0));
    beginShape();
    
    vertex(this.pos.x, this.pos.y + this.r / 8);
    bezierVertex(this.pos.x, this.pos.y - this.r * 2 / 4, this.pos.x - this.r, this.pos.y - this.r / 4, this.pos.x, this.pos.y + this.r * 2 / 4);
    bezierVertex(this.pos.x + this.r, this.pos.y - this.r / 4, this.pos.x, this.pos.y - this.r * 3 / 4, this.pos.x, this.pos.y + this.r / 4);
    
    endShape(CLOSE);
  }
}