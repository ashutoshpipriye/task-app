const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res, next) => {
  res.json({ message: "Server Started..." })
})
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
