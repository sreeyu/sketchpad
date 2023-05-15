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

const popBtn = document.getElementById('btn');
popBtn.addEventListener('click', function(){
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<p>Enter the number of squares you want in a grid:</p>
                       <input type='number' />
                       <div class="btn"><button id="ok-btn">Okay</button>
                       <button id="close-btn">Close</button></div>`;
    document.body.appendChild(popup);

    const okBtn = popup.querySelector('#ok-btn');
    const input = popup.querySelector('input');

    okBtn.disabled = true;
    
    input.addEventListener('input', () =>{
        if(input.value){
            okBtn.disabled = false;
        }
        else{
            okBtn.disabled = true;
        }
       
    });

    okBtn.addEventListener('click', () =>{
        const gridNum = input.value;
        popup.remove();
        updateGrid(gridNum);
    })

    const cancel = popup.querySelector('#close-btn');
    cancel.addEventListener('click', ()=>{
        popup.remove();
    })

    
})



function updateGrid(gridNum){

    container.style.setProperty('--grid-rows', gridNum);
    container.style.setProperty('--grid-cols', gridNum);

    for (i = 0; i < (gridNum * gridNum); i++){
        const squares = document.createElement('div');
        squares.classList.add('square');
        
        container.appendChild(squares);
    }

    /*const oldGrid = document.querySelectorAll('.container .square');
    oldGrid.forEach(square => {
        square.remove();
    })
    
    const n = Number(gridNum);

    for (let i = 0; i < n*n; i++){
        const squares = document.createElement('div');
        squares.classList.add('square');
        container.appendChild(squares);
    }
    
    const width = Math.round((586/n) - 2);
    const height = width + 0.2;
    console.log(container);

    const squares = document.querySelectorAll('.container .square');
    squares.forEach(square => {
      square.style.width = `${width}px`;
      square.style.height = `${height}px`;
   }) */
   
}



