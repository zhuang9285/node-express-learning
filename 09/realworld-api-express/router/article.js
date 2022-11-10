const express = require('express')

const router = express.Router()

// 获取文章列表
router.get('/', async (req, res, next) => {
  try {
    // 处理请求
    res.send('GET /api/articles')

  } catch (err) {
    next(err)
  }
})

// Feed Articles
router.get('/feed', async (req, res, next) => {
  try {
    // 处理请求
    res.send('GET /api/articles/feed')

  } catch (err) {
    next(err)
  }
})

// Get Article
router.get('/:slug', async (req, res, next) => {
  try {
    // 处理请求
    res.send('GET /api/articles/:slug')

  } catch (err) {
    next(err)
  }
})

// Create Article
router.post('/', async (req, res, next) => {
  try {
    // 处理请求
    res.send('POST /api/articles')

  } catch (err) {
    next(err)
  }
})

// Update Article
router.put('/:slug', async (req, res, next) => {
  try {
    // 处理请求
    res.send('PUT /api/articles/:slug')

  } catch (err) {
    next(err)
  }
})

// Delete Article
router.delete('/:slug', async (req, res, next) => {
  try {
    // 处理请求
    res.send('DELETE /api/articles/:slug')

  } catch (err) {
    next(err)
  }
})

// Add Comments to an Article
router.post('/:slug/comments', async (req, res, next) => {
  try {
    // 处理请求
    res.send('POST /api/articles/:slug/comments')

  } catch (err) {
    next(err)
  }
})

// Get Comments from an Article
router.get('/:slug/comments', async (req, res, next) => {
  try {
    // 处理请求
    res.send('GET /api/articles/:slug/comments')

  } catch (err) {
    next(err)
  }
})

// Delete Comment
router.delete('/:slug/comments/:id', async (req, res, next) => {
  try {
    // 处理请求
    res.send('DELETE /api/articles/:slug/comments/:id')

  } catch (err) {
    next(err)
  }
})

// Favorite Article
router.post('/:slug/favorite', async (req, res, next) => {
  try {
    // 处理请求
    res.send('POST /api/articles/:slug/favorite')

  } catch (err) {
    next(err)
  }
})

// Unfavorite Article
router.delete('/:slug/favorite', async (req, res, next) => {
  try {
    // 处理请求
    res.send('DELETE /api/articles/:slug/favorite')
  } catch (err) {
    next(err)
  }
})

module.exports = router