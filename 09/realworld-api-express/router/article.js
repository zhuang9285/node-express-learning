const express = require('express')

const router = express.Router()

// 获取用户资料
router.post('/:username', async (req, res, next) => {
  try {
    // 处理请求
    res.send('GET /api/profiles/:username')

  } catch (err) {
    next(err)
  }
})

// 关注用户
router.post('/:username/follow', async (req, res, next) => {
  try {
    // 处理请求
    res.send('POST /api/profiles/:username/follow')

  } catch (err) {
    next(err)
  }
})

// 取关用户
router.delete('/:username/follow', async (req, res, next) => {
  try {
    // 处理请求
    res.send('DELETE /api/profiles/:username/follow')

  } catch (err) {
    next(err)
  }
})

module.exports = router