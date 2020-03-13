import React from "react";
import "./form.scss";

const RegisterForm = (props) => {
	return (
            <div className="login-form--body-form">
                <div className="login-form--input-container green">
                    <h3 id="green">username</h3>
                    <input className="login-form--input login-form--input-green" type="text"/>
                </div>
                <div className="login-form--input-container purple">
                    <h3 id="green">email</h3>
                    <input className="login-form--input login-form--input-purple" type="text"/>
                </div>
                <div className="login-form--input-container blue">
                    <h3 id="blue">password</h3>
                    <input className="login-form--input login-form--input-blue" type="password"/>
                </div>
                <div className="login-form--input-container yellow">
                    <h3 id="blue"> confirm password</h3>
                    <input className="login-form--input login-form--input-yellow" type="password"/>
                </div>
                <div className="login--form-button-container">
                    <button>Register :D</button>
                </div>
                <div className="login-form--input-container">
                    <h6 onClick ={props.switchHandler} className="login-form--new-user">login</h6>
                </div>
		</div>
	);
    };

export default RegisterForm;