// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

const ul = document.querySelector(".todo-list");
const li1 = document.createElement("li");
li1.textContent = "appendChild Example";
ul.appendChild(li1);

// ------------------------------------------------------------------

const li2 = document.createElement("li");
li2.textContent = "insertBefore Example";
const li = document.querySelector(".todo-list li");
ul.insertBefore(li2,li); 

// ------------------------------------------------------------------

const li3 = document.createElement("li");
li3.textContent = "replaceChild Example";
ul.replaceChild(li3, li);

// ------------------------------------------------------------------

ul.removeChild(li3);