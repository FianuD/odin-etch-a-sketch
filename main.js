document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        })
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("What size board?")
    let message = document.querySelector("#message");
    if(input == "") {
        message.textContent = "Please provide a number";
    }
    else if(input < 0 || input > 100) {
        message.textContent = "Provide a number between 1 and 100";
    }
    else {
        message.textContent = "Now you can play!";
        return input;
    }
}

const selectButton = document.querySelector("#popup");
selectButton.addEventListener("click", () => {
    let size = getSize();
    createBoard(size);
});