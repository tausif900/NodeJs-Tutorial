const cookieParser = require("cookie-parser");
const express = require("express");
const authRouter = require("./routes/auth.router");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", (req, res) => {
  console.log(req);
  res.send("Server is running");
});

/**
 * Authentication Middleware for Creating, Login, Logout User
 */
app.use("/api/auth/", authRouter);



module.exports = app;
