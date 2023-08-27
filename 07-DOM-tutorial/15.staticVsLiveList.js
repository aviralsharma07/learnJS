// Static List Vs Live List
// querySelectorAll() -> Static List
// getElementsBySomething() -> Live List

const staticListItems = document.querySelectorAll(".todo-list li");

const sixthElement = document.createElement("li");
sixthElement.textContent = "item 6";

const ul = document.querySelector(".todo-list");
ul.append(sixthElement);
console.log(staticListItems);

// ----------------------------------------------------------------------

const liveListItems = ul.getElementsByTagName("li");
console.log(liveListItems);

