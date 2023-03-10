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
    let date_ended_placeholder = '3000-01-01T00:00:00.001Z';
    
    const newRaffle = await db.one("INSERT INTO raffles (raffle_name, secret_token, date_created, date_ended) VALUES ($1, $2, $3, $4) RETURNING raffle_name, date_created, date_ended",
        [raffle.raffle_name, raffle.secret_token, date_created, date_ended_placeholder]
    );

    return newRaffle
};

//get all of a single raffle's participants
const getParticipantsByRaffleId = async (raffle_id) => {
    try {
        const allEntries = await db.any("SELECT * FROM tickets WHERE raffle_id = $1", raffle_id);
        return allEntries
    } catch (error) {
        return error
    }
};

module.exports = {
    getAllRaffles,
    getRaffle,
    createRaffle,
    getParticipantsByRaffleId,
}