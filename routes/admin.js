const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../misc/path');

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method = "POST"><input type ="text" name="title" placeholder="product"><input type="text" name="size" placeholder="product size"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

//contact route
router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
})

router.post('/success', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
});

router.get('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});

module.exports = router;