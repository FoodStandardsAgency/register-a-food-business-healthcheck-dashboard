const express = require("express");
const path = require('path');
const routes = require("./src/server/routes");

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(routes());
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Listening on port ${port}`));
