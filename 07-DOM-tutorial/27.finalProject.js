const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    newTodoText = todoInput.value;
    const newListItem = document.createElement("li");
    const newListItemInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newListItem.innerHTML = newListItemInnerHtml;
    todoList.appendChild(newListItem);
    todoInput.value = "";
})

todoList.addEventListener("click",(e)=>{
    if (e.target.classList.contains("done")){
        const todoListSpanText = e.target.parentNode.previousElementSibling;
        todoListSpanText.style.textDecoration = "line-through";
    }
    if (e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
});