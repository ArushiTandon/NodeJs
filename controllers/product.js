const Product = require('../models/product')
const path = require('path');
const rootDir = require('../misc/path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    const products = product.fetchAll((products) => {
        fs.readfile
     res.redirect('/');
    });  
}

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
}

exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/success');
}

exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}

exports.getShop = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}