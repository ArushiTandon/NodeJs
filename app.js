const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/',shopRoutes);

app.get('/', (req, res, next) => {
    res.redirect('/admin/add-product');
});

app.use(errorController.geterror);

app.listen(4000);