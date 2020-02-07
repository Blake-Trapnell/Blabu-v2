import React, { Component } from "react";
import functions from "../../utils/functions.js";
import Header from "../Header/Header.js";
import LoginForm from "./Login-forms/Login-form.js";
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
			<div className="login--outer-container">
				<Header/>
			<div className="login--body">
				<div className="login--body-left"></div>
				<div className="login--body-center">
					<LoginForm/>
				</div>
				<div className="login--body-right"></div>
			</div>
			</div>
		)
	}

}

export default withRouter(connect(null)(Login))