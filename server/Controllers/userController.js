//Add these in once we have the models set up
// const models = require("../models/models");
// const { User, CareRecipient, Task } = require("../models/models");
const bcrypt = require("bcryptjs");

const userController = {};

userController.getAllUsers = async (req, res, next) => {
  try {
    // grab users from the database
  } catch (err) {
    return next({
      log: `An error occurred in userController.getAllUsers: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

userController.loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: "Missing username or password in userController.loginUser",
      status: 400,
      message: { error: "Username and/or password cannot be empty" },
    });
  }

  try {
    // grab users from database

    if (!user) {
      return next({
        log: "User does not exist in userController.loginUser",
        status: 400,
        message: { error: "Username and/or password are incorrect" },
      });
    } else {
      const id = user.id;
      res.locals.userEmail = user.email;

      const result = await bcrypt.compare(password, user.password);
      if (!result) {
        return next({
          log: "Password does not match userController.loginUser",
          status: 400,
          message: { error: "Username and/or password are incorrect" },
        });
      } else {
        res.locals.userData = result;
        return next();
      }
    }
  } catch (err) {
    return next({
      log: `An error occurred in userController.loginUser: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};

userController.signupUser = async (req, res, next) => {
  const { username, password, ...rest } = req.body;

  if (!username || !password) {
    return next({
      log: "Missing username or password in userController.signupUser",
      status: 400,
      message: { error: "Username and/or password cannot be empty" },
    });
  }
  try {
    // send info to databse here
    res.locals.userID = user.id;
    res.locals.userInfo = user;
    return next();
  } catch (err) {
    return next({
      log: `An error occurred in userController.signupUser: ${err}`,
      status: 500,
      message: { err: `An error occurred` },
    });
  }
};
