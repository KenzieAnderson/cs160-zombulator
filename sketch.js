//Zombulator by Kenzie Anderson 

var zombieY= 100;
var zombieV = 0;
var zombieA = 0.2;
var zombieDamping = -0.8; 
var zombieSize = 80; 
var zombieColor; 
var backgroundColor; 
var humanY= 90;
var humanV = 0;
var humanA = 0.2;
var humanDamping = -0.4; 
var humanSize = 120; 
var humanColor; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	backgroundColor = color(6,88,219); 
	zombieColor = color(255,176,75);
	humanColor = color(166,71,232); 
}

function draw() {
	background(backgroundColor);
	fill(zombieColor); 
	stroke(255,0,0);
	ellipse(windowWidth / 2,zombieY,zombieSize,zombieSize);
	fill(humanColor); 
	stroke(0,0,255);
	ellipse(windowWidth / 4,humanY,humanSize,humanSize);
	zombieY += zombieV;
	zombieV += zombieA; 
		if (zombieY + (zombieSize /2) >= windowHeight){
		zombieY = windowHeight - (zombieSize / 2);
		zombieV *= zombieDamping;
		}
	humanY += humanV; 
	humanV += humanA; 
		if (humanY + (humanSize / 4) >= windowHeight){
		humanY = windowHeight - (humanSize / 4); 
		humanV *= humanDamping;
		}
	

}