const express = require('express')
const path = require('path');
var bodyParser = require('body-parser')


const app = express()



app.get('/user/:id', function (request, response) {
     response.send('user ' + request.params.id)
})


app.post('/sendResult', (req,res) => {
     console.clear()
     console.log(req.body)
     res.send("You can continue")
   
  
})


app.listen(80,(req,res) => {
     console.log("server started at PORT : 8080 | ASLOO")
})
