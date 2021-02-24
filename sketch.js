function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc,0,60,0,360)
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();



  mnAngle = map(mn,0,60,0,360)
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();



  hrAngle = map(hr%12,0,12,0,360)
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();


  stroke(255,0,255);
  point(0,0);

  drawSprites();
}