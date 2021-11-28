let a = document.getElementsByTagName("p");
let b = document.getElementById('demo');
let c = document.getElementById("demo2");
let d = document.querySelector('.mydemo');

let x = 20;
let y = 10;

console.log(d);

function displayText(){
    b.innerText = "Js";
}
function displayText2(){
    b.innerText = "HTML";
}
function displayText3(){
    b.innerHTML = "<strong>JS</strong>";
}
function displayText4(){
    c.innerText = "แสดงตัวแปล x ="+x+" ตัวแปล y = "+y;
}