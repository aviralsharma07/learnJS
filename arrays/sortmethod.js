const numbers = [5,9,1200,400,3000];
console.log(numbers.sort());
// O/P -> 1200,3000,400,5,9: This o/p because Sort method see elements as strings 
// and sort them based on their ASCII values.

// console.log(numbers.sort((a,b) => {return a-b}));
console.log(numbers.sort((a,b) => {return b-a}));


const products = [
    {productId:"101",productName:"Mobile",price:21000},
    {productId:"107",productName:"Laptop",price:57000},
    {productId:"113",productName:"TV",price:83000}
];

const newlist = [...products];
console.log(newlist.sort((prod1,prod2) => {return prod2.price-prod1.price}));
console.log(products);