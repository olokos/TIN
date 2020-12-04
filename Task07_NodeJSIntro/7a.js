var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(req.url);
    //res.write('Hello world!');
    var q = url.parse(req.url, true).query;
    if(isNaN(q.firstNumber)){
        var requestParameters = "Invalid first number provided: " + q.firstNumber + " is not a number!<br>";
    }else if(isNaN(q.secondNumber)){
        var requestParameters = "Invalid second number provided: " + q.secondNumber + " is not a number!<br>";
    }else{
        var requestParameters = "Your query is: " + q.firstNumber + " " + q.operation + " " + q.secondNumber + "<br>";
    }
    res.write(requestParameters);
    if(q.operation=='add' && !isNaN(q.firstNumber) && !isNaN(q.secondNumber)){
        var response = "Addition result: " + q.firstNumber + q.secondNumber;
        res.write(response);
    }
    else if(q.operation=='sub' && !isNaN(q.firstNumber) && !isNaN(q.secondNumber)){
        var response = "Substraction result: " + q.firstNumber - q.secondNumber;
        res.write(response);
    }
    else if(q.operation=='mul' && !isNaN(q.firstNumber) && !isNaN(q.secondNumber)){
        var response = "Mutliplication result: " +q.firstNumber * q.secondNumber;
        res.write(response);
    }
    else if(q.operation=='div' && !isNaN(q.firstNumber) && !isNaN(q.secondNumber)){
        var response = "Division result: " +q.firstNumber / q.secondNumber;
        res.write(response);
    }else{
        var response = "Invalid operator or number provided! Not calculating!"
        res.write(response);
    }
    res.end();
}).listen(8080);
// to invoke: http://localhost:8080/?operation=add&firstNumber=5&secondNumber=6