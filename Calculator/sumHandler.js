const sumHandler = (req, res) => {
  console.log("In Sum calculate result");
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = parseInt(bodyObj.first) + parseInt(bodyObj.second);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
</head>

<body>
<h1>Your Sum is : ${result}</h1>

</body>

</html>`);
    return res.end();
  });
};

exports.sumHandler = sumHandler;
