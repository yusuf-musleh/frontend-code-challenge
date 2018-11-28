
/* defining the randoStoreAddItems module */
var randoStoreAddItems = angular.module('randoStoreAddItems', ['navbarModule', 'cart']);

/* controller for all 'Add Item' related functionality */
randoStoreAddItems.controller('addItemCtrl', function($scope, $http, CartService) {

  /* states of add item form
  /* 0: idle
  /* 1: submitting
  /* 2: submitted successfully
  /* 3: error from server
  */
  $scope.addItemFormState = 0;

  $scope.cartItemsCount = CartService.numOfItemsInCart();

  /* reset add item form */
  $scope.resetAddItemForm = function() {
    $scope.addItemForm.$setPristine();
    $scope.addItemForm.$setUntouched();
    $scope.itemInfo = {};
    $scope.addItemFormState = 0;
    $scope.errorMessageFromServer = '';
  }

  /* add item form submit handler */
  $scope.addItem = function(itemInfo) {
    if ($scope.addItemForm.$valid) {
      /* make post request to add new item */
      $scope.addItemFormState = 1;
      $http.post('/items', itemInfo)
        .then(function successCallback(response){
            console.log('successfully added item:');
            $scope.addItemFormState = 2;
        }, function errorCallback(response){
            console.log('failed to add item');
            console.log(response.data);
            $scope.addItemFormState = 3;
            $scope.errorMessageFromServer = response.data.error.status + ' : ' + response.data.message;
        });
    }
    else {
      console.log('invalid form submitted');
    }
  }
});
