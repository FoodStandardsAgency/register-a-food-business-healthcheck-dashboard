const { Registration, connectToDb } = require("../db/db");

const getAllRegistrations = async () => {
  console.log("registrationDb.connector.js getAllRegistrations called");
  await connectToDb();
  const registrations = await Registration.findAll();
  return registrations.map(registration => registration.dataValues);
};

module.exports = {
  getAllRegistrations
};
