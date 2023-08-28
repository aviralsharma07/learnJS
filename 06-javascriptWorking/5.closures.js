function printFullName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
}

const ans = printFullName("Aviral","Sharma");
ans();

// CLOSURES: When a Function is returned from a Function, it stores the variables and info of its lexical environment to access them later if needed.
// Closures bind the inner returning function to its outer scope. 
// In this example: printName function will return along with firstName and lastName arguments stored in its closure. 


// EXAMPLE 1: CLOSURES

function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}

const ans1 = hello("arg");
ans1();

// EXAMPLE 2: CLOSURES

function myFunction(power){
    return (number) => {return number ** power};
}

const powerof4 = myFunction(4);
const ans2 = powerof4(2);
console.log(ans2);

// EXAMPLE 3: CLOSURES

function func(){
    let count = 0;
    return function(){
        count++;
        if (count === 1){
            console.log("Hi!, You Called Me")
        }else{
            console.log("Mai pehle Call ho chuka hoon!");
        }
    }
}

const ans3 = func();
ans3();
ans3();
ans3();
