const User = require("../Schema/user");
const ErrorResponse = require("../utilities/errorResponse");
const bcrypt = require("bcryptjs");
// SignUp User
exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return next(new ErrorResponse("All filled are required", 400));
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const signUpUser = await new User({ name, email, password: hashPassword });
    await signUpUser.save();
    res.status(201).json({ success: true, user: signUpUser });
  } catch (err) {
    next(err);
  }
};

// Login User
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return next(new ErrorResponse("All filled are required", 400));
    }

    const logInUser = await User.findOne({ email });
    if (!logInUser) {
      return next(new ErrorResponse("Invalid Credentials", 400));
    }

    const matchPassword = await bcrypt.compare(password, logInUser.password);
    if (!matchPassword) {
      return next(new ErrorResponse("Invalid Credentials", 400));
    }

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
};
