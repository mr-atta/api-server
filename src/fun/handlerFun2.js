"use strict";

// import the collection

const { food } = require("../models/index");

// food

async function getAllFood(req, res) {
  let all = await food.getAll();
  res.status(200).json(all);
}

async function createOneFood(req, res) {
  let foodInfo = req.body;

  let foodItem = await food.createOne(foodInfo);
  res.status(201).json(foodItem);
}

async function getOneFood(req, res) {
  const id = parseInt(req.params.id);

  let foodItem = await food.getOne({ where: { id: id } });
  res.status(200).json(foodItem);
}

async function updateOneFood(req, res) {
  const id = parseInt(req.params.id);
  let foodInfo = req.body;

  let foodItem = await food.getOne({ where: { id } });
  let updateFoodInfo = await foodItem.updateOne(foodInfo);
  res.status(200).json(updateFoodInfo);
}

async function deleteOneFood(req, res) {
  const id = parseInt(req.params.id);

  let deleteOne = await food.deleteOne({ where: { id: id } });
  res.status(204).json(deleteOne);
}

module.exports = {
  getAllFood,
  createOneFood,
  getOneFood,
  updateOneFood,
  deleteOneFood,
};
