angular
  /**
  * TodoApp Module
  *
  * Description
  */
  .module('TodoApp', [])
  .controller('TodoController', ['$scope', function($scope){

    $scope.save_todo = function( new_title ) {
      $scope.todos.push({
          title: new_title,
          completed : false
      });
    };
    
    $scope.todos = [
      { 
        title : "FAKE TITLR",
        completed : true
      }
    ];
    
  }]);

