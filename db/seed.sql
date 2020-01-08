DROP TABLE blabu_users;
DROP TABLE buckets;

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