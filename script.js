
const container = document.querySelector("#container")

let rows = 4
let cols = 4

for(let i = 0; i < rows; i++) {
    let col = document.createElement("div")
    col.classList.add("cols")
    container.appendChild(col)

    for(let i = 0; i<4; i++) {
        let row = document.createElement("div")
        row.classList.add("sqr")
        row.textContent = ("HI")

        col.appendChild(row)
    }
}



