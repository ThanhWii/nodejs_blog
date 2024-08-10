const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var a = 1, b = 2;
  var c = a + b;
  res.send('Hello World, This is Thèn Wii!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})