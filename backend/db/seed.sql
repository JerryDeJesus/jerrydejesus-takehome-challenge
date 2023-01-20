\c raffle_takehome;

INSERT INTO raffles (raffle_name, secret_token, date_created, date_ended) VALUES
('Sample Raffle', 'test', '2023-01-11T14:14:45.364Z','3000-01-01T00:00:00.001Z');

INSERT INTO tickets (raffle_id, first_name, last_name, email, phone) VALUES
(1, 'Jerry', 'DeJesus', 'jerry@gmail.com', '7187777777'),
(1, 'Sam', 'Smith', 'placeholder@placeholder.com', '1234567890'),
(1, 'John', 'Lexi', 'placeholder@placeholder.com', '1234567890'),
(1, 'Clary', 'Gonzalez', 'placeholder@placeholder.com', '1234567890'),
(1, 'Judy', 'Matthews', 'placeholder@placeholder.com', '1234567890'),
(1, 'Randy', 'James', 'placeholder@placeholder.com', '1234567890'),
(1, 'Alex', 'Tobias', 'placeholder@placeholder.com', '1234567890'),
(1, 'Ronald', 'McDonald', 'placeholder@placeholder.com', '1234567890'),
(1, 'Junior', 'Powers', 'placeholder@placeholder.com', '1234567890'),
(1, 'Roger', 'Reynolds', 'placeholder@placeholder.com', '1234567890'),
(1, 'James', 'Evans', 'placeholder@placeholder.com', '1234567890'),
(1, 'Chris', 'Ferguson', 'placeholder@placeholder.com', '1234567890'),
(1, 'Toby', 'Carter', 'placeholder@placeholder.com', '1234567890'),
(1, 'Alexa', 'Carter', 'placeholder@placeholder.com', '1234567890'),
(1, 'Benny', 'Masters', 'placeholder@placeholder.com', '1234567890'),
(1, 'Chester', 'Louis', 'placeholder@placeholder.com', '1234567890');

-- INSERT INTO winners (winner_name, raffle_id, ticket_id, email, phone) VALUES
-- ('Jerry DeJesus', 1, 1, 'jerry@gmail.com', '7187777777');
