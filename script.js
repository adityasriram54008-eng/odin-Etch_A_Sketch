
const container = document.querySelector("#container")
const clearGrid = document.getElementById("clear")
const toggleRandom = document.getElementById("toggleRandom")

let rows = 16
let cols = 16

for(let i = 0 ;i < cols ;i++) {
    let col = document.createElement("div")
    col.classList.add("cols")
    container.appendChild(col)

    for(let i = 0 ;i<rows ;i++) {
        let row = document.createElement("div")
        row.classList.add("sqr")

        col.appendChild(row)
    }
}


const boxes = document.querySelectorAll(".sqr")

let isMouseDown = false
let toggleRand = false

toggleRandom.addEventListener("click", function() {
    if(toggleRand === false) {
        toggleRand = true
    }
    else {
        toggleRand = false
    }
})

boxes.forEach(box => {
    box.addEventListener("mousedown", () => {
        isMouseDown = true
        
        if(toggleRand === true) {
            box.style.backgroundColor = randomColor()
        }
        else {
            box.style.backgroundColor = "black"
        }
    })

    box.addEventListener("mouseover", () => {
        if (isMouseDown) {
            if(toggleRand === true) {
            box.style.backgroundColor = randomColor()
            }
            else {
                box.style.backgroundColor = "black"
            }
        }
    })
})

document.addEventListener("mouseup", () => {
    isMouseDown = false
})


function randomColor() {
    let r = Math.floor(Math.random() * 255) + 1
    let g = Math.floor(Math.random() * 255) + 1
    let b = Math.floor(Math.random() * 255) + 1
    return `rgb(${r},${g},${b})`
}

clearGrid.addEventListener("click", function(){
    boxes.forEach(box => {
        box.style.backgroundColor = "white"
    })
})
