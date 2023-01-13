const cors = require("cors");
const express = require("express");
const raffleController = require('./controllers/raffleController');
const app = express();
app.use(cors());
app.use(express.json()); 

require('dotenv').config();

app.get("/", (req, res) => {
    res.send("Welcome to Raffle backend");
});

app.use('/raffles', raffleController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});
    
module.exports = app;