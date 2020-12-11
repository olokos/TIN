var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    let desiredPath = url.parse(req.url,true).pathname;
    if (desiredPath == '/monitor'){

    let q = url.parse(req.url, true).query;

    console.log(q);
    let wantedFolder = './' + q.wantedFolder;

    
    fs.watch(wantedFolder, (eventType, filename) => { 
    console.log('The file', filename, 'was modified!'); 
    fs.readFile(wantedFolder + '/' + filename, 'utf-8', function (err,data){
        if (err) throw err;
        console.log(data);
    });
  }); 
    res.end();
  }
}).listen(8080);

// to invoke: http://localhost:8080/?wantedFolder=someFolder