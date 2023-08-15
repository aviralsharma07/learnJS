// let navItems = document.getElementsByTagName("a");
// console.log(navItems); // htmlCollection -> Array like Object
// We can use Simple For Loop and for-of loop with HTMLCollection but we can not use forEach Method with it.

// for(var i = 0; i < navItems.length; i++) {
//     const item = navItems[i];
//     navItems[i].style.backgroundColor = "white";
//     navItems[i].style.color = "black";
// }

// for(let item of navItems) {
//     item.style.backgroundColor = "white";
//     item.style.color = "black";
//     item.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((item)=>{
//     item.style.backgroundColor = "white";
//     item.style.color = "black";
//     item.style.fontWeight = "bold";
// });

// ----------------------------------------------------------------------------------

const navItems = document.querySelectorAll("a");
// We can use Simple for loop, for-of loop and forEach Method with nodeList.
console.log(Array.isArray(navItems));
navItems.forEach((item)=>{
    item.style.backgroundColor = "white";
    item.style.color = "black";
    item.style.fontWeight = "bold";
});


