
/* defining the randoStoreCheckout module */
var randoStoreCheckout = angular.module('randoStoreCheckout', ['navbarModule', 'itemCardModule', 'cart', 'toaster', 'ngAnimate']);

/* controller for all 'Checkout' related functionality */
randoStoreCheckout.controller('checkoutCrtl', function($scope, CartService, toaster) {
  $scope.itemsToCheckout = CartService.getCart();
  $scope.cartItemsCount = CartService.numOfItemsInCart();

  $scope.pop = function(item) {
    if (item.quantity > 1) {
      toaster.pop('success', item.name, 'Reduced quantity!');
    }
    else {
      toaster.pop('success', item.name, 'Removed from cart!');
    }
  }

  $scope.removeItemFromCart = function(item) {
    CartService.removeItemFromCart(item);
    $scope.pop(item);
    $scope.cartItemsCount = CartService.numOfItemsInCart();
    $scope.itemsToCheckout = CartService.getCart();
  }

});
