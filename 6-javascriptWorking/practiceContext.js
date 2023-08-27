console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log('this is my function');
}

var fName = "avi";
var lName = "sharma";
var fullName = fName + " " + lName;
console.log(fullName);

// (1) COMPILATION PHASE : Kitne Variables hai and what is their Scope.
// fName,lName,fullName -> Global Scope
// myFunction (function) -> Global Scope
// Now JS know scopes of all variables even before execution. 

// (2) GLOBAL EXECUTION CONTEXT: (A) Global Memory
//                               (B) Code Execution Phase

// (A) GLOBAL MEMORY - 1. Window Object
//                     2. this = Window Object (this is binded to window obj)
//                     3. fName,lName and fullName = undefined
//                     4. myFunction is added to Global Memory as it is

// (B) CODE EXECUTION PHASE

// 1. console.log(this); -> O/P: {window}
// 2. console.log(window); -> O/P: {window}
// 3. console.log(myFunction); -> O/P: myFunction Function poora print hojayega
// 4. console.log(fullName); -> O/P: undefined

// 5. function myFunction(){
//     console.log('this is my function');
//    } -> Nothing Happens

// 6. var fName = "avi"; -> undefined se avi hogayi value fname ki
// 7. var lName = "sharma"; -> undefined se sharma hogayi value lName ki
// 8. var fullName = fName + " " + lName; -> undefined se avi sharma hogayi value fullName ki
// 9. console.log(fullName); -> O/P: avi sharma

console.log(funcExpression);

var funcExpression = function(){
    console.log("This is example of function expression");
}

// HERE console.log(funcExpression) -> O/P: undefined 
// Because the funcExpression is declared as a var varaible, so it will be set to undefined initially during GLOBAL CREATION CONTEXT.