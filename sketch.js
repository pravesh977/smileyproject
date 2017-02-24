function setup() {
 createCanvas(400,200);  
}

function draw() {
  background(123,212,12);
  
  
 strokeWeight(4);
 stroke(32,53,232);
 fill(255,255,0);
 ellipse(200,100,150,150);
 
 strokeWeight(3);
 stroke(255,0,0);
 fill(0,0,0);
 rect(150,80,20,10);
  
  fill(0,0,0);
  rect(230,80,20,10);
  
  noStroke();
  fill(43,211,142);
  triangle(200,100,195,105,205,105);
  
  stroke(0,0,0);
  strokeWeight(4)
  line(195,150,220,130);
}