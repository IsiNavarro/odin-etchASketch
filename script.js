const gridContainer = document.querySelector('#grid-container');
const eraseButton = document.querySelector('#erase-button');

const defaultSize = 16;

function setDefaultGrid(size=defaultSize){
    setGridColumns(size);
    fillGrid(size);
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
    e.target.style.backgroundColor = 'black';
};

eraseButton.addEventListener('click', cleanGrid);

function cleanGrid(){
    const pixelsArray = Array.from(gridContainer.childNodes);

    pixelsArray.forEach((pixel) => {
        gridContainer.removeChild(pixel);
    });
    
    setDefaultGrid(16);
}


window.addEventListener('load',  setDefaultGrid());