CREATE SCHEMA MemoryGame;

use MemoryGame;

CREATE TABLE users (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
score INT NOT NULL
);


insert into users(id, name, score) values (1,"oliver", 200);
insert into users(id, name, score) values (2,"test", 80);
insert into users(id, name, score) values (3,"try", 20);
insert into users(id, name, score) values (4,"success", 100);
insert into users(id, name, score) values (5,"wow", 210);
insert into users(id, name, score) values (6,"damn", 40);
insert into users(id, name, score) values (7,"best", 90);

drop table users;

select * from users order by score DESC;