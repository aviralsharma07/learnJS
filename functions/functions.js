function helloWorld (){
    console.log("Normal Function");
}
helloWorld();


// FUNCTION EXPRESSION
const helloWorld1 = function (){
    console.log("Function Expression");
}
helloWorld1();


// ARROW FUNCTIONS - Function keyword is removed
const isEven = (number) => {
    return (number%2 === 0);
}
console.log(isEven(13));

    
const isOdd = number => number%2 !== 0;
console.log(isOdd(19));
