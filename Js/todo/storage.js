class Storage {
  static addToDotoStorage(newTodo) {
    let todos = this.getToDosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  static getToDosFromStorage() {
    let todos;

    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
  }

  static deleteToDoFromStorage(targetTodo) {
    let todos = this.getToDosFromStorage();

    todos.forEach(function (todo, index) {
      if (todo.text === targetTodo.trim()) {
        todos.splice(index, 1);
      }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  static clearAllToDoFromStorage() {
    localStorage.removeItem("todos");
  }
}
