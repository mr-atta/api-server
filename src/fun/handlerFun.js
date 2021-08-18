"use strict";

const { clothes } = require("../models/index");

// clothes
async function getAllClothes(req, res) {
  let all = await clothes.getAll();
  res.status(200).json(all);
}

async function createOneClothes(req, res) {
  let clothInfo = req.body;
  let cloth = await clothes.createOne(clothInfo);
  res.status(201).json(cloth);
}

async function getOneClothes(req, res) {
  const id = parseInt(req.params.id);
  let cloth = await clothes.getOne({ where: { id: id } });
  res.status(200).json(cloth);
}

async function updateOneClothes(req, res) {
  const id = parseInt(req.params.id);
  let clothInfo = req.body;

  let clothItem = await clothes.getOne({ where: { id } });
  let updateClothInfo = await clothItem.updateOne(clothInfo);
  res.status(200).json(updateClothInfo);
}

async function deleteOneClothes(req, res) {
  const id = parseInt(req.params.id);

  let deleteOne = await food.deleteOne({ where: { id } });
  res.status(204).json(deleteOne);
}

module.exports = {
  getAllClothes,
  createOneClothes,
  getOneClothes,
  updateOneClothes,
  deleteOneClothes,
};
