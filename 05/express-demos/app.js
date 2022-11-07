const express = require('express')

const app = express()

const myLogger = (req,res) => {
  console.log(req.method, req.url, Date.now())
}

app.use((req,res, next) => {
  console.log("hello")
  res.send("hello")
})


/* 
  中间件的位置很重要
  req 请求对象
  res 响应对象
  next 下一个中间件 
*/
app.use((req, res, next) => {
  console.log(req.method, req.url, Date.now())
  req.foo = "bar"
  res.abc =() =>{
    console.log("abc")
  }
  // 交出执行权,往后继续匹配执行
  next()
})

app.get('/', async (req, res) => {
  res.abc()
  res.send(`get /`)
})

app.get('/about',async (req, res) => {
  console.log(req.foo)
  res.send(`get /about`)
})

app.post('/login', async (req, res) => {
  res.send(`post /login`)
})

app.listen(3000, ()=>{
  console.log(`Server running at http://localhost:3000`)
})
