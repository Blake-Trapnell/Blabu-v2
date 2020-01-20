import axios from "axios";
import Swal from "sweetalert2"

export async function removeBucket(bucket_id, i) {
	axios.put('api/remove/bucket', {bucket_id})
	let { buckets } = this.state
	buckets.splice(i, 1)
	this.setState({
		buckets
	})
}
export async function saveBucket (state) {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
	})
	let { name, starting, goal } = state
	let res = await axios.post(`/user/add/bucket`, { name, starting, goal })
	if (res.data.type === "error") {
		Toast.fire({
			type: res.data.type,
			title: res.data.title,
		})
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