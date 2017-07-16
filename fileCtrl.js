'use strict';

// file for controller

app.controller('fileCtrl',['$scope','$http', function ($scope,$http) {
 'use strict';
	$scope.upload=function () {
		
		var fd = new FormData();
		var files = document.getElementById('file').files[0];

		fd.append('file',files);

		var url = "upload.php";

		//Ajax Request
	
		$http({
			method: 'post',
			url: url,
			data: fd,
			headers: {'Content-Type':undefined},
		})
		.then(function Callback(response) {

			//show response
			// response -> data{name} -> $scope.response
			$scope.response = response.data;
			
		}); 


	}
}]);

