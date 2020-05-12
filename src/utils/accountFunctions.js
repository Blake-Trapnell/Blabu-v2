import axios from "axios";
import functions from "./functions";

async function AdjustFunds(difference, user_id, type) {
	const time_stamp = functions.getTodayAndCurrentTime();
	let currentFunds = await getCurrentFunds(user_id);
	let updatedFunds = null

	switch(type) {
		case "deposit": 
		updatedFunds = DepositFunds(currentFunds, difference);
		axios.post("/user/update-balance", {
			user_id,
			updatedFunds,
			time_stamp,
		});
		break;
		case "withdraw":
		updatedFunds = WithdrawFunds(currentFunds, difference);
		axios.post("/user/update-balance", {
			user_id,
			updatedFunds,
			time_stamp,
		});
		break;
		default: alert("sorry")
	}
	this.setState({
		accountBalance: updatedFunds
	})
}

const getCurrentFunds = async (user_id) => {
	let currentFunds = await axios.get(`/user/balance?user_id=${user_id}`);
	return currentFunds.data.fund_amount;
};
const DepositFunds = (currentFunds, difference) => {
	return parseInt(currentFunds) + parseInt(difference);
};
const WithdrawFunds = (currentFunds, difference) => {
	return parseInt(currentFunds) - parseInt(difference);
};

export default {
	AdjustFunds,
	getCurrentFunds,
};
