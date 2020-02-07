import React from "react";
import Account from "../account/account.js"
import "./Header.scss";

function Header () {
	return (
		<div className="header--outer-container">
			<div className="header--left"></div>
			<div className="header--center"></div>
			<div className="header--right">
			<Account/>
			</div>

		</div>
	);
};

export default Header;