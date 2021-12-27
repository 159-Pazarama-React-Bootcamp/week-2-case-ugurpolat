class UI {
  static createElement(newElement) {
    const todoList = document.getElementById("todo-list");

    const div = document.createElement("div");
    const li = document.createElement("li");
    const a = document.createElement("a");
    const a2 = document.createElement("a");
    const i = document.createElement("i");
    const i2 = document.createElement("i");

    div.className = "todo-options";

    li.id = newElement.id;
    li.textContent = newElement.todoText;
    a.className = "delete-todo";
    a2.className = "edit-todo";
    a2.style.color = "white";
    a.href = "#";
    a2.href = "#";
    i.className = "fas fa-trash-alt";
    i2.className = "far fa-edit";

    a2.appendChild(i2);
    a.appendChild(i);
    div.appendChild(a2);
    div.appendChild(a);

    li.appendChild(div);

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

  static editTodoFromUI(text, id) {
    const todoInput = document.getElementById("todo-input");
    todoInput.value = text;
  }
}
