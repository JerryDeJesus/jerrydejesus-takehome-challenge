DROP DATABASE IF EXISTS raffle_takehome; 
CREATE DATABASE raffle_takehome; 

\c raffle_takehome; 

CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    rafflename TEXT NOT NULL, 
    winnerid INTEGER,
    secret_token TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL,
    date_ended TIMESTAMP
);

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    raffleid INTEGER REFERENCES raffles (id)
    ON DELETE CASCADE,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT
);