const { sumHandler } = require("./sumHandler");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
</head>

<body>
<h1>Welcome </h1>
<a href="/calculator">Go to Calculator Page</a>
</body>

</html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
</head>

<body>
<h1>Calculator</h1>
<form action="/calculate-result" method="POST">
<input type="text" placeholder="first number" name="first"/>
<input type="text" placeholder="second number" name="second"/>
<button type="submit">SUM</button>
</form>
</body>

</html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    sumHandler(req, res);
  }
};

exports.requestHandler = requestHandler;
