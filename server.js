const express = require("express");
const path = require('path');
const app = express();

const { getHealthcheckData } = require("./data");
const { getStatusData } = require("./detailed");
const port = process.env.PORT || 4001;

app.use(express.static(path.join(__dirname, 'build')));

app.get("/data", async (req, res) => {
  const response = await getHealthcheckData();
  res.send(response);
});

app.get("/detailed/:env", async (req, res) => {
  // EITHER: dev, test, prod or staging
  const response = await getStatusData(req.params.env);
  res.send(response);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
