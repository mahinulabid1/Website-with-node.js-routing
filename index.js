const http = require("http");
const fs = require("fs");
const WebpageRoute = require("./webpageHandler");
const ImageRoute = require("./imageHandler");

http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    WebpageRoute(req, res);
    ImageRoute(req, res);
  }
  res.end();   
}).listen(4000);



 

