const container = document.querySelector('.container');
const rangeInput = document.getElementById('slider');
let selector = false;

//create the grid
const createGrid = (gridNum) => {
    container.style.setProperty('--grid-rows', gridNum);
    container.style.setProperty('--grid-cols', gridNum);

    for (i = 0; i < (gridNum * gridNum); i++){
        const squares = document.createElement('div');
        squares.classList.add('square');
            
        container.appendChild(squares);
    }
    document.getElementById('range-value').innerText = gridNum;

    const sides = Math.floor((container.offsetWidth - (gridNum) ) / gridNum);
    
    const grids = document.querySelectorAll('.container .square');
    grids.forEach(grid => {
        grid.style.width = `${sides}px`;
        grid.style.height = `${sides}px`;
    })
}

//initialize the grid
createGrid(rangeInput.value);

//get user input from the slider to set the grid
rangeInput.addEventListener('change',() => {

    const oldGrid = document.querySelectorAll('.container .square');
    oldGrid.forEach(square => {
        square.remove();
    })

    const x = rangeInput.value;
    createGrid(x);
})

//increase slider input by '+' button
document.getElementById('add').addEventListener('click', () => {
    const currentValue = parseInt(rangeInput.value);
    const incrementedValue = currentValue + 1;

    if(incrementedValue <= parseInt(rangeInput.max)){
        rangeInput.value = incrementedValue;
        const changeEvent = new Event('change');
        rangeInput.dispatchEvent(changeEvent);
    }

})

//decrease slider input by '-' button
document.getElementById('minus').addEventListener('click', () =>{
    const currentValue = parseInt(rangeInput.value);
    const decrementValue = currentValue - 1;

    if(decrementValue >= parseInt(rangeInput.min)){
        rangeInput.value = decrementValue;
        const eventChange = new Event('change');
        rangeInput.dispatchEvent(eventChange);
    }
})

//create variable to check if the random color generator should be enabled
let colorEnable = false;

const button = document.getElementById('btn');

//enable the random color generator if the button is clicked
button.addEventListener('click', () =>{
    colorEnable = true;
    selector = false;
});

//disable the random color generator if a color is picked
const colorPicker = document.getElementById('color-selector');
colorPicker.addEventListener('input', () => {
    colorEnable = false;
    eraserEnable = false;
    selector = false;
});

//variable to keep track if eraser is enabled
let eraserEnable = false;

const eraser = document.getElementById('eraser');

//enable eraser on click 

eraser.addEventListener('click', () => {
    if (eraserEnable === true){
        eraserEnable = false;
    }
    else{
    eraserEnable = true;
    colorEnable = false;
    selector = false;
}
})

//call setBg function when a square in the grid is being clicked
container.addEventListener('click', function(e){
    
    if (e.target.classList.contains('square')){
        if(!selector){
            setBg(e.target)
        }
        else{
            const color = e.target.style.backgroundColor;
            const [r, g, b] = color.match(/\d+/g);
            const redHex = parseInt(r).toString(16).padStart(2, '0');
            const greenHex = parseInt(g).toString(16).padStart(2,'0');
            const blueHex = parseInt(b).toString(16).padStart(2, '0');
            const hexCode = `#${redHex}${greenHex}${blueHex}`
            colorPicker.value = hexCode;
            const changeEvent = new Event('input');
            colorPicker.dispatchEvent(changeEvent);
        }
}
});

//set the color of the clicked square based on user selection
function setBg(square){
    const pastelColors = [
        '#FFC0CB', '#FFDAB9', '#FFB6C1', '#FFA07A', '#FFD700', '#98FB98',
        '#AFEEEE', '#B0E0E6', '#FF69B4', '#F0E68C', '#FFB5C5', '#E6E6FA',
        '#ADD8E6', '#F08080', '#FFA500'
    ];

    if(!selector){

        if(colorEnable){
            const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
            square.style.backgroundColor = randomColor;
        }

        else if(eraserEnable){
            square.style.backgroundColor = 'white';
        }

        else{
            square.style.backgroundColor = colorPicker.value;
        }
      
    }
    
}

//pick the color from the grid of squares

document.getElementById('picker').addEventListener('click', () => {
    selector = true;
    colorEnable = false;
    }
)

//clear the grid
const clearAll = document.getElementById('clear-btn');
clearAll.addEventListener('click', () => {
    const oldGrid = document.querySelectorAll('.container .square');
    oldGrid.forEach(square => {
        square.remove();
    })

    const x = document.getElementById('slider').value;
    createGrid(x);
})

