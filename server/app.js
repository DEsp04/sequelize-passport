//easier to have multple endpoint to test different things
const express = require('express');

const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

//specific local host have access to the server
const cors = require("cors");

//logs request and morgan happens to be a middleware for logger. it helps generate request logs
const logger = require("morgan");

const userRoutes = require("./routes/index");


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(logger("dev"));

app.use(cors());

app.get("/", (req, res) => res.send("API is running!"));

app.use("/api", userRoutes);

//Initialize the PassportJS library:
app.use(passport.initialize());
app.use(passport.session());





module.exports = app;