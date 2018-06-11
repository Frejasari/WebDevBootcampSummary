var canvas = document.getElementById("example");
var ctx = canvas.getContext("2d"); // sets the 2D context

// fillRect(x, y, width, height)    //Draws a filled rectangle.
// strokeRect(x, y, width, height)  //Draws a rectangular outline.
// clearRect(x, y, width, height)  //Clears the specified rectangular area, making it fully transparent.

ctx.save(); // save the whole state of your context (Styling)
ctx.restore(); // the previous saved state will be restored!

ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.globalAlpha = 0.5;

ctx.beginPath();
ctx.arc(40, 120, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

function drawQuarterCircle(radius) {
  ctx.arc(20, 140, radius, 0, 3 / 2 * Math.PI, true);
}

ctx.beginPath();
drawQuarterCircle(60);
ctx.lineTo(20, 60);
ctx.arc(20, 140, 80, 3 / 2 * Math.PI, 0, false);
ctx.lineTo(80, 140);
ctx.fill();
ctx.closePath();

ctx.beginPath();
drawQuarterCircle(100);
ctx.lineTo(20, 20);
ctx.arc(20, 140, 120, 3 / 2 * Math.PI, 0, false);
ctx.lineTo(120, 140);
ctx.fill();
ctx.closePath();

// Create gradient?
// var gradient = createLinearGradient(20, 20, 80, 80);
// gradient.addColorStop(0.4, "green");

var image = new Image();
imgScale = 640 / 480;
// drawImage as soon as it is loaded;
img.src = "https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg";
img.onload = function() {
  ctx.drawImage(img, 0, 0, 150 * imgScale, 150);
};

///////// ANIMATION /////////

window.requestAnimationFrame(function(DOMHighResTimeStamp) {});
// Tells the browser that you wish to perform an animation and requests that the browser calls
// a specified function to update an animation before the next repaint.
// The callback function will get executed just before the next repaint.
// CALLBACK FUNCTION:
// A parameter specifying a function to call when it's time to update your animation for the
// next repaint. The callback has one single argument, a DOMHighResTimeStamp, which indicates
// the current time (the time returned from performance.now() ) for when requestAnimationFrame()
// starts to fire callbacks.
// RETURN:
// A long integer value, the request id, that uniquely identifies the entry in the callback list.
// This is a non-zero value, but you may not make any other assumptions about its value. You can pass
// this value to window.cancelAnimationFrame() to cancel the refresh callback request.

/////// TRANSFORMATION OF THE CANVAS ///////////
// translates the coordinates of the canvas system
ctx.translate(x, y);
//Rotates the canvas clockwise around the current origin by the angle number of radians.
rotate(angle);

// ---------------------------------------------------------
//
var ctx = document.getElementById("canvas").getContext("2d");

function drawTwoSquares(xCenter, yCenter, side, angle) {
  ctx.save();
  ctx.translate(xCenter, yCenter);
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(-side / 2, -side / 2, side, side);
  ctx.rotate(Math.PI / 180 * angle);
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(-side / 2, -side / 2, side, side);
  ctx.restore();
}

function draw(angle) {
  ctx.clearRect(0, 0, 500, 500);
  drawTwoSquares(100, 100, 50, angle);
  drawTwoSquares(200, 200, 50, angle);
  drawTwoSquares(100, 200, 50, angle);
  drawTwoSquares(200, 100, 50, angle);
}

var x = 0;

function animate() {
  draw(x);
  x += 5;
  window.requestAnimationFrame(animate);
}

animate();
// you could use set Interval instead requestAnimationFramei
// setInterval(function(){
//   ctx.clearRect(0,0,500,500);
//   draw(x);
//   x+=5;
// }, 1000/60);
