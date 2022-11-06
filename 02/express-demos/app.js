const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World get /')
})
app.post('/', (req, res) => {
  res.send('post /')
})

app.get('/user', (req, res) => {
  res.send('get /user')
})
app.post('/user', (req, res) => {
  res.send('post /user')
})
app.put('/user', (req, res) => {
  res.send('put /user')
})
app.delete('/user', (req, res) => {
  res.send('delete /user')
})








app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})