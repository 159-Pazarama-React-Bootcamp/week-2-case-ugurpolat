const form = document.getElementById("todo-form");
const todoElement = document.getElementById("todo-input");
const addButton = document.querySelector(".btn-add");
const section = document.getElementById("section-list");
const deleteAll = document.querySelector(".delete-all");
const request = new Request();
let id = 1;
let todos = [];
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addTodo);
  // addButton.addEventListener("click", addTodo);
  document.addEventListener("DOMContentLoaded", function () {
    // let todos = Storage.getToDosFromStorage();

    request
      .get("https://61c58dd1c003e70017b79794.mockapi.io/api/todos")
      .then((data) => {
        data.forEach((element) => {
          todos.push(element);
        });
        // UI.loadAllToDos(todos);
      })
      .catch((err) => console.log(err));

    setTimeout(myTodos, 500);

    function myTodos() {
      UI.loadAllToDos(todos);
    }
  });

  section.addEventListener("click", deleteTodo);
  deleteAll.addEventListener("click", deleteAllTodo);
}

function addTodo(e) {
  const todo = todoElement.value.trim();

  if (todo === "") {
    UI.displayMessage("Please, write your todo", "error");
  } else {
    const newTodo = new Todo(id, todo);

    Storage.addToDotoStorage(newTodo);

    UI.addToDotoUI(newTodo);
    UI.displayMessage("Successfully added", "success");
    id++;
  }
  UI.clearInputs(todoElement);
  e.preventDefault();
}

function deleteTodo(e) {
  if (e.target.className === "fas fa-trash-alt") {
    UI.deleteToDoFromUI(e.target.parentElement);
    let id_number = e.target.parentElement.parentElement.id;

    request
      .delete(
        `https://61c58dd1c003e70017b79794.mockapi.io/api/todos/${id_number}`
      )
      .then((message) => console.log(message))
      .catch((err) => console.log(err));

    Storage.deleteToDoFromStorage(
      e.target.parentElement.parentElement.textContent
    );
    UI.displayMessage("Successful delete", "success");
  }
}

function deleteAllTodo() {
  UI.clearAllToDoFromUI();
  Storage.clearAllToDoFromStorage();
}
