import React, {useRef, useEffect} from "react";
import {TweenMax, TimelineMax} from "gsap/all";
import Greensocks from "../../../utils/greensocks/greensockstest.js"

// import "./loginForm.scss";

function LoginForm () {
    let textOne = useRef(null);
    let textTwo = useRef(null);
    let budgets = useRef(null)

useEffect(()=> {
    Greensocks.RightUp(textOne)
    Greensocks.LeftDown(textTwo)
    Greensocks.Budgets(budgets)
}, [])

	return (
		<div className="login-form--outer-container">
			<div className="login--body-title">
				<h1>Blabu</h1>
				<h2>Budget<span ref={el => budgets = el}>s</span></h2>
                <h2 className="textOne" ref={el => textOne = el}>for you</h2>
                <h2 className="textTwo" ref={el => textTwo = el}>done right</h2>
			</div>
		</div>
	);
};

export default LoginForm;