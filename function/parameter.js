function print(){
    console.log("HII");
}

function message(){
    alert("แจ้งเตือนโอนเงิน");
}

function displayName(){
    document.write("hello World");
}
function plusNumber(x){
    console.log("เลขที่ส่งมาคือ",x);
}

plusNumber(5);
plusNumber(10);
let number = 200;
plusNumber(number);
// 5, 10, number = argument

function fullName(fname, lname, city){
    console.log("ชื่อจริง" ,fname, "นามสกุล ",lname, "ที่อยู่ ",city);
}

fullName("smith","jordan");
fullName("smith");
fullName("smith","jordan","rayong");

function summation(x,y){
    console.log("x = ", x, "y = ", y);
    let total = x+y;
    console.log("ผลรวม = ",total);
}

summation(10,15);