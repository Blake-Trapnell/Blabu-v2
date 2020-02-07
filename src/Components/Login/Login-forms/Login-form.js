import React, {useRef, useEffect} from "react";
import {TweenMax, TimelineMax} from "gsap/all";
import Greensocks from "../../../utils/greensocks/greensockstest.js"

import "./form.scss";

function LoginForm () {
    let textOne = useRef(null);
    let textTwo = useRef(null);
    let budgets = useRef(null)
    let textThree = useRef(null)

useEffect(()=> {
    Greensocks(budgets, textOne, textTwo, textThree)
}, [])

	return (
		<div className="login-form--outer-container">
			<div className="login--body-title">
				<h1>Blabu</h1>
				<h2>Budget<span className="text" ref={el => budgets = el}>s</span></h2>
                <h2 className="text" ref={el => textOne = el}>for you</h2>
                <h2 className="text" ref={el => textTwo = el}>done right</h2>
                <h2 className="text" ref={el => textThree = el}>fast</h2>
			</div>
            <div className="login-form--body-form">
                <div className="login-form--input-container one">
                    <h3 id="green">username</h3>
                    <input className="login-form--input login-form--input-one" type="text"/>
                </div>
                <div className="login-form--input-container">
                    <h3 id="blue">password</h3>
                    <input className="login-form--input login-form--input-two" type="password"/>
                </div>
                <div className="login-form--input-container">
                    <h6 className="login-form--new-user">new user?</h6>
                </div>

            </div>
		</div>
	);
};

export default LoginForm;