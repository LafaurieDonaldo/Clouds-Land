// You can create custom variables here
let shapeColor = 200
let moveAmount = 0;
let xPosSquare = 50;
/* 
EVERYTHING in the SETUP() function only happens once when the page is first loaded.
This is also an example of a multiline comment. Single Line comments start with //
*/
function setup() {
  createCanvas(500,600);
  //below is anther example that creates a canvas the heigth and width of the browser window
  //createCanvas(windowWidth, windowHeight);
 
}

/*
All of the code inside of the DRAW() function runs multiple times per second (usually 60 times per second on most computers).
*/
function draw() {{
  //putting the backround function here means there is a fresh screen drawn each time. This is needed if you want to make things look like they're moving across the screen
  background('lightblue'); 
  
  fill('orange');
  // this draws a circle 25 pixels across at the location of the mouse.
  circle(mouseX, mouseY, 25);


  // for clouds hopefully
  //SUN
  let c = color(253, 247, 120  );
fill(c);
noStroke();
ellipse(25, 25, 130, 130); // Draw sun circle

  
//LAND
fill('green')
rect(0, 500, 1000, 400);
  
describe('white rect with black outline in mid-right of canvas');

  // 3rd cloud ellipse
fill(shapeColor);
  ellipse(80, 75, 80, 80);
  ellipse(135, 35, 80, 80);
  ellipse(200, 75, 80, 80);
  ellipse(250, 35, 80, 80);
  ellipse(300, 75, 80, 80);
  ellipse(350, 35, 80, 80);
  ellipse(400, 75, 80, 80);
  ellipse(450, 35, 80, 80);
  ellipse(500, 75, 80, 80);

  // square shape 

  if((keyIsPressed == true) && (key=='a')){
    moveAmount = -3; //negative number moves to left
  }else if((keyIsPressed == true) && (key=='d')){
    moveAmount = 3; //positive number moves to right
  }else{
    moveAmount= 0;
  }
  
  xPosSquare = xPosSquare + moveAmount;
  //create a square
fill('Orange')
  circle(xPosSquare,460,80,55,55);
  
}
  
}
// END DRAW


function mouseMoved(){

  shapeColor = shapeColor + 2;
  if(shapeColor > 255){
    shapeColor = 200
  }
}











// dead codes below 
fill('White')
  triangle(30, 75, 58, 20, 86, 75);

  fill('Blue')
  rect(225, 300, 55, 55);
  

fill('Orange');
noStroke();
rect(200, 20, 55, 55);

  
fill('white');
noStroke();
rect(400, 20, 55, 55); //