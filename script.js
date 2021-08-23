//module aliases 
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies

var engine 
var world
var circles = []
var boundaries = []
var ground 

function setup() {
    createCanvas(500, 500) 
    engine = Engine.create()
    world = engine.world
   
    boundaries.push(new Boundary(150, 150, width * 0.6, 20, 0.3))
    boundaries.push(new Boundary(250, 350, width * 0.6, 20, - 0.3))
}

function mouseDragged() {
    circles.push(new Circle(mouseX, mouseY, random(5, 12)))
}

function draw() {
    background(51)
    Engine.update(engine)
    for( var i = 0; i < circles.length; i++) {
        circles[i].show()
    }

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].show()
    }
   
} 