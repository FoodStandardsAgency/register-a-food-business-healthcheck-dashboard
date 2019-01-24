const { USERNAME, PASSWORD } = require("../config");

const validateUsername = (username) => {
  return USERNAME === username;
}

const validatePassword = (password) => {
  return PASSWORD === password;
}

const authHandler = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (validateUsername(username) && validatePassword(password)) {
    next();
  } else {
    res.redirect("/registration-stats");
  }
};

module.exports = { authHandler };