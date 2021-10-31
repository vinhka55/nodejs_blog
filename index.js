const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 8000
app.use(morgan('combined'))
app.get('/home', (req, res) => {
  var a=1
  var b=2
  var c=a+b
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})