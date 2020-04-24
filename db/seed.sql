DROP TABLE blabu_users;
DROP TABLE buckets;
DROP TABLE income;
DROP TABLE time_stamp;
DROP TABLE account_funds;

CREATE TABLE blabu_users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(25),
email VARCHAR(100),
Hash TEXT
);

CREATE TABLE buckets(
bucket_id SERIAL PRIMARY KEY,
user_id INT,
name TEXT,
current_amount INT,
Goal_amount INT
);

CREATE TABLE income (
income_id SERIAL PRIMARY KEY,
user_id INT,
income_balance INT,
account_balance INT);

CREATE TABLE time_stamp (
stamp_id SERIAL PRIMARY KEY,
bucket_id INT,
income_id INT,
ammount INT,
time_stamp INT);

CREATE TABLE account_funds (
fund_id SERIAL PRIMARY KEY,
user_id INT,
fund_amount INT, 
time_stamp TEXT);