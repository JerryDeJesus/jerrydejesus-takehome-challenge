const cors = require("cors");
const express = require("express");
const raffleController = require('./controllers/raffleController');
const ticketController = require('./controllers/ticketController');
const app = express();
app.use(cors());
app.use(express.json()); 

require('dotenv').config();

app.get("/", (req, res) => {
    res.send("Welcome to Raffle backend");
});

app.use('/raffles', raffleController);
app.use('/tickets', ticketController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});
    
module.exports = app;