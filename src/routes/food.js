"use strict";

const express = require("express");
const router = express.Router();

const {
  getAllFood,
  createOneFood,
  getOneFood,
  updateOneFood,
  deleteOneFood,
} = require("../fun/handlerFun2");

router.get("/food", getAllFood); // read all
router.post("/food", createOneFood); // add one
router.get("/food/1/:id", getOneFood); // read one
router.put("/food/1/:id", updateOneFood); // update one
router.delete("/food/1/:id", deleteOneFood); // delete one

module.exports = router;
