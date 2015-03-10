angular
  /**
  * TodoApp Module
  *
  * Description
  */
  .module('TodoApp', [])
  .controller('TodoController', ['$scope','TodoService', function($scope, TodoService){
    TodoService.list().then(function (response){
      $scope.todos = response.data;
    });
    $scope.save_todo = function( new_title ) {
      $scope.todos.push({
          title: new_title,
          completed : false
      });
      $scope.new_todo = "";
      TodoService.create({ title : new_title });
    };
    $scope.enter_saves = function($event){
      if($event.keycode == 13){
        $scope.save_todo( $scope.new_todo);
      }
    };
    $scope.check_changed = function ( $event, todo_id ){
      console.log(todo_id);
      if ($event.srcElement.checked){
        TodoService.complete(todo_id); 
      }else{
        TodoService.uncomplete(todo_id);
      }
    };
    $scope.delete = function (todo) {
      console.log(todo);
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
      TodoService.delete(todo._id);
    };
  }]);

