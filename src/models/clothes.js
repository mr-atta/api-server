"use strict";

const clothes = (sequelize, DataTypes) =>
  sequelize.define("Clothes", {
    // id column will be added by default with datatibe SERIAL
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clothesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = clothes;
