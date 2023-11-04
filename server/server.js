const express = require('express');
const path = require('path');
const userController = require('./Controllers/userController.js');
const pool = require('./models/db.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL database');

  // create table labeled user_login
});

app.post('/api/signup', userController.signup, (req, res) => {
  res.status(201).json({
    message: 'Signup Successful',
    user: res.locals.userInfo,
  });
});

app.post('/api/login', userController.login, (req, res) => {
  res.status(201).json({
    message: 'Login Successful',
    user: res.locals.userInfo,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
