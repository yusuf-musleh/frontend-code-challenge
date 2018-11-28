
/* defining the randoStoreItems module */
var randoStoreItems = angular.module('randoStoreItems', ['navbarModule', 'itemCardModule', 'cart', 'toaster', 'ngAnimate']);

/* controller for all 'Browse All Items' related functionality */
randoStoreItems.controller('allItemsCtrl', function($scope, $http, CartService, toaster) {
  $scope.allItems = [];
  $scope.cartItemsCount = CartService.numOfItemsInCart();

  /* fetch all items from db in server */
  $scope.fetchAllItems = function() {
    $http.get('/items')
      .then(function successCallback(response){
          $scope.allItems = response.data;
      }, function errorCallback(response){
          console.log('Unable to perform get request');
      });
  }
  $scope.fetchAllItems();

  $scope.pop = function(item) {
    toaster.pop('success', item.name, 'Added to cart!');
  }

  $scope.addItemToCart = function(item) {
    CartService.addItemToCart(item);
    $scope.pop(item);
    $scope.cartItemsCount = CartService.numOfItemsInCart();
  }

});
