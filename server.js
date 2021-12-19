require("dotenv").config({ path: "./configs/config.env" });
const express = require("express");
const CONNECTDB = require("./database/db");
const errorHandler = require("./middlewares/error");

// CONNECTDB
CONNECTDB();

const app = express();

app.use(express.json());

// app.use();
app.use("/api/todo", require("./routes/todo"));
app.use("/api/user", require("./routes/user"));
// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error,${err}`);
  server.close(() => process.exit(1));
});
