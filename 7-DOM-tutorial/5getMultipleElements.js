// get multiple Elements by using getElements by class name
// get multiple elements by using querySelectorAll


const navItems = document.getElementsByClassName("nav-item");
console.log(navItems); // htmlCollection -> Array like Object
console.log(navItems[0]);
console.log(typeof navItems);

const navItems2 = document.querySelectorAll(".nav-item");
console.log(navItems2); // NodeList -> Array like Object
console.log(navItems2[1]);