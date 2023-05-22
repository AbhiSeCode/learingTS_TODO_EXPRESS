"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    //We can also tell what are we expecting in req.body and setting type of req.body
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).send({ message: "Created the todo", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.status(200).send({ todos: TODOS });
};
exports.getTodo = getTodo;
//using generic RequestHandler we tell that what params are we expecting
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const foundTodo = TODOS.find((el) => el.id == todoId);
    if (!foundTodo) {
        throw new Error("Todo not found");
    }
    foundTodo.text = updatedText;
    res.status(200).send({ message: "To Do Updated Successfuly", todos: TODOS });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const foundTodoIndex = TODOS.findIndex((el) => el.id == todoId);
    if (foundTodoIndex == -1) {
        throw new Error("Todo not found");
    }
    TODOS.splice(foundTodoIndex, 1);
    res.status(200).send({ message: "Todo deleted", todos: TODOS });
};
exports.deleteTodo = deleteTodo;
