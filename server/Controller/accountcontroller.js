module.exports = {
	getBuckets: async (req, res) => {
		const db = req.app.get('db')
		if(req.session.user === undefined) {
			return
		}
		const { user_id } = req.session.user
		const buckets = await db.accounts.get_user_buckets([user_id])
		res.status(200).send(buckets)
	},
	addBucket: async (req, res) => {
		const db = req.app.get('db')
		const { user_id } = req.session.user
		let { name, starting, goal } = req.body
		console.log(+starting)
		if (isNaN(starting)) {
			res.status(200).send({ type: "error", title: `starting amount is not a number, please don't add symbols or letters.` })
			return
		}
		else if (starting === "") {
			starting = 0
		}
		if (isNaN(goal)) {
			res.status(200).send({ type: "error", title: `goal amount is not a number, please don't add symbols or letters.` })
			return
		}
		else if (goal === "") {
			goal = 0
		}
		await db.accounts.create_bucket([user_id, name, starting, goal])
		const buckets = await db.accounts.get_user_buckets([user_id])
		res.status(200).send(buckets)
	}
}