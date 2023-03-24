
createCanvas(userInput = 16);
// Creates the canvas
function createCanvas(num) {
    // Selects the div with id "canvas" and sets it as "main"
    const main = document.querySelector('#canvas');
    // Creates a div with id "grid" under "canvas"
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid')
    main.appendChild(grid)
    // Creates the horizontal divs
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.setAttribute('id', 'main');
        grid.appendChild(div);
        // Creates the "pixels" from the horizontal divs
        for (let i = 0; i < num; i++) {
            let subDiv = document.createElement('div');
            subDiv.setAttribute('class', 'pixel')
            subDiv.style.width = `${700 / num}px`
            div.appendChild(subDiv)
        };
    };
    getInputOnClick();
}
// Removes the canvas
function removeCanvas() {
    remove = document.querySelectorAll('.pixel')
    from = document.querySelector('#grid')
    from.remove(remove)
}

// Create new canvas
// (Removes the old canvas and creates a new one)
function createNewCanvas(userInput) {
    removeCanvas();
    createCanvas(userInput);
}
// User Input
// Gets userinput from input field
function getInputOnClick() {
    const inputField = document.getElementById('userInput');
    const btn = document.getElementById('submit-button')
    inputField.addEventListener('change', (event) => {
        if (inputField.value <= 100 && inputField.value > 0) {
            createNewCanvas(inputField.value);
        }
        else { alert("canvas size can only be 1 - 100") }
    }
    )
}


// Color select
let color = 'black';
const input = document.getElementById('color-input')
input.addEventListener('change', () => { color = document.getElementById('color-input').value; draw(); console.log('Yippee') })

// Function to make the divs change color
function draw() {
    // Detects if mouse button is pressed
    let mouseDown = 0;
    document.body.onmousedown = function () {
        mouseDown = 1;
        console.log(mouseDown)
    }
    document.body.onmouseup = function () {
        mouseDown = 0;
        console.log(mouseDown)
    }
    const pixels = document.querySelectorAll('.pixel');
    [...pixels].forEach(item => {
        // Detects if mouse is hovered over the div
        item.addEventListener('mouseover', () => {
            // If the div is hovered over and mouse button is pressed, it will change background color of the div
            if (mouseDown) {
                item.style.backgroundColor = `${color}`;
            }
        })
        item.addEventListener('click', () => { item.style.backgroundColor = `${color}`; })
        // Clear canvas
        const btnClear = document.getElementById('clear');
        btnClear.addEventListener('click', () => { item.style.backgroundColor = 'white' })
    });
}
// item.style.backgroundColor = `${color}`;