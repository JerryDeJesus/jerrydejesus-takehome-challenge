DROP DATABASE IF EXISTS raffle_takehome; 
CREATE DATABASE raffle_takehome; 

\c raffle_takehome; 

CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    raffle_name TEXT NOT NULL UNIQUE, 
    secret_token TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL,
    date_ended TIMESTAMP,
    winner_name TEXT
);

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    raffle_id INTEGER REFERENCES raffles (id)
    ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT
);

CREATE TABLE winners (
    id SERIAL PRIMARY KEY,
    winner_name TEXT NOT NULL,
    raffle_id INTEGER REFERENCES raffles (id)
    ON DELETE CASCADE,
    ticket_id INTEGER REFERENCES tickets (id)
    ON DELETE CASCADE,
    email TEXT NOT NULL,
    phone TEXT
);