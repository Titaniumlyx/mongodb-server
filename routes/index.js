var express = require('express');
var router = express.Router();
var todoList = require("../database/model/todoList");

router.get('/todo', function(req, res, next) {
  todoList.find({}).then((data) => {  //这为‘查’（增删改查）
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
  todo.isDone = false;
  todoList.create(todo).then(data => {   //这为‘增’
    res.json({
        code: 200,
        msg: "success"
    })
  })
});

router.patch("/todo/:id",(req,res) => {
  let id = req.params.id;
  let title = req.body.title;
  let isDone = req.body.isDone==1?true:false;
    todoList.update({_id: id},{isDone,title}).then(data => {
        res.json({
            code: 200,
            msg: "修改成功"
        })
    })
})

router.delete("/todo/:id",(req,res) => {
    let id = req.params.id;
    todoList.remove({_id: id}).then(data => {
        res.json({
            code: 200,
            msg: "删除成功"
        })
    })
})

module.exports = router;
