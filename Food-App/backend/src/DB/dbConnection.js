const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection with DB established");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionDB;
