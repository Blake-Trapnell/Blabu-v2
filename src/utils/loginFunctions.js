import axios from "axios"
import Swal from "sweetalert2"
import {withRouter} from "react-router-dom"

async function logmein(userinfo, props) {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
	})
	const { username, password } = userinfo
	let user = await axios.post('/auth/users/login', { username, password });
	switch (user.data.message) {
		case "Logged in":
			Toast.fire({
				type: "success",
				title: `${username} signed in`
			}
			)
			props.history.push('/home')
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
			});
	};
}
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

export default withRouter( {
	logmein,
	registerMe,
})