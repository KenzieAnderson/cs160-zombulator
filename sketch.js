//Zombulator by Kenzie Anderson 

var zombieX = 50;
var zombie2X = 100;

function setup() {
	createCanvas(800,800);
}

function draw() {
	background(255,255,255)
	fill(255,0,0);
	ellipse(zombieX, 50, 80, 80);
	fill(150,150,200);
	ellipse(zombie2X,100,80,80);
	zombieX = zombieX + 5; 
	zombie2X = zombie2X + 3; 
	if (zombieX >= 800) {
		zombieX =0;
	}
	if (zombie2X >= 800) {
		zombie2X =0;
	}


}