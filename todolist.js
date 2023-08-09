`use strict`;

const todoInput = todoForm.querySelector(`input`);
const todoList = document.getElementById(`todo-list`);
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement(`li`);
  li.id = newTodo.id;
  const span = document.createElement(`span`);
  span.innerText = newTodo.text;

  const button = document.createElement(`button`);
  button.innerText = `X`;

  button.addEventListener(`click`, deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ``;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
todoForm.addEventListener(`submit`, handleToDoSubmit);

// function sayHello(item) {
//   console.log(`this is turn of`, item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
