const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var plinkos = [];
var particles = [];
var divisions = [];

function setup() {

createCanvas(480,800);

Ground1 = new ground (400,800,900,10);

for(var d = 0; d <= width; d = d + 80){
divisions.push(new Division(d,700,10,200));
}  

for(var p = 0; p <= width; p = p + 40){
plinkos.push(new Plinko(p,100));
}

for(var p = 0; p <= width;p = p + 60){
plinkos.push(new Plinko(p,200));
}

for(var p = 0;p <= width; p = p + 40){
plinkos.push(new Plinko(p,300));
}

for(var p = 0; p <= width;p = p + 60){
plinkos.push(new Plinko(p,400));
}

Engine.run(engine);
}

function draw() {
background("blue");
Ground1.display();
if(frameCount%60 === 0){
particles.push(new Particle(random(width/2-10,width/2+10),5,5));
}

for(var j = 0; j < plinkos.length; j++){
plinkos[j].display();
}

for(var j = 0; j < divisions.length; j++){
divisions[j].display();
}

for(var j = 0; j < particles.length; j++){
particles[j].display();
}
 
drawSprites();
                                                                        
}