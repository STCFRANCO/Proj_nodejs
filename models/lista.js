const { DataTypes } = require("sequelize");
const sequelize = require("../conection");

const Lista = sequelize.define("Lista", {
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Lista;
