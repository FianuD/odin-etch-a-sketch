let color = "black";
let click = false;
createBoard(16);


document.querySelector("body").addEventListener("click", function(e){
    if(e.target.tagName != "BUTTON") {
        click = !click;
        let draw = document.querySelector("#draw");
        if(click) {
            draw.textContent = "Now You Can Draw";
        }
        else {
            draw.textContent = "You're Not Allowed To Draw"
        }
    }
})

function createBoard(size){
    const board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
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



function colorDiv() {
    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = "black";
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

const blackButton = document.querySelector("#blackButton");
const randomButton = document.querySelector("#randomButton");
const resetButton = document.querySelector("#resetButton");

randomButton.addEventListener("click", ()=> {
    setColor("random");
});
blackButton.addEventListener("click", () => {
    setColor("black");
});

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

resetButton.addEventListener("click", () => {
    resetBoard();
});