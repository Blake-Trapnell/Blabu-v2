import React, { Component,} from "react";
import axios from "axios"
import { withRouter } from "react-router-dom";
import "./Home.scss";
import Account from "../account/account";

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
		return (
			<div className="home--outer">
				<div className="home--nav-bar">
					<Account/>
				</div>
				<div className="home--budget-manager"></div>
			</div>
		)
	}
}


export default withRouter(Home)