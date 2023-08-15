// innerHTMl to add HTML elements

const todoList = document.querySelector(".todo-list");
console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo List</li>";
// But we don't want to change the current innerHtml just add to it/
todoList.innerHTML += "<li>New Todo List</li>";
// We should not add to Inner Html because of performance issues.
// But we can use it ocassionally to change the existing things.