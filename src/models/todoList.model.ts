import Subject from "../utils/Subject";

class TodoListModel extends Subject {
  todos: string[];

  constructor() {
    super();
    this.todos = [];
  }

  addTodo(text: string) {
    this.todos.push(text);
  }

  getAll() {
    return this.todos;
  }
}

export default TodoListModel;
