
/* defining the randoStoreIndex module */
var randoStoreIndex = angular.module('randoStoreIndex', ['cart']);

/* controller for all 'Home Page' relatd functionality */
randoStoreIndex.controller('storeIndexCtrl', function($scope, CartService) {
  $scope.cartItemsCount = CartService.numOfItemsInCart();
});
