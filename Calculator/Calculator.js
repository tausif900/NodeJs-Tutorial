const http = require("http");
const { requestHandler } = require("./handler");

const server = http.createServer(requestHandler);

server.listen(3001);
