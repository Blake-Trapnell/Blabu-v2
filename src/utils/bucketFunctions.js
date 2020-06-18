import axios from "axios";
import {getTodayAndCurrentTime} from "./functions.js";

export async function removeBucket(bucket_id, i) {
	axios.put('api/remove/bucket', {bucket_id})
	let { buckets } = this.state
	buckets.splice(i, 1)
	this.setState({
		buckets
	})
}
export async function saveBucket (state) {
	console.log("run")
	let { name, type, paymentType, goalAmount} = state
	let t_stamp = getTodayAndCurrentTime()
	let res = await axios.post(`/user/addbucket`, { name, type, paymentType, goalAmount, t_stamp})
	if (res.data.type === "error") {
		return
	}
	else {
		window.location.reload(false)
	}
}

export function inputHandler (key, value) {
	this.setState({
		[key]: value
	})
};

export default {
	removeBucket,
	saveBucket,
	inputHandler,
};