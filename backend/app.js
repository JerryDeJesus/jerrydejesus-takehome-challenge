const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.use(express.json()); 

require('dotenv').config();

app.get("/", (req, res) => {
    res.send("welcome to backend");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
    });
    
module.exports = app;