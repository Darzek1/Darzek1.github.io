let boardSize;
let canvas;
let hunter;
let isRed
let countingDirection;
let isCountingRight;
function setup(){
  textAlign(CENTER, CENTER);
  isRed = true;
  boardSize = min(windowWidth, windowHeight);
  canvas = createCanvas(boardSize, boardSize);
  canvas.position(windowWidth/4, 0);
  console.log("windowWidth"+windowWidth);
  console.log("windowHeight"+windowHeight);
  isCountingRight = true;
  countingDirection = "left";
}

function draw(){

  drawGriddy();
  


  strokeWeight(2);

}
function printList(){

  for (let i = 0; i < hunter.length; i++) {
    const element = hunter[i];

    print(hunter[i]);
    
  }
}
function drawGriddy(){
  // CREATE GRID USING:

  // square(x, y, s); + Lists + for loops

  // look up nested for loops javascript if you're confused
  for (let y = 0; y < 10; y++) {

    isCountingRight = !isCountingRight;
  
    isRed = !isRed
    for (let x = 0; x < 10; x++) {
  
      if (isRed){
        fill(255, 0, 0);
    }
      square(x*boardSize/10, y*boardSize/10, boardSize/10);
    
      isRed = !isRed;
      fill(0);
  
      if(isCountingRight){
        text(100 - (y*10 + 9 - x), x*boardSize/10 + boardSize/20, y*boardSize/10 + boardSize/20);
      }
      else{
        text(100 - (y*10 + x), x*boardSize/10 + boardSize/20, y*boardSize/10 + boardSize/20);
    }
    
      // 100 - (y*10 + x) = count from left to right side
  
      // figure out how to count from right to left HINT: y*10 does not need changing
  
      fill(255)
  textSize(50)
    }
    }
}


function hitGriddy(x, y){
  // converts X and Y coordinates to points on a 10 by 10 grid, then converts the points into a tile number
  let hitGriddyX;
  let hitGriddyY;
  
  hitGriddyX = ceil(map(x, 0, width, 0, 10));
  hitGriddyY = ceil(map(y, 0, height, 10, 0));
  
  if (hitGriddyY % 2 === 0){
    currentGriddy = (hitGriddyY - 1)* 10 + (10 - (hitGriddyX - 1));
  }
  else{
    currentGriddy = (hitGriddyY - 1)* 10 + hitGriddyX;
  }
  // return [hitGriddyX, hitGriddyY];
  return currentGriddy;
}
// tile number --> [1,1] to [10, 10] points --> [x, y]
function griddyHit(griddy){
let secondGriddy;
let thirdGriddy;
//secondGriddy = Number(str(griddy)[str(griddy).length - 1]);
secondGriddy = Number(str(griddy)[1]);
thirdGriddy = Number(str(griddy)[0]);
print(secondGriddy);
print(thirdGriddy);
return [secondGriddy, thirdGriddy];
}
function mouseClicked(){

  print(hitGriddy(mouseX, mouseY));
  print(griddyHit(hitGriddy(mouseX, mouseY)));
}

// 4 L8R
// CLASSES (don't worry about it unless you want to for now)
// Snake.move()
// Snake.draw()
// Snake.location