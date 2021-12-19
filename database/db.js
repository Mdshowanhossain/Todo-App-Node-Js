const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGOOSE_URI, {});
  console.log("MONGODB CONNECTED");
};
module.exports = connectDB;
