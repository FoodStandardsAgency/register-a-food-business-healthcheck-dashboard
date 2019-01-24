const { Router } = require("express");
var jwt = require('jsonwebtoken');

const { SECRET } = require("./config");
const { authHandler } = require("./middleware/authHandler");
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

  router.get("/registrationStats", async (req, res) => {
    console.log("registrationStats route called");
    try {
      await jwt.verify(req.cookies.token, SECRET);
      console.log("valid token");
      res.send({message: "Some stats will go here"});
    } catch (err) {
      res.send({message: "Unauthorized"})
    }
  });

  router.post("/login", authHandler, (req, res) => {
    // Everything at this point is authenticated
    var token = jwt.sign({ username: req.body.username }, SECRET, { expiresIn: "24h" });
    res.cookie("token", token);
    res.redirect("/registration-stats");
  });

  router.get("/isLoggedIn", async (req, res) => {
    console.log("isLoggedIn route called");
    try {
      await jwt.verify(req.cookies.token, SECRET);
      console.log("Valid token");
      res.status(200);
      res.send("User is logged in");
    } catch (err) {
      console.log("Invalid Token");
      res.status(403);
      res.send("User is not logged in");
    }
  });

  return router;
}