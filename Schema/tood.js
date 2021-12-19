const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = new mongoose.model("todo", Todo);

module.exports = TodoModel;
