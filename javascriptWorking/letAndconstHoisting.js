console.log(myName); // RefrenceError    
let myName = "Aviral Sharma";
console.log(myName);

// While Creation of Global Execution Context, In the Global Memory:
// Variables initialized using let and const are set to Uninitialized. They do exist in the memory though.
// Temporal Dead Zone (TDZ) -> Time for which a variable remains uninitialized in the Global Context is TDZ. 