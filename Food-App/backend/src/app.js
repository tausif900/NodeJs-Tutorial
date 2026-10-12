const cookieParser = require("cookie-parser");
const express = require("express");
const authRoutes = require("./routes/auth.router");
const foodItemsRouter = require("./routes/foodItem.router");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

/**
 * Authentication Middleware for Creating, Login, Logout User
 */
app.use("/api/auth/", authRoutes);

app.use("/api/food", foodItemsRouter);

module.exports = app;
