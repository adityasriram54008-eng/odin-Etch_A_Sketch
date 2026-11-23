
const container = document.querySelector("#container")
const clearGrid = document.getElementById("clear")

let rows = 8
let cols = 8

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
        box.style.backgroundColor = "red"
    });

    box.addEventListener("mouseover", () => {
        if (isMouseDown) {
            box.style.backgroundColor = "red"
        }
    });
});

document.addEventListener("mouseup", () => {
    isMouseDown = false
});

clearGrid.addEventListener("click", function(){
    boxes.forEach(box => {
        box.style.backgroundColor = "white"
    })
})

