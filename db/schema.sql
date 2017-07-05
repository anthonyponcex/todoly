CREATE DATABASE todos_db;

USE todos_db;

CREATE TABLE todo_today (
    id INT NOT NULL AUTO_INCREMENT ,
    todo_name VARCHAR(75),
    done BOOLEAN DEFAULT FALSE,
    primary key(id)
);

CREATE TABLE todo_tomorrow (
    id INT NOT NULL AUTO_INCREMENT ,
    todo_name VARCHAR(75),
    done BOOLEAN DEFAULT FALSE,
    primary key(id)
);

CREATE TABLE todo_thisweek (
    id INT NOT NULL AUTO_INCREMENT ,
    todo_name VARCHAR(75),
    done BOOLEAN DEFAULT FALSE,
    primary key(id)
);

CREATE TABLE todo_thismonth (
    id INT NOT NULL AUTO_INCREMENT ,
    todo_name VARCHAR(75),
    done BOOLEAN DEFAULT FALSE,
    primary key(id)
);