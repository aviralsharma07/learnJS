// There are different ways to select an HTML element in Javscript.
// 1. Select Element using get element by id.

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

// 2. Select Element using Query Selector. getElementById can only select using IDs. 
// Query Selector can select anything from tags, classes and IDs.

const header = document.querySelector(".header");
console.log(header);

// 3. If we want to select multiple elements with same class, then we use Query Selector All.
// other wise it will bring only first e;ement occurence of that class.

const navItem = document.querySelectorAll(".nav-item");
console.log(navItem); 
