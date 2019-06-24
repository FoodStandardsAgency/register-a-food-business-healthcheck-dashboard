const fetch = require("node-fetch");
const {
  HEALTHCHECK_PATH_FRONT_END,
  HEALTHCHECK_PATH_BACK_END
} = require("../config");

const getHealthcheckData = async () => {
  console.log("data.js getHealthcheckData called");
  const pingData = {};
  const frontEndHealthcheck = await fetch(HEALTHCHECK_PATH_FRONT_END);
  if (frontEndHealthcheck.status === 200) {
    pingData.frontEndHealthcheck = "PASSING";
  } else {
    pingData.frontEndHealthcheck = "FAILING";
  }
  const backEndHealthcheck = await fetch(HEALTHCHECK_PATH_BACK_END);
  if (backEndHealthcheck.status === 200) {
    pingData.backEndHealthcheck = "PASSING";
  } else {
    pingData.backEndHealthcheck = "FAILING";
  }
  return pingData;
};

module.exports = { getHealthcheckData };
