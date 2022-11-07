// 路由模块
const express = require('express')
const fs = require('fs')
const { getDb,saveDb } =require('./db')
const router = express.Router()
// 查询全部任务
router.get('/todos', async (req, res) => {
  try{
    const db = await getDb()
    res.status(200).json(db.todos)
  }catch(error){
    next(error)
  }
})

// 根据id查询任务
router.get('/todos/:id',async (req, res,next) => {
  try {
    const db = await getDb()
    const todo = db.todos.find( todo => todo.id === +req.params.id)
    if(!todo){
      return res.status(404).end()
    }
    res.status(200).json(todo)
  } catch (error) {
    next(error)
  }
})

// 新增
router.post('/todos/', async (req, res) => {
  try {
      // 1.获取客户端请求参数
      const todo= req.body

      // 2.数据验证
      if(!todo.title){
        return res.status(422).json({
          error: "The title is required"
        })
      }
      // 3.数据验证通过,把数据存储到 db 中
      const db = await getDb();
      
      const lastTodo = db.todos[db.todos.length -1]
      todo.id = lastTodo ? lastTodo.id + 1 : 1
      db.todos.push(todo)

      await saveDb(db)
      // 4.发送响应 
      res.status(200).json(todo)
      res.send("post /todos/")
    
  } catch (error) {
    next(error)
  }
})

// 修改任务
router.patch('/todos/:id',async (req, res) => {
  try {
    // 1. 获取表单数据
    const todo = req.body
    // 2.查找到要修改的任务型项
    const db = await getDb()

    const ret = db.todos.findIndex(todo => todo.id === Number.parseInt(req.params.id))

    if(!ret){
      return res.status(404).end()
    }

    // 将todo的内容合并到ret上
    Object.assign(ret, todo)

    await saveDb(db)

    // 发送响应,修改成功返回201状态码
    res.status(201).json(todo)

  } catch (error) {
    next(error)
  }
})

// 删除任务
router.delete('/todos/:id',async (req, res) => {
  try {
    const todoId = Number.parseInt(req.params.id)
    const db = await getDb()
    const index = db.todos.findIndex(todo => todo.id === todoId)
    if(index === -1){
      return res.status(404).end()
    }
    db.todos.splice(index, 1)
    await saveDb(db)
    // 删除成功返回204响应码
    res.status(204).end()

  } catch (error) {
    next(error)
  }
})

// 3.导出路由实例
module.exports = router

// 4.将路由挂载(集成)到Express实例应用中