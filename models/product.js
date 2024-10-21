const Sequelize = require('sequelize');

const sequelize = require('../misc/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowedNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowedNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowedNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowedNull: false
  }
});

module.exports = Product;