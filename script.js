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
            okBtn.addEventListener('click', () =>{
                const gridNum = input.value;
                console.log(gridNum);
            })
        }
        else{
            okBtn.disabled = true;
        }
       
    })
    
})



function updateGrid(n){
    const square = document.querySelectorAll('.container .square');
    square.forEach(squares => {
        console.log(n);
      squares.style.width = "20px";
   })
}



