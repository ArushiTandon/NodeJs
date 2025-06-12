const Product = require('../models/product');
// const Cart = require('../models/cart');
const mongodb = require('mongodb');


exports.getProducts = (req, res, next) => {
  Product.find()
  .then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err => console.log(err));
  };

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
    console.log(product);
  })
  .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.find() //what is cursor? why do we need it?
  .then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch( err => {
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  
  req.user
  .populate('cart.items.productId') //populate() is a mongoose method that replaces the specified path in the document with the documents from another collection
  .execPopulate() //execPopulate() is used to execute the population of the document
    .then(user => {
      const products = user.cart.items; //user.cart.items is an array of objects, each object contains productId and quantity
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: products,
      });
    })
    .catch(err => console.log(err));
  }
 

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId).then(product => {
    return req.user.addToCart(product);
  })
  .then(result => { 
    console.log(result)
    res.redirect('/cart');
  }
  )
  
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
  .getCart()
  .then(cart => {
    return cart.getProducts({where: { id : prodId} });
  })
  .then(products => {
    const product = products[0];
    return product.cartItem.destroy();
  })
  .then(result => {
    res.redirect('/cart');
  })
  .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user
  .addOrder()
  .then(result => {
    res.redirect('/orders');
  })
  .catch(err => console.log(err));
};


exports.getOrders = (req, res, next) => {
  req.user
  .getOrders()
  .then(orders => {
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders'
    });
  })
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
