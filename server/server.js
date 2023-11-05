const express = require('express');
const path = require('path');
const userController = require('./Controllers/userController.js');
const pool = require('./models/db.js');

const router = require('./routes.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL Database');

  // CREATE tasks table here
  // const createTasksTableQuery = `
  //   CREATE TABLE IF NOT EXISTS tasks (
  //     id SERIAL PRIMARY KEY,
  //     task_id VARCHAR(255) NOT NULL UNIQUE,
  //     subject VARCHAR(255) NOT NULL,
  //     status VARCHAR(50) NOT NULL,
  //     created_date TIMESTAMP WITH TIME ZONE,
  //     finish_date TIMESTAMP WITH TIME ZONE,
  //     username VARCHAR(255) REFERENCES user_login(username) ON DELETE CASCADE
  //   );
  // `;

  // client.query(createTasksTableQuery, (createErr, createRes) => {
  //   release();
  //   if (createErr) {
  //     return console.error('Error executing create table', createErr.stack);
  //   }
  //   console.log('Tasks table created successfully');
  // });
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
