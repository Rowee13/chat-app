const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    min: 3,
    max: 20,
    unique: [true, "Username already exist"],
  },
  firstName: {
    type: String,
    required: [true, "Fistname is required"],
  },
  lastName: {
    type: String,
    required: [true, "Lastname is required"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    max: 50,
    unique: [true, "Email already exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    min: 6,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
