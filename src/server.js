"use strict";

// IMPORT

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
//IMPORT FROM FIELS
const loggerModeule = require("./middleware/logger");
const handler404 = require("./error-handlers/404");
const handler500 = require("./error-handlers/500");

//IMPORT from Route
const clothesRouter = require("./routes/clothes");
const foodRouter = require("./routes/food");

//
app.use(express.json());
app.use(loggerModeule);

// home
app.get("/", (req, res) => {
  res.status(200).send(`Hello `);
});

//use Route
app.use(clothesRouter);
app.use(foodRouter);

// 404 , 500
app.get("/bad", (req, res, next) => {
  next("error from (bad) end point");
});

app.use(handler500);

app.use("*", handler404);

// export and listen
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server listen at port : ${port}`));
  },
};
