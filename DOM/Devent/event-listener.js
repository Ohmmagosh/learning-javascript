//อ้างอิง
const menu = document.getElementById('menu');
const display = document.getElementById('display');
const btn = document.getElementById('btn');
// event

menu.addEventListener('chang',getMenu);
btn.addEventListener('click',showWelcome)

function getMenu(){
    console.log(menu);
}
function showWelcome(){
    alert("Welcome");
}