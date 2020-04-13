import React from "react";
import "./form.scss";

const RegisterForm = (props) => {
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
			<div className="login-form--input-container purple">
				<h3 id="green">email</h3>
				<input
					className="login-form--input login-form--input-purple"
					type="text"
					onChange={(e) => {
						props.inputHandler("email", e.target.value);
					}}
				/>
			</div>
			<div className="login-form--input-container blue">
				<h3 id="blue">password</h3>
				<input
					className="login-form--input login-form--input-blue"
					type="text"
					onChange={(e) => {
						props.inputHandler("password", e.target.value);
					}}
				/>
			</div>
			<div className="login-form--input-container yellow">
				<h3 id="blue"> confirm password</h3>
				<input
					className="login-form--input login-form--input-yellow"
					type="password"
					onChange={(e) => {
						props.inputHandler("passwordConfirm", e.target.value);
					}}
				/>
			</div>
			<div className="login--form-button-container">
				<button 
				className="btn--blue"
				onClick={()=>{props.registerMe()}}>Register</button>
			</div>
			<div className="login-form--input-container">
				<h6
					onClick={props.switchHandler}
					className="login-form--new-user"
				>
					login
				</h6>
			</div>
		</div>
	);
};

export default RegisterForm;
