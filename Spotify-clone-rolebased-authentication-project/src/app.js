const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes.routes");

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// This is for authRoutes.router.js , iske andr jitne bhi routes honge wo auth se start honge
app.use("/auth",authRoutes);




module.exports = app;
