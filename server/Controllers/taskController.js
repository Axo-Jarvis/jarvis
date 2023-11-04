// add these in once we have the model set up
// const models = require("../models/models");
// const { Task } = require("../models/models");

const taskController = {};

askController.createTask = async (req, res, next) => {
  try {
    const { taskSubject } = req.body;
    // add to database here
    return next();
  } catch (err) {
    return next({
      log: `An error occurred in taskController.createTask: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

taskController.updateTask = async (req, res, next) => {
  const { id, hasBeenCompleted } = req.body;
  try {
    // grab the task from the database and update it here

    // if the task is not found
    if (!id) {
      return next({
        log: "Task does not exist in",
        status: 400,
        message: { error: "Task does not exist" },
      });
    }
  } catch (err) {
    return next({
      log: `An error occurred in taskController.createTask: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

taskController.deleteTask = async (req, res, next) => {
  const { id } = req.query;
  try {
    // grab the task and delete it from database here

    // if the task is not found
    if (!id) {
      return next({
        log: "Task does not exist",
        status: 404,
        message: "Task not found",
      });
    }
    // let the user know it has been deleted
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    return next({
      log: `An error occurred in taskController.deleteTask: ${err}`,
      status: 500,
      message: "Internal Server Error",
    });
  }
};

module.exports = taskController;
