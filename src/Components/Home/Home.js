import React, { Component,} from "react";
import axios from "axios"
import { withRouter } from "react-router-dom";
import Buckets from "../BucketController/Buckets.js";
import BucketsController from "../BucketController/BucketController.js";
import "./Home.scss";

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	async componentDidMount() {
		axios.get('/auth/user').then(async (res) => {
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

	render() {
		const { user_id } = this.state
		return (
			<div className="home--outer">
				<div className="home--content-container">
					<div className="home--side-bar">
						<div className="home--flip-card">
						<BucketsController/>
						</div>
						<div className="home--flip-card">
						</div>
					</div>
					<div className="home--content">
						<Buckets user_id={user_id} />
					</div>
				</div>
				<div className="home--account-info">
				</div>
			</div>
		)
	}
}


export default withRouter(Home)