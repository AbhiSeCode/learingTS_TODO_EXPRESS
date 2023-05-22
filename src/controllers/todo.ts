//this is another type that is exported by express to handle request parameters
import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  //We can also tell what are we expecting in req.body and setting type of req.body
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).send({ message: "Created the todo", createTodo: newTodo });
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.status(200).send({ todos: TODOS });
};

//using generic RequestHandler we tell that what params are we expecting
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;
  const foundTodo = TODOS.find((el) => el.id == todoId);
  if (!foundTodo) {
    throw new Error("Todo not found");
  }
  foundTodo.text = updatedText;
  res.status(200).send({ message: "To Do Updated Successfuly", todos: TODOS });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const foundTodoIndex = TODOS.findIndex((el) => el.id == todoId);
  if (foundTodoIndex == -1) {
    throw new Error("Todo not found");
  }
  TODOS.splice(foundTodoIndex, 1)
  res.status(200).send({message: "Todo deleted", todos: TODOS });
};
