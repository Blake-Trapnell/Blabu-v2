import React, { useEffect } from "react";
import { TweenMax, TimelineLite, Power0 } from "gsap/all";
import "./LoginAnimation.scss";

let LoginAnmation = () => {
	let array = [];
	for (let i = 0; i < 105; i++) {
		array.push(i);
	}
	let greensocks = () => {
		let tl = new TimelineLite();
		for (let i = 0; i < 105; i++) {
			tl.to(document.getElementsByClassName(i), 0.01, {
				ease: Power0.easeNone,
				border: "solid 1px #FFAA32",
			});
			tl.to(document.getElementsByClassName(i), 0.01, {
				ease: Power0.easeNone,
				border: "solid 1px #0CF574",
				delay: 0.02,
				repeat: -1,
			});
			tl.to(document.getElementsByClassName(i), 0.01, {
				ease: Power0.easeNone,
				border: "solid 1px #1CCAD8",
				delay: 0.04,
				repeat: -1,
			});
			if (i % 2 === 0) {
				TweenMax.to(document.getElementsByClassName(i), 2, {
					ease: Power0.easeNone,
					rotate: 180,
				}).repeat(-1);
			} else {
				TweenMax.to(document.getElementsByClassName(i), 2, {
					ease: Power0.easeNone,
					rotate: 180,
					delay: 1,
				}).repeat(-1);
			}
		}
	};

	useEffect(() => {
		greensocks();
	}, []);

	return (
		<div className="card-example">
			{array.map((el, i) => (
				<div key={i} className={`effect ${i}`}></div>
			))}
		</div>
	);
};

export default LoginAnmation;
