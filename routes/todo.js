const express = require("express");

const router = express.Router();

const {
  createTodo,
  multipleTodoPost,
  getTodo,
  getToById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

// Todo Create
router.route("/").post(createTodo);

// Post Multiple Todo
router.route("/all").post(multipleTodoPost);

// Todo Get
router.route("/").get(getTodo);

// Todo Get By Id
router.route("/:id").get(getToById);

// Update Todo
router.route("/:id").put(updateTodo);

// Delete Todo
router.route("/:id").delete(deleteTodo);
module.exports = router;
