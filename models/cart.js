const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),  // Updated to avoid deprecated process.mainModule
  'data',
  'cart.json'
);

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err && fileContent.length > 0) {
        try {
          cart = JSON.parse(fileContent);
        } catch (parseError) {
          console.error('Error parsing the cart file:', parseError);
        }
      }

      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        prod => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      // Add new product / increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      // Update total price
      cart.totalPrice = cart.totalPrice + parseFloat(productPrice);  // Use parseFloat for better conversion

      // Write updated cart to file
      fs.writeFile(p, JSON.stringify(cart), err => {
        if (err) {
          console.error('Error writing the cart file:', err);
        }
      });
    });
  }
  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContent) => {
      if(err) {
        return;
      }
      const updatedCart = {...JSON.parse(fileContent)};
      const product = updatedCart.products.find(prod => prod.id === id);
      const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(prod => prod.id !== id)
      updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updatedCart), err => {
        if (err) {
          console.error('Error updating the cart file:', err);
        }
      });
    });
  }


static getCart(cb) {
  fs.readFile(p, (err, fileContent) => {
    const cart = JSON.parse(fileContent);
    if (err) {
      cb(null);
    } else {
      cb(cart);
    }
  });
}
}


