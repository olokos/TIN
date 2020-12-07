var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    let q = url.parse(req.url, true).query;
    let wantedFolder = q.wantedFolder;

    let testFolder = './someFolder';
    fs.watch(testFolder, (eventType, filename) => { 
    console.log('The file', filename, 'was modified!'); 
    console.log(fs.readFile(testFolder+ '/' + filename, 'utf-8', function (err,data){
        if (err) throw err;
        console.log(data);
    }));
  }); 
    res.end();
}).listen(8080);
// to invoke: http://localhost:8080/?watchedFolder=someFolder