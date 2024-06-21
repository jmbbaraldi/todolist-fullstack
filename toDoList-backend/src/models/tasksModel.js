const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.query('SELECT * FROM tasks');
    return tasks.rows;
};

const createTask = async (task) => {
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES ($1, $2, $3) RETURNING *';
    const createdTask = await connection.query(query, [title, 'pendente', dateUTC]);

    return {insertedId: createdTask.rows[0].id};
};

const deleteTask = async (id) => {
    const removedTask = await connection.query('DELETE FROM tasks WHERE id = $1', [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const query = 'UPDATE tasks SET title = $1, status = $2 WHERE id = $3';
    const { title, status } = task;
    const updatedTask = await connection.query(query, [title, status, id]);
    return updatedTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};