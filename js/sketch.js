let code;
let data;
let timer;
let interval = 60000;
let marginY = 12;
let marginX = 2;
let count = 0;

function preload() {
  
  data = loadTable ("data/data.csv", "csv", "header");
  code = loadFont('fonts/lucon.ttf');

}

function setup() {
  createCanvas(768, 128);
  noSmooth();
  textFont(code, 13);
  textLeading(15);
  fill(255,0,0);
  textWrap(WORD);

  drawTextFour();

  setInterval(function() {
    console.log(count);

    if (count == 0) {
      drawText();
      count += 1;
    } else if (count == 1) {
      drawTextTwo();
      count += 1;
    } else if (count == 2) {
      drawTextThree();
      count += 1;
    } else {
      drawTextFour();
      count = 0;
    }
  }, interval);
}


function drawText() {
  background(0);

  let columns = 6;
  let rows = 4;
  let cellWidth = width / columns;
  let cellHeight = height / rows;
  let currentCell = -1;
  
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
   
      currentCell++;  
      
      let x = c * cellWidth + marginX;
      let y = r * cellHeight + marginY;

      
      text(data.get(currentCell, "am"), x, y, 128);
    }
  }
}


function drawTextTwo() {
   background(0);

  let columns = 6;
  let rows = 4;
  let cellWidth = width / columns;
  let cellHeight = height / rows;
  let currentCell = -1;
  
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
        currentCell++;
        
          let x = c * cellWidth + marginX;
          let y = r * cellHeight + marginY;

          text(data.get(currentCell, "miss"), x, y, 128);
   
    }
  }
}


function drawTextThree() {
    background(0);

let columns = 6;
let rows = 4;
let cellWidth = width / columns;
let cellHeight = height / rows;
let currentCell = -1;
  
  
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < columns; c++) {
 
    currentCell++;  
    
    let x = c * cellWidth + marginX;
    let y = r * cellHeight + marginY;

    text(data.get(currentCell, "love"), x, y, 128);
 
    }  
  }
}


function drawTextFour() {
    background(0);

let columns = 6;
let rows = 4;
let cellWidth = width / columns;
let cellHeight = height / rows;
let currentCell = -1;
  
  
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < columns; c++) {
 
    currentCell++;  
    
    let x = c * cellWidth + marginX;
    let y = r * cellHeight + marginY;

    text(data.get(currentCell, "need"), x, y, 128);
 
    }  
  }
}

// noprotect
