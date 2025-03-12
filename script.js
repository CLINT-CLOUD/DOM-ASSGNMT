const button = document.getElementById("Change-color-btn");
const body = document.body;
const colors = ['red', 'green', 'blue', 'yellow', 'grey'];
button.addEventListener('click',changeBackground)
function changeBackground(){
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors [colorsIndex]
}