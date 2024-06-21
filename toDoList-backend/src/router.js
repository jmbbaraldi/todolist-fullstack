const express = require('express');
const taskController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateBody, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;