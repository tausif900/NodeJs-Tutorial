// Simple creation of Create Server

const http = require("http");

http
  .createServer((req, res) => {
    console.log(res);
    res.end();
  })
  .listen(3001);
