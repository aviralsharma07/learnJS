
// Event Bubbling/Propogation

const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Not Capture
grandParent.addEventListener("click",()=>{console.log("You clicked on GrandParent");});
parent.addEventListener("click",()=>{console.log("You clicked on Parent");});
child.addEventListener("click",()=>{console.log("You clicked on Child");});
document.body.addEventListener("click",()=>{console.log("You clicked on Body");});

// (1) CAPTURING: BODY -> GRAPNDPARENT -> PARENT -> CHILD
// (2) BUBBLING: CHILD -> PARENT -> GRANDPARENT -> BODY

// Capture events

grandParent.addEventListener("click",()=>{console.log("GrandParent Captured !!!!");},true);
parent.addEventListener("click",()=>{console.log("Parent Captured !!!!");},true);
child.addEventListener("click",()=>{console.log("Child Captured !!!!");},true);
document.body.addEventListener("click",()=>{console.log("Body Captured !!!!");},true);


