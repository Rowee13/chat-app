const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

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

  const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30s",
  });

  res.cookie(String(existingUser._id), token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 30),
    httpOnly: true,
    sameSite: "lax",
  });

  return res
    .status(200)
    .json({ message: "Successfully Logged In", user: existingUser, token });
};

const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];
  console.log(token);
  // const headers = req.headers[`authorization`];
  // const token = headers.split(" ")[1];

  if (!token) {
    res.status(404).json({ message: "No token found" });
  }

  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).josn({ message: "Invalid Token" });
    }
    console.log(user.id);
    req.id = user.id;
  });

  next();
};

const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;

  try {
    user = await User.findById(userId, "-password");
  } catch (err) {
    return new Error(err);
  }

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ user });
};

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
