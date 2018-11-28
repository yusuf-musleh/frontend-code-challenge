
/* defining the cart module */
var cart = angular.module('cart', []);

/* service for all 'Cart' related functionality */
cart.service('CartService', function($window) {

  /* Cart Structure
  /*  cart: {
  /*      id1: {
  /*        "id": id1,
  /*        "name": name,
  /*        "price": price,
  /*        "img": imgUrl,
  /*        "quantity": quantity
  /*      },
  /*      id2: {
  /*        "id": id2,
  /*        "name": name,
  /*        "price": price,
  /*        "img": imgUrl,
  /*        "quantity": quantity
  /*      },
  /*      ...
  /*    }

  /* initialize cart in localStorage if it's not already there */
  this.initCart = function() {
    if ($window.localStorage.getItem('cart') === null) {
      $window.localStorage.setItem('cart', JSON.stringify({}));
    }
  }
  this.initCart();

  this.getCart = function() {
    return JSON.parse($window.localStorage.getItem('cart'));
  }

  this.numOfItemsInCart = function() {
    var cart = this.getCart();
    var totalItemsQuantityCount = 0;
    Object.keys(cart).forEach(function (key, index) {
      totalItemsQuantityCount += cart[key].quantity;
    });
    return totalItemsQuantityCount;
  }

  this.addItemToCart = function(item) {
    var cart = this.getCart();
    /* check if item already in cart, if so increment quantity */
    if (cart[item.id] !== undefined) {
      cart[item.id].quantity += 1
    }
    else {
      cart[item.id] = item;
      cart[item.id].quantity = 1;
    }
    $window.localStorage.setItem('cart', JSON.stringify(cart));
  };

  this.removeItemFromCart = function(item) {
    var cart = this.getCart();
    /* check if item in cart, if so decrement quantity */
    if (cart[item.id] !== undefined) {
      if (cart[item.id].quantity > 1) {
        cart[item.id].quantity -= 1
      }
      /* if the quantity is 1, remove the item completely from cart */
      else {
        delete cart[item.id]
      }
    }
    $window.localStorage.setItem('cart', JSON.stringify(cart));
  }

});
