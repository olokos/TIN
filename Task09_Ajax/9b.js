var fs = require('fs');
var path = require('path');
const express = require('express');
const app = express();
let jsonFile;
const test='test1';

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
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/form', formLogger);
// app.get('/form',function(req,res) {
//   res.sendFile(__dirname + '/9b.html');
// });


app.use('/formdata', formData);
app.post('/formdata',function (request,res){
  let formDataMemory={};
  if(request.body.selectedOperation == '+'){
    formDataMemory.resultCalculation=parseInt(request.body.firstNumber) + parseInt(request.body.secondNumber);
    }else if(request.body.selectedOperation == '-'){
      formDataMemory.resultCalculation=parseInt(request.body.firstNumber) - parseInt(request.body.secondNumber);
    }else if(request.body.selectedOperation == '*'){
      formDataMemory.resultCalculation=parseInt(request.body.firstNumber) * parseInt(request.body.secondNumber);
    }else if(request.body.selectedOperation == '/'){
      formDataMemory.resultCalculation=parseInt(request.body.firstNumber) / parseInt(request.body.secondNumber);
    }else{
      formDataMemory.resultCalculation='Undefined operator! Not calculating!';
      }
  res.render('index', {title: "Your data presented in EJS!", firstField: request.body.firstNumber, secondField: request.body.secondNumber, resultField: formDataMemory.resultCalculation});
  //let firstField = req.body.enteredTemp;
  //let secondField = req.body.calculatedTemp;
  //res.send ('First field is: ' + firstField + ' Second field is: ' + secondField);
});


app.get('/formdata',function (req,res){
  let firstField = res.write(req.body.firstNumber);
  let secondField = res.write(req.body.secondNumber);
  res.send (firstField + secondField);
  res.end();
});

app.post('/jsondata', function(request, response){
  jsonFile=request.body;
  response.render('jsonPOST', {
    title: "Here is the data you provided with your json POST:",
    firstNumber: 'First Number: ' + request.body.firstNumber,
    secondNumber: 'Second Number: ' + request.body.secondNumber,
    operation: 'Operator: ' +  request.body.operation
});
if(request.body.operation == '+'){
jsonFile.result=+request.body.firstNumber+ +request.body.secondNumber;
}else if(request.body.operation == '-'){
  jsonFile.result=+request.body.firstNumber- +request.body.secondNumber;
}else if(request.body.operation == '*'){
  jsonFile.result=+request.body.firstNumber* +request.body.secondNumber;
}else if(request.body.operation == '/'){
  jsonFile.result=+request.body.firstNumber/ +request.body.secondNumber;
}else{
  jsonFile.result='Undefined operator! Not calculating!';
  }
console.log('jsonFile.result is: ' + jsonFile.result);
console.log('Received POST data using JSON!');
//response.send(request.body);
  //console.log(request.body);      // your JSON
   //response.send(request.body);    // echo the result back
});

app.get('/jsondata', function (req, res) {
if(jsonFile==undefined){
  res.render('jsonGET', {
    title: "No data provided!",
    result: 'Unknown'
  });
}else{
  res.render('jsonGET', {
  title: "Here is the result of the calculation requested: ",
  result: jsonFile.result
});
}
});

app.listen(8080, (localhost) => console.log('Server listening on port 8080!'));

// to invoke: http://localhost:8080/hello