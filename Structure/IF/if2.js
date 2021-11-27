let balance = 5000;
let withdraw = 500;

if(withdraw<=balance){
    console.log("ดำเนินการถอนเงิน = ",withdraw);
    balance-=withdraw;
    console.log("ยอดคงเหลือ = ",balance);
}