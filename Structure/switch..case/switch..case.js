let status = -1;//0 ปิดไฟ //1 เปิดไฟ
let light1;
let light2;

if(status == 0){
    light1="ปิดไฟ";
}else if(status == 1){
    light1="เปิดไฟ";
}else{
    light1="ไม่พบข้อมูล";
}

switch(status){
    case 0 : light2 = "ปิดไฟ";
        break;
    case 1 : light2 = "เปิดไฟ";
        break; 
    default : light2 = "ไม่พบข้อมูล";   
}

console.log("IF",light1)
console.log("Switch",light2)
