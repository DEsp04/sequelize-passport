//easier to have multple endpoint to test different things
const express = require('express');


//specific local host have access to the server
const cors = require("cors");

//logs request and morgan happens to be a middleware for logger. it helps generate request logs
const logger = require("morgan");

require("./auth/passport")

const loginRoutes = require("./routes/login");
const paymentRoutes = require("./routes/payment");
const registerRoutes = require("./routes/register")


const app = express();

//express parses the user's input into a json for the body especially in req.body
app.use(express.json());
//once the body is parsed into json, it needs to be parsed in urlencoded.
app.use(express.urlencoded({ extended: false }));

app.use(logger("dev"));

app.use(cors());

app.get("/", (req, res) => res.send("API is running!"));

app.use("/api", loginRoutes);
app.use("/api", paymentRoutes);
app.use("/api", registerRoutes);





//Initialize the PassportJS library:


module.exports = app;