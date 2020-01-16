import React, { Component } from "react";
import Swal from "sweetalert2"
import "./BucketController.css";
import Axios from "axios";

export class BucketController extends Component {

	inputHandler = (key, value) => {
		this.setState({
			[key]: value
		})
	};
	saveBucket = async (state) => {
		let { name, starting, goal } = state
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
		})
		if (name === "") {
			Toast.fire({
				type: "error",
				title: 'Please add bucket name'
			})
		}
		else if (starting === "") { starting = 0 }
		else if (goal === "") { goal = 0 }
		await Axios.post(`/user/add/bucket`, { name, starting, goal })
		window.location.reload(false)
	}

	render() {

		return (
			<div className="bucket-controller--container">
				<h1 className="bucket-controller--h1">Bucket Name</h1>
				<input onChange={(e) => this.inputHandler("name", e.target.value)} />
				<h1 className="bucket-controller--h1">starting $</h1>
				<input onChange={(e) => this.inputHandler("starting", e.target.value)} />
				<h1 className="bucket-controller--h1">goal $</h1>
				<input onChange={(e) => this.inputHandler("goal", e.target.value)} />
				<button onClick={() => this.saveBucket(this.state)} className="bucket-controller--button">Create Bucket</button>
			</div>
		)
	};
};


export default BucketController