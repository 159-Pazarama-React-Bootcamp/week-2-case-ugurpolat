class UI {
  static createElement(newElement) {
    const todoList = document.getElementById("todo-list");

    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");

    li.textContent = newElement.text;
    a.className = "delete-todo";
    a.href = "#";
    i.className = "fas fa-trash-alt";
    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);
  }

  static addToDotoUI(newTodo) {
    this.createElement(newTodo);
  }

  static clearInputs(element1) {
    element1.value = "";
  }

  static displayMessage(message, type) {
    const sectionTodo = document.querySelector("section");

    const div = document.createElement("div");

    div.className = `display-message ${type}`;
    div.textContent = message;
    sectionTodo.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
  }

  static loadAllToDos(todos) {
    todos.forEach((todo) => {
      this.createElement(todo);
    });
  }

  static deleteToDoFromUI(element) {
    element.parentElement.remove();
  }

  static clearAllToDoFromUI() {
    const todoList = document.getElementById("todo-list");

    while (todoList.firstElementChild !== null) {
      todoList.firstElementChild.remove();
    }
  }
}
