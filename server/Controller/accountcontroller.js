module.exports = {
	getBuckets: async (req,res) => {
		const db =req.app.get('db')
		const {user_id} = req.session.user
		const buckets = await db.accounts.get_user_buckets([user_id])
		res.status(200).send(buckets)
	},
	addBucket: async (req,res)=> {
		const {user_id} = req.session.user
		const db =req.app.get('db')
		const {name, starting, goal} = req.body
		await db.accounts.create_bucket([user_id, name, starting, goal])
		const buckets = await db.accounts.get_user_buckets([user_id])
		res.status(200).send(buckets)
	}
}