const express = require('express')

const app = express()

// 不关心请求路径:
// app.use(function(req, res, next){
//   console.log('Time', Date.now())
//   next();
// })

// 限制请求路径
// app.use('/user/:id',function(req, res, next){
//   res.send('Request Type:', req.method)
//   next();
// })

// 限定请求方法+路径
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// 多个函数处理
app.use('/user/:id',function(req, res, next){
  console.log('Request URL:', req.originalUrl)
  next();
},function(req, res, next){
  console.log('Request Type:', req.method)
  // 这个next会脱离当前处理栈
  next()
})


app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})