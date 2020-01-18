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
		if (isNaN(starting)) {
			res.status(200).send({ type: "error", title: `starting amount is not a number, please don't add symbols or letters.` })
			return
		}
		if (isNaN(goal)) {
			res.status(200).send({ type: "error", title: `goal amount is not a number, please don't add symbols or letters.` })
			return
		}
		await db.accounts.create_bucket([user_id, name, starting, goal])
		const buckets = await db.accounts.get_user_buckets([user_id])
		res.status(200).send(buckets)
	},
	removeBucket: async (req,res) => {
		const db = req.app.get('db')
		const {bucket_id} = req.body
		let buckets = await db.accounts.remove_bucket([bucket_id])
			res.status(200).send("ok")
	},
}