DROP DATABASE IF EXISTS ebay;
CREATE DATABASE ebay;
USE ebay;

CREATE TABLE products (
  id INTEGER AUTO_INCREMENT,
  item VARCHAR(255),
  min_cost FLOAT,
  curr_bid FLOAT,
  ends_in INTEGER,
  image VARCHAR(255),
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255),
  PRIMARY KEY(id)
);