var fs = require('fs');
const express = require('express');
const urlencoded = require('body-parser');
const { request } = require('express');
const app = express();
let jsonFile;
const test='test1';

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
app.use(express.urlencoded({ extended: true }));
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
  //let firstField = req.body.enteredTemp;
  //let secondField = req.body.calculatedTemp;
  //res.send ('First field is: ' + firstField + ' Second field is: ' + secondField);
});


app.get('/formdata',function (req,res){
  let firstField = res.write(req.body.enteredTemp);
  let secondField = res.write(req.body.calculatedTemp);
  res.send (firstField + secondField);
  res.end();
});

app.use(urlencoded.json());


app.post('/jsondata', function(request, response){
  jsonFile=request.body;
  response.render('json', {
    title: "Here's the data you've had in your json file:",
    carBrand: 'Car Brand: ' + request.body.carBrand,
    carModel: 'Car Model: ' + request.body.carModel,
    carColor: 'Car Color: ' +  request.body.carColor
});
console.log('Received POST data using JSON!');
//response.send(request.body);
  //console.log(request.body);      // your JSON
   //response.send(request.body);    // echo the result back
});

app.get('/jsondata', function (req, res) {
if(jsonFile==undefined){
  res.render('json', {
    title: "No data provided!",
    carBrand: 'Unknown',
    carModel: 'Unknown',
    carColor: 'Unknown'
  });
}else{
  res.render('json', {
  title: "Here's the data you've had in your json file: ",
  carBrand: jsonFile.carBrand,
  carModel: jsonFile.carModel,
  carColor: jsonFile.carColor
});
}
});

app.listen(8080, (localhost) => console.log('Server listening on port 8080!'));

// to invoke: http://localhost:8080/hello