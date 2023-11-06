const express = require('express');
const userController = require('./Controllers/userController');
const taskController = require('./Controllers/taskController');

const router = express.Router();

router.post('/api/signup', userController.signup, (req, res) => {
  res.status(201).json({
    message: 'Signup Successful',
    user: res.locals.userInfo,
  });
});

router.post('/api/login', userController.login, (req, res) => {
  res.status(200).json({
    message: 'Login Successful',
    user: res.locals.userInfo,
  });
});

router.get('/api/getTasks', taskController.getTasks, (req, res) => {
  res.status(200).json({
    message: 'Tasks Retrieved',
    tasks: res.locals.tasks,
  });
});

router.post('/api/createTask', taskController.createTask, (req, res) => {
  res.status(201).json({
    message: 'Task Created',
    task: res.locals.task,
  });
});

router.post('/api/deleteTask', taskController.deleteTask, (req, res) => {
  res.status(201).json({
    message: 'Task Deleted',
    task: res.locals.task,
  });
});

router.post('/api/updateTask', taskController.updateTask, (req, res) => {
  res.status(201).json({
    message: 'Task Updated',
    task: res.locals.task,
  });
});

module.exports = router;
