\c raffle_takehome;

INSERT INTO raffles (raffle_name, secret_token, date_created, date_ended) VALUES
('sample raffle', 'test', '2022-11-14T14:14:45.364Z', '2022-11-15T14:14:45.364Z');

INSERT INTO tickets (raffle_id, first_name, last_name, email, phone) VALUES
(1, 'jerry', 'dejesus', 'placeholder@placeholder.com', '1234567890');

INSERT INTO winners (winner_name, raffle_id, ticket_id) VALUES
('jerry dejesus', 1, 1);