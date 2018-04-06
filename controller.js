var demo = angular.module("myApp", []);
demo.controller("myCtrl", function($scope) {
    $scope.control = "";
    $scope.control1 = "";
    $scope.variation = "";
    $scope.variation1 = "";
    

    console.log('true');

    $scope.callFun = function() {
        if($scope.control === "" ||  $scope.control1 === "" ||  $scope.variation === "" ||$scope.variation1 === "" ){
            alert('All Fields of Control and variation are Compulsory');
        } else {
               
        console.log("Hi");
        $scope.calledFunc = true;
        $scope.outputNumber = parseFloat(($scope.control / $scope.control1) + ($scope.variation / $scope.variation1)).toFixed(2);
        
        if($scope.outputNumber > 5){
            $scope.result = "YES";
        } else {
            $scope.result = "NO";
        }
    }
    }
});