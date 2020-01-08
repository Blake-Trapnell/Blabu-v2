module.exports = {
	getBuckets: async (req,res) => {
		const db =req.app.get('db')
		const {user_id} = req.body
		const buckets = await db.accounts.get_user_buckets([user_id])
		res.status(200).send(buckets)
	},
	addBucket: async (req,res)=> {
		const db =req.app.get('db')
		const {name, starting, goal, user_id} = req.body
		const buckets = await db.accounts.create_bucket([user_id, name, starting, goal])
		console.log(buckets)
		res.status(200).send(buckets)
	}
}