const express = require('express');
const tickets = express.Router({ mergeParams: true });
const { createTicket, getAllTickets, getTicket } = require('../queries/tickets');

//create a Ticket
tickets.post("/", async (req, res) => {
    try {
        const ticket = await createTicket(req.body);
        res.status(200).json(ticket);
    } catch(error) {
        res.status(500).json({error: "Ticket creation error"});
    }
});

//list all tickets
tickets.get('/', async (req, res) => {
    try {
        const allTickets = await getAllTickets();
        res.status(200).json(allTickets);
    } catch (error) {
        res.status(500).json({error:"tickets not found"});
    }
})

//get ticket by id
tickets.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await getTicket(id);
        res.status(200).json(ticket);
    } catch(error) {
        res.status(500).json({error: "ticket not found"});
    }
});

module.exports = tickets;