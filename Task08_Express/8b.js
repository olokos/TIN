var http = require('http');
var url = require('url');
var fs = require('fs');
const express = require('express');
const app = express();

app.get('/hello', function (req,res){
  res.send('Hello world!');
  res.end();
});

app.get('/form',function(req,res) {
  res.sendFile(__dirname + '/8b.html');
});

app.listen(8080, (localhost) => console.log('Server listening on port 8080!'));

// to invoke: http://localhost:8080/hello
// to invoke express SET DEBUG=task08:* & npm start