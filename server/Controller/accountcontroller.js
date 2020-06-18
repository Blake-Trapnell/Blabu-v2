module.exports = {
	currentBalance: async (req, res) => {
		const db = req.app.get('db')
		const {user_id} = req.query
		let balance = await db.accounts.get_account_balance([user_id])
		balance = balance[0]
		res.status(200).send(balance)
	},
	updateBalance: async (req,res) => {
		const db = req.app.get('db')
		const {user_id, updatedFunds, time_stamp} = req.body

		let balance = await db.accounts.update_account_balance([user_id, updatedFunds, time_stamp])
		res.status(200).send(balance)
	},
	addBucket: async (req,res) => {
		const db = req.app.get('db')
		const user_id = req.session.user.user_id
		const {name, type, paymentType, goalAmount, t_stamp} = req.body
		db.accounts.save_bucket([user_id, name, type, paymentType, 0, goalAmount, t_stamp])
	},
}