const db = require("./models");

db.sequelize
  .authenticate()
  .then(() => {
    info("Connection to postgres db has been established successfully.");
  })
  .catch(err => {
    info("Unable to connect to the database:", err);
  });

module.exports = {
  Registration: db.registration
};
