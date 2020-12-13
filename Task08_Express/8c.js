var http = require('http');
var url = require('url');
var fs = require('fs');
const express = require('express');
const urlencoded = require('body-parser');
const app = express();

const helloLogger = function (req,res,next){
  console.log("Request URL: ", req.originalUrl);
  next();
}

const formLogger = function (req,res,next){
  console.log("Request URL: ", req.originalUrl);
  next();
}

const formData = function (req,res,next){
  console.log("Request URL: ", req.originalUrl);
  next();
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/hello', helloLogger);
app.get('/hello', function (req,res){
  res.send('Hello world!');
  res.end();
});

app.use('/form', formLogger);
app.get('/form',function(req,res) {
  res.sendFile(__dirname + '/8b.html');
});

app.use('/formdata', formData);
app.post('/formdata',function (req,res){
  res.render('index', {title: "Your data presented in EJS!", firstField: req.body.enteredTemp, secondField: req.body.calculatedTemp});
});


app.get('/formdata',function (req,res){
  let firstField = res.write(req.body.enteredTemp);
  let secondField = res.write(req.body.calculatedTemp);
  res.send (firstField + secondField);
  res.end();
});



app.listen(8080, (localhost) => console.log('Server listening on port 8080!'));

// to invoke: http://localhost:8080/hello