createCanvas(userInput = 16)
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
            div.appendChild(subDiv)
        };
    };

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
    btn.addEventListener('click', (event) => { createNewCanvas(inputField.value); console.log(event) })
    // btn.addEventListener('click', () => { userInput = document.getElementById('input'); input = inputField.value; console.log(userInput) })
}
createNewCanvas(userInput)
getInputOnClick()
// const btn = document.getElementById('submit-button')
// btn.addEventListener('click',)