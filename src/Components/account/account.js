import React from "react";
import Hamburger from "../../utils/hamburger/hamburger.js";
import "./account.scss"

function Account () {
	return (
		<div className="account--outer-container">
			<div className="shrink">
            <h3>login</h3>
			</div>
            <div className="account--account-image">
				<h3>A</h3>
			</div>
			<Hamburger/>
		</div>
	);
};

export default Account;