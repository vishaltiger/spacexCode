const express = require('express');
const app = express();
const request = require('request');;
var cors = require('cors');
const { Constants } = require('./constants/constants');

// use middleware
app.use(express.json());
app.use(cors())
// default render

app.get('/', function (req, res) {
  res.send('Hello World');
});



// fetch capsules
app.get('/allcapsules',(req,res)=>{
    request(Constants.restApi, { json: true }, (err, response, body) => {
         if (err) { return err; }
         res.json(body);
       });
 })

app.listen(3000,()=>{
    console.log('Server Started');
});