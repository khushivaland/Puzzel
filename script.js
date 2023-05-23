var rows = 3;
var columns = 3;

var currtile;
var othertile;

var turns = 0;
var imgOrder = ["4", "2", "8", "1", "7", "3", "5", "6", "9"];

window.onload = function(){
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //drag functionality
            tile.addEventListener("dragstart", dragStart); // click an image to drag 
            tile.addEventListener("dragover", dragOver); //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter); //dragging image onto another one 
            tile.addEventListener("dragleave", dragLeave); //dragged image leaving another image
            tile.addEventListener("drop", dragDrop); //drag an image over another 
            tile.addEventListener("dragend", dragEnd);
           

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart(){
    currtile = this; //this refers to the img title being draged
}

function dragOver(e){
   e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
 }

 function dragLeave(){
    
 }

 function dragDrop(e){
    othertile = this; //this refers to the img tile being dropped on
 }

 function dragEnd(){debugger

    if(!othertile.src.includes("3.jpg")){
        return;
    }

    let currCoords = currtile.id.split("-"); // "0-0" -> ["0","0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = othertile.id.split("-");
    let r1 = parseInt(otherCoords[0]);
    let c1 = parseInt(otherCoords[1]);

    let moveLeft = r == r1 && c1 == c-1;
    let moveRight = r == r1 && c1 == c+1;

    let moveUp = c == c1 && r1 == r-1;
    let moveDown = c == c1 && r1 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if(isAdjacent){
    let currImg = currtile.src;
    let otherImg = othertile.src;

    currtile.src = otherImg;
    othertile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerHTML = turns;
 }
 }


