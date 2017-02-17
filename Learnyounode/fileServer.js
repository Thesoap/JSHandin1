let fs = require('fs');
let http = require('http');

let filename = process.argv[3];

server = http.createServer(function(request, response) {
  fs.createReadStream(filename).pipe(response);
});
server.listen(process.argv[2]);