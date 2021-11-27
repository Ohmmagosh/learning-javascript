let balance = 5000;
let withdraw = 6000;

if(withdraw<=balance){
    //เมื่อเงื่อนไขเป็นจริง
    console.log("ดำเนินการถอนเงิน  = ",withdraw);
    balance-=withdraw;
    console.log("ยอดเงินคงเหลือ = ",balance);
}else{
    //เงื่อนไขเป็นเท็จ
    console.log("ยอดเงินของคุณไม่พอ");
}