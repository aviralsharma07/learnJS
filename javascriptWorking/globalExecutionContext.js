// IN JAVASCRIPT: 1) First Code is Compiled
//                2) Then Code is Executed

// Compilation Phase: 1 - Tokenizing / Lexing: Code is divided into small parts/chunks
//                    2 - Parsing: Understand these small chunks and create an Abstract Syntax Tree (AST) -> Executable Code
//                    3 - Code Generation

// EcmaScript: Offical Docs does not say JS Code shoud be complied neccesarily, but it states:
// 1) There should be early error checking.
// 2) Scopes of all the variables before execution must be determined.

// In JS, All code executes inside EXECUTION CONTEXT. So We need to create Execution Context.
// The first execution context to be created is Global Execution Context (GEC).
// GEC is created in 2 Phases: 1) Creation Phase
//                             2) Code Execution Phase
// While Creating GEC -> firstName = undefined (if initialized using var) AND this = Window Object (diff in node environment)
// JS is a Single Threaded, Synchronous Prog Language: One line is executed at a time.


console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Aviral";
console.log(firstName);

// CODE EXECUTION PHASE: 
// 1. console.log(this); -> {Window} Object will be Printed in Console.
// 2. console.log(window); -> {Window} Object will be Printed in Console.
// 3. console.log(firstName); -> Undefined will be printed as set during Context Creation Phase.
// 4. var firstName = "Aviral"; -> firstName will be set to Aviral.
// 5. console.log(firstName); Aviral will be printed as set earlier in execution phase.  

