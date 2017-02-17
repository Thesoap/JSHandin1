
let http = require("http");

let server = http.createServer(function (req, res) {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>HELLO CLASS</h1>");
});

server.listen(1234,"localhost",function(){
    console.log("Server started, listening on port "+ 1234)
});