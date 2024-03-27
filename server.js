const http = require('http');
const server = http.createServer((req, res) => {
    res.end('ashutosh Dubey');
});
server.listen(4000);
