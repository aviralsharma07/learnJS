// We can call a Function before declaration in Javascript.
hello("Aradhna");
function hello(name){
    console.log(`Hello ${name}`);
}

// We can not call a function before declaration if it is declared as Function Expression 
helloAgain();
const helloAgain = function(){
    console.log("hello Again");
}

// LET AND CONST ARE BLOCK SCOPE.
// VAR IS FUNCTION SCOPE 
// Variable declared with Let and Const can only be used
// inside block they are initalized
