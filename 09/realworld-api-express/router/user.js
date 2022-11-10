const express = require('express')

const router = express.Router()

// 用户登录
router.post('/users/login', async (req, res, next) => {
  try {
    // 处理请求
    res.send('POST /api/users/login')

  } catch (err) {
    next(err)
  }
})

// 用户注册
router.post('/users', async (req, res, next) => {
  try {
    // 处理请求
    res.send('POST /api/users')

  } catch (err) {
    next(err)
  }
})

// 获取当前登录用户
router.get('/user', async (req, res, next) => {
  try {
    // 处理请求
    res.send('GET /api/user')

  } catch (err) {
    next(err)
  }
})

// 更新用户
router.put('/user', async (req, res, next) => {
  try {
    // 处理请求
    res.send('PUT /api/user')

  } catch (err) {
    next(err)
  }
})




module.exports = router