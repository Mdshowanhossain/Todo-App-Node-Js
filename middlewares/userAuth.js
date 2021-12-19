const jwt = require("jsonwebtoken");

const checkLogin = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = await authorization.split(" ")[1];
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    const { name, userId } = decodedToken;
    req.name = name;
    req.userId = userId;
    next();
  } catch (err) {
    //   res.status()
    return next(err);
    // res.status(500).json({ error: err.message });    return next("Authentication failed");
  }
};

module.exports = checkLogin;
