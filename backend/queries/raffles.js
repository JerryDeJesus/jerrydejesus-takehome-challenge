const db = require('../db/dbConfig');

//get every raffle's info for homepage
const getAllRaffles = async () => {
    try {
        const allRaffles = await db.any("SELECT * FROM raffles");
        return allRaffles
    } catch (error) {
        return error   
    }
}

//get a single raffle's info by id
const getRaffle = async (id) => {
    try {
        const raffle = await db.one("SELECT * FROM raffles WHERE id = $1", id);
        return raffle
    } catch (error) {
        return error
    }
}

const createRaffle = async (raffle) => {
    let date_created = new Date(Date.now());
    let date_ended_placeholder = '0000-00-00T00:00:00Z';
    try {
        const newRaffle = await db.one("INSERT INTO raffles (rafflename, winnerid, secret_token, date_created, date_ended) VALUES ($1, $2, $3, $4, $5) RETURNING rafflename, winnerid, date_created, date_ended",
        [raffle.rafflename, 0, raffle.secret_token, date_created, date_ended_placeholder]);
        return newRaffle
    } catch (error) {
        return error
    }
};

//view a raffle's winner's info
const viewWinner = async (raffleid) => {
    try {
        const winningTicket = await db.one("SELECT FROM tickets WHERE id = $1", raffleid);
        return winningTicket
    } catch (error) {
        return error   
    }
};

//update winnerid to reflect raffle outcome
const selectWinner = async (id, raffle) => {
    try {
        const updatedRaffle = await db.one("UPDATE raffles SET rafflename = $1, winnerid = $2, secret_token = $3, date_created = $4, date_ended = $5 WHERE id = $6 RETURNING rafflename, winnerid, date_created, date_ended", 
        [raffle.rafflename, raffle.winnerid, raffle.secret_token, raffle.date_created, raffle.date_ended, id]
        );
        return updatedRaffle
    } catch (error) {
        return error
    }
};

//get all of a single raffle's participants
const getRaffleParticipants = async (raffleid) => {
    try {
        const allEntries = await db.any("SELECT * FROM tickets WHERE raffleid=$1", raffleid);
        return allEntries
    } catch (error) {
        return error
    }
};

module.exports = {
    getAllRaffles,
    getRaffle,
    createRaffle,
    viewWinner,
    selectWinner,
    getRaffleParticipants
}