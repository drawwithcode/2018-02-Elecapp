

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  frameRate (24);
  background(35);

}

function draw() {

  /***ORIGINAL CODE *****
  translate(width/2, height/2);
  //rotate(frameCount*3);
  //scale(1,2);
  noFill();
  var angle1 = frameCount*3;
  var xciao = 200*cos(angle1);
  var yciao= 200*sin(angle1);

  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/60));
  stroke(220, 227, 239);

  line(xciao,yciao,200,0);

  if (frameCount == 120) {
   noLoop();} */

  noFill();
  var angle1 = frameCount*2;
  var xciao = 200*cos(angle1);
  var yciao = 200*sin(angle1);

  push()
  translate(width/3, height/2);
  rotate(xciao);
  stroke(lerpColor(color('#f45942'), color('#2600ff'), frameCount/200));
  polygon(0, 0, frameCount,5);
  pop();

  push()
  translate(width/1.5, height/2);
  rotate(yciao);
  stroke(lerpColor(color('#f45942'), color('#2600ff'), frameCount/200));
  polygon(0, 0, frameCount,5);
  pop();

  if (frameCount == 200) {
   noLoop();}
}




function polygon(x, y, radius, npoints) {
  var angle = 360/ npoints;
  beginShape();
  for (var a = 0; a < 360; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
