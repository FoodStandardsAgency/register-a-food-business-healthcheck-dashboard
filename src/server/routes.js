const { Router } = require("express");

const { getHealthcheckData } = require("./services/data");
const { getStatusData } = require("./services/detailed");

module.exports = () => {
  const router = new Router();

  router.get("/data", async (req, res) => {
    const response = await getHealthcheckData();
    res.send(response);
  });

  router.get("/detailed/:env", async (req, res) => {
    // EITHER: dev, test, prod or staging
    const response = await getStatusData(req.params.env);
    res.send(response);
  });

  return router;
}