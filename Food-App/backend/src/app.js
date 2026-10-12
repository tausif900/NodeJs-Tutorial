const cookieParser = require("cookie-parser");
const express = require("express");
const authRouter = require("./routes/auth.router");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

/**
 * Authentication Middleware for Creating, Login, Logout User
 */
app.use("/api/auth/", authRouter);



module.exports = app;
