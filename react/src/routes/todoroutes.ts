import express from 'express';
import * as todoController from '../controllers/todoController';

const router = express.Router();

router.post('/', todoController.todoErstellen);
router.get('/', todoController.alleTodosAnzeigen);
router.get('/:id', todoController.todoNachIdAnzeigen);
router.put('/:id', todoController.todoAktualisieren);
router.delete('/:id', todoController.todoLöschen);

export default router;
