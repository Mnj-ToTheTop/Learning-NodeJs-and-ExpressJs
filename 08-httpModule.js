const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page");
  } else if (req.url === "/about") {
    res.end("This is the about page.");
  } else {
    res.end(`<h1>OOpps!!<h1><a href='/'>go back</a>`);
  }
});

server.listen(5000);
