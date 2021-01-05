var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('server.key', 'utf8');
var certificate = fs.readFileSync('server.cert', 'utf8');

var credentials = { key: privateKey, cert: certificate };
var express = require('express');
var app = express();

app.get("/optout", (req, res, next) => {
    console.log("cookie set//")
    res.cookie("splash_test", Math.random() * 10000, { sameSite: "none", secure: true })
    res.send("test")
})


// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(6000);
httpsServer.listen(8443);