const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

http.createServer(function(req, res){
    const parseUrl = url.parse(req.url);

    if(parseUrl.pathname == '/favicon.ico') {
        res.writeHead(200);
        res.end();
        return;
    }
    if(parseUrl.pathname == '/game'){
        const playerAction = querystring.parse(parseUrl.query);
    }
    
    res.writeHead(200);
    fs.createReadStream(__dirname + '/index.html')
        .pipe(res);
    // res.end('hello');
}).listen(3000);