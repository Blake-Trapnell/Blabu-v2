import axios from "axios";
import Swal from "sweetalert2";
import {withRouter} from "react-router-dom"

export async function logMeIn(username, password) {
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

export default withRouter({
	logMeIn,
	registerMe,
})