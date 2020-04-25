require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require("./Controller/authcontroller");
const accCtrl = require("./Controller/accountcontroller.js");
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;
const PORT = SERVER_PORT || 4311;
const app = express();

app.use(express.json());
app.use(
	session({
		secret: SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

//Authentication
app.post("/auth/users/login", authCtrl.login);
app.post("/auth/users/register", authCtrl.register);
app.get("/auth/user", authCtrl.setUser);

//Account
app.get("/user/balance", accCtrl.currentBalance);
app.post('/user/update-balance', accCtrl.updateBalance);

massive(CONNECTION_STRING)
	.then((db) => {
		app.set("db", db);
		app.listen(PORT, () => console.log(`^.^ welcome to ${PORT}`));
	})
	.catch((error) => console.log("error connection to DB", error));
