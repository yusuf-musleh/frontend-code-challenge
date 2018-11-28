var itemCardModule = angular.module('itemCardModule', []);

/* controller to handle funciton logic passed in from 'parent' components/modules */
function ItemCardController() {
  var ctrl = this;

  ctrl.addItemToCart = function(item) {
    ctrl.addToCart(item);
  }

  ctrl.removeItemFromCart = function(item) {
    ctrl.removeFromCart(item);
  }

}

/* item card component */
itemCardModule.component('itemCard', {
  templateUrl: './component-templates/itemCard.html',
  controller: ItemCardController,
  bindings: {
    item: '<',
    inCart: '<',
    addToCart: '&',
    removeFromCart: '&',
  }
});
