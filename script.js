const container = document.querySelector('.container');


/*for (let i = 0; i < 256; i++){
    const squares = document.createElement('div');
    squares.classList.add('square');
    container.appendChild(squares);
}*/

function setBg(square){
    const pastelColors = [
        '#FFC0CB', '#FFDAB9', '#FFB6C1', '#FFA07A', '#FFD700', '#98FB98',
        '#AFEEEE', '#B0E0E6', '#FF69B4', '#F0E68C', '#FFB5C5', '#E6E6FA',
        '#ADD8E6', '#F08080', '#FFA500'
      ];
      
      const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    square.style.backgroundColor = randomColor;
}

container.addEventListener('mouseover', function(e){

    if (e.target.classList.contains('square')){
        setBg(e.target)
    }
});

const createGrid = (gridNum) => {
    container.style.setProperty('--grid-rows', gridNum);
    container.style.setProperty('--grid-cols', gridNum);

    for (i = 0; i < (gridNum * gridNum); i++){
        const squares = document.createElement('div');
        squares.classList.add('square');
            
        container.appendChild(squares);
    }
    document.getElementById('rangeValue').innerText = gridNum;

    const sides = Math.floor((container.offsetWidth - (gridNum) ) / gridNum);
    
    const grids = document.querySelectorAll('.container .square');
    grids.forEach(grid => {
        grid.style.width = `${sides}px`;
        grid.style.height = `${sides}px`;
    })
}


 createGrid(document.getElementById('slider').value);


document.getElementById('slider').addEventListener('input',() => {

    const oldGrid = document.querySelectorAll('.container .square');
    oldGrid.forEach(square => {
        square.remove();
    })

    const x = document.getElementById('slider').value;
    createGrid(x);
})

