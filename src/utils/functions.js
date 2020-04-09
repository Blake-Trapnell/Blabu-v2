import axios from "axios";
import Swal from "sweetalert2";

export function inputHandler(key, value) {
	this.setState({
		[key]: value,
	});
}

export function switchHandler(key, value) {
	this.setState({
		[key]: !value,
	});
}

export async function login(username, password) {
	let toast = Swal.mixin( {
		position: 'top-end',
		width: '20rem',
		height: '5rem',
		timer: 3000,
	}
	)
	const response = await axios.post("/auth/users/login", {
		username,
		password,
	});
	switch(response.data.message) {
		case "username and or password is incorrect": 
		toast.fire({
			icon: 'info',
			text: response.data.message,
		});
		break;
		case "User not found": 
		toast.fire({
			icon: 'info',
			text: response.data.message,
		})
		break;
		case "Logged in":
			toast.fire({
				icon: 'success',
				text: response.data.message,
			})
		this.props.history.push("/home")
	}
}

export default {
	inputHandler,
	switchHandler,
	login,
};
