const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Username is required"],
    min: 3,
    max: 20,
    unique: [true, "Username already exist"],
  },
  firstName: {
    type: String,
    require: [true, "Fistname is required"],
  },
  lastName: {
    type: String,
    require: [true, "Lastname is required"],
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
    unique: false,
  },
});

module.exports = mongoose.model("Users", UserSchema) || mongoose.model.Users;
