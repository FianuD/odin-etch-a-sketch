document.addEventListener("DOMContentLoaded", function(){
    createBoard(32);
})

function createBoard(size){
    const board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < 0; i++){
        let div = document.createElement("div");
        board.insertAdjacentElement("beforeend", div);
    }
}