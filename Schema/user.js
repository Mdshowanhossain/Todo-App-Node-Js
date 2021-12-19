const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter your name"],
  },
  email: {
    type: String,
    required: [true, "Enter your email"],
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
  },
});
const User = new mongoose.model("User", UserSchema);

module.exports = User;
