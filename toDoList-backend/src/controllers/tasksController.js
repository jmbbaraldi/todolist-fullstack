const taskModel = require('../models/tasksModel');

const getAll = async (_req, res) => {
    const tasks = await taskModel.getAll();
    return res.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const createdTask = await taskModel.createTask(request.body);
    return response.status(201).json(createdTask);
};

const deleteTask = async (request, response) => {
    const { id } = request.params;

    await taskModel.deleteTask(id);
    return response.status(204).json();
};

const updateTask = async (request, response) => {
    const { id } = request.params;
    
    await taskModel.updateTask(id, request.body);
    return response.status(204).json();
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};