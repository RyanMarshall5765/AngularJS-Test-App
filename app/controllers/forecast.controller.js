weatherApp.controller("forecastController", [
  "$scope",
  "$resource",
  "$routeParams",
  "cityService",
  function($scope, $routeParams, cityService) {
    $scope.city = cityService.city;

    $scope.days = $routeParams.days || "2";

    // $scope.weatherResult = // Get API Result from Service

    $scope.convertToFahrenheit = function(degK) {
      return Math.round(1.8 * (degK - 273) + 32);
    };

    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    };
  }
]);
