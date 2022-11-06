const express = require('express')
const fs = require('fs')
const { getDb,saveDb } =require('./db')

const app = express()

// 配置解析表单请求体
app.use(express.json())
// 用来解析客户端传来的x-www-form-urlencoded格式数据
app.use(express.urlencoded())

app.get('/todos', async (req, res) => {
  try{
    const db = await getDb()
    res.status(200).json(db.todos)
  }catch(err){
    res.status(500).json({
      error: err.message
    })
  }
})

app.get('/todos/:id',async (req, res) => {
  try {
    const db = await getDb()
    const todo = db.todos.find( todo => todo.id === +req.params.id)
    if(!todo){
      return res.status(404).end()
    }
    res.status(200).json(todo)
  } catch (error) {
    console.log(error)
  }
})

app.post('/todos/', async (req, res) => {
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
    
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
})

app.patch('/todos/:id', (req, res) => {
  res.send(`patch /todos/${req.params.id}`)
})



app.delete('/todos/:id', (req, res) => {
  res.send(`delete /todos/${req.params.id}`)
})




app.listen(3000, ()=>{
  console.log(`Server running at http://localhost:3000`)
})
