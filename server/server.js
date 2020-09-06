// server.js
const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// const cookieParser = require('cookie-parser');

// Configuration

const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");
require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());

// Routes
const routes = require("./src/routes");
app.use("/", routes);
// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function (req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});

app.listen(process.env.PORT, function () {
  console.log(`%%%%%%%====== Server Listening on ${process.env.PORT} =======%%%%%%%%`);
});
