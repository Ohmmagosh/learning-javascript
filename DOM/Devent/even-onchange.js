function getMenu(){
    const menu = document.getElementById('menu');
    let display = document.getElementById('display');
    console.log(menu.value.toUpperCase());
    console.log(display);
    display.innerText = menu.value;
}

function hightlight(obj){
    obj.style.background = 'yellow';
}

function unhightlight(obj) {
    obj.style.background = "crimson";
    obj.style.color = "white";
}