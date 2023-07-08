let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = Math.floor(Math.random()*6+1)
countEl.textContent = count


function roll() {
    count = Math.floor(Math.random()*6+1)
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = count
}
