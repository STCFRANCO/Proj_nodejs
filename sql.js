const Sequelize = require('sequelize');
const sequelize = new Sequelize ('Mydb', 'root','admin', {
    dialect: 'sqlite3',
    host: 'localhost',
    port: '5500'
})

module.exports = sequelize;