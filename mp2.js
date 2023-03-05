let sketch1;
let sketch2;
let currentSketch = 1;

function setup() {
    sketch1 = new p5(sketch1Setup, 'sketch1');
    sketch2 = new p5(sketch2Setup, 'sketch2');
}

function switchSketch(sketchNumber) {
    if (sketchNumber === 1) {
        sketch1.loop();
        sketch2.noLoop();
        currentSketch = 1;
    } else {
        sketch1.noLoop();
        sketch2.loop();
        currentSketch = 2;
    }
}

function draw() {
    if (currentSketch === 1) {
        sketch1.redraw();
    } else {
        sketch2.redraw();
    }
}
