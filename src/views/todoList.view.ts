import type TodoModel from "../models/todoList.model";
import type TodoController from "../controllers/todoList.controller";
import Observer from "../utils/Observer";
class TodoListView extends Observer {
  /** DOM elements */
  constainer: HTMLDivElement;
  input: HTMLInputElement;
  submitButton: HTMLButtonElement;
  todoList: HTMLUListElement;
  /** views, controllers */
  todoModel: TodoModel;
  todoController: TodoController;

  constructor(todoListModel: TodoModel, todoListController: TodoController) {
    super();
    this.todoModel = todoListModel;
    this.todoController = todoListController;

    this.constainer = document.createElement("div");
    this.input = document.createElement("input");
    this.submitButton = document.createElement("button");
    this.todoList = document.createElement("ul");

    this.subscribeToModels();
    this.renderInitialView();
    this.addEventListeners();
  }

  subscribeToModels() {
    this.todoModel.addObserver({ update: this.update.bind(this) });
  }

  renderInitialView() {
    this.submitButton.innerText = "Add";

    document.body.appendChild(this.constainer);
    this.constainer.appendChild(this.input);
    this.constainer.appendChild(this.submitButton);
    this.constainer.appendChild(this.todoList);
  }

  addEventListeners() {
    this.submitButton.addEventListener("click", () => {
      this.todoController.handleSubmitButton(this.input);
    });
  }

  renderListItem(todo: string) {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo;
    this.todoList.appendChild(todoItem);
  }

  clearList() {
    this.todoList.innerHTML = "";
  }

  update() {
    this.clearList();
    this.todoModel.getAll().forEach((todo) => {
      this.renderListItem(todo);
    });
  }
}

export default TodoListView;
