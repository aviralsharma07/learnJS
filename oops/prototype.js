const hello = function(){
    console.log("Hello World");
}

// Javascipt Functions is also Javscript Object
// console.log(hello.name); name is an property of function which gives us its name.
// We can define custom properties for function like an Object.
// hello.myOwnProperty = "very unique name";
// console.log(hello.myOwnProperty); -> gives O/P "very unique name"

// -------------------------------------------------------------------------------------------------------


// PRTOTYPE: - EVERY FUNCTION GIVES US FREE SPACE (EMPTY OBJECT)
//           - WE CAN ADD KEY-VALUE PAIRS OR PROPERTIES FOR FUNCTION IN THIS PROTOTYPE.      
//           - ONLY FUNCTIONS PROVIDE PROTOTYPE


hello.prototype.key1 = "value1";
hello.prototype.key2 = 7;
hello.prototype.sing = ()=>{return "Tunuk Tunuk Tun Ta Na Na"};

console.log(hello.prototype.key1);
console.log(hello.prototype.sing());
