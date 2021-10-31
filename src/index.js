const path=require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const app = express()
const port = 8000

//set up static path
app.use(express.static(path.join(__dirname,'public')))

app.engine('hbs', handlebars({extname:'hbs'}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resource/views'))
//console.log('PATH',path.join(__dirname,'resource/views'))
app.use(morgan('combined'))
app.get('/home', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})