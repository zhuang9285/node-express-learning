const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')

const app = express()

// 格式化日志
app.use(morgan('dev'))

// 解析请求体
app.use(express.json())
app.use(express.urlencoded())

// 处理跨域
app.use(cors())

const PORT = process.env.PORT || 3000

// 挂在路由

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})