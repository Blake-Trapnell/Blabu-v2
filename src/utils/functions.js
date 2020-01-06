import axios from "axios"
import Swal from "sweetalert2"

async function logmein() {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000
	})
	const { username, password } = this.state;
	let user = await axios.post('/auth/users/login', { username, password });
	switch (user.message) {
		case "logged in":
			Toast.fire({
				type: "success",
				title: `${username} signed in`
			}
			)
			this.props.history.push('/')
			break;
		case "Username not found":
			Toast.fire({
				type: "error",
				title: 'Username not found'
			})
			break;
		case "wrong":
			Toast.fire({
				type: "error",
				title: 'Wrong username & or password'
			})
			break;
		default:
			Toast.fire({
				type: "error",
				title: 'Internal error'
			})
	}
}

export default {
	logmein,

}