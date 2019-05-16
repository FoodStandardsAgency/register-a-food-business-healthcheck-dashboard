const fetch = require("node-fetch");
const { getFrontEndStats } = require("./registrations.service");

const testUrls = {
  statusPathFrontEnd:
    "https://test-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://test-register-a-food-business-service.azurewebsites.net/api/status/all"
};

const stagingUrls = {
  statusPathFrontEnd:
    "https://staging-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://staging-register-a-food-business-service.azurewebsites.net/api/status/all"
};
const prodUrls = {
  statusPathFrontEnd:
    "https://prod-register-a-food-business.azurewebsites.net/status/all",
  statusPathBackEnd:
    "https://prod-register-a-food-business-service.azurewebsites.net/api/status/all"
};

const getStatus = async () => {
  const frontendStatusData = {};
  const frontEndStatus = await getFrontEndStats();
  if (frontEndStatus && frontEndStatus._id === "frontEndStatus") {
    for (let statusName in frontEndStatus) {
      frontendStatusData[statusName] = `${
        frontEndStatus[statusName]
      }`;
    }
  } else if (frontEndStatus) {
    frontendStatusData.frontendStatus = `${frontEndStatus.status}`;
  } else {
    console.log("unable to get data")
  }

  const backendStatusData = {};
  const backEndStatus = await fetch(prodUrls.statusPathBackEnd);
  if (backEndStatus.status === 200) {
    backendStatusData.backendStatus = `${backEndStatus.status}`;
    const backEndStatusJson = await backEndStatus.json();
    console.log(backEndStatusJson);
    for (let statusName in backEndStatusJson) {
      backendStatusData[statusName] = `${
        backEndStatusJson[statusName]
      }`;
    }
  } else {
    backendStatusData.backendStatus = `${backEndStatus.status}`;
  }
  const statusData = {
    frontendStatusData,
    backendStatusData
  };

  return statusData;
};

const getStatusData = async () => {
  return getStatus();
};
// setInterval(getStatusData, 300);
module.exports = { getStatusData };
