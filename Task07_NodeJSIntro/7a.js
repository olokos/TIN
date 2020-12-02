var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(req.url);
    //res.write('Hello world!');
    var q = url.parse(req.url, true).query;
    var requestParameters = "Your query is: " + q.firstNumber + " " + q.operation + " " + q.secondNumber + "<br>";
    res.write(requestParameters);
    if(q.operation=='add'){
        var response = "Addition result: " + q.firstNumber + q.secondNumber;
        res.write(response);
    }
    if(q.operation=='sub'){
        var response = "Substraction result: " + q.firstNumber - q.secondNumber;
        res.write(response);
    }
    if(q.operation=='mul'){
        var response = "Mutliplication result: " +q.firstNumber * q.secondNumber;
        res.write(response);
    }
    if(q.operation=='div'){
        var response = "Division result: " +q.firstNumber / q.secondNumber;
        res.write(response);
    }
    res.end();
}).listen(8080);