import React from "react";
import "./account.scss"

function Account (props) {
	const {accountBalance, username} = props
	return (
		<div>
			{username  && accountBalance ? 
			<div>
			<h6>{username}</h6>
			<h6>{accountBalance}</h6>
			</div>
			 : <h6>loading</h6>}
		</div>

	);
};

export default Account;