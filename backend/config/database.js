const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

module.exports = sequelize;
