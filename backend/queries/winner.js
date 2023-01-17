const db = require('../db/dbConfig');
const { getParticipantsByRaffleId } = require('./raffles');

//view a raffle's winner's info
const getWinner = async (id) => {
    try {
        let IntegerId = Number(id);
        const winningTicket = await db.one("SELECT * FROM winners WHERE id = $1", IntegerId);
        return winningTicket
    } catch (error) {
        return error   
    }
};

const selectWinner = async (id, secret_token) => {
    try {
        //check for matching secret_tokens
        const raffle = await db.one("SELECT * FROM raffles WHERE id = $1", id);
        if(!raffle) console.log(raffle)

        if(raffle.secret_token !== secret_token){
            throw new Error('Invalid secret_token!')
        } 
        
        //confirm raffle is ongoing/hasn't found a winner
        const possibleWinner = await getWinner(id);
        if(possibleWinner.id){
            throw new Error('Winner already exists');
        }

        //decide a winner
        const participants = await getParticipantsByRaffleId(id);

        const randomParticipantIndex = Math.floor(Math.random() * participants.length);
        const winningTicket = participants[randomParticipantIndex];
        const winnerName = `${winningTicket.first_name} ${winningTicket.last_name}`;

        const winner = await db.one("INSERT INTO winners (winner_name, raffle_id, ticket_id, email, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [winnerName, winningTicket.raffle_id, winningTicket.id, winningTicket.email, winningTicket.phone]
        );

        //update raffle table to reflect new winner
        const updatedRaffle = await db.one("UPDATE raffles SET winner_name = $1 WHERE id = $2 RETURNING * ", 
        [winnerName, id]
        );
        return winner
    } catch (error) {
        return error
    }
};

module.exports = {
    getWinner,
    selectWinner
}