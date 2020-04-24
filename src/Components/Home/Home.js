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
	}
	async componentDidMount() {
		this.checkUserExists()
	}

	render() {
		return (
			<div className="home--outer">
				<div className="home--nav-bar">
					<Account/>
				</div>
				<div className="home--budget-manager">
					<input onChange = {(e)=>this.inputHandler("add", e.target.value)} ></input>
					<button onClick={()=>accountFunctions.AddFunds(this.state.add, this.state.user_id)}></button>
				</div>
			</div>
		)
	}
}


export default withRouter(Home)