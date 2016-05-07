angular.module('myApp', ['firebase']).
controller('myController', ['$scope', '$firebase' , function($scope, $firebase) {
  
  	$scope.key = 'Hello World';

  	$scope.employeeName = "";
    $scope.employeeAge = "";
    $scope.employees = {};

 //  	$scope.saveEmployee = function(){
 //  		$scope.myData.push({employeeName : $scope.employeeName, employeeAge : $scope.employeeAge});
 //  		$scope.employeeName = "";
 //    	$scope.employeeAge = "";
 //  	};

 //  	$scope.myData = new Firebase("https://blazing-torch-1014.firebaseio.com/Employees");
    
	// $scope.myData.on('value', function (snapshot){
	// 	$scope.employees = snapshot.val();
	// 	$scope.$apply();	
	// })


  //angularFire
  var ref = new Firebase("https://blazing-torch-1014.firebaseio.com/Employees");
  $scope.employees = $firebase(ref).$asArray();


  $scope.saveEmployee = function(){
    $scope.employees.$add({employeeName : $scope.employeeName, employeeAge : $scope.employeeAge});
    $scope.employeeName = "";
    $scope.employeeAge = "";

  };

}]);