const container = document.querySelector('.container');

for (let i = 0; i < 256; i++){
    const squares = document.createElement('div');
    squares.classList.add('square');
    container.appendChild(squares);
}

function setBg(square){
    square.style.backgroundColor = 'yellow';
}

container.addEventListener('mouseover', function(e){

    if (e.target.classList.contains('square')){
        setBg(e.target)
    }
});