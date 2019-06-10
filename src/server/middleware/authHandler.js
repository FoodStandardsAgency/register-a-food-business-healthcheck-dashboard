const { WEBSITE_USERNAME, WEBSITE_PASSWORD } = require("../config");

const validateUsername = (username) => {
  return WEBSITE_USERNAME === username;
}

const validatePassword = (password) => {
  return WEBSITE_PASSWORD === password;
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