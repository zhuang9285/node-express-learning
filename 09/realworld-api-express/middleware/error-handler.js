const util = require('util')

// 错误处理中间件
module.exports = () => {
  return (err, req, res, next) => {
    console.log(err)
    res.status(500).json({
      // error: err.message
      error: util.format(err)
    })
  }
}
