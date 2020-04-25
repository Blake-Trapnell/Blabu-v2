module.exports = {
	checkIfUsernameIsTaken: async (username, email) => {
		const user = await db.auth.check_if_username_is_taken([
			username,
			email,
		]);
		if (user.length > 0) {
			return true;
		}
	},
	registerNewUser: async (username, password, email) => {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		const newUser = await db.auth.Register_user([username, email, hash]);
		db.accounts.create_account_balance([newUser[0].user_id, 0, " "]);
		return newUser[0];
	},
};
