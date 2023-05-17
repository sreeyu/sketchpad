const container = document.querySelector('.container');


/*for (let i = 0; i < 256; i++){
    const squares = document.createElement('div');
    squares.classList.add('square');
    container.appendChild(squares);
}*/

function setBg(square){
    square.style.backgroundColor = 'yellow';
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

