const mongoose = require("mongoose");

// function for connection to database

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database Connection error", error);
  }
};

// exporting the function
module.exports = connectionDB;
