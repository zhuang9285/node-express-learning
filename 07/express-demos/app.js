const express = require('express')
const router = require('./router')

const app = express()

// 配置解析表单请求体
app.use(express.json())
// 用来解析客户端传来的x-www-form-urlencoded格式数据
// app.use(express.urlencoded())

// 挂载路由
// app.use(router)



// 路径限制
app.use('/abc', router)

// 在所有的中间件之后挂载错误处理中间件，四个参数都必须写，少一个就不是错误处理
app.use((err, req, res,next) => {
  console.log('错误', err)
  res.status(500).json({
    error: err.message
  })
}) 

// 通常会在所有路由之后配置处理 404 的内容,
// 这里不限定参数，不传参数也可以匹配进来
app.use((req, res, next)=>{
  res.status(404).send('404 not found')
})


app.listen(3000, ()=>{
  console.log(`Server running at http://localhost:3000`)
})
