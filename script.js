
const container = document.querySelector("#container")
const clearGrid = document.getElementById("clear")

let rows = 16
let cols = 16

for(let i = 0; i < cols; i++) {
    let col = document.createElement("div")
    col.classList.add("cols")
    container.appendChild(col)

    for(let i = 0; i<rows; i++) {
        let row = document.createElement("div")
        row.classList.add("sqr")

        col.appendChild(row)
    }
}



const boxes = document.querySelectorAll(".sqr");


let isMouseDown = false;

boxes.forEach(box => {
    box.addEventListener("mousedown", () => {
        isMouseDown = true
        box.style.backgroundColor = randomColor()
    });

    box.addEventListener("mouseover", () => {
        if (isMouseDown) {
            box.style.backgroundColor = randomColor()
        }
    });
});

document.addEventListener("mouseup", () => {
    isMouseDown = false
});


function randomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${g},${b})`
}

clearGrid.addEventListener("click", function(){
    boxes.forEach(box => {
        box.style.backgroundColor = "white"
    })
})

