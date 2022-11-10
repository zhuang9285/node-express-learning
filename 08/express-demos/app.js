const express = require('express')
const morgan = require('morgan')

const app = express()

// 格式化输出请求日志
// app.use(morgan('tiny'))
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  })
)

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/ab*cd', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/ab?cd', (req, res) => {
//   res.send('Hello World')
// })

// app.get(/a/, (req, res) => {
//   res.send('Hello World')
// })
// app.get('/users/:id/edit', (req, res) => {
//   console.log(req.params.id)
//   res.send('Hello World')
// })
app.get('/users/:userId(\\d+)', (req, res) => {
  console.log(req.params.id)
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})