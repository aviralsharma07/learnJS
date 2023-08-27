// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend","<li>beforeend Example</li>");
todoList.insertAdjacentHTML("afterbegin","<li>afterbegin Example</li>");