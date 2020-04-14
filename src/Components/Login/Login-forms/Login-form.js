import React from "react";
import "./form.scss";

const LoginForm = (props) => {
	console.log("logmein", props.logMeIn)
	return (
		<div className="login-form--body-form">
			<div className="login-form--input-container green">
				<h3 id="green">username</h3>
				<input
					className="login-form--input login-form--input-green"
					type="text"
					onChange={(e) => {
						props.inputHandler("username", e.target.value);
					}}
				/>
			</div>
			<div className="login-form--input-container blue">
				<h3 id="blue">password</h3>
				<input
					className="login-form--input login-form--input-blue"
					type="password"
					onChange={(e) => {
						props.inputHandler("password", e.target.value);
					}}
				/>
			</div>
			<div className="login--form-button-container">
				<button className="btn--blue" onClick={props.logMeIn}>
					Login
				</button>
			</div>
			<div className="login-form--input-container">
				<h6
					onClick={props.switchHandler}
					className="login-form--new-user"
				>
					new user?
				</h6>
			</div>
		</div>
	);
};

export default LoginForm;
