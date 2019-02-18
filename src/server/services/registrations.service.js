const { getAllRegistrations } = require("../connectors/registrationDb.connector");

const getRegistrationStats = async () => {
  const registrations = await getAllRegistrations();
  return registrations.map(registration => ({ council: registration.council, createdAt: registration.createdAt }));
};

module.exports = { getRegistrationStats };
