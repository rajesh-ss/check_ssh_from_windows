
// Create AngularJS application
var app = angular.module('myapp',[]);
// Create Controller with name mainCtrl
app.controller('myctrl', function($scope,$http){
$scope.rowlimit=4;
$scope.today = new Date();
$http.get('http://localhost:3000/dis')
.success(function(response)
{
//emp=JSON.parse(response.instructor)
$scope.names=response.instructor;
console.log(response.instructor)
});
});

