const db = require("./models");

const connectToDb = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection to postgres db has been established successfully.");
  } catch (err) {
    console.log(`Unable to connect to the database: ${err}`);
  }
};

const closeConnection = async () => {
  return db.sequelize.close();
};

module.exports = {
  Registration: db.registration,
  connectToDb,
  closeConnection
};
