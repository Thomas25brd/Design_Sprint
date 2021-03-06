CREATE DATABASE IF NOT EXISTS kohMantla;
USE kohMantla;

CREATE TABLE IF NOT EXISTS user(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    idPerm INT UNSIGNED NOT NULL DEFAULT 0,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS comment(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    url VARCHAR(2083) NOT NULL,
    title VARCHAR(255) NOT NULL,
    nb_like INT UNSIGNED NOT NULL DEFAULT 0,
    nb_dislike INT UNSIGNED NOT NULL DEFAULT 0,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY notes(user_id) REFERENCES user(id)
);

CREATE TABLE IF NOT EXISTS notes(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    url VARCHAR(2083) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY notes(user_id) REFERENCES user(id)
);
