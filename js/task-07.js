const inputText = document.querySelector("#font-size-control");
const spanText = document.querySelector('#text');

inputText.addEventListener('input', e => {spanText.style.fontSize = `${e.target.value}px`})