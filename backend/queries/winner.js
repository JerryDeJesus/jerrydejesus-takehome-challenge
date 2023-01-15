const db = require('../db/dbConfig');
const { getParticipantsByRaffleId } = require('./raffles');

//view a raffle's winner's info
const viewWinner = async (raffle_id) => {
    try {
        const winningTicket = await db.one("SELECT * FROM winners WHERE raffle_id = $1", raffle_id);
        return winningTicket
    } catch (error) {
        return error   
    }
};

//post to winners table
const selectWinner = async (raffle_id, secret_token) => {
    try {
        //check for matching secret_tokens
        const raffle = await db.one("SELECT FROM raffles WHERE raffle_id = $1", raffle_id);
        if(!raffle) throw new Error('Raffle not found');
        if(raffle.secret_token !== secret_token) throw new Error('Invalid secret_token!')

        //confirm raffle has not ended/found a winner
        const possibleWinner = await viewWinner(raffle_id);
        if(possibleWinner) throw new Error('Winner already exists');

        //decide a winner
        const participants = await getParticipantsByRaffleId(raffle_id);
        const randomParticipantIndex = Math.floor(Math.random() * participants.length);
        const winner = participants[randomParticipantIndex];
        const winnerFormatted = {
         "winner_name": `${winner.first_name} ${winner.last_name}`,
         "raffle_id": winner.raffle_id, 
         "ticket_id": winner.ticket_id
        }
        return winnerFormatted
    } catch (error) {
        return error
    }
};

module.exports = {
    viewWinner,
    selectWinner
}