const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "sqlnode.db",
});

sequelize.sync();

module.exports = sequelize;
