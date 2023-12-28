import TodoListView from "./views/todoList.view";
import TodoListModel from "./models/todoList.model";
import TodoListController from "./controllers/todoList.controller";

const todoListModel = new TodoListModel();
const todoListController = new TodoListController(todoListModel);
const todoListView = new TodoListView(todoListModel, todoListController);
