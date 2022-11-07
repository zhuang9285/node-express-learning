const express = require('express')
const router = require('./router')

const app = express()

// 配置解析表单请求体
app.use(express.json())
// 用来解析客户端传来的x-www-form-urlencoded格式数据
app.use(express.urlencoded())

// 挂载路由
// app.use(router)

// 路径限制
app.use('/abc', router)

// 在所有的中间件之后挂载错误处理中间件
app.use((err, req, res,next) => {
  console.log('错误', err)
  res.status(500).json({
    error: err.message
  })
}) 

app.listen(3000, ()=>{
  console.log(`Server running at http://localhost:3000`)
})
