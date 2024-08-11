const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
//Server creation commands 
// mkdir mern-server
// cd mern-server
// npm init -y
// npm install express morgan cors mongoose

const app= express();

//Middleware that parses HTTP requests with JSON body
app.use(express.json());

//Shows HTTP requests in the console 
app.use(morgan("dev"));

//CORS to allow requests from any origin 
app.use(cors());

//Create endpoint http://localhost:8000/api/messages
app.use("/api/messages", require("./api/messages"));

const port = 8000;
app.listen(port, () => console.log(`Server Listening on port ${port}`));

module.exports = app;