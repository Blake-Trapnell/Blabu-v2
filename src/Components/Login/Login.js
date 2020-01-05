import React, { Component } from "react";
import Header from "../Header/Header"
import axios from "axios";
import swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Login.css"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
		}
	}
	render() {
		return (
			<div>
				<Header />
				<div className="Login--content-wrapper">
					<div className="login--sign-in">
						<h1>Username</h1>
						<input className="login--input" />
						<h1>Password</h1>
						<input className="login--input" />
					</div>
					<div className="login--sign-up">
						<h1>new user?</h1>
						<h1>email</h1>
						<input className="login--input" />
						<h1>username</h1>
						<input className="login--input" />
						<h1>password</h1>
						<input className="login--input" />
					</div>
				</div>
			</div>
		)
	}

}

export default withRouter(connect(null)(Login))