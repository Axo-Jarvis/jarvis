const bcrypt = require('bcryptjs');
const pool = require('../models/db.js');

const userController = {};

userController.signup = async (req, res, next) => {
  const { username, password, firstName, lastName } = req.body;

  if (!username || !password || !firstName || !lastName) {
    return next({
      log: 'Missing username, password, firstName, or lastName in userController.signupUser',
      status: 400,
      message: { error: 'All fields required' },
    });
  }
  try {
    const searchQuery = 'SELECT * FROM user_login WHERE username = $1';
    const userExists = await pool.query(searchQuery, [username]);

    if (userExists.rows.length > 0) {
      return next({
        log: 'User already exists in userController.signup',
        status: 400,
        message: { error: 'User already exists' },
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const insertQuery =
      'INSERT INTO user_login(username, password, first_name, last_name) VALUES($1, $2, $3, $4)';
    await pool.query(insertQuery, [
      username,
      hashedPassword,
      firstName,
      lastName,
    ]);

    res.locals.userInfo = { username, firstName };
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: `An error occurred in userController.signupUser: ${err}`,
      status: 500,
      message: { err: `An error occurred during signup` },
    });
  }
};

userController.login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: 'Missing username or password in userController.loginUser',
      status: 400,
      message: { error: 'Username and/or password cannot be empty' },
    });
  }

  try {
    const searchQuery = 'SELECT * FROM user_login WHERE username = $1';
    const userResult = await pool.query(searchQuery, [username]);

    if (userResult.rows.length === 0) {
      return next({
        log: 'User does not exist in userController.loginUser',
        status: 400,
        message: { error: 'Username and/or password are incorrect' },
      });
    }

    const user = userResult.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return next({
        log: 'Password does not match in userController.loginUser',
        status: 400,
        message: { error: 'Username and/or password are incorrect' },
      });
    }

    res.locals.userInfo = {
      username: user.username,
      firstName: user.first_name,
    };
    return next();
  } catch (err) {
    return next({
      log: `An error occurred in userController.loginUser: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

module.exports = userController;
