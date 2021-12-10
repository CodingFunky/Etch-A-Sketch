const gridContainer = document.querySelector('#grid');
const colorWheel = document.querySelector('.colorWheel');
const slider = document.querySelector('.slider');
let gridAttr = (504 / slider.value);
// let boxes = document.querySelectorAll('.gridBox');
const clearBtn = document.querySelector('.clear');
const eraserBtn = document.querySelector(".eraser");
let mode = 'colorMode';
const colorModeBtn = document.querySelector('.colorMode');
const rainbowBtn = document.querySelector('.rainbowMode');

 function updateAttr () {
    gridAttr = (504 / slider.value);
    boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.style.minWidth = gridAttr + 'px';
        // box.style.maxHeight = gridAttr + "px";
    });
};
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
};
function drawGrid () {
    for (i = 1; i < (slider.value * slider.value) + 1; i++) {
        gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridContainer.appendChild(gridBox);
    };
}
function updateMode (mode) {
    newMode = mode;
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', (e) => {
            if (newMode === 'colorMode') {
                box.style.backgroundColor = colorWheel.value;
            }
            else if (newMode === 'eraser') {
                box.style.backgroundColor = "white";
            }
            else if (newMode === 'rainbow') {
                box.style.backgroundColor = 'rgb('+Math.floor(Math.random() * 250)+','+Math.floor(Math.random() * 250)+', '+Math.floor(Math.random() * 250)+')';
            }
    });
    });
}
function makeGrid() {
    slider.value = slider.value;
    clearGrid();
    drawGrid();
    updateAttr();
    let boxes = document.querySelectorAll('.gridBox');
    updateMode(mode);
};

makeGrid();

boxes = document.querySelectorAll('.gridBox');
boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = colorWheel.value;
    });
  });

colorModeBtn.addEventListener('click', () => {
    updateMode('colorMode');
});

rainbowBtn.addEventListener('click', (e) => {
    updateMode('rainbow');
});
eraserBtn.addEventListener('click', () => {
    updateMode('eraser');
})

clearBtn.addEventListener('click', () => {
    clearGrid();
    makeGrid();
});

slider.addEventListener('change', () => {
    makeGrid();
});