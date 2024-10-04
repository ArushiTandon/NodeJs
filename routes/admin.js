const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../misc/path');

const productController = require('../controllers/product');


router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

router.get('/contact-us', productController.getContact);

router.post('/success', productController.postContact);

router.get('/success', productController.getSuccess);

module.exports = router;