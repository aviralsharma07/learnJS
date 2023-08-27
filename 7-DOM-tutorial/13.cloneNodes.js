const todoList = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
todoList.appendChild(li);
todoList.prepend(li);
// Yaa toh naya item append hoga ya prepend, dono nahi hongi because li is single item. 

const li2 = li.cloneNode();
todoList.prepend(li2); // Text Content will not be cloned using this.

const li3 = li.cloneNode(true); // True will do deep cloning and text Content will be copied too.

todoList.append(li3);