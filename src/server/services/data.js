const fetch = require("node-fetch");

const testUrls = {
  healthcheckPathFrontEnd:
    "https://test-register-a-food-business.azurewebsites.net/status/healthcheck",
  healthcheckPathBackEnd:
    "https://test-register-a-food-business-service.azurewebsites.net/api/status/healthcheck"
};

const stagingUrls = {
  healthcheckPathFrontEnd:
    "https://staging-register-a-food-business.azurewebsites.net/status/healthcheck",
  healthcheckPathBackEnd:
    "https://staging-register-a-food-business-service.azurewebsites.net/api/status/healthcheck"
};
const prodUrls = {
  healthcheckPathFrontEnd:
    "https://prod-register-a-food-business.azurewebsites.net/status/healthcheck",
  healthcheckPathBackEnd:
    "https://prod-register-a-food-business-service.azurewebsites.net/api/status/healthcheck"
};

const getHealthcheckData = async () => {
  const pingData = {};
  const frontEndHealthcheckProd = await fetch(prodUrls.healthcheckPathFrontEnd);
  if (frontEndHealthcheckProd.status === 200) {
    pingData.frontEndHealthcheck = "PASSING";
  } else {
    pingData.frontEndHealthcheck = "FAILING";
  }
  const backEndHealthcheckProd = await fetch(prodUrls.healthcheckPathBackEnd);
  if (backEndHealthcheckProd.status === 200) {
    pingData.backEndHealthcheck = "PASSING";
  } else {
    pingData.backEndHealthcheck = "FAILING";
  }
  return pingData;
};

module.exports = { getHealthcheckData };

// setInterval(getDevHealthcheck, 300);
