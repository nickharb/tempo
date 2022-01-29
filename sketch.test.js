let code;
let data;

function preload() {
  
  data = loadTable ("nicktest.csv", "csv", "header"); 
  code = loadFont('lucon.ttf');

}

function setup() {
  // createCanvas(2560, 1600);
  createCanvas(768, 128);
  textFont(code, 9);
  
  setInterval (drawText, 300000);
  setInterval (drawTextTwo, 600000);
  setInterval (drawTextThree, 900000);
  setInterval (drawTextFour, 1100000);
}

function draw() {
    background(0);
    fill(184,15,10);
    noSmooth();
  
  drawText();
  drawTextTwo();
  drawTextThree();
  drawTextFour();
  
  noLoop();
      
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
    
    let x = c * cellWidth + cellWidth / 2 -60;
    let y = r * cellHeight + cellHeight / 2 -60;

    textWrap(WORD);
    text(data.get(currentCell, "am"), x*0.5, y*0.2, 100);
 
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
    
    let x = c * cellWidth + cellWidth / 2 -60;
    let y = r * cellHeight + cellHeight / 2 -60;

    textWrap(WORD);
    text(data.get(currentCell, "miss"), x*0.5, y*0.2, 100);
 
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
    
    let x = c * cellWidth + cellWidth / 2 -60;
    let y = r * cellHeight + cellHeight / 2 -60;

    textWrap(WORD);
    text(data.get(currentCell, "love"), x*0.5, y*0.2, 100);
 
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
    
    let x = c * cellWidth + 2;
    let y = r * cellHeight + 8;

    textWrap(WORD);
    text(data.get(currentCell, "need"), x*1, y*1, 128);
 
    }  
  }
}

// noprotect
