function printingHello (){
    const hello = () => console.log("Hello World");
    return hello;
}

const ans = printingHello();
ans();
console.log(printingHello());