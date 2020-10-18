CREATE SCHEMA MemoryGame;

use MemoryGame;

CREATE TABLE users (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
score INT NOT NULL
);

drop table users;