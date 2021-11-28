const textall = document.querySelectorAll('p');
const menu = document.getElementById('menu');
let cont = 1;

console.log(textall[0].innerHTML = "HAAAAA");

function addItem(){
    const item = document.createElement('li');
    item.innerText = "Item"+(cont++);
    menu.appendChild(item);
}
