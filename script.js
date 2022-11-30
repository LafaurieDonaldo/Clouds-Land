// You can create custom variables here

/* 
EVERYTHING in the SETUP() function only happens once when the page is first loaded.
This is also an example of a multiline comment. Single Line comments start with //
*/
function setup() {
  createCanvas(500,600);
  //below is anther example that creates a canvas the heigth and width of the browser window
  //createCanvas(windowWidth, windowHeight);

  //setting the background
  background('red');
}

/*
All of the code inside of the DRAW() function runs multiple times per second (usually 60 times per second on most computers).
*/
function draw() {
  //putting the backround function here means there is a fresh screen drawn each time. This is needed if you want to make things look like they're moving across the screen
  background('lightblue'); 
  
  fill('green');
  // this draws a circle 25 pixels across at the location of the mouse.
  circle(mouseX, mouseY, 25);

  fill('White')
  triangle(30, 75, 58, 20, 86, 75);

  fill('Blue')
  rect(225, 300, 55, 55);
  

fill('Orange');
noStroke();
rect(200, 20, 55, 55);

  
fill('white');
noStroke();
rect(400, 20, 55, 55);



}