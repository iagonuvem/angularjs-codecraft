var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function($scope, $http){
	$scope.formModel = {};

	$scope.onSubmit = function(){
		console.log('Angular is awesome');
		console.log($scope.formModel);

		$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
		success(function(data){
			console.log(':)');
		}).error(function(data){
			console.log(':(');
		});
	}
});