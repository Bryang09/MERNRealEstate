const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const items = require("./Routes/API/Houses");

// BODY PARSER MIDDLEWARE
app.use(bodyParser.json());

// DB CONFIG
const db = require("./config/keys").mongoURI;

// CONNECT TO MONGO
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.use("/api/houses", items);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Connected to port ${port}`));
