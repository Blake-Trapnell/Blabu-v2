import React, { Component,} from "react";
import loginFunctions from "../../utils/loginFunctions.js";
import accountFunctions from "../../utils/accountFunctions.js";
import BucketCreator from "../BucketManager/BucketCreator.js";
import functions from "../../utils/functions.js";
import { withRouter } from "react-router-dom";
import "./Home.scss";


class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	 this.checkUserExists = loginFunctions.checkUserExists.bind(this)
	 this.inputHandler = functions.inputHandler.bind(this)
	 this.AdjustFunds = accountFunctions.AdjustFunds.bind(this)
	}
	async componentDidMount() {
		await this.checkUserExists()
	}

	render() {
	const {accountBalance, username, difference, user_id} = this.state
		return (
			<div className="home--outer">
				<div className="home--budget-manager">
					{accountBalance ? <h6>{accountBalance}</h6> : <h6>loading...</h6>}
					{username ? <h6>{username}</h6> : <h6>loading...</h6>}
					<input onChange = {(e)=>this.inputHandler("difference", e.target.value)} ></input>
					<button onClick={()=>this.AdjustFunds(difference, user_id, "deposit")} className="btn--deposit">Deposit</button>
					<button onClick={()=>this.AdjustFunds(difference, user_id, "withdraw")} className="btn--orange">Withdraw</button>
				</div>
				<div className="home--budget-manager">
					<BucketCreator/>
				</div>
			</div>
		)
	}
}


export default withRouter(Home)