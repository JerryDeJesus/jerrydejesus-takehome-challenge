\c raffle_takehome;

INSERT INTO raffles (rafflename, winnerid, secret_token, date_created, date_ended) VALUES
('sample raffle', 1, 'test', '2022-11-14T14:14:45.364Z', '2022-11-15T14:14:45.364Z');

INSERT INTO tickets (raffleid, firstname, lastname, email, phone) VALUES
(1, 'jerry', 'dejesus', 'placeholder@placeholder.com', '1234567890');