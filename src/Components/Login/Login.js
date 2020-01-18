import React, { Component } from "react";
import loginFunctions from "../../utils/loginFunctions.js";
import functions from "../../utils/functions.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Login.scss"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			signin: true,
			password: "",
			email: "",
			username: "",
		}
	this.inputHandler = functions.inputHandler.bind(this)
	}

	render() {
		return (
			<div>
				<div className="Login--content-body">
					<h1 className="login--blabu">Blabu!</h1>
					<div className="login--content-wrapper">
						{this.state.signin ? 
						<div className="login--sign-in">
							<h1>Username</h1>
							<input onChange={(e) => { this.inputHandler("username", e.target.value) }} className="login--input" />
							<h1>Password</h1>
							<input onChange={(e) => { this.inputHandler("password", e.target.value) }} className="login--input" type="password" />
							<button onClick={() => { loginFunctions.logmein(this.state, this.props) }} className="btn--blue">Login</button>
							<h1 className ="login--account" onClick={()=>this.inputHandler("signin", !this.state.signin)}>new user?</h1>
						</div>
					: null}
					{!this.state.signin ?
						<div className="login--sign-up">
							<h1>email</h1>
							<input onChange={(e) => { this.inputHandler("email", e.target.value) }} className="login--input" />
							<h1>username</h1>
							<input onChange={(e) => { this.inputHandler("username", e.target.value) }} className="login--input" />
							<h1>password</h1>
							<input onChange={(e) => { this.inputHandler("password", e.target.value) }} className="login--input" />
							<h1>confirm password</h1>
							<input onChange={(e) => { this.inputHandler("passwordConfirm", e.target.value) }} className="login--input" />
							<button onClick={() => { loginFunctions.registerMe(this.state, this.props) }} className="btn--blue">Sign up</button>
							<h1 className="login--account" onClick={()=>this.inputHandler("signin", !this.state.signin)}>Sign in</h1>
						</div>
					: null}
					</div>
				</div>
			</div>
		)
	}

}

export default withRouter(connect(null)(Login))