import axios from "axios";
import functions from "./functions";

async function AdjustFunds(difference, user_id) {
	const time_stamp = functions.getTodayAndCurrentTime();
	let currentFunds = await getCurrentFunds(user_id);
	console.log(currentFunds, difference);
	const updatedFunds = AddFunds(currentFunds, difference);
	axios.post("/user/update-balance", {
		user_id,
		updatedFunds,
		time_stamp,
	});
	this.setState({
		accountBalance: updatedFunds
	})
}

const getCurrentFunds = async (user_id) => {
	let currentFunds = await axios.get(`/user/balance?user_id=${user_id}`);
	return currentFunds.data.fund_amount;
};
const AddFunds = (currentFunds, difference) => {
	return parseInt(currentFunds) + parseInt(difference);
};

export default {
	AdjustFunds,
};
