/* global angular */

angular.module('note', [])
	.controller('noteController', [
		'$scope', '$http',
		function($scope, $http) {
			$scope.note = { uid: window.uid, text: '' };

			$scope.getNote = function() {
				$http.get(`/notes`, { params: { uid: window.uid } })
					.then(function(data) {
						angular.copy(data, $scope.note);
						console.log($scope.note);
					});
			};

			$scope.postNote = function() {
				$http.post(`/notes`, $scope.note)
					.then(function(data) {});
			};

			$scope.getNote();

			//document.getElementById('button').addEventListener('click', $scope.getNote, false);
			document.getElementById('button').addEventListener('click', $scope.postNote, false);
		}
	]);
