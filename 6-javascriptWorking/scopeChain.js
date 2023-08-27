const lastName = "Sharma";

const printName = function(){
    const firstName = "Aviral";
    console.log(firstName);
    console.log(lastName); // function will look for lastName in its lexical environment/context which is Global Execution context in this case.
}

printName();