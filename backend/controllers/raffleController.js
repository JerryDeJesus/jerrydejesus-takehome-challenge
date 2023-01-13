const express = require('express');
const raffles = express.Router({ mergeParams: true });
const { getAllRaffles, getRaffle, createRaffle, viewWinner, selectWinner, getRaffleParticipants} = require('../queries/raffles');

raffles.get('/', async (req, res) => {
    try {
        const allRaffles = await getAllRaffles();
        res.status(200).json(allRaffles);
    } catch (error) {
        res.status(500).json({error:"Raffles not found"});
    }
})

raffles.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const raffle = await getRaffle(id);
        res.status(200).json(raffle);
    } catch(error) {
        res.status(500).json({error: "Raffle not found"});
    }
});


raffles.post("/", async (req, res) => {
    try {
        const raffle = await createRaffle(req.body);
        res.status(200).json(raffle);
    } catch(error) {
        res.status(500).json({error: "Raffle creation error"});
    }
});

raffles.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const updatedRaffle = await updateRaffle(id, req.body);
        res.status(200).json(updatedRaffle);
    } catch (error) {
        res.status(500).json({error: "Raffle not found"});
    }
});

//mergeParams allows for this
//get all of a raffle's participants
raffles.get("/:id/participants", async (req,res) => {
    const {id} = req.params;
    try{
        const allRaffleParticipants = await getRaffleParticipants(id);
        res.status(200).json(allRaffleParticipants);
    }catch(error){
        res.status(500).json({error: 'Raffle participants not found'});
    }
});

raffles.get("/:id/winner", async (req, res) => {
    try {
        const {id} = req.params;
        const raffleWinner = await viewWinner(id);
        res.status(200).json(raffleWinner);
    } catch (error) {
        return error
    }
});

raffles.put("/:id/winner", async (req, res) => {
    try {
        const {id} = req.params;
        const updatedRaffle = await selectWinner(id, req.body);
        res.status(200).json(updatedRaffle);
    } catch (error) {
        res.status(500).json({error: "Error selecting raffle winner"});
    }
})


module.exports = raffles;