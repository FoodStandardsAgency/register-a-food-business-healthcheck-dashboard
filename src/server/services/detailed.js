const fetch = require("node-fetch");
const { getStoredStats } = require("./registrations.service");

const frontEndID = "frontEndStatus";
const backEndID = "backEndStatus";

const getStatus = async () => {
  const frontendStatusData = {};
  const frontEndStatus = await getStoredStats(frontEndID);
  if (frontEndStatus && frontEndStatus._id === frontEndID) {
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
  const backEndStatus = await getStoredStats(backEndID);
  if (backEndStatus && backEndStatus._id === backEndID) {
    for (let statusName in backEndStatus) {
      backendStatusData[statusName] = `${
        backEndStatus[statusName]
      }`;
    }
  } else if (backEndStatus) {
    backendStatusData.frontendStatus = `${backEndStatus.status}`;
  } else {
    console.log("unable to get data")
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
