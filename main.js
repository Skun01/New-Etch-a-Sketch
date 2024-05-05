
const screenElem = document.querySelector(".screen");
const resetElem = document.querySelector("#reset");
const setupElem = document.querySelector("#setup");
const ledElem = document.querySelector('.noti-led');

const instrElem = document.querySelector('#instr')
const instrContainerElem = document.querySelector('.instr-container');


const pixel = 16;
let cellColor = 'green';
let isColorChange = false;


makeScreen(screenElem, pixel);
resetElem.addEventListener('click', e =>{
    const cellList = [...document.querySelectorAll('.cell')];
    cellList.forEach(cell=>{
        cell.style.backgroundColor = 'black';
    });
    isColorChange = false;
    ledElem.style.setProperty('--led-color', 'red');
});
setupElem.addEventListener('click', e =>{
    let inputPixel;
    const regex = /[a-zA-Z]/;
    do{
        inputPixel = prompt("Enter your pixel (about 16 - 100):");
        if(!inputPixel) break;
    }while(regex.test(inputPixel) || +inputPixel < 16 || +inputPixel > 100);
    inputPixel = +inputPixel;
    screenElem.innerHTML = '';
    makeScreen(screenElem, inputPixel);
});

screenElem.addEventListener('mousemove', changeCellColor);
screenElem.addEventListener('dblclick', changeLedColor);

instrElem.addEventListener('click', e=>{
    instrContainerElem.style.display = 'flex';
});
instrContainerElem.addEventListener('click', e=>{
    if(e.target !== instrContainerElem) return;
    instrContainerElem.style.display = 'none';
});

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

function changeLedColor(e){
    isColorChange = !isColorChange;
    let ledColor = isColorChange ? 'green' : 'red';
    ledElem.style.setProperty('--led-color', ledColor);

}
function changeCellColor(e){
    if(e.target === screenElem) return;
    if(isColorChange) e.target.style.backgroundColor = cellColor;
}