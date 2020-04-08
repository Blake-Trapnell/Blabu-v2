import axios from "axios"

export function inputHandler (key, value) {
	this.setState({
		[key]: value
	},)
};

export function switchHandler (key, value) {
	this.setState({
		[key]: !value
	})
}

export async function login (username, password) {
	const response = await axios.post("/auth/users/login", {username, password})
	console.log(response)
}

export default {
	inputHandler,
	switchHandler,
	login,
};