const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'arushi@mysql', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;