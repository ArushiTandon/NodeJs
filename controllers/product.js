const path = require('path');
const rootDir = require('../misc/path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
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