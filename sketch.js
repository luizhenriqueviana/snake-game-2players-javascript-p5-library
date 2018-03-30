var s;
var s2;
var scl = 20;

var food;

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	s2 = new Snake2();
    frameRate(10);
	pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
 	background(51);
    textAlign(CENTER);
    textSize(50);
    fill(0, 0, 255, 150);
    text('Score: ' +s.total, 150, 50);
    text('Death: ' +s.score, 150, 90);
 	fill(255, 0, 100, 150);
    text('Score: ' +s2.total, 450, 50);
    text('Death: ' +s2.score, 450, 90);
    
    
 	if (s.eat(food)){
 		pickLocation();
 	}
 	s.death();
 	s.update();
 	s.show();
    
    if (s2.eat(food)){
 		pickLocation();
 	}
 	s2.death();
 	s2.update();
 	s2.show();

 	
 	fill(255);
 	rect(food.x, food.y, scl, scl);
}

function keyPressed(){
	if (keyCode === UP_ARROW && s2.yspeed != 1){
		s2.dir(0, -1);
	}else if (keyCode === DOWN_ARROW && s2.yspeed != -1){
		s2.dir(0, 1);
	}else if (keyCode === LEFT_ARROW && s2.xspeed != 1){
		s2.dir(-1, 0);
	}else if (keyCode === RIGHT_ARROW && s2.xspeed != -1){
		s2.dir(1, 0);
	}
    
    if (key === 'W' && s.yspeed != 1){
		s.dir(0, -1);
	}else if (key === 'S' && s.yspeed != -1){
		s.dir(0, 1);
	}else if (key === 'A' && s.xspeed != 1){
		s.dir(-1, 0);
	}else if (key === 'D' && s.xspeed != -1){
		s.dir(1, 0);
	}
}
