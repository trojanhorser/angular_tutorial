'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller("ErrorController",function($scope,$log){
	
	$scope.error = true;
	$scope.success = true;
	$scope.value = "Denis"
	
	function concatValue (newValue,oldValue,scope){
		$log.info("Logging " + oldValue);
		if ( newValue == "Denis" ){
			$scope.value = newValue + "Bell"
		}
	}
	
	//Performing a watch
	$scope.$watch('value',concatValue);
	
  
  });