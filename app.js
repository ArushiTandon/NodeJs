const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { FORCE } = require('sequelize/lib/index-hints');
const { log } = require('console');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('6849b6111334d5f64b2d5cfc')
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://arushitandon007:PSuSG0xa4gyjjw6G@cluster0.jwciwob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(result => {

    User.findOne().then(user => {
        if(!user) {
            const user = new User({
                name: 'Arushi',
                email: 'arushi@test.com',
                cart: { items: [] }
            });
            user.save();
        }
    });
    app.listen(3000);
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log(err);
})