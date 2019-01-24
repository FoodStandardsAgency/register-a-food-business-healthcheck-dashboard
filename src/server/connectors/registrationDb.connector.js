const { Registration, connectToDb } = require("../db/db"); 

const getAllRegistrations = async () => {
  const registrations = Registration.findAll();
  return registrations.map(registration => registration.dataValues);
};

module.exports = {
  getAllRegistrations
};
