import type TodoModel from "../models/todoList.model";

class TodoListController {
  todoModel: TodoModel;
  constructor(todoListModel: TodoModel) {
    this.todoModel = todoListModel;
  }

  handleSubmitButton(input: HTMLInputElement) {
    const todo = input.value;
    this.todoModel.addTodo(todo);
    this.todoModel.notify();

    input.value = "";
    input.focus();
  }
}

export default TodoListController;
