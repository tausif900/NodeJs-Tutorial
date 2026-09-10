const express = require("express");
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

const app = express();

// Middle Wares
app.use(express.urlencoded());

app.use(homeRouter);

// GET
app.use(contactRouter);
// POST
app.use(contactRouter);

// Created and Started the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
