//Zombulator by Kenzie Anderson 

var zombieX = 50;
var zombie2X = 100;
var zombieColor;

function setup() {
	createCanvas(800,800);
	zombieColor = color(255,176,75);
}

function draw() {
	background(255,255,255)
	fill(zombieColor); 
	strokeWeight(3);
	stroke(255,0,0);
	ellipse(zombieX, 50, 80, 80);
	fill(150,150,200);
	strokeWeight(10);
	stroke(240,150,60);
	ellipse(zombie2X,100,80,80);
	zombieX = zombieX + 5; 
	zombie2X = zombie2X + 3; 
	if (zombieX >= 800) {
		zombieX =0;
		zombieColor = color(random(255), random(255), random(255));
	}


}