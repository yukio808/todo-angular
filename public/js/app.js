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
    $scope.enter_saves = function($event){
      if($event.keycode == 13){
        $scope.save_todo( $scope.new_todo);
      }
    };
    
    $scope.todos = [
      { 
        title : "FAKE TITLR",
        completed : true
      }
    ];
    
  }]);

