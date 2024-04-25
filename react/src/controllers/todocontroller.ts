import { Request, Response } from 'express';
import { Todo } from '../models/todo';

let todos: Todo[] = [];

export const todoErstellen = (req: Request, res: Response) => {
  const todo: Todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
};

export const alleTodosAnzeigen = (req: Request, res: Response) => {
  res.status(200).json(todos);
};

export const todoNachIdAnzeigen = (req: Request, res: Response) => {
  const id: string = req.params.id;
  const todo: Todo | undefined = todos.find(todo => todo.id === id);
  if (!todo) {
    res.status(404).json({ message: 'Todo nicht gefunden' });
  } else {
    res.status(200).json(todo);
  }
};

export const todoAktualisieren = (req: Request, res: Response) => {
  const id: string = req.params.id;
  const aktualisiertesTodo: Todo = req.body;
  const index: number = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Todo nicht gefunden' });
  } else {
    todos[index] = aktualisiertesTodo;
    res.status(200).json(aktualisiertesTodo);
  }
};

export const todoLöschen = (req: Request, res: Response) => {
  const id: string = req.params.id;
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
};