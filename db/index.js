const mongoose = require("mongoose");

// configure this connection string with respext docker mongo image
const connectionString = "mongodb://mongo:27017/addis-soft";

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
