const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const signup = async (req, res, next) => {
  const { username, firstName, lastName, email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exist! Login Instead" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(hashedPassword);
  const newUser = new User({
    username,
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(201).json({ message: newUser });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return new Error(err);
  }
  if (!existingUser) {
    return res
      .status(400)
      .json({ message: "User not found. Create your account" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid Email/Password" });
  }
};

exports.signup = signup;
exports.login = login;
