const jwt = require("jsonwebtoken");
const userModel = require("../models/auth.model");
const bcrypt = require("bcrypt");

async function userRegistration(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({ message: "Email Already Exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

  res.cookie("token", token);

  res.status(201).json({
    message: "User Registered Successfully",
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    },
  });
}

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid email or password" })
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

  res.cookie("token", token);

  res.status(200).json({
    message: "User Login Successfully",
  });
};

module.exports = { userRegistration, userLogin };
