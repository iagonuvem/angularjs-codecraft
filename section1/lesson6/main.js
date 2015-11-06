var app = angular.module('minmax', [
	'jcs-autoValidate'
	]);

app.run(  function (defaultErrorMessageResolver) {
	        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
	          errorMessages['tooYoung'] = 'Voce precisa ter Mais de {0} anos';
	          errorMessages['tooOld'] = 'Voce precisa ter Menos de {0} anos';
	          errorMessages['badUsername'] = 'O nome de usuario so deve conter letras e numeros';
	        });
	    }
);

app.controller('MinMaxCtrl', function ($scope, $http) {
	$scope.formModel = {};

	$scope.onSubmit = function () {

		console.log("Hey i'm submitted!");
		console.log($scope.formModel);

		$http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
			success(function (data) {
				console.log(":)")
			}).error(function(data) {
				console.log(":(")
			});

	};
});