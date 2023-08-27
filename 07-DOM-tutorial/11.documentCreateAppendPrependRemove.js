// document.createElement()
// append
// prepend
// remove
// before
// after

// -----------------------------------------------------------------------

const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.append(newTodoItemText);
newTodoItem.textContent = "Append Example"; // We can directly change text content too without appending.
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem);
console.log(newTodoItem);

// ------------------------------------------------------------------------

const newTodoItem2 = document.createElement("li");
newTodoItem2.textContent = "Prepend Example";
todoList.prepend(newTodoItem2);

// ------------------------------------------------------------------------

const todoItem = document.querySelector(".todo-list li:nth-child(2)");
todoItem.remove(); 

// ------------------------------------------------------------------------

const newTodoItem3 = document.createElement("li");
newTodoItem3.textContent = "Before Example";
todoList.before(newTodoItem3);

// ------------------------------------------------------------------------

const newTodoItem4 = document.createElement("li");
newTodoItem4.textContent = "After Example";
todoList.after(newTodoItem4);

// ------------------------------------------------------------------------