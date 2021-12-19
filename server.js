const express = require("express");
require("dotenv").config({ path: "./configs/config.env" });
const app = express();

const CONNECTDB = require("./database/db");
const Todo = require("./Schema/tood");
// CONNECTDB
CONNECTDB();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

// app.use();
app.use("/api/todo", require("./routes/todo"));

// app.get("/", async (req, res) => {
//   try {
//     const findTodo = await Todo.find();
//     res.status(200).json(findTodo);
//   } catch (e) {
//     res.status(500).send(e);
//     console.log(e);
//   }
// });

const server = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error,${err}`);
  server.close(() => process.exit(1));
});
