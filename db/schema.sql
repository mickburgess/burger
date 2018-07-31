-- Create the `burgers_db`.
CREATE DATABASE burgers_db;
-- Use the `burgers_db`.
USE burgers_db;
-- Create a `burgers` table
CREATE TABLE burgers ( 
  id int AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR( 255 ) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
)