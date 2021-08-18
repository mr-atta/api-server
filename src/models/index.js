"use strict";

const clothes = require("./clothes");
const food = require("./food");
require("dotenv").config();

// import Collection
const Collection = require("../models/collection-class");

const { Sequelize, DataTypes } = require("sequelize");

const POSTGRES_URI =
  process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/lap04";

const sequelize = new Sequelize(POSTGRES_URI, {});

// models
const clotheModel = clothes(sequelize, DataTypes);
const foodModel = food(sequelize, DataTypes);

// the relation
clotheModel.hasMany(foodModel, { sourceKey: "id", foreignKey: "clothesId" });
foodModel.belongsTo(clotheModel, { foreignKey: "clothesId", targetKey: "id" });

// use the Collection
const clotheCol = new Collection(clotheModel);
const foodCol = new Collection(foodModel);

module.exports = {
  db: sequelize,
  clothes: clotheCol,
  food: foodCol,
};
