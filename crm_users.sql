CREATE DATABASE crm;

USE crm;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, password) VALUES ('admin@ifglobal.com', MD5('admin123'));
