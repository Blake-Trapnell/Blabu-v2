import React, { Component } from "react";
import axios from "axios"
import { withRouter } from "react-router-dom";
import BucketController from "../BucketController/BucketController.js";
import Buckets from "../BucketController/Buckets.js";
import "./Home.css";

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	async componentDidMount() {
		axios.get('/auth/user').then(async (res) => {
			const {username, user_id} = res.data
			if (username === undefined) {
				return this.props.history.push("/")
			}
		this.setState({
			username,
			user_id
		})
		})
	}

	render() {
		const {user_id} = this.state
		return (
			<div className="home--outer-container">
				<BucketController />
				<Buckets user_id={user_id}/>
			</div>
		)
	}
}


export default withRouter(Home)