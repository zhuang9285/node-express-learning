const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(req.url) //请求地址
  console.log(req.method) //请求方法
  console.log(req.headers) // 请求头
  console.log("请求参数",req.query) //请求参数

  // 设置响应码
  // res.statusCode = 201;

  // res.send({
  //   foo: 'bar'
  // }) 

  res.cookie('foo', 'bar')
  res.cookie('a', '123')



  // res.write('a')
  // 结束响应
  res.end()



})


app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})