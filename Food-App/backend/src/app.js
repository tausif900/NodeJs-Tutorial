const cookieParser = require("cookie-parser");
const express = require("express");
const authRoutes = require("./routes/auth.router");
const foodItemsRoutes = require("./routes/foodItem.router");
const cors = require("cors");
const foodPartnerRoutes = require("./routes/foodPartner.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

/**
 * Authentication Middleware for Creating, Login, Logout User
 */
app.use("/api/auth", authRoutes);

app.use("/api/food", foodItemsRoutes);

app.use("/api",foodPartnerRoutes)

module.exports = app;
