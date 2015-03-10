var express = require('express');
var router = express.Router();
var Todos = require('../models/todo.js');
var ObjectId = require("mongoose").Types.ObjectId;

router.get('/', function (req, res) {
  Todos.find(function (err, todos){
    if (err) throw err;
    res.json( todos );
  });
});


//add todo
router.post('/', function (req, res){
  Todos.create({ title : req.body.title } , function (err, todo){
    if (err) throw err;
    res.json( todo );
  });
});

//delete todo
router.delete('/:id', function (req, res) {
  Todos.findById(req.params.id)
    .remove()
    .exec(function (err, num_deleted, status) {
      if(err) throw err;
      res.json( status ); // status object
    });
});

//complete todo
router.put('/:id/complete', function (req, res){
  Todos.update({_id : ObjectId(req.params.id)},
  {
    $set : {
      completed : true,
    }
  }, function (err, update_count, result){
    if(err) throw err;
    res.json(result);
  });
});

//uncomplete todo
router.put('/:id/uncomplete', function (req, res){
  Todos.update({_id : ObjectId(req.params.id)},
  {
    $set : {
      completed : false,
    }
  }, function (err, update_count, result){
    if(err) throw err;
    res.json(result);
  });
});

module.exports = router;