/* global angular */

angular.module('note', [])
	.controller('noteController', [
		'$scope',
		function($scope) {
			$scope.text = 'hello';
			$scope.addComment = function() {
				var newcomment = { title: $scope.formContent, upvotes: 0 };
				$scope.formContent = '';
				$scope.comments.push(newcomment);
			};
			$scope.incrementUpvotes = function(comment) {
				comment.upvotes += 1;
			};
		}
	]);
