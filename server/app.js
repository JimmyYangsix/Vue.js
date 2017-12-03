var express = require('express')
var app = express()
var appDate = require('./data.json')
var seller = appDate.seller
var goods = appDate.goods
var ratings = appDate.ratings

var apiRoutes = express.Router()

apiRoutes.get('/seller',function (req, res) {
  res.json({
      errno: 0,
      data: seller
  })
})

apiRoutes.get('/goods',function (req, res) {
  res.json({
      errno: 0,
      data: goods
  })
})

apiRoutes.get('ratings',function (req, res) {
  res.json({
      errno: 0,
      data: ratings
  }) 
})

app.use('./api', apiRoutes)
api.listen(8081, function () {
  console.log('Listening http://localhost:8081')
})