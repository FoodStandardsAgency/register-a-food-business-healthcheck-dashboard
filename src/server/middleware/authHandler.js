const { DASHBOARD_USERNAME, DASHBOARD_PASSWORD } = require("../config");

const validateUsername = username => {
  return DASHBOARD_USERNAME === username;
};

const validatePassword = password => {
  return DASHBOARD_PASSWORD === password;
};

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
