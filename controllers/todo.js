const ErrorResponse = require("../utilities/errorResponse");
const Todo = require("../Schema/tood");

// Todo Create
exports.createTodo = async (req, res, next) => {
  try {
    const createTodo = new Todo(req.body);
    await createTodo.save();
    res.status(201).json({ success: true, todo: createTodo });
  } catch (error) {
    next(error);
  }
};

// Post Multiple Todo
exports.multipleTodoPost = async (req, res, next) => {
  try {
    const multipleTodoPost = await Todo.create(req.body);
    res.status(201).json({ success: true, todo: multipleTodoPost });
  } catch (err) {
    next(err);
    // return next(new ErrorResponse("This is "))
    // res.status(500).json({ success: false, error: err.message });
  }
};

//Find All Todo
exports.getTodo = async (req, res, next) => {
  try {
    const findTodo = await Todo.find();
    res.status(200).json({
      success: true,
      todo: findTodo,
    });
  } catch (err) {
    next(err);
    // res.status(500).json({
    //   success: false,
    //   error: err.message,
    // });
  }
};

// Todo Get By Id
exports.getToById = async (req, res, next) => {
  try {
    const findTodoById = await Todo.findById({ _id: req.params.id });

    if (!findTodoById) {
      return next(new ErrorResponse("No Todo find with this i'd", 404));
      // res.status(404).json({ success: false, error: "No to found" });
      // next("No todo found");
    }
    res.status(200).json({ success: true, todo: findTodoById });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update Todo
exports.updateTodo = async (req, res, next) => {
  try {
    const updateTodoById = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    if (!updateTodoById) {
      return next(new ErrorResponse("No Todo find with this i'd", 404));
    }
    res.status(200).json({ success: true, todo: updateTodoById });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Delete Todo
exports.deleteTodo = async (req, res, next) => {
  try {
    const deleteTodo = await Todo.findByIdAndDelete({ _id: req.params.id });

    if (!deleteTodo) {
      return next(new ErrorResponse("No Todo find with this i'd", 404));
    }

    res.status(200).json({ success: true, todo: "Todo Delete Successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
