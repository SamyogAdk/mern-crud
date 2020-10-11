const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const excercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.use(cors());

app.use(express.json());

app.use("/exercises", excercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Successfully running on ${port}`);
});
