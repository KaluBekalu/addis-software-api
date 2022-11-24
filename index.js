const express = require("express");

const app = express();
const apiPort = 5000;

app.get("/", (req, res) => {
  res.send("Hello Addis soft!");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
