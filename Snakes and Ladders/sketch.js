let boardSize;
let canvas;
let hunter;
let isRed
let countingDirection;
let isCountingRight;
let cellData = {"number":0,"isLadderBottom":false};
let gameBoard;
// const cellData = {

//   "number" : i+,
//   "isLadderBottom":false,

// };

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
  gameBoard = [];
  gameBoard.length = 100;
  textSize(50)
}

function draw(){

  drawGriddy();
  // for (x in gameBoard){
  //   print(gameBoard[x]["number"])
  // }
  print(gameBoard[89]["number"]);


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
    let tileNumber;
    isCountingRight = !isCountingRight;
  
    isRed = !isRed
    for (let x = 0; x < 10; x++) {
      // cellData
      
      if (isRed){
        fill(255, 0, 0);
    }
      square(x*boardSize/10, y*boardSize/10, boardSize/10);
    
      isRed = !isRed;
      fill(0);
  
      if(isCountingRight){
        tileNumber = 100 - (y*10 + 9 - x);

        text(tileNumber, x*boardSize/10 + boardSize/20, y*boardSize/10 + boardSize/20);
        
        cellData["number"] = tileNumber;

        // print(cellData["number"]);

        gameBoard[tileNumber - 1] = {"number" : tileNumber ,"isLadderBottom" : false};

        // append(gameBoard, TileData);
      }
      else{
        tileNumber
        text(100 - (y*10 + x), x*boardSize/10 + boardSize/20, y*boardSize/10 + boardSize/20);

        cellData["number"] = tileNumber;

        // print(cellData["number"]);

        gameBoard[tileNumber- 1] = {"number" : tileNumber ,"isLadderBottom" : false};

        // append(gameBoard, TileData);
    }
    
      // 100 - (y*10 + x) = count from left to right side
  
      // figure out how to count from right to left HINT: y*10 does not need changing
  
      fill(255)
  
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
  // return [hitGriddyX, hitGriddyY];f`
  return currentGriddy;
}

// for(i=0;i<=100;i++){
// gameBoard[i] = cellData{"number":i+,"isLadderBottom":false}
// }

// tile number --> [1,1] to [10, 10] points --> [x, y]

function griddyHit(griddy){
  // griddy = 53;
let horizGriddy;
let vertiGriddy;

horizGriddy = Number(str(griddy)[str(griddy).length - 1]);
vertiGriddy = Number(str(griddy)[0]);
if (griddy[1] === NaN){
  vertiGriddy = 1;
}

print(horizGriddy);
print(vertiGriddy);
return [horizGriddy, vertiGriddy];
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