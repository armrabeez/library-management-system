const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const books = require("./routes/api/Book");

const db = require("./config/key").mongoURI;
const port = process.env.PORT || 7677;

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log("MongoDb connected..."))
  .catch((error) => console.log(error));

app.use("/api/books", books);

app.listen(port, () => console.log(`Server started on port ${port}`));
