const { getAllRegistrations } = require("../connectors/registrationDb.connector");

const getRegistrationStats = async () => {
  const registrations = await getAllRegistrations();
  const mappedRegistrations = registrations.map(registration => ({ council: registration.council, collected_at: registration.collected_at }));
  return mappedRegistrations;
};

module.exports = { getRegistrationStats };
