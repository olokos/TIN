var http = require('http');
var url = require('url');
var fs = require('fs');
const express = require('express');
const app = express();

app.get('/hello', function (req,res){
  res.send('Hello world!');
  res.end();
});

app.listen(8080, (localhost) => console.log('Server listening on port 8080!'));

// to invoke: http://localhost:8080/hello