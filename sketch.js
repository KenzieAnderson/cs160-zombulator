//Zombulator by Kenzie Anderson 

var zombieY= 100;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.8; 
var zombieSize = 80; 
var zombieColor; 
var backgroundColor; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	backgroundColor = color(6,88,219); 
	zombieColor = color(255,176,75);
}

function draw() {
	background(backgroundColor);
	fill(zombieColor); 
	stroke(255,0,0);
	ellipse(windowWidth / 2, zombieY, zombieSize, zombieSize);
	zombieY += zombieV; 
	zombieV += zombieA; 
	if (zombieY + (zombieSize / 2) >= windowHeight) {
		zombieY = windowHeight - (zombieSize / 2); 
		zombieV *= zombieDamping;

	}


}