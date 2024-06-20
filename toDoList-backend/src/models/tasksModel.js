const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.query('SELECT * FROM tasks');
    return tasks.rows;
};

module.exports = {
    getAll
};