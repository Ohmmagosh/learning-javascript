let a = 100;//global

function display(){
    let b = 50;//local
    console.log("variable ", a);
    console.log("variable ", b);
}

console.log("golbal ",a);
display();