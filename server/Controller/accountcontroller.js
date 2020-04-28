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
		console.log(updatedFunds)
		let balance = await db.accounts.update_account_balance([user_id, updatedFunds, time_stamp])
		res.status(200).send(balance)
	}
}