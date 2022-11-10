const express = require('express')

const router = express.Router()

// 获取标签列表
router.get('/tags', async (req, res, next) => {
  try {
    // 处理请求
    res.send('GET /api/tags')

  } catch (err) {
    next(err)
  }
})


module.exports = router