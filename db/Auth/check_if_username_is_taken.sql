SELECT * FROM blabu_users
WHERE username = $1
OR email = $2;