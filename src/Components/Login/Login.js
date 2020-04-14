import React, { Component } from "react";
import LoginFunctions from "../../utils/loginFunctions.js";
import functions from "../../utils/functions.js";
import Header from "../Header/Header.js";
import LoginForm from "./Login-forms/Login-form.js";
import RegisterForm from "./Login-forms/Register-form.js";
import LoginAnimation from "../LoginAnimation/LoginAnimation.js";
import BlabuTitle from "./BlabuTitle.js";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Login.scss";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signin: true,
			password: "",
			email: "",
			username: "",
			showRegister: false,
		};
		this.inputHandler = functions.inputHandler.bind(this);
		this.switchHandler = functions.switchHandler.bind(this);
		this.logMeIn = LoginFunctions.logMeIn.bind(this);
		this.registerMe = LoginFunctions.registerMe.bind(this);
	}

	render() {
		let showRegister = this.state.showRegister;
		const { username, password, passwordConfirm, email } = this.state;
		const registerInfo = { username, password, passwordConfirm, email };
		return (
			<div className="login--outer-container">
				<Header />
				<div className="login--body">
					<div className="login--body-left">
						<LoginAnimation />
					</div>
					<div className="login--body-center">
						<div className="login-form--outer-container">
							<BlabuTitle />
							{showRegister ? (
								<RegisterForm
									registerMe={() =>
										this.registerMe(registerInfo, this.props)
									}
									switchHandler={() =>
										this.switchHandler(
											"showRegister",
											showRegister
										)
									}
									inputHandler={this.inputHandler}
								/>
							) : (
								<LoginForm
									switchHandler={() =>
										this.switchHandler(
											"showRegister",
											showRegister
										)
									}
									inputHandler={this.inputHandler}
									logMeIn={() => this.logMeIn(username, password)}
								/>
							)}
						</div>
					</div>
					<div className="login--body-right">
						<LoginAnimation />
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(connect(null)(Login));
