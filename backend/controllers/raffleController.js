const express = require('express');
const raffles = express.Router({ mergeParams: true });
const { getAllRaffles, getRaffle, createRaffle, getParticipantsByRaffleId, updateRaffle } = require('../queries/raffles');
const { getWinner, selectWinner } = require('../queries/winner');

//list all raffles
raffles.get('/', async (req, res) => {
    try {
        const allRaffles = await getAllRaffles();
        res.status(200).json(allRaffles);
    } catch (error) {
        res.status(500).json({error:"Raffles not found"});
    }
})

//get raffle by raffle_id
raffles.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const raffle = await getRaffle(id);
        res.status(200).json(raffle);
    } catch(error) {
        res.status(500).json({error: "Raffle not found"});
    }
});

//create a raffle
raffles.post("/", async (req, res) => {
    try {
        const raffle = await createRaffle(req.body);
        res.status(200).json(raffle);
    } catch(error) {
        res.status(500).json({error: "Raffle creation error"});
    }
});

//update raffle?
raffles.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRaffle = await updateRaffle(id, req.body);
        res.status(200).json(updatedRaffle);
    } catch (error) {
        res.status(500).json({error: "Raffle not found"});
    }
});

//get all of a raffle's participants
raffles.get("/:id/participants", async (req,res) => {
    const {id} = req.params;
    try{
        const allRaffleParticipants = await getParticipantsByRaffleId(id);
        res.status(200).json(allRaffleParticipants);
    }catch(error){
        res.status(500).json({error: 'Raffle participants not found'});
    }
});

//get winner by raffle_id
raffles.get("/:id/winner", async (req, res) => {
    try {
        const { id } = req.params;
        const raffleWinner = await getWinner(id);

        res.status(200).json(raffleWinner);
    } catch (error) {
        res.status(500).json({error: "Error viewing raffle winner"});
    }
});

//select a winner from the participants of the raffle
raffles.put("/:id/winner", async (req, res) => {
    try {
        const { id } = req.params;
        const { secret_token } = req.body;
        const winner = await selectWinner(id, secret_token);
        res.status(200).json(winner);
    } catch (error) {
        res.status(500).json({error: "Error selecting winner"});
    }
})

module.exports = raffles;