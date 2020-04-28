import React, { Component,} from "react";
import loginFunctions from "../../utils/loginFunctions.js";
import accountFunctions from "../../utils/accountFunctions.js";
import functions from "../../utils/functions.js";
import { withRouter } from "react-router-dom";
import "./Home.scss";
import Account from "../account/account";


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
		this.checkUserExists()
	}

	render() {
		console.log(this.state)
		return (
			<div className="home--outer">
				<div className="home--nav-bar">
					<Account/>
				</div>
				<div className="home--budget-manager">
					{this.state.accountBalance ? <h1>{this.state.accountBalance}</h1> : null}
					<input onChange = {(e)=>this.inputHandler("difference", e.target.value)} ></input>
					<button onClick={()=>this.AdjustFunds(this.state.difference, this.state.user_id)}></button>
				</div>
			</div>
		)
	}
}


export default withRouter(Home)