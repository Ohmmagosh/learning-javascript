let product = {
    name : "mouse",
    price : 1500,
    color : "black",
    category : "computer",
    displayProduct:function(){
        return "ชื่อสินค้า = "+ this.name + " ราคา = " + this.price + " สี = " + this.color + " หมวดหมู่ = " + this.category;
    },
    discount:function(){
        return this.price - 500;
    }
};

console.log("Product", product.name);
console.log(product);
console.log(product.displayProduct());
document.write(product.displayProduct());
document.write(product.discount());