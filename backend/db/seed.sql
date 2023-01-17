\c raffle_takehome;

INSERT INTO raffles (raffle_name, secret_token, date_created, date_ended, winner_name) VALUES
('sample raffle', 'test', '2023-01-11T14:14:45.364Z', '2023-01-15T18:13:22.465Z','Jerry DeJesus');

INSERT INTO tickets (raffle_id, first_name, last_name, email, phone) VALUES
(1, 'jerry', 'dejesus', 'placeholder@placeholder.com', '1234567890'),
(1, 'sam', 'smith', 'placeholder@placeholder.com', '1234567890'),
(1, 'john', 'lexi', 'placeholder@placeholder.com', '1234567890'),
(1, 'clary', 'gonzalez', 'placeholder@placeholder.com', '1234567890'),
(1, 'judy', 'matthews', 'placeholder@placeholder.com', '1234567890'),
(1, 'randy', 'james', 'placeholder@placeholder.com', '1234567890'),
(1, 'alex', 'tobias', 'placeholder@placeholder.com', '1234567890'),
(1, 'ronald', 'mcdonald', 'placeholder@placeholder.com', '1234567890'),
(1, 'junior', 'powers', 'placeholder@placeholder.com', '1234567890'),
(1, 'roger', 'reynolds', 'placeholder@placeholder.com', '1234567890'),
(1, 'james', 'evans', 'placeholder@placeholder.com', '1234567890'),
(1, 'chris', 'ferguson', 'placeholder@placeholder.com', '1234567890'),
(1, 'toby', 'carter', 'placeholder@placeholder.com', '1234567890'),
(1, 'alexa', 'carter', 'placeholder@placeholder.com', '1234567890'),
(1, 'benny', 'masters', 'placeholder@placeholder.com', '1234567890'),
(1, 'chester', 'louis', 'placeholder@placeholder.com', '1234567890');

INSERT INTO winners (winner_name, raffle_id, ticket_id, email, phone) VALUES
('jerry dejesus', 1, 1, 'jerry@gmail.com', '7187777777');
