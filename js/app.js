//need controller for things to work.
angular.module('riot-app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

angular.module('riot-app').controller('appCtrl',['$scope','$window',function ($scope,$window) {
    //angular media querry
    console.log($window.width,$window);

    $scope.playerSelectorModel = 'star';

    $scope.skillSelectorModel = 'tool';
}]);
