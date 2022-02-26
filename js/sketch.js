let code;
let data;
let timer;
let interval = 60000;
// let interval = 600;
let marginY = 12;
let marginX = 2;
let count = 0;
let categories = ['am','miss','love','need','joy','sadness','fear','childcare','dating1','dating2','familyfriends','supplies','working'];

function preload() {
    data = loadTable('data/data.csv', 'csv', 'header');
    code = loadFont('fonts/lucon.ttf');
}

function setup() {
    createCanvas(768, 128);
    noSmooth();
    textFont(code, 12);
    textLeading(15);
    fill(255,0,0);
    textWrap(WORD);

    drawText(categories[categories.length-1]);

    setInterval(function() {

        drawText(categories[count]);

        if (count < categories.length-1) {
            count += 1;
        } else {
            count = 0;
        }

    }, interval);
}

function drawText(category) {
    let columns = 6;
    let rows = 4;
    let cellWidth = width / columns;
    let cellHeight = height / rows;
    let currentCell = -1;

    background(0);
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
     
            currentCell++;  
            
            let x = c * cellWidth + marginX;
            let y = r * cellHeight + marginY;
            
            text(data.get(currentCell, category), x, y, 128);
        }
    }
}




