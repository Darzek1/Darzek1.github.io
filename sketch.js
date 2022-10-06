let boardSize;
let canvas;
let hunter;
let isRed
function setup(){
  isRed = false;
  boardSize = min(windowWidth, windowHeight);
  canvas = createCanvas(boardSize, boardSize);
  canvas.position(windowWidth/4, 0);
  console.log("windowWidth"+windowWidth)
  console.log("windowHeight"+windowHeight)
}

function draw(){

  background(255,0,0);
  strokeWeight(5);

  for (let y = 0; y < 10; y++) { 

      isRed = !isRed;

    for (let x = 0; x < 10; x++) {

      isRed = !isRed;
      fill(255)

      if (isRed){
        fill(255, 0, 0)
      }
      
      square(x*boardSize/10, y*boardSize/10, boardSize/10);
      
    }
}






  // drawLine(10, 10);
  
//   for (let s = 0; s <= 10; s++) {
//     const element = hunter[s];
//  drawLine
//   }
  // CREATE GRID USING:

  // square(x, y, s); + Lists + for loops

  // look up nested for loops javascript if you're confused

  // CLASSES (don't worry about it unless you want to for now)
  // Snake.move()
  // Snake.draw()
  // Snake.location

}


function printList(){

  for (let i = 0; i < hunter.length; i++) {
    const element = hunter[i];

    print(hunter[i]);
    
  }
}

function drawLine(_row,_col) {
  rowHeight = windowHeight/_row;
  columnWidth = windowWidth/_col;
  posX = 0
  posY = 0
  posX2 = 0
  posY2 = 0
for (let row = 0; row <= _row; row++) { 
  posX2 = windowWidth
line(posX, posY, posX2, posY2)
posY += rowHeight
posY2 += rowHeight
}
posX = 0
posY = 0
posX2 = 0
posY2 = 0
for (let col = 0; col <= _col; col++) { 
  posY2 = windowHeight
  line(posX, posY, posX2, posY2)
  posX += columnWidth
  posX2 += columnWidth
}}