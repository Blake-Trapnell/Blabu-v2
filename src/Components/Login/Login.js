import React, { Component } from "react";
import loginFunctions from "../../utils/loginFunctions.js";
import functions from "../../utils/functions.js";
import Header from "../Header/Header.js";
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
			</div>
		)
	}

}

export default withRouter(connect(null)(Login))