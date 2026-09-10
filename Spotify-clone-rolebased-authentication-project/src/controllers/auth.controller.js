const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

// User Registration
const registerUser = async (req, res) => {
  const { username, email, password, role = "user" } = req.body;

  // Here we r checking on the basis of username and email that the user is exist or not usinf OR operator
  const isUserAlreayExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  // if not exist then
  if (isUserAlreayExist) {
    // if exist then return this
    return res.status(400).json({ message: "User Already Exist" });
  }

  const encryptPassword = await bcrypt.hash(password, 12);

  const user = await userModel.create({
    username,
    email,
    password: encryptPassword,
    role,
  });

  // Generating token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
  );

  // setting token in cookie, so that token will send to the server in every request
  res.cookie("token", token);

  res.status(201).json({
    message: "User created successfully",
    user: { username, email, password, role },
  });
};

// User Login
const loginUser = async (req, res) => {
  // user will login with either username or password
  const { username, email, password } = req.body;

  // if anyone from both is found,then DB will return that user
  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  // if user not exist then
  if (!user) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  // Checking in the DB, the password given by the user is matching with the password or not
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: "Password is invalid" });
  }

  // Generating token
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User Logged In Successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
};

module.exports = { registerUser, loginUser };
