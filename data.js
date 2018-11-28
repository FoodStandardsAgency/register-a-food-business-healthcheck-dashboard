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

const getTestHealthcheck = async () => {
  const testData = {};
  const frontEndHealthcheckTest = await fetch(testUrls.healthcheckPathFrontEnd);
  if (frontEndHealthcheckTest.status === 200) {
    testData.frontEndHealthcheck = "PASSING";
  } else {
    testData.frontEndHealthcheck = "FAILING";
  }
  const backEndHealthcheckTest = await fetch(testUrls.healthcheckPathBackEnd);
  if (backEndHealthcheckTest.status === 200) {
    testData.backEndHealthcheck = "PASSING";
  } else {
    testData.backEndHealthcheck = "FAILING";
  }
  return testData;
};

const getStagingHealthcheck = async () => {
  const stagingData = {};
  const frontEndHealthcheckStaging = await fetch(
    stagingUrls.healthcheckPathFrontEnd
  );
  if (frontEndHealthcheckStaging.status === 200) {
    stagingData.frontEndHealthcheck = "PASSING";
  } else {
    stagingData.frontEndHealthcheck = "FAILING";
  }
  const backEndHealthcheckStaging = await fetch(
    stagingUrls.healthcheckPathBackEnd
  );
  if (backEndHealthcheckStaging.status === 200) {
    stagingData.backEndHealthcheck = "PASSING";
  } else {
    stagingData.backEndHealthcheck = "FAILING";
  }
  return stagingData;
};

const getProdHealthcheck = async () => {
  const prodData = {};
  const frontEndHealthcheckProd = await fetch(prodUrls.healthcheckPathFrontEnd);
  if (frontEndHealthcheckProd.status === 200) {
    prodData.frontEndHealthcheck = "PASSING";
  } else {
    prodData.frontEndHealthcheck = "FAILING";
  }
  const backEndHealthcheckProd = await fetch(prodUrls.healthcheckPathBackEnd);
  if (backEndHealthcheckProd.status === 200) {
    prodData.backEndHealthcheck = "PASSING";
  } else {
    prodData.backEndHealthcheck = "FAILING";
  }
  return prodData;
};

const getHealthcheckData = async () => {
  const testData = await getTestHealthcheck();
  const stagingData = await getStagingHealthcheck();
  const prodData = await getProdHealthcheck();
  const data = {
    testData,
    stagingData,
    prodData
  };
  return data;
};

module.exports = { getHealthcheckData };

// setInterval(getDevHealthcheck, 300);
