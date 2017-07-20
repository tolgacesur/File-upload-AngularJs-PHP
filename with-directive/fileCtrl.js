'use strict';

//////////directives////////////

app.directive("fileInput",['$parse',function($parse){
    return{
        restrict:'A',
        link:function(scope,ele,attrs){
            ele.bind('change',function(){
                $parse(attrs.fileInput).
                assign(scope,ele[0].files)
                scope.$apply()
            });
        }
    }
}]);




// file for controller

app.controller('fileCtrl',['$scope','$http', function ($scope,$http) {
 'use strict';

$scope.submitCuisine=function(isvalid){
    if(isvalid){
        var fd=new FormData();
        angular.forEach($scope.files,function(file){
            fd.append('file',file);
        });

        fd.append('formdata',JSON.stringify($scope.dataform));

        $http.post('upload.php',fd,{
            transformRequest:angular.identity,
            headers:{'Content-type':undefined}
        }).success(function(data){
            $scope.status=data;
            $scope.itemlist.push(data)
            $scope.message="New Dish Added Successfully"
        });
    }   
}





}]);





