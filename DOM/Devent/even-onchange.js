function getMenu(){
    const menu = document.getElementById('menu');
    let display = document.getElementById('display');
    console.log(menu.value.toUpperCase());
    console.log(display);
    display.innerText = menu.value;
    console.log(display);
}