//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
todoList.addEventListener("click",deleteAll);
//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    //create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //delete all button

    //append to list
    todoList.appendChild(todoDiv);
    // clearTodo input value
    todoInput.value = "";
}
function  deleteCheck(e) {
    const item = e.target;
    //deletetodo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //animasyon
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function (){
            todo.remove();
        });
    }
    //check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
//delete all
function deleteAll(e) {
    const item = e.target;
    if (item.classList[0] === "del-btn") {
        const e = document.querySelector("li:last-child");
            e.parentElement.removeChild(e);
    }
}