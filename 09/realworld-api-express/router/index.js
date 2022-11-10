const express = require('express')

const router = express.Router()

// 用户相关路由
router.use(require('./user'))

// 用户资料相关路由
router.use('profile', require('./profile'))

// 文章相关路由

// 标签相关路由
router.use(require('./tag'))

module.exports = router