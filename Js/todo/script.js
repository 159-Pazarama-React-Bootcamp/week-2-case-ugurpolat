const form = document.getElementById("todo-form");
const todoElement = document.getElementById("todo-input");
const addButton = document.querySelector(".btn-add");
const section = document.getElementById("section-list");
const deleteAll = document.querySelector(".delete-all");

const request = new Request();
let id_number = 1;
let updated_id;
let todos = [];
let updated = false;
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
        UI.loadAllToDos(todos);
      })
      .catch((err) => console.log(err));

    // setTimeout(myTodos, 500);

    // function myTodos() {
    //   UI.loadAllToDos(todos);
    // }
  });

  section.addEventListener("click", deleteTodo);
  section.addEventListener("click", editTodo);
  deleteAll.addEventListener("click", deleteAllTodo);
}

function addTodo(e) {
  const todo = todoElement.value.trim();
  if (!updated) {
    if (todo === "") {
      UI.displayMessage("Please, write your todo", "error");
    } else {
      const newTodo = new Todo(id_number, todo);

      Storage.addToDotoStorage(newTodo);

      request
        .post("https://61c58dd1c003e70017b79794.mockapi.io/api/todos", {
          id: `${id_number}`,
          todoText: `${todo}`,
        })
        .then((newTodo) => console.log(newTodo))
        .catch((err) => console.log(err));

      UI.addToDotoUI(newTodo);
      UI.displayMessage("Successfully added", "success");
      id_number++;
    }
  } else {
    if (todo === "") {
      UI.displayMessage("Please, write your todo", "error");
    } else {
      const newUpdatedTodo = new Todo(Number(updated_id), todo);

      Storage.updateToDotoStorage(newUpdatedTodo);

      request
        .put(
          `https://61c58dd1c003e70017b79794.mockapi.io/api/todos/${updated_id}`,
          {
            id: `${updated_id}`,
            todoText: `${todo}`,
          }
        )
        .then((updatedTodo) => console.log(updatedTodo))
        .catch((err) => console.log(err));

      // UI.addToDotoUI(newTodo);
      // UI.displayMessage("Successfully updated", "success");
      // id_number++;
      updated = false;
    }
  }

  UI.clearInputs(todoElement);
  e.preventDefault();
}

function deleteTodo(e) {
  if (e.target.className === "fas fa-trash-alt") {
    UI.deleteToDoFromUI(e.target.parentElement.parentElement);
    let id_number = e.target.parentElement.parentElement.parentElement.id;

    request
      .delete(
        `https://61c58dd1c003e70017b79794.mockapi.io/api/todos/${id_number}`
      )
      .then((message) => console.log(message))
      .catch((err) => console.log(err));

    Storage.deleteToDoFromStorage(
      e.target.parentElement.parentElement.parentElement
    );
    console.log(e.target.parentElement.parentElement.parentElement);
    UI.displayMessage("Successful delete", "success");
  }
}

function editTodo(e) {
  if (e.target.className === "far fa-edit") {
    let changeText =
      e.target.parentElement.parentElement.parentElement.textContent;
    updated_id = e.target.parentElement.parentElement.parentElement.id;
    updated = true;

    UI.editTodoFromUI(changeText, updated_id);
  }
}

function deleteAllTodo() {
  UI.clearAllToDoFromUI();
  Storage.clearAllToDoFromStorage();
}
