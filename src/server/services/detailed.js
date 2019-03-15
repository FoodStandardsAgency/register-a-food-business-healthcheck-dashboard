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

const getProdStatus = async () => {
  const prodFrontendStatusData = {};
  const frontEndStatusProd = await getFrontEndStats("prod");
  if (frontEndStatusTest._id === "frontEndStatus") {
    for (let statusName in frontEndStatusProd) {
      prodFrontendStatusData[statusName] = `${
        frontEndStatusProd[statusName]
      }`;
    }
  } else {
    prodFrontendStatusData.frontendStatus = `${frontEndStatusProd.status}`;
  }

  const prodBackendStatusData = {};
  const backEndStatusProd = await fetch(prodUrls.statusPathBackEnd);
  if (backEndStatusProd.status === 200) {
    prodBackendStatusData.backendStatus = `${backEndStatusProd.status}`;
    const backEndStatusProdJson = await backEndStatusProd.json();
    console.log(backEndStatusProdJson);
    for (let statusName in backEndStatusProdJson) {
      prodBackendStatusData[statusName] = `${
        backEndStatusProdJson[statusName]
      }`;
    }
  } else {
    prodBackendStatusData.backendStatus = `${backEndStatusProd.status}`;
  }
  const prodStatusData = {
    prodFrontendStatusData,
    prodBackendStatusData
  };

  return prodStatusData;
};

const getTestStatus = async () => {
  const testFrontendStatusData = {};
  const frontEndStatusTest = await getFrontEndStats("test");
  if (frontEndStatusTest._id === "frontEndStatus") {
    for (let statusName in frontEndStatusTest) {
      testFrontendStatusData[statusName] = `${
        frontEndStatusTest[statusName]
      }`;
    }
  } else {
    testFrontendStatusData.frontendStatus = `${frontEndStatusTest.status}`;
  }

  const testBackendStatusData = {};
  const backEndStatusTest = await fetch(testUrls.statusPathBackEnd);
  if (backEndStatusTest.status === 200) {
    testBackendStatusData.backendStatus = `${backEndStatusTest.status}`;
    const backEndStatusTestJson = await backEndStatusTest.json();
    for (let statusName in backEndStatusTestJson) {
      testBackendStatusData[statusName] = `${
        backEndStatusTestJson[statusName]
      }`;
    }
  } else {
    testBackendStatusData.backendStatus = `${backEndStatusTest.status}`;
  }
  const testStatusData = {
    testFrontendStatusData,
    testBackendStatusData
  };

  return testStatusData;
};

const getStagingStatus = async () => {
  const stagingFrontendStatusData = {};
  const frontEndStatusStaging = await getFrontEndStats("staging");
  if (frontEndStatusStaging._id === "frontEndStatus") {
    for (let statusName in frontEndStatusStaging) {
      stagingFrontendStatusData[statusName] = `${
        frontEndStatusStaging[statusName]
      }`;
    }
  } else {
    stagingFrontendStatusData.frontendStatus = `${
      frontEndStatusStaging.status
    }`;
  }

  const stagingBackendStatusData = {};
  const backEndStatusStaging = await fetch(stagingUrls.statusPathBackEnd);
  if (backEndStatusStaging.status === 200) {
    stagingBackendStatusData.backendStatus = `${backEndStatusStaging.status}`;
    const backEndStatusStagingJson = await backEndStatusStaging.json();
    for (let statusName in backEndStatusStagingJson) {
      stagingBackendStatusData[statusName] = `${
        backEndStatusStagingJson[statusName]
      }`;
    }
  } else {
    stagingBackendStatusData.backendStatus = `${backEndStatusStaging.status}`;
  }
  const stagingStatusData = {
    stagingFrontendStatusData,
    stagingBackendStatusData
  };

  return stagingStatusData;
};

const getStatusData = async env => {
  if (env === "prod") {
    return getProdStatus();
  } else if (env === "test") {
    return getTestStatus();
  } else if (env === "staging") {
    return getStagingStatus();
  }
};
// setInterval(getStatusData, 300);
module.exports = { getStatusData };
