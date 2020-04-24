module.exports = {
	currentBalance: async (req, res) => {
		const db = req.app.get('db')
		const {user_id} = req.query
		let balance = await db.accounts.get_account_balance([user_id])
		res.status(200).send(balance)
	},
	addBalance: async (req,res) => {
		const db = req.app.get('db')
		const {user_id, currentFunds, time_stamp} = req.body
		console.log(currentFunds)
		let balance = await db.accounts.update_account_balance([user_id, currentFunds, time_stamp])
		res.status(200).send(balance)
	}
}