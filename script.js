const gridContainer = document.querySelector('#grid-container');
const defaultSize = 16;

function setDefaultGrid(size=defaultSize){
    setGridColumns(size);
    fillGrid(size)
};

function setGridColumns(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
};

function fillGrid(size){
    for(let i = 0; i<size**2; i++){
        const gridPixel = document.createElement('div');
        
        gridPixel.classList = 'grid-pixel';
        gridPixel.addEventListener('mouseover', colorPixel);
        gridContainer.appendChild(gridPixel);
    }

};

function colorPixel(e){
    console.log(e);
    e.target.style.backgroundColor = 'black';
};

window.addEventListener('load',  setDefaultGrid());