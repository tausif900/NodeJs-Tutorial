const userModel = require("../models/auth.model");

async function userRegistration(req, res) {
  const { fullName, email, password } = req.body;
}

module.exports = { userRegistration };
