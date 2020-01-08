import React, {Component} from "react";
import Swal from "sweetalert2"
import "./BucketController.css";
import Axios from "axios";

class BucketController extends Component {

	inputHandler = (key, value) => {
		this.setState({
			[key]: value
		})
	};
	 saveBucket = async (state) => {
		 console.log('hit', state)
		 let {name, starting, goal, user_id} = state
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
		})
		if(name === "") {
			Toast.fire({
				type: "error",
				title: 'Please add bucket name'
			})
		}
		else if (starting === "") {starting = 0}
		else if (goal === "") {goal = 0}
		let buckets = await Axios.post(`/user/add/bucket`, {name, starting, goal, user_id})

	}

	render() {

		return (
			<div className="bucket-controller--container">
			<h1 class="bucket-controller--h1">Bucket Name</h1>
			<input onChange={(e)=>this.inputHandler("name", e.target.value)} />
			<h1 class="bucket-controller--h1">starting $</h1>
			<input onChange={(e)=>this.inputHandler("starting", e.target.value)} />
			<h1 class="bucket-controller--h1">goal $</h1>
			<input onChange={(e)=>this.inputHandler("goal", e.target.value)} />
			<button onClick={()=>this.saveBucket(this.state)} className="bucket-controller--button">Create Bucket</button>
		</div>
	)
};
};


export default BucketController