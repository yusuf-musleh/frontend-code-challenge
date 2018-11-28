var navbarModule = angular.module('navbarModule', []);

/* navbar component */
navbarModule.component('navbar', {
  templateUrl: './component-templates/navbar.html',
  bindings: {
    currentPage: '<',
    cartItemsCount: '<',
  }
});
