let color = ["red","green","blue","purple"];
let num = [5,10,11,3,2,6,2,1];

console.log(color.sort());
console.log(color.length);
console.log(num.sort(function(a,b){return a-b}));
console.log(num.reverse());
console.log(color)
console.log("First ",color[0]);
console.log("Last ",color[color.length-1]);

color.push("gray");

console.log(color);
