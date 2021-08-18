"use strict";

const express = require("express");
const router = express.Router();

const {
  getAllClothes,
  createOneClothes,
  getOneClothes,
  updateOneClothes,
  deleteOneClothes,
} = require("../fun/handlerFun");

router.get("/clothes", getAllClothes);
router.post("/clothes", createOneClothes);
router.get("/clothes/1/:id", getOneClothes);
router.put("/clothes/1/:id", updateOneClothes);
router.delete("/clothes/1/:id", deleteOneClothes);

module.exports = router;
