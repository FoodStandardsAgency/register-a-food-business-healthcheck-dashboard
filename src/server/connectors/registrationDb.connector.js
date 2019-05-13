const { Registration, connectToDb } = require("../db/db"); 

const getAllRegistrations = async () => {
  await connectToDb();
  const registrations = await Registration.findAll();
  return registrations.map(registration => registration.dataValues);
};

module.exports = {
  getAllRegistrations
};
