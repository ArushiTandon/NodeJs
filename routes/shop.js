const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../misc/path');
const productController = require('../controllers/product');

router.get('/', productController.getShop);

module.exports = router;