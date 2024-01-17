-- DROP DATABASE todolist;

CREATE DATABASE todolist;

USE todolist;

CREATE TABLE TODOLIST(
    id BIGINT(20) AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE TODO(
    id BIGINT(20) AUTO_INCREMENT,
    text VARCHAR(255) NOT NULL,
    list_id BIGINT(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (list_id) REFERENCES TODOLIST(id)
);