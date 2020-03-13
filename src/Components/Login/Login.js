import React, { Component } from "react";
import functions from "../../utils/functions.js";
import Header from "../Header/Header.js";
import LoginForm from "./Login-forms/Login-form.js";
import LoginAnimation from "../LoginAnimation/LoginAnimation.js";
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
			showRegister: false,
		}
	this.inputHandler = functions.inputHandler.bind(this)
	this.switchHandler = functions.switchHandler.bind(this)
	}

	render() {
		let showRegister = this.state.showRegister;
		return (
			<div className="login--outer-container">
				<Header/>
			<div className="login--body">
				<div className="login--body-left">
					<LoginAnimation/>
				</div>
				<div className="login--body-center">
					{showRegister ? <div>Register</div> : 
					<LoginForm switchHandler={()=> this.switchHandler("showRegister", showRegister)}/>
					}
				</div>
				<div className="login--body-right">
					<LoginAnimation/>
				</div>
			</div>
			</div>
		)
	}

}

export default withRouter(connect(null)(Login))