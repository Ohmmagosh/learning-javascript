const title = document.getElementById('title');
const content = document.querySelector('.content');
const allel = document.querySelectorAll('p');
const box = document.querySelector('.box');

function displayText(){
    title.style.color = "crimson";
    title.style.backgroundColor = "white";
    title.style.fontSize = "60px" ;

    content.setAttribute('class','ohm');
}
function lightMode(){
    box.setAttribute('class','light');
}

function darkMode(){
    box.setAttribute('class','dark')
}
    