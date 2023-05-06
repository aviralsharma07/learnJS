// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not change the original array.

const numbers = [23,15,11,7,13,5];
const sum = numbers.reduce((accumulator,currValue) => {return accumulator+currValue},0);
console.log(sum);


const products = [
    {productId:"101",productName:"Mobile",price:21000},
    {productId:"107",productName:"Laptop",price:57000},
    {productId:"113",productName:"TV",price:83000}
];

const totalAmount = products.reduce((amount,currProduct) => {return amount+currProduct.price},0);
console.log(totalAmount);