const bcrypt = require('bcrypt-nodejs');
let authFunctions = require("../serverUtils/authControllerUtils.js");

module.exports = {
	register: async (req, res) => {
		const db = req.app.get('db')
		const { username, password, email } = req.body
		if(authFunctions.checkIfUsernameIsTaken(username, email) === true) {
			return res
			.status(200)
			.send({ message: "username & or email is in use" });
		}
		req.session.user = authFunctions.registerNewUser(username, password, email)
		res.status(200).send({
			message: 'logged in',
			user: req.session.user,
			loggedIn: true
		})
	},
	login: async (req, res) => {
		const db = req.app.get('db')
		const { username, password } = req.body
		const user = await db.auth.find_user([username])
		if (user.length === 0) {
			return res.status(200).send({ message: 'User not found' })
		}
		const result = bcrypt.compareSync(password, user[0].hash)
		if (result) {
			delete user[0].hash
			req.session.user = user[0]
			return res.status(200).send({ message: 'Logged in', user: req.session.user, loggedIn: true })
		}
		else {
			return res.status(200).send({ message: 'username and or password is incorrect' })
		}
	},
	setUser: async (req, res) => {
		res.status(200).send(req.session.user)
	}
}