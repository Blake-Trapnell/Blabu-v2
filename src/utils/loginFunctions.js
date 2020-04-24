import axios from "axios";
import Swal from "sweetalert2";
import {withRouter} from "react-router-dom"

 async function logMeIn(username, password) {
	let toast = Swal.mixin( {
		position: 'top-end',
		width: '20rem',
		timer: 3000,
		background: "#404040",
		showConfirmButton: false,
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
		break;
		default: toast.fire({icon: 'error', text: "an unexpected error occured"})
	}
};

async function registerMe(registerInfo, props) {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000
	  })
	const{username, password, passwordConfirm, email,} = registerInfo
	if(password !== passwordConfirm) {
		return   Toast.fire({
			type: "error",
			title: `passwords do not match`
		})
		}
	else if(username === "" || password === "" || passwordConfirm === "") {
		return Toast.fire({
			type: "error",
			title: `please fill in required fields`
		})
	}
	else if(password.length < 5) {
		return Toast.fire({
			type: "error",
			title: `passwords must be 5 or more characters`
		})
	}
   const user = await axios.post('auth/users/register', {username, password, email})
   if(user.data.message === "logged in") {
	 Toast.fire({
		type: "success",
		title: `Welcome ${username}`
	})
	 return props.history.push('/home')
   }
   else
	return Toast.fire({
		type: "error",
		title: `username & or email is already in use`
	})
   
}

async function checkUserExists() {
	await axios.get('/auth/user').then(async (res) => {
		const { username, user_id } = res.data
		if (username === undefined) {
			return this.props.history.push("/")
		}
		this.setState({
			username,
			user_id
		})
	})
}

export default withRouter({
	logMeIn,
	registerMe,
	checkUserExists,
})