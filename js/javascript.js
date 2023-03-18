const parent = document.querySelector('#canvas');
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'main');
    parent.appendChild(div);
    for (let i = 0; i < 16; i++) {
        let subDiv = document.createElement('div');
        subDiv.setAttribute('class', 'pixel')
        div.appendChild(subDiv)
    }
}
