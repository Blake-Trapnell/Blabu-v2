import React, { Component } from "react";
import Header from "../Header/Header"
import Functions from "../../utils/functions.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Login.css"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	inputHandler = (key, value) => {
		this.setState({
			[key]: value
		}, () => { console.log(this.state) })
	}



	render() {
		return (
			<div>
				<Header />
				<div className="Login--content-wrapper">
					<div className="login--sign-in">
						<h1>Username</h1>
						<input onChange={(e) => { this.inputHandler("username", e.target.value) }} className="login--input" />
						<h1>Password</h1>
						<input onChange={(e) => { this.inputHandler("password", e.target.value) }} className="login--input" />
						<button onClick={()=>{Functions.logmein()}} className="login--button">Login</button>
					</div>
					<div className="login--sign-up">
						<h1>new user?</h1>
						<h1>email</h1>
						<input onChange={(e) => { this.inputHandler("email", e.target.value) }} className="login--input" />
						<h1>username</h1>
						<input onChange={(e) => { this.inputHandler("username", e.target.value) }} className="login--input" />
						<h1>password</h1>
						<input onChange={(e) => { this.inputHandler("password", e.target.value) }} className="login--input" />
						<button className="login--button">Sign up</button>
					</div>
				</div>
			</div>
		)
	}

}

export default withRouter(connect(null)(Login))