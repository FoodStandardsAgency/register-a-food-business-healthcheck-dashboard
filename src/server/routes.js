const { Router } = require("express");
var jwt = require('jsonwebtoken');

const { COOKIE_SECRET } = require("./config");
const { authHandler } = require("./middleware/authHandler");
const { getHealthcheckData } = require("./services/data");
const { getStatusData } = require("./services/detailed");
const { getRegistrationStats } = require("./services/registrations.service"); 

module.exports = () => {
  const router = new Router();

  router.get("/data", async (req, res) => {
    const response = await getHealthcheckData();
    res.send(response);
  });

  router.get("/detailed", async (req, res) => {
    const response = await getStatusData();
    res.send(response);
  });

  router.get("/registrationStats", async (req, res) => {
    console.log("registrationStats route called");
    try {
      await jwt.verify(req.cookies.token, COOKIE_SECRET);
      console.log("valid token");
      const registrationStats = await getRegistrationStats();
      res.send(registrationStats);
    } catch (err) {
      console.log(err);
      console.log("invalid token");
      res.send({message: "Unauthorized"})
    }
  });

  router.post("/login", authHandler, (req, res) => {
    // Everything at this point is authenticated
    var token = jwt.sign({ username: req.body.username }, COOKIE_SECRET, { expiresIn: "24h" });
    res.cookie("token", token);
    res.redirect("/registration-stats");
  });

  router.get("/isLoggedIn", async (req, res) => {
    console.log("isLoggedIn route called");
    try {
      await jwt.verify(req.cookies.token, COOKIE_SECRET);
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