import React, { Component } from "react";
import axios from "axios"
import { withRouter } from "react-router-dom";
import BucketController from "../BucketController/BucketController.js";
import "./Home.css";

class Home extends Component {

	async componentDidMount() {
		axios.get('/auth/user').then( async (res)=> {
			const user = res.data
			if(user.username === undefined) {
				return  this.props.history.push("/")
			}
			this.setState({
				username: user.username,
				user_id: user.user_id,
			})
			console.log(user.user_id)
			let buckets = await axios.post(`/user/buckets`, {user_id: user.user_id})
			buckets = buckets.data
			this.setState({
				buckets,
			},()=>{console.log(this.state)})
		})
	}

	render() {

		return (
			<div>
				<BucketController/>
			</div>
		)
	}
}


export default withRouter(Home)