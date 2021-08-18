"use strict";

const food = (sequelize, DataTypes) =>
  sequelize.define("Food", {
    // id column will be added by default with datatibe SERIAL
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = food;
