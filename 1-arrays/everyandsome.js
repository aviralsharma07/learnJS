const products = [
    {productId:"101",productName:"Mobile",price:21000,category:"gadget"},
    {productId:"107",productName:"Laptop",price:57000,category:"gadget"},
    {productId:"113",productName:"TV",price:83000,category:"gadget"},
    {productId:"115",productName:"Earbuds",price:7000,category:"gadget"},
    {productId:"121",productName:"Sofa",price:26000,category:"furniture"},
    {productId:"103",productName:"Mirror",price:4500,category:"furniture"},
    {productId:"169",productName:"Table",price:10000,category:"furniture"},
    {productId:"117",productName:"Bed",price:18000,category:"furniture"},
    {productId:"119",productName:"Potrait",price:3300,category:"decor"}
];

console.log(products.every((prod) => {prod.category === "furniture"}));
console.log(products.some((prod) => {prod.category === "furniture"}));