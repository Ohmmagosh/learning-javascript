const menu = document.getElementById('menu');
const item = document.getElementById('item-3');
const itemb = document.getElementById('item-2');
const newItem = document.createElement('li');

newItem.innerText = ("X");
function replaceItem(){
    menu.replaceChild(newItem,itemb);
}

function deleteItem(){
    menu.removeChild(item);
}
