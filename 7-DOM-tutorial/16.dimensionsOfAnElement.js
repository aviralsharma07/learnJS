// How to get dimnsions of an Element
// height and width

const sectionTodo = document.querySelector(".todo-section");
const info = sectionTodo.getBoundingClientRect();
console.log(info)