var express = require('express');
var router = express.Router();
var todoList = require("../database/model/todoList");

router.get('/todo', function(req, res, next) {
  todoList.find({}).exec((err,data) => {  //这为‘查’（增删改查）
      // console.log(err,data);
      // res.render('index', { title: 'Express',arr: data});
      // // 查数据库肯定是异步过程
      res.json({  // 发送json格式
          code: 200,
          data
      })
  })
});

router.post("/todo", function(req,res){
  let todo = req.body;
  todoList.create(todo).then(data => {   //这为‘增’
    res.json({
        code: 200,
        msg: "success"
    })
  })
});

router.patch("/todo:id",(req,res) => {
  let id = req.params.id;
  res.json({})
})

module.exports = router;
