const {
  getAllRegistrations
} = require("../connectors/registrationDb.connector");
const {
  getStoredStatus
} = require("../connectors/status-db/status-db.connector");
const { STATUSDB_URL } = require("../config");

const getRegistrationStats = async () => {
  console.log("registrations.service.js getRegistrationStats called");
  const registrations = await getAllRegistrations();
  return registrations.map(registration => ({
    council: registration.council,
    createdAt: registration.createdAt
  }));
};

const getStoredStats = async id => {
  console.log("registration.service.js getStoredStats called");
  return getStoredStatus(STATUSDB_URL, id);
};

module.exports = { getRegistrationStats, getStoredStats };
