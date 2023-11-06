const express = require('express');
const userController = require('./Controllers/userController');
const taskController = require('./Controllers/taskController');

const router = express.Router();

// add controller and thing to send back
router.post('/login', (req, res) => {
  res.status(200).json();
});

// add controller and thing to send back
router.post('/signup', (req, res) => {
  res.status(200).json();
});

// add controller and thing to send back
router.get('/users', (req, res) => res.status(200).json());

// add controller and thing to send back
router.post('/addTask', (req, res) => {
  res.status(200).json();
});

// add controller and thing to send back
router.post('/deleteTask', (req, res) => {
  res.status(200).json();
});

// add controller and thing to send back
router.post('/updateTask', (req, res) => {
  res.status(200).json();
});

// add controller and thing to send back
router.get('/getTasks/:userID', (req, res) => {
  res.status(200).json();
});

module.exports = router;
