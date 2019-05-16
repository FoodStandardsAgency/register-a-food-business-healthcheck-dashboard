const { getAllRegistrations } = require("../connectors/registrationDb.connector");
const { getStoredStatus } = require("../connectors/status-db/status-db.connector");
const { STATUS_DB } = require("../config");

const getRegistrationStats = async () => {
  const registrations = await getAllRegistrations();
  return registrations.map(registration => ({ council: registration.council, createdAt: registration.createdAt }));
};

const getFrontEndStats = async () => {
  return getStoredStatus(STATUS_DB);
}

module.exports = { getRegistrationStats, getFrontEndStats };
