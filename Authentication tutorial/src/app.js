const express = require("express");
const authRoute = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const postRoute = require("./routes/post.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use(postRoute);

module.exports = app;
