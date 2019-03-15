const { getAllRegistrations } = require("../connectors/registrationDb.connector");
const { getStoredStatus } = require("../connectors/status-db/status-db.connector");
const { TEST_STATUS_DB, STAGING_STATUS_DB, PROD_STATUS_DB } = require("../config");

const getRegistrationStats = async () => {
  const registrations = await getAllRegistrations();
  return registrations.map(registration => ({ council: registration.council, createdAt: registration.createdAt }));
};

const getFrontEndStats = async (environment) => {
  const environments = {
    test: TEST_STATUS_DB,
    staging: STAGING_STATUS_DB,
    prod: PROD_STATUS_DB
  }
  return getStoredStatus(environments[environment]);
}

module.exports = { getRegistrationStats, getFrontEndStats };
