const form = document.getElementById("todo-form");
const todoElement = document.getElementById("todo-input");
const addButton = document.querySelector(".btn-add");
const section = document.getElementById("section-list");
const deleteAll = document.querySelector(".delete-all");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addTodo);
  // addButton.addEventListener("click", addTodo);
  document.addEventListener("DOMContentLoaded", function () {
    let todos = Storage.getToDosFromStorage();
    UI.loadAllToDos(todos);
  });

  section.addEventListener("click", deleteTodo);
  deleteAll.addEventListener("click", deleteAllTodo);
}

function addTodo(e) {
  const todo = todoElement.value.trim();

  if (todo === "") {
    UI.displayMessage("Please, write your todo", "error");
  } else {
    const newTodo = new Todo(todo);

    Storage.addToDotoStorage(newTodo);

    UI.addToDotoUI(newTodo);
    UI.displayMessage("Successfully added", "success");
  }
  UI.clearInputs(todoElement);
  e.preventDefault();
}

function deleteTodo(e) {
  if (e.target.className === "fas fa-trash-alt") {
    UI.deleteToDoFromUI(e.target.parentElement);

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
