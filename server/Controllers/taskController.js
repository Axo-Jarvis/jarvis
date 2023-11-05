const pool = require('../models/db.js');

const taskController = {};

taskController.getTasks = async (req, res, next) => {
  const username = req.query.username;

  try {
    const queryText = 'SELECT * FROM tasks WHERE username = $1';
    const { rows } = await pool.query(queryText, [username]);

    res.locals.tasks = rows;
    return next();
  } catch (error) {
    return next({
      log: `An error occurred in taskController.getTasks: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

taskController.createTask = async (req, res, next) => {
  try {
    const { task_id, subject, status, username, created_date } = req.body;

    const insertTaskQuery =
      'INSERT INTO tasks (task_id, subject, status, username, created_date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [task_id, subject, status, username, created_date];
    const result = await pool.query(insertTaskQuery, values);

    res.locals.task = result.rows[0];
    return next();
  } catch (err) {
    let errorMessage = 'An internal error occurred.';
    if (err.code === '23503') {
      errorMessage = 'Invalid username provided';
    } else if (err.code === '23505') {
      errorMessage = 'The task_id already exists';
    }

    return next({
      log: `An error occurred in taskController.createTask: ${err}`,
      status: 400,
      message: { err: errorMessage },
    });
  }
};

taskController.updateTask = async (req, res, next) => {
  const { task_id, status, finish_date } = req.body;

  if (!task_id) {
    return next({
      log: 'Task ID is not provided',
      status: 400,
      message: { error: 'Task ID is required' },
    });
  }

  try {
    let sqlParams = [status];
    let querySetPart = 'status = $1';
    let paramIndex = 2;

    if (finish_date) {
      querySetPart += `, finish_date = $${paramIndex}`;
      sqlParams.push(finish_date);
    }

    sqlParams.push(task_id);

    const updateTaskQuery = `UPDATE tasks SET ${querySetPart} WHERE task_id = $${sqlParams.length} RETURNING *`;
    const result = await pool.query(updateTaskQuery, sqlParams);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.locals.task = result.rows[0];
    return next();
  } catch (err) {
    return next({
      log: `An error occurred in taskController.updateTask: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

taskController.deleteTask = async (req, res, next) => {
  const { task_id } = req.body;

  try {
    if (!task_id) {
      return next({
        log: 'No task_id provided',
        status: 400,
        message: 'Task ID is required',
      });
    }

    const deleteQuery = 'DELETE FROM tasks WHERE task_id = $1';
    const result = await pool.query(deleteQuery, [task_id]);

    if (result.rowCount === 0) {
      return next({
        log: 'Task not found with provided task_id',
        status: 404,
        message: 'Task not found',
      });
    }

    next();
  } catch (err) {
    return next({
      log: `An error occurred in taskController.deleteTask: ${err}`,
      status: 500,
      message: 'Internal Server Error',
    });
  }
};

module.exports = taskController;
