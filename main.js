
const screenElem = document.querySelector(".screen");
const resetElem = document.querySelector("#reset");
const setupElem = document.querySelector("#setup");

const pixel = 16;
makeScreen(screenElem, pixel);

screenElem.addEventListener('mouseover', changeCellColor);

function makeScreen(screenElem, pixel){
    console.log("hi");
    for(let i = 0; i < pixel; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j =  0; j < pixel; j++){
            const cell = document.createElement("div");
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        screenElem.appendChild(row);
    }
}
let cellColor = 'green';
function changeCellColor(e){
    if(e.target === screenElem) return;
    e.target.style.backgroundColor = cellColor;
}