// fill() Method changes orignal Array
// fill: (value,start,end) -> End is Exclusive in this range.

const myArr = new Array(10).fill(7);
console.log(myArr);

myArr.fill(23,3,7);
console.log(myArr);
