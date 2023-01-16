const db = require('../db/dbConfig');

const createTicket = async (ticket) => {
    try {
        const newTicket = await db.one("INSERT INTO tickets (raffle_id, first_name, last_name, email, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [ticket.raffle_id, ticket.first_name, ticket.last_name, ticket.email, ticket.phone]
        );
        return newTicket
    } catch (error) {
        return error
    }
};

//get every raffle's info for homepage
const getAllTickets = async () => {
    try {
        const allTickets = await db.any("SELECT * FROM tickets");
        return allTickets
    } catch (error) {
        return error   
    }
}

//get a single ticket's info by id
const getTicket = async (id) => {
    try {
        const ticket = await db.one("SELECT * FROM tickets WHERE id = $1", id);
        return ticket
    } catch (error) {
        return error
    }
}

module.exports = {
    createTicket,
    getTicket,
    getAllTickets
}